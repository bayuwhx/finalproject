'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Jam Tangan Casio',
        price: 250000,
        description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        images: "https://Images",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jam Tangan Casio',
        price: 250000,
        description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        images: "https://Images",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jam Tangan Casio',
        price: 250000,
        description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        images: "https://Images",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jam Tangan Casio',
        price: 250000,
        description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        images: "https://Images",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jam Tangan Casio',
        price: 250000,
        description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        images: "https://Images",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jam Tangan Casio',
        price: 250000,
        description: "lorem ipsum Elit eu voluptate sunt aute aute dolore. Eu aliqua laborum veniam quis cillum deserunt amet elit ullamco esse qui. Nostrud incididunt incididunt occaecat tempor.",
        images: "https://Images",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
