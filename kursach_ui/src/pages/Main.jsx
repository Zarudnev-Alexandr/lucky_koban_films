import Layout from '../components/Layout'
import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import SliderArrow from '../images/arrow-slider.svg'
import Film from './Film';
import Poster2 from '../images/poster2.jpeg'
import Poster3 from '../images/poster3.jpg'
import Poster4 from '../images/poster4.jpg'
import Poster5 from '../images/poster5.jpeg'
import Poster6 from '../images/poster6.jpeg'

const Main = () => {

  useEffect(() => {
    fetchAllFilms()
  }, [])

  let [allFilms, setAllFilms] = useState([]);

  let fetchAllFilms = () => {
    fetch('https://4947.ru/lucky_koban_films/api/films/')
      .then(response => response.json())
      .then(data => {
        let result = data;
        setAllFilms(result)
      })
  }

  let sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button id="prev" type="button" className="slick-arrow slider-arrow slider-prev"><img className='slider-prev__img' src={SliderArrow} /></button>,
    nextArrow: <button id="next" type="button" className="slick-arrow slider-arrow slider-next"><img src={SliderArrow} /></button>
  };

  let cardStarSvg = () => {
    return (
      <svg className='MainPage__topFilms-card__starSvg' width="17px" height="17px" viewBox="0 0 24 24" fill="none">
        <path d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.8935 9.53862C20.7873 9.4484 20.6579 9.38997 20.52 9.37005L15.1 8.58005L12.67 3.67005C12.6008 3.55403 12.5027 3.45795 12.3853 3.39123C12.2678 3.32451 12.1351 3.28943 12 3.28943C11.8649 3.28943 11.7322 3.32451 11.6147 3.39123C11.4973 3.45795 11.3991 3.55403 11.33 3.67005L8.89999 8.58005L3.47999 9.37005C3.34211 9.38997 3.21266 9.4484 3.10652 9.53862C3.00038 9.62884 2.92186 9.74719 2.87999 9.88005C2.83529 10.0124 2.82846 10.1547 2.86027 10.2907C2.89207 10.4268 2.96124 10.5512 3.05999 10.6501L6.99999 14.4701L6.06999 19.8701C6.04642 20.0091 6.06199 20.1519 6.11497 20.2826C6.16796 20.4133 6.25625 20.5267 6.36999 20.6101C6.48391 20.6912 6.61825 20.7389 6.75785 20.7478C6.89746 20.7566 7.03675 20.7262 7.15999 20.6601L12 18.1101L16.85 20.6601C16.9573 20.7189 17.0776 20.7499 17.2 20.7501C17.3573 20.7482 17.5105 20.6995 17.64 20.6101C17.7537 20.5267 17.842 20.4133 17.895 20.2826C17.948 20.1519 17.9636 20.0091 17.94 19.8701L17 14.4701L20.93 10.6501C21.0305 10.5523 21.1015 10.4283 21.1351 10.2922C21.1687 10.1561 21.1634 10.0133 21.12 9.88005Z" fill="#fff" />
      </svg>
    )
  }



  return (
    <>
      <Layout title='Lucky Kobsn Films | Главная' content='Main page'>
        <section className="MainPage">
          <div className="container">
            <Slider className='MainPage__slider' {...sliderSettings}>
              {allFilms.map((item) => {
                return (
                  <a href='/Film' onClick={() => localStorage.setItem("film_id", item.id)}>
                    <div className="MainPage__slider-item">
                      <img src={"https://4947.ru/lucky_koban_films/images/" + item.id + ".jpg"} alt="" className="MainPage__slider-img" />
                      <div className="MainPage__slider-item__content-box__info">
                        <h3 className="MainPage__slider-item__title">{item.name}</h3>
                        <p className="MainPage__slider-item__descr">{item.description}</p>
                        <div className="MainPage__slider-item__add-box">
                          <p className="MainPage__slider-item__year">{String(item.release_date).split('-')[2]}.{String(item.release_date).split('-')[1]}.{String(item.release_date).split('-')[0]} | {item.genres.map((item1) => {
                            console.log(item1);
                            return (
                              <>
                                {item1.name + " "}
                              </>
                            )
                          })}</p>
                        </div>
                      </div>
                      <p className="MainPage__slider-item__rating">{item.age_rating}+</p>
                    </div>
                  </a>
                )
              })}

              {/* <div className="MainPage__slider-item">
                <img src={Poster3} alt="" className="MainPage__slider-img" />
                <div className="MainPage__slider-item__content-box__info">
                  <h3 className="MainPage__slider-item__title">Волк с Уолл-стрит</h3>
                  <p className="MainPage__slider-item__descr">1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды.</p>
                  <div className="MainPage__slider-item__add-box">
                    <p className="MainPage__slider-item__year">2013 | драма преступление биография комедия</p>
                  </div>
                </div>
                <p className="MainPage__slider-item__rating">18+</p>
              </div>
              <div className="MainPage__slider-item">
                <img src={Poster4} alt="" className="MainPage__slider-img" />
                <div className="MainPage__slider-item__content-box__info">
                  <h3 className="MainPage__slider-item__title">Интерстеллар</h3>
                  <p className="MainPage__slider-item__descr">Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.</p>
                  <div className="MainPage__slider-item__add-box">
                    <p className="MainPage__slider-item__year">2014 | фантастика драма приключения</p>
                  </div>
                </div>
                <p className="MainPage__slider-item__rating">16+</p>
              </div>
              <div className="MainPage__slider-item">
                <img src={Poster6} alt="" className="MainPage__slider-img" />
                <div className="MainPage__slider-item__content-box__info">
                  <h3 className="MainPage__slider-item__title">Хатико: Самый верный друг</h3>
                  <p className="MainPage__slider-item__descr">В основе сюжета - реальная история, случившаяся в Японии и потрясшая весь мир. Однажды, возвращаясь с работы, профессор колледжа нашел на вокзале симпатичного щенка породы акита-ину. Профессор и Хатико стали верными друзьями. Каждый день пес провожал и встречал Профессора на вокзале. И даже потеря хозяина не остановила пса в его надежде, что друг вернется.</p>
                  <div className="MainPage__slider-item__add-box">
                    <p className="MainPage__slider-item__year">2009 | драма семейный биография</p>
                  </div>
                </div>
                <p className="MainPage__slider-item__rating">16+</p>
              </div> */}
            </Slider>

            <div className="MainPage__topFilms">
              <h3 className="MainPage__title">Топ фильмов</h3>
              <div className="MainPage__topFilms-cards">


                {allFilms.map((item) => {
                  return (
                    <div className="MainPage__topFilms-card">
                      <a href="/film" onClick={() => localStorage.setItem("film_id", item.id)} className="MainPage__topFilms-card__link">
                        <img src={"https://4947.ru/lucky_koban_films/images/" + item.id + ".jpg"} alt="" className="MainPage__topFilms-card__img" />
                        <div className="MainPage__topFilms-card__content">
                          <h6 className="MainPage__topFilms-card__title">{item.name}</h6>
                          <div className="MainPage__topFilms-card__addInfo">
                            <p className="MainPage__topFilms-card__rating">
                              {item.rating}
                              {cardStarSvg()}
                            </p>
                            <p className="MainPage__topFilms-card__year">/ {String(item.release_date).split('-')[2]}.{String(item.release_date).split('-')[1]}.{String(item.release_date).split('-')[0]}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })}
                {/* <div className="MainPage__topFilms-card">
                  <a href="#" className="MainPage__topFilms-card__link">
                    <img src={Poster3} alt="" className="MainPage__topFilms-card__img" />
                    <div className="MainPage__topFilms-card__content">
                      <h6 className="MainPage__topFilms-card__title">Волк с Уолл-стрит</h6>
                      <div className="MainPage__topFilms-card__addInfo">
                        <p className="MainPage__topFilms-card__rating">
                          8.2
                          {cardStarSvg()}
                        </p>
                        <p className="MainPage__topFilms-card__year">/ 2013</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="MainPage__topFilms-card">
                  <a href="#" className="MainPage__topFilms-card__link">
                    <img src={Poster4} alt="" className="MainPage__topFilms-card__img" />
                    <div className="MainPage__topFilms-card__content">
                      <h6 className="MainPage__topFilms-card__title">Интерстеллар</h6>
                      <div className="MainPage__topFilms-card__addInfo">
                        <p className="MainPage__topFilms-card__rating">
                          8.6
                          {cardStarSvg()}
                        </p>
                        <p className="MainPage__topFilms-card__year">/ 2014</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="MainPage__topFilms-card">
                  <a href="#" className="MainPage__topFilms-card__link">
                    <img src={Poster5} alt="" className="MainPage__topFilms-card__img" />
                    <div className="MainPage__topFilms-card__content">
                      <h6 className="MainPage__topFilms-card__title">Невероятный Халк</h6>
                      <div className="MainPage__topFilms-card__addInfo">
                        <p className="MainPage__topFilms-card__rating">
                          6.8
                          {cardStarSvg()}
                        </p>
                        <p className="MainPage__topFilms-card__year">/ 2008</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="MainPage__topFilms-card">
                  <a href="#" className="MainPage__topFilms-card__link">
                    <img src={Poster6} alt="" className="MainPage__topFilms-card__img" />
                    <div className="MainPage__topFilms-card__content">
                      <h6 className="MainPage__topFilms-card__title">Хатико: Самый верный друг</h6>
                      <div className="MainPage__topFilms-card__addInfo">
                        <p className="MainPage__topFilms-card__rating">
                          8.3
                          {cardStarSvg()}
                        </p>
                        <p className="MainPage__topFilms-card__year">/ 2009</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="MainPage__topFilms-card">
                  <a href="#" className="MainPage__topFilms-card__link">
                    <img src={Poster6} alt="" className="MainPage__topFilms-card__img" />
                    <div className="MainPage__topFilms-card__content">
                      <h6 className="MainPage__topFilms-card__title">Хатико: Самый верный друг</h6>
                      <div className="MainPage__topFilms-card__addInfo">
                        <p className="MainPage__topFilms-card__rating">
                          8.3
                          {cardStarSvg()}
                        </p>
                        <p className="MainPage__topFilms-card__year">/ 2009</p>
                      </div>
                    </div>
                  </a>
                </div> */}

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Main