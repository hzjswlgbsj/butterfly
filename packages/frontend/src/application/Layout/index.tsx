import React from "react";
import { Outlet } from "react-router-dom";

function Layout(props: any) {
  return <Outlet />
}

export default React.memo(Layout);
