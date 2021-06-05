import React, {useState, useEffect, ChangeEvent} from 'react';
import classes from './Profile.module.css';


type PropsType = {
	status: string
	updateStatus: (status: string) => void
}


const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setStatus(e.currentTarget.value)
		
	}

	return (
		<div className={classes.status}>
			{!editMode && 
				<div>
					<span onDoubleClick={activateEditMode}>
						{props.status || 'no status'}
					</span>
				</div>
			}
			{editMode &&
				<div>
					<textarea
						className={classes.statusTextarea} autoFocus={true} onChange={onStatusChange}
						onBlur={deactivateEditMode} value={status} maxLength={80}
					/>
				</div>
			}
		</div>
	)
} 


export default ProfileStatusWithHooks;