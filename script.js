
const nextButton = document.getElementById('next-btn')
const answerButton = document.getElementById('btn')
const questionContainerElement = document.getElementById('question-container')
const container = document.getElementById('container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const intro = document.getElementById('intro')
const questionnum = document.getElementById('questionnum')
const pointTitle = document.getElementById('section2')
const points = document.getElementById('points')
const end = document.getElementById('endgame')
const finalpt = document.getElementById('fp')
const page = document.getElementById('fp')

let shuffledQuestions, currentQuestionIndex

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  end.classList.add('hide')
  container.classList.remove('hide')
  pointTitle.classList.remove('hide')
  var value = parseInt(0, 10);
  points.innerHTML = value;
  intro.classList.add('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  questionnum.innerText = (currentQuestionIndex + 1)
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct

    }
    
     // alert("Tr");
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);

        
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  //alert(correct);
 // setStatusClass(document.body, correct, 10)
  if(nextButton.classList.contains('hide')){
    setStatusClass(selectedButton, correct, 10)
    Array.from(answerButtonsElement.children).forEach(button => {
      if(button.dataset.correct){
        setStatusClass(button, button.dataset.correct, 0)
      }
      else {
        button.classList.remove('btn');
        button.classList.add('btne');
      }
    })
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    var value = points.innerHTML;
    finalpt.innerHTML = value;
    end.classList.remove('hide')
  }
}

function setStatusClass(element, correct, val) {
  //clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    var value = points.innerHTML;
    value = parseInt(value, 10) + val;
    points.innerHTML = value;
    element.classList.remove('btn')
  } else {
    element.classList.add('wrong')
    element.classList.remove('btn')
  }


}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Before the 1936 US presidential election, a popular poll predicted that Alfred Landon would comfortably win against Franklin D. Roosevelt. The poll randomly sampled people from sources like telephone and car registration records, but the country was in an economic crisis, so many voters without those luxuries were not included in the poll. What form of bias is apparent here?',
    answers: [
      {text: 'Undercoverage', correct: true},
      {text: 'Voluntary response bias', correct: false},
      {text: 'Nonresponse bias', correct: false},
      {text: 'Response bias', correct: false}
]
},
{
    question: 'A principal orders t-shirts and wants to check some of them to make sure they were printed properly. She randomly selects 2 of the 10 boxes of shirts and checks every shirt in those 2 boxes. What is the sampling method used here?',
    answers: [
      {text: 'Simple random sampling', correct: false},
      {text: 'Stratified sampling', correct: false},
      {text: 'Cluster random sampling', correct: true},
      {text: 'Systematic sampling', correct: false}
]
},
{
    question: 'Each law firm in one state registers its phone number with the state court system. An employee of the state court system uses a computer to select 500 random registered phone numbers, and the law firms associated with those numbers will be selected for an audit. What form of sampling is used here?',
    answers: [
      {text: 'Systematic sampling', correct: false},
      {text: 'Stratified sampling', correct: false},
      {text: 'Cluster sampling', correct: false},
      {text: 'None of the above', correct: true}
]
},
{
    question: 'Employees at a website want to select a sample of their users to ask for a donation. They randomly select one of the first 25 users each day and show them a message asking for a donation. They also show the message to every 25th user from that point on. What type of sampling method is used here?',
    answers: [
    {text: 'Stratified sampling', correct: false},
    {text: 'Systematic sampling', correct: true},
    {text: 'Cluster sampling', correct: false},
    {text: 'None of the above', correct: false}
]
},
{
    question: 'A high school has a policy that students phones must be kept away during class. A principal used the school roster to poll a random sample of 50 students, and only 10%, percent said that they ever had their phone out during class. The next day, the principal observed classrooms and noticed that approximately 25%, percent of students had their phone out at some point during class. What form of bias is used here?',
    answers: [
    {text: 'Undercoverage', correct: false},
    {text: 'Voluntary response bias', correct: false},
    {text: 'Nonresponse bias', correct: false},
    {text: 'Response bias', correct: true}
]
},
{
question: 'In which of the following cases would a census be the best?',
answers: [
{text: 'A survey of teachers in a school', correct: true},
{text: 'All people at Canobie Lake Park', correct: false},
{text: 'All students in a school district', correct: false},
{text: 'All teachers across America', correct: false}
]
},
{
question: 'Identify this definition to the term: The natural tendency for samples to differ sample to sample',
answers: [
{text: 'Population proportion', correct: false},
{text: 'Bias', correct: false},
{text: 'Sampling variability or error', correct: true},
{text: 'None of the above', correct: false}
]
},
{


question: 'A good sample is _______',
answers: [
{text: 'A census', correct: false},
{text: 'Large', correct: false},
{text: 'Stratified', correct: false},
{text: 'Representative', correct: true}
]
},
{
question: 'Phil decides to conduct a survey to determine the public’s opinion of the water quality in the city on a scale of 1-10, with 1 being the worst and 10 being the best. He sends out an email with a link to the survey to a randomly selected sample of 5,000 residents. Only 700 of them responded and the results were either very extreme to the left or to the right.',
answers: [
{text: 'Voluntary response bias', correct: true},
{text: 'Response bias', correct: false},
{text: 'Nonresponse bias', correct: false},
{text: 'Bias from convenience samples', correct: false}
]
},
{
question: 'Workers for NASA want to see a town approval rating of their work in space, so they conduct a survey using stratified sampling. They first divide the town into multiple strata and perform a census on one randomly selected stratum to obtain their final sample. What error did they make?',
answers: [
{text: 'They mixed stratified and SRS', correct: false},
{text: 'The mixed stratified and cluster sampling', correct: true},
{text: 'There is undercoverage', correct: false},
{text: 'There are no errors', correct: false}
]
},
{
question: 'Which of the following is not a type of bias?',
answers: [
{text: 'Response bias', correct: false},
{text: 'Nonresponse bias', correct: false},
{text: 'Overcoverage', correct: true},
{text: 'Bias from convenience sampling', correct: false}
]
},
{
question: 'Joseph conducts a sample survey on the favorite ice cream flavors of his town, and to do so, he uses the cluster sampling technique. He divides his town into multiple representative clusters and conducts a census on one randomly selected cluster. What error did Joseph make?',
answers: [
{text: 'His survey has bias from convenience sampling', correct: false},
{text: 'His survey has nonresponse bias', correct: false},
{text: 'He mixes cluster sampling and SRS', correct: false},
{text: 'There are no mistakes', correct: true}
]
},
{
question: 'What is the use of stratified sampling?',
answers: [
{text: 'Reduces sampling variability', correct: true},
{text: 'cost efficiency', correct: false},
{text: 'Easiest to conduct', correct: false},
{text: 'None of the above', correct: false}
]
},
{
question: 'Vishant conducts a survey of all of the students on his campus regarding the number of hours per week that they spend on homework. He then publishes his findings and states that this is the average number of hours students around the world spend on their homework each week. What is the mistake in Vishant’s statement?',
answers: [
{text: 'His survey has sampling variability', correct: false},
{text: 'His survey has nonresponse Bias', correct: false},
{text: 'His results cannot be generalized', correct: true},
{text: 'There is no mistake', correct: false}
]
},
{
question: 'A basketball association needs to pick 10 players from 10 teams for its all-star roster. They randomly choose 1 player from each team to make up their roster. Is this an SRS?',
answers: [
{text: 'Yes each player has the same chances', correct: false},
{text: 'Yes each sample has the same chances', correct: false},
{text: 'No each player does not have the same chances', correct: false},
{text: 'No each sample does not have the same chances', correct: true}
]
}


]