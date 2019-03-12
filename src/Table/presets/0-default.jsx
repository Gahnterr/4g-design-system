import React from 'react';
import Table from '../Table';
import TableHeader from '../../TableHeader/TableHeader';
import TableTH from './../../TableTH/TableTH';
import TableTD from './../../TableTD/TableTD';
import TableBody from './../../TableBody/TableBody';
import TableRow from './../../TableRow/TableRow';

export default (
  <Table
    uxpId="table.1"
    data={[
      {
        columnas: [
          {
            Name: 'Jim',
            ID: '00001',
            'Favorite Color': 'Blue',
          },
          {
            Name: 'Sue',
            ID: '00002',
            'Favorite Color': 'Red',
          },
          {
            Name: 'Barb',
            ID: '00003',
            'Favorite Color': 'Green',
          },
        ],
      },
    ]}
  >
    <TableHeader uxpId="table.header.1">
      <TableTH uxpId="table.th.1">
        Name
      </TableTH>
      <TableTH uxpId="table.th.2">
        ID
      </TableTH>
      <TableTH uxpId="table.th.3">
        Favorite color
      </TableTH>
    </TableHeader>
    <TableBody uxpId="table.body.1">
      <TableRow uxpId="table.row.1">
        <TableTD uxpId="table.td.1.1">Sue</TableTD>
        <TableTD uxpId="table.td.1.2">00001</TableTD>
        <TableTD uxpId="table.td.1.3">Blue</TableTD>
      </TableRow>
      <TableRow uxpId="table.row.2">
        <TableTD uxpId="table.td.2.1">Bradley</TableTD>
        <TableTD uxpId="table.td.2.2">00002</TableTD>
        <TableTD uxpId="table.td.2.3">Green</TableTD>
      </TableRow>
      <TableRow uxpId="table.row.3">
        <TableTD uxpId="table.td.3.1">Amy</TableTD>
        <TableTD uxpId="table.td.3.2">00003</TableTD>
        <TableTD uxpId="table.td.3.3">Red</TableTD>
      </TableRow>
    </TableBody>
  </Table>
);
