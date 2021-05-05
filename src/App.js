import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/Homepage';
import tokenService from './utils/tokenService';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState(tokenService.getUserFromToken());

    const handleUser = () => {
        setUser(tokenService.getUserFromToken());
    };
    return (
        <div className='App'>
            <NavBar />
            {user ? '' : <HomePage handleUser={handleUser} />}
        </div>
    );
}

export default App;
