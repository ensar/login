import { useState } from 'react';
import { api } from '../util/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const login = async (mail, password) => {
    await api()
      .post('/user/login', { mail, password })
      .then((res) => {
        toast('Giriş yapıldı', {
          type: 'success',
          position: 'top-right',
          autoClose: 1000,
        });
        navigate('/');
      })
      .catch((err) =>
        toast(err.response.data.message, {
          type: 'error',
          position: 'top-right',
          autoClose: 1000,
        })
      );
  };
  return (
    <>
      <div className='container'>
        <h1>Giriş Yap</h1>
        <div className='form'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(mail, pass);
            }}
          >
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
                name='password'
                id='pass'
                onChange={(e) => setPass(e.target.value)}
              ></input>
            </div>
            <button type='submit'>Giriş Yap</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
