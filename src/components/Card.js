import React from 'react'
import "../components/card.css"
const Card = () => {

    const services = [
        {
            image: "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww",
            name: "Travel"
        },
        {
            image: "https://media.istockphoto.com/id/471715003/photo/farmer.webp?b=1&s=170667a&w=0&k=20&c=HnHSNhjoqhjxybMnkNYlEKCQMLY622XWh7-fiH6Uvf4=",
            name: "Agriculture"
        },
        {
            image: "https://media.istockphoto.com/id/1006169700/photo/repairman-checking-voltage-with-digital-multimeter.webp?b=1&s=170667a&w=0&k=20&c=sw7YEITbKygpqvWqn_FPU_yJFs81WVQYsqpqhZWUTks=",
            name: "Electronics"
        },
        {
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
            name: "Fashion"
        },
    ]

    return (
        <div>
            <h1 className="offerService">
                We Offer UI/UX Design Services for Major Industry
            </h1>
            <main className='myMainContainer'>
                <div className="mainCardBox">
                    {services.map((value, index) => {
                        return (

                            <div className="singleCard">
                                <img src={value.image} alt="" />
                                <h3>{value.name}</h3>
                            </div>

                        )
                    })
                    }
                </div>
            </main>
        </div>
    )
}

export default Card
