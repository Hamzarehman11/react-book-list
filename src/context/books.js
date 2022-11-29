import React, {createContext, useCallback, useState} from "react";
import axios from "axios";
import {BaseURL} from "../components/BaseURL";


const BooksContext = createContext({});

const Provider = ({children}) => {

    const [bookTitle, setBookTitle] = useState([]);
    const [itemSource, setItemSource] = useState(bookTitle);
    const [selectedBook, setSelectedBook] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const fetchBooksList = async () => {
        const res = await axios.get(BaseURL);
        setBookTitle(res.data);
        setItemSource(res.data);
    };

    const stableFetchBooksList = useCallback(
        fetchBooksList,
        []
    )

    const getBookName = async (bookName) => {
        const response = await axios.post(BaseURL, {
            name: bookName.name
        })

        const allBooks = [...bookTitle, response.data];
        setBookTitle(allBooks);
        setItemSource(allBooks);
    };


    const onDelete = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const newBookList = bookTitle.filter((elem) => elem.id !== id);
        setBookTitle(newBookList);
        setItemSource(newBookList);
    };


    const onEdit = (id) => {
        setSelectedBook(id);
    };

    const handleSave = async (bookname, id) => {
        const res = await axios.put(`http://localhost:3001/books/${id}`, {
            name: bookname,
        });

        const updatedBooks = bookTitle.map((elem) => {
            if (elem.id === id) {
                return {...elem, ...res.data};
            } else {
                return elem;
            }
        });
        setBookTitle(updatedBooks);
        setItemSource(updatedBooks);
        setSelectedBook(null);
    };

    const handleCancel = () => {
        setSelectedBook(null);
    };


    const handleSearch = (term) => {
        setSearchTerm(term);
        let searchedBook = []
        if (searchTerm === '') {
            setBookTitle(itemSource);
        } else {
            searchedBook = bookTitle.filter(elem => elem.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setBookTitle(searchedBook);
        }
    };


    const value = {
        bookTitle,
        itemSource,
        selectedBook,
        searchTerm,
        stableFetchBooksList,
        fetchBooksList,
        getBookName,
        onDelete,
        onEdit,
        handleSave,
        handleCancel,
        handleSearch,
        settingBookTitle: ()=>{
            setBookTitle(itemSource);
        }

    }

    return (<BooksContext.Provider value={value}>
        {children}
    </BooksContext.Provider>)

};

export {Provider};
export default BooksContext;