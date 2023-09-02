"use client";

import { useState, useEffect } from "react";
import Modal from "react-modal";

export default function Home() {
  return (
    <div>
      <h1>welcome to you</h1>
      <DemoModal />
    </div>
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
