import Carousel from 'react-bootstrap/Carousel'
import "./index.css"
import "../Carousel/is-call-of-duty-down-ps4-and-xbox-users-complains-about-game_3qxj.jpg"

const FirstCarousel = () => {

  return(
    <>
      <Carousel>

        <Carousel.Item style={{width: "35vw"}}>
          <img
            style={{width: "35vw"}}
            className="d-block w-100"
            src= {"../Carousel/is-call-of-duty-down-ps4-and-xbox-users-complains-about-game_3qxj.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide </h3>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src= "/public/is-call-of-duty-down-ps4-and-xbox-users-complains-about-game_3qxj.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide </h3>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/public/images.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide </h3>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default FirstCarousel;