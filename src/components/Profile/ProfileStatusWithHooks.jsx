import React, {useState, useEffect} from 'react';
import classes from './Profile.module.css';

const ProfileStatusWithHooks = (props) => {

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

	const onStatusChange = (e) => {
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
						onBlur={deactivateEditMode} value={status} maxlength={80}
					/>
				</div>
			}
		</div>
	)
} 


export default ProfileStatusWithHooks;