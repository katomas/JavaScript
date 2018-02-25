const alphabet = 'qwertyuiopasdfghjklzxcvbnm';

function addKeyboardLayout(alphabet) {
    const rowFirst = alphabet.slice(0,10);
    const rowSecond = alphabet.slice(10,19);
    const rowThird = alphabet.slice(19,28);
    const array = [rowFirst, rowSecond, rowThird];
    return array;
}

const keyboard = addKeyboardLayout(alphabet);
console.log(keyboard);

//first task


function getRandCharInRow(min, max) {
	const randRow = Math.floor(Math.random() * (max - min)) + min; 
	const rowLength = keyboard[randRow].length;
	const randChar = min + Math.floor(Math.random() * (rowLength - min));
	console.log(randRow);
	return keyboard[randRow][randChar];
}

const result = getRandCharInRow(0, 3);

console.log(result);

// Math.floor(Math.random() * (max - min)) + min; рандомная строка 
// min + Math.floor(Math.random() * (max - min)); случайное значение из массива 