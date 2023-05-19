const mainRouts = require('express').Router()

const {Album} = require('../../db/models')

const AlbumList = require('../../Components/AlbumList')

mainRouts.get('/', async(req,res)=>{
    try {
        const albums = await Album.findAll()
        res.send(res.renderComponent(AlbumList, {albums}))
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

module.exports = mainRouts