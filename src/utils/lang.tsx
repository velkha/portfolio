import ES from './langs/es.json';
import EN from './langs/en.json';

const aviableLangs = ['ES','EN']

function getLang() {
    let test = aviableLangs[genRandomInt(aviableLangs.length-1)];
    return test;
}

function genRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

function getTranslator(){
    let lang = getLang();
    console.log(lang);
    let translator;
    switch(lang){
        case 'ES':
            translator=ES;
            break;
        case 'EN':
            translator=EN;
            break;
        default:
            translator=ES;
            break;
    }
    return translator;
}

export const translator = getTranslator();