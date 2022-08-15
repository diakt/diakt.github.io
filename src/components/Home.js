import React from 'react';

function Home() {
    return (
        <div className='HOME-div'>            
            <div className='mid-child'>
                <img
                class="main-image"
                alt="People yelling loudly after winning a rowing regatta"
                src={require("../images/ira-win.jpg" )}
                />
                <h2 class="main-text"> Welcome to my page.</h2>
            </div>
        </div>

    );
}

export default Home;