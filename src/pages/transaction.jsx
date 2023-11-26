import LayoutHomeDown from '../componen/layout/layoutHomeDown';
import LayoutHomeUp from '../componen/layout/layoutHomeUp';

export default function Transaction() {
  return (
    <>
      <LayoutHomeUp />
      <LayoutHomeDown />
      <div className="pt-20 text-center">
        <p className="text-xl">Maaf fitur Transaksi Belum tersedia</p>
      </div>
    </>
  );
}
