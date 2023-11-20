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
  const styleNum = (sliderState - 1) * 20;

  return (
    <section className=" flex justify-center">
      <div className="pt-24 w-full max-w-[1200px] px-5 md:px-10 lg:px-16">
        <div className="w-full rounded-lg h-80 border relative overflow-hidden">
          <div className="w-[500%] flex h-80">
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
              className={`w-[20%] h-80 overflow-hidden  bg-slate-400 transition-all duration-[2000ms] -ml-[${styleNum}%]`}
            >
              <img
                src="../../public/1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-[20%] h-80 bg-slate-500 transition-all duration-[2000ms]">
              <img
                src="../../public/2.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-[20%] h-80 bg-slate-600 transition-all duration-[2000ms]">
              <img
                src="../../public/3.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-[20%] h-80 bg-slate-700 transition-all duration-[2000ms]">
              <img
                src="../../public/4.jpg"
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
