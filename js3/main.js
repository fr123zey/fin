(function() {
    function buildQuiz() {
    
      const output = [];
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answers = [];
  
        
        for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      
      let numCorrect = 0;
  
    
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
          
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          
        
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Comment appelle-t-on ce que libèrent les lymhocytes lors d'une attaque?",
        answers: {
          a: "Anticorps ",
          b: "Antigènes",
          c: "Antilymphes"
        },
        correctAnswer: "a"
      },
      {
        question: "Où sont fabriqués les lymphocytes B?",
        answers: {
          a: "Dans le thymus",
          b: "Dans la moelle osseuse",
          c: "Dans la moelle épinière"
        },
        correctAnswer: "c"
      },
      {
        question: "Quelle est la première ligne de défense lors d'une attaque virale ou bactérienne?",
        answers: {
          a: "la phagocytose",
          b: "la lymphocytose",
          c: "la leucocytose",
          
        },
        correctAnswer: "a"
      }
    ];
  
    
    buildQuiz();
  

    submitButton.addEventListener("click", showResults);
  })();