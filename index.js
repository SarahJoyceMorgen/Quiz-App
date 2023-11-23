
/** Find questions **/

document.querySelectorAll('.card').forEach((questionElement) => {
    const button = questionElement.querySelector('.button');
    button.onclick = () => {
        const answerElement = questionElement.querySelector('.answer')
        const answerDisplay = answerElement.style.display;

        if(answerDisplay === 'block') {
            answerElement.style.display = 'none';
        } else if(answerDisplay === "" || answerDisplay === 'none') {
            answerElement.style.display = 'block'
        }
    }
})

const bookmark = document.querySelector(".bookmark");

function toggleBookmark() {
    const isBookmarked = bookmark.classList.contains("bookmarked");

    if (isBookmarked) {
        bookmark.classList.remove("bookmarked");
    } else {
        bookmark.classList.add("bookmarked");
    }
} 