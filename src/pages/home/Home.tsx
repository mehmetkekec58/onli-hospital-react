import React from 'react'
import GridListCard from '../../layouts/grid-list/grid-list-card/GridListCard';
import GridListCategoryCard from '../../layouts/grid-list/grid-list-category-card/GridListCategoryCard';
import GridListDoctorCard from '../../layouts/grid-list/grid-list-doctor-card/GridListDoctorCard';
import GridListVideoCard from '../../layouts/grid-list/grid-list-video-card/GridListVideoCard';
import ArticleModel from '../../models/articleModel';
import CategoryModel from '../../models/categoryModel';
import DoctorModel from '../../models/doctorModel';
import VideoModel from '../../models/videoModel';
import "./Home.css";

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

const doctors: DoctorModel[] = [
  {
    userId: 0,
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    username: "mehmetkekec",
    branch: "Admin",
    about: "Merhaba ben Mehmet Kekeç. Onli Hospital'in kurucusu.",
  },
  {
    userId: 2,
    firstName: "Aslı",
    lastName: "Keser",
    profilePhotoUrl: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
    username: "aslıkeser",
    branch: "Diyetisyen",
    about: "Merhaba ben Aslı. 8 yıldır diyetsyen olarak çalışıyorum.",
  },
  {
    userId: 3,
    firstName: "Veli",
    lastName: "Özmen",
    profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    username: "veliozmen",
    branch: "Dahiliye Doktoru",
    about: "merhaba ben Cerrahpaşa'da dahiliye doktoru olarak çalıyorum.",
  },
  {
    userId: 4,
    firstName: "Veli",
    lastName: "Özmen",
    profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    username: "veliozmen",
    branch: "Dahiliye Doktoru",
    about: "merhaba ben Cerrahpaşa'da dahiliye doktoru olarak çalıyorum.",
  },
  {
    userId: 5,
    firstName: "Veli",
    lastName: "Özmen",
    profilePhotoUrl: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    username: "veliozmen",
    branch: "Dahiliye Doktoru",
    about: "merhaba ben Cerrahpaşa'da dahiliye doktoru olarak çalıyorum.",
  },
]
const categories:CategoryModel[] = [
  {
    categoryId:0,
    categoryName:"Göğüs Hastalıkları",
    categoryPhotoUrl:"https://www.bilgihastanesi.com.tr/lib/images/bolumler/detail/gogushastalik_1.jpg",
  },
  {
    categoryId:1,
    categoryName:"Kalp-Damar Hastalıkları",
    categoryPhotoUrl:"https://madicanacdnstorage.blob.core.windows.net/main/Assets/photo/r/kalp-damar-cerrahisinde-son-gelismeler-76711_b.jpg",
  },
  {
    categoryId:2,
    categoryName:"Solunum Yolu Hastalıkları",
    categoryPhotoUrl:"https://www.saglikveyasamdergisi.com.tr/wp-content/uploads/2012/10/sigara-solunum-yolu-enfeksiyon-nedeni.jpg",
  },
  {
    categoryId:3,
    categoryName:"Mide Hastalıkları",
    categoryPhotoUrl:"https://madicanacdnstorage.blob.core.windows.net/main/Assets/photo/r/mide-kanseri-37755-56944_b.jpg",
  },
  {
    categoryId:4,
    categoryName:"Coronavirüs",
    categoryPhotoUrl:"https://cdnuploads.aa.com.tr/uploads/Contents/2022/07/24/thumbs_b_c_854aacfcace81c5752b24cf12af1bbe6.jpg",
  },
  {
    categoryId:5,
    categoryName:"Mevsimsel Grip",
    categoryPhotoUrl:"https://grip.gov.tr/depo/mevsimsel-grip/Cocuk-ates-1_c9088.jpg",
  },

]

const videos:VideoModel[]=[
  {
    videoId:0,
    videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title:"Kanser Oluşumu",
    explanation:"Kanser hakkında detaylı animasyon video",
    date:new Date(2022,8,3),
    tags:["kanser","kanser oluşumu"],
    username:"mehmetkekec",
    firstName:"Mehmet",
    lastName:"Kekeç",
    profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    videoId:2,
    videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title:"Kanser Oluşumu",
    explanation:"Kanser hakkında detaylı animasyon video",
    date:new Date(2022,8,3),
    tags:["kanser","kanser oluşumu"],
    username:"mehmetkekec",
    firstName:"Mehmet",
    lastName:"Kekeç",
    profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    videoId:3,
    videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title:"Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation:"Kanser hakkında detaylı animasyon video",
    date:new Date(2022,8,3),
    tags:["kanser","kanser oluşumu"],
    username:"mehmetkekec",
    firstName:"Mehmet",
    lastName:"Kekeç",
    profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
]

const Home = () => {
  return (
    <div className='home-general-div'>
      <div className='home-container'>
        <div className='home-description-text'>En Çok Okunanlar:</div>
        <GridListCard articles={articles} />
        <div className='home-description-text'>Popüler Doktorlar:</div>
        <GridListDoctorCard doctors={doctors} />
        <div className='home-description-text'>Kategoriler:</div>
        <GridListCategoryCard categories={categories} />
        <div className='home-description-text'>Önerilen Videolar:</div>
        <GridListVideoCard videos={videos} /> 
      </div>
    </div>
  )
}

export default Home