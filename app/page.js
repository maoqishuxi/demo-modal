"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "react-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>welcome to you</h1>
      <DemoModal />
      <DemoPortal />
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>

        <ModalTest isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Hello from Modal</h2>
          <p>This is some content inside the modal.</p>
        </ModalTest>
      </div>
    </div>
  );
}

const ModalTest = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={buttonStyle} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

// Overlay style
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Modal style
const modalStyle = {
  backgroundColor: "#fff",
  padding: "1em",
  maxWidth: "500px",
  width: "90%",
  borderRadius: "10px",
  position: "relative",
};

// Close button style
const buttonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "1.5em",
};

function DemoPortal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      {showModal &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1em",
                maxWidth: "500px",
                width: "90%",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <button onClick={() => setShowModal(!showModal)}>Close</button>
              <div>I am a modal dialog</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function DemoModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement(document.body);
    }
  }, []);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            color: "lightsteelblue",
            width: "50%",
            height: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
      >
        <h1>模态框标题</h1>
        <div>模态框内容</div>
        <button onClick={() => setModalIsOpen(false)}>关闭模态框</button>
      </Modal>
    </div>
  );
}
