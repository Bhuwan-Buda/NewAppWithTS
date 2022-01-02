import { useSelector } from "react-redux";
import { State } from "../../Redux";
import { useState } from "react";
import Modal from "./Modal";

const Dashboard = () => {
  console.log("Dashboard loaded");
  const data = useSelector((state: State) => state.data.saveData);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="text-center dashboard">
      <h1 className="text-primary text-center m-3">Welcome to dashboard.</h1>
      <button
        className="btn btn-outline-success btn-sm"
        title="View Data"
        onClick={showModal}
      >
        View Data
      </button>
      <Modal show={show} handleClose={hideModal}>
        <ol>
          {data.map((data: string) => (
            <li key={Math.random()} className="text-success fs-5">
              {data}
            </li>
          ))}
        </ol>
      </Modal>
    </div>
  );
};

export default Dashboard;
