const photoRouts = require('express').Router()
const {PhotoCard} = require('../../../db/models')
const PhotoPage = require('../../../Components/PhotoCard')

photoRouts.get('/:id', async(req,res)=>{
    try {
        const albumId = req.params.id
        // console.log(albumId);
        const photos = await PhotoCard.findAll({where: {albumId}})
    
        res.send(res.renderComponent(PhotoPage, {photos}))
    } catch (error) {
   
        res.sendStatus(404)
    }
})

module.exports = photoRouts