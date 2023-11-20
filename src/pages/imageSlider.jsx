/* eslint-disable react-hooks/exhaustive-deps */
// ImageSlider.jsx atau komponen yang berisi slider
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ImageSlider() {
  const [sliderState, setSliderState] = useState(1);
  const location = useLocation();

  const handleRadioChange = (event) => {
    setSliderState(parseInt(event.target.value));
  };
  useEffect(() => {
    handleRadioChange;
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderState((prevSliderState) =>
        prevSliderState === 4 ? 1 : prevSliderState + 1,
      );
    }, 5000);
    if (location.pathname !== '/') {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);

    // Membersihkan interval saat komponen di-unmount
  }, []); // Dependensi kosong agar efek ini hanya dijalankan sekali saat komponen dipasang

  return (
    <section className=" flex justify-center">
      <div className="pt-24 w-full max-w-[1200px] px-5 md:px-10 lg:px-16">
        <div className="w-full rounded-lg h-72 sm:h-80 border relative overflow-hidden">
          <div className="w-[500%] flex h-72 sm:h-80">
            <div className="hidden">
              <input
                type="radio"
                name="slider"
                id="slider-1"
                value="1"
                onClick={(e) => handleRadioChange(e)}
              />
              <input
                type="radio"
                name="slider"
                id="slider-2"
                value="2"
                onClick={(e) => handleRadioChange(e)}
              />
              <input
                type="radio"
                name="slider"
                id="slider-3"
                value="3"
                onClick={(e) => handleRadioChange(e)}
              />
              <input
                type="radio"
                name="slider"
                id="slider-4"
                value="4"
                onClick={(e) => handleRadioChange(e)}
              />
            </div>

            <div
              id="slider"
              className={`w-[20%] h-72 sm:h-80 overflow-hidden  transition-all duration-[2000ms] ${
                sliderState === 1 ? '-ml-[0%]' : ''
              } ${sliderState === 2 ? '-ml-[20%]' : ''} ${
                sliderState === 3 ? '-ml-[40%]' : ''
              } ${sliderState === 4 ? '-ml-[60%]' : ''}`}
            >
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-[20%] h-72 sm:h-80  transition-all duration-[2000ms]">
              <img
                src="https://images.unsplash.com/photo-1619008054959-921a896885c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-[20%] h-72 sm:h-80  transition-all duration-[2000ms]">
              <img
                src="https://images.unsplash.com/photo-1573770012830-7cf1777db19c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-[20%] h-72 sm:h-80  transition-all duration-[2000ms]">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover "
                alt=""
              />
            </div>
          </div>

          <div className="absolute top-72 w-full flex justify-center">
            <label
              htmlFor="slider-1"
              className={
                'p-1 mr-5 border rounded-md border-cyan-400 transition-all duration-[3000ms]' +
                (sliderState === 1 ? ' bg-cyan-400' : '')
              }
            ></label>
            <label
              htmlFor="slider-2"
              className={
                'p-1 mr-5 border rounded-md border-cyan-400 transition-all duration-[3000ms]' +
                (sliderState === 2 ? ' bg-cyan-400' : '')
              }
            ></label>
            <label
              htmlFor="slider-3"
              className={
                'p-1 mr-5 border rounded-md border-cyan-400 transition-all duration-[3000ms]' +
                (sliderState === 3 ? ' bg-cyan-400' : '')
              }
            ></label>
            <label
              htmlFor="slider-4"
              className={
                'p-1 mr-5 border rounded-md border-cyan-400 transition-all duration-[3000ms]' +
                (sliderState === 4 ? ' bg-cyan-400' : '')
              }
            ></label>
          </div>
        </div>
      </div>
    </section>
  );
}
