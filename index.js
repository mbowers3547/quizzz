var json = {
    title: "American History Quiz",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    showNavigationButtons: false,
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "zebra",
                    title: "What color are zebras?",
                    choices: ["White with black stripes", "Black with white stripes", "Both of the above", "None of the above"], correctAnswer: "Black with white stripes"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "sleepy",
                    title: "Which of the following animals sleep standing up?",
                    choices: ["Gorillas", "Flamingos", "Camels", "Ravens"], correctAnswer:"Flamingos"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "fast",
                    title: "What is the fastest water animal?",
                    choices: ["Porpoise", "Sailfish", "Flying fish", "Tuna"], correctAnswer: "Sailfish"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{sleepy}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
