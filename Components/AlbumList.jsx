const React = require("react");
const Layout = require("./Layout");
const Album = require("./Album");

function AlbumList({ albums, user }) {
  return (
    <Layout user={user}>
      <div className="albumList">
        {albums.map((album) => (
          <Album key={album.id} album={album} user={user} />
        ))}
      </div>
      {/* <script src="/scripts/delete.js" /> */}
    </Layout>
  );
}

module.exports = AlbumList;
