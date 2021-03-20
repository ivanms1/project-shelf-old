import React, { useState, useRef } from 'react';
import { usePopper } from 'react-popper';

import useOnClickOutside from '../../helpers/useOnClickOutside';

import { Container } from './style';

function Popper({ children, reference, options }) {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    options
  );

  useOnClickOutside(referenceRef, setVisibility);

  return (
    <React.Fragment>
      {reference(referenceRef, () => setVisibility(!visible))}
      <Container ref={popperRef} style={styles.popper} {...attributes.popper}>
        {visible && <div style={styles.offset}>{children}</div>}
      </Container>
    </React.Fragment>
  );
}

export default Popper;
