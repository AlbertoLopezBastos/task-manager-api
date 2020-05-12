const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { setupDatabase, userOneId, userOne } = require('./fixtures/db');

beforeEach(setupDatabase);

test('should sign up new user', async () => {
    const response = await request(app)
        .post('/users')
        .send({
            name: 'Alberto',
            email: 'beto@example.com',
            password: 'MyPass777!'
        })
        .expect(201);

    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Alberto',
            email: 'beto@example.com'
        },
        token: user.tokens[0].token
    });

    expect(user.password).not.toBe('MyPass777!');
});

test('should login existing user', async () => {
    const response = await request(app)
        .post('/users/login')
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .expect(200);

    const user = await User.findById(response.body.user._id);

    expect(user.tokens[1].token).toBe(response.body.token);
});

test('should not login nonexistent user', async () => {
    await request(app)
        .post('/users/login')
        .send({
            email: 'non@non.com',
            password: '9999999999'
        })
        .expect(400);
});

test('should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test('should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
});

test('should delete account for user', async () => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});

test('should not delete acount unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401);
});

test('should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'kim'
        })
        .expect(200)

    const user = await User.findById(userOne);
    expect(user.name).toEqual('kim');
})

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            wrong: 'field'
        })
        .expect(400);
})
