import React from 'react';
import ReactDOM from 'react-dom';

import Users from './components/users.jsx';

function main() {
	ReactDOM.render(<Users source="/admin/users"/>, document.getElementById('app'));
}

main();
