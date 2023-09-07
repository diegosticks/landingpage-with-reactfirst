const Header = (props) => {
    return(
        <div className="header-div">
            <div className="logo-text">
                ARSHA
            </div>
            <div className="menu">
                <ul className="list">
                    <li className="list-item"><a className="home" href="#">{props.home}</a></li>
                    <li className="list-item"><a href="#">{props.about}</a></li>
                    <li className="list-item"><a href="#">{props.services}</a></li>
                    <li className="list-item"><a href="#">{props.portfolio}</a></li>
                    <li className="list-item"><a href="#">{props.team}</a></li>
                    <li className="list-item"><a href="#">{props.dropDown}</a></li>
                    <li className="list-item"><a href="#">{props.contact}</a></li>
                </ul>
                <div className="menu-button-div">
                    <button className="menu-button">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header;