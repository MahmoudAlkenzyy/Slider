
import { useSelector } from 'react-redux';
import Slider from '../slider/slider';
import style from './home.module.css'


const Homa = () => {
    
  const {movie} = useSelector((state) => state.movie)
  
  return (
    <div className={style.mainc}>
      
      
      <Slider movie={movie} />
      
     
        </div>
      );
}
 
export default Homa;
