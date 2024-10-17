import React, { useRef, useState } from "react";

function App() {
  const [num, setNum] = useState({
    zero: "",
    one: "",
    two: "",
    three: "",
  });
  const zeroRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  function changeNum(e) {
    setNum({ ...num, [e.target.name]: e.target.value });
    if (e.target.value == "") {
      return;
    }
    if (e.target.name == "zero") {
      oneRef.current.focus();
    } else if (e.target.name == "one") {
      twoRef.current.focus();
    } else if (e.target.name == "two") {
      threeRef.current.focus();
    }
  }
  function evaluate() {
    let ans = "1234";
    let user_ans = num["zero"] + num["one"] + num["two"] + num["three"];
    if (ans == user_ans) {
      alert("correct");
    } else {
      alert("inCorrect");
    }
  }
  function back(e) {
    if (e.key == "Backspace") {
      if (e.target.name == "one") {
        zeroRef.current.focus();
      } else if (e.target.name == "two") {
        oneRef.current.focus();
      } else if (e.target.name == "three") {
        twoRef.current.focus();
      }
    }
  }

  return (
    <div>
      FrontEndEval
      <form onSubmit={evaluate}>
        <div className="flex gap-5 m-3">
          <input
            type="number"
            ref={zeroRef}
            value={num["zero"]}
            name="zero"
            className="bg-pink-400 w-10 h-10"
            min={0}
            max={9}
            onKeyUp={(e) => changeNum(e)}
            onChange={(e) => changeNum(e)}
          />
          <input
            ref={oneRef}
            type="number"
            className="bg-pink-400 w-10 h-10"
            value={num["one"]}
            onChange={(e) => changeNum(e)}
            min={0}
            max={9}
            name="one"
            onKeyUp={(e) => back(e)}
          />
          <input
            ref={twoRef}
            type="number"
            className="bg-pink-400 w-10 h-10"
            value={num["two"]}
            onChange={(e) => changeNum(e)}
            min={0}
            max={9}
            name="two"
            onKeyUp={(e) => back(e)}
          />
          <input
            ref={threeRef}
            type="number"
            className="bg-pink-400 w-10 h-10"
            value={num["three"]}
            onChange={(e) => changeNum(e)}
            min={0}
            name="three"
            max={9}
            onKeyUp={(e) => back(e)}
          />
        </div>
        <button className="bg-red-950 p-1 rounded-sm m-3 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
