
import about from "../assets/about.JPG"
import { Button } from "@/components/ui/button"

function About () {
    return (
        <section  className = "bg-black relative min-h-screen text-white flex justify-center align-items flex-col gap-10" >
            <img className = "absolute top-20 right-0 w-120" src={about}></img>
            <div className = "flex gap-10 flex-col max-w-2xl px-10 -mt-30">
            <h1>About</h1>
            <h2>I’m Jess, a newcomer producer who loves to create dark, atmospheric soundscapes   </h2>
            <p>
            Just having entered my 20s, I’ve been producing for 5 years. Starting out on GarageBand on my iPad out of pure curiosity, it since never left me. I self-thought myself to play guitar and the piano to support my songwriting process. 

Nowadays, I work in Logic Pro from my cozy homestudio. I keep a rather minimalistic plugin suite. Some of my favorites include U-He (Diva, Tyrell), Arturia (Juno-6V, Analog Lab), Soundtoys (Decapitator, LittleAlterBoy) among others. 

In my projects, I prioritize following the vibe and not being afraid to break supposed “rules” - Everything that sounds right is right. When collaborating with artists, I make sure to create an atmosphere which is free from judgement and makes it easy to reach your creative flow, making our work feel real and authentic.  

My dream is to be able to pursue producing music full-time (altough sometimes, it already feels like a full-time job). Until then, I’d love to work with artists from a variety of backgrounds. Whether you’re already experienced in collaborations or just starting out, I’ll happily call you my client:) 
            </p>
            </div>

            <Button className = "absolute bottom-10 left-10" size="sm" variant="outline"
            onClick={() => 
                    document.getElementById("about")?.scrollIntoView({behavior: "smooth"})
                }>
            Collaborations
            </Button>
        </section>
        
    )
}

export default About