import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getPlaceholder = (event) => {
  event.target.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.onlinelabels.com%2FHandlers%2FFileHandler.ashx%3FClipArtID%3D117281%26File%3Dimages%252fclip-art%252fMrTossum%255cmusical%2Bnote-170848.png&f=1&nofb=1';
};

const Album = ({ id, name, cover }) => {
  return (
    <section>
      <img src={cover} onError={getPlaceholder}/>
      <Link to={`/recordings/${id}`}><h3>Name: {name}</h3></Link>
    </section>
  );
};

Album.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default Album;
