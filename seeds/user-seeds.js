
const User = require('../models/Game'); // Adjust the path if needed

const seedUserData = [
  // Add your seed data here
  // Example:
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1',
    description: 'User 1 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2',
    description: 'User 2 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
    password: 'password3',
    description: 'User 3 description',
    pfp: './imgs/profiles/default-one.png',
  },
  // Add more seed data here
  {
    username: 'user4',
    email: 'user4@example.com',
    password: 'password4',
    description: 'User 4 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user5',
    email: 'user5@example.com',
    password: 'password5',
    description: 'User 5 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user6',
    email: 'user6@example.com',
    password: 'password6',
    description: 'User 6 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user7',
    email: 'user7@example.com',
    password: 'password7',
    description: 'User 7 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user8',
    email: 'user8@example.com',
    password: 'password8',
    description: 'User 8 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user9',
    email: 'user9@example.com',
    password: 'password9',
    description: 'User 9 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user10',
    email: 'user10@example.com',
    password: 'password10',
    description: 'User 10 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user11',
    email: 'user11@example.com',
    password: 'password11',
    description: 'User 11 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user12',
    email: 'user12@example.com',
    password: 'password12',
    description: 'User 12 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user13',
    email: 'user13@example.com',
    password: 'password13',
    description: 'User 13 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user14',
    email: 'user14@example.com',
    password: 'password14',
    description: 'User 14 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user15',
    email: 'user15@example.com',
    password: 'password15',
    description: 'User 15 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user16',
    email: 'user16@example.com',
    password: 'password16',
    description: 'User 16 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user17',
    email: 'user17@example.com',
    password: 'password17',
    description: 'User 17 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user18',
    email: 'user18@example.com',
    password: 'password18',
    description: 'User 18 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user19',
    email: 'user19@example.com',
    password: 'password19',
    description: 'User 19 description',
    pfp: './imgs/profiles/default-one.png',
  },
  {
    username: 'user20',
    email: 'user20@example.com',
    password: 'password20',
    description: 'User 20 description',
    pfp: './imgs/profiles/default-one.png',
  },
];

const seedUser = () => User.bulkCreate(seedUserData);

module.exports = seedUser;
