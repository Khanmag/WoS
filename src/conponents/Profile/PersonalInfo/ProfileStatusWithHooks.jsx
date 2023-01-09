import React, {useEffect, useState} from "react";

const ProfileStatus = ({statusText, updateStatus, isAuth}) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(statusText)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = (e) => {
        setEditMode(false)
        updateStatus(e.currentTarget.value)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(statusText)
    }, [statusText])
    return <div>
        {(!editMode)
            ? <span onDoubleClick={activateEditMode}>{status || 'status'}</span>
            : <input autoFocus={true}
                     onChange={onStatusChange}
                     onBlur={deactivateEditMode}
                     value={status}/>
        }
    </div>

}

export default ProfileStatus