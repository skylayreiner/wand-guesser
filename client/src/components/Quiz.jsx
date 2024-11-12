import { useState } from "react";
import Question from './Question';
import Results from './Results';


const PLACEHOLDER_QUIZ_DATA = [
  {
    wandInfo: {
      id: 1,
      woodType: "Yew",
      core: "Thestral tail hair",
      length: "15 inches",
      img: "https://noblecollection.co.uk/wp-content/uploads/2018/07/Dumbledore-Wand.png"
    },
    options: [
      {
        owner: "Albus Dumbledore",
        id: 2,
        correct: true
      },
      {
        owner: "Ron Weasley",
        id: 3,
        correct: false
      },
      {
        owner: "Draco Malfoy",
        id: 4,
        correct: false
      },
      {
        owner: "Hermione Granger",
        id: 5,
        correct: false
      }
    ]
  },
  {
    wandInfo: {
      id: 2,
      woodType: "Holly",
      core: "Phoenix feather",
      length: "11 inches",
      img: "https://noblecollection.co.uk/wp-content/uploads/2018/07/Harry-Potter-Wand.png"
    },
    options: [
      {
        owner: "Albus Dumbledore",
        id: 2,
        correct: false
      },
      {
        owner: "Harry Potter",
        id: 3,
        correct: true,
      },
      {
        owner: "Draco Malfoy",
        id: 4,
        correct: false
      },
      {
        owner: "Hermione Granger",
        id: 5,
        correct: false
      }
    ]
  },
  {
    wandInfo: {
      id: 2,
      woodType: "Holly",
      core: "Phoenix feather",
      length: "11 inches",
      img: "https://noblecollection.co.uk/wp-content/uploads/2018/07/Harry-Potter-Wand.png"
    },
    options: [
      {
        owner: "Albus Dumbledore",
        id: 2,
        correct: false
      },
      {
        owner: "Harry Potter",
        id: 3,
        correct: true,
      },
      {
        owner: "Draco Malfoy",
        id: 4,
        correct: false
      },
      {
        owner: "Hermione Granger",
        id: 5,
        correct: false
      }
    ]
  }
]



// INSANE mode should replace multiple choice with fill in the blank
// Prevent cheating ???


export default function Quiz() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const questionData = PLACEHOLDER_QUIZ_DATA[questionIdx];


  function handleSubmitOwner(guessedOwner) {
    if (guessedOwner) {
      const correctOwner = questionData.options.find((option) => option.correct === true)?.owner;
      if (guessedOwner === correctOwner) {
        alert("correct!")
      } else {
        alert("incorrect!")
      }
      setQuestionIdx(questionIdx + 1);
    }
  }

  function isInProgress(idx) {
    if (idx >= 0 && idx < PLACEHOLDER_QUIZ_DATA.length) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div>{questionIdx}/{PLACEHOLDER_QUIZ_DATA.length}</div>
      {isInProgress(questionIdx) ?
        <Question handleSubmit={handleSubmitOwner} questionInfo={questionData} /> : <Results />
      }
    </div>
  )
}