import "./task1.css";
import { useRef } from "react";

export default function Task1() {
  const inputRef = useRef(null);

  function handleClick() {
    const final = inputRef.current.value.split(" ").join("").split("-");

    for (let index = 0; index < final.length; index++) {
      if (final[index] === "") {
        final.splice(index, 1);
        index--;
      }
    }

    if (final.length === 3 || final.length === 2) {
      if (!isNaN(final[0]) && final[1].includes("ශ්‍රී") && !isNaN(final[2])) {
        document.getElementById("check1").innerHTML = "It's a vintage vehicle";
      } else if (!isNaN(final[0]) && !isNaN(final[1]) && final.length === 2) {
        document.getElementById("check1").innerHTML = "It's a old vehicle";
      } else if (
        isNaN(final[0]) &&
        !/\d/.test(final[0]) &&
        !isNaN(final[1]) &&
        final.length === 2
      ) {
        document.getElementById("check1").innerHTML = "It's a modern vehicle";
      } else
        document.getElementById("check1").innerHTML =
          "It's not a valid plate number";
    } else
      document.getElementById("check1").innerHTML =
        "It's not a valid plate number";
  }

  return (
    <div className="main">
      <h1>License plate category detector</h1>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        autoComplete="off"
        placeholder="Enter license plate number"
      />

      <button className="submit" onClick={handleClick}>
        Submit
      </button>
      <p id="check1"></p>
    </div>
  );
}
