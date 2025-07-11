import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import './TimelineBlock.scss';

const TimelineBlock: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const timelineData = [
    {
      startYear: 1991,
      endYear: 1995,
      color: '#4a90e2',
      events: [
        { year: 1991, date: '17.01', description: 'Запуск телескопа "Хаббл" для изучения космоса' },
        { year: 1992, date: '29.04', description: 'Премьера мультфильма "Аладдин" от Disney' },
        { year: 1993, date: '20.10', description: 'Открытие нового вида дельфинов в Амазонке' },
        { year: 1994, date: '06.11', description: 'Победа Михаэля Шумахера в чемпионате Формулы-1' },
      ]
    },
    {
      startYear: 1996,
      endYear: 2001,
      color: '#50E3C2',
      events: [
        { year: 1996, date: '05.07', description: 'Открытие древнего города в Перу археологами' },
        { year: 1997, date: '01.07', description: 'Премьера фильма "Титаник" Джеймса Кэмерона' },
        { year: 1998, date: '20.08', description: 'Запуск первого Google-сервера в гараже' },
        { year: 1999, date: '24.03', description: 'Победа Франции на чемпионате мира по футболу' },
      ]
    },
    {
      startYear: 2002,
      endYear: 2006,
      color: '#F5A623',
      events: [
        { year: 2002, date: '12.10', description: 'Премьера фильма "Гарри Поттер и Тайная комната"' },
        { year: 2003, date: '20.03', description: 'Запуск космического корабля "Колумбия" (до миссии)' },
        { year: 2004, date: '26.12', description: 'Открытие нового вида бабочек в Южной Америке' },
        { year: 2005, date: '29.08', description: 'Победа "Ливерпуля" в Лиге чемпионов после камбэка' },
      ]
    },
    {
      startYear: 2007,
      endYear: 2011,
      color: '#D0021B',
      events: [
        { year: 2007, date: '09.01', description: 'Презентация первого iPhone Стивом Джобсом' },
        { year: 2008, date: '15.09', description: 'Победа Усэйна Болта на Олимпиаде в Пекине' },
        { year: 2009, date: '20.01', description: 'Начало президентства Барака Обамы' },
        { year: 2010, date: '12.01', description: 'Открытие нового вида рыб в Антарктике' },
      ]
    },
    {
      startYear: 2012,
      endYear: 2016,
      color: '#8B572A',
      events: [
        { year: 2012, date: '21.09', description: 'Премьера фильма "Железный человек 3"' },
        { year: 2013, date: '15.04', description: 'Победа "Баварии" в Лиге чемпионов' },
        { year: 2014, date: '17.07', description: 'Открытие нового вида орхидей в Азии' },
        { year: 2015, date: '13.11', description: 'Запуск миссии "New Horizons" к Плутону' },
      ]
    },
    {
      startYear: 2017,
      endYear: 2022,
      color: '#BD10E0',
      events: [
        { year: 2017, date: '14.08', description: 'Премьера фильма "Тор: Рагнарёк"' },
        { year: 2018, date: '17.06', description: 'Победа Франции на чемпионате мира по футболу' },
        { year: 2019, date: '11.03', description: 'Открытие нового вида птиц в Австралии' },
        { year: 2020, date: '11.03', description: 'Запуск телескопа "Джеймс Уэбб" (анонс)' },
      ]
    }
  ];

  useEffect(() => {
    gsap.from('.timeline-dot', { opacity: 0, duration: 1, y: 50, stagger: 0.2 });
    gsap.from('.nav-arrow', { opacity: 0, y: 20, duration: 1, delay: 1 });
  }, [activeSlide]);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Исторические Даты</h1>
      <div className="timeline-content">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.nav-arrow.prev',
            nextEl: '.nav-arrow.next',
          }}
          onSlideChange={handleSlideChange}
          initialSlide={0}
        >
          {timelineData.map((period, index) => (
            <SwiperSlide key={index}>
              <div className="active-years">
                <span className="active-year" style={{ color: '#4A90E2' }}>{period.startYear}</span>
                <span className="active-year" style={{ color: '#ff51f6' }}>{period.endYear}</span>
              </div>
              <div className="date-indicator">01/06</div>
              <div className="events">
                {period.events.slice(0, 4).map((event, idx) => (
                  <div key={idx} className="event">
                    <span className="event-date">{event.date}</span>
                    <p className="event-description">{event.description}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigation">
          <button className="nav-arrow prev">←</button>
          <button className="nav-arrow next">→</button>
        </div>
      </div>
    </div>
  );
};

export default TimelineBlock;
