import { Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import style from'./slider.module.css'
import { MDBCard, MDBCardBody, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
function Slideer({ movie }) {
    
   

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    const movidePic =
        movie &&
        movie.map((item) => (

        //   
        <MDBCard className='m-1'>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        >
                        <MDBCardImage src={item.Poster} fluid className="w-100 " style={{height:'300px'} }  />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                
              </div>
            </div>
            <div className="hover-overlay">
              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} ></div>
            </div>
          </a>
        </MDBRipple>
                    <MDBCardBody>
                        <div style={{righ:"5px"}} className={`{} w-25 mb-2 `}> <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="18" fill="currentColor" class="bi bi-star" viewBox="0 2 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg> {item.imdbRating}</div>
                   
                        <a href="#!" className="text-reset">
                            
                    <h6 className="card-title mb-1">{item.Title}</h6>
          </a>
          

                    </MDBCardBody>
                    <hr class="my-0" />
                    <MDBCardBody className="pb-0">
                 <p className="small text-muted">   {item.Genre}</p>
                    </MDBCardBody>
      </MDBCard>
         
            // <img src={item.Images[1]} alt='imagem' title='imagem' id={item.imdbID} style={{height:'200px'}}/>
  ))
    return (
      <div className={`${style.main} container main`}>
        
        
        <Carousel responsive={responsive} dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px" ssr={true} 
          infinite={true}
    
        >
      {movidePic}
    </Carousel>;
        
{   /*     <Slider autoplay={3000} direction="vertical">
        {movie.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.Poster}') no-repeat  center cover` }}
            className={style.imgs}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
           
              {console.log(item)} 
            </div>
          </div>
        ))}
        </Slider>*/}
      </div>
    )
}
export default Slideer;