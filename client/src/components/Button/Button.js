import React from 'react';

import { CustomButton } from './style';

import Loader from '../Loader/Loader';

function Button({
  kind,
  size = 'small',
  loading,
  children,
  className,
  ...props
}) {
  return (
    <CustomButton className={className} size={size} kind={kind} {...props}>
      {loading ? <Loader /> : children}
    </CustomButton>
  );
}

export default Button;
