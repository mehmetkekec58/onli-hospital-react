import React from 'react'
import GridListCard from '../../layouts/grid-list/grid-list-card/GridListCard';
import ArticleModel from '../../models/articleModel';
import './ReadingList.css';


const articles: ArticleModel[] = [
    {
      articleId: 0,
      thumbnailUrl: "http://drmustafasener.com/2018/10/kanser-hucresi-vucutta-nasil-beslenir.jpeg",
      username: "mehmetkekec",
      profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
      firstName: "Mehmet",
      lastName: "Kekeç",
      title: "Kanser Nedir?",
      text: "Kanser hücresi durmadan çoğalmaya devam edebilir. Normalde bağışıklık sistemi anormal hücreleri yakalar ve yok eder. Ancak kanser hücreleri bağışıklık sisteminden kaçabilirler. Normal vücut hücrelerinde olağan olan hücre ölümü kanser hücrelerinde görülmez.",
      tag: ["kanser", "kansere ne iyi gelir", "kanser nasıl tedavi edilir"],
      date:new Date(1995, 11, 17),
    },
    {
      articleId: 1,
      thumbnailUrl: "https://img-guven.mncdn.com/storage/temp/public/imageresizecache/a64/ba6/a45/a64ba6a45db7b11956e5241e3cfaba52a46a651b785234b1583cca5b4d052716.jpg",
      username: "savascebeci",
      profilePhotoUrl: "https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=",
      firstName: "Savaş",
      lastName: "Cebeci",
      title: "verem Belirtileri? Ne iyi gelir?",
      text: "Basil bulaştıktan sonra 4-6 hafta boyunca belirti vermez. Hafif ateş ve kırgınlık olabilir. Bu arada PPD (basille karşılaşıldığının belirtecidir) pozitif olur. Bu aşamada çoğu kişide vücudun genel ve mikrobun yerleştiği yerdeki yerel savunma sistemi ile basil baskılanır ve sessiz bir enfeksiyona dönüşür. Ancak yüzde 5 kadar kişide primer enfeksiyon gelişir. Hastalığın tuttuğu organa göre o bölgedeki lenf bezleri şişer ve cilde yakın olması durumunda akıntılı olabilir.",
      tag: ["verem", "verem belirtileri", "verem nasıl oluşur"],
      date:new Date(1995, 11, 17),
    },
    {
      articleId: 2,
      thumbnailUrl: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/4BQH4O1E.jpg",
      username: "handeaslantas",
      profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      firstName: "Hande Kevser",
      lastName: "Aslantaş",
      title: "Kanser Nedir?",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date:new Date(1995, 11, 17),
    },
    {
      articleId: 3,
      thumbnailUrl: "https://img.piri.net/mnresize/840/-/resim/imagecrop/2016/03/17/01/00/resized_6c4a8-4c911fcdgulhastaligi.jpg",
      username: "handeaslantas",
      profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      firstName: "Hande",
      lastName: "Aslantaş",
      title: "Kanser Nedir?",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date:new Date(1995, 11, 17),
    },
    {
      articleId: 4,
      thumbnailUrl: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/4BQH4O1E.jpg",
      username: "handeaslantas",
      profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      firstName: "Hande",
      lastName: "Aslantaş",
      title: "Kanser Nedir?",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date:new Date(1995, 11, 17),
    },
  ]
  

const ReadingList = () => {
  return (
    <div className='reading-list-container'>
        <GridListCard articles={articles} />
    </div>
  )
}

export default ReadingList