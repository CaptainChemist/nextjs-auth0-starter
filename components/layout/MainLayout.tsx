import { Layout } from 'antd';
import { ReactNode, Component } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { UserProvider, useFetchUser } from '../../utils/user';

const { Content } = Layout;

const StyledContent = styled(Content)`
  min-height: 100vh;
`;

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Layout>
        <Navbar />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </UserProvider>
  );
};
