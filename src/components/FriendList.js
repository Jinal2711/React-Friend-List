import React, { useEffect, useMemo, useState } from "react";
import {
  FormControl,
  InputGroup,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import List from "./List";
import AddFriendModal from "./AddFriendModal";
import FilterToolBar from "./FilterToolBar";
import SearchBar from "./SearchBar";
import mockData from "../MockData";

function FriendList() {
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);

  const [friendList, setFriendList] = useState(mockData);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [sortByFavorite, setSortByFavorite] = useState(false);

  const saveFriend = (friendName) => {
    setFriendList([
      ...friendList,
      {
        id: friendList.length + 1,
        name: friendName,
        isFavorite: false,
      },
    ]);
    setShowAddFriendModal(false);
  };

  const markFavorite = (id) => {
    let copyFriends = [...friendList];
    const friendObj = copyFriends.find((friend) => friend.id == id);
    friendObj.isFavorite = !friendObj.isFavorite;
    setFriendList(copyFriends);
  };

  const deleteFriend = (id) => {
    let copyFriends = [...friendList];
    const index = copyFriends.findIndex((friend) => friend.id == id);
    copyFriends.splice(index, 1);
    setFriendList(copyFriends);
  };

  const filteredFriends = useMemo(() => {
    let copyFriends = [...friendList];
    if (sortByFavorite) {
      copyFriends = copyFriends.sort((a, b) => b.isFavorite - a.isFavorite);
    }
    if (searchTerm) {
      copyFriends = copyFriends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return copyFriends;
  }, [sortByFavorite, friendList, searchTerm]);

  return (
    <>
      <SearchBar
        onInput={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <FilterToolBar
       sortByFavorite={sortByFavorite}
       onSortByFavorite={(val) => setSortByFavorite(val)}
        onAddFriendClick={() => setShowAddFriendModal(true)}
      />
      <List
        friends={filteredFriends}
        markFavorite={markFavorite}
        deleteFriend={deleteFriend}
        key={filteredFriends}
      />
      <AddFriendModal
        show={showAddFriendModal}
        onClose={() => setShowAddFriendModal(false)}
        saveFriend={saveFriend}
      />
    </>
  );
}
export default FriendList;
