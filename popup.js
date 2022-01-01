document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#github').onclick = function () {
		chrome.tabs.create({active: true, url: 'https://github.com/Chailotl/fresh-tomatoes'})
	}
})