
import { useHistory } from 'react-router-dom';



function Logout(props) {
    localStorage.setItem('userToken', '');
    const history = useHistory();

    return (
        history.push('/signin')
    );
}

export default Logout;