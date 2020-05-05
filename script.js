
var myQuiz = "unknown";
var currSpot = 0;
var quizTop = "unknown";
var quizBottom = "unknown";

const icons = ["bomb", 
            "fire", "house", "oxygen",
            "skull", "syringe", "chemistry",
            "garlic", "pump", "martini",
            "pot", "shield", "wand",
            "microscope", "razor", "mask",
            "bed", "heartbeat", "stetoscope", "spray", "scissors",
            "knife", "doctor", "heart",
            "bottle", "sun", "ambulance", 
            "medical1", "syringe2", "medical2", "bucket"
        ]

const nopeDilemma = ["Настучать на соседей?",
            "Написать бывшим?",
            "Выгнать жильцов за неуплату?",
            "Посмотреть «Дау»?",
            "Позвать гостей?",
            "Наорать на домашних?",
            "Пнуть кота?",
            "Стать курьером, чтобы гулять?",
            "Поныть в соцсетях?",
            "Сыграть в онлайн-казино?",
            "Купить ружье?",
            "Вызвать маникюр на дом?",
            "Сходить в церковь?",
    ];

const maybeDilemma = [
            "Побриться налысо?",
            "Врубить сериал?",
            "Выпить?",
            "Прилечь?",
            "Вздремнуть?",
            "Испечь хлеб?",
            "Подписать петицию?",
            "Скачать TikTok?",
            "Погадать на картах?",
            "Надеть штаны в Zoom?",
            "Покраситься в розовый?",
            "Купить доллары?",
            "Вылезти из пижамы?",
            "Всплакнуть?",
            "Помыть голову?",
            "Посмотреть вебинар?"
    ]
const quizzes = {
    "doctor":       "Вызвать врача?",
    "haircut":      "Подстричься самому?",
    "party":        "Устроить вечеринку?",
    "face":         "Потрогать лицо?",
    "lend":         "Дать в долг?",
    "borrow":       "Открыть кредит?",
    "buckwheat":    "Купить гречки?",
    "mask":         "Сшить маску?",
    "sanitizer":    "Сделать санитайзер?",
    "orthodox":        "Поцеловать иконы?",
    "clean":        "Убраться в квартире?",
    "pasta":        "Макарошки или пюрешка?",
    "borscht":      "Сварить борщ?",
    "delivery":     "Заказать доставку?",
    "pass":         "Заказать пропуск?",
    "cab":          "Вызвать такси?",
    "pharmacy":     "Выйти в аптеку?",
    "metro":        "Спуститься в метро?",
    "bbq":          "Сходить на шашлыки?",
    "fuckit":       "Послать всё к черту?"
}
    
var buttonTop = document.getElementsByClassName("button button_position_top")[0];
var buttonLeft = document.getElementsByClassName("button button_position_left")[0];
var buttonRight = document.getElementsByClassName("button button_position_right")[0];
var buttonBottom = document.getElementsByClassName("button button_position_bottom")[0];
var quest = document.getElementsByClassName("question__text")[0];
var icon = document.getElementsByClassName("result__icon")[0];

var screenMain = document.getElementsByClassName("main")[0];
var introText = document.getElementsByClassName("main__text")[0];
var compass = document.getElementsByClassName("compass")[0];
var reload = document.getElementsByClassName("main__wrapper")[0];
var screenQuiz = document.getElementsByClassName("question")[0];
var screenRes = document.getElementsByClassName("result")[0];
var resultText = document.getElementsByClassName("result__text")[0];
var resultIcon = document.getElementsByClassName("result__icon-container")[0];
var answer1 = document.getElementsByClassName("question__answer1")[0];
var answer2 = document.getElementsByClassName("question__answer2")[0];
var answer3 = document.getElementsByClassName("question__answer3")[0];
var answer4 = document.getElementsByClassName("question__answer4")[0];
var answer5 = document.getElementsByClassName("question__answer5")[0];
var arrow1 = document.getElementsByClassName("question__arrow1")[0];
var arrow2 = document.getElementsByClassName("question__arrow2")[0];
var arrow3 = document.getElementsByClassName("question__arrow3")[0];
var arrow4 = document.getElementsByClassName("question__arrow4")[0];
var arrow5 = document.getElementsByClassName("question__arrow5")[0];

var maybeResults = ["Да", 
    "А давай!", 
    "Подумай об этом завтра", 
    "Ну перестань!", 
    "Конечно",   
    "О нет! Только не это", 
    "Этого хотелось бы избежать", 
    "Сверься с лунным календарем",
    "Идея достойна брейнсторма",
    "Вряд ли",
    "В другой раз",
    "Почему бы и нет?",
    "Возможно",
    "Если очень хочется",
    "Ееее!", 
    "А это мысль!",
    "Достойная затея",
    "Не-а"
]
var noResults = ["Ну нет", "Уууу, Павлик Морозов!", "Тупо нет", "Покайся!", "Совсем там уже?", 
"Лучше посмотри на воду", "По голове себе настучи"]


function loadQuizzes() {
    var quiz1 = random(Object.keys(quizzes));
    quizTop = Object.keys(quizzes)[quiz1];
    buttonTop.innerHTML = Object.values(quizzes)[quiz1];
    var quiz2 = random(Object.keys(quizzes));
    while (quiz1===quiz2) {
        quiz2 = random(Object.keys(quizzes));
    }
    quizBottom = Object.keys(quizzes)[quiz2];
    buttonBottom.innerHTML = Object.values(quizzes)[quiz2];
    
    buttonLeft.innerHTML = maybeDilemma[random(maybeDilemma)];
    buttonRight.innerHTML = nopeDilemma[random(nopeDilemma)];
}

function quiz(choice) {
        if (introText.style.display !== "none") {
            introText.style.display = "none";
            compass.style.margin = "auto";
        }

        if (choice==='top') {
            // myQuiz = quizTop;
            myQuiz = "clean";
            answer(1);
        }
        else if (choice==='bottom') {
            myQuiz = quizBottom;
            answer(1);
        }
        else if (choice==='right') {
            result(screenMain, noResults[random(noResults)]);
        }
        else if (choice==='left') {
            result(screenMain, maybeResults[random(maybeResults)]);
        }
}

function answer(choice) {
    switch(myQuiz) {
        case "delivery": 
            delivery(currSpot, choice);
            break;
        case "cab":
            cab(currSpot, choice);
            break;
        case "doctor": 
            doctor(currSpot, choice);
            break;
        case "haircut": 
            haircut(currSpot, choice);
            break;
        case "party": 
            party(currSpot, choice);
            break;
        case "face": 
            face(currSpot, choice);
            break;
        case "lend": 
            lend(currSpot, choice);
            break;
        case "borrow": 
            borrow(currSpot, choice);
            break;
        case "buckwheat": 
            buckwheat(currSpot, choice);
            break;
        case "mask": 
            mask(currSpot, choice);
            break;
        case "sanitizer": 
            sanitizer(currSpot, choice);
            break;
        case "orthodox": 
            orthodox(currSpot, choice);
            break;
        case "clean": 
            clean(currSpot, choice);
            break;
        case "pasta": 
            empty(currSpot, choice);
            break;
        case "borscht": 
            empty(currSpot, choice);
            break;
        case "pass": 
            empty(currSpot, choice);
            break;
        case "pharmacy": 
            empty(currSpot, choice);
            break;
        case "metro": 
            empty(currSpot, choice);
            break;
        case "bbq": 
            empty(currSpot, choice);
            break;
        case "fuckit": 
            empty(currSpot, choice);
            break;
    
    }
}

function face(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        threeAnswers("Руки чистые?", "Мыты с мылом", "Обработаны санитайзером", "Нет");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Трогай сколько угодно");
                break;
            case 3: 
                result(screenQuiz, "Лучше потерпи");
                break;
            case 5: 
                result(screenQuiz, "Ну так помой сначала");
                break;
        }
    }
}

function lend(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        threeAnswers("Деньги не последние?", "Последние", "Нет, но не лишние", "Нет");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                threeAnswers("Прям вот совсем?", "Совсем", "Совсем-совсем", "Нет");
                break;
            case 3: 
                result(screenQuiz, "А лишних и не бывает. Займи");
                break;
            case 5: 
                result(screenQuiz, "Выручи человека, не жадничай");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "У всех так. Помоги чем-то еще");
                break;
            case 3: 
                result(screenQuiz, "Ну что ж. Поддержи тогда морально");
                break;
            case 5: 
                result(screenQuiz, "Выручи человека, не жадничай");
                break;
        }
    }
}

function borrow(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        threeAnswers("Совсем денег нет?", "Ага", "Есть, но не лишние", "Пока есть");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                threeAnswers("Прям вот совсем?", "Совсем", "Совсем-совсем", "Нет");
                break;
            case 3: 
                result(screenQuiz, "А лишних и не бывает. Прорвешься");
                break;
            case 5: 
                result(screenQuiz, "Не паникуй и учись экономить");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Одолжи у друзей");
                break;
            case 3: 
                result(screenQuiz, "Ну что ж. Только не трать все сразу");
                break;
            case 5: 
                result(screenQuiz, "Потерпи, прорвемся");
                break;
        }
    }
}

function buckwheat(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("Кончилась гречка?", "Да", "Пока есть");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                twoAnswers("И рис кончился?", "Да", "Пока есть");
                break;
            case 5: 
                result(screenQuiz, "Так доешь сначала");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                twoAnswers("И картоха?", "Да", "Пока есть");
                break;
            case 5: 
                result(screenQuiz, "Рис доешь сначала");
                break;
        }
    }
    else if (questionNumber===3) {
        switch(choice) {
            case 1: 
                twoAnswers("И даже макароны?", "Да", "Пока есть");
                break;
            case 5: 
                result(screenQuiz, "Доешь картошку сначала");
                break;
        }
    }
    else if (questionNumber===4) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Так и быть, покупай");
                break;
            case 5: 
                result(screenQuiz, "Как макароны доешь, приходи");
                break;
        }
    }
}

function mask(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("Ты для себя?", "Да", "Нет");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Шей. И еще одну в подарок");
                break;
            case 5: 
                twoAnswers("А для чего?", "В подарок", "На продажу");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Норм идея");
                break;
            case 5: 
                twoAnswers("Чего ты хочешь?", "Помочь", "Разбогатеть");
                break;
        }
    }
    else if (questionNumber===3) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Ладно. Только давай без бешеных наценок");
                break;
            case 5: 
                result(screenQuiz, "Мда-а. Выйди и зайди нормально");
                break;
        }
    }
}

function sanitizer(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("А купить никак?", "Да можно", "Негде");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Лучше купить, не облажаешься с пропорциями");
                break;
            case 5: 
                twoAnswers("Так ты для себя?", "Да", "Нет");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Давай, только точно по инструкции!");
                break;
            case 5: 
                twoAnswers("А для чего?", "В подарок", "На продажу");
                break;
        }
    }
    else if (questionNumber===3) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Норм идея");
                break;
            case 5: 
                twoAnswers("Чего ты хочешь?", "Помочь", "Разбогатеть");
                break;
        }
    }
    else if (questionNumber===4) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Ладно. Только давай без бешеных наценок");
                break;
            case 5: 
                result(screenQuiz, "Мда-а. Выйди и зайди нормально");
                break;
        }
    }
}

function orthodox(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("Где иконы?", "В церкви", "Дома");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Не целуй. Бог простит");
                break;
            case 5: 
                threeAnswers("Твои иконы самые красивые?", "Да", "Обожаю их", "Конечно");
                break;
        }
    }
    else if (questionNumber===2) {
        result(screenQuiz, "Целуй до упаду");
    }
}

function clean(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("Дома грязно?", "Ну да", "Да нет");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Приберись. Хотя никто не заставляет");
                break;
            case 5: 
                threeAnswers("Когда была последняя уборка?", "Сегодня", "Вчера", "На днях");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                twoAnswers("И уже хочется снова?", "Да", "Не особо");
                break;
            case 3:
                result(screenQuiz, "Подожди пару дней");
                break;
            case 5: 
                result(screenQuiz, "Можно и прибраться. Но не заставляй себя");
                break;
        }
    }
    else if (questionNumber===3) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Позвони психологу, пожалуйста");
                break;
            case 5: 
            result(screenQuiz, "Вот и не надо");
                break;
        }
    }
}

var mental = 0;
function doctor(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        threeAnswers("Ты болеешь?", "Да", "А вдруг!", "Нет");
    }
    else if (questionNumber===1 && choice===3) {
        mental = 1;
        threeAnswers("Ты что, ипохондрик?", "Да", "Точняк", "Именно");
    }
    else if (mental === 1) {
        mental = 0;
        result(screenQuiz, "Тогда звони психологу, врачи заняты");
    }
    else if (questionNumber===1 && choice===5) {
        twoAnswers("Кто-то дома болеет?", "Да", "Нет");
    }
    else if ((questionNumber===2 || questionNumber===1)  && choice===1) {
        result(screenQuiz, "Ну и чего ты ждешь? Звони");
    }
    else if (questionNumber===2 && choice===5) {
        result(screenQuiz, "Ну и всё. Пойди лучше зарядку сделай");
    }
}
function haircut(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        fourAnswers("Что за стрижка?", "Под ноль", "Каскад", "Андеркат", "Креативная");
    }
    else if(questionNumber===1) {
        switch(choice) {
            case 1: 
                result(screenQuiz, maybeResults[random(maybeResults)]);
                break;
            case 2:
                twoAnswers("Техника «четыре хвостика» изучена?", "Да", "Нет");
                break;
            case 4: 
                result(screenQuiz, "Только не андеркат!");
                break;
            case 5: 
                twoAnswers("Видеотуториалы просмотрены?", "Да", "Нет");
                break;
        }
    }
    else if(questionNumber===2) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Ну с богом! Потом отрастут");
                break;
            case 5:
                result(screenQuiz, "Зайди в «Одноклассники» изучить матчасть");
                break;
        }
    }
}

function party(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("Это вечеринка в Zoom?", "Да", "Нет");
    }
    else if (questionNumber===1) {
        switch(choice) {
            case 1: 
                twoAnswers("Еще не надоело?", "Надоело", "Совсем нет");
                break;
            case 5: 
                result(screenQuiz, "Ну потерпи чуть-чуть");
                break;
        }
    }
    else if (questionNumber===2) {
        switch(choice) {
            case 1: 
                result(screenQuiz, "Посмотри лучше на закат");
                break;
            case 5: 
                result(screenQuiz, "Давай жги");
                break;
        }
    }
}

function empty(questionNumber, choice) {
    console.log("hi");
    result(screenMain, "Тут пока нет теста");
}


function delivery(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        twoAnswers("Ты болеешь?", "Да", "Нет");
    }
    else if (questionNumber===1 && choice===5) {
        threeAnswers("Оставишь чаевые?", "Да", "Нет, я бедный", "Нет, я жадный");
    }
    else if (questionNumber===2 && choice===1) {
        twoAnswers("Точно?", "Да", "Нет");
    }
    else if (questionNumber===3 && choice===1) {
        twoAnswers("Прям от души?", "Да", "Нет");
    }
    else if ((questionNumber===4 && choice===1) || (questionNumber===1 && choice===1)) {
        result(screenQuiz, "Тaк и быть, вызывай!");
    }
    else if ((questionNumber===2 || questionNumber===3 || questionNumber===4) && choice===5) {
        result(screenQuiz, "Пойди хлебни гречки с молоком");
    }
    else if (questionNumber===2 && choice===3) {
        result(screenQuiz, "На доставку хватило? Хватит и на чай");
    }          
}

function cab(questionNumber, choice) {
    if (questionNumber===0) {
        screenTransition(screenMain, screenQuiz);
        fourAnswers("Куда едем?", "В гости", "На работу", "Везу еду больному", "На дачу");
    }
    else if (questionNumber===1 && (choice===2 || choice===5)) {
        threeAnswers("Оставишь чаевые?", "Да", "Нет, я бедный", "Нет, я жадный");
    }
    else if (questionNumber===2 && choice===1) {
        twoAnswers("Точно?", "Да", "Нет");
    }
    else if (questionNumber===3 && choice===1) {
        twoAnswers("Прям от души?", "Да", "Нет");
    }
    else if ((questionNumber===4 && choice===1) || (questionNumber===1 && choice===4)) {
        result(screenQuiz, "Тaк и быть, вызывай!");
    }
    else if (((questionNumber===2 || questionNumber===3 || questionNumber===4) && choice===5) || (questionNumber===1 && choice===1)) {
        result(screenQuiz, "Сиди дома!");
    }
    else if (questionNumber===2 && choice===3) {
        result(screenQuiz, "На такси хватило? Хватит и на чай");
    }          
}

function result(screen1, resTxt) {
            icon.src = "./images/icons/" + icons[random(icons)] + ".svg";
            resultText.innerHTML = resTxt;
            screenTransition(screen1, screenRes);
}

function random(arr) {
    console.log(Math.floor(Math.random()*(arr.length)));
    return Math.floor(Math.random()*(arr.length));
}
function startNew() {
    currSpot = 0;
    screenTransition(screenRes, screenMain);
    loadQuizzes();
}
function screenTransition(screen1, screen2) {
    if (screen1 === screenMain) {
        reload.style.opacity = "0";
    }
    screen1.style.visibility = "hidden";
    screen1.style.opacity = "0";
    screen1.style.height = "0";
    screen2.style.visibility = "visible";
    screen2.style.height = "100vh";
    screen2.style.opacity = "1";
    
    if (screen1 === screenRes) {
        resultIcon.style.opacity = "0";
        reload.style.opacity = "1";
    }
    else if (resultIcon.style.opacity === "0") {
        resultIcon.style.opacity = "1";
    } 
}


function twoAnswers(question, ans1, ans2) {
            answer2.style.display = "none";
            answer3.style.display = "none";
            answer4.style.display = "none";
            arrow2.style.display = "none";
            arrow3.style.display = "none";
            arrow4.style.display = "none";

            answer1.innerHTML = ans1;
            answer5.innerHTML = ans2;
            quest.innerHTML = question;
            currSpot += 1;
}
function threeAnswers(question, ans1, ans2, ans3) {
            answer3.style.display = "block";
            arrow3.style.display = "block";

            answer2.style.display = "none";
            answer4.style.display = "none";
            arrow2.style.display = "none";
            arrow4.style.display = "none";

            answer1.innerHTML = ans1;
            answer3.innerHTML = ans2;
            answer5.innerHTML = ans3;
            quest.innerHTML = question;
            currSpot += 1;
}
function fourAnswers(question, ans1, ans2, ans3, ans4) {      
            answer2.style.display = "block";
            arrow2.style.display = "block";
            answer4.style.display = "block";
            arrow4.style.display = "block";

            answer3.style.display = "none";
            arrow3.style.display = "none";

            answer1.innerHTML = ans1;
            answer2.innerHTML = ans2;
            answer4.innerHTML = ans3;
            answer5.innerHTML = ans4;
            quest.innerHTML = question;
            currSpot += 1;
}