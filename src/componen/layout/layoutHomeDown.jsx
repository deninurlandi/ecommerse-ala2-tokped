import { Link, useLocation } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function LayoutHomeDown() {
  const location = useLocation();
  return (
    <>
      <div className="z-50 navbar-fixed-down fixed left-0 right-0 flex bottom-0 items-center justify-around py-3 bg-white px-5 md:hidden">
        <Link to="/">
          <div className="group flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              className={`svg-nav ${
                location.pathname === '/' && 'fill-cyan-500'
              }`}
            >
              <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
            </svg>
            <p
              className={`p-nav ${
                location.pathname === '/' && 'text-cyan-500'
              }`}
            >
              Home
            </p>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="group flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              className={`svg-nav ${
                location.pathname === '/wishlist' && 'fill-cyan-500'
              }`}
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
            </svg>
            <p
              className={`p-nav ${
                location.pathname === '/wishlist' && 'text-cyan-500'
              }`}
            >
              Wislish
            </p>
          </div>
        </Link>
        <Link to="/transaction">
          <div className="group flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              className={`svg-nav ${
                location.pathname === '/transaction' && 'fill-cyan-500'
              }`}
            >
              <path d="M16,23c0,.552-.447,1-1,1H6c-2.757,0-5-2.243-5-5V5C1,2.243,3.243,0,6,0h4.515c1.869,0,3.627,.728,4.95,2.05l3.484,3.486c.271,.271,.523,.568,.748,.883,.321,.449,.217,1.074-.232,1.395-.449,.32-1.075,.217-1.395-.233-.161-.225-.341-.438-.534-.63l-3.485-3.486c-.318-.318-.671-.587-1.051-.805V7c0,.551,.448,1,1,1h3c.553,0,1,.448,1,1s-.447,1-1,1h-3c-1.654,0-3-1.346-3-3V2.023c-.16-.015-.322-.023-.485-.023H6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3H15c.553,0,1,.448,1,1Zm5.685-6.733l-3.041-.507c-.373-.062-.644-.382-.644-.76,0-.551,.448-1,1-1h2.268c.356,0,.688,.192,.867,.5,.275,.478,.885,.641,1.366,.365,.478-.277,.642-.888,.364-1.366-.534-.925-1.53-1.5-2.598-1.5h-.268v-1c0-.552-.447-1-1-1s-1,.448-1,1v1c-1.654,0-3,1.346-3,3,0,1.36,.974,2.51,2.315,2.733l3.041,.507c.373,.062,.644,.382,.644,.76,0,.551-.448,1-1,1h-2.268c-.356,0-.688-.192-.867-.5-.275-.479-.886-.642-1.366-.365-.478,.277-.642,.888-.364,1.366,.534,.925,1.53,1.499,2.598,1.499h.268v1c0,.552,.447,1,1,1s1-.448,1-1v-1c1.654,0,3-1.346,3-3,0-1.36-.974-2.51-2.315-2.733Zm-14.185-1.267h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h5.5c.553,0,1-.448,1-1s-.447-1-1-1H7.5c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5Zm-1.5-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Zm0-4h2c.552,0,1-.448,1-1s-.448-1-1-1h-2c-.552,0-1,.448-1,1s.448,1,1,1Z" />
            </svg>
            <p
              className={`p-nav ${
                location.pathname === '/transaction' && 'text-cyan-500'
              }`}
            >
              Transaksi
            </p>
          </div>
        </Link>
        <Link to="/profile">
          <div className="group flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20px"
              height="20px"
              className={`svg-nav ${
                location.pathname === '/profile' && 'fill-cyan-500'
              }`}
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z" />
                <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
              </g>
            </svg>
            <p
              className={`p-nav ${
                location.pathname === '/profile' && 'text-cyan-500'
              }`}
            >
              Profil
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
