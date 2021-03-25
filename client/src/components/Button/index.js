import React from 'react';

import Spinner from '../Spinner';

import { CustomButton } from './style';

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
      {loading ? <Spinner /> : children}
    </CustomButton>
  );
}

export default Button;
