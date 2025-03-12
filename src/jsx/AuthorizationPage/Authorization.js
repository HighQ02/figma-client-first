import React from 'react';
import Register from './Register';
import Clock from './Clock';
import Timer from './Timer';
import Quizizz from './Quizizz';

function Authorization() {
  return (
    <div className="Authorization">
        <Clock />
        <Register />
        <Timer />
        <Quizizz />
    </div>
  );
}

export default Authorization;
