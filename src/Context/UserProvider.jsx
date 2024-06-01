import React, { createContext, useState } from "react";

export const UserContext = createContext();
function UserProvider({ children }) {
  const [AllUsers, setAllUsers] = useState([]);
  const [changeFlag, setChangeFlag] = useState(true);

  function handleChangeFlag() {
    if (changeFlag) {
      setChangeFlag(() => false);
    } else {
      setChangeFlag(() => true);
    }
  }

  function handleAllUsers(data) {
    setAllUsers(() => [...AllUsers, ...data]);
  }

  function deleteUsers(email) {
    setAllUsers(AllUsers.filter((e) => e.Email !== email));
  }
  return (
    <UserContext.Provider
      value={{
        AllUsers,
        handleAllUsers,
        changeFlag,
        handleChangeFlag,
        deleteUsers,
        setAllUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
