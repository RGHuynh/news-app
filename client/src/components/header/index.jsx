import React from 'react';
import Background from '../../pictures/background.svg'
import './index.css';

export default function Header() {
    return(
        <header className="masthead">
            <div className="container masthead-container" style={{backgroundImage: `url(${Background})`}}>
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
                    <div className="btn-wrapper">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
                <div></div>
            </div>
        </header>
    );
}