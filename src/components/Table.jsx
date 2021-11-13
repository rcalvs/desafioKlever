import React from 'react';
import elements from '../services/inputs';
import TBody from './TBody';

const Table = () => (
  <table className="table-auto m-auto mt-8">
    <thead className="w-screen">
      <tr className="text-indigo-700 w-screen self-center">
        {elements.th.map((th) => (
          <th className="m-auto mr-2 px-4" key={ th }>{th}</th>
        ))}
      </tr>
    </thead>
    <TBody />
  </table>
);

export default Table;