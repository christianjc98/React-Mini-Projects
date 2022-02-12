import React from "react";
import Message from "./message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) {
    return null;
  }
  return (
    <>
      {lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la canción <em>${search.song}</em>`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric lyrics={lyric.lyrics} title={search.song} />
      )}

      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: No existe el artista ${search.artist}`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
