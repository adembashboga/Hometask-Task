const questions = [
            "Вам нравится программирование?",
            "Вы любите IT Step?",
            "Часто вы по",
            "Вы предпочитаете отдыхать на природе?",
            "Вы любите путешествовать?"
        ];

let YesAnswer = 0;
let NoAnswer = 0;

function runTest() {
    for (let i = 0; i < questions.length; i++) {
        let answer = prompt(questions[i] + " (Да/Нет)");
                
        if (answer === "да") {
                YesAnswer++;
        } 
        else if (answer === "нет") {
            NoAnswer++;
        } 
        else {
            alert("Пожалуйста, отвечайте только 'Да' или 'Нет'.");
            i--;
        }
    }
alert(`Результаты теста:\n Ответы Да - ${YesAnswer}\n Ответы Нет - ${NoAnswer}`);
}