const React = require('react')

function Album({album, user}){
    return (
        
        <div className='albumCard' data-id={album.id}>
        <div className={`divImg${album.id}`}> <img src={album.urlAlbum} alt="alt" className={`img${album.id}`} /></div>
        <h2 className= "albumName">{album.name}</h2>
        <h5 className="descriptionAlbum">{album.description}</h5>
        {user?.id === album?.userId && <>
            <button className={`buttonUpdate b${album.id}`} type='button' data-id={album.id}>update</button>
            <button className={`buttonDelete del${album.id}`} type='button' data-id={album.id}>delete</button>
        </>
        }
        <a href={`/album/${album.id}`}>
        <button className={`buttonPass pass${album.id}`} type='button' data-id={album.id}>pass</button>
        </a>
        


        {/* <FormUpdate car={car} /> */}
    </div>
    )
}

module.exports = Album;