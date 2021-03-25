import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Form,
} from "react-bootstrap";

function AddFriendModal({ show, onClose, saveFriend }) {
  const [addFriendName, setAddFriendName] = useState("");

  useEffect(() => {
    !show && setAddFriendName("");
  }, [show])

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Friend</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={addFriendName}
            onInput={(e) => setAddFriendName(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
          </Button>
        <Button variant="primary" onClick={() => saveFriend(addFriendName)}>
          Save
          </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default AddFriendModal;