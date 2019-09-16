var json = {
    title: "Quiz Assessment",
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
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><p>Your anwers are:</p><p>What color are zebras?: <b>Your answer: {zebra}</b>. The correct is: <b>Black with white stripes</b></p><p>Which of the following animals sleep standing up?: <b>Your answer: {sleepy}</b>. The correct is: <b>Flamingo</b></p><p>What is the fastest water animal?: <b>Your answer: {fast}</b>. The correct is: <b>Sailfish</b></p>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
    });

$("#surveyElement").Survey({model: survey});
