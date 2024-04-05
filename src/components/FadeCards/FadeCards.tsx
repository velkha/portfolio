import "./FadeCards.css";

type PropFadeCard = {
        img: string; 
        ahref: string;
        color: string;
        size: string;
        type: string;
}
type PropFadeCardList = {
    propsMap: {
        key: string;
        img: string;
        ahref: string;
        color: string;
        size: string;
        type: string;
    }[]
}

function FadeCard(props: PropFadeCard)
{
    let sizeClass, typeClass;
    if(typeof props.color === 'undefined' || props.color == null) props.color = 'grey';
    if(typeof props.ahref === 'undefined' || props.ahref == null) props.ahref = '#';
    sizeClass = getCardSize(props.size);
    typeClass = getCardType(props.type);

    return(
        <div className="cards">
            <div className={"card "+typeClass+" "+sizeClass} data-color={props.color}>
                <img className="card-front-image card-image" src={props.img} />
                <div className="card-faders">
                   {getCardFadders(props.img)}
                </div>
            </div>
        </div>
    );
}

function getCardSize(size: string ){
    let sizeClass;
    if(typeof size === 'undefined' || size == null) sizeClass = '';
    else{
        switch(size.toLowerCase()){
            case "0":
            case "s":
            case "small":
            case "tiny":
                sizeClass='card-small';
                break;
            case "1":
            case "m":
            case "medium":
            case "average":
                sizeClass='card-medium';
                break;
            case "2":
            case "b":
            case "big":
            case "huge":
                sizeClass='card-big';
                break;
            default:
                sizeClass='card-medium';
                break;
        }
    }
    return sizeClass
}
function getCardType(type: string){
    let typeClass;
    if(typeof type === 'undefined' || type == null) typeClass = '';
    else{
        switch(type.toLowerCase()){
            case "0":
            case "s":
            case "square":
            case "normal":
                typeClass='type-square';
                break;
            case "2":
            case "r":
            case "rectangle":
                typeClass='type-rectangle';
                break;
            default:
                typeClass='type-square';
                break;
        }
    }
    return typeClass
}

function getCardFadders(img: string){
    
    let totalFadders = 8;
    let faddersArray = [];
    for (let i = 0; i < totalFadders; i++) {
        faddersArray.push(
            <img className="card-fader card-image" key={i+'fadder'} src={img} />
        );
    }
    return faddersArray;
}

function getArrayOfCards(propsMap: PropFadeCardList){
    return propsMap['propsMap'].map((item: PropFadeCard) => {
        return (
          <FadeCard {...item} />
        )
    })
}

export default function FadeCards(propsMap: PropFadeCardList){
    console.log(propsMap);
    
    return (
        <div className="card-body">
            {getArrayOfCards(propsMap)}
        </div>
    );
}
