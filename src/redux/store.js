import SashaAva from '../components/Dialogs/img/SashaAva.jpg';
import LeraAva from '../components/Dialogs/img/LeraAva.jpg';
import NastyaAva from '../components/Dialogs/img/NastyaAva.jpg';
import LenaAva from '../components/Dialogs/img/LenaAva.jpg';
import KristinaAva from '../components/Dialogs/img/KristinaAva.jpg';
import TanyaAva from '../components/Dialogs/img/TanyaAva.jpg';

let store = {
	_state: {
		profilePage: {
			posts: [{
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
			newPostText: 'new text for post',
		},
		dialogsPage: {
			newMsgText: 'text for msg',
			dialogs: [{
					id: 1,
					name: 'Sasha',
					ava: SashaAva,
					msgs: [{
							text: 'Hi, my name is Sasha',
							out: false
						},
						{
							text: 'Short Message',
							out: true
						},
						{
							text: 'Can I meet you?',
							out: false
						},
						{
							text: 'Short Message',
							out: true
						},
						{
							text: 'Can I meet you?',
							out: false
						},
						{
							text: 'Short Message',
							out: true
						},
						{
							text: 'Can I meet you?',
							out: false
						},
						{
							text: 'Short Message',
							out: true
						},
						{
							text: 'Can I meet you?',
							out: false
						},
						{
							text: 'Short Message',
							out: true
						},
						{
							text: 'Can I meet you?',
							out: false
						},
						{
							text: 'I don\'t know',
							out: true
						},
						{
							text: 'Lorem ipsum pipsum blablabla',
							out: false
						},
						{
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
							text: 'Hi, I want you',
							out: false
						},
						{
							text: 'I want you too',
							out: true
						},
						{
							text: 'I wanna be tohether with you',
							out: false
						},
						{
							text: 'One more message',
							out: false
						},
						{
							text: 'Can we meet one another tomorrow?',
							out: false
						}
					]
				},
				{
					id: 3,
					name: 'Nastya',
					ava: NastyaAva,
					msgs: [{
							text: 'Hi, I have waited for you so long',
							out: false
						},
						{
							text: 'I miss you',
							out: false
						},
					]
				},
				{
					id: 4,
					name: 'Lena',
					ava: LenaAva,
					msgs: [{
							text: 'Hi',
							out: false
						},
						{
							text: 'My name is Lena',
							out: false
						},
						{
							text: 'HRU',
							out: false
						},
						{
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
							text: 'Hi, Ian',
							out: false
						},
						{
							text: 'Hi, Kristina',
							out: true
						},
						{
							text: 'Let\'s go walking outside ',
							out: true
						},
						{
							text: `
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
										Ea eum necessitatibus impedit qui aperiam pariatur 
										repudiandae nisi error facilis? Provident possimus nisi, nostrum, 
										voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.
									`,
							out: false
						},
						{
							text: 'U have good name',
							out: false
						},
						{
							text: 'I like it',
							out: false
						},
						{
							text: 'I like it',
							out: false
						},
						{
							text: 'Where are you from?',
							out: false
						},
						{
							text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
							out: true
						},
						{
							text: 'Ea eum necessitatibus impedit qui aperiam pariatur ',
							out: false
						},
						{
							text: 'repudiandae nisi error facilis? Provident possimus nisi, nostrum',
							out: true
						},
						{
							text: 'voluptatum ratione itaque nemo ut officia aut odit fuga quisquam. ',
							out: false
						},
						{
							text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
							out: true
						},
						{
							text: 'repudiandae nisi error facilis? Provident possimus nisi, nostrum, voluptatum ratione itaque nemo ut officia aut odit fuga quisquam.',
							out: false
						},
					]
				},
				{
					id: 6,
					name: 'Tanya',
					ava: TanyaAva,
					msgs: [{
							text: 'Hi, I have waited for you so long',
							out: true
						},
						{
							text: 'I wanna see u',
							out: true
						},
						{
							text: 'I wanna see u',
							out: true
						},
					]
				}
			]
		}
	},
	_callSubscriber() {
		console.log('store changed')
	},
	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 7,
				msg: this._state.profilePage.newPostText,
				likes: 0
			}

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	}

}


export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text
	}
}

window.store = store;
export default store;