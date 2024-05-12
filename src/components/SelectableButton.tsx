import React, { useState, useEffect } from 'react';
import './SelectableButton.css';
import { COLORS } from '../Constants';

function Buttons({text, id, selectedArray, setSelectedArray}: any) {
    let color = GetColor(selectedArray, id);
    return (
        <div className="selectableButton" onClick={() => {SelectThisButton(selectedArray, setSelectedArray, id);}}>
            <div className="sbBackground" style={{backgroundColor: `${color}`}}>
                <div className="sbTextHolder"><p>{text}</p></div>
            </div>
        </div>
    );
}

function GetColor(selectedArray: any, id: any): string {
    return selectedArray[id] ? COLORS.accent : "#777777";
}

function SelectThisButton(selectedArray: any, setSelectedArray: any, id: any) {
    let temp = selectedArray.map((e: any) => {return e});
    temp[id] = !temp[id];
    setSelectedArray(temp);
}
  
export default Buttons;