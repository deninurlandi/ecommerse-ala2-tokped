/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { TotalCart } from '../../context/totalCart';
import { useContext } from 'react';
import { NameSearch } from '../../context/nameSearch';

/* eslint-disable react/no-unknown-property */
export default function LayoutHomeUp() {
  const { totalCart } = useContext(TotalCart);
  const { nameSearch, setNameSearch } = useContext(NameSearch);

  function handleSearch(e) {
    e.preventDefault();
    setNameSearch('');
    window.location.href = `https://store-ala2-tokped.vercel.app/search/${nameSearch}`;
  }

  return (
    <>
      <div className=" z-50 navbar-fixed fixed left-0 right-0 top-0 py-2 flex items-center justify-between bg-white px-3 md:px-8 lg:px-14">
        <Link to="/">
          <div className=" flex items-center flex-row p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              viewBox="0 0 24 24"
              width="27px"
              height="27px"
              className="fill-cyan-500 hidden md:block "
            >
              <path d="M24,10.091,22.751,4.307A5.466,5.466,0,0,0,17.382,0H6.618A5.466,5.466,0,0,0,1.249,4.307L.036,9.766,0,11.046a4.321,4.321,0,0,0,1,2.745V18.5A5.506,5.506,0,0,0,6.5,24h11A5.506,5.506,0,0,0,23,18.5V13.791a4.321,4.321,0,0,0,1-2.745ZM3,10.256l1.177-5.3A2.5,2.5,0,0,1,6.618,3H7V4.5A1.5,1.5,0,0,0,8.5,6h0A1.5,1.5,0,0,0,10,4.5V3h4V4.5A1.5,1.5,0,0,0,15.5,6h0A1.5,1.5,0,0,0,17,4.5V3h.382a2.5,2.5,0,0,1,2.441,1.958L21,10.256v.79a1.364,1.364,0,0,1-2.727,0,2.455,2.455,0,1,0-4.909,0,1.364,1.364,0,0,1-2.728,0,2.455,2.455,0,1,0-4.909,0,1.364,1.364,0,0,1-2.727,0ZM17.5,21H6.5A2.5,2.5,0,0,1,4,18.5V15.372c.122.011.239.037.364.037a4.367,4.367,0,0,0,3.818-2.253,4.362,4.362,0,0,0,7.636,0,4.367,4.367,0,0,0,3.818,2.253c.125,0,.242-.026.364-.037V18.5A2.5,2.5,0,0,1,17.5,21Z" />
            </svg>
            <div className="ml-2 w-auto font-bold text-xl text-cyan-500 hidden sm:block">
              SaaeStore
            </div>
          </div>
        </Link>

        <div className="w-full max-w-xl p-2">
          <form action="" className="relative" onSubmit={handleSearch}>
            <div className="absolute top-[10px] left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="17px"
                height="17px"
                className="fill-slate-500"
              >
                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              placeholder="Search..."
              className="px-10 py-[5px] rounded-lg w-full border border-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300  "
            />
          </form>
        </div>
        <div className="flex items-center">
          <div className="p-2 hover:bg-slate-200 mx-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="25px"
              height="25px"
            >
              <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
            </svg>
          </div>

          <div className="p-2 hover:bg-slate-200 mx-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25px"
              height="25px"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" />
              </g>
            </svg>
          </div>
          <Link to="/cart">
            <div className="p-2 hover:bg-slate-200 mx-1 rounded-lg relative">
              {totalCart > 0 && (
                <div className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded-full font-bold">
                  {totalCart}
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="25px"
                height="25px"
              >
                <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
                <circle cx="7" cy="22" r="2" />
                <circle cx="17" cy="22" r="2" />
              </svg>
            </div>
          </Link>
          <Link to="/profile">
            <div className="p-2 hover:bg-slate-200 mx-1 rounded-lg hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25px"
                height="25px"
              >
                <g id="_01_align_center" data-name="01 align center">
                  <path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z" />
                  <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
