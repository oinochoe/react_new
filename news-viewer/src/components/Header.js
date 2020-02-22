import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 1rem;
  box-sizing:border-box;
  background:#00B8E1;
  color:#fff;
`;

const HeaderWrap = () => {
  return (
    <Header>
      Today News
    </Header>
  );
};

export default HeaderWrap;
