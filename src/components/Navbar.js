import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {ButtonContainer1} from './Button';
import {Linkurl} from './Button';

class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={require('../logo.png')} alt="store" className="navbar-brand"/>
                 
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            <Linkurl>
                            <span className="mr-2">
                            <i class="fas fa-th"></i>
                            </span>
                            
                            <strong>
                            Categories
                            </strong>
                            </Linkurl>
                        </Link>
                    </li>
                </ul>
               
        <SearchWrapper>
            <SearchBar placeholder="Search for Courses..." />
            <span className="mr-2">
            <i className="fas fa-search"/>
            </span>
        </SearchWrapper>


        <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            <Linkurl>
                            Techfor Community
                            </Linkurl>
                        </Link>
                    </li>
                </ul>
               
                
                <Link to="/" className="ml-auto">
                    <ButtonContainer1>
                        <span className="mr-2">
                        <i class="fas fa-shopping-cart"></i>
                        </span>
                    </ButtonContainer1>
                </Link>

                <Link to="#" className="ml-auto">
                    <ButtonContainer1>
                        Login
                    </ButtonContainer1>
                </Link>

                <Link to="#" className="ml-auto">
                    <ButtonContainer>    
                        Sign Up
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--lightBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1rem;
        text-transform: capitalize;
    }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background:  var(--mainWhite) ;
  border-radius: 3rem;
  border: 0.05rem solid #cbd2d9;
  margin-left: 7rem;
  box-shadow: none;
  
`


const SearchBar = styled.input`
  outline: none;
  border: none;
  width: 20rem;
  padding: 0.5rem ;
  color: --mainDark;
  background: transparent;
  font-size: 1rem;
  font-weight: 100;
  `