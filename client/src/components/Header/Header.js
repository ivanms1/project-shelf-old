import React, { forwardRef } from 'react';
import { Container, Links, Logo, StyledLink } from "./style";
import Kathmandu from '../../assets/kathmandu.svg';
import MobileMenu from '../MobileMenu/Mobilemenu';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import Popup from 'reactjs-popup';

function Header(props) {

    const contentStyle = {
        background: "rgba(255,255,255,0)",
        width: "80%",
        border: "none"
    };

    const PopUpContainer = forwardRef((props, ref) => {
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
        )
    });


    return (
        <Container>
            <PopUpContainer />
            <Logo>
                <div>
                    <StyledLink to='/'>
                        <img alt={Kathmandu} src={Kathmandu}></img>
                    </StyledLink>
                </div>
                <span>ShowCase</span>
            </Logo>


            <Links>
                <ul>
                    <StyledLink to='/'>
                        <li>
                            Home
                        </li>
                    </StyledLink>

                    <StyledLink to='/weekly'>
                        <li>
                            Weekly Projects
                        </li>
                    </StyledLink>


                    <StyledLink to='/submit'>
                        <li>
                            Submit your Projects ?
                        </li>
                    </StyledLink>

                    <StyledLink to='/contact'>
                        <li>
                            Contact
                        </li>
                    </StyledLink>

                </ul>
            </Links>
        </Container>
    );
}

export default Header;