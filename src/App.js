import './App.css';
import HomePage from './pages/Homepage';
import ShowsPage from './pages/ShowsPage';
import tokenService from './utils/tokenService';
import ShowDetails from './pages/ShowDetails';
import { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

function App() {
    const [user, setUser] = useState(tokenService.getUserFromToken());
    const [selected, setSelected] = useState(false);
    const history = useHistory();

    const handleUser = () => {
        setUser(tokenService.getUserFromToken());
    };

    const handleShow = (show) => {
        if (selected && selected.id === show.id) {
            setSelected(false);
        }
        setSelected(show);
        history.push(`/show/${show.id}`);
    };
    return (
        <div className='App'>
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() =>
                        user ? (
                            <ShowsPage handleShow={handleShow} />
                        ) : (
                            <HomePage handleUser={handleUser} />
                        )
                    }
                />
                <Route
                    path='/show/:id'
                    render={() => <ShowDetails show={selected} />}
                />
            </Switch>
        </div>
    );
}

export default App;
