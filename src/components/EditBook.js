import React, {useContext, useState} from "react";
import {Button, TextField} from "@mui/material";
import BooksContext from "../context/books";


const EditBook = ({bookName, id}) => {

    const {handleCancel, handleSave} = useContext(BooksContext);

    const [editedName, setEditedName] = useState(bookName);
    const [error, setError] = useState({});

    const onNameChange = (e) => {
        setEditedName(e.target.value);
    };

    const validation = (editedName) => {
        const error = {};
        if (!editedName) {
            error.name = 'Please Enter Title';
        } else if (editedName.length < 3) {
            error.name = 'Enter more than 3 characters';
        }
        return error;
    };

    const handleEditChange = (bookName, id) => {
        const validate = validation(bookName);
        setError(validate);
        if (Object.keys(validate).length === 0) {
            handleSave(bookName, id);
        }
    };


    return (
        <div className={'edit-book'}>
            <div className="row p-2">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <p className={'text-danger'}>{error.name}</p>
                            <TextField label="Change Title" variant="standard" name={editedName} value={editedName}
                                       onChange={(e) => onNameChange(e)}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4 d-flex gap-3">
                            <Button variant="outlined" onClick={() => handleEditChange(editedName, id)}>Save</Button>
                            <Button variant="outlined" color={'error'} onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default EditBook;