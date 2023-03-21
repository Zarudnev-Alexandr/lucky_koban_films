import Layout from '../components/Layout'
import Slider from "react-slick";
import Poster2 from '../images/poster2.jpeg'
import SliderArrow from '../images/arrow-slider.svg'
const Film = () => {

  let cardStarSvg = () => {
    return (
      <svg className='MainPage__topFilms-card__starSvg' width="17px" height="17px" viewBox="0 0 24 24" fill="none">
        <path d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.8935 9.53862C20.7873 9.4484 20.6579 9.38997 20.52 9.37005L15.1 8.58005L12.67 3.67005C12.6008 3.55403 12.5027 3.45795 12.3853 3.39123C12.2678 3.32451 12.1351 3.28943 12 3.28943C11.8649 3.28943 11.7322 3.32451 11.6147 3.39123C11.4973 3.45795 11.3991 3.55403 11.33 3.67005L8.89999 8.58005L3.47999 9.37005C3.34211 9.38997 3.21266 9.4484 3.10652 9.53862C3.00038 9.62884 2.92186 9.74719 2.87999 9.88005C2.83529 10.0124 2.82846 10.1547 2.86027 10.2907C2.89207 10.4268 2.96124 10.5512 3.05999 10.6501L6.99999 14.4701L6.06999 19.8701C6.04642 20.0091 6.06199 20.1519 6.11497 20.2826C6.16796 20.4133 6.25625 20.5267 6.36999 20.6101C6.48391 20.6912 6.61825 20.7389 6.75785 20.7478C6.89746 20.7566 7.03675 20.7262 7.15999 20.6601L12 18.1101L16.85 20.6601C16.9573 20.7189 17.0776 20.7499 17.2 20.7501C17.3573 20.7482 17.5105 20.6995 17.64 20.6101C17.7537 20.5267 17.842 20.4133 17.895 20.2826C17.948 20.1519 17.9636 20.0091 17.94 19.8701L17 14.4701L20.93 10.6501C21.0305 10.5523 21.1015 10.4283 21.1351 10.2922C21.1687 10.1561 21.1634 10.0133 21.12 9.88005Z" fill="#fff" />
      </svg>
    )
  }

  let sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <button id="prev" type="button" class="slick-arrow slider-arrow slider-prev"><img className='slider-prev__img' src={SliderArrow} /></button>,
    nextArrow: <button id="next" type="button" class="slick-arrow slider-arrow slider-next"><img src={SliderArrow} /></button>
  };

  return (
    <>
      <div className="FilmPage">
        <Layout title='Lucky Kobsn Films | Фильм' content='Film page'>
          <section className="FilmPage__general">
            <img className="FilmPage__general-img" src={Poster2} alt="Film poster image" />
            <div className="container">
              <div className="FilmPage__general-content__wrapper">
                <div className="FilmPage__general-content">
                  <h2 className="FilmPage__general-content__title">Драйв</h2>
                  <p className="FilmPage__general-content__descr">Великолепный водитель – при свете дня он выполняет каскадерские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт – и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего – виртуозно уходить от погони.</p>
                  <ui className="FilmPage__general-content__list">
                    <li className="FilmPage__general-content__list-item">2011 |</li>
                    <li className="FilmPage__general-content__list-item"> 1ч 20мин |</li>
                    <li className="FilmPage__general-content__list-item"> США |</li>
                    <li className="FilmPage__general-content__list-item"> преступление драма триллер |</li>
                    <li className="FilmPage__general-content__list-item"> 18+ |</li>
                    <li className="FilmPage__general-content__list-item"> 7 {cardStarSvg()}</li>
                  </ui>
                </div>
              </div>
            </div>
          </section>

          <section className="FilmPage__other">
            <div className="FilmPage__other-inner">
              <div className="FilmPage__other-box">
                <div className="container">
                  <h5 className="FilmPage__other-title">Актеры</h5>
                  <Slider className="FilmPage__other-actors__list" {...sliderSettings}>
                    <a className="FilmPage__other-actors__list-item">
                      Райан Гослинг
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Кэри Маллиган
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Брайан Крэнстон
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Альберт Брукс
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Оскар Айзек
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Кристина Хендрикс
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Рон Перлман
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Расс Тэмблин
                    </a>
                    <a className="FilmPage__other-actors__list-item">
                      Джефф Вульф
                    </a>

                  </Slider>
                </div>
              </div>

              <div className="FilmPage__other-box">
                <div className="container">
                  <div className="FilmPage__other-details">
                    <h5 className="FilmPage__other-title">Детали</h5>
                    <div className="FilmPage__other-genres">
                      <h6 className="FilmPage__other-dop__tile">Жанры: </h6>
                      <ul className="FilmPage__other-details__list">
                        <li className="FilmPage__other-details__list-item">преступление</li>
                        <li className="FilmPage__other-details__list-item">драма</li>
                        <li className="FilmPage__other-details__list-item">триллер</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  )
}

export default Film