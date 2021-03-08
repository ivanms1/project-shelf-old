import { SpinnerDiv } from './style';

import { ReactComponent as SpinnerSvg } from '../../assets/spinner.svg';

const Spinner = () => {
  return (
    <SpinnerDiv>
      <SpinnerSvg />
    </SpinnerDiv>
  );
};

export default Spinner;
