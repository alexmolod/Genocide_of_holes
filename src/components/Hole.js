import React from 'react';

const Hole = (props) => {
  let className = props.active ? 'hole-red' : 'hole';
  return (
    <div onClick={props.onClick} className={className} />
   );
};


export default Hole;
