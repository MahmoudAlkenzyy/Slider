import { Fragment } from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import style from'./slider.module.css'
function Slideer({ movie }) {
    
   

    const movidePic =
        movie &&
        movie.map((item) => (

            <div className="card bg-dark text-white m-1">
        <img className="card-img " src={item.Images[1]} alt="image" d={item.imdbID} style={{height:'300px'}}/>
        <div className="card-img-overlay d-flex flex-column">
            
            <h3 className="card-text font-weight-bold"><span className="mr-auto"></span></h3>
                        <div className="mt-auto w-900 pr-5 " style={{backdropFilter:' blur(5px)'}}>
                            <h4 className="card-title" style ={{Left:'5px'}}>{item.Title}</h4>
                            {item.Genre}</div>
        </div>
                </div>
         
            // <img src={item.Images[1]} alt='imagem' title='imagem' id={item.imdbID} style={{height:'200px'}}/>
  ))
    return (
        <div className={`${style.main} container main`}>
        <Slider autoplay={3000}>
        {movie.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.Images[1]}') no-repeat  center` }}
            className={style.imgs}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
           
              {console.log(item)} 
            </div>
          </div>
        ))}
      </Slider>
      </div>
    )
}
export default Slideer;