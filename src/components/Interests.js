import React from 'react';

function Interests() {
    return (
        <div className='INTERESTS-main'>
            <div class="mid-child">
                <h2 class="interests-title">Personal interests</h2>
                <ul class="interests-list">
                    <article class="interest-class">
                        <img 
                        class="interest-image" 
                        src={require("../images/chopper-burn-norcal.jpg")} 
                        alt="A slithery little friend" 
                        />

                        <div class="encapsulation">
                            <p class="interest-text">I’m interested in environmental hazards and risk management. Wildfire will worsen by several orders of magnitude over the next fifty years in the Pacific Northwest and Russia. I enjoy using statistical approaches in combination with assumption hunting to examine risk in maybe a systems theoretic context.</p>
                        </div>
                    </article>

                    <article class="interest-class">
                        <img 
                        class="interest-image" 
                        src={require("../images/mpb.jpg")} 
                        alt="A mountain pine beetle" 
                        />
                        <div class="encapsulation">
                            <p class="interest-text">I specifically find bark beetles really interesting. The term bark beetle isn't a classification as much as a four-letter word for any of a class of ~6,000 insects that predate trees. They're currently blamed for exacerbating wildfires in the west by killing trees, mostly pine, spruce, and fir, and there appears to be almost no real evidence that bark beetles actually make fire risk or fire intensity worse.</p>
                        </div>
                    </article>

                    <article class="interest-class">
                        <img 
                        class="interest-image" 
                        src={require("../images/EARC_heat.JPG")} 
                        alt="Rowing in a shell, dressed like an idiot." 
                        />
                        <div class="encapsulation">
                            <p class="interest-text">I was a decent rower. In large part, I became a math major because of an interesting combinatorial optimization problem I encountered within the sport.</p>
                        </div>
                    </article>

                    <article class="interest-class">
                        <img 
                        class="interest-image" 
                        src={require("../images/EARC-champs.JPG")} 
                        alt="EARC champions" 
                        />
                        <div class="encapsulation">
                            <p class="interest-text">A good day at Eastern Sprints. Not much more to say. </p>
                        </div>
                    </article>

                </ul>

            </div>
        </div>
    );
}

export default Interests;