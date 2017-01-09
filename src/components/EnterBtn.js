import React, { PropTypes } from 'react';

const EnterBtn = ({ onClick }) => (
  <button onClick={ onClick }>Enter</button>
);

EnterBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default EnterBtn
