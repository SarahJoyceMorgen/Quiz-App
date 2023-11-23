function toggleBookmark() {

    const bookmark = this;

    const isBookmarked = bookmark.classList.contains("bookmarked");

    if (isBookmarked) {
        bookmark.classList.remove("bookmarked");
    } else {
        bookmark.classList.add("bookmarked");
    }
}
