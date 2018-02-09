const choose = prompt("Введите число: 1-Taba 2-Sharm 3-Hurgada");

if (choose === '1') {
	alert('Taba');
} else if (choose === '2') {
	alert('Sharm');
} else if (choose === '3') {
	alert('Hurgada');
} else {
	alert('Такого курорта нет');
}