import React, {useContext} from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";


const BookList = () => {

    const {bookTitle} = useContext(BooksContext);

    const booksArr = bookTitle.map((elem) => {
        return (
            <div className={'mx-3 mt-3 mb-2'} key={elem.id}>
                <BookShow bookName={elem.name} id={elem.id}/>
            </div>
        )
    });


    return (
        <div className={'book-list container-fluid'}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
                    {booksArr}
                </div>
                {bookTitle.length === 0 && <div className="row">
                    <div className="col-12">
                        <div className="waviy">
                            <span>N</span>
                            <span>o</span>
                            <span className={'mx-2'}></span>
                            <span>B</span>
                            <span>O</span>
                            <span>O</span>
                            <span>K</span>
                            <span>S</span>
                            <span className={'mx-2'}></span>
                            <span>F</span>
                            <span>O</span>
                            <span>U</span>
                            <span>N</span>
                            <span>D</span>
                            <span className={'mx-2'}></span>
                            <span>!</span>
                        </div>
                    </div>
                </div>}
            </div>

        </div>
    )
};


export default BookList;