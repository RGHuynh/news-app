import React from 'react';
import './index.css';

export default function Header() {
    return(
        <header className="masthead">
            <div className="container">
                <div className="newsBio-container">
                    <div className="author-wrapper">
                        <h1 className="author">Samantha</h1>
                    </div>
                    <div className="title-wrapper">
                        <h1 className="title">How Millenials can make the world a better place</h1>
                    </div>
                    <div className="subtitle-wrapper">
                        <h2 className="subtitle">Lore dkfjlk dlfkjlk slkfj dfjkl</h2>
                    </div>
                    <button className="btn btn-primary">Read More</button>
                </div>
                <div></div>
            </div>
        </header>
    );
}