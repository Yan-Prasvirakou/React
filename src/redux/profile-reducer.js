let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

	
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 7,
				msg: state.newPostText,
				likes: 0
			};

			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}

}

export const addPostActionCreator = () => ({
	type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
})

export default profileReducer;