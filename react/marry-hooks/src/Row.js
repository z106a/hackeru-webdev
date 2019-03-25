import React from 'react';

export default function Row(props) {
  return (
    <div className='row'>
      <div className="row__container">
        <h4 className="row__label">{props.label}</h4>
        {props.children}
      </div>
    </div>
  )
}