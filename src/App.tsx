import React, { useState, useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import { COLORS } from './Constants';

const baseNotes = ["C ", "C ", "D ", "E ", "E ", "F ", "F ", "G ", "G ", "A ", "B ", "B "];
const chords: [string, number[]][] = [["", [0, 4, 7]],
                                      ["_M_i", [0, 3, 7]],
                                      ["^7", [0, 4, 7, 10]],
                                      ["_M_i^7", [0, 3, 7, 10]],
                                      ["_M_a^7", [0, 4, 7, 11]]];

function App() {
  const [message, setMessage] = useState("");

  const [currentBaseNote, setCurrentBaseNote] = useState(getRandomInt(12));
  const [currentChord, setCurrentChord] = useState(getRandomInt(chords.length));
  const [selectedArray, setSelectedArray] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    document.documentElement.style.backgroundColor = COLORS.background; // Set your variable color here
  }, []);

  return (
    <div className="App" style={{color: `${COLORS.text}`, backgroundColor: `${COLORS.background}`}}>
      <h1 style={{paddingTop: "50px"}}>Chord Trainer</h1>
      <div className="chord">
        <p className="baseNoteText">{baseNotes[currentBaseNote]}</p>
        <p className="chordText" style={{color: `${COLORS.accent}`}}>{parseSupercript(chords[currentChord][0])}</p>
      </div>
      <div className="tableWrapper">
        <Buttons selectedArray={selectedArray} setSelectedArray={setSelectedArray}/>
        <div className="buttonDiv">
          <div className="buttonGeneral" style={{backgroundColor: `${COLORS.accent2}`}} onClick={() => {submitAnswer(currentBaseNote, currentChord, selectedArray, setMessage)}}>{"Check"}</div>
          <div className="buttonGeneral" style={{backgroundColor: `${COLORS.accent2}`}} onClick={() => {getNextChord(setCurrentBaseNote, setCurrentChord, selectedArray, setSelectedArray, setMessage)}}>{"Next Chord"}</div>
        </div>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

function parseSupercript(str: string): any[] {
  let parse: any[] = [];
  for(let i = 0; i < str.length; i++) {
    if (str[i] === "^") {
      parse.push(<sup key={i}>{str[i+1]}</sup>);
      i++;
    }
    else if (str[i] === "_") {
      parse.push(<sub key={i}>{str[i+1]}</sub>);
      i++;
    }
    else parse.push(<span key={i}>{str[i]}</span>);
  }
  return parse;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) % max;
}

function getNextChord(setCurrentBaseNote: any, setCurrentChord: any, selectedArray: boolean[], setSelectedArray: any, setMessage: any) {
  setCurrentBaseNote(getRandomInt(12));
  setCurrentChord(getRandomInt(chords.length));
  setSelectedArray(selectedArray.map(() => { return false; }));
  setMessage("");
}

function submitAnswer(currentBaseNote: number, currentChord: number, selectedArray: boolean[], setMessage: any) {
  let check: boolean = checkChord(currentBaseNote, currentChord, selectedArray);

  if(check) {
    setMessage("Correct");
  }
  else {
    
    let notes = chords[currentChord][1].map((n: number) => {return (currentBaseNote + n) % 12});
    let strArr: string[] = [];
    for(let i = 0; i < notes.length - 1; i++) strArr.push(baseNotes[notes[i]] + " - ");
    strArr.push(baseNotes[notes[notes.length-1]]);
    setMessage("Wrong :\n\n " + strArr.reduce((accu: string, str: string) => { return accu + str}, ""));
  }
}

function checkChord(baseNote: number, chord: number, selectedArray: boolean[]) {
  let notes = chords[chord][1].map((n) => {return (baseNote + n) % 12});
  if(selectedArray.filter((b: any) => {return b}).length !== notes.length) return false;
  let b: boolean = true;
  notes.forEach((e: number) => {
    if(selectedArray[e] === false) b = false; 
  });
  return b;
}

export default App;
