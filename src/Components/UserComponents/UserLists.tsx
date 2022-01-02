import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../Redux/UsersList/thunk";
import { State } from "../../Redux";
import { user } from "../../Redux/UsersList/types";
import "./style.css";
import { Link } from "react-router-dom";
import userImage from "../../Assets/user.png";

const UserLists = () => {
  console.log("Userlist page loaded.");
  const dispatch = useDispatch();
  const userList = useSelector((state: State) => state.user.userList);
  const loading = useSelector((state: State) => state.user.loading);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <div className="container userList d-flex justify-content-center ">
      {loading ? (
        <div className="spin"></div>
      ) : (
        <div className="row">
          {userList.map((user: user) => (
            <div className="col-4" key={user.id}>
              <div className="card m-3 p-2">
                <img src={userImage} className="card-img-top" alt="picture" />
                <div className="card-body">
                  <h4 className="card-title text-center text-success">
                    {user.name}
                  </h4>
                  <h6 className="text-danger text-center">{user.address.city}</h6>
                </div>
                <Link
                  to={`/users_list/${user.id}`}
                  state={user}
                  className="btn btn-success btn-sm"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserLists;
