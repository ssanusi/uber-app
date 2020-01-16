import React from "react";
import { IS_LOGGED_IN } from "./Query/AuthQuery";
import { useQuery } from "@apollo/react-hooks";
 

const App: React.FC = () => {
  const {
    data,
    loading,
    error
  } = useQuery(IS_LOGGED_IN);

  if (loading) return <span>loading</span>;
  if (error) return <span>{error}</span>;

  return data.auth.isLoggedIn ? (
    <div className="App">
      <div>Welcome to React App</div>
      <span>You are loggedIn</span>
    </div>
  ) : (
    <span>You are Logged Out</span>
  );
};

export default App;
