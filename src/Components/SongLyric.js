import React from "react";

const SongLyric = ({ title, lyrics }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section>
      <h3>{capitalize(title)}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </section>
  );
};

export default SongLyric;
