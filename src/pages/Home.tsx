import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonAvatar} from '@ionic/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import components
import CardManga from '../components/CardManga';
import GenresManga from '../components/GenresManga';

// Import json data
import mangaTest from '../config/manga';
import genresTest from '../config/genres';
import { home, homeOutline, search } from 'ionicons/icons';

// Import Pages


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='bg-[#022B3A]'>
              <div className='flex justify-between items-center'>
                <div className="title p-5">
                  <h2>Bienvenido a</h2>
                  <h1 className='font-bold text-xl'>Manga Lletazo</h1>
                </div>
                <div className="avatar">
                  <IonAvatar className='flex items-center'>
                    <img alt="" src="https://static-00.iconduck.com/assets.00/user-avatar-happy-icon-2048x2048-ssmbv1ou.png" className='w-10'/>
                  </IonAvatar>
                </div>
              </div>
      </IonHeader>
      <IonContent fullscreen >
        <div className="containerScreen">
          <div className="containerFilter w-auto mt-5">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={2}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}>
            {genresTest.map((genre) => (
              <SwiperSlide className=''>
                <GenresManga genre={genre.genre} icon={genre.iconGenre}/>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
          <div className='containerReciently mt-5 pl-5'>
            <h3 className='text-[20px] font-bold mb-5'>Hot Update</h3>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}    
              onSlideChange={() => console.log('slide change')}>
              {mangaTest.map((manga) => (
                <SwiperSlide>
                  <CardManga img={manga.img} title={manga.title}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='containerReciently mt-5 pl-5'>
            <h3 className='text-[20px] font-bold mb-5'>For you</h3>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}    
              onSlideChange={() => console.log('slide change')}>
              {mangaTest.map((manga) => (
                <SwiperSlide>
                  <CardManga img={manga.img} title={manga.title}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
