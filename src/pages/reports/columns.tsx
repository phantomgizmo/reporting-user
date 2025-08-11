import { type ColumnDef } from '@tanstack/react-table';

import { type Report } from './dummy';

import NavigateButton from '@/components/ui/navigate-button';

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
  },
  {
    id: 'details',
    cell: () => <NavigateButton path="/reports/edit">編集</NavigateButton>
  }
];
