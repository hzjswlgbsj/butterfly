import React from "react";
import { Top, Tab, TabItem } from "./style";
import { NavLink, Outlet } from "react-router-dom";

function Home(props: any) {
  return (
    <div>
      {/* <Top>s这里是顶部</Top> */}
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
