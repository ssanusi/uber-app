import React from "react";
import Header from "../../Layout/Header";
import Main from "../../Layout/Main";


interface Props {}

const UnAuthenticatedHomePage: React.FC<Props> = () => {
  return (
    <div>
        <Header />
        <Main />
    </div>
  );
};

export default UnAuthenticatedHomePage;
