const allElements = {dateText: {
    eng: 'Date: ',
    es: 'Fecha: ',
    fr: 'Date: ',
    ru: 'Дата: ',
    ua: 'Дата: '
},
languageText: {
    eng: 'Language',
    es: 'Idioma',
    fr: 'Langue',
    ru: 'Язык',
    ua: 'Мова'
},
playButton: {
    eng: 'PLAY',
    es: 'JUGAR',
    fr: 'JOUER',
    ru: 'ИГРАТЬ',
    ua: 'ГРАТИ'
},
themeMessage: {
    eng: 'Choose a category: ',
    es: 'Seleccione una categoría: ',
    fr: 'Choisissez la catégorie: ',
    ru: 'Выберите категорию: ',
    ua: 'Оберіть категорію: '
},
checkingSymbols: {
    eng: 'abcdefghijklmnopqrstuvwxyz',
    es: 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz',
    fr: 'aàbcçdeéèêëœfghiîïjklmnoôpqrstuùûvwxyz',
    ru: 'абвгдеёжзийклмнопрстуфхцчшщьыыъэюя',
    ua: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'
},
emptyStr: {
    eng: 'Invalid input. Fill in the field before submitting.',
    es: 'Entrada inválida. Complete el campo antes de enviar.',
    fr: 'Entrée invalide. Remplissez le champ avant de soumettre.',
    ru: 'Ошибка. Заполните поле перед отправкой.',
    ua: 'Помилка. Заповніть поле перед надсиланням.'
},
invalidInput: {
    eng: 'Invalid input. Please use only symbols from a-z (A-Z).',
    es: 'Entrada inválida. Utilice únicamente símbolos de a-z (A-Z).',
    fr: 'Entrée invalide. Veuillez utiliser uniquement les symboles de "a" à "z" (de "A" à "Z").',
    ru: 'Ошибка. Пожалуйста, используйте только символы а-я (А-Я).',
    ua: 'Помилка. Будь ласка, використовуйте лише символи а-я (А-Я).'
},
lengthOverflow: {
    eng: 'Invalid input. Please type 1 letter at a time.',
    es: 'Entrada inválida. Por favor escriba 1 letra a la vez.',
    fr: 'Entrée invalide. Veuillez taper 1 lettre à la fois.',
    ru: 'Ошибка. Пожалуйста, вводите 1 букву за раз.',
    ua: 'Помилка. Будь ласка, введіть 1 літеру за раз.'
},
winMessage: {
    eng: 'Win!',
    es: '¡Victoria!',
    fr: 'Victoire!',
    ru: 'Победа!',
    ua: 'Перемога!'
},
looseMessage: {
    eng: 'Game over\nThe word was: ',
    es: 'Fin del juego\nAdivinaste mal: ',
    fr: 'Jeu terminé\nLe mot était: ',
    ru: 'Конец игры\nВы не отгадали: ',
    ua: 'Кінець гри\nВи не відгадали: '
},
incorrect: {
    eng: 'Incorrect guesses: ',
    es: 'Intentos fallidos: ',
    fr: 'Lettres incorrectes: ',
    ru: 'Проваленные попытки: ',
    ua: 'Провалені спроби: '
},
hintTitle: {
    eng: 'Get hint',
    es: 'Obtén un consejo',
    fr: 'Avoir un indice',
    ru: 'Получить подсказку',
    ua: 'Отримати підказку'
},
refTitle: {
    eng: 'Reload',
    es: 'Recargar',
    fr: 'Rafraîchir',
    ru: 'Перезагрузить',
    ua: 'Перезавантажити'
}
};

function changeLang(language) {
    switch (language) {
        case 'eng':
            themes = themes_eng;
            break;
        case 'es':
            themes = themes_eng;
            break;
        case 'fr':
            themes = themes_fr;
            break;
        case 'ru':
            themes = themes_ru;
            break;
        case 'ua':
            themes = themes_ua;
            break;
    
        default:
            break;
    }

    document.getElementById('playButton').innerHTML = allElements.playButton[language];
    document.querySelector('#lang > p').innerText = allElements.languageText[language];

    document.getElementById('date').innerText = allElements.dateText[language];
    const date = document.createElement('span');
    document.getElementById('date').appendChild(date);
    let today = new Date();
    document.querySelector('#date > span').innerText = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear() + ' ';

    themeMessage = allElements.themeMessage[language];
    checkAgainst = allElements.checkingSymbols[language];
    empty = allElements.emptyStr[language];
    invalid = allElements.invalidInput[language];
    overflow = allElements.lengthOverflow[language];
    win = allElements.winMessage[language];
    loose = allElements.looseMessage[language];
    incorrectTitle = allElements.incorrect[language];
    document.getElementById('incorrect').innerHTML = incorrectTitle + '\n';
    document.getElementById('hintButton').title = allElements.hintTitle[language];
    menuLinks = document.querySelectorAll('.menuItem > a');
    for (const link in menuLinks) {
        menuLinks[link].title = allElements.refTitle[language];
    }
}

