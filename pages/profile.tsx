import { MainLayout } from '../components/layout/MainLayout';
import styled from 'styled-components';

const StyledProfile = styled.div`
  padding: 50px 10px;
  text-align: center;
  h1 {
    font-size: 60px;
  }
`;

export default function Profile() {
  return (
    <MainLayout>
      <StyledProfile>
        <h1>🤸</h1>
        <p>Welcome to the Profile Page!</p>
      </StyledProfile>
    </MainLayout>
  );
}
