import { type ColumnDef } from '@tanstack/react-table';

import { type Report } from './dummy';

export const columns: ColumnDef<Report>[] = [
  {
    id: 'rowNumber',
    header: 'No',
    cell: ({ row }) => row.index + 1
  },
  {
    accessorKey: 'title',
    header: 'タイトル  カテゴリー',
    cell: ({ row }) => <div>{row.getValue('title')}</div>
  },
  {
    accessorKey: 'createdDate',
    header: '作成日',
    cell: ({ row }) => <div>{row.getValue('createdDate')}</div>
  },
  {
    accessorKey: 'reportStatus',
    header: 'ステータス',
    cell: ({ row }) => <div>{row.getValue('reportStatus')}</div>
  }
];
