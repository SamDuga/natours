const navItems = Array.from(document.querySelectorAll('.navigation__link'));
const naviToggle = document.getElementById('navi-toggle');

navItems.forEach((navItem) => {
	navItem.addEventListener('click', (e) => {
		naviToggle.checked = false;
	});
});

const popup = document.querySelector('.popup');
document.addEventListener('click', (e) => {
	if (e.target.id.includes('show')) {
		popup.classList.add('show');
		return;
	}

	const classes = Array.from(e.target.classList);
	classes.forEach((c) => {
		if (c === 'popup__close') {
			popup.classList.remove('show');
			return;
		} else if (c.includes('popup')) return;
		else popup.classList.remove('show');
	});
});
