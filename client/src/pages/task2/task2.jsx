import "./task2.css";
import { useRef } from "react";

export default function Task2() {
  const inputRef = useRef(null);

  function handleClick() {
    const final = inputRef.current.value.split(" ").join("").split("-");

    for (let index = 0; index < final.length; index++) {
      if (final[index] === "") {
        final.splice(index, 1);
        index--;
      }
    }

    console.log(JSON.stringify(final));

    var test = "aACf";
    // console.log(/^[0-9]{4}$/.test(test));
    // console.log(/^[0-9]{1,2}$/.test(test));
    console.log(/^[a-zA-Z]{1,3}$/.test(test));

    if (final.length === 3 || final.length === 2) {
      if (
        !isNaN(final[0]) &&
        final[1].includes("ශ්‍රී") &&
        !isNaN(final[2]) &&
        /^\d{1,2}$/.test(final[0]) &&
        /^\d{4}$/.test(final[2])
      ) {
        document.getElementById("check2").innerHTML =
          "It's a valid license plate";
      } else if (
        !isNaN(final[0]) &&
        !isNaN(final[1]) &&
        final.length === 2 &&
        /^\d{1,3}$/.test(final[0]) &&
        /^\d{4}$/.test(final[1])
      ) {
        document.getElementById("check2").innerHTML =
          "It's a valid license plate";
      } else if (
        isNaN(final[0]) &&
        !/\d/.test(final[0]) &&
        !isNaN(final[1]) &&
        final.length === 2 &&
        /^\d{4}$/.test(final[1]) &&
        /^[a-zA-Z]{2,3}$/.test(final[0])
      ) {
        document.getElementById("check2").innerHTML =
          "It's a valid license plate";
      } else
        document.getElementById("check2").innerHTML =
          "It's not a valid license plate";
    }
  }

  return (
    <div className="main">
      <h1>License plate validator</h1>

      <input
        ref={inputRef}
        type="text"
        name="message"
        autoComplete="off"
        placeholder="Enter license plate number"
      />

      <button className="submit" onClick={handleClick}>
        Submit
      </button>
      <p id="check2"></p>
    </div>
  );
}
