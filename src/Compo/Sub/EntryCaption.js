import React from "react";

function EntryCaption({head_caption}) {
  return (
    <div className="entry-caption">
      <h1>{head_caption}</h1>
      <p>
        Meet new <strong>friends!</strong> Make <strong>friends!</strong>
      </p>
    </div>
  );
}

export default EntryCaption;
