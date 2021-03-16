import Routes from '../../Routes/Routes';
import Header from '../Header/Header';

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
