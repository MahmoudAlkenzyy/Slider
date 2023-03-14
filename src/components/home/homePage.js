
import { useSelector } from 'react-redux';
import BackToTopButton from '../BackToTop/BackToTop';
import Cards from '../cards/cards';
import Slider from '../slider/slider';
import style from './home.module.css'


const Homa = () => {
    
  const {movie} = useSelector((state) => state.movie)
  
  return (

    <div className={`${style.mainc}`}>
    
      <div className={`${style.maind} container`}>
      
        <div className={` `}>
          <img src='https://images8.alphacoders.com/100/1003220.png' alt='imgs ' className={`${style.fir}`} />

          <Slider movie={movie} />
        </div>
         
        <div className={`{style.card}`}>
        <Cards data={movie} /></div>
      </div>
       
     <BackToTopButton/>
    </div>
    
      );
}
 
export default Homa;
