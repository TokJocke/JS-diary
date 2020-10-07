

let rubrik = document.getElementById("rubrik")
let datum = document.getElementById("datum")
let post = document.getElementById("post")
let myDiary = document.getElementById("diaryPost")

let submitButton = document.getElementById("submitButton")

postArray = []

let savedPost = {
    newRubrik: undefined,    
    newDatum: undefined,
    newPost: undefined
}


submitButton.addEventListener("click", function(){

savedPost.newRubrik = rubrik.value
savedPost.newDatum = datum.value
savedPost.newPost = post.value

postArray.push("savedPost")

 localStorage.setItem("localPosts", JSON.stringify(savedPost))
 

/* console.log(savedPost)
 */console.log(postArray)


})

function renderPost() {

    let collectLocalPost = localStorage.getItem("localPosts")
    console.log(collectLocalPost)

    myDiary.appendChild(localPosts)
}  

renderPost()