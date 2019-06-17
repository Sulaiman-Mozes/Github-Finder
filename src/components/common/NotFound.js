import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ title, message }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: '70vh'
  }}>
    <div>
      <h1>{title}</h1>
      <p className="lead">{message}</p>
    </div>
  </div>
)
NotFound.propTypes ={
  title: PropTypes.string,
  message: PropTypes.string
}

NotFound.defaultProps = {
  title: 'Page Not Found',
  message: 'Page you are trying to access does not exist...'
}

export default NotFound;
