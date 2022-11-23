import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="flex justify-between bg-black h-20 items-center border-b-2 border-white text-white">
          <div className="font-extrabold text-4xl p-2 m-2 hover:cursor-pointer hover:text-blue-600">
            FreeNews
          </div>
          <div className="list">
            <ul className="flex space-x-4  hover:cursor-pointer">
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/">General</Link>
              </li>
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/business">Business</Link>
              </li>
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/health">Health</Link>
              </li>
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/science">Science</Link>
              </li>
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/sports"> Sports</Link>
              </li>
              <li className="text-2xl font-semibold active:underline active:text-blue-500 hover:text-blue-500">
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
          </div>
          <div className="follow space-x-6 hover:cursor-pointer mr-6">
            <span>
              <i className="fa fa-facebook text-2xl hover:text-blue-600"></i>
            </span>
            <span>
              <i className="fa fa-instagram text-2xl hover:text-pink-400"></i>
            </span>
            <span>
              <i className="fa fa-twitter text-2xl hover:text-blue-400"></i>
            </span>
          </div>
        </nav>
        <hr />
      </>
    );
  }
}

export default Navbar;
