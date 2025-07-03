import './styles.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function Carrossel(props) {
    return (
        <div className='carrossel-imagens'>
        <Swiper
          //modulo que vou usar aqui nesse carrosel
          modules={[EffectCoverflow]}
          className="mySwiper"
          //ativa o efeito coverflow - 
          // o que é? faz com que as imagens fiquem em perspectiva, como se fossem um carrossel 3D. Ou seja, vai dar o efeito de carrosel que eu escolhi no prototipoi do figma
          effect={'coverflow'}
          // o cursor fica com uma maozinha, assim, o usuario pode ter noçao que aquilo sera para arrastar
          grabCursor={true}
          //vai centraliza a imagem no meio
          centeredSlides={true}
          //slides que vao ficar aparecendo
          slidesPerView={'auto'}
          //configuraçoes do efeito que estou usando
          coverflowEffect={{
            rotate: 10, //rotaçao das imagens
            depth: 100, //profundidade das imagens
            modifier: 4, //modificador do efeito
            slideShadows: true, //sombra das imagens, sombra nessa separaçao
          }}
        >
          {/* para cada imagem do array ele exuta a funçao
            o key vai renderizar os elementos de forma individual
          */}
          {props.imagens.map((imagem, index) => (
            <SwiperSlide key={index}>
              <img src={imagem} alt={`Imagem ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    );
}

