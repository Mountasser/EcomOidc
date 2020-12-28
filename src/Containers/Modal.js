import React  from "react";

import Modal from 'react-bootstrap/Modal';
import QRCode from 'qrcode.react';
export  const  Qrcode = ({closeModal}) => (
    <Modal
        size="sm"
        show={true}
        onHide={closeModal}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{opacity:1}} >
        <Modal.Header closeButton>
        <Modal.Title>Scan The Qr Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{}}>
          <QRCode value="http://facebook.github.io/react/"/>
          </div>
        </Modal.Body>
      </Modal>
)