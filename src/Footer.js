const Banner = (props) =>{
    return(<>
        <div className="banner-div">
            <h5>{props.banner}</h5>
        </div>
    </>);
}

const Aboutus = () =>{
    return(<>
        <div className="aboutus">
            <h4>ABOUT US</h4>
        </div>
    </>);
}

function Footer(){
    return(<>
        <div className="footer">
            <div className="ban">
                <Banner banner="myob"/>
                <Banner banner="BELIMO"/>
                <Banner banner="LiteGroups"/>
                <Banner banner="Lilly"/>
                <Banner banner="citrus"/>
                <Banner banner="Trustly"/>
            </div>
            <Aboutus/>
        </div>
    </>);
}

export default Footer;