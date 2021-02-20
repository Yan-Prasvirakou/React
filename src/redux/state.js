import SashaMessages from '../components/Dialogs/Messages/SashaMessages';
import LeraMessages from '../components/Dialogs/Messages/LeraMessages';
import NastyaMessages from '../components/Dialogs/Messages/NastyaMessages';
import LenaMessages from '../components/Dialogs/Messages/LenaMessages';
import KristinaMessages from '../components/Dialogs/Messages/KristinaMessages';
import TanyaMessages from '../components/Dialogs/Messages/TanyaMessages';

import SashaAva from '../components/Dialogs/Messages/img/SashaAva.jpg';
import LeraAva from '../components/Dialogs/Messages/img/LeraAva.jpg';
import NastyaAva from '../components/Dialogs/Messages/img/NastyaAva.jpg';
import LenaAva from '../components/Dialogs/Messages/img/LenaAva.jpg';
import KristinaAva from '../components/Dialogs/Messages/img/KristinaAva.jpg';
import TanyaAva from '../components/Dialogs/Messages/img/TanyaAva.jpg';

let state = {
	profilePage: {
		posts: [
			{ msg: 'Hello world', likes: 4 },
			{
				msg: 'My second post My second post My second post My second post My second post My second post My second postMy second post',
				likes: 155
			},
			{ msg: '70 лет полет нормальный', likes: 32 },
			{ msg: '12345', likes: 0 },
			{ msg: 'Empty text text text text text', likes: 5 },
			{ msg: 'lorem ipsum', likes: 3 }
		],
	},

	dialogsPage: {
		dialogs: [
				{ id: 1, name: 'Sasha', msgs: <SashaMessages />, ava: SashaAva },
				{ id: 2, name: 'Lera', msgs: <LeraMessages />, ava: LeraAva },
				{ id: 3, name: 'Nastya', msgs: <NastyaMessages />, ava: NastyaAva },
				{ id: 4, name: 'Lena', msgs: <LenaMessages />, ava: LenaAva },
				{ id: 5, name: 'Kristina', msgs: <KristinaMessages />, ava: KristinaAva },
				{ id: 6, name: 'Tanya', msgs: <TanyaMessages />, ava: TanyaAva }
			]
	}

}

export default state;