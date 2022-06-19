

let request = new XMLHttpRequest();
request.open("GET", 'https://netology-slow-rest.herokuapp.com/poll.php', true);
request.onload = function (){
    const answer = JSON.parse(request.responseText);
    printPoll(answer);
}
request.send(null);

function printPoll(poll) {
    const pollDiv  = document.querySelector('.poll');
    const pollQuestion = poll.data.title;
    const pollAnswers = poll.data.answers;
    createPoll(pollQuestion, pollAnswers, pollDiv)
}


function createPoll (question, answers, div) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('poll__title');
    questionDiv.id = 'poll__title';
    questionDiv.innerText = question;
    div.appendChild(questionDiv);

    const answersDiv = document.createElement('div');
    answersDiv.className = "poll__answers poll__answers_active";
    answersDiv.id = 'poll__answers';

    for (let answer of answers) {
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.innerText = answer;
        answersDiv.appendChild(button);
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
        })
    }

    div.appendChild(answersDiv);
}


{/* <div class="poll__title" id="poll__title">
            <!--   Как вы относитесь к собакам? -->
          </div>
          <div class="poll__answers poll__answers_active" id="poll__answers">
            <!-- <button class="poll__answer">
              Хорошо
            </button>
            <button class="poll__answer">
              Отлично
            </button>
            <button class="poll__answer">
              Я люблю собак
            </button>
            <button class="poll__answer">
              Кто тут?
            </button> -->
          </div> */}