import React, { PropTypes } from 'react';

const ClearBtn = ({ onClick }) => (
  <button onClick={ onClick }>Clear</button>
);

ClearBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ClearBtn
