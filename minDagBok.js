
let myDiary = document.getElementById("diaryPost")
let printRub = document.getElementById("printRub")
let printDate = document.getElementById("printDate")
let printPost = document.getElementById("printPost")





function renderPost() {

    let collectLocalPost = JSON.parse(localStorage.getItem("localPosts")) || [];

    console.log(collectLocalPost)

    printPost.innerText = collectLocalPost.newPost 
    printDate.innerText = collectLocalPost.newDatum
    printRub.innerText = collectLocalPost.newRubrik


}  

renderPost()