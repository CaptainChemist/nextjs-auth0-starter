import { MainLayout } from '../components/layout/MainLayout';
import styled from 'styled-components';

const StyledHome = styled.div`
  padding: 50px 10px;
  text-align: center;
  h1 {
    font-size: 60px;
  }
`;

export default function Index() {
  return (
    <MainLayout>
      <StyledHome>
        <h1>🏠</h1>
        <p>Welcome to the Home Page!</p>
      </StyledHome>
    </MainLayout>
  );
}
