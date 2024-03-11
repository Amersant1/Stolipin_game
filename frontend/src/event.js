export function event(text, options = [], onChoose) {
  //#region blur
	let blurEl = document.createElement('div');
	blurEl.className = "blur-el";
	if(document.body.querySelector(".blur-el") == null) {
		blurEl.style.cssText = `
			position: fixed;
			margin-top: 0;
			margin-left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.58);
		`;
	}	
	//#endregion blur

	//#region menu
	let menuEl = document.createElement('div');
	menuEl.id = `context-menu`;

	let nameEl = document.createElement('С');
	nameEl.style.cssText = `
		position: relative;
		top: 0;
		font-style: italic;
		font-weight: 600;
		font-size: 30px;
	`
	nameEl.innerText = "Событие";
	menuEl.appendChild(nameEl);

	let containerEl = document.createElement('div');
	let textEl = document.createElement('p');
	textEl.innerText = text;
	containerEl.appendChild(textEl);


	if(options.length == 0) {
		let optionEl = document.createElement('button');
		optionEl.onclick = () => {
			document.body.removeChild(blurEl);
			document.body.removeChild(menuEl);
			onChoose();
		}
		optionEl.innerText = "Закрыть";
		containerEl.appendChild(optionEl);
	} else {
		for(let option of options) {
			let optionEl = document.createElement('button');
			optionEl.onclick = () => {
				document.body.removeChild(blurEl);
				document.body.removeChild(menuEl);
				onChoose(option);
			}
			optionEl.innerText = option.text;
			containerEl.appendChild(optionEl);
		}
	}
	
	menuEl.appendChild(containerEl);

	document.body.appendChild(blurEl);
	document.body.appendChild(menuEl);

}


export function eventImg(text, options = [], onChoose, imgSrc) {
	//#region blur
	let blurEl = document.createElement('div');
	blurEl.className = "blur-el";
	if(document.body.querySelector(".blur-el") == null) {
		blurEl.style.cssText = `
			position: fixed;
			margin-top: 0;
			margin-left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.58);
		`;
	}	
	//#endregion blur

	//#region menu
	let menuEl = document.createElement('div');
	menuEl.id = `context-menu`;

	let nameEl = document.createElement('С');
	nameEl.style.cssText = `
		position: relative;
		top: 0;
		font-style: italic;
		font-weight: 600;
		font-size: 30px;
	`
	nameEl.innerText = "Событие";
	menuEl.appendChild(nameEl);

	let containerEl = document.createElement('div');

	let imgEl = document.createElement('img');
	imgEl.src = imgSrc;
	imgEl.style.cssText = `width: 100%; border-radius: 20px;`;
	containerEl.appendChild(imgEl);

	let textEl = document.createElement('p');
	textEl.innerText = text;
	containerEl.appendChild(textEl);

	if(options.length == 0) {
		let optionEl = document.createElement('button');
		optionEl.onclick = () => {
			document.body.removeChild(blurEl);
			document.body.removeChild(menuEl);
			onChoose();
		}
		optionEl.innerText = "Закрыть";
		containerEl.appendChild(optionEl);
	} else {
		for(let option of options) {
			let optionEl = document.createElement('button');
			optionEl.onclick = () => {
				document.body.removeChild(blurEl);
				document.body.removeChild(menuEl);
				onChoose(option);
			}
			optionEl.innerText = option.text;
			containerEl.appendChild(optionEl);
		}
	}
	
	menuEl.appendChild(containerEl);

	document.body.appendChild(blurEl);
	document.body.appendChild(menuEl);

}