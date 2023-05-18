'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const albumData = [
      {
        name: 'Живчики',
        description: 'Встретил по дороге в кампус',
        urlAlbum: ' https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/12/top-ehkzoticheskie-zhivotnye-dlya-doma-960h540-960x540.jpg',
        userId: 1,
      },
      {
        name: 'Лесок',
        description: 'От Волги до Енисея',
        urlAlbum: 'https://old.bigenc.ru/media/2016/10/27/1235208547/19117.jpg',
        userId: 2,
      },
      {
        name: 'Фрукты',
        description: 'Альбом с фруктами, а я овощ',
        urlAlbum: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEu5P6wqv9IT9tPHTaaBWjiYuJfpCgKhSj4A&usqp=CAU',
        userId: 3,
      },
    ];
    const albums = albumData.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Albums', albums);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Albums');
  },
};
