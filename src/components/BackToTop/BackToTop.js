import { height } from "@mui/system";
import { useEffect, useState } from "react";
import style from './BackToTop.module.css'
const BackToTopButton = () => {
    const [backToTopButton,setBackToTopButton]=useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 400){
               setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
                }
           
        },[])
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
             behavior:'smooth'      
         })
    }
    return ( 
        <div style={{
            backgroundColor: "linear-gradient(to right, #232526, #414345)",
        }}>
            {backToTopButton && (<button className={style.btnn} onClick={scrollUp} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="65" fill="currentColor" class="bi bi-arrow-up" viewBox="0 10 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg></button>)}
        </div>
     );
}
 
export default BackToTopButton;