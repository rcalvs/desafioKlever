import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EditFormWallet from '../components/EditFormWallet';
import FormWallet from '../components/FormWallet';
import Table from '../components/Table';

const Wallet = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const globalState = useSelector((state) => state);
  const { user, wallet } = globalState;

  useEffect(() => {
    const getTotalPrice = () => {
      const totalPriceRedux = wallet.expenses.reduce((acc, expense) => {
        const { value, currency, exchangeRates } = expense;
        const { ask } = exchangeRates[currency];
        const total = acc + (ask * value);
        return total;
      }, 0);

      setTotalPrice(totalPriceRedux);
    };

    getTotalPrice();
  }, [wallet]);

  return (
    <section>
      <header className="flex bg-indigo-700 px-8 h-20 text-white justify-between">
        <div className="flex my-4 pr-2 bg-indigo-500 rounded-lg align-center justify-center font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <p className="self-center" data-testid="email-field">
            {user.email}
          </p>
        </div>
          <div className="flex m-4 bg-indigo-500 pt-2 rounded-lg h-10 w-40 justify-center">
            <p
              className="flex mx-1"
              data-testid="total-field"
            >
              {totalPrice}
            </p>
            <p
              className="flex"

              data-testid="header-currency-field"
            >
              BRL
            </p>
          </div>
      </header>
      {wallet.edit ? <EditFormWallet /> : <FormWallet />}
      <Table />
    </section>
  );
};

export default Wallet;