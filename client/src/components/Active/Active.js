import React from 'react';
import { Container, PulseButton } from "./style";

function Active({ active }) {
    return (
        <Container>
            <PulseButton active={active}></PulseButton>
        </Container>
    );
}

export default Active;