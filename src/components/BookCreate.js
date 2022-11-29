import React, {useContext, useState} from "react";
import {Button, TextField} from "@mui/material";
import BooksContext from "../context/books";


const BookCreate = () => {

    const { getBookName } = useContext(BooksContext)

    const [bookName, setBookName] = useState({
        id: '',
        name: ''
    });
    const [error, setError] = useState({})

    const handleBookName = (e) => {
        const {name, value} = e.target;
        setBookName(prevState => ({
            ...prevState,
            [name]: value,
            id: Math.random()
        }));
    };

    const validation = (bookName) => {
        const error = {};
        if (!bookName.name) {
            error.name = 'Please Enter Title';
        } else if (bookName.name.length < 3) {
            error.name = 'Enter more than 3 characters';
        }
        return error;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validate = validation(bookName);
        setError(validate);
        if (Object.keys(validate).length === 0) {
            getBookName(bookName);
            setBookName({
                name: '',
                id: '',
            })
        }
    };

    return (
        <div className={'book-create mt-1 mb-4 mx-4'}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <h3 className={'text-white'}>Add a Book</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p className={'text-danger'}>{error.name}</p>
                            <TextField label="Title of Book" variant="standard" autoComplete={'off'} name={'name'}
                                       value={bookName.name}
                                       onChange={(e) => handleBookName(e)}
                                       sx={{
                                           '& .MuiInput-underline:before': {
                                               borderColor: 'white',
                                           },
                                           '& .MuiInput-underline:after': {
                                               borderColor: 'white',
                                               width: '300px'
                                           },
                                           '& .MuiInputBase-input': {
                                               color: 'white'
                                           },
                                           '& .MuiFormLabel-root ': {
                                               color: 'white'
                                           },

                                       }}
                            ></TextField>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                            <Button variant="outlined" onClick={(e) => handleSubmit(e)}
                                    sx={{
                                        backgroundColor: "",
                                        color: "white",
                                        border: '1px solid',
                                        borderColor: 'white',
                                        '&:hover': {
                                            backgroundColor: '#0069d9',
                                            borderColor: '#0062cc',
                                            boxShadow: 'none',
                                        },
                                    }}
                            >
                                Submit

                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default BookCreate;