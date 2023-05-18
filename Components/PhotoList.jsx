const React = require("react");
const Layout = require("./Layout");
const PhotoCard = require("./PhotoCard");

function PhotoList({ title, photos = [] }) {
  return (
    <Layout title={title}>
      <div>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = PhotoList;
