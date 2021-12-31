import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../Redux/UsersList/thunk";
import { State } from "../../Redux";
import { user } from "../../Redux/UsersList/types";
import "./userprofile.css";

const UserLists = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: State) => state.user.userList);
  const loading = useSelector((state: State) => state.user.loading);
  console.log(userList);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <div className="container userList d-flex justify-content-center mt-3">
        <div className="row">
          {userList.map((user: user) => (
            <div className="col-4">
              <div className="card m-3">
                <img
                  src="https://i.imgur.com/wvxPV9S.png"
                  className="card-img-top"
                  alt="picture"
                />
                <div className="card-body">
                  <h4 className="card-title text-success">{user.name}</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b className="text-danger">Address:</b> {user.address.city}
                  </li>
                  <li className="list-group-item">
                    <b className="text-danger">Company:</b> {user.company.name}
                  </li>
                  <li className="list-group-item">
                    <b className="text-danger">Contact:</b> {user.phone}
                  </li>
                  <li className="list-group-item">
                    <b className="text-danger">Email:</b> {user.email}
                  </li>
                  <li className="list-group-item">
                    <b className="text-danger">Website:</b> {user.website}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default UserLists;
