function main() {
	const groupSize = parseFloat(prompt("Enter"));

	if (Number.isInteger(groupSize) === false) {
		alert("Вы ввели не целое число");
	  return;
	}
	if (groupSize <= 0) {
	  alert("Вы ввели не положительное число");
	  return;
	}

	let sharm = 15;
	let hurgada = 25;
	let taba = 6;

	if (groupSize <= sharm) {
	  const choice = confirm('Хотите быть в группе sharm?');
	  if (choice === true) {
	    sharm = sharm - groupSize;
	    return;
	  }
	}
	if (groupSize <= hurgada) {
	  const choice = confirm('Хотите быть в группе hurgada?');
	  if (choice === true) {
	    hurgada = hurgada - groupSize;
	    return;
	  }
	}
	if (groupSize <= taba) {
	  const choice = confirm('Хотите быть в группе taba?');
	  if (choice === true) {
	    taba = taba - groupSize;
	    return;
	  }
	}

	alert('Мест нет!')
}

main();