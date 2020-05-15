import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Homestyling extends Component {
    render() {
        return (
    <>
        <div class="wide">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/homestyle1.jpg"
                    alt="Homestyle"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/homestyle2.jpg"
                    alt="Homestyle"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../images/homestyle3.jpg"
                    alt="Homestyle"
                    />
                </Carousel.Item>
                </Carousel>
        </div><br></br>
        <h2 className="welcome"> Welcome to my Home! </h2>
        <p className="styling">I actually realized I really enjoy decorating and it has a way of calming me down and making me happy. I do it
        in an affordable reasonable way and I thought what a better way to share my tips and tricks with you guys!</p>
        <p className="styling">Everyone loves a beautiful home but the hardest part is when you have no idea where to get what at a fraction 
        of the price. Haven't really seen anyone do it besides we all do it differently so here starts my journey with you guys!</p>
    </>
        )
    }
}

export default Homestyling;