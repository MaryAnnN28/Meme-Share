const BASE_URL = 'http://localhost:3000/memes'

document.addEventListener("DOMContentLoaded", () => {
    getMemes()
})

const getMemes = () => {
    document.querySelector('#meme-container').innerHTML = ""
    fetch(BASE_URL)
      .then(res => res.json() )
      .then(memeData => memeData.forEach(renderMemes))
}

const renderMemes = (meme) => {
    let cardContainers = document.querySelector('#meme-container')
    
    let colFeat = document.createElement('div')
        colFeat.classList.add("columns features")

    let colFeat = document.createElement('div')
        colFeat.classList.add("column is-4")

    let colFeat = document.createElement('div')
        colFeat.classList.add("card is-shady")

    let colFeat = document.createElement('div')
        colFeat.classList.add("card-image")

    let imageFig = document.createElement('figure')
        imageFig.classList.add("image is-4by3")

    let image = document.createElement("img")
        image.classList.add("modal-button")
        image.src = meme.image_url
        //needs data-target "modal-image4"

    




    let colFeat = document.createElement('div')
        colFeat.classList.add("card-content modal-button")
        // colFeat.data-target = "modal-card2"
        //needs data-target

    let cardContent = document.createElement('div')
        cardContent.classList.add("card-content modal-button")
        //needs data-target "modal-card2"

    let content = document.createElement('div')
        content.classList.add("content")

    

}