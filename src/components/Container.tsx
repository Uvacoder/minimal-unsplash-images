import styled from 'styled-components';

const Container = styled.div`
  max-width: 992px;
  width: 100%;
  margin: 0 auto;
  /* padding: 40px 15px; */
  position: relative;

  @media (max-width: 992px) {
    padding: 20px 15px;
  }
`;

export default Container;