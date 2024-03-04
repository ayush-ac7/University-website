import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

export default function About() {
    return (
        <div className="about">
            <div className="left-about">
                <img src={about_img} alt="" className="about-img" />
                <img src={play_icon} alt="" className="play-icon" />
            </div>
            <div className="right-about">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embrack on a transformative educational journey with our
                university's comprehensive education programs. Our cutting-edge
                curriculam is designed to empower students with the knowledge,
                skills, and experiences needed to excel in the dynamic field of
                education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized
                mentorship, our program prepare aspiring educators to make a
                meaningful impact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, 
                counselor, or educational leader, our diverse range of programs
                offers the perfect pathway to achieve your goals and unlock your
                full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}