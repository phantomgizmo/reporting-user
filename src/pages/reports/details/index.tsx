import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';

import { dummyReports } from '../dummy';

import { CommentThread } from '@/components/ui/commentthread';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ReportDetail = () => {
  return (
    <Card className="flex w-full flex-1 flex-col">
      <CardHeader>
        <CardTitle className="text-xl">新規レポート作成</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <section className="flex flex-col gap-4">
          <Label htmlFor="projectName">案件名</Label>
          <Input id="projectName" disabled />
          <Label htmlFor="contractNumber">契約番号</Label>
          <Input id="contractNumber" disabled />
          <Label htmlFor="contractStatus">受注・失注</Label>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="受注・失注" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>受注・失注</SelectLabel>
                <SelectItem value="contracted">受注</SelectItem>
                <SelectItem value="rejected">失注</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>
        <Separator />
        <section>
          <h1 className="font-medium">顧客情報</h1>
        </section>
        <Separator />
        <section>
          <h1 className="font-medium">案件内容</h1>
        </section>
        <Separator />
        <section>
          <h1 className="mb-4 font-medium">コメント一覧</h1>
          {dummyReports[0].comments.map((comment) => (
            <CommentThread comment={comment} />
          ))}
          <Card className="mb-4">
            <CardContent className="pt-4">
              <div className="space-y-1">
                <Label htmlFor="newComment" className="text-sm font-medium">
                  コメント入力欄
                </Label>
                <Textarea
                  id="newComment"
                  className="resize-none border-none focus:outline-none focus:ring-0"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </CardContent>
      <CardFooter className="mt-auto justify-center gap-2">
        <Button className="flex-1" variant="outline">
          参考提案結果
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReportDetail;
