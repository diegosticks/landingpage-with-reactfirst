import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-regular-svg-icons"

const Main = () => {
    return(
        <section>
            <div className="details">
                <div className="info">
                    <h1>Better Solutions For Your Business</h1>
                    <p className="info-paragraph">
                        We are team of talented designers making websites with Bootstrap
                    </p>
                    <div className="controls">
                    <button className="info-button">Get Started</button>
                    <span><FontAwesomeIcon icon={faCirclePlay} ></FontAwesomeIcon><span className="sp">Watch Video</span></span>
                    </div>
                </div>
                <div className="pic-div">
                    <img src="./sti.png" alt="operations"/>
                </div>
            </div>
        </section>
    );
}

export default Main;