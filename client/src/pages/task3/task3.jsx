import "./task3.css";
import { useRef, useEffect, useState } from "react";
import Axios from "axios";

export default function Task3() {
  const inputRef = useRef(null);
  const [plateList, setPlateList] = useState([]);
  const [newPlate, setNewPlate] = useState("");
  const [plateNum, setPlateNum] = useState("");

  function handleClick() {
    const final = inputRef.current.value.split(" ").join("").split("-");
    var finalNum;

    for (let index = 0; index < final.length; index++) {
      if (final[index] === "") {
        final.splice(index, 1);
        index--;
      }
    }

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
        finalNum = final.join("-");
      } else if (
        !isNaN(final[0]) &&
        !isNaN(final[1]) &&
        final.length === 2 &&
        /^\d{1,3}$/.test(final[0]) &&
        /^\d{4}$/.test(final[1])
      ) {
        document.getElementById("check2").innerHTML =
          "It's a valid license plate";
        finalNum = final.join("-");
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
        finalNum = final.join("-");
      } else
        document.getElementById("check2").innerHTML =
          "It's not a valid license plate";
    }
    return finalNum;
  }

  useEffect(() => {
    console.log("ok");
    Axios.get("http://localhost:3001/api/get/").then((response) => {
      setPlateList(response.data);
    });
  }, []);

  const submission = () => {
    var num = handleClick();
    if (typeof num !== "undefined") {
      console.log(num);
      Axios.post(`http://localhost:3001/api/insert/${num}`);
    } else console.log("it is undefined");

    setPlateList([...plateNum, { plate_number: plateNum }]);
  };

  const deletePlate = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

  const updatePlate = (plate) => {
    console.log(plate, newPlate);
    Axios.put(`http://localhost:3001/api/update/${newPlate}/${plate}`, {
      plateNum: plate,
    });
    setNewPlate("");
  };

  return (
    <div className="main">
      <h1>CRUD Application for license plates</h1>
      <input
        ref={inputRef}
        type="text"
        className="message"
        autoComplete="off"
        placeholder="Enter license plate number"
      />

      <button className="submit" onClick={submission}>
        Submit
      </button>
      <p id="check2"></p>

      {plateList.map((val) => {
        return (
          <div className="card">
            <h4>{val.plate_number}</h4>

            <button
              onClick={() => {
                deletePlate(val.plate_number);
              }}
            >
              Delete
            </button>
            <input
              type="text"
              id="updateInput"
              onChange={(e) => {
                setNewPlate(e.target.value);
              }}
            />
            <button
              onClick={() => {
                updatePlate(val.plate_number);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}
