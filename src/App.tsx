import React from "react";
import { IS_LOGGED_IN } from "./Query/AuthQuery";
import { useQuery } from "@apollo/react-hooks";
import AppRoute from "./Router/AppRoute";


const App: React.FC = () => {
  const {
    data,
    loading,
    error
  } = useQuery(IS_LOGGED_IN);

  if (loading) return <span>loading</span>;
  if (error) return <span>{error}</span>;

  return <AppRoute isLoggedIn={data.IsLoggedIn} />
};

export default App;
