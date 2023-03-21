const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__content-box">
              <div className="footer__content-box__item">
                <h4 className="footer__content-box__item-title">Разделы</h4>
                <ul className="footer__content-box__item-list">
                  <li className="footer__content-box__item-list__item">
                    <a className="footer__content-box__item-list__item-link" href="#">
                      Фильмы
                    </a>
                  </li>
                  <li className="footer__content-box__item-list__item">
                    <a className="footer__content-box__item-list__item-link" href="#">
                      Сериалы
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__content-box__item">
                <h4 className="footer__content-box__item-title">Помощь</h4>
                <ul className="footer__content-box__item-list">
                  <li className="footer__content-box__item-list__item">
                    <a className="footer__content-box__item-list__item-link" href="#">
                      Написать нам
                    </a>
                  </li>
                  <li className="footer__content-box__item-list__item">
                    <a className="footer__content-box__item-list__item-link" href="#">
                      Пользовательское соглашение
                    </a>
                  </li>
                  <li className="footer__content-box__item-list__item">
                    <a className="footer__content-box__item-list__item-link" href="#">
                      Справка
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__content-box footer__content-box__connect">
              <div className="footer__content-box__item">
                <a className="footer__content-box__item-mail" href="mailto:nashapochta@orel.ru">nashapochta@orel.ru</a>
                <a className="footer__content-box__item-phone" href="tel:+79102636285">+79102636285</a>
              </div>
            </div>
          </div>
          <p className="footer__coop">© 2023 УниверСайт «ОГУ». Все права защищены. 12+</p>
        </div>
      </div>
    </>
  )
}

export default Footer