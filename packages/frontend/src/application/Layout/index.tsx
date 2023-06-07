import React from "react";
import { Top, Tab, TabItem } from "./style";
import { NavLink, Outlet } from "react-router-dom";

function Home(props: any) {
  return <Outlet />
}

export default React.memo(Home);
