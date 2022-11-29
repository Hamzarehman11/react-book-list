import React, {useContext} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import EditBook from "./EditBook";
import BooksContext from "../context/books";


const BookShow = ({bookName, id}) => {

    const {selectedBook, onDelete, onEdit} = useContext(BooksContext);

    const handleDelete = (id) => {
        onDelete(id)
    };

    const handleEdit = (id) => {
        onEdit(id);
    };

    return (
        <div className={'book-show'}>
            <Card sx={{minWidth: 305, minHeight: 300}} id={id}>
                <CardMedia
                    component="img"
                    height="240"
                    image={`https://picsum.photos/seed/${id}/600/300?grayscale`}
                    alt="green iguana"
                />
                <CardContent>
                    {selectedBook !== id && <Typography gutterBottom variant="h5" component="div">
                        {bookName.charAt(0).toUpperCase() + bookName.slice(1)}
                    </Typography>}
                </CardContent>
                {selectedBook !== id && <CardActions>
                    <Button size="small" onClick={() => handleEdit(id)}>Edit</Button>
                    <Button size="small" color={'error'} onClick={() => handleDelete(id)}>Delete</Button>
                </CardActions>}
                {selectedBook === id &&
                    <EditBook bookName={bookName} id={id}/>}
            </Card>
        </div>
    )
};


export default BookShow;