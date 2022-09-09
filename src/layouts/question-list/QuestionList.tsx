import { useSnackbar } from 'notistack';
import React from 'react'
import { constantsText } from '../../constants/constantsText';
import { dateCutter } from '../../helpers/dateCutter';
import ChatInfoModel from '../../models/chatInfoModel';
import "./QuestionList.css";

interface Props {
  items: ChatInfoModel[]
  setQuestionList: React.Dispatch<React.SetStateAction<ChatInfoModel[]>>
}

const QuestionList: React.FC<Props> = ({ items, setQuestionList }: Props) => {
  const handleDelete = (id: number) => {
    setQuestionList(items.filter(item => {
      return item.id !== id
    }))
  }

  return (
    <div className='question-list-container'>
      {items.map((item) => (
        <button key={item.id} className='question-list-item-container'>
          <div className="question-list-profile-photo">
            <img className='question-list-img' src={item.profilePhotoUrl} />
          </div>
          <div className='question-list-user-info'>
            <div className='question-list-full-name'>{item.firstName} {item.lastName}</div>
            <div className='question-list-last-message'>{item.lastMessage}</div>
          </div>
          <div className="question-list-date">
            <div>{dateCutter(item.date)}</div>
            <button onClick={(e) => handleDelete(item.id)} className="question-list-delete-button">{constantsText.DELETE}</button>
          </div>
        </button>
      ))}
    </div>
  )
}

export default QuestionList