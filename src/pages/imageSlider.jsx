// ImageSlider.jsx atau komponen yang berisi slider
import { useEffect, useState } from 'react';

export default function ImageSlider() {
  const [sliderState, setSliderState] = useState(1);

  const handleRadioChange = (event) => {
    setSliderState(parseInt(event.target.value));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderState((prevSliderState) =>
        prevSliderState === 4 ? 1 : prevSliderState + 1,
      );
    }, 7000);

    return () => clearInterval(intervalId); // Membersihkan interval saat komponen di-unmount
  }, []); // Dependensi kosong agar efek ini hanya dijalankan sekali saat komponen dipasang

  return (
    <section className=" flex justify-center">
      <div className="pt-24 w-full max-w-6xl px-5 md:px-10 lg:px-16">
        <div className="w-full rounded-lg h-80 border relative overflow-hidden">
          <div className="w-[500%] flex h-80">
            {/* Input checkboxes */}
            <div className="hidden">
              <input
                type="radio"
                name="slider"
                id="slider-1"
                value="1"
                onClick={handleRadioChange}
              />
              <input
                type="radio"
                name="slider"
                id="slider-2"
                value="2"
                onClick={handleRadioChange}
              />
              <input
                type="radio"
                name="slider"
                id="slider-3"
                value="3"
                onClick={handleRadioChange}
              />
              <input
                type="radio"
                name="slider"
                id="slider-4"
                value="4"
                onClick={handleRadioChange}
              />
            </div>

            <div
              className={`w-[20%] h-80 bg-slate-400 transition-all duration-[2000ms] -ml-[${
                (sliderState - 1) * 20
              }%]`}
            ></div>
            <div className="w-[20%] h-80 bg-slate-500 transition-all duration-[2000ms]"></div>
            <div className="w-[20%] h-80 bg-slate-600 transition-all duration-[2000ms]"></div>
            <div className="w-[20%] h-80 bg-slate-700 transition-all duration-[2000ms]"></div>

            {/* Labels */}
          </div>

          {/* Slider indicators */}
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
