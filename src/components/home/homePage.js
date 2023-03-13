
import { useSelector } from 'react-redux';
import Cards from '../cards/cards';
import Slider from '../slider/slider';
import style from './home.module.css'


const Homa = () => {
    
  const {movie} = useSelector((state) => state.movie)
  
  return (

    <div className={`${style.mainc}`}>
    
      <div className={` container`}>
      
        <div className={` `}>
          <img src='https://images8.alphacoders.com/100/1003220.png' alt='imgs ' className={`${style.fir}`} />

          
        </div>
        
        <div className={`{style.card}`}>
        <Cards data={movie} /></div>
      </div>
      
     
    </div>
    
      );
}
 
export default Homa;
