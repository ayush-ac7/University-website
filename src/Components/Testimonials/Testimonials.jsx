import { useRef } from "react"
import "./Testimonials.css"
import back_icon from "../../assets/back-icon.png"
import next_icon from "../../assets/next-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"



export default function Testimonials() {
    // const Testimonials = () => {

        const slider = useRef();
        let tx = 0;
  
  
      const slideForward = () => {
              if(tx > -50) {
                  tx -= 25;
              }
              slider.current.style.tranform = `translateX(${tx}%)`
      }
  
      const slideBackward = ()=> {
  
      }
    

    return (
        <div className="testimonials">
            <img src={back_icon} alt="" className="back-btn" />
            <img src={next_icon} alt="" className="next-btn" />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                            <div>
                            
                                <h3>Harry Puttar</h3>
                                <span>Gurucul, Punjab</span>
                            </div>
                            </div>    
                          <p>Choosing to persue my degree at Gurucul was one of
                            the best decision I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                            <div>
                            
                                <h3>Jon Kumar Wesley</h3>
                                <span>Gurucul, Bihar</span>
                            </div>
                            </div>    
                          <p>Choosing to persue my degree at Gurucul was one of
                            the best decision I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                            <div>
                            
                                <h3>Hermoine Gupta</h3>
                                <span>Gurucul, Mumbai</span>
                            </div>
                            </div>    
                          <p>Choosing to persue my degree at Gurucul was one of
                            the best decision I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                            <div>
                            
                                <h3>Draco Singh Malfoy</h3>
                                <span>Gurucul, UP</span>
                            </div>
                            </div>    
                          <p>Choosing to persue my degree at Gurucul was one of
                            the best decision I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment
                            to academic excellence have truly exceeded my
                            expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}