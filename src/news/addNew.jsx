import React from "react";
import {useState} from "react";


const AddNew = (props) => {
    const [title, setTitle] = useState('')
    const [desc, setDisc] = useState('')
    const [photo, setPhoto] = useState('')

    const addTitle = (event) => {
        const newTitle = event.target.value
        setTitle(newTitle)
    }

    function addDescription(e) {
        const newDesc = e.target.value
        setDisc(newDesc)
    }

    function addPhoto(e) {
        const newPhoto = e.target.value
        setPhoto(newPhoto)
    }

    const handleClickEvent = () => {
        const state = {title, urlToImage: photo, description: desc, isOpened: false}
        props.addNew(state)
    }

    return (
        <div >
            <input placeholder={'title'} onChange={addTitle}/>
            <input  placeholder={'photo'} type={'text'} onChange={addPhoto}/>
            <input placeholder={'description'} onChange={addDescription}/>
            <button onClick={handleClickEvent}>Add new</button>
        </div>
    )
}

export default AddNew