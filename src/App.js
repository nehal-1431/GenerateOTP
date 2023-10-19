import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import OTPVerification from './components/wrapComponent/OTPVerification';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <h2 style={{padding:"20px"}}>OTP Verfication App</h2>
            <OTPVerification />
        </Provider>
    </div>
  );
}

export default App;
