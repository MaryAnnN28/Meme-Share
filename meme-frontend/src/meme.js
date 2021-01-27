// const BASE_URL = 'http://localhost:3000/memes'

// function handleSubmit(){
//     document.querySelector('form').addEventListener('submit', (event) => {
//         event.preventDefault()
//         let newMeme = {
//             name: event.target.title.value,
//             description: event.target.description.value,
//             img_irl: event.target.img_url.value
//         }

//         fetch(BASE_URL, {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(newMeme)
//         })
//         .then(r => r.json())
//         .then(renderMemes)

//         console.log(newMeme)
//     })
/// }  

