import React, { useState } from 'react'
import QuestionList from '../../layouts/question-list/QuestionList';
import ChatInfoModel from '../../models/chatInfoModel';
import "./Question.css";

const list: ChatInfoModel[] = [
  {
    id:0,
    userId: 0,
    firstName: "Veli",
    lastName: "Özmen",
    profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    username: "veliozmen",
    lastMessage:"Hücrelerin aşırı artmasından ötürü kanser oluşur.",
    date:new Date(2001,5,25)
  },
  {
    id:1,
    userId: 1,
    firstName: "Veli",
    lastName: "Özmen",
    profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    username: "veliozmen",
    lastMessage:"Hücrelerin aşırı artmasından ötürü kanser oluşur.",
    date:new Date(2001,6,24)
  },
  {
    id:2,
    userId: 2,
    firstName: "Veli",
    lastName: "Özmen",
    profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    username: "veliozmen",
    lastMessage:"Hücrelerin aşırı artmasından ötürü kanser oluşur.",
    date:new Date(2002,1,10)
  },
]

const Question = () => {
  const [questionList, setQuestionList] = useState<ChatInfoModel[]>(list)
  return (
    <div>
        <QuestionList items={questionList} setQuestionList={setQuestionList} />
    </div>
  )
}

export default Question