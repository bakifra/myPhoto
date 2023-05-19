const React = require('react')

function Photo({photo}){
    return (
        <div className='albumCard' data-id={photo.id}>
        <div className={`divImg${photo.id}`}> <img src={photo.url} alt="alt" className={`img${photo.id}`} /></div>
        <h2 className={`descriptionAlbum${photo.id}`}>{photo.description}</h2>
            <button className={`buttonUpdate b${photo.id}`} type='button' data-id={photo.id}>update</button>
            <button className={`buttonDelete del${photo.id}`} type='button' data-id={photo.id} data-album={photo.albumId}>delete</button>

    </div>
    )
}
module.exports = Photo