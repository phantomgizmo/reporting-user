import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';

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

const CreateReport = () => {
  return (
    <Card className="flex w-full flex-1 flex-col">
      <CardHeader>
        <CardTitle className="text-xl">新規レポート作成</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <section className="flex flex-col gap-4">
          <Label htmlFor="projectName">案件名</Label>
          <Input id="projectName" />
          <Label htmlFor="contractNumber">契約番号</Label>
          <Input id="contractNumber" />
          <Label htmlFor="contractStatus">受注・失注</Label>
          <Select>
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
      </CardContent>
      <CardFooter className="mt-auto justify-center gap-2">
        <Button className="flex-1" variant="outline">
          削除
        </Button>
        <Button className="flex-1" variant="outline">
          下書き保存
        </Button>
        <Button className="flex-1" variant="outline">
          公開
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateReport;
