import React from 'react';

function Projects() {
    return (
        <div className='PROJECTS-main'>
            <div class="proj-left-child">
                <p></p>
            </div>
            <div class="proj-mid-child">
                <h2 class="projects-title">Projects</h2>
                
                <section class="project-class">
                    <article className="project-text">
                        <div className='project-encapsulation'>
                            <h3 class="project-title">Dangerous Lighting
                                <a class="project-link" href='https://dangerouslighting.netlify.app'target="_blank"rel="noreferrer"> dangerouslighting.netlify.app</a>
                            </h3>
                            <p className="project-description"> Wildfire mapping in real time. Built with a React.js frontend and an Express.js backend, incorporating IRWIN and EONET APIs.</p>
                        </div>
                    </article>
                    <img className = "project-image" src={require("../images/dangerous-lighting.png")}/>
                </section>
                
               
                
                    
                
            </div>

            <div class="proj-right-child">
                <p></p>
            </div>


        </div>
    );
}

export default Projects;