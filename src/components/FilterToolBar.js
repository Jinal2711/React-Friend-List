import React from "react";
import { Button, Form } from "react-bootstrap";

function FilterToolBar({ sortByFavorite, onSortByFavorite, onAddFriendClick }) {
  return (
    <div className="mb-3 ml-3 d-flex justify-content-between">
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Sort by favorite"
        checked={sortByFavorite}
        onChange={(e) => onSortByFavorite(e.target.checked)}
      />
      <Button
        variant="outline-primary"
        className="filter-btn"
        onClick={onAddFriendClick}
      >
        Add Friend
      </Button>
    </div>
  );
}
export default FilterToolBar;
