import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from './store/actionCreators';
import RecommendList from '../../components/list';
import { Content } from './style';
import { RootState } from '../../store/reducer';
import { Outlet } from "react-router-dom";


const Recommend = (props: any) => {
  const { bannerList, recommendList, songsCount, enterLoading } = useSelector((state: RootState) => ({
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    songsCount: 0,
    enterLoading: state.recommend.enterLoading
  }));

  const dispatch = useDispatch();

  const getBannerDataDispatch = () => {
    dispatch(actionTypes.getBannerList() as any);
  };

  const getRecommendListDataDispatch = () => {
    dispatch(actionTypes.getRecommendList() as any);
  }

  useEffect(() => {
    if(!bannerList.length){
      getBannerDataDispatch();
    }
    if(!recommendList.length){
      getRecommendListDataDispatch();
    }
    // eslint-disable-next-line
  }, []);


  return (
    <Content play={songsCount}>
      <div>
        <RecommendList recommendList={recommendList}></RecommendList>
      </div>
      {enterLoading? "loading..." : null}
      <Outlet />
    </Content> 
  );
};

export default React.memo(Recommend);