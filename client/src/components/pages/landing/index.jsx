import React from 'react';
import './index.css';
import Navigation from '../../navigations';
import Header from '../../header';
import TopPick from '../../topPick';

export default function Landing() {
    return(
        <main>
            <Navigation />
            <Header />
            <TopPick />
        </main>
    )
}