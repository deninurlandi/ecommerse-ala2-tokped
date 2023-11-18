import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profil() {
  return (
    <>
      <div className="pt-24 w-full flex justify-center">
        <div className="w-full max-w-lg">
          <NamaImage />
          <hr className="border-b-2 mb-3 border-slate-400" />
          <Aboutme />
          <hr className="border-b-2 mt-3 mb-3 border-slate-400" />
          <WishAndTrans />
          <AppAndDev />
          <Logout />
        </div>
      </div>
    </>
  );
}

function NamaImage() {
  return (
    <div className="flex items-center mb-5 px-4">
      <div className="w-28 h-28 rounded-full border-2 border-slate-400">
        <img src="" alt="" />
      </div>
      <div className=" ml-5">
        <h1 className="text-2xl font-bold text-cyan-400">Hallo...</h1>
        <h1 className="text-3xl underline underline-offset-4 font-bold text-slate-400">
          Deni Nurlandi
        </h1>
      </div>
    </div>
  );
}

const tabs = [
  { label: 'Info Pribadi', content: <InfoPerson /> },
  { label: 'Saldo', content: <Saldo /> },
  { label: 'Alamat', content: <Address /> },
  { label: 'Rekening Bank', content: <Bank /> },
  { label: 'Keamanan Akun', content: <Security /> },
];

function Aboutme() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex gap-2">
      <div className="w-1/3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={
              'p-2 mb-2 border-b-2 text-lg cursor-pointer hover:text-cyan-500' +
              (activeTab === index ? ' text-cyan-500' : '')
            }
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="w-2/3 overflow-y-auto h-[270px]">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

function InfoPerson() {
  return <div>jangan penasaran gitu dong</div>;
}

function Saldo() {
  return <div>maaf kamu boke</div>;
}
function Address() {
  return (
    <>
      <div>emang ada rumah untuk pulang?</div>
    </>
  );
}

function Bank() {
  return (
    <>
      <div>percuma ga ada saldonya</div>
    </>
  );
}

function Security() {
  return (
    <>
      <div>jangan khawatir deh</div>
    </>
  );
}

function WishAndTrans() {
  return (
    <>
      <Link to="/wishlist">
        <div className="pl-4 flex items-center gap-3 my-2 group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="group-hover:fill-cyan-500"
          >
            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
          </svg>
          <div className="">
            <p className="text-lg group-hover:text-cyan-500 -mb-2">
              Daftar Wislish
            </p>
            <p className="text-xs group-hover:text-cyan-500 ">
              Lihat Daftar Wislish Yang Telah Ditambahkan
            </p>
          </div>
        </div>
      </Link>

      <hr />
      <Link to="/transaction">
        <div className="pl-4 flex items-center gap-3 my-2 group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="group-hover:fill-cyan-500"
          >
            <path d="M16,23c0,.552-.447,1-1,1H6c-2.757,0-5-2.243-5-5V5C1,2.243,3.243,0,6,0h4.515c1.869,0,3.627,.728,4.95,2.05l3.484,3.486c.271,.271,.523,.568,.748,.883,.321,.449,.217,1.074-.232,1.395-.449,.32-1.075,.217-1.395-.233-.161-.225-.341-.438-.534-.63l-3.485-3.486c-.318-.318-.671-.587-1.051-.805V7c0,.551,.448,1,1,1h3c.553,0,1,.448,1,1s-.447,1-1,1h-3c-1.654,0-3-1.346-3-3V2.023c-.16-.015-.322-.023-.485-.023H6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3H15c.553,0,1,.448,1,1Zm5.685-6.733l-3.041-.507c-.373-.062-.644-.382-.644-.76,0-.551,.448-1,1-1h2.268c.356,0,.688,.192,.867,.5,.275,.478,.885,.641,1.366,.365,.478-.277,.642-.888,.364-1.366-.534-.925-1.53-1.5-2.598-1.5h-.268v-1c0-.552-.447-1-1-1s-1,.448-1,1v1c-1.654,0-3,1.346-3,3,0,1.36,.974,2.51,2.315,2.733l3.041,.507c.373,.062,.644,.382,.644,.76,0,.551-.448,1-1,1h-2.268c-.356,0-.688-.192-.867-.5-.275-.479-.886-.642-1.366-.365-.478,.277-.642,.888-.364,1.366,.534,.925,1.53,1.499,2.598,1.499h.268v1c0,.552,.447,1,1,1s1-.448,1-1v-1c1.654,0,3-1.346,3-3,0-1.36-.974-2.51-2.315-2.733Zm-14.185-1.267h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5Zm-1.5-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Zm0-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Z" />
          </svg>
          <div className="">
            <p className="text-lg group-hover:text-cyan-500 -mb-2">
              Riwayat Transaksi
            </p>
            <p className="text-xs group-hover:text-cyan-500 ">
              Lihar semua transaksi belanja anda
            </p>
          </div>
        </div>
      </Link>
      <hr />
      <hr className="border-b-2 mt-3 mb-3 border-slate-400" />
    </>
  );
}

function AppAndDev() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  function handleIsOpen1() {
    setIsOpen1(!isOpen1);
  }
  function handleIsOpen2() {
    setIsOpen2(!isOpen2);
  }

  return (
    <>
      <div className="px-4 mb-3">
        <div
          onClick={handleIsOpen1}
          className="cursor-pointer flex justify-between "
        >
          <p className="text-lg">Seputar Aplikasi</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              className={
                'transition duration-300 ease-in-out ' +
                (isOpen1 ? 'rotate-180' : '')
              }
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
              </g>
            </svg>
          </div>
        </div>
        {isOpen1 && <div className="mt-3">jadi begini....</div>}
      </div>

      <hr />

      <div className=" px-4 mt-3 mb-3">
        <div
          onClick={handleIsOpen2}
          className="cursor-pointer flex justify-between "
        >
          <p className="text-lg">Tentang Developer</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              className={
                'transition duration-300 ease-in-out ' +
                (isOpen2 ? 'rotate-180' : '')
              }
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
              </g>
            </svg>
          </div>
        </div>
        {isOpen2 && <div className="mt-3">hayo penasaran ya</div>}
      </div>
      <hr className="mb-20" />
    </>
  );
}

function Logout() {
  return (
    <>
      <Link to="/login">
        <div className="mb-24 flex items-center gap-3 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Isolation_Mode"
            data-name="Isolation Mode"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            className="rotate-180 fill-red-600"
          >
            <path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z" />
            <path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z" />
          </svg>
          <h2 className="text-xl font-bold text-red-600">Log out</h2>
        </div>
      </Link>
    </>
  );
}
