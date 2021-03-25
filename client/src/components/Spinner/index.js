import { SpinnerDiv, CircularLoader } from './style';

const Spinner = ({ type = 'white', padding = 0 }) => {
  return (
    <SpinnerDiv padding={padding}>
      <CircularLoader colors={type} />
    </SpinnerDiv>
  );
};

export default Spinner;
