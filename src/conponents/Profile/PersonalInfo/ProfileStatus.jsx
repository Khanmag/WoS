import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.statusText
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.statusText)
    }
    onChangeStatus = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.statusText !== this.props.statusText ) {
            this.setState({
                statusText: this.props.statusText
            })
        }
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <span onDoubleClick={this.activateEditMode}>{this.state.statusText}</span>
                : <input autoFocus={true}
                         onBlur={this.deactivateEditMode}
                         onChange={this.onChangeStatus}
                         value={this.state.statusText}/>
            }
        </div>
    }
}

export default ProfileStatus