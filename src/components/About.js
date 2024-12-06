function About(){
    return(
        <header className="comp-header">
        <div className="main-about">
            <div className="first-about">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant,
                   focused on traditional recipes served with a modern
                   twist.
                </p>
            </div>
            <div className="second-about">
                <img className="image1"
                src={require("../assets/restaurant.jpg")}
                alt="little lemon restaurant"
                />
                <img className="image2"
                src={require("../assets/marioandadrian.jpg")}
                alt="little lemon restaurant"
                />
            </div>
        </div>
        </header>
    )
}

export default About;