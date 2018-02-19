import React from 'react';
import PropTypes from 'prop-types';

const Posts = props => (
  <ul>
    {props.posts.map(({ id, title }) => (
      <li key={id}>{title}</li>
    ))}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
