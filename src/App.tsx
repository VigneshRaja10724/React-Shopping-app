import { useState } from "react";
import "./App.css";

import Header from "./Component/Header/Header";
import ComponentRoutes from "./Routes/Routes";
import Login from "./Component/Auth/Login";
import { createContext } from "vm";

function App() {
  const [token, setToken] = useState();

  const handelToken = (tokenValue: any) => {
    setToken(tokenValue);
    console.log("token ", tokenValue);
  };

  if (!token) {
    return <Login showLogin={handelToken} />;
  }

  return (
    <>
      <Header />
      <ComponentRoutes userToken />
    </>
  );
}

export default App;
