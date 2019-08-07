import React from 'react';

const Song = ({song}) => {
  if (!song ) return null;
  return (
    <div>

        <h3>{song.feed.entry.["title"].label}</h3>

      </div>
  )
}




export default Song;
