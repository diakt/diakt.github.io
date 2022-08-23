import React from 'react';


function ProjItem(props) {
    

    return (
        <section className='ProjItem'>
            <img className = "ProjectImage"></img>
            <h2 className='ProjectTitle'>Project Name</h2>
            <p className='ProjectDescription'>Project Text Description</p>
            <p className='ProjectUsed'></p>
        </section>
    );
}

export default ProjItem;