import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  /* .toast-container */
  width: 100%;
  max-width: 400px;

  @media screen and (max-width: 520px) {
    width: 100% !important;
  }

  /* .toast is passed to toastClassName */
  .toast {
  }

  /* .body is passed to bodyClassName */
  .body {
    text-align: center;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
