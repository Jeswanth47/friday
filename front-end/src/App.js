import { Routes } from './Routes';
import { LoginPage } from './pages/LoginPage';
import {useNavigate} from 'react-router-dom';

export const App = () => {
    return (
        <div className="lion">
            <button onClick={()=><LoginPage/>}>Login</button>
        </div>
    );
}
