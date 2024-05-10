import React from 'react';
import './Buttons.css';
import SelectableButton from './SelectableButton';

function Buttons() {
    return (
        <div>
            <table className="buttonsTable">
                <tbody>
                    <tr>
                        {Array.from({ length: 28 }, (_, i) => ( <th key={"col:"+i}> </th> ))}
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                        <td colSpan={4}><SelectableButton text="C#"/></td>
                        <td colSpan={4}><SelectableButton text="D#"/></td>
                        <td colSpan={4}></td>
                        <td colSpan={4}><SelectableButton text="F#"/></td>
                        <td colSpan={4}><SelectableButton text="G#"/></td>
                        <td colSpan={4}><SelectableButton text="Bb"/></td>
                        <td colSpan={2}></td>
                    </tr>
                    <tr>
                        <td colSpan={4}><SelectableButton text="C"/></td>
                        <td colSpan={4}><SelectableButton text="D"/></td>
                        <td colSpan={4}><SelectableButton text="E"/></td>
                        <td colSpan={4}><SelectableButton text="F"/></td>
                        <td colSpan={4}><SelectableButton text="G"/></td>
                        <td colSpan={4}><SelectableButton text="A"/></td>
                        <td colSpan={4}><SelectableButton text="B"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
  
  export default Buttons;