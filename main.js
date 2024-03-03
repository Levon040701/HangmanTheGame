// import allElements from './language_db.js';

// function dropdown(content) {
//     // content.classList.toggle('show');
//     if (content.style.display === 'none') {
//         content.style.display = 'block';
//     } else {
//         content.style.display = 'none';
//     }
// }

function Theme(name, arr, hint) {
    this.name = name;
    this.pairings = arr;
    this.hintText = hint;
    this.Size = function () {return this.pairings.length;};
    this.getName = function () {return this.name;};
    this.getNthElement = function (n) {return this.pairings[n];};
}

function SecretWord(secret) {
    this.word = Object.keys(secret)[0];
    this.hint = Object.values(secret)[0];
    this.hidden = [];
    for (let i = 0; i < this.word.length; i++) {
        if ( (checkAgainst + checkAgainst.toUpperCase()).includes(this.word[i]) ) {
            this.hidden.push('_');
        } else {
            this.hidden.push(this.word[i]);
        }
    }
    this.word_c = this.word;
    this.incorrectGuesses = [];

    this.updateWord = function (letter) {
        if (letter) {
            for (let i = 0; i < this.word.length; i++) {
                if (letter === this.word_c[i].toLowerCase()) {
                    this.hidden[i] = this.word[i];
                    this.word_c[i] = '_'
                }
            }
        }

        return this.hidden.join(' ') + '\n\n';
    };
    this.updateDrawing = function(count) {
        let str0 = '   |-------|\n   |\n   |\n   |\n   |\n   |\n|-----|';
        let str1 = str0.slice(0, 17) + '         O' + str0.slice(17);
        let str2 = str1.slice(0, 32) + '          |' + str1.slice(32, 37) + '          |' + str1.slice(37);
        let str3 = str2.slice(0, 41) + '/' + str2.slice(42);
        let str4 = str3.slice(0, 43) + '\\' + str3.slice(43);
        let str5 = str4.slice(0, 65) + '         /' + str4.slice(65);
        let str6 = str5.slice(0, 75) + ' \\' + str5.slice(75);

        switch (count)
        {
        case 0:
            return str0;
        case 1:
            return str1;
        case 2:
            return str2;
        case 3:
            return str3;
        case 4:
            return str4;
        case 5:
            return str5;
        case 6:
            return str6;
        
        default:
            return str0;
        }
    };
    this.win = function () {return this.hidden.join('') === this.word};
    this.showHint = function () {document.getElementById('hint').innerText = theme.hintText + this.hint};
    this.showIncorrect = function () {
        let incorrectString = this.incorrectGuesses.join(', ');
        console.log(incorrectTitle + incorrectString + '\n\n');
        document.getElementById('incorrect').innerText = incorrectTitle + '\n' + incorrectString;
    };
    this.addIncorrect = function (letter) {this.incorrectGuesses.push(letter)};
    this.check = function (letter) {
        if (this.word.toLowerCase().includes(letter)) {
            return true;
        } else {
            this.addIncorrect(letter);
            return false;
        }
    }
}

const themes_eng = [];
const themes_es = [];
const themes_fr = [];
const themes_ru = [];
const themes_ua = [];

let themeName = 'Vocaloids';
let wordsMapping = [{"Miku": "leek"}, {"Luka": "tuna"}, {"Rin": "orange"}, {"Len": "banana"}, {"Kaito": "icecream"}, {"Meiko": "sake"}, {"Gakupo": "eggplant"}, {"Gumi": "carrot"}, {"Mayu": "bunny"}];
const vocaloid_eng = new Theme(themeName, wordsMapping, 'Symbol: ');
themes_eng.push(vocaloid_eng);

themeName = 'Vocaloides';
wordsMapping = [{"Miku": "puerro"}, {"Luka": "atún"}, {"Rin": "naranja"}, {"Len": "plátano"}, {"Kaito": "helado"}, {"Meiko": "espíritu"}, {"Gakupo": "berenjena"}, {"Gumi": "zanahoria"}, {"Mayu": "conejito de peluche"}];
const vocaloid_es = new Theme(themeName, wordsMapping, 'Símbolo: ');
themes_es.push(vocaloid_es);

themeName = 'Vocaloïdes';
wordsMapping = [{"Miku": "poireau"}, {"Luka": "thon"}, {"Rin": "orange"}, {"Len": "banan"}, {"Kaïto": "glace"}, {"Meïko": "saké"}, {"Gakupo": "aubergine"}, {"Gumi": "carotte"}, {"Mayu": "lapin en peluche"}];
const vocaloid_fr = new Theme(themeName, wordsMapping, 'Le symbole: ');
themes_fr.push(vocaloid_fr);

themeName = 'Вокалоиды';
wordsMapping = [{"Мику": "лук порей"}, {"Лука": "тунец"}, {"Рин": "апельсин"}, {"Лен": "банан"}, {"Кайто": "мороженое"}, {"Мейко": "сакэ"}, {"Гакупо": "баклажан"}, {"Гуми": "морковь"}, {"Маю": "плюшевый заяц"}];
const vocaloid_ru = new Theme(themeName, wordsMapping, 'Символ: ');
themes_ru.push(vocaloid_ru);

themeName = 'Вокалоїди';
wordsMapping = [{"Міку": "зелена цибуля"}, {"Лука": "тунець"}, {"Рiн": "апельсин"}, {"Лен": "банан"}, {"Кайто": "морозиво"}, {"Мейко": "саке"}, {"Гакупо": "баклажан"}, {"Гуми": "морква"}, {"Маю": "плюшевий заєць"}];
const vocaloid_ua = new Theme(themeName, wordsMapping, 'Символ: ');
themes_ua.push(vocaloid_ua);

themeName = 'Countries';
wordsMapping = [{"Armenia": "Yerevan"}, {"Russia": "Moscow"}, {"UK": "London"}, {"Italy": "Rome"}, {"Spain": "Madrid"}, {"Greece": "Athenes"}, {"USA": "Washington"}, {"Canada": "Ottawa"}, {"Ukraine": "Kyiv"}, {"China": "Beijing"}, {"Japan": "Tokyo"}, {"Israel": "Jerusalem"}, {"Mexico": "Mexico City"}, {"Argentina": "Buenos Aires"}, {"France": "Paris"}, {"Germany": "Berlin"}, {"India": "Delhi"}, {"Australia": "Canberra"}, {"Georgia": "Tbilisi"}, {"Egypt": "Cairo"}, {"Brazil": "Brazilia"}, {"Sweden": "Stockholm"}, {"Norway": "Oslo"}, {"Finnland": "Helsinki"}, {"Ireland": "Dublin"}, {"Ethiopia": "Addis Ababa"}, {"South Korea": "Seul"}, {"Iraq": "Bagdad"}];
const country_eng = new Theme(themeName, wordsMapping, 'Capital: ');
themes_eng.push(country_eng);

themeName = 'Estados';
wordsMapping = [{"Armenia": "Ereván"}, {"Rusia": "Moscú"}, {"Reino Unido": "Londres"}, {"Itaia": "Roma"}, {"España": "Madrid"}, {"Grecia": "Atenas"}, {"EUA": "Washington"}, {"Canadá": "Ottawa"}, {"Ucrania": "Kyiv"}, {"China": "Beijing"}, {"Japón": "Tokio"}, {"Israel": "Jerusalén"}, {"México": "Ciudad de México"}, {"Argentina": "Buenos Aires"}, {"Francia": "París"}, {"Alemania": "Berlina"}, {"India": "Delhi"}, {"Australia": "Canberra"}, {"Georgia": "Tiflis"}, {"Egipto": "El Cairo"}, {"Brasil": "Brasilia"}, {"Suecia": "Estocolmo"}, {"Noruega": "Oslo"}, {"Finlandia": "Helsinki"}, {"Irlanda": "Dublín"}, {"Etiopía": "Addis Abeba"}, {"Corea del Sur": "Seúl"}, {"Irak": "Bagdad"}];
const country_es = new Theme(themeName, wordsMapping, 'Ciudad capital: ');
themes_es.push(country_es);

themeName = 'Les états';
wordsMapping = [{"Arménie": "Yérévan"}, {"Russe": "Moscou"}, {"Grande Bretagne": "Londres"}, {"Italie": "Rome"}, {"Éspagne": "Madrid"}, {"Grèce": "Athènes"}, {"ÉUA": "Washington"}, {"Canada": "Ottawa"}, {"Ukraine": "Kyiv"}, {"Chine": "Pékin"}, {"Japon": "Tokyo"}, {"Israël": "Jérusalem"}, {"Mexique": "Mexico"}, {"Argentine": "Buenos Aires"}, {"France": "Paris"}, {"Allemange": "Berlin"}, {"Inde": "Delhi"}, {"Australie": "Canberra"}, {"Georgie": "Tbilissi"}, {"Égypte": "Caire"}, {"Brésil": "Brasília"}, {"Suède": "Stockholm"}, {"Norvège": "Oslo"}, {"Finlande": "Helsinki"}, {"Irlande": "Dublin"}, {"Ethiopie": "Addis-Abeba"}, {"Corée du Sud": "Séoul"}, {"Irak": "Bagdad"}];
const country_fr = new Theme(themeName, wordsMapping, 'La capitale: ');
themes_fr.push(country_fr);

themeName = 'Государства';
wordsMapping = [{"Армения": "Ереван"}, {"Россия": "Москва"}, {"Великобритания": "Лондон"}, {"Италия": "Рим"}, {"Испания": "Мадрид"}, {"Греция": "Афины"}, {"США": "Вашингтон"}, {"Канада": "Оттава"}, {"Украина": "Киев"}, {"Китай": "Пекин"}, {"Япония": "Токио"}, {"Израиль": "Иерусалим"}, {"Мексика": "Мехико"}, {"Аргентина": "Буэнос-Айрес"}, {"Франция": "Париж"}, {"Германия": "Берлин"}, {"Индия": "Дели"}, {"Австралия": "Канберра"}, {"Грузия": "Тбилиси"}, {"Египет": "Каир"}, {"Бразилия": "Бразилиа"}, {"Швеция": "Стокгольм"}, {"Норвегия": "Осло"}, {"Финляндия": "Хельсинки"}, {"Ирландия": "Дублин"}, {"Эфиопия": "Аддис-Абеба"}, {"Южная Корея": "Сеул"}, {"Ирак": "Багдад"}];
const country_ru = new Theme(themeName, wordsMapping, 'Столица: ');
themes_ru.push(country_ru);

themeName = 'Держави';
wordsMapping = [{"Вірменія": "Єреван"}, {"Росія": "Москва"}, {"Великобританія": "Лондон"}, {"Італія": "Рим"}, {"Іспанія": "Мадрид"}, {"Греція": "Афіни"}, {"США": "Вашингтон"}, {"Канада": "Оттава"}, {"Україна": "Київ"}, {"Китай": "Пекін"}, {"Японія": "Токіо"}, {"Ізраїль": "Єрусалим"}, {"Мексика": "Мехіко"}, {"Аргентина": "Буенос-Айрес"}, {"Франція": "Париж"}, {"Німеччина": "Берлін"}, {"Индия": "Делі"}, {"Австралія": "Канберра"}, {"Грузія": "Тбілісі"}, {"Єгипет": "Каїр"}, {"Бразилія": "Бразиліa"}], {"Швеція": "Стокгольм"}, {"Норвегія": "Осло"}, {"Фінляндія": "Гельсінкі"}, {"Ірландія": "Дублін"}, {"Ефіопія": "Аддіс-Абеба"}, {"Південна Корея": "Сеул"}, {"Ірак": "Багдад"};
const country_ua = new Theme(themeName, wordsMapping, 'Столиця: ');
themes_ua.push(country_ua);

themeName = 'Marinette\'s class ))';
wordsMapping = [{"Marinette": "LB"}, {"Adrien": "CN"}, {"Alya": "Fox"}, {"Nino": "Turtle"}, {"Chloe": "Bee"}, {"Sabrina": "Dog"}, {"Rose": "Pig"}, {"Juleca": "Tiger"}, {"Kim": "Monkey"}, {"Ivan": "Ox"}, {"Mylene": "Mouse"}, {"Nathaniel": "Goat"}, {"Max": "Horse"}, {'Mark': 'Rooster'}];
const mlb_eng = new Theme(themeName, wordsMapping, 'Powers: ');
themes_eng.push(mlb_eng);

themeName = 'La clase de marinette ))';
wordsMapping = [{"Marinette": "LB"}, {"Adrián": "CN"}, {"Alya": "Zorro"}, {"Nino": "Tortuga"}, {"Chloe": "Abeja"}, {"Sabrina": "Perra"}, {"Rose": "Cerda"}, {"Juleca": "Tigre"}, {"Kim": "Mono"}, {"Ivan": "Buey"}, {"Mylene": "Ratón"}, {"Nathaniel": "Cabro"}, {"Max": "Caballo"}, {'Mark': 'Gallo'}];
const mlb_es = new Theme(themeName, wordsMapping, 'Тalismán: ');
themes_es.push(mlb_es);

themeName = 'La classe de Marinette ))';
wordsMapping = [{"Marinette": "LB"}, {"Adrien": "CN"}, {"Alya": "Renarde"}, {"Nino": "Tortue"}, {"Chloé": "Abeille"}, {"Sabrine": "Chien"}, {"Rose": "Cochon"}, {"Juléca": "Tigre"}, {"Kim": "Singe"}, {"Ivan": "Taureau"}, {"Milène": "Souris"}, {"Nathaniel": "Chèvre"}, {"Max": "Cheval"}, {'Mark': 'Coq'}];
const mlb_fr = new Theme(themeName, wordsMapping, 'Тalisman: ');
themes_fr.push(mlb_fr);

themeName = 'Класс Маринетт ))';
wordsMapping = [{"Маринетт": "ЛБ"}, {"Адриан": "КН"}, {"Аля": "Лиса"}, {"Нино": "Черепаха"}, {"Хлоя": "Пчела"}, {"Сабрина": "Собака"}, {"Роза": "Свинья"}, {"Джулека": "Тигр"}, {"Ким": "Обезьяна"}, {"Айвен": "Бык"}, {"Милен": "Мышь"}, {"Натаниэль": "Козёл"}, {"Макс": "Лошадь"}, {'Марк': 'Петух'}];
const mlb_ru = new Theme(themeName, wordsMapping, 'Талисман: ');
themes_ru.push(mlb_ru);

themeName = 'Клас Марінетт ))';
wordsMapping = [{"Марінетт": "ЛБ"}, {"Адріан": "КН"}, {"Аля": "Лисиця"}, {"Нiно": "Черепаха"}, {"Хлоя": "Бджола"}, {"Сабрiна": "Собака"}, {"Роза": "Свиня"}, {"Джулека": "Тигр"}, {"Кiм": "Мавпа"}, {"Айвен": "Бик"}, {"Мiлен": "Миша"}, {"Натанiель": "Козел"}, {"Макс": "Кінь"}, {'Марк': 'Півень'}];
const mlb_ua = new Theme(themeName, wordsMapping, 'Талісман: ');
themes_ua.push(mlb_ua);

let count;
let theme;
let w;
let newGame = document.getElementById('newGame');

function start() {
    document.getElementById('gameContainer').style.display = 'block';
    let categories = '';
    for (let i = 0; i < themes.length; i++) {
        categories += (i + 1 + ' - ' + themes[i].getName() + '\n');
    }
    let choice = +prompt(themeMessage + '\n\n' + categories) - 1;
    theme = themes[choice];

    let index = Math.floor(Math.random() * theme.Size());
    let secret = theme.getNthElement(index);
    w = new SecretWord(secret);

    count = 0;
    console.log(w.updateWord());
    document.getElementById('word').innerText = w.updateWord();
    console.log(w.updateDrawing(0));
    document.querySelector('#drawing > p').innerText = w.updateDrawing(0);
    w.showIncorrect();
    document.getElementById('hint').innerText = '\n';
    document.forms['lettersInput']['guesses'].readOnly = false;
    document.forms['lettersInput']['guesses'].focus();
    newGame.style.display = 'none';
}

function processTheLetter() {
    let input = document.forms['lettersInput'];
    let guess = input['guesses'].value.toLowerCase();
    input.reset();
    if (guess === '') {
        alert(empty);
        return false;
    }
    if (guess.length > 1) {
        alert(overflow);
        return false;
    }
    if (!checkAgainst.includes(guess)) {
        alert(invalid);
        return false;
    }

    if ( w.check(guess) ) {
        console.log(w.updateWord(guess));
        document.getElementById('word').innerText = w.updateWord(guess);
    } else {
        ++count;
        console.log(w.updateWord());
        document.getElementById('word').innerText = w.updateWord();
    }

    console.log(w.updateDrawing(count));
    document.querySelector('#drawing > p').innerText = w.updateDrawing(count);
    w.showIncorrect();

    if (count === 6 || w.win()) {
        if (count === 6) {
            console.log(loose + w.word);
            document.getElementById('gameEnd').innerText = loose + w.word;
        }
        if ( w.win() ) {
            console.log(win);
            document.getElementById('gameEnd').innerText = win;
        }
        // document.getElementById('gameContainer').style.display = 'none';
        document.forms['lettersInput']['guesses'].readOnly = true;
        document.forms['lettersInput']['guesses'].blur();
        // document.getElementById('newGame').style.backgroundColor = 'rgba(255, 255, 255, .8)';
        blurAnimation(document.getElementById('newGame'));
        newGame.style.display = 'block';
        return false;
    }

    return false;
}

function blurAnimation(elem) {
    elem.style.backdropFilter = 'blur(0px)';
    let id = null;
    let blurValue = 0;
    clearInterval(id);
    id = setInterval(function () {
        if (blurValue >= 3) {
            clearInterval(id);
        } else {
            blurValue += 0.02;
            elem.style.backdropFilter = 'blur(' + blurValue + 'px)';
        }
    }, 5);
}

