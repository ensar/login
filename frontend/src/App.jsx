import { useState } from 'react';

function App() {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  return (
    <>
      <div className='container'>
        <h1>Login Page</h1>
        <div className='form'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(mail, pass);
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
                name='mail'
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

export default App;
