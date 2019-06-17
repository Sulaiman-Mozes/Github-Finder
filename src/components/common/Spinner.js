import React from 'react';
import spinner from '../../assets/img/spinner.gif';

const Spinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }} >
    <img src={spinner} alt="Loading" style={{ width: '200px' }} />
  </div >
);

export default Spinner;
