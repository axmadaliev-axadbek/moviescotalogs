import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';
import AuthPpovider from './Providers/AuthPpovider';
import MoviesStorage from './Providers/MoviesStorage';
import Protectroute from './componets/ProtecRoute/ProtectRoute';

ReactDOM.render(
    <React.StrictMode>
                <AuthPpovider>
                    <Protectroute>
                        <MoviesStorage>
                                    <App />
                        </MoviesStorage>
                    </Protectroute>
                    
                </AuthPpovider>
        </React.StrictMode>
        ,document.getElementById('root')
    );

reportWebVitals();
