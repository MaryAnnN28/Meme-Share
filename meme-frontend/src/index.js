const BASE_URL = 'http://localhost:3000/memes/'

allMemes = []
allMemesUnsort = []
USER = "Annonymous"


document.addEventListener("DOMContentLoaded", () => {
    getMemes()
    createMeme()
    filterButtons()
})

const getMemes = () => {
    document.querySelector('#meme-container').innerHTML = ""
    fetch(BASE_URL)
      .then(res => res.json())
      .then(memeData => {memeData.forEach(renderMemes)
                memeData.forEach(meme => allMemes.push(meme)) 
                memeData.forEach(meme => allMemesUnsort.push(meme))
            })
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
        cardDesc.classList.add("card-description")
        cardDesc.innerText = meme.description

    let footerClass = document.createElement('div')
        footerClass.classList.add('card-footer')

    let cardFooter = document.createElement('div')
        cardFooter.classList.add('card-footer-item')

    let cardText = document.createElement('small')
        cardText.innerText = ` ${meme.likes} likes`
    
    let cardButton = document.createElement('button')
        cardButton.id = meme.id
        cardButton.className = "like-button"
        cardButton.innerText = "👍"
        cardButton.addEventListener('click', () => {
            likeMeme(meme, cardText)
        })


cardFooter.append(cardButton, cardText)
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
    
    let editButton = document.createElement('button')
        editButton.classList.add('memeEditButton')
        editButton.innerText = "Edit Meme"
        modalArea.appendChild(editButton)
        editButton.addEventListener('click', () => editMeme(meme))

    let deleteButton = document.createElement('button')
        deleteButton.classList.add('memeDeleteButton')
        deleteButton.innerText = "Delete Meme"
        test = document.createElement('br')
        modalArea.append(test, deleteButton)
        deleteButton.addEventListener('click', () => deleteMeme(meme))


    const modalBg = document.querySelector('.modal-background')
    const modal = document.querySelector('.modal')
    modal.classList.add('is-active')

    modalBg.addEventListener('click', () => {
        modal.classList.remove('is-active')
    })



    // let cardButton = document.querySelector(".like-button")

    // // cardButton.addEventListener('click', () => {
    // //     likeMeme(meme, cardText)
    // //     console.log(meme)

    // // })



    const commentArea = document.querySelector(".comments")
    commentArea.innerHTML = ""

    if(!(meme.comments.length < 1 || meme.comments == undefined)){
        meme.comments.forEach(showComments)
    }
    addComment(memeCard, meme)

}

function createMeme(){
    form = document.querySelector('#memeForm')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newMeme = {
            title: event.target.title.value,
            description: event.target.description.value,
            likes: 0,
            img_url: event.target.img_url.value,
            user_id: 1
        }
        form.reset()

        fetch(BASE_URL, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newMeme)
        })
        .then(r => r.json())
        .then(meme => {
            renderMemes(meme)
            console.log(meme)
        })
        
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
        commentText.innerText = comment.comment + "\n"

    let editButton = document.createElement('button')
        editButton.innerText = "Edit Comment"
        editButton.classList.add('commentEditButton')
        commentText.appendChild(editButton)
        editButton.addEventListener('click', () => editComment(comment))

    let deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete Comment"
        deleteButton.classList.add('commentDeleteButton')
        test = document.createElement('br')
        commentText.append(test, deleteButton)
        deleteButton.addEventListener('click', () => deleteComment(comment))

    commentArea.append(commentPostInfo, commentText)
}

const addComment = (meme) => {
    const commentForm = document.querySelector('#commentForm')

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        let commentArea = document.querySelector('.comments')
        let comment = document.createElement('li')
            comment.innerText = event.target.comment.value
        commentArea.appendChild(comment)

        let newComment = {
            comment: event.target.comment.value,
            user_id: 2,
            meme_id: meme.id
        }
        console.log(meme)

        let reqPackage = {}
            reqPackage.headers = {"Content-Type" : "application/json"}
            reqPackage.method = "POST"
            reqPackage.body = JSON.stringify(newComment)

        

        fetch("http://localhost:3000/comments", reqPackage)
            .then(res => res.json())
            .then(data => console.log(data))
    
        
        
    })
    commentForm.reset()
}

/******************** FEATURE LIKE MEMES ************************/

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

/****************************************************************/



/************** FEATURE TO SORT & FILTER MEMES ******************/

const filterButtons = () => {
    const allBtn = document.querySelector('#show-all')
        allBtn.classList.add('primary')
    const viralBtn = document.querySelector('#viral-btn')
    const likedBtn = document.querySelector('#liked-btn')
    const newestBtn = document.querySelector('#newest-btn')
    const oldestBtn = document.querySelector('#oldest-btn')
    
    // EVENT LISTENERS 
    
    allBtn.addEventListener('click', showAll)
    viralBtn.addEventListener('click', mostViral)
    likedBtn.addEventListener('click', mostLiked)
    newestBtn.addEventListener('click', newestMemes)
    oldestBtn.addEventListener('click', oldestMemes)
    
}


// EVENT HANDLERS

const showAll = () => {
    document.querySelector('#meme-container').innerHTML = ""
    allOff()
    const allBtn = document.querySelector('#show-all')
        allBtn.classList.add('primary')
    allMemesUnsort.forEach(renderMemes)

}


const mostViral = () => {
    document.querySelector('#meme-container').innerHTML = ""
    allOff()
    const viralBtn = document.querySelector('#viral-btn')
        viralBtn.classList.add('primary')
    result = allMemes.filter(meme => meme.likes > 10)
    result.forEach(meme => renderMemes(meme))
}

const mostLiked = () => {
    document.querySelector('#meme-container').innerHTML = ""
    allOff()
    const likedBtn = document.querySelector('#liked-btn')
        likedBtn.classList.add('primary')
    result = allMemes.sort(function(a, b){return b.likes - a.likes})
    result.forEach(meme => renderMemes(meme))

}

const newestMemes = () => {
    document.querySelector('#meme-container').innerHTML = ""
    allOff()
    const newestBtn = document.querySelector('#newest-btn')
        newestBtn.classList.add('primary')
    result = allMemes.sort(function(a, b){return new Date(b.created_at) - new Date(a.created_at)})
    // debugger
    result.forEach(meme => renderMemes(meme))
}

const oldestMemes = () => {
    document.querySelector('#meme-container').innerHTML = ""
    allOff()
    const oldestBtn = document.querySelector('#oldest-btn')
        oldestBtn.classList.add('primary')  
    result = allMemes.sort(function(a, b){return new Date(a.created_at) - new Date(b.created_at)})
    // debugger
    result.forEach(meme => renderMemes(meme))
}

const allOff = () => {
    document.querySelector('#show-all').classList.remove('primary')
    document.querySelector('#viral-btn').classList.remove('primary')
    document.querySelector('#liked-btn').classList.remove('primary')
    document.querySelector('#newest-btn').classList.remove('primary')
    document.querySelector('#oldest-btn').classList.remove('primary')
}
/****************************************************************/


/********* FEATURE TO EDIT & DELETE COMMENTS/MEMES **************/

const editMeme = (meme) => {
    modalArea = document.querySelector('.content')

    memeForm = document.createElement('form')
        memeForm.classList.add('editForm')

    formList = document.createElement('ul')

    formTitle = document.createElement('h3')
        formTitle.innerText = "Edit Meme"

    listName = document.createElement('li')
        listName.innerHTML = `<input name="title" class="form-control mb-2" type="text" value="${meme.title}">`

    listUrl = document.createElement('li')
        listUrl.innerHTML = `<input name="img_url" class="form-control mb-2" type="text" value="${meme.img_url}"></input>`

    listDesc = document.createElement('li')
        listDesc.innerHTML = `<input name="description" class="form-control mb-2" type="text" value="${meme.description}"></input>`

    listSubmit = document.createElement('li')
        listSubmit.innerHTML = `<input class="btn btn-primary" type="submit"></input>`

    formList.append(formTitle, listName, listUrl, listDesc, listSubmit)
    memeForm.appendChild(formList)
    modalArea.appendChild(memeForm)
    

    memeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let updateMeme = {
            title: event.target.title.value,
            description: event.target.description.value,
            img_url: event.target.img_url.value,
        }

        let memeTitle = document.querySelector('.card-title')
            memeTitle.innerText = event.target.title.value

        let memeImage = document.querySelector('.card-img-top')
            memeImage.src = event.target.img_url.value

        let memeDesc = document.querySelector(".card-description")
            memeDesc.innerText = event.target.description.value

        memeForm.innerHTML = ""

        fetch(BASE_URL + meme.id, {
            headers: {"Content-Type": "application/json"},
            method: "PATCH",
            body: JSON.stringify(updateMeme)
        })
        .then(r => r.json())
        // .then(meme => {
        //     showMeme(modalArea, meme)
        // })
        
    })
}

const deleteMeme = (meme) => {
    document.querySelector('.modal').classList.remove('is-active')

    fetch(BASE_URL + meme.id, {
        method: "DELETE"
    })
    
    getMemes()
}


// For Toggle Dark Mode Function 


const bodyBg = document.body
const footerBg = document.querySelector('.footer')
const modalBg = document.querySelector('.modal')
const darkToggle = document.querySelector("#slider")
darkToggle.addEventListener("click", function() {
  bodyBg.classList.toggle("dark-mode")
  footerBg.classList.toggle("dark-mode")
  modalBg.classList.toggle("dark-mode")
})


const editComment = (comment) => {
    console.log('click!')
}

const deleteComment = (comment) => {
    const modal = document.querySelector('.modal')
        modal.classList.remove('is-active')

    fetch('http://localhost:3000/comments/' + comment.id, {
        method: "DELETE"
    })
    
    getMemes()
}

