import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Title, Key, KeyName, Button } from 'components/Shared';

const AppContainer = styled.div`
  background-color: #f2f6fa;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 50px 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppPresenter = ({
  isLoading,
  isMining,
  address = '',
  balance = '',
  mineBlock
}) => (
  <AppContainer>
    <Header>
      <Title>{isLoading ? 'Loading...' : 'Nomadcoin Wallet'}</Title>
      <Button disabled={isMining} onClick={mineBlock}>
        {isMining ? 'Mining' : 'Mine'}
      </Button>
    </Header>
    <Card>
      <Key>
        <KeyName>Your address:</KeyName> <Key>{address}</Key>
      </Key>
      <Key>
        <KeyName>Your balance:</KeyName> {balance} NMD
      </Key>
    </Card>
  </AppContainer>
);

AppPresenter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  address: PropTypes.string,
  balance: PropTypes.number,
  mineBlock: PropTypes.func.isRequired,
  isMining: PropTypes.bool.isRequired
};

export default AppPresenter;
