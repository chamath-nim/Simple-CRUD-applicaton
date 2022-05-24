import "./topbar.css";
import img1 from "./my.jpg";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin-in"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="topLink" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="topLink" to="./task1">
              TASK 1
            </Link>
          </li>
          <li className="topListItem">
            <Link className="topLink" to="./task2">
              TASK 2
            </Link>
          </li>
          <li className="topListItem">
            <Link className="topLink" to="./task3">
              TASK 3
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img className="imgTop" src={img1} alt="" />
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
