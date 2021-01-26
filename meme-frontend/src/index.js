const BASE_URL = 'http://localhost:3000/memes'

document.addEventListener("DOMContentLoaded", () => {
    getMemes()
    createMeme()
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
        image.src = meme.img_url
       
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

function createMeme(){
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault()
        let newMeme = {
            title: event.target.title.value,
            description: event.target.description.value,
            img_url: event.target.img_url.value
        }

        fetch(BASE_URL, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newMeme)
        })
        .then(r => r.json())
        .then(meme => renderMemes(meme))

        console.log(newMeme)
    })
}  
