import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <SignupForm />
        </div>
    );
}

export default App;
