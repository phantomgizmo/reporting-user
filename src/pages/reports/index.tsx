import { dummyReports, type Report } from './dummy';
import { columns } from './columns';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Report = () => {
  const navigate = useNavigate();

  const table = useReactTable<Report>({
    data: dummyReports,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  useEffect(() => {
    requestAnimationFrame(() =>
      toast('お知らせ：あなたが作成したレポートにコメントがあります。', {
        action: {
          label: '詳細',
          onClick: () => navigate('/reports/details')
        }
      })
    );
  }, [navigate]);

  return (
    <Card className="flex w-full flex-1 flex-col">
      <CardHeader>
        <CardTitle className="text-xl">起票レポート一覧</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="self-end">
          <Button onClick={() => navigate('/reports/create')}>
            新規レポート作成
          </Button>
        </div>
        <div className="flex justify-between gap-4">
          <Input placeholder="フィルタ 。。。" />
          <Button>検索</Button>
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="mt-auto justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          前のページ
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          次のページ
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Report;
