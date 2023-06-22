import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

// React component functions should start with capital letter
// When this function is used as a component in HTML code needs to differentiate from existing HTML elements
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHanler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <h2>Price : {props.price}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        {modalIsOpen ? (
          <Modal onCancel={closeModalHanler} onConfirm={closeModalHanler} />
        ) : null}
        {modalIsOpen && <Backdrop onClick={closeModalHanler} />}
      </div>
    </div>
  );
}

export default Todo;
