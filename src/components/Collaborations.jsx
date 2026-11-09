import Typewriter from "./Typewriter"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import studioVibes from "../assets/studio-vibes.jpeg"
import laptopDiva from "../assets/laptop-diva.jpeg"

function Collaborations() {

    

return (
    <section className = "min-h-screen bg-black relative text-white flex flex-col gap-10 ml-10 mt-20 mr-10">
        <h1 className = "flex mt-20">Collaborations</h1>
        <h2><Typewriter text="Hello there" duration={10}></Typewriter></h2>
        <section className = "grid grid-cols-2 text-center mt-20">
            <div className = "flex flex-col gap-4">
                <div className = " border-2 border-gray-500 p-4">
                <h2 className = "">Productions</h2>
                <p>Lets work on a project together</p>
            </div>
            <p>-non-paid basis</p>
            <p>-50/50 royality splits</p>
            </div>
            
            
            <div className = "border-2 border-red-500 p-4 mr-10">
                <h2>Mixing</h2>
                <p>I help bring your project to the next level</p>
            </div>
            
        </section>

        <Carousel className = "w-full px-10 ">
            <CarouselContent>
                <CarouselItem>
                    <div className = " text-black" >
                        <img  src={laptopDiva}className = "w-60 h-auto object-cover"/>
                    
                    </div>
                </CarouselItem>
                
                <CarouselItem>
                    <div className = " text-black">
                    <img src={studioVibes} className = "w-60 h-auto object-cover"></img>
                    </div>
                </CarouselItem>
                
                <CarouselItem>
                    <div className = "bg-amber-400 text-black">
                        Song 3 
                    </div>
                </CarouselItem>
            </CarouselContent>
        <CarouselPrevious className = "left-2" />
        <CarouselNext className = "right-2" />
        </Carousel>
        
    </section>
)
}

export default Collaborations