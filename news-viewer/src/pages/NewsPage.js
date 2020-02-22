import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

export const NewsPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || 'all';

  return (
    <>
      <Header/>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
