import React from 'react';
import TableUI from '../../../Common/Table/Table';
import { dataTable,headData } from '../ConcursDetailsData';

const TableBlock = () => {
  return (
    <div>
      <TableUI data={dataTable} head={headData} />
    </div>
  );
};

export default TableBlock;