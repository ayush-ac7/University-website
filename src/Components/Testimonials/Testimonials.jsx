import "./Testimonials.css"
import back_icon from "../../assets/back-icon.png"
import next_icon from "../../assets/next-icon.png"

export default function Testimonials() {
    return (
        <div className="testimonials">
            <img src={back_icon} alt="" className="back-btn" />
            <img src={next_icon} alt="" className="next-btn" />
            <div className="slider"></div>
        </div>
    )
}