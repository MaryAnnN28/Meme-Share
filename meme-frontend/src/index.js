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
    let cardContainer = document.querySelector('#meme-container')
    
    let memeCard = document.createElement('div')
        memeCard.classList.add("card")

    let image = document.createElement("img")
        image.classList.add("card-img-top")
        image.src = meme.image_url
       
    let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = meme.title

    let cardDesc = document.createElement('p')
        cardDesc.innerText = meme.description

    let cardFooter = document.createElement('div')
        cardFooter.classList.add('card-footer')

    let cardText = document.createElement('small')
        cardText.innerText = "We can put likes and others here"

    cardFooter.appendChild(cardText)
    cardBody.append(cardTitle, cardDesc)
    memeCard.append(image, cardBody, cardFooter)
    cardContainer.append(memeCard)
}