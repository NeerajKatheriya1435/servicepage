import React from 'react'
import "../components/card.css"
const Card = () => {
    return (
        <div>
            <main className='myMainContainer'>
                <h1 className="offerService">
                    We Offer UI/UX Design Services for Major Industry
                </h1>
                <div className="mainCardBox">
                    <div className="singleCard">
                        <img src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww" alt="" />
                        <h3>Travel</h3>
                    </div>
                    <div className="singleCard">
                        <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
                        <h3>Agriculture</h3>
                    </div>
                    <div className="singleCard">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D" alt="" />
                        <h3>Electronics</h3>
                    </div>
                    <div className="singleCard">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <h3>Travel</h3>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Card
