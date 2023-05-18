'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const photoCardsData = [
      {
        url: 'https://s15.stc.all.kpcdn.net/family/wp-content/uploads/2022/12/top-ehkzoticheskie-zhivotnye-dlya-doma-960h540-960x540.jpg',
        albumId: 1,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRcB7W18iCqk8RrKEz52KE5uazpb2zOonvA&usqp=CAU',
        albumId: 1,
      },
      {
        url: 'https://n1s2.hsmedia.ru/bb/77/9d/bb779dbc46cdc314f5205ebcaccd0d1d/1920x1006_0xac120003_13655174941644930933.jpeg',
        albumId: 1,
      },
      {
        url: 'https://old.bigenc.ru/media/2016/10/27/1235208547/19117.jpg',
        albumId: 2,
      },
      {
        url: 'https://old.bigenc.ru/media/2016/10/27/1235208475/19119.jpg',
        albumId: 2,
      },
      {
        url: 'https://relax-fm.ru/proxy/vardata/modules/news/files/1/441/news_file_441_5dadd965d5e57.jpg?w=1020&h=680&t=1571674380',
        albumId: 2,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEu5P6wqv9IT9tPHTaaBWjiYuJfpCgKhSj4A&usqp=CAU',
        albumId: 3,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXEJB6U36LvTxMOUndvthF-aI40KuWjHIjQ&usqp=CAU',
        albumId: 3,
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0Ppg3uCAuBMe5LHqr7LaIAg-hLg-3Ti73w&usqp=CAU',
        albumId: 3,
      },
    ];
    const photos = photoCardsData.map((one) => ({
      ...one,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("PhotoCards", photos);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("PhotoCards");
  },
};
