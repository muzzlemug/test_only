import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './TimelineBlock.scss';
import TimelineCircle from './TimelineCircle';

const TimelineBlock: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const eventsRef = useRef<HTMLDivElement | null>(null);

  const timelineData = [
    {
      startYear: 1991,
      endYear: 1995,
      category: 'Космос',
      events: [
        { year: 1991, date: '17.01', description: 'Запуск телескопа "Хаббл" для изучения космоса' },
        { year: 1992, date: '29.04', description: 'Премьера мультфильма "Аладдин" от Disney' },
        { year: 1993, date: '20.10', description: 'Открытие нового вида дельфинов в Амазонке' },
        { year: 1994, date: '06.11', description: 'Победа Михаэля Шумахера в чемпионате Формулы-1' },
      ],
    },
    {
      startYear: 1996,
      endYear: 2001,
      category: 'Искусство',
      events: [
        { year: 1996, date: '05.07', description: 'Открытие древнего города в Перу археологами' },
        { year: 1997, date: '01.07', description: 'Премьера фильма "Титаник" Джеймса Кэмерона' },
        { year: 1998, date: '20.08', description: 'Запуск первого Google-сервера в гараже' },
        { year: 1999, date: '24.03', description: 'Победа Франции на чемпионате мира по футболу' },
      ],
    },
    {
      startYear: 2002,
      endYear: 2006,
      category: 'Открытия',
      events: [
        { year: 2002, date: '12.10', description: 'Премьера фильма "Гарри Поттер и Тайная комната"' },
        { year: 2003, date: '20.03', description: 'Запуск космического корабля "Колумбия" (до миссии)' },
        { year: 2004, date: '26.12', description: 'Открытие нового вида бабочек в Южной Америке' },
        { year: 2005, date: '29.08', description: 'Победа "Ливерпуля" в Лиге чемпионов после камбэка' },
      ],
    },
    {
      startYear: 2007,
      endYear: 2011,
      category: 'Технологии',
      events: [
        { year: 2007, date: '09.01', description: 'Презентация первого iPhone Стивом Джобсом' },
        { year: 2008, date: '15.09', description: 'Победа Усэйна Болта на Олимпиаде в Пекине' },
        { year: 2009, date: '20.01', description: 'Начало президентства Барака Обамы' },
        { year: 2010, date: '12.01', description: 'Открытие нового вида рыб в Антарктике' },
      ],
    },
    {
      startYear: 2012,
      endYear: 2016,
      category: 'Современность',
      events: [
        { year: 2012, date: '21.09', description: 'Премьера фильма "Железный человек 3"' },
        { year: 2013, date: '15.04', description: 'Победа "Баварии" в Лиге чемпионов' },
        { year: 2014, date: '17.07', description: 'Открытие нового вида орхидей в Азии' },
        { year: 2015, date: '13.11', description: 'Запуск миссии "New Horizons" к Плутону' },
      ],
    },
    {
      startYear: 2017,
      endYear: 2022,
      category: 'Кино',
      events: [
        { year: 2017, date: '14.08', description: 'Премьера фильма "Тор: Рагнарёк"' },
        { year: 2018, date: '17.06', description: 'Победа Франции на чемпионате мира по футболу' },
        { year: 2019, date: '11.03', description: 'Открытие нового вида птиц в Австралии' },
        { year: 2020, date: '11.03', description: 'Запуск телескопа "Джеймс Уэбб" (анонс)' },
      ],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  useEffect(() => {
    if (eventsRef.current) {
      const items = eventsRef.current.querySelectorAll('.event');
      gsap.from(items, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.5,
        clearProps: 'all', 
      });
    }
  }, [activeIndex]);

  const currentPeriod = timelineData[activeIndex];

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Исторические Даты</h1>
      <div className="timeline-content">
        <div className="year-with-circle">
          <div className="circle-background" />
          <TimelineCircle activeIndex={activeIndex} labels={timelineData.map((t) => t.category)} />
          <div className="active-years">
            <span className="active-year" style={{ color: '#3877EE' }}>
              {currentPeriod.startYear}
            </span>
            <span className="active-year" style={{ color: '#EF5DA8' }}>
              {currentPeriod.endYear}
            </span>
          </div>
        </div>

        <div className="date-indicator">
          {String(activeIndex + 1).padStart(2, '0')}/{timelineData.length.toString().padStart(2, '0')}
        </div>

        <div className="navigation">
          <button className="nav-arrow prev" onClick={handlePrev}>
            &lt;
          </button>
          <button className="nav-arrow next" onClick={handleNext}>
            &gt;
          </button>
        </div>

        <div className="events" ref={eventsRef}>
          {currentPeriod.events.slice(0, 4).map((event, idx) => (
            <div key={idx} className="event">
              <span className="event-date">{event.date}</span>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineBlock;
