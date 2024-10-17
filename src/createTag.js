const createTag = function (tagHTML, className, text) {
    const tag = document.createElement(tagHTML);
    if (className) {
        tag.classList.add(className);
    }
    if (text) {
        tag.textContent = text;
    }
    return tag;
}

export default createTag;