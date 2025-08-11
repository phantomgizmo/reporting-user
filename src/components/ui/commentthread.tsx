import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { type Comment } from '@/pages/reports/dummy';

type CommentThreadProps = {
  comment: Comment;
};

export const CommentThread: React.FC<CommentThreadProps> = ({ comment }) => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div className="space-y-1">
          <p className="text-sm font-normal">{comment.author}</p>
          <p className="text-sm text-muted-foreground">{comment.message}</p>
        </div>

        {comment.reply && comment.reply.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="space-y-4 border-l border-muted pl-4">
              {comment.reply.map((repl) => (
                <div key={repl.id} className="space-y-1">
                  <p className="text-sm font-normal">{repl.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {repl.message}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
