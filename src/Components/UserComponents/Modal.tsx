import "./style.css";

type modalProps = {
  handleClose: any;
  show: boolean;
  children: React.ReactNode;
};
const Modal = ({ handleClose, show, children }: modalProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button
          title="Close"
          id="closeBtn"
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={handleClose}
        >
          &times;
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
