import React from 'react';
// import { createStore } from 'redux';
import { Header } from './Header/Header';
import './main.global.css';
import { SearchBlock } from './SearchBlock/Searchblock';

// const store = createStore(() => {});

export function App() {
    return (
        <div>
            <Header />
            <SearchBlock />
        </div>
    )
}

