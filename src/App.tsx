import React from "react";
import { IS_LOGGED_IN } from "./Query/AuthQuery";
import { useQuery } from "@apollo/react-hooks";

const App: React.FC = () => {
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  return (
    <div className="App">
      <div>Welcome to React App</div>
      <div>{JSON.stringify(data)}</div>
      <div>{loading}</div>
      <div>{error}</div>
    </div>
  );
};

export default App;
