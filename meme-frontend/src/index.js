const BASE_URL = 'http://localhost:3000/memes'

document.addEventListener("DOMContentLoaded", () => {
    getMemes()
})

const getMemes = () => {
    document.querySelector('#meme-container').innerHTML = ""
    fetch(BASE_URL)
      .then(res => res.json())
      .then(memeData => memeData.forEach(renderMemes))
}


const renderMemes = (meme) => {
    let cardContainer = document.querySelector('#meme-container')
    console.log(cardContainer)
    
    let memeColumn = document.createElement('div')
        memeColumn.classList.add("column", "is-one-quarter")
        
    let memeCard = document.createElement('div')
        memeCard.classList.add("card")
        //div.card
        memeCard.addEventListener('click', () => {
            showMeme(memeCard)
        })
    
    let cardContent = document.createElement('div')
        cardContent.classList.add("card-content")

    let image = document.createElement("img");
        image.classList.add("card-img-top", "center")
        image.src = meme.img_url
        //img.card-img-top
       
    let cardTitle = document.createElement('h3')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = meme.title

    let cardDesc = document.createElement('p')
        cardDesc.innerText = meme.description

    let footerClass = document.createElement('footer')
        footerClass.classList.add('card-footer')

    let cardFooter = document.createElement('div')
        cardFooter.classList.add('card-footer-item')

    let cardText = document.createElement('small')
        cardText.innerText = "We can put likes and others here"

    cardFooter.appendChild(cardText)
    footerClass.appendChild(cardFooter)
    cardContent.append(image, cardTitle, cardDesc)
    memeCard.append(cardContent, footerClass)
    memeColumn.append(memeCard)
    cardContainer.appendChild(memeColumn)
}


const showMeme = (memeCard) => {
    //modal tutorial
    const modalArea = document.querySelector('.modal-content')
    // memeCard.querySelector("img").classList.add('center')
    modalArea.innerHTML = memeCard.innerHTML

    const modalBg = document.querySelector('.modal-background')
    const modal = document.querySelector('.modal')
    modal.classList.add('is-active')
    
    modalBg.addEventListener('click', () => {
        modal.classList.remove('is-active')
    })
}

