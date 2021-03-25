import React, { useEffect, useState } from "react";
import { Button, ListGroup, Pagination } from "react-bootstrap";
import paginate from "./paginate";

function List({ friends, markFavorite, deleteFriend }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);
  const [pages, setPages] = useState([]);
 
  useEffect(() => {
    if (friends.length === 0) return;
    const { items, newCurrentPage, pages } = paginate(friends, currentPage);

    if (newCurrentPage !== currentPage) {
      setCurrentPage(newCurrentPage);
    }
    setCurrentPageItems(items);
    setPages(pages);
  }, [currentPage, friends]);

  return (
    <>
      <ListGroup>
        {currentPageItems.map((friend, index) => {
          return (
            <ListGroup.Item key={index}>
              {friend.name}

              <Button
                variant={friend.isFavorite ? "warning" : "secondary"}
                className="control-btns"
                onClick={() => markFavorite(friend.id)}
              >
                <span className="fa fa-star"></span>
              </Button>
              <Button
                variant="danger"
                className="control-btns"
                onClick={() => deleteFriend(friend.id)}
              >
                <span className="fa fa-trash"></span>
              </Button>
              <div className="tag-text">is your friend</div>
            </ListGroup.Item>
          );
        })}
        <ListGroup.Item>
          <Pagination>
            {pages.map((p) => (
              <Pagination.Item
                active={p === currentPage}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </Pagination.Item>
            ))}
          </Pagination>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default List;
