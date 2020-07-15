import React from 'react';
import { CustomButton } from './style';

function Button({ bgColor, margin, children }) {
    return (
        <CustomButton bgColor={bgColor} margin={margin}>
            {children}
        </CustomButton>
    );
}

export default Button;