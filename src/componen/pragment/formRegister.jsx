import InputLogin from './../element/input/inputLogin';
import ButtonLogin from './../element/button/buttonLogin';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function FormRegister() {
  const [valid, setValid] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const nama = e.target.nama.value;
    setValid(false);
    const telp = e.target.telepon.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('nama', nama);
    localStorage.setItem('telp', telp);

    if (password === confirmpassword) {
      window.location.href = 'https://store-ala2-tokped.vercel.app/login';
    } else {
      setTimeout(() => {
        setValid(true);
      }, 200);
    }
  }

  return (
    <div className="w-full max-w-md  bg-white p-8 rounded-lg shadow ">
      <h1 className="text-xl font-bold text-slate-900 mb-5 text-center">
        Register
      </h1>
      <form onSubmit={handleSubmit}>
        <InputLogin title="Nama" type="text" name="nama" />
        <InputLogin title="Telepon" type="tel" name="telepon" />
        <InputLogin title="Email" type="email" name="email" />
        <InputLogin title="Password" type="password" name="password" />
        <InputLogin
          title="Confirm Password"
          type="password"
          name="confirmpassword"
        />
        {valid && (
          <div className="-mt-6 mb-3 pl-3 flex items-center">
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
            <p className="ml-2 text-red-500">Password harus sama</p>
          </div>
        )}
        <ButtonLogin text="Register" />
      </form>
      <h2 className="text-center text-sm text-slate-800 mt-3">
        Sudah punya akun?{' '}
        <Link to="/login">
          <span className="font-semibold text-cyan-500">Login</span>
        </Link>
      </h2>
    </div>
  );
}
