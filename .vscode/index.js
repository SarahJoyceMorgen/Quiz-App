
const button = document.querySelector(".button")
object.onclick = function(){

    if 
};


const bookmark = document.querySelector(".bookmark");

function toggleBookmark() {
    const isBookmarked = bookmark.classList.contains("bookmarked");

    if (isBookmarked) {
        bookmark.classList.remove("bookmarked");
    } else {
        bookmark.classList.add("bookmarked");
    }
}