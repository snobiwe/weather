import React, {memo} from 'react';
import './button.css';

// function click () {
//   alert("U CLIKED MAZAFAKA")
// }

const Button = memo(({text}) => {
  return (
    <button class="button">
      <p class="button_text">{text}</p>
    </button>
  )
});

export default Button


// <Button text={'Press on me'} /> ,