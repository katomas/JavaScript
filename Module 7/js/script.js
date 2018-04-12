const keyboard = {
    topRow: 'qwertyuiop[]',
    middleRow: 'asdfghjkl;\'\\',
    bottomRow: 'zxcvbnm,./'
}

function createLayout(keyboard) { 
    const wrapper = document.createElement('div');
    wrapper.classList.add("wrapper");
    document.body.prepend(wrapper);
    const wrapperKey = document.createElement('div');
    wrapperKey.classList.add("wrapperKey");
    wrapper.prepend(wrapperKey);

    for (key in keyboard) {
    	const row = document.createElement('div');
    	row.classList.add("row");
    	wrapperKey.append(row);
    	for (let i = 0; i < keyboard[key].length; i++) {
    		const button = document.createElement('button');
    		button.classList.add("keyButton");
    		button.innerHTML = keyboard[key][i];
    		row.append(button);
    	}
    }
}

createLayout(keyboard);