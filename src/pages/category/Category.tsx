import React from 'react'
import { containTexts } from '../../contains/containTexts'
import CategoryModel from '../../models/categoryModel'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GridListCard from '../../layouts/grid-list/grid-list-card/GridListCard';
import ArticleModel from '../../models/articleModel';
import VideoModel from '../../models/videoModel';
import GridListVideoCard from '../../layouts/grid-list/grid-list-video-card/GridListVideoCard';
import PersonIcon from '@mui/icons-material/PersonOutline';
import "./Category.css"
import GridListDoctorCard from '../../layouts/grid-list/grid-list-doctor-card/GridListDoctorCard';
import DoctorModel from '../../models/doctorModel';


const videos: VideoModel[] = [
    {
      id: 0,
      videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title: "Kanser Oluşumu",
      explanation: "Kanser hakkında detaylı animasyon video",
      date: new Date(2022, 8, 3),
      tags: ["kanser", "kanser oluşumu"],
      username: "mehmetkekec",
      firstName: "Mehmet",
      lastName: "Kekeç",
      profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    },
    {
      id: 2,
      videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title: "Kanser Oluşumu",
      explanation: "Kanser hakkında detaylı animasyon video",
      date: new Date(2022, 8, 3),
      tags: ["kanser", "kanser oluşumu"],
      username: "mehmetkekec",
      firstName: "Mehmet",
      lastName: "Kekeç",
      profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    },
    {
      id: 3,
      videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
      explanation: "Kanser hakkında detaylı animasyon video",
      date: new Date(2022, 8, 3),
      tags: ["kanser", "kanser oluşumu"],
      username: "mehmetkekec",
      firstName: "Mehmet",
      lastName: "Kekeç",
      profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    },
  ]
  
const articles: ArticleModel[] = [
    {
      id: 0,
      thumbnailUrl: "http://drmustafasener.com/2018/10/kanser-hucresi-vucutta-nasil-beslenir.jpeg",
      username: "mehmetkekec",
      profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
      firstName: "Mehmet",
      lastName: "Kekeç",
      title: "Kanser Nedir?",
      text: "Kanser hücresi durmadan çoğalmaya devam edebilir. Normalde bağışıklık sistemi anormal hücreleri yakalar ve yok eder. Ancak kanser hücreleri bağışıklık sisteminden kaçabilirler. Normal vücut hücrelerinde olağan olan hücre ölümü kanser hücrelerinde görülmez.",
      tag: ["kanser", "kansere ne iyi gelir", "kanser nasıl tedavi edilir"],
      date: new Date(1995, 11, 17),
    },
    {
      id: 1,
      thumbnailUrl: "https://img-guven.mncdn.com/storage/temp/public/imageresizecache/a64/ba6/a45/a64ba6a45db7b11956e5241e3cfaba52a46a651b785234b1583cca5b4d052716.jpg",
      username: "savascebeci",
      profilePhotoUrl: "https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=",
      firstName: "Savaş",
      lastName: "Cebeci",
      title: "verem Belirtileri? Ne iyi gelir?",
      text: "Basil bulaştıktan sonra 4-6 hafta boyunca belirti vermez. Hafif ateş ve kırgınlık olabilir. Bu arada PPD (basille karşılaşıldığının belirtecidir) pozitif olur. Bu aşamada çoğu kişide vücudun genel ve mikrobun yerleştiği yerdeki yerel savunma sistemi ile basil baskılanır ve sessiz bir enfeksiyona dönüşür. Ancak yüzde 5 kadar kişide primer enfeksiyon gelişir. Hastalığın tuttuğu organa göre o bölgedeki lenf bezleri şişer ve cilde yakın olması durumunda akıntılı olabilir.",
      tag: ["verem", "verem belirtileri", "verem nasıl oluşur"],
      date: new Date(1995, 11, 17),
    },
    {
      id: 2,
      thumbnailUrl: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/4BQH4O1E.jpg",
      username: "handeaslantas",
      profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      firstName: "Hande Kevser",
      lastName: "Aslantaş",
      title: "Kanser Nedir?",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date: new Date(1995, 11, 17),
    },
    {
      id: 3,
      thumbnailUrl: "https://img.piri.net/mnresize/840/-/resim/imagecrop/2016/03/17/01/00/resized_6c4a8-4c911fcdgulhastaligi.jpg",
      username: "handeaslantas",
      profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      firstName: "Hande",
      lastName: "Aslantaş",
      title: "Kanser Nedir?",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date: new Date(1995, 11, 17),
    },
    {
      id: 4,
      thumbnailUrl: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/4BQH4O1E.jpg",
      username: "handeaslantas",
      profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      firstName: "Hande",
      lastName: "Aslantaş",
      title: "Kanser Nedir?",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date: new Date(1995, 11, 17),
    },
  ]
  
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

function tabs(value: string, handleChange: (event: React.SyntheticEvent, newValue: string) => void) {
    return (
      <div className='category-tabs-container'>
        <Box sx={{ width: '100%', height: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <TabList textColor="secondary"
                indicatorColor="secondary" onChange={handleChange} >
                <Tab icon={<ArticleOutlinedIcon />} iconPosition="start" label={containTexts.ARTICLES} value="1" />
                <Tab icon={<PersonIcon />} iconPosition="start" label={containTexts.DOCTORS} value="2" />
                <Tab icon={<OndemandVideoOutlinedIcon />} iconPosition="start" label={containTexts.VIDEOS} value="3" />
              </TabList>
            </Box>
            <TabPanel value="1"> <GridListCard articles={articles} /></TabPanel>
            <TabPanel value="2"><GridListDoctorCard doctors={doctors} /></TabPanel>
            <TabPanel value="3"> <GridListVideoCard videos={videos} /></TabPanel>
          </TabContext>
        </Box>
      </div>
    )
  }

const Category = () => {
    
      const [value, setValue] = React.useState('1');
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
    const category: CategoryModel =
    {
        id: 0,
        name: "Göğüs Hastalıkları",
        thumbnailUrl: "https://www.bilgihastanesi.com.tr/lib/images/bolumler/detail/gogushastalik_1.jpg",
    }

    return (
        <div className='category-container'>
            <div className="category-info-continer">
                <img src={category.thumbnailUrl} alt={category.name} className="category-photo-image" />
                <div className="category-info-name-and-follow-button-continer">
                    <div className="category-info-category-name">{category.name}</div>
                    <div className="category-info-follower-count">120 B {containTexts.FOLLOWER}</div>
                    <button className="category-button-general">Takip Et</button>
                </div>
            </div>
            {tabs(value,handleChange)}
        </div>
    )
}

export default Category