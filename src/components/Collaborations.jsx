

function Collaborations() {


return (
    <section className = "min-h-screen bg-black relative text-white flex flex-col gap-10 ml-10 mt-20 ">
        <h1 className = "flex mt-20">Collaborations</h1>
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
        
    </section>
)
}

export default Collaborations