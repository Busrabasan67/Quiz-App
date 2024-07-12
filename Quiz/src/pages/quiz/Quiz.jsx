import React, { useEffect, useState } from 'react'
import './Quiz.css' //Quiz sayfasının css kodlarını dahil ediyorum.
import {useParams} from 'react-router-dom'
import * as api from '../../api/api' //api 'ın sayfaya çekilişi bu şekildedir.
import QuestionCard from '../../components/questionCard/QuestionCard'
import Modal from '../../components/modal/Modal'


const Quiz = () => {
  const {difficulty, amount} = useParams()
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [modal,setModal] = useState(false)

  useEffect(() => {
     const getData = async() => {
      const data = await api.fetchQuizData(difficulty, amount)
      setQuestionsData(data)
     }
     getData();
    
  }, [])

  console.log(questionsData,"questionsData"); // gelen veriler gerçekten geliyor mu diye konrtol et.


  return (
    <div className ='quiz'> 
    {
      modal ? <Modal score={score}/> :
      <QuestionCard
      questionsData = {questionsData}
      score = {score}
      setScore ={setScore}
      count = {count}
      setCount = {setCount}
      modal = {modal}
      setModal = {setModal}
     />
    }
    
    </div>
  )
}

export default Quiz
