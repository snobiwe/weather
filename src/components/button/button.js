import React, {memo} from 'react';
import './button.css';

function click () {
  alert("U CLIKED MAZAFAKA")
}

const Button = memo(({text}) => {
  return (
    <button class="button" onClick={click}>
      <p class="button_text">{text}</p>
    </button>
  )
});

export default Button


