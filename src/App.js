import './App.css';
import { Header } from './components';
import Main from './containers';

const App = (props) => {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}
 
export default App;
