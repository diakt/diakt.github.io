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
                            <h3 class="project-title">Dangerous Lighting</h3>
                            <a class="project-link" href='https://dangerouslighting.netlify.app' target="_blank" rel="noreferrer"> dangerouslighting.netlify.app</a>

                            <p className="project-description">
                                Displays up-to-date wildfire data in the United States.
                                Geolocates user and displays wildfires in their area, while allowing users to search for non-local wildfires.
                                Tranches events by size and severity, and displays relevant data including the number of acres burned, the number of structures destroyed, and the number of fatalities.


                            </p>
                            <p className="project-description">
                                Built with a React.js frontend and an Express.js backend, incorporating IRWIN and EONET APIs.
                                Incorporates MapboxGL and asdfasdf libraries.

                            </p>
                        </div>
                    </article>
                    <img className="project-image" src={require("../images/dangerous-lighting.png")} />
                </section>

                <section class="project-class">
                    <article className="project-text">
                        <div className='project-encapsulation'>
                            <h3 class="project-title">Hopital</h3>
                            <a class="project-link" href='https://hopital-deluxe.netlify.app' target="_blank" rel="noreferrer"> hopital-deluxe.netlify.app</a>

                            <p className="project-description">
                                A hospital scheduling management system which allows healthcare stakeholders to create, edit, and update medical appointments.
                                Offers separate portals for patients, schedulers, and providers, with significant interplay between the actions of all three.
                            </p>
                            <p className="project-description">
                                Built with fullstack Django with PostgreSQL.
                                Implementation includes custom user authentication, registration, and login, as well as multiple user classes.
                            </p>
                        </div>
                    </article>
                    <img className="project-image" src={require("../images/hopital.png")} />
                </section>

                <section class="project-class">
                    <article className="project-text">
                        <div className='project-encapsulation'>
                            <h3 class="project-title">Markov Snakes and Ladders</h3>
                            <a class="project-link" href='https://markovsnakes.netlify.app' target="_blank" rel="noreferrer"> markovsnakes.netlify.app</a>

                            <p className="project-description">
                                An application of Markov chain processes to solve for expected stopping time (average number of rolls) for the game Snakes and Ladders.
                                A count-measuring mockup of snakes and ladders, coupled with a page for explaining some fairly tractable features of Markov Chains.
                            </p>
                            <p className="project-description">
                                Built with Typescript and React.js.
                            </p>
                        </div>
                    </article>
                    <img className="project-image" src={require("../images/markov.png")} />
                </section>





            </div>

            <div class="proj-right-child">
                <p></p>
            </div>


        </div>
    );
}

export default Projects;