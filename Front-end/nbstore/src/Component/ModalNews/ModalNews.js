import { React, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./ModalNews.css";
function ModalNews() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-news">
        <p className="close-modal" onClick={handleClose}>
          [x]
        </p>
        <img
          src="https://www.anphatpc.com.vn/media/banner/popup_back2skul-popup-2-min.png"
          alt="modal__image"
        />
      </Modal>
    </>
  );
}

export default ModalNews;
