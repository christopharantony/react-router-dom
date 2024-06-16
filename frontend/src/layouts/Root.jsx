import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};

export default Root;
