import Routes from '../../Routes';
import Header from '../Header';

import { Main } from './style';

function Layout() {
  return (
    <Main>
      <Header />
      <Routes />
    </Main>
  );
}

export default Layout;
