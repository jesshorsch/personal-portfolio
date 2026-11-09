import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, useGSAP);

function Typewriter({text, duration = 3}) {
    let textRef = useRef(null);
    let cursorRef = useRef(null);

    useGSAP(() => {
        gsap.to(textRef.current, {duration, text, ease:"none"});
        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: "steps(1)",
        });
    }, [text, duration]);

    return (
        <>
        <span ref={textRef}></span>
        <span ref={cursorRef}>|</span>
        </>
    )
}


export default Typewriter