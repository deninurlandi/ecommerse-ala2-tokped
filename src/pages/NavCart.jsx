export function NavCart(props) {
  const { allChecked, handleAllChecked, priceCheckot, lengthCheckout } = props;

  return (
    <>
      <div className="z-10 border-t-2 bg-white border-cyan-500 md:hidden fixed flex justify-between items-center bottom-0 left-0 right-0 p-5 px-7 sm:px-9">
        <div>
          <input
            onChange={handleAllChecked}
            type="checkbox"
            checked={allChecked}
            className="w-4 h-4 accent-sky-500"
            id="allCheck"
          />
          <label
            htmlFor="allCheck"
            className="ml-3 font-semibold text-slate-800 text-lg"
          >
            () All
          </label>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col items-end justify-center">
            <p className="font-bold text-base ">Total Harga :</p>
            <p className="font-bold text-lg leading-4">
              {priceCheckot === 0 ? '-' : '$ ' + priceCheckot.toFixed(2)}
            </p>
          </div>
          <button
            disabled={priceCheckot === 0}
            className={
              'bg-cyan-500 font-bold text-slate-200 px-3 py-2 rounded-lg' +
              (priceCheckot === 0 ? ' opacity-50 cursor-not-allowed' : '')
            }
          >
            Checkout
            {lengthCheckout > 0 ? ' (' + lengthCheckout + ')' : ''}
          </button>
        </div>
      </div>
    </>
  );
}
