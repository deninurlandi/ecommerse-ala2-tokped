/* eslint-disable react/prop-types */
export default function InputLogin(props) {
  const { title, type, name } = props;
  return (
    <>
      <div className="form-control relative mb-6 w-full max-w-md">
        <input
          type={type}
          autoComplete="off"
          name={name}
          id={name}
          placeholder=""
          className="block w-full px-3 py-2 rounded-lg border border-slate-500 font-medium text-base text-slate-500 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 focus:text-slate-900"
        />
        <label
          htmlFor={name}
          className="top-2 z-10 block absolute px-1 left-3 font-medium text-base text-slate-500 bg-white cursor-text transition duration-300 ease-in-out"
        >
          {title}
        </label>
      </div>
    </>
  );
}
