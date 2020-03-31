import { MainLayout } from '../components/layout/MainLayout';
import styled from 'styled-components';
import { useFetchUser } from '../utils/user';
import Router from 'next/router';

const StyledProfile = styled.div`
  padding: 50px 10px;
  text-align: center;
  h1 {
    font-size: 60px;
  }
`;

export default function Profile() {
  const { user, loading } = useFetchUser();

  if (loading) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  if (!user && !loading) {
    Router.replace('/');
  }

  return (
    <MainLayout>
      <StyledProfile>
        <h1>🤸</h1>
        <p>Welcome to the Profile Page! Here is your profile information:</p>
        <p>{JSON.stringify(user)}</p>
      </StyledProfile>
    </MainLayout>
  );
}
