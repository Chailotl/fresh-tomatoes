// Hide movie critic score
var scoreboard = document.querySelector('.scoreboard')
scoreboard = scoreboard && scoreboard.shadowRoot
if (scoreboard) {
	scoreboard.querySelector('.tomatometer-container').style.display = 'none'
	scoreboard.querySelector('.scores-container').style.width = 'auto'
}

// Remove critics Link
document.querySelectorAll('a').forEach(x => {
	if (x.href == 'https://www.rottentomatoes.com/critics') { x.remove() }
})