function main() {
    const keyboard = {
        layouts: {
            en: {
                topRow: 'qwertyuiop',
                middleRow: 'asdfghjkl',
                bottomRow: 'zxcvbnm'
            },
            ru: {
                topRow: 'йцукенгшщзхъ',
                middleRow: 'фывапролджэё',
                bottomRow: 'ячсмитьбю'
            },
            ua: {
                topRow: 'йцукенгшщзхї',
                middleRow: 'фивапролджєґ',
                bottomRow: 'ячсмітьбю'
            }
        },
        langs: ['en', 'ru', 'ua'],
        currentLang: ''
    };

    let choose;
    while (true) {
        choose = prompt("en-0, ru-1, ua-2");
        if (choose === false) {
            return;
        } else if (choose < 0 || choose > 2) { 
            alert('Выбран недоступный язык');
        } else {
            break;
        }
    }
    keyboard.currentLang = keyboard.langs[choose];

    function getRandCharInAlph() {
        const randRow = Math.floor(Math.random() * (3 - 0)) + 0; 
        var row;
        switch (randRow) {
            case 0: row = keyboard.layouts[keyboard.currentLang].topRow; break;
            case 1: row = keyboard.layouts[keyboard.currentLang].middleRow; break;
            case 2: row = keyboard.layouts[keyboard.currentLang].bottomRow; break;
        }

        const rowLength = row.length;
        const randChar = 0 + Math.floor(Math.random() * (rowLength - 0));
        return row[randChar];
    }

    console.log(getRandCharInAlph());
};

main();
 
