import React from 'react';
import { CustomButton } from './style';
import Loader from '../Loader/Loader';

function Button({ bgColor, margin, loading, children, ...props }) {
    return (
        <CustomButton bgColor={bgColor} margin={margin} {...props}>
            {loading ? <Loader /> : children}
        </CustomButton>
    );
}

export default Button;