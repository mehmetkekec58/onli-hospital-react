import React, { useState } from 'react'
import './Profile.css'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GridListCard from '../../layouts/grid-list/grid-list-card/GridListCard';
import ArticleModel from '../../models/articleModel';
import VideoModel from '../../models/videoModel';
import GridListVideoCard from '../../layouts/grid-list/grid-list-video-card/GridListVideoCard';
import PostModel from '../../models/postModel';
import GridListPostCard from '../../layouts/grid-list/grid-list-post-card/GridListPostCard';

const profilePhotoUrl = "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg"
const userFullName: string = "Mehmet Kekeç"


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


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
    date: new Date(1995, 11, 17),
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
    date: new Date(1995, 11, 17),
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
    date: new Date(1995, 11, 17),
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
    date: new Date(1995, 11, 17),
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
    date: new Date(1995, 11, 17),
  },
]


const videos: VideoModel[] = [
  {
    videoId: 0,
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
    videoId: 2,
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
    videoId: 3,
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


const posts: PostModel[] = [
  {
    postId: 0,
    thumbnailUrl: "http://drmustafasener.com/2018/10/kanser-hucresi-vucutta-nasil-beslenir.jpeg",
    username: "mehmetkekec",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    firstName: "Mehmet",
    lastName: "Kekeç",
    text: "Kanser Oluşumu ile video paylaştım iyi seyirler.",
    date: new Date(2022, 8, 3),
  },
  {
    postId: 1,
    thumbnailUrl: "http://drmustafasener.com/2018/10/kanser-hucresi-vucutta-nasil-beslenir.jpeg",
    username: "mehmetkekec",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    firstName: "Mehmet",
    lastName: "Kekeç",
    text: "Kanser Oluşumu ile video paylaştım iyi seyirler.",
    date: new Date(2022, 8, 3),
  },
]

const Profile = () => {
  const currencyUnit: string = "$"
  const [mySelf] = useState<boolean>(true);
  const [login] = useState<boolean>(false)
  const [follow] = useState<boolean>(true)
  const [value, setValue] = React.useState('1');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className='profile-container'>
      <div className='profile-user-info-container'>
        <div className='profile-profile-image-container'>
          <img src={profilePhotoUrl} alt={userFullName} className="profile-user-image" />
        </div>
        <div className="profile-doctor-info-container">
          <div className="profile-doctor-info-full-name">{userFullName} <VerifiedOutlinedIcon fontSize='medium' style={{ color: '#3fbdeb' }} /></div>
          <div className="profile-doctor-info-username">@mehmetkekec</div>
          <div className="profile-doctor-info-branch">Admin</div>

          <div className="profile-button-container">
            {!login || !mySelf ? (<div> <button className={follow ? "profile-unfollow-button profile-button-general" : "profile-button-general"}>{follow ? "Takibi bırak" : "Takip et"}</button>
              <button className="profile-ask-question profile-button-general"><QuestionAnswerOutlinedIcon /> Soru sor (15 {currencyUnit})</button>
              <button className="profile-button-about profile-button-general"  onClick={handleClickOpen}>Hakkında</button>
              <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Hakkında
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           Merhaba, ben Mehmet Kekeç. Onli Hospital'in kurucusu.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Tamam
          </Button>
        </DialogActions>
      </BootstrapDialog>
              </div>)
              :
              <button className="profile-button-edit-profile profile-button-general">Profili Düzenle</button>
            }
          </div>
        </div>
        <div className='profile-tabs-container'>
          <Box sx={{ width: '100%', height: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <TabList textColor="secondary"
                  indicatorColor="secondary" onChange={handleChange} aria-label="lab API tabs example">
                  <Tab icon={<ArticleOutlinedIcon />} iconPosition="start" label="Yazılar" value="1" />
                  <Tab icon={<ThumbUpOutlinedIcon />} iconPosition="start" label="Gönderiler" value="2" />
                  <Tab icon={<OndemandVideoOutlinedIcon />} iconPosition="start" label="Videolar" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"> <GridListCard articles={articles} /></TabPanel>
              <TabPanel value="2"><GridListPostCard posts={posts}/></TabPanel>
              <TabPanel value="3"> <GridListVideoCard videos={videos} /></TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
      {/* <div className="profile-statistics-container"></div> */}

    </div>
  )
}

export default Profile