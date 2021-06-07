import { DialogType, MsgType } from './types/types';

import SashaAva from '../components/Dialogs/img/SashaAva.jpg';
import LeraAva from '../components/Dialogs/img/LeraAva.jpg';
import NastyaAva from '../components/Dialogs/img/NastyaAva.jpg';
import DivanychAva from '../components/Dialogs/img/DivanychAva.jpg';
import KristinaAva from '../components/Dialogs/img/KristinaAva.jpg';
import PashaAva from '../components/Dialogs/img/PashaAva.jpg';
import VovaAva from '../components/Dialogs/img/VovaAva.jpg';

const SEND_MESSAGE = 'first-project/dialogs/SEND-MESSAGE';
const SET_CURRENT_DIALOG = 'first-project/dialogs/SET-CURRENT-DIALOG';
const CLEAR_CURRENT_DIALOG = 'first-project/dialogs/CLEAR_CURRENT_DIALOG';


export let initialState = {
	currentDialog: null as string | null,
	dialogs: [{
		id: 1,
		// ask: 'tkgj',
		name: 'Sasha',
		ava: SashaAva,
		msgs: [{
			id: 1,
			text: 'Hi, my name is Sasha',
			out: false
		},
		{
			id: 2,
				text: 'Short Message',
				out: true
			},
			{
				id: 3,
				text: 'Can I meet you?',
				out: false,
			},
			{
				id: 4,
				text: 'Short Message',
				out: true
			},
			{
				id: 5,
				text: 'Can I meet you?',
				out: false
			},
			{
				id: 6,
				text: 'Short Message',
				out: true
			},
			{
				id: 7,
				text: 'Can I meet you?',
				out: false
			},
			{
				id: 8,
				text: 'Short Message',
				out: true
			},
			{
				id: 9,
				text: 'Can I meet you?',
				out: false
			},
			{
				id: 10,
				text: 'Short Message',
				out: true
			},
			{
				id: 11,
				text: 'Can I meet you?',
				out: false
			},
			{
				id: 12,
				text: 'I don\'t know',
				out: true
			},
			{
				id: 13,
				text: 'Lorem ipsum pipsum blablabla',
				out: false
			},
			{
				id: 14,
				text: 'Ok',
				out: false
			},
			]
		},
		{
			id: 2,
			name: 'Lera',
			ava: LeraAva,
			msgs: [{
					id: 1,
					text: 'Hi',
					out: false
				},
				{
					id: 2,
					text: 'Hi',
					out: true
				},
				{
					id: 3,
					text: 'I wanna becoma a reacr-developer',
					out: false
				},
				{
					id: 4,
					text: 'One more message',
					out: false
				},
				{
					id: 5,
					text: 'samuraj js',
					out: false
				}
			]
		},
		{
			id: 3,
			name: 'Nastya',
			ava: NastyaAva,
			msgs: [{
					id: 1,
					text: 'Hi, I\'ve created a new social-network',
					out: false
				},
				{
					id: 2,
					text: 'Are you glad?',
					out: false
				},
			]
		},
		{
			id: 4,
			name: 'Divanych',
			ava: DivanychAva,
			msgs: [{
					id: 1,
					text: 'Hi',
					out: false
				},
				{
					id: 2,
					text: 'Certainly officially',
					out: false
				},
				{
					id: 3,
					text: 'Do u need a sofa?',
					out: false
				},
				{
					id: 4,
					text: 'Do u need a sofa?',
					out: false
				},
				{
					id: 5,
					text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
								Ea eum necessitatibus impedit qui aperiam pariatur 
								repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
								voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.`,
					out: true
				},
			]
		},
		{
			id: 5,
			name: 'Kristina',
			ava: KristinaAva,
			msgs: [{
					id: 1,
					text: 'Hi, Ian',
					out: false
				},
				{
					id: 2,
					text: 'Hi, Kristina',
					out: true
				},
				{
					id: 3,
					text: 'Let\'s go',
					out: true
				},
				{
					id: 4,
					text: `
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
									Ea eum necessitatibus impedit qui aperiam pariatur 
									repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
									voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.
								`,
					out: false
				},
				{
					id: 5,
					text: 'U have good skills',
					out: false
				},
				{
					id: 6,
					text: 'I like js',
					out: false
				},
				{
					id: 7,
					text: 'I like react',
					out: false
				},
				{
					id: 8,
					text: 'Where are you from?',
					out: false
				},
				{
					id: 9,
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
					out: true
				},
				{
					id: 10,
					text: 'Ea eum necessitatibus impedit qui aperiam pariatur ',
					out: false
				},
				{
					id: 11,
					text: 'repudiandae nisi error facilis? Provident possimus nisi, nostrum',
					out: true
				},
				{
					id: 12,
					text: 'voluptatum ratione itaque nemo ut officia aut odit fuga quisquam. ',
					out: false
				},
				{
					id: 13,
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
					out: true
				},
				{
					id: 14,
					text: 'repudiandae nisi error facilis? Provident possimus nisi, nostrum, voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.',
					out: false
				},
			]
		},
		{
			id: 6,
			name: 'Pasha',
			ava: PashaAva,
			msgs: [{
					id: 1,
					text: 'Hi, I have waited for yesterday so long',
					out: true
				},
				{
					id: 2,
					text: 'I wanna be web-developer',
					out: true
				},
				{
					id: 3,
					text: 'Goodbye',
					out: true
				},
			]
		},
		{
			id: 7,
			name: 'Vova',
			ava: VovaAva,
			msgs: [{
					id: 1,
					text: 'Message',
					out: false
				},
				{
					id: 2,
					text: 'One more',
					out: false
				},
				{
					id: 3,
					text: 'Ok ok i am ok',
					out: true
				},
			]
		}
	] as Array<DialogType>
};

export type InitialStateType = typeof initialState

type ActionsTypes = SendMessageACType | SetCurrentDialogACType | clearCurrentDialogACType

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			let currentDlg = state.dialogs.filter(dialog => dialog.name == state.currentDialog);
			let newMsgId = currentDlg[0].msgs.length + 1;
			let curDlgIndex = state.dialogs.indexOf(currentDlg[0]);

			let newMsg = {
				id: newMsgId,
				text: action.msgText,
				out: true,
			}

			let newMsgs = [...state.dialogs[curDlgIndex].msgs, newMsg]; 
			let newDialog = {...state.dialogs[curDlgIndex], msgs: newMsgs};
			let stateDialogsCopy = [...state.dialogs]
			let changedDialog = stateDialogsCopy.splice(curDlgIndex, 1, newDialog);
			let newDialogs = stateDialogsCopy

			return {
				...state,
				dialogs: [...newDialogs],
			};

		case SET_CURRENT_DIALOG:
			return {
				...state,
				currentDialog: action.dialog
			}
		case CLEAR_CURRENT_DIALOG:
			return {
				...state,
				currentDialog: null
			}
			default:
				return state;
	}

}

type SendMessageACType = {
	type: typeof SEND_MESSAGE
	msgText: string
}

type SetCurrentDialogACType = {
	type: typeof SET_CURRENT_DIALOG
	dialog: string
}

type clearCurrentDialogACType = { type: typeof CLEAR_CURRENT_DIALOG}

export const sendMessageAC = (msgText: string): SendMessageACType => ({type: SEND_MESSAGE, msgText})
export const setCurrentDialogAC = (dialog: string): SetCurrentDialogACType => ({type: SET_CURRENT_DIALOG,	dialog})
export const clearCurrentDialogAC = (): clearCurrentDialogACType => ({type: CLEAR_CURRENT_DIALOG});

export default dialogsReducer;