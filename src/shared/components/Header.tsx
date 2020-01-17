import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../types/app-state";
import {messageSelector} from "../../app/ui.slice";

function Header() {
  const message = useSelector<AppState, string>(messageSelector);

  return (
      <HeaderContainer>
        <span>ReactRedux workshop 2020</span>
        <ServerMessage>{message}</ServerMessage>
        <LogoutLink to="/" className="button button-clear">logout</LogoutLink>
      </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-between;
  padding: 5px 0;    
  border-bottom: 1px solid #9b4dca;
`;


const LogoutLink = styled(Link)`
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;  
  &:hover {  
    color: #9b4dca;
  }
`;

const ServerMessage = styled.span`
 color: green;
 font-size: 12px;
`

export default Header;
