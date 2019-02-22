//script.js

			document.getElementById('nav').addEventListener('click', () => {
				document.getElementById('overlay-nav').style.width = '100%';
			});

			document.getElementById('closebtn').addEventListener('click', () => {
				document.getElementById('overlay-nav').style.width = '0%';
			});
