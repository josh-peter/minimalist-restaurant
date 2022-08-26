import React from "react";
import { Link} from "react-router-dom";

function Photo({ photo }) {
  return (
    <div className="Photo">
      <div className="Photo-container">
        <Link to={`/posts/${photo.id }` }>
          <img src={photo.url} alt={photo.title} />
          <h2>{photo.title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Photo;
