import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SashaMessages from './components/Dialogs/Messages/SashaMessages';
import LeraMessages from './components/Dialogs/Messages/LeraMessages';
import NastyaMessages from './components/Dialogs/Messages/NastyaMessages';
import LenaMessages from './components/Dialogs/Messages/LenaMessages';
import KristinaMessages from './components/Dialogs/Messages/KristinaMessages';
import TanyaMessages from './components/Dialogs/Messages/TanyaMessages';


	let text = 'My second post My second post My second post My second post My second post My second post My second postMy second post';
	const posts = [
		{ msg: 'Hello world', likes: 4 },
		{ msg: text, likes: 155 },
		{ msg: '70 лет полет нормальный', likes: 32 },
		{ msg: '12345', likes: 0 },
		{ msg: 'Empty text text text text text', likes: 5 },
		{ msg: 'lorem ipsum', likes: 3 }
	]

	let dialogs = [
		{ id: 1, name: 'Sasha', msgs: <SashaMessages /> },
		{ id: 2, name: 'Lera', msgs: <LeraMessages /> },
		{ id: 3, name: 'Nastya', msgs: <NastyaMessages /> },
		{ id: 4, name: 'Lena', msgs: <LenaMessages /> },
		{ id: 5, name: 'Kristina', msgs: <KristinaMessages /> },
		{ id: 6, name: 'Tanya', msgs: <TanyaMessages /> }
	]


	ReactDOM.render(
		<React.StrictMode>
		
			<App posts={posts} dialogs={dialogs}/>
		</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
