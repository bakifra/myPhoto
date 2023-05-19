const React = require('react')
const Layout = require('./Layout')
const Photo = require('./Photo')
function PhotoPage({photos}){
    return (
        <Layout >
        <div className='albumList photoList' >
           {photos.map(photo=> <Photo key={photo.id} photo={photo}/>)}
       </div>
       {/* <script src="/scripts/delete.js" /> */}
   </Layout>
    )
}
module.exports = PhotoPage