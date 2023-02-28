import {Carousel} from "react-bootstrap";
import React, {Component} from 'react';
import war1Img from '../assets/1i.jpg';
import war2Img from '../assets/2i.jpg';
import war3Img from '../assets/3i.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ war1Img }
                    alt= "War"/>
                    <Carousel.Caption>
                        <h3>Амазонські джунглі</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ war2Img }
                    alt= "War"/>
                    <Carousel.Caption>
                        <h3>Клімат дощових лісів Амазонки</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ war3Img }
                    alt= "War"/>
                    <Carousel.Caption>
                        <h3>Амазонський тропічний ліс
</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;

