import { useState } from "react";
import "./App.css";

import Header from "./Component/Header/Header";
import ComponentRoutes from "./Routes/Routes";
import Login from "./Component/Auth/Login";
import { createContext } from "vm";

function App() {
  const [token, setToken] = useState();

  const handelToken = (tokenValue: any) => {
    console.log("token ", tokenValue);
    setToken(tokenValue);
  };

  if (!token) {
    return <Login showLogin={handelToken} />;
  }

  return (
    <>
      <Header />
      <ComponentRoutes userToken={token} />
    </>
  );
}

export default App;
