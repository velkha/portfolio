

export function updateContent(newContent: string, contentDiv: string) {
    const container = document.getElementById(contentDiv);
    console.log(container, contentDiv, newContent)
    if(container!=null){
        container.classList.add('contentAnimated');
        container.style.animationName = 'disappear';
        setTimeout(() => {
            container.innerHTML = newContent;
            container.style.animationName = 'appear';
        }, 1000); 
    }
}