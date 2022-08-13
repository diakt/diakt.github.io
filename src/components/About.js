import React from 'react';

function About() {
    return (
        <div>
            <div class="left-child"> 
                <ul class="left-child-image-ul">
                    <img class="left-child-image" src="/images/end-of-fireline copy 3.jpg" altID="Standing with Pulaski axe in hand, a wildfire in the background"/>
                        <div id="encapsulation"> 
                            <p class="left-child-image-captions"> Getting it done in Colorado on the Cameron Peak. Fire was sat down when we got there in late October at around 140k acres, caught some snow and then exploded. The very last day of the very last run of the year. High wind, point protection, the stuff you wait an entire year for. Crown runs, torching, berserk spotting, good times with great people.</p>
                        </div>
                </ul>
            </div>


            <div class="mid-child">
                <img class="thin-image" src="images/post-walk-norcal.JPG" alt="not sure how to describe this one"/>
                    <h2 class="inner-text"> Well, hello.</h2>
                    <p class="inner-text">My name is Gavin. I'm a bit of a mutt, but I'd say I'm from Washington state. I’m a mathematics major at Columbia graduating in the summer of '22. I'm more of an analyst than an algebraist, more of a probabilist than an analyst, and more of a fool than a probabilist. </p>
                    <p class="inner-text">I was born on Vancouver Island, Canada, and moved to western Washington when I was four years old. I went back to Canada for high school, then worked/taught for a year in Canberra, Australia. I decided to go to university while working in the diabetes research group at B.C. Children’s Hospital in Vancouver, Canada, and was accepted to Columbia to study classics.</p>
                    <p class="inner-text">I began to love mathematics at Columbia, and my favorite coursework was in the Real Analysis series, the Markov chain seminar, and Honors Probability (the best class I’d never take again). I rowed lightweight throughout and somehow won a national championship at one point. I worked odd jobs throughout school and was a vice president of the oddest residence hall at Columbia, Wien Hall.</p>
                    <p class="inner-text">Near the end of my junior year, the pandemic started, and I decided to <s>drop out</s> wildland firefight out of PatRick Environmental’s base in Ellensburg, Washington. I enjoyed the work immensely. After the fire season ended, I worked at Zwift in a research role before returning to Columbia to study for my senior year.</p>
                    <p class="inner-text">If you have something to spare, I’ve attached a donation link in the bottom-right footer to contribute to Alexandra Elbakyan’s sci-hub project, which strives to ensure free open-source access to scientific research. It is difficult to overstate the importance of sci-hub in the fight to challenge current paradigms of pay-to-play knowledge access, and Elbakyan’s work has been sensational. I strongly advise that you visit sci-hub and see what it has to offer.</p>
            </div>

            <div class="right-child">
                <ul class="right-child-image-ul">
                    <img class="right-child-image" src="/images/saproxylic-insect.jpg" alt="saproxylic insect!"/>
                        <div id="encapsulation">
                            <p class="right-child-image-captions"> Decent little fellow. Think it was a White-spotted Sawyer (M. Scutellatus). Saproxylic insects locate dead or dying trees to plant their eggs in, and Scutellatus use pheromones to cluster heavily in post-wildfire areas. Trees with thick bark/high phloem usually rebuff saproxylic insects by flooding bores with sap when they're not weakened or dehydrated, although that can also be considered a comorbidity of... I'll stop talking about bugs.</p>
                        </div>
                </ul>
            </div>
        </div >
    );
}

export default About;