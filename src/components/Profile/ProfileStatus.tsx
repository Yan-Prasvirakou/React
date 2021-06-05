import React, { ChangeEvent } from 'react';

type PropsType = {
	status: string
	updateStatus: (newStatus: string) => void
}

type StateType = {
	editMode: boolean
	status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
	state = {
		editMode: false, 
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: event.currentTarget.value
		})
	}

	componentDidUpdate(prevProps: PropsType, prevState: StateType) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}


	render() {
		// debugger
		return (
			<div>
				{!this.state.editMode && 
					<div>
					<span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
					<input autoFocus={true} defaultValue={this.state.status}
						onChange={this.onStatusChange} onBlur={this.deactivateEditMode} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;