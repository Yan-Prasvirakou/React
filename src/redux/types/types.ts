
export type PostType = {
	id: number
	msg: string
	likes: number
	likedByMe: boolean
}

export type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainlink: string
}

export type PhotosType = {
	small: string | null
	large: string | null
}

export type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	aboutMe: string
	contacts: ContactsType
	photos: PhotosType
}

export type UserType = {
	id: number
	name: string
	status: string
	photos: PhotosType
	followed: boolean
}

export type MsgType = {
	id: number
	text: string
	out: boolean
}

export type DialogType = {
	id: number
	name: string
	ava: string //как типизироват импортируемую пикчу?
	msgs: Array<MsgType>
}

