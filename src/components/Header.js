import React, {useContext} from "react";
import BooksContext from "../context/books";



const Header = () => {

    const { handleSearch } =  useContext(BooksContext);

    const handleSearchTerm = (e)=>{
        handleSearch(e.target.value);
    };

    return (
        <div className={'header'}>
            <div className="row">
                <div className="col-12 bg-dark p-3">
                    <div className="row">
                        <div className="col-10">
                            <h2 className={'text-white px-3'}>Reading Books List</h2>
                        </div>
                        <div className="col-2">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search your books" aria-label="Search" onChange={(e)=>handleSearchTerm(e)}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;