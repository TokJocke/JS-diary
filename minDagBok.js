
let myDiary = document.getElementById("diaryPost")


function renderPost() {

    let collectLocalPost = JSON.parse(localStorage.getItem("localPosts"))
    console.log(collectLocalPost)

    myDiary.innerText = collectLocalPost.newPost
}  

renderPost()