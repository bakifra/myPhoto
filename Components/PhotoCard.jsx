const React = require("react");

function PhotoCard({ photo }) {
  return (
    <div>
        <img src={photo.url}> </img>
        <btn> del </btn>
        <btn> fav </btn>
    </div>
  );
}
module.exports = PhotoCard; 