import React from 'react'
import DoctorModel from '../../models/doctorModel'
import DoctorCard from '../doctor-card/DoctorCard'
import "./GridListDoctorCard.css"

interface Props{
    doctors:DoctorModel[]
}

const GridListDoctorCard:React.FC<Props> = ({doctors}:Props) => {
  return (
    <div className="grid-list-doctor-card-grid-container">
            {doctors.map((doctor) => (
              <div key={doctor.userId} className="grid-list-doctor-card-grid-item"> <DoctorCard doctor={doctor} /></div>
            ))}
          </div>
  )
}

export default GridListDoctorCard