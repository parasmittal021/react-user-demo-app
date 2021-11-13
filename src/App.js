import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUserList] = useState([]);
  const addTouserList = (user) => {
    setUserList((prevState) => {
      return [...prevState, user];
    });
  };
  return (
    <div>
      <AddUser addToUserList={addTouserList} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
