import React from 'react';
import './Buttons.css';
import SelectableButton from './SelectableButton';

function Buttons({selectedArray, setSelectedArray}: any) {
    return (
        <div>
            <table className="buttonsTable">
                <tbody>
                    <tr>
                        {Array.from({ length: 14 }, (_, i) => ( <th key={"col:"+i}> </th> ))}
                    </tr>
                    <tr>
                        <td colSpan={1}></td>
                        <td colSpan={2}><SelectableButton text="C#" id={1} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="D#" id={3} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}></td>
                        <td colSpan={2}><SelectableButton text="F#" id={6} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="G#" id={8} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="Bb" id={10} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={1}></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><SelectableButton text="C" id={0} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="D" id={2} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="E" id={4} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="F" id={5} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="G" id={7} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="A" id={9} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                        <td colSpan={2}><SelectableButton text="B" id={11} selectedArray={selectedArray} setSelectedArray={setSelectedArray}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
  
  export default Buttons;