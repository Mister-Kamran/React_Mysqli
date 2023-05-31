import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
function Templete(props) {
  const [img_url, setImg_url] = useState([]);



  

  function showToast(filimName, filim_decription) {
    toast(filimName);
    toast(filim_decription);
  }
  

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => {
        const data = res.data; 
        setImg_url(data); 
      })
      .catch(err => {
        console.log("xeta", err);
      });
  }, []);

  const { logoSrc } = props;

  return (
    <div>
      <div className='nav_container'>
        <div className='logo'>
          <img src={logoSrc} alt="Amazon Prime Logo" />
        </div>
        <div className='text_main'>
          <div className='tv_show'>
            <h2>Unlimited Movie</h2>
            <h2>Tv<span>Shows & More</span></h2>
            <br></br>
            <button>WATCH & MORE</button>
          </div>
        </div>
        <div className='slider'>
          <Swiper
            slidesPerView={8.8}
            spaceBetween={1}
            navigation
            pagination={{ clickable: false }}
          >
            {img_url.map((data, index) => (
              <SwiperSlide key={data.id}>
                <div className="film-card">
                <img onClick={() => showToast(data.filim_name,data.filim_description)} src={data.filim_src} alt="Film Card" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Templete;
