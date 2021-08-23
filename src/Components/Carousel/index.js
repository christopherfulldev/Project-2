import Carousel from 'react-bootstrap/Carousel'

import "./index.css";

const FirstCarousel = (props) => {
   console.log(props.gameList.gameList.results);
  
  const siteInfo = [{
    title: "thousands of games...",
    description: "Find your favorites!!!"
    },{
      title: "Action for all...",
      description: "War!!!"
    },{
      title: "Adventure",
      description: "to share..."
    },{
      title: "Invite your friends!",
      description: "Multiplayer"
    },{
      title: "GameHub",
      description: "your game channel."
  }]

  return(
    <>
      <Carousel interval={2000} className= "carouselcontainer">
      {
        props.gameList.gameList.results.map((el, index)=> {
        const currentIndex = (index-5) <0 ? index : index-5  
          return (
            <Carousel.Item key={el.id ++}>
            <img
              className="d-block w-100"
              src={el.background_image}
              alt={el.name}
            />
            <Carousel.Caption key={el.id}>
              <h3 key={el.id} className= "titleclass">{siteInfo[currentIndex].title}</h3>
              <p key={el.id} className= "descriptionclass">{siteInfo[currentIndex].description}</p>
            </Carousel.Caption> 
            </Carousel.Item>
            )
          })
      }
      </Carousel>
    </>
  )
}

export default FirstCarousel;