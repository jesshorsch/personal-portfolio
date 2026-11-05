import coverArt from "../assets/coverArt.JPEG"
import coverBabydoll from "../assets/cover-babydoll.JPEG"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"


function Collaborations() {
    return (
        <section id = "collaborations" className = "relative min-h-screen text-white">
        
            <img className="h-full w-full absolute " src={coverArt} alt="Cover Art" />
        

        <div className = "relative z-20 flex min-h-screen items-center justify-center">
        <Carousel className = "w-full max-w-md">
            <CarouselContent>
                <CarouselItem>
                    <div className = "bg-pink-500 text-black" >
                        <img src={coverBabydoll} className = "w-full h-auto object-cover"/>
                    
                    </div>
                </CarouselItem>
                
                <CarouselItem>
                    <div className = "bg-amber-50 text-black">
                    Babydoll
                    </div>
                </CarouselItem>
                
                <CarouselItem>
                    <div className = "bg-amber-400 text-black">
                        Song 3 
                    </div>
                </CarouselItem>
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        </div>

        <Button className = "absolute bottom-10 left-10 z-30" size="sm" variant="outline"
            onClick={() => 
                    document.getElementById("about")?.scrollIntoView({behavior: "smooth"})
                }
            >About
            </Button>
        </section>
    )
}

export default Collaborations;