import React, { useState } from "react";

export default function Converter() {
  let [Centinches, setCentinches] = useState(0);
  let [Output, setOutput] = useState(0);
  let [Meters,setMeters] = useState(0);
  let [Output1, setOutput1] = useState(0);
  let [MeInches, setMeInches] = useState(0)
  let [Output2, setOutput2] = useState(0);
  let [Centft, setCentft] = useState(0)
  let [Output3, setOutput3] = useState(0)
  let [ftcent, setftcent] = useState(0)
  let [Output4, setOutput4] = useState(0)
  let [Kmmiles, setKmmiles] = useState(0)
  let [Output5, setOutput5] = useState(0)

  function Evaluate() {
    setCentinches(0);
    setOutput(Centinches * 0.3937);
    setMeters(0);
    setOutput1(Meters /100);
    setMeInches(0)
    setOutput2(MeInches/0.0254)
    setCentft(0);
    setOutput3(Centft / 30.48)
    setftcent(0);
    setOutput4(ftcent * 30.48)
    setKmmiles(0);
    setOutput5(Kmmiles / 1.609344)

  }
  return (
    <div>
      <h2>Unit Converter</h2>
      <div className="convertPage">
        <div className="converts">Centimeters to inches</div>
        <input
          type="number"
          name="number"
          value={Centinches}
          onInput={(e) => setCentinches(e.target.value)}
        ></input>
        <button onClick={Evaluate}>Convert</button>
        <div className="converts">
          <output name="res">{Output } </output>
        </div>
        <div className="converts">Centimeters to meters</div>
        <input
          type="number"
          name="number"
          value={Meters}
          onInput={(e) => setMeters(e.target.value)}
        >
        </input>
        <button onClick={Evaluate}>Convert</button>
        <div className="converts">
          <output name="res">{Output1 } </output>
        </div>
        <div className="converts">Meters to Inches</div>
        <input
          type="number"
          name="number"
          value={MeInches}
          onInput={(e) => setMeInches(e.target.value)}
        >
        </input>
        <button onClick={Evaluate}>Convert</button>
        <div className="converts">
          <output name="res">{Output2 } </output>
        </div>
        <div className="converts">Centimeters to Feet</div>
        <input
          type="number"
          name="number"
          value={Centft}
          onInput={(e) => setCentft(e.target.value)}
        >
        </input>
        <button onClick={Evaluate}>Convert</button>
        <div className="converts">
         <output name="res">{Output3 } </output>
        </div>
        <div className="converts">Feet to Centimeters</div>
        <input
          type="number"
          name="number"
          value={ftcent}
          onInput={(e) => setftcent(e.target.value)}
        >
        </input>
        <button onClick={Evaluate}>Convert</button>
        <div className="converts">
         <output name="res">{Output4 } </output>
        </div>
        <div className="converts">Kilometer to Miles</div>
        <input
          type="number"
          name="number"
          value={Kmmiles}
          onInput={(e) => setKmmiles(e.target.value)}
        >
        </input>
        <button onClick={Evaluate}>Convert</button>
        <div className="converts">
         <output name="res">{Output5 } </output>
        </div>
      </div>
    </div>
  );
}

    