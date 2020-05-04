
        var myQuiz = "unknown";
        var currSpot = 0;
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
            
        var overlay = document.getElementsByClassName("overlay")[0];
        var quizTop = document.getElementsByClassName("button button_position_top")[0];
        var quizLeft = document.getElementsByClassName("button button_position_left")[0];
        var quizRight = document.getElementsByClassName("button button_position_right")[0];
        var quizBottom = document.getElementsByClassName("button button_position_bottom")[0];
        var quest = document.getElementsByClassName("question__text")[0];
        
        var screenMain = document.getElementsByClassName("main")[0];
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
            quizLeft.innerHTML = maybeDilemma[Math.floor(Math.random()*(maybeDilemma.length))];
            quizBottom.innerHTML = nopeDilemma[Math.floor(Math.random()*(nopeDilemma.length))];
        }
        
        function quiz(choice) {
                if (choice==='top') {
                    myQuiz = "delivery";
                    delivery(currSpot, 1);
                }
                else if (choice==='right') {
                    myQuiz = "cab";
                    cab(currSpot, 1);
                }
                else if (choice==='bottom') {
                    result(screenMain, random(noResults));
                }

                else if (choice==='left') {
                    result(screenMain, random(maybeResults));
                }

        }

        function random(arr) {
            console.log("hi")
            console.log(arr[Math.floor(Math.random()*(arr.length))]);
            return arr[Math.floor(Math.random()*(arr.length))];
        }

        function answer(choice) {
            console.log(myQuiz);
            if (myQuiz === "delivery") {
                console.log('choosing');
                delivery(currSpot, choice);
            }
            else if (myQuiz === "cab") {
                cab(currSpot, choice);
            }
        }

        function screenTransition(screen1, screen2) {
            screen1.style.visibility = "hidden";
            screen1.style.opacity = "0";
            screen1.style.height = "0";
            screen2.style.visibility = "visible";
            screen2.style.height = "100vh";
            screen2.style.opacity = "1";
            
            if (screen1 === screenRes) {
                resultIcon.style.opacity = "0";
            }
            else if (resultIcon.style.opacity === "0") {
                resultIcon.style.opacity = "1";
            }
        }

        function twoAnswers(question, ans1, ans2) {
            console.log("hi");
            answer1.style.display = "block";
            answer5.style.display = "block";

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
            console.log(currSpot);
        }

        function threeAnswers(question, ans1, ans2, ans3) {
            console.log("inside 3answers")
            answer1.style.display = "block";
            answer3.style.display = "block";
            arrow3.style.display = "block";
            answer5.style.display = "block";

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
            answer1.style.display = "block";
            answer2.style.display = "block";
            arrow2.style.display = "block";
            answer4.style.display = "block";
            arrow4.style.display = "block";
            answer5.style.display = "block";

            answer3.style.display = "none";
            arrow3.style.display = "none";

            answer1.innerHTML = ans1;
            answer2.innerHTML = ans2;
            answer4.innerHTML = ans3;
            answer5.innerHTML = ans4;
            quest.innerHTML = question;
            currSpot += 1;
        }

        

        function delivery(questionNumber, choice) {
            console.log(questionNumber, choice, "what")
            if (questionNumber===0) {
                screenTransition(screenMain, screenQuiz);
                twoAnswers("Ты болеешь?", "Да", "Нет");
            }
            else if (questionNumber===1 && choice===5) {
                console.log("inside delivery elseif")
                threeAnswers("Оставишь чаевые?", "Да", "Нет, я бедный", "Нет, я жадный");
            }

            else if (questionNumber===2 && choice===1) {
                twoAnswers("Точно?", "Да", "Нет");
            }

            else if (questionNumber===3 && choice===1) {
                twoAnswers("Прям от души?", "Да", "Нет");
            }

            else if ((questionNumber===4 && choice===1) || (questionNumber===1 && choice===1)) {
                console.log("inside delivery elseif")
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
            resultText.innerHTML = resTxt;
            screenTransition(screen1, screenRes);
        }

        function startNew() {
            currSpot = 0;
            screenTransition(screenRes, screenMain);
            loadQuizzes()
        }