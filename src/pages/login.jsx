import { useSelector } from 'react-redux';
import FormLogin from './../componen/pragment/formLogin';

export default function Login() {
  const products = useSelector((state) => state.products.data);
  console.log(products);
  return (
    <>
      <section>
        <div className="w-full h-[100vh] bg-slate-500 flex justify-center items-center">
          <FormLogin />
        </div>
      </section>
    </>
  );
}
