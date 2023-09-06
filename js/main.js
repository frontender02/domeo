// YouTube video
const videoInit = selector => {
	const videos = document.querySelectorAll(selector)

	if (videos.length > 0) {
		videos.forEach(video => {
			videoGenerate(video)
		})
	}
}

const videoGenerate = video => {
	const videoBtn = video.querySelector('.video__play-btn')
	const videoId = videoBtn.dataset.videoId
	const videoContainer = video.querySelector('.video__inner')

	videoBtn.addEventListener('click', () => {
		const iframe = iframeGenerate(videoId)

		videoContainer.innerHTML = ''
		videoContainer.appendChild(iframe)
	})
}

const iframeGenerate = videoId => {
	const iframe = document.createElement('iframe')
	const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1&mute=1`

	iframe.setAttribute('src', src)
	iframe.setAttribute('frameborder', '0')
	iframe.setAttribute('allow', 'autoplay')
	iframe.setAttribute('allowfullscreen', '')
	iframe.classList.add('video__content')

	return iframe
}

videoInit('.video__block')

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

// IMask
let phoneInputs = document.querySelectorAll('.form__input_phone')
let buttonsForm = document.querySelectorAll('.form__submit')

phoneInputs.forEach(phoneInput => {
	const phoneMask = new IMask(phoneInput, {
		mask: '+{7} (000) 000 - 00 - 00',
		lazy: false,
	})
	phoneInput.addEventListener('input', phoneInputHandler)
	function phoneInputHandler() {
		for (let i = 0; i < buttonsForm.length; i++) {
			if (phoneMask.masked.isComplete) {
				buttonsForm[i].classList.add('form__submit_active')
			} else {
				buttonsForm[i].classList.remove('form__submit_active')
			}
		}
	}
})


// Map
ymaps.ready(init)
let myMap;
let myPlacemark;

function init() {
	myMap = new ymaps.Map('map', {
		center: [55.712966908106644, 37.57168222350914],
		zoom: 16,
	})

	myPlacemark = new ymaps.Placemark(
		[55.712966908106644, 37.57168222350914],
		{
			balloonContentHeader: 'График работы:',
			balloonContentBody: 'С 9.00 до 22.00, без выходных',
			balloonContentFooter: 'info@domeo.ru',
		},
		{
			iconLayout: 'default#image',
			iconImageHref: '../img/icons/location.svg',
			iconImageSize: [48, 48],
			iconImageOffset: [-60, -170],
		}
	)
	myMap.geoObjects.add(myPlacemark)
}