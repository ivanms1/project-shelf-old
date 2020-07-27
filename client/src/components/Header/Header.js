import React from 'react';
import Popup from 'reactjs-popup';
import { Container, Links, Logo, StyledLink } from "./style";
import Kathmandu from '../../assets/kathmandu.svg';
import MobileMenu from '../MobileMenu/Mobilemenu';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import { Link } from 'react-router-dom';


function Header(props) {

    const contentStyle = {
        background: "rgba(255,255,255,0)",
        width: "80%",
        border: "none"
    };

    const PopUpContainer = React.forwardRef((props, ref) => {
        return (
            <Popup
                modal
                overlayStyle={{ background: "#fce4ec" }}
                contentStyle={contentStyle}
                closeOnDocumentClick={false}
                trigger={open => <BurgerIcon open={open} />}
            >
                {close => <MobileMenu close={close} />}
            </Popup>
        );
    });


    return (
        <Container>
            <PopUpContainer />
            <Logo>
                <div>
                    <Link to='/'>
                        <img alt='kathmandu' src={Kathmandu}></img>
                    </Link>
                </div>
            </Logo>

            <Links>
                <ul>

                    <li>
                        <StyledLink activeClassName='current' to='/weekly'>
                            Weekly Projects
                        </StyledLink>
                    </li>


                    <li>
                        <StyledLink activeClassName='current' to='/submit'>
                            Submit your Projects ?
                        </StyledLink>
                    </li>

                    <li>
                        <StyledLink activeClassName='current' to='/signin'>
                            Sign in
                        </StyledLink>
                    </li>

                    <li>
                        <StyledLink activeClassName='current' to='/register'>
                            Register
                        </StyledLink>
                    </li>
                </ul>
            </Links>
        </Container>
    );
}

export default Header;