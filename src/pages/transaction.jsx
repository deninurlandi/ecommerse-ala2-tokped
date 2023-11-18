import LayoutHomeDown from '../componen/layout/layoutHomeDown';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';

export default function Transaction() {
  return (
    <>
      <LayoutHomeUp />
      <LayoutHomeDown />
      <div className="pt-24 text-center">transaksi</div>
    </>
  );
}
