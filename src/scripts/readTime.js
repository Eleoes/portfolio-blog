function readingTime () {
    const text = document.getElementById('article').innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm) + " minute read";
    document.getElementById('readTime').innerText = time;
}

readingTime();