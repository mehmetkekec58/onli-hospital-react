import React from 'react'
import { constantsText } from '../../constants/constantsText';
import GridListDoctorCard from '../../layouts/grid-list/grid-list-doctor-card/GridListDoctorCard';
import DoctorModel from '../../models/doctorModel';
import "./Subscription.css";

const doctors: DoctorModel[] = [
    {
      id: 0,
      firstName: "Mehmet",
      lastName: "Kekeç",
      profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
      username: "mehmetkekec",
      branch: "Admin",
      about: "Merhaba ben Mehmet Kekeç. Onli Hospital'in kurucusu.",
    },
    {
      id: 2,
      firstName: "Aslı",
      lastName: "Keser",
      profilePhotoUrl: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
      username: "aslıkeser",
      branch: "Diyetisyen",
      about: "Merhaba ben Aslı. 8 yıldır diyetsyen olarak çalışıyorum.",
    },
    {
      id: 3,
      firstName: "Veli",
      lastName: "Özmen",
      profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
      username: "veliozmen",
      branch: "Dahiliye Doktoru",
      about: "merhaba ben Cerrahpaşa'da dahiliye doktoru olarak çalıyorum.",
    },
    {
      id: 4,
      firstName: "Veli",
      lastName: "Özmen",
      profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
      username: "veliozmen",
      branch: "Dahiliye Doktoru",
      about: "merhaba ben Cerrahpaşa'da dahiliye doktoru olarak çalıyorum.",
    },
    {
      id: 5,
      firstName: "Veli",
      lastName: "Özmen",
      profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
      username: "veliozmen",
      branch: "Dahiliye Doktoru",
      about: "merhaba ben Cerrahpaşa'da dahiliye doktoru olarak çalıyorum.",
    },
  ]

const Subscription = () => {
    return (
        <div className='subscription-container'>
             <div className="subscription-text">{constantsText.SUBSCRIPTIONS}</div>
             <hr/>
            <GridListDoctorCard doctors={doctors} />
        </div>
    )
}

export default Subscription