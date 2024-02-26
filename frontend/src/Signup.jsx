import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from './util/api';

function Signup() {
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signup = async (name, mail, password) => {
    await api()
      .post('/user/signup', { name, mail, password })
      .then((res) => {
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='container'>
        <h1>Kayıt Ol</h1>
        <div className='form'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signup(name, mail, password);
            }}
          >
            <div className='formItem'>
              <label htmlFor='name'>İsim</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className='formItem'>
              <label htmlFor='mail'>Mail Adresi</label>
              <input
                type='text'
                name='mail'
                id='mail'
                onChange={(e) => setMail(e.target.value)}
              ></input>
            </div>
            <div className='formItem'>
              <label htmlFor='pass'>Şifre</label>
              <input
                type='password'
                name='mail'
                id='pass'
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button type='submit'>Giriş Yap</button>
            <div>
              <p>Hesabın var mı?</p>
              <Link to={'/login'}>Giriş Yap</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
