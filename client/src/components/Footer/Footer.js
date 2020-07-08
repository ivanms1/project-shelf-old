import React from 'react';
import { Container, Links, StyledLink } from './style';

function Footer(props) {
    return (
        <Container>
            <Links style={{ maxWidth: '200px', }}>
                <ul>
                    <li>
                        <StyledLink exact activeClassName='current' to='/'>
                            ShowCase
                        </StyledLink>
                    </li>

                </ul>
            </Links>

            <Links>
                <ul>
                    <li style={{ order: '1' }}>
                        <StyledLink exact activeClassName='current' to='/'>
                            Home
                        </StyledLink>
                    </li>

                    <li style={{ order: '2' }}>
                        <StyledLink activeClassName='current' to='/weekly'>
                            Weekly Projects
                        </StyledLink>
                    </li>


                    <li style={{ order: '3' }}>
                        <StyledLink activeClassName='current' to='/submit'>
                            Submit your Projects ?
                        </StyledLink>
                    </li>

                    <li style={{ order: '4' }}>
                        <StyledLink activeClassName='current' to='/contact'>
                            Contact
                        </StyledLink>
                    </li>

                </ul>
            </Links>
        </Container>
    );
}

export default Footer;