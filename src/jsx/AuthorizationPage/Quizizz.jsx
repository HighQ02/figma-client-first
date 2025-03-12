import React from 'react';
import '../../static/Auth.css';

function Quizizz() {
    const questions = [
        { question: "Сколько вы поставите Арлану?", options: ["100", "99.99", "99", "98", "99.9"], answer: "100" },
        { question: "Сколько будет 2 + 2?", options: ["3", "4", "5", "6", "4.5"], answer: "4" },
        { question: "Какое аниме самое лучшее?", options: ["ДжоДжо", "МГА", "Пожарная бригада", "АОТ", "Кайдзю №8"], answer: "АОТ" },
        { question: "Что используется для обновления реакта?", options: ["export", "const", "if, else", "UseEffect", "Nolan"], answer: "UseEffect" },
        { question: "Какое завтра день?", options: ["11 сентября", "12 декабря", "7 марта", "30 февраля", "1 июня"], answer: "7 марта" }
    ];

    let current = 0;
    let score = 0;
    let done = false;

    const handleAnswer = (option) => {
        if (option === questions[current].answer) score++;
        if (current + 1 < questions.length) {
            current++;
        } else {
            done = true;
        }
        render();
    };

    const render = () => {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        container.innerHTML = '';

        if (done) {
            container.innerHTML = `<h3 class='score-text'>Your Score: ${score} / ${questions.length}</h3>`;
            return;
        }

        const questionEl = document.createElement('h3');
        questionEl.textContent = questions[current].question;
        questionEl.className = 'question-text';
        container.appendChild(questionEl);

        for (let i = 0; i < questions[current].options.length; i++) {
            const button = document.createElement('button');
            button.textContent = questions[current].options[i];
            button.className = 'quiz-button';
            button.addEventListener('click', () => handleAnswer(questions[current].options[i]));
            container.appendChild(button);
        }
    };

    React.useEffect(() => {
        render();
    }, []);

    return (
        <div className="quizizz">
            <h2>Quizizz</h2>
            <div id="quiz-container"></div>
        </div>
    );
}

export default Quizizz;
