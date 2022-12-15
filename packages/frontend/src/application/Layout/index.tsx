import React from "react";
import { Top, Tab, TabItem } from "./style";
import { NavLink, Outlet } from "react-router-dom";

function Home(props: any) {
  return (
    <div>
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert("用户中心正在开发中，敬请期待:)")}
        >
          &#xe65c;
        </span>
        <span className="title">云音悦</span>
        <span
          className="iconfont search"
          onClick={() => props.history.push("/search")}
        >
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/recommend">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
