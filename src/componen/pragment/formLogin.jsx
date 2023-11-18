import { useState } from 'react';
import ButtonLogin from '../element/button/buttonLogin';
import InputLogin from '../element/input/inputLogin';
import { Link } from 'react-router-dom';

export default function FormLogin() {
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem('email');
    setValid(false);
    const password = localStorage.getItem('password');
    if (
      email === e.target.email.value &&
      password === e.target.password.value
    ) {
      window.location.href = '/';
    } else {
      setTimeout(() => {
        setValid(true);
      }, 200);
    }
  };

  return (
    <div className="w-full max-w-md  bg-white p-8 rounded-lg shadow ">
      <h1 className="text-xl font-bold text-slate-900 mb-5 text-center">
        Log in
      </h1>

      {valid && (
        <div className=" mb-3 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="15"
            height="15"
            className="fill-red-500"
          >
            <path d="M23.64,18.1L14.24,2.28c-.47-.8-1.3-1.28-2.24-1.28s-1.77,.48-2.23,1.28L.36,18.1h0c-.47,.82-.47,1.79,0,2.6s1.31,1.3,2.24,1.3H21.41c.94,0,1.78-.49,2.24-1.3s.46-1.78-.01-2.6Zm-10.64-.1h-2v-2h2v2Zm0-4h-2v-6h2v6Z" />
          </svg>
          <p className="ml-2 text-red-500">Email & password tidak sesuai</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <InputLogin title="Email" type="email" name="email" />
        <InputLogin title="Password" type="password" name="password" />
        <ButtonLogin text="Log in" />
      </form>
      <h2 className="text-center text-sm text-slate-800 mt-3">
        Belum punya akun?{' '}
        <Link to="/register">
          <span className="font-semibold text-cyan-500">Register</span>
        </Link>
      </h2>
    </div>
  );
}
