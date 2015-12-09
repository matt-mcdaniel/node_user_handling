import React from 'react';
import { render } from 'react-dom';

// Import Styles
import './main.css';

// get global routes
import routes from './routes.jsx';

render(routes, document.getElementById('app'));
