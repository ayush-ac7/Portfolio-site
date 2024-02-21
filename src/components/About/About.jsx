import "./About.css";

export default function About() {
    return (
        <section id="skills">
          <span className="skillTitle">About Me</span>
           <span className="skillDesc">Hey there! 👋 I'm your friendly neighborhood frontend developer, here to sprinkle some digital magic on your screen! I'm all about making websites not just look pretty, but work like a charm too. <br/> <br/>
            I'm like a digital architect, building cool stuff with code. From crafting sleek designs that catch your eye to making sure everything runs smoothly when you click around, I've got you covered. <br/> <br/>
            I love diving into new technologies and figuring out how to make them do awesome things. Whether it's making buttons dance or creating layouts that feel like a breeze, I'm always up for a challenge. <br/> <br/>
             So, if you're ready to take your online presence to the next level, let's chat! Together, we'll make your website shine brighter than a shooting star on a clear night. ✨</span>
             
            <div className="skillBars">
                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        {/* <h2>Website design</h2> */}
                        <p>
                        "Crafting Digital Experiences, One Pixel at a Time." 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}