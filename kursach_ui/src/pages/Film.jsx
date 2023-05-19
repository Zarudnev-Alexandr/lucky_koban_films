import Layout from '../components/Layout'
import Slider from "react-slick";
import Poster2 from '../images/poster2.jpeg'
import SliderArrow from '../images/arrow-slider.svg'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
const Film = () => {

  useEffect(() => {
    fetchFilm();
    fetchComments()
  }, [])

  const { handleSubmit, reset } = useForm({ mode: 'onBlur' });

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

  let [film, setFilm] = useState();
  let [comments, setComments] = useState([]);
  let [commentText, setCommentText] = useState('');
  let [commentRating, setCommentRating] = useState(5);

  let fetchFilm = () => {
    fetch('https://4947.ru/lucky_koban_films/api/films/' + localStorage.getItem('film_id'))
      .then(response => response.json())
      .then(data => {
        let result = data;
        setFilm(result)
      })
  }

  let fetchComments = () => {
    fetch('https://4947.ru/lucky_koban_films/api/comments/' + localStorage.getItem('film_id'))
      .then(response => response.json())
      .then(data => {
        let result = data;
        setComments(result);
      })
  }

  let postComment = async () => {
    let response = await fetch('https://4947.ru/lucky_koban_films/api/comments/' + localStorage.getItem('film_id'),
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          content: commentText,
          rating: commentRating,
        })
      });
    if (response.status === 200) {
      let data = await response.json();
      localStorage.setItem("token", data.token)
      window.location.reload()
    }
  }

  return (
    <>
      {film ? (
        <div className="FilmPage">
          <Layout title='Lucky Kobsn Films | Фильм' content='Film page'>
            <section className="FilmPage__general">
              <img className="FilmPage__general-img" src={"https://4947.ru/lucky_koban_films/images/" + film.id + ".jpg"} alt="Film poster image" />
              <div className="container">
                <div className="FilmPage__general-content__wrapper">
                  <div className="FilmPage__general-content">
                    <h2 className="FilmPage__general-content__title">{film.name}</h2>
                    <p className="FilmPage__general-content__descr">{film.description}</p>
                    <ui className="FilmPage__general-content__list">
                      <li className="FilmPage__general-content__list-item">{String(film.release_date).split('-')[2]}.{String(film.release_date).split('-')[1]}.{String(film.release_date).split('-')[0]} |</li>
                      <li className="FilmPage__general-content__list-item"> {film.genres.map((item1) => {
                        return (
                          <>
                            {item1.name + " "}
                          </>
                        )
                      })} |</li>
                      <li className="FilmPage__general-content__list-item"> {film.age_rating}+ |</li>
                      <li className="FilmPage__general-content__list-item"> {film.rating} {cardStarSvg()}</li>
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
                      {film.actors.map((item) => {
                        return (
                          <a className="FilmPage__other-actors__list-item">
                            {item.first_name} {item.last_name}
                          </a>
                        )
                      })}
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
                          {film.genres.map((item) => {
                            return (
                              <li className="FilmPage__other-details__list-item">{item.name}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="FilmPage__other-box">
                  <div className="container">
                    <h5 className="FilmPage__other-title">Отзывы</h5>
                    {localStorage.getItem('role') ? (
                      <form className="FilmPage__comments-list__item FilmPage__writeComment" onSubmit={handleSubmit(postComment)}>
                        <div className="FilmPage__writeComment-top">
                          <p className="FilmPage__comments-alert">Оценка: </p>
                          <select className='FilmPage__comments-list__item-ratebox' onChange={e=>setCommentRating(parseInt(e.target.value))}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5" selected>5</option>
                          </select>
                          {cardStarSvg()}
                        </div>
                        <textarea cols="30" rows="10" className="FilmPage__writeComment-textarea" placeholder='Введите текст отзыва...' onChange={e=>setCommentText(e.target.value)}>
                        </textarea>
                        <button className="loginPage__btn btn-anim FilmPage__comments-btn" type='submit'>Опубликовать отзыв</button>
                      </form>
                    ) : (<p className="FilmPage__comments-alert">Войдите в систему, чтобы оставлять отзывы</p>)}
                    <div className="FilmPage__comments-list">
                      {comments.map((item) => {
                        return (
                          <div className="FilmPage__comments-list__item">
                            <div className="FilmPage__comments-list__item-topbox">
                              <h3 className="FilmPage__comments-list__item-title">{item.user.username}</h3>
                              <p className="FilmPage__comments-list__item-role">{item.user.user_role === 'user' ? ('Пользователь') : (item.user.user_role === 'moderator' ? ('Модератор') : ('Админ'))}</p>
                            </div>
                            <p className="FilmPage__comments-list__item-rating">{item.rating} {cardStarSvg()}</p>
                            {item.content ? (
                              <p className="FilmPage__comments-list__item-text">{item.content}</p>
                            ) : ('')}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </Layout>
        </div>
      ) : ('')}

    </>
  )
}

export default Film