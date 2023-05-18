const React = require('react')
const Layout = require('./Layout')
const Album = require('./Album')

function AlbumList({albums}){
    return (
        <Layout>
             <div className='albumList'>
                {albums.map(album=> <Album key={album.id} album={album}/>)}
            </div>
            {/* <script src="/scripts/delete.js" /> */}
        </Layout>
    )
}

module.exports = AlbumList