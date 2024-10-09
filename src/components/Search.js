import React, { useRef } from 'react';
import '../styles/Search.css'

const Search = () => {
    const modalRef = useRef(null);
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const closeSearch = () => {
        modalRef.current.classList.remove('blur_search');
        searchRef.current.classList.remove('open_search');
    };

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div class="modal d-block" id="modalSearch" ref={modalRef} onClick={closeSearch}>
            <form class="search" id="search" ref={searchRef}> 
                <input class="searchInput" type="search" id="query" ref={inputRef} name="q" placeholder="Search..." />
                <button class="searchModalButton" id="searchModalButton">Search</button>
            </form>
        </div>
    );
}

const openSearch = () => {
    const modal = document.getElementById("modalSearch");
    const search = document.getElementById("search");
    const input = document.getElementById("query");
    modal.classList.add('blur_search');
    search.classList.add('open_search');
    input.focus();
};

export { Search, openSearch };