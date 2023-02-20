import React from 'react';

function Home() {
    return (
        <div className='HOME-div'>            
            <div className='mid-child'>
                <img
                class="main-image"
                alt="As a quick aside, if you are using a screenreader, I have tried to make this website accessible. I apologize deeply if I have done so poorly. The image is of a boat of rowers, including myself, yelling after winning a national championship."
                src={require("../images/ira-win.jpg" )}
                />
                <h2 class="main-text"> Welcome to my page.</h2>
            </div>
        </div>

    );
}

export default Home;