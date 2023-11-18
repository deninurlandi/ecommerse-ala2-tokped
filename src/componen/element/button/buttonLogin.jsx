/* eslint-disable react/prop-types */
export default function ButtonLogin({ text }) {
  return (
    <button
      className="text-lg font-semibold text-white w-full py-2 bg-sky-500 rounded-lg hover:bg-sky-400 hover:shadow-md"
      type="submit"
    >
      {text}
    </button>
  );
}
