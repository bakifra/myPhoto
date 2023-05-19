const React = require('react')

function Photo({photo}){
    return (
    
        <div className='photoCard' data-id={photo.id}>
          <div className={`divImg${photo.id}`}> <img src={photo.url} alt="alt" className={`img${photo.id}`} /></div>
          <div className='btnBox'>
            <button className={`buttonUpdate b${photo.id} btnUpd`} type='button' data-id={photo.id}>update</button>
            <button className={`buttonDelete del${photo.id} btnDel`} type='button' data-id={photo.id}>delete</button>
          </div>
    {/* <FormUpdate car={car} /> */}
    </div>
    )
}
module.exports = Photo