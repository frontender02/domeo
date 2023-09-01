// YouTube video
const videoInit = (selector) => {
    const videos = document.querySelectorAll(selector);
    
    if (videos.length > 0){
        videos.forEach((video) => {
            videoGenerate(video);
        })
    }

}

const videoGenerate = (video) => {
    const videoBtn = video.querySelector('.video__play-btn');
    const videoId = videoBtn.dataset.videoId;
    const videoContainer = video.querySelector('.video__inner');

    videoBtn.addEventListener('click', () => {
        const iframe = iframeGenerate(videoId);

        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    })
}

const iframeGenerate = (videoId) => {
	const iframe = document.createElement('iframe')
	const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1&mute=1`;

	iframe.setAttribute('src', src)
	iframe.setAttribute('frameborder', '0')
	iframe.setAttribute('allow', 'autoplay')
	iframe.setAttribute('allowfullscreen', '')
    iframe.classList.add('video__content')

    return iframe;
}

videoInit('.video__block');


// Running numbers
const valueDisplays = document.querySelectorAll('.about-us__item-num span')
let interval = 5000

valueDisplays.forEach(valueDisplay => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})
