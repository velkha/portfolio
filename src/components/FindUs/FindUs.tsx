import "./FindUs.css";
import GoogleMap from 'components/FindUs/GoogleMap/GoogleMap';
const FindUs = () => {

    return (
        <div id="findUs">
            <div>
                <h1>Donde encontrarnos</h1>
            </div>
            <div>
                <p id='findUsTxt'>Carr. de Peñaranda, s/n 37800 Alba de Tormes Salamanca España</p>
            </div>
            <div className='findMap' >
                <GoogleMap />
            </div>
        </div>
    );
};

export default FindUs;