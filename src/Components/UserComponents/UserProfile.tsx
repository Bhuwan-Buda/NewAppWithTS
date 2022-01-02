import { useLocation } from "react-router";
import "./style.css";

const UserProfile = () => {
  const location = useLocation();
  const user: any = location.state;
  console.log("userdata from state", user);

  return (
    <div className="container userList d-flex justify-content-center">
        <div className="card">
          <img
            src="https://i.imgur.com/wvxPV9S.png"
            className="card-img-top"
            alt="picture"
          />
          <div className="card-body" >
            <h4 className="card-title text-success text-center">{user.name}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b className="text-danger">Address:</b> {user.address.street}, {user.address.city}
            </li>
            <li className="list-group-item">
              <b className="text-danger">Zip-code:</b> {user.address.zipcode}
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
  );
};

export default UserProfile;
