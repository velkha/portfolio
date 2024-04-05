

export function generateParagraphs (parrafos: string[]) {
    return parrafos.map(item => {
        return(
            <p>{item}</p>
        )
    })
}