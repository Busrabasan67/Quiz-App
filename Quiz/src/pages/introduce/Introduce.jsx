import React, {useState} from 'react'
import './Introduce.css' //sayfaya css kodlarını eklemek 
import Dropdown from '../../components/dropdown/Dropdown'
import {useNavigate} from 'react-router-dom'


const Introduce = () => {
    const difficulty = ['easy','medium','hard']
    const [difficultyChange,setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange,"difficultyChange")

    const startQuiz = () => {
      if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
      }

    }

  return (
    <div className='introduce'>
        <div className='introduce-container'>
            <img src="/img/quizLogo-2.png" alt="foto bulunamadı" />
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
            <div onClick={startQuiz} className='introduce-btn'>Start Quiz</div>
        </div>
    </div>
  )
}

export default Introduce
