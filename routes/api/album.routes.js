const albumRouter = require('express').Router();
const { Album, PhotoCard } = require('../../db/models');

albumRouter.delete('/:idAlbums', async (req, res) => {
  try {
    const proveDelete = await Album.destroy({
      where: { id: req.params.idAlbums },
    });
    res.json({ proveDelete });
  } catch ({ message }) {
    res.json({ message });
  }
});

albumRouter.delete('/:idAlbums/:idPhotoCard', async (req, res) => {
  try {
    const proveDelete = await PhotoCard.destroy({
      where: { albumId: req.params.idAlbums, id: req.params.idPhotoCard },
    });
    res.json({ proveDelete });
  } catch ({ message }) {
    res.json({ message });
  }
});


module.exports = albumRouter;
