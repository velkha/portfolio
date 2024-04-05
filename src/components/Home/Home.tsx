import "./Home.css";
import {translator} from 'utils/lang.tsx';
import {generateParagraphs} from 'utils/textUtils.tsx'
 
const Home = () => {
    return (
        <div id="home">
            <div>
                <h1>TEST TEST</h1>
                {generateParagraphs(translator["main_text"])}
            </div>
            <div>
                <p>TEST TEST</p>
            </div>
        </div>
    );
};



export default Home;