import { Layout } from 'antd';
import { ReactNode, Component } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const { Content } = Layout;

const StyledContent = styled(Content)`
  min-height: 100vh;
`;

type Props = {
  children: ReactNode;
};

export class MainLayout extends Component<Props> {
  render() {
    return (
      <Layout>
        <Navbar />
        <StyledContent>{this.props.children}</StyledContent>
      </Layout>
    );
  }
}
