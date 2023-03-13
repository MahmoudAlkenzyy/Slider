
import { useSelector } from 'react-redux';
import Slider from '../slider/slider';
import style from './home.module.css'


const Homa = () => {
    
  const {movie} = useSelector((state) => state.movie)
  
  return (
    <div className={`${style.mainc}`}>
    <div className={` container`}>
      
      <div className={`${style.fir} `}>
      </div>
      
      </div>
      
     
        </div>
      );
}
 
export default Homa;
