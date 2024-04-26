import React from 'react'
import Card from './Card'

const Service = () => {
    return (

        <main>
            <div className="imgBack">
                <div className="developerDiv">
                    <h1>Mern Stack Web Developer</h1>
                    <p>Home/Services</p>
                </div>
                <div className="svgContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,96L34.3,117.3C68.6,139,137,181,206,176C274.3,171,343,117,411,117.3C480,117,549,171,617,186.7C685.7,203,754,181,823,154.7C891.4,128,960,96,1029,117.3C1097.1,139,1166,213,1234,208C1302.9,203,1371,117,1406,74.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                </div>

            </div>
            <h1 className='headingBoost'>
                <span>Boost Your Business With</span>
                <span>The Power of Our Best Service</span>
                <div className="lineBoost">
                </div>
            </h1>
            <div className="divServiceContainer">
                <div className="leftDiv">
                    <h2>
                        Mern Stack Developer?
                    </h2>
                    <p>MERN Stack Web Developer
                        A MERN stack developer is a professional who specializes in using the MERN stack to build web applications. The term "MERN stack" refers to a collection of JavaScript-based technologies used for developing modern web applications.</p>

                    <p>MERN stack developers, proficient in MongoDB, Express.js, React.js, and Node.js, play a crucial role in the modern web development landscape.</p>

                    <h3>
                        Here is why they're important
                    </h3>
                    <p><span className='numberingLine'>1.</span> Full Stack Expertise: MERN developers are skilled in both frontend and backend development, allowing them to build entire web applications from scratch.</p>
                    <p><span className='numberingLine'>2.</span> Efficiency: MERN stack promotes a uniform development environment, where JavaScript is used throughout the stack. This leads to increased efficiency as developers can work seamlessly across frontend and backend components.</p>
                    <p><span className='numberingLine'>3.</span> Real-time Applications: Node.js, with its event-driven architecture, is well-suited for building real-time applications. MERN stack developers can leverage this capability to create dynamic, interactive web applications like chat apps or live dashboards.</p>
                </div>
                <div className="rightDiv">
                    <h2>Services</h2>
                    <div className="serviceName">
                        Mern Stack Web Developer
                    </div>
                    <div className="serviceName">
                        Mern Stack Web Developer
                    </div>
                    <div className="serviceName">
                        UI/UX Web Developer
                    </div>
                    <div className="serviceName">
                        WordPress Web Developer
                    </div>
                    <div className="serviceName">
                        Python Web Developer
                    </div>
                    <div className="serviceName">
                        PHP Web Developer
                    </div>
                    <div className="serviceName">
                        Search Engine Optimization
                    </div>
                </div>
            </div>
            <div className="creativeSolution">
                <h1>Creative Solutions of UI/UX Designers</h1>
                <p>UI/UX designers employ a range of creative solutions to address challenges and enhance user experiences in various services. UI/UX designers can craft innovative and user-centric experiences that meet the needs and expectations of users.</p>
            </div>
            <div className="fourBox">
                <div className="boxAll">
                    <h2>Personalization and Customization</h2>
                    <p>Offering personalized experiences tailored to individual user preferences and behaviors. This can include personalized recommendations, content customization options, and adaptive interfaces that adjust based on user input.</p>
                </div>
                <div className="boxAll">
                    <h2>Storytelling</h2>
                    <p>Offering personalized experiences tailored to individual user preferences and behaviors. This can include personalized recommendations, content customization options, and adaptive interfaces that adjust based on user input.</p>
                </div>
                <div className="boxAll">
                    <h2>Accessible Design</h2>
                    <p>Incorporating accessibility features and considerations to ensure that digital interfaces are usable by individuals with disabilities. Accessible design practices include providing alternative text for images, keyboard navigation support, and adjustable text sizes.</p>
                </div>
                <div className="boxAll">
                    <h2>Data Visualization</h2>
                    <p>Presenting complex data and information in visually engaging and comprehensible formats, such as charts, graphs, and infographics. Effective data visualization helps users understand trends, patterns, and insights more easily.</p>
                </div>
            </div>
            <Card />
        </main>
    )
}

export default Service
