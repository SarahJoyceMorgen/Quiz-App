
/** Find questions **/

document.querySelectorAll('.card').forEach((questionElement) => {
    const button = questionElement.querySelector('.button');
    button.onclick = () => {
        const answerElement = questionElement.querySelector('.answer')
        const answerDisplay = answerElement.style.display;

        if (answerDisplay === 'block') {
            answerElement.style.display = 'none';
        } else if (answerDisplay === "" || answerDisplay === 'none') {
            answerElement.style.display = 'block'
        }
    }
})

const bookmark = document.querySelectorAll(".bookmark").forEach((bookmarkElement) => {
    bookmarkElement.onclick = toggleBookmark

});




function addTag() {
    

    const tagValue = document.getElementById('tagInput').value;
    const tagValue = document.getElementById('tagInput').value;

    const questionInput = document.getElementById('questionInput');
    questionInput.value += ' #' + tagValue;

    document.getElementById('tagInput').value = '';
}

const button = questionElement.querySelector('.add__button');
    button.onclick = () => {
}
