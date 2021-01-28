const BASE_URL = 'http://localhost:3000/memes/'

USER = "Annonymous"

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
    
    let memeColumn = document.createElement('div')
        memeColumn.classList.add("column", "is-one-quarter")
        
    let memeCard = document.createElement('div')
        memeCard.classList.add("card")
        //div.card
        // memeCard.addEventListener('click', () => {
        //     showMeme(memeCard, meme)
        // })
    
    let cardContent = document.createElement('div')
        cardContent.classList.add("card-content")
        cardContent.addEventListener('click', () => {
            showMeme(memeCard, meme)
        })

    let image = document.createElement("img");
        image.classList.add("card-img-top", "center")
        image.src = meme.img_url
        //img.card-img-top
    
    let lineBreak = document.createElement('br')
       
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
        cardText.innerText = "Likes: " + meme.likes

    cardFooter.appendChild(cardText)

footerClass.appendChild(cardFooter)
cardContent.append(cardTitle, image, lineBreak, cardDesc)
memeCard.append(cardContent, footerClass)
memeColumn.append(memeCard)
cardContainer.appendChild(memeColumn)
}


const showMeme = (memeCard, meme) => {
    //modal tutorial
    const modalArea = document.querySelector('.content')
    
    // memeCard.querySelector("img").classList.add('center')
    modalArea.innerHTML = memeCard.innerHTML

    const modalBg = document.querySelector('.modal-background')
    const modal = document.querySelector('.modal')
    modal.classList.add('is-active')

    modalBg.addEventListener('click', () => {
        modal.classList.remove('is-active')
    })

    const commentArea = document.querySelector(".comments")
    commentArea.innerHTML = ""

    meme.comments.forEach(showComments)
    addComment(memeCard, meme)
}

function createMeme(){
    document.querySelector('#memeForm').addEventListener('submit', (event) => {
        event.preventDefault()
        let newMeme = {
            title: event.target.title.value,
            description: event.target.description.value,
            likes: 0,
            img_url: event.target.img_url.value,
            user_id: 1,
            comments: []
        }

        fetch(BASE_URL, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newMeme)
        })
        .then(r => r.json())
        .then(meme => renderMemes(meme))

    })
}  

const showComments = (comment) => {
    const commentArea = document.querySelector(".comments")
   
    let date = new Date(comment.created_at)
    let formatDate = date.toLocaleDateString() 
    let formatTime = date.toLocaleTimeString()

    const commentPostInfo = document.createElement('p')
          commentPostInfo.innerText = USER + " commented on " + formatDate + " at " + formatTime + ":"

    const commentText = document.createElement("li")
          commentText.innerText = comment.comment

    commentArea.append(commentPostInfo, commentText)
}

const addComment = (memeCard, meme) => {
    const commentForm = document.querySelector('#commentForm')

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        currentComments = meme.comments

        let newComment = {
            comment: event.target.comment.value,
            user_id: 2,
            meme_id: meme.id
        }


        let reqPackage = {}
            reqPackage.headers = {"Content-Type" : "application/json"}
            reqPackage.method = "POST"
            reqPackage.body = JSON.stringify(newComment)

        fetch("http://localhost:3000/comments", reqPackage)
            .then(res => res.json())
            // .then(data => postComment(data, currentComments, meme))
            .then(data => console.log(data))
        
        commentForm.reset()
    })
    
}

// const postComment = (data, currentComments, meme) => {
    

//     let newComments = currentComments.push(data)

//     console.log(newComments)

//     let test = {
//         comments: newComments
//     }

//     let reqPackage = {}
//         reqPackage.headers = {"Content-Type" : "application/json"}
//         reqPackage.method = "PATCH"
//         reqPackage.body = JSON.stringify(test)

//     fetch(BASE_URL + meme.id, reqPackage)
//         .then(res => res.json())
//         .then(data => console.log(data))
    
// }