const BASE_URL = 'http://localhost:3000/memes/'

document.addEventListener("DOMContentLoaded", () => {
    getMemes()
    createMeme()
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
       
    
    let cardContent = document.createElement('div')
        cardContent.classList.add("card-content")
        cardContent.addEventListener('click', () => {
            showMeme(memeCard)
        })

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
        cardText.innerText = `${meme.likes} likes`
    
    let cardButton = document.createElement('button')
        cardButton.id = meme.id
        cardButton.className = "like-button"
        cardButton.innerText = "👍"
        cardButton.addEventListener('click', () => {
            likeMeme(meme, cardText)
            console.log(meme)

        })

    cardFooter.appendChild(cardText)
        cardText.appendChild(cardButton)

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


let cardButton = document.querySelector(".like-button")
console.log(cardButton)
// cardButton.addEventListener('click', () => {
//     likeMeme(meme, cardText)
//     console.log(meme)

// })

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active')
})


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

function likeMeme(meme, cardText){
    let newLikes = {
      likes: +cardText.innerText.split(" ")[0] + 1
    }
  
    let reqPack = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(newLikes)
    }
  
    fetch(BASE_URL + meme.id, reqPack)
      .then(res => res.json())
      .then(getMemes)
  
  }