import React from 'react';
import './SelectableButton.css';

function Buttons(props: any) {
    return (
        <div className="selectableButton">
            <div className="sbTextHolder"><p>{props.text}</p></div>
            <div className="sbBackground"></div>
        </div>
    );
  }
  
  export default Buttons;