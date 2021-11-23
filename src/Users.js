import { useState, useEffect } from "react";
import axios from "axios";
import NewUser from "./NewUser";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  // when the component mounts(ie renders to Dom)
  // I want grab my data from reqres site
  // the empty array makes this(the function we passed useEffect) run only on mount
  // useEffect(callbackFuntion, [])
  useEffect(() => {
    // do stuff when component mounts
    console.log("mounted");
    getUsers();
  }, []);

  const addUser = (user) => {
    // TODO: STEP 1 add the user (from the form) to DB:  skip today

    // STEP 2 is update the UI
    // non-mutating way users.push(user) doesn't work
    let newUserArray = [user, ...users];
    setUsers(newUserArray);
  };
  const deleteUser = (id) => {
    console.log("delete here");
    console.log(id);
    //TODO:LATER api call delete user from db

    // remove user from UI
    let filterUsers = users.filter((u) => u.id !== id);
    setUsers(filterUsers);
  };

  const getUsers = async () => {
    // this where need API call (use axios)
    // pauses code right here an waits for api call to finish
    let response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
    setUsers(response.data.data);
  };

  const renderUsers = () => {
    if (users.length === 0) {
      return <p>No Users</p>;
    }
    return users.map((user) => {
      return (
        <div key={user.id} className="user-container">
          <h1>
            {user.first_name} {user.last_name}
          </h1>
          <p>{user.email}</p>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      );
    });
  };
  return (
    <div className="users">
      <p>users here</p>
      <NewUser x={addUser} />
      <div className="users-list">{renderUsers()}</div>
    </div>
  );
};

export default Users;
