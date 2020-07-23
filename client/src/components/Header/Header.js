import React from 'react';
import Popup from 'reactjs-popup';
import { Container, Links, Logo, StyledLink } from "./style";
import Kathmandu from '../../assets/kathmandu.svg';
import MobileMenu from '../MobileMenu/Mobilemenu';
import BurgerIcon from '../BurgerIcon/BurgerIcon';


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
                    <img alt='kathmandu' src={Kathmandu}></img>
                </div>
                <span>ShowCase</span>
            </Logo>

            <Links>
                <ul>
                    <li>
                        <StyledLink exact activeClassName='current' to='/'>
                            Home
                        </StyledLink>
                    </li>

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
                        <StyledLink activeClassName='current' to='/contact'>
                            Contact
                        </StyledLink>
                    </li>

                </ul>
            </Links>
        </Container>
    );
}

export default Header;