import SashaAva from '../components/Dialogs/img/SashaAva.jpg';
import LeraAva from '../components/Dialogs/img/LeraAva.jpg';
import NastyaAva from '../components/Dialogs/img/NastyaAva.jpg';
import LenaAva from '../components/Dialogs/img/LenaAva.jpg';
import KristinaAva from '../components/Dialogs/img/KristinaAva.jpg';
import TanyaAva from '../components/Dialogs/img/TanyaAva.jpg';

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
	_state: {
		profilePage: {
			newPostText: 'new text for post',
			posts: [
				{
					id: 1,
					msg: 'Hello world',
					likes: 4
				},
				{
					id: 2,
					msg: 'My second post My second post My second post My second post My second post My second post My second postMy second post',
					likes: 155
				},
				{
					id: 3,
					msg: '70 лет полет нормальный',
					likes: 32
				},
				{
					id: 4,
					msg: '12345',
					likes: 0
				},
				{
					id: 5,
					msg: 'Empty text text text text text',
					likes: 5
				},
				{
					id: 6,
					msg: 'lorem ipsum',
					likes: 3
				}
			],
		},
		dialogsPage: {
			newMessageBody: 'text for msg',
			dialogs: [
				{
					id: 1,
					name: 'Sasha',
					ava: SashaAva,
					msgs: [
						{
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
							out: false
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
					msgs: [
						{
							id: 1,
							text: 'Hi, I want you',
							out: false
						},
						{
							id: 2,
							text: 'I want you too',
							out: true
						},
						{
							id: 3,
							text: 'I wanna be tohether with you',
							out: false
						},
						{
							id: 4,
							text: 'One more message',
							out: false
						},
						{
							id: 5,
							text: 'Can we meet one another tomorrow?',
							out: false
						}
					]
				},
				{
					id: 3,
					name: 'Nastya',
					ava: NastyaAva,
					msgs: [
						{
							id: 1,
							text: 'Hi, I have waited for you so long',
							out: false
						},
						{
							id: 2,
							text: 'I miss you',
							out: false
						},
					]
				},
				{
					id: 4,
					name: 'Lena',
					ava: LenaAva,
					msgs: [
						{
							id: 1,
							text: 'Hi',
							out: false
						},
						{
							id: 2,
							text: 'My name is Lena',
							out: false
						},
						{
							id: 3,
							text: 'HRU',
							out: false
						},
						{
							id: 4,
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
					msgs: [
						{
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
							text: 'Let\'s go walking outside ',
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
							text: 'U have good name',
							out: false
						},
						{
							id: 6,
							text: 'I like it',
							out: false
						},
						{
							id: 7,
							text: 'I like it',
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
					name: 'Tanya',
					ava: TanyaAva,
					msgs: [
						{
							id: 1,
							text: 'Hi, I have waited for you so long',
							out: true
						},
						{
							id: 2,
							text: 'I wanna see u',
							out: true
						},
						{
							id: 3,
							text: 'I wanna see u',
							out: true
						},
					]
				}
			]
		}
	},
	_callSubscriber() {
		// console.log('store changed')
	},
	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},



	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 7,
				msg: this._state.profilePage.newPostText,
				likes: 0
			}

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} 
		
		else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.msgBody;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.dialogs[0].msgs.push({
				id: 15,
				text: body,
				out: true
			});
			this._state.dialogsPage.newMessageBody = '';
			this._callSubscriber(this._state);
		}
	}
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,	newText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMsgTextActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY,	msgBody: body})
// добавлять только в сообщения одного польщователя, т к они все равно перемешиваются пока что

window.store = store;
export default store;