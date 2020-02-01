import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Linkurl1} from './Button';

class Navbar1 extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            <Linkurl1>
                            Home
                            </Linkurl1>
                        </Link>
                    </li>
                </ul>
               >
               <ul className="navbar-nav align-items-center">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link">
                            <Linkurl1>
                            All Course
                            </Linkurl1>
                        </Link>
                    </li>
                </ul>

              
            </NavWrapper>
        );
    }
}

export default Navbar1;

const NavWrapper = styled.nav`
    background : var(--mainWhite);
`;
