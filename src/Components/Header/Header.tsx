import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../Redux";
import { logoutFunction } from "../../Redux/Authentication/thunk";
import { saveDataFunction } from "../../Redux/SaveData/thunk";
import "./style.css";

const Header = () => {
  console.log("Header loaded");
  const value = useSelector((state: State) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <h6 className="navbar-brand">Welcome</h6>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white text-white"></span>
        </button>

        {value ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users_list" className="nav-link active">
                  UserList
                </Link>
              </li>
            </ul>
            <React.Fragment>
              <input
                className="form-control m-2"
                type="text"
                placeholder="Enter some data..."
                value={data}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setData(event.target.value)
                }
              />
              <button
                className="btn btn-outline-success"
                title="save data"
                type="button"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  if (data.length === 0) {
                    alert("Please enter some data!!!");
                    return;
                  }
                  dispatch(saveDataFunction(data));
                  setData("");
                }}
              >
                Save
              </button>
              <button
                className="btn btn-outline-danger"
                title="Logout"
                onClick={() => dispatch(logoutFunction())}
              >
                <i className="fas fa-power-off"></i>
              </button>
            </React.Fragment>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
