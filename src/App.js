import React, {useContext, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

import Header from "./components/Header";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";


function App() {

    const { stableFetchBooksList , searchTerm, settingBookTitle} = useContext(BooksContext)

    useEffect(() => {
        if (searchTerm === '') {
            settingBookTitle();
        }
    }, [searchTerm,settingBookTitle]);

    useEffect(() => {
        stableFetchBooksList();
    }, [stableFetchBooksList])


    return (

        <div className={'main container-fluid'}>
            <div className="row d-flex flex-column">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <BookCreate/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <BookList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default App;