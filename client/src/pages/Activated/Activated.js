import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Active from "../../components/Active/Active";

import IMG_Social from "../../assets/social.png";

import { Container, ActivatedContainer, ProjectCollection, Card, HeaderCollection, Links, Name, Button } from './style';




function Activated(props) {

    const [isActive, setIsActive] = useState(true);

    return (
        <Container>
            <Header />
            <ActivatedContainer>
                <main>
                    <p>
                        Approved Projects
                    </p>

                    <ProjectCollection>
                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>


                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>


                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>


                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>

                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>

                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>

                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>

                        <Card>
                            <HeaderCollection>
                                <span>Recipe App</span>
                                <Active active={true} />
                            </HeaderCollection>

                            <Links>
                                <a>Live Link</a>
                                <a>Repo Link</a>
                                <a>Contact</a>
                            </Links>

                            <div className='imgContainer'>
                                <Zoom wrapStyle={{ display: 'block' }}>

                                    <img src={IMG_Social} width='100%' height='100%'></img>
                                </Zoom>

                            </div>

                            <Name>
                                <span>Miroz Devkota</span>
                                <Button>Disapprove</Button>
                            </Name>
                        </Card>

                    </ProjectCollection>
                </main>
            </ActivatedContainer>

            {/* <Footer /> */}
        </Container>
    );
}

export default Activated;