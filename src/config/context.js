import React, { useState, createContext } from "react";

export const UserInfoContext = createContext();

export const ProviderUserInfo = ({ children }) => {
  const [dataUser, setDataUser] = useState({ isLogin: false });

  const dispatch = (action, data) => {
    if (action === "SIGN_IN") {
      setDataUser(data);
    } else if (action === "SIGN_OUT") {
      setDataUser({ isLogin: false });
    }
  };

  console.log(dataUser);

  return (
    <UserInfoContext.Provider
      value={{
        state: dataUser,
        dispatch: dispatch,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
