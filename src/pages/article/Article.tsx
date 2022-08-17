import React from 'react'
import ArticleModel from '../../models/articleModel';
import ArticleAndVideoUserInfo from '../../utilities/components/article-and-video-user-info/ArticleAndVideoUserInfo';
import Tag from '../../utilities/components/tag/Tag';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import './Article.css';
import { containTexts } from '../../contains/containTexts';
import RecommendedArticle from '../../utilities/components/recommended-article/RecommendedArticle';
import useWindowSize from '../../hooks/useWindowSize';

const article: ArticleModel =
{
    articleId: 0,
    thumbnailUrl: "http://drmustafasener.com/2018/10/kanser-hucresi-vucutta-nasil-beslenir.jpeg",
    username: "mehmetkekec",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    firstName: "Mehmet",
    lastName: "Kekeç",
    title: "Kanser Nedir?",
    text: "Kanser hücresi durmadan çoğalmaya devam edebilir. Normalde bağışıklık sistemi anormal hücreleri yakalar ve yok eder. Ancak kanser hücreleri bağışıklık sisteminden kaçabilirler. Normal vücut hücrelerinde olağan olan hücre ölümü kanser hücrelerinde görülmez.",
    tag: ["kanser", "kansere ne iyi gelir", "kanser nasıl tedavi edilir", "kanserin tehlikeleri", "Kanser en çok kimlerde görünür"],
    date: new Date(1995, 11, 17),
}

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
      title: "Kanser Nedir? Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma",
      text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
      tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
      date:new Date(1995, 11, 17),
    },
    {
        articleId: 5,
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
        articleId: 6,
        thumbnailUrl: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/4BQH4O1E.jpg",
        username: "handeaslantas",
        profilePhotoUrl: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        firstName: "Hande",
        lastName: "Aslantaş",
        title: "Kanser Nedir? Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma",
        text: "Bronşiol olarak adlandırılan küçük hava keseciklerinin enfeksiyonu sonucu ortaya çıkan iltihaplanma, keseciklerde daralmaya neden olur ve bunun sonucunda akciğer kapasitesi büyük oranda azalır. Sıklıkla iki yaş altı çocuklarda meydana gelen ve alt solunum yollarının en sık görülen rahatsızlığı olan bu olgu Akut Bronşit Hastalığı olarak tanımlanır. Sıklıkla viral patojenlerin yol açtığı bu hastalıktan yüzde 50 oranında Respiratuvar Sinsisyal Virüs (RSV) sorumludur",
        tag: ["Bronş", "Bronşit", "Bronşit tedavisi"],
        date:new Date(1995, 11, 17),
      },
  ]
const Article = ({ openDrawer }: { openDrawer: boolean }) => {
       const {width} = useWindowSize();
    return (
        <div className='article-container'>
            <div className={openDrawer ? "article-grid-container2" : "article-grid-container"}>
                <div className="article-grid-item1">
                    <h1 className="article-title">{article.title}</h1>
                    <div className="article-user-info"><ArticleAndVideoUserInfo userInfo={{ username: article.username, firstName: article.firstName, lastName: article.lastName, profilePhotoUrl: article.profilePhotoUrl }} /></div>
                    <img src={article.thumbnailUrl} alt={article.title} className="article-thumbnail-photo" />
                    <div className="article-text-container"> <div className="article-text">{article.text}</div></div>
                    <div className='article-tags-general-container'><Tag tags={article.tag} /></div>
                  {width !==undefined && width <= 1283 &&  <RecommendedArticle articles={articles} /> }
                </div>
                {width !==undefined && width >= 1283 && <div className="article-grid-item2"><RecommendedArticle articles={articles} /></div> }
                <div className="article-buttons-container">
                    <div className='article-like-button article-general-button'><FavoriteIcon style={{ color: 'red' }} /> {containTexts.LIKE}</div>
                    <div className='article-general-button'><BookmarkOutlinedIcon style={{ color: '#7c14a8' }} /> {containTexts.ADD_READING_LIST}</div>
                    <div className='article-general-button'><ShareOutlinedIcon style={{ color: 'blue' }} /> {containTexts.SHARE}</div>
                </div>
            </div>
        </div>
    )
}

export default Article