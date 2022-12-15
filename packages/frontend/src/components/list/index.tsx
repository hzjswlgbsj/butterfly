import React from "react";
import { ListWrapper, ListItem, List } from "./style";
import LazyLoad from "react-lazyload";
import { IRecommendList } from "../../application/Document/store/reducer";

interface RecommendListProps {
  history?: any;
  recommendList: IRecommendList;
}

const RecommendList = (props: RecommendListProps) => {
  const enterDetail = (id: string) => {
    props.history.push(`/recommend/${id}`);
  };
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {props.recommendList.map((item) => {
          return (
            <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src="./music.png"
                      alt="music"
                    />
                  }
                >
                  <img
                    src={item.picUrl + "?param=300x300"}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">
                    {Math.floor(item.playCount / 10000)}万
                  </span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default React.memo(RecommendList);
