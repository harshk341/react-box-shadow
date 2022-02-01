function copyToClipboard(el) {
    window.navigator.clipboard.writeText(el.current.innerText);
};

export { copyToClipboard };