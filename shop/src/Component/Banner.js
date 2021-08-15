import React from 'react';
import { Carousel} from 'react-bootstrap';

const Banner = () => {
    
    return (
        <Carousel style={{ width: '60%',marginLeft:'auto', marginRight:'auto'}}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://web-asset2.mebmarket.com/adbanner/banner_mebad_1626862221.jpeg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://web-asset2.mebmarket.com/adbanner/banner_mebad_1626421387.jpeg"
                alt="Second slide"
            />
        
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://web-asset2.mebmarket.com/adbanner/banner_mebad_1627612614.jpeg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>        
     );
}
 
export default Banner;