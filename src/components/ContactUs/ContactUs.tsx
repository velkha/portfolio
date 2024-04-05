import "./ContactUs.css";
import iLogo from 'assets/facebooklogo.png';
import tLogo from 'assets/instagramlogo.png';
import fLogo from 'assets/tiktoklogo.png';
import tlfLogo from 'assets/tlfLogo.png';
import mailLogo from 'assets/mailLogo.png';
import FadeCards from "components/FadeCards/FadeCards";

export default function ContactUs() {
    let props = [];
    props.push({
        key: 'instagram',
        img: iLogo,
        ahref: '#',
        color: 'blue',
        size: 's',
        type: 's'
    });
    props.push({
        key: 'tiktok',
        img: tLogo,
        ahref: '#',
        color: 'green',
        size: 's',
        type: 's'
    });
    props.push({
        key: 'facebook',
        img: fLogo,
        ahref: '#',
        color: 'brown',
        size: 's',
        type: 's'
    });

    return(
        <div id='contactanos'>
            <div className="contacto">
                <div>
                    <h1>CONTACTANOS</h1>
                </div>
                <div>
                    <img src={tlfLogo} />
                    <p>+34 666666666</p>
                </div>
                <div>
                    <img src={mailLogo} />
                    <p>testesttesteqwet1qwe@gmail.com</p>
                </div>
            </div>
            <div className="redes">
                <FadeCards propsMap={props} />
            </div>
        </div>
    )
}