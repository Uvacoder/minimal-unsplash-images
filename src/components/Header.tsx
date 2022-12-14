import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 28px;
  margin: 0;
  color: #2e2e2e;
  letter-spacing: 1.5px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.span`
  display: block;
  font-size: 20px;
  color: #676767;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-style: italic;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Title>Minimal Images</Title>
      <SubTitle>from Unsplash</SubTitle>
    </HeaderWrapper>
  );
};

export default Header;
