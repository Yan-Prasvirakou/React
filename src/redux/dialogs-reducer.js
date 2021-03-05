let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.msgBody;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.dialogs[0].msgs.push({
				id: 15,
				text: body,
				out: true
			});
			state.newMessageBody = '';
			return state;
		default:
			return state;
	}

}


export const sendMessageActionCreator = () => ({
	type: SEND_MESSAGE
})
export const updateNewMsgTextActionCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	msgBody: body
})

export default dialogsReducer;