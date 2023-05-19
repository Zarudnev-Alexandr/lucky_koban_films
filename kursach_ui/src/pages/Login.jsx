import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout'

let Login = () => {

  const { handleSubmit, reset } = useForm({ mode: 'onBlur' });

  let [loginLogin, setLoginLogin] = useState();
  let [passwordLogin, setPasswordLogin] = useState();
  let [loginReg, setLoginReg] = useState();
  let [passwordReg, setPasswordReg] = useState();

  let postAuthReg = async () => {
    let response = await fetch('https://4947.ru/lucky_koban_films/api/auth/reg',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginReg,
          password: passwordReg,
        })
      });
    if (response.status === 200) {
      let data = await response.json();
      localStorage.setItem("token", data.token)
      window.location.replace("/");
    } else {
      alert('Данный пользователь уже зарегистрирован или произошла серверная ошибка :(');
    }
  }

  let postAuthLogin = async () => {
    let response = await fetch('https://4947.ru/lucky_koban_films/api/auth/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginLogin,
          password: passwordLogin,
        })
      })
    if (response.status === 200) {
      let data = await response.json();
      localStorage.setItem("token", data.token)
      window.location.replace("/");
    } else {
      alert('Некорректные данные');
    }
  }


  return (
    <Layout title='Lucky Kobsn Films | Логин' content='Login page'>
      <section className="loginPage">
        <div className="container">
          <div className="loginPage__wrapper">
            <h1 className="loginPage__title">Русы или ящеры?</h1>
            <div className="loginPage__content">
              <div className="loginPage__box">
                <h3 className="loginPage__box-title">Логин</h3>
                <form className="loginPage__form" onSubmit={handleSubmit(postAuthLogin)}>
                  <input type="text" className="loginPage__input" placeholder='Логин' onChange={e => setLoginLogin(e.target.value)} />
                  <input type="password" className="loginPage__input" placeholder='Пароль' onChange={e => setPasswordLogin(e.target.value)} />
                  <button className="loginPage__btn btn-anim" type='submit'>Логин</button>
                </form>
              </div>
              <div className="loginPage__box">
                <h3 className="loginPage__box-title">Регистрация</h3>
                <form className="loginPage__form" onSubmit={handleSubmit(postAuthReg)}>
                  <input type="text" className="loginPage__input" placeholder='Придумайте логин' onChange={e => setLoginReg(e.target.value)} />
                  <input type="password" className="loginPage__input" placeholder='Придумайте пароль' onChange={e => setPasswordReg(e.target.value)} />
                  <button className="loginPage__btn btn-anim" type='submit'>Регистрация</button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  )

}

export default Login;