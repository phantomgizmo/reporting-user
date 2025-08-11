export type Reply = {
  id: number;
  author: string;
  message: string;
};

export type Comment = {
  id: number;
  author: string;
  message: string;
  reply: Reply[];
};

export type Report = {
  id: number;
  title: string;
  projectName: string;
  contractStatus: string;
  customerInfo: string;
  productInfo: string;
  projectInfo: string;
  comments: Comment[];
  createdDate: string;
  reportStatus: string;
};

export const dummyReports: Report[] = [
  {
    id: 1,
    title: 'パイプ契約',
    projectName: 'Project Name Pipe Conract',
    contractStatus: 'Contracted',
    customerInfo: 'Exercitation aliquip adipisicing mollit commodo.',
    productInfo:
      'Nostrud cupidatat nisi ullamco deserunt consequat occaecat qui ipsum labore.',
    projectInfo:
      'Qui nostrud consectetur adipisicing voluptate velit excepteur et proident ipsum cillum nulla laboris exercitation exercitation.',

    comments: [
      {
        id: 1,
        author: 'コメント者の名前',
        message: '質問No.1',
        reply: [
          {
            id: 1,
            author: '幹部社員指摘',
            message: '回答'
          }
        ]
      },
      {
        id: 2,
        author: 'コメント者の名前',
        message: '質問No.2',
        reply: []
      }
    ],
    createdDate: '2024/09/09',
    reportStatus: '公開'
  },
  {
    id: 2,
    title: 'シール契約',
    projectName: 'Project Name Pipe Conract',
    contractStatus: 'Contracted',
    customerInfo: 'Exercitation aliquip adipisicing mollit commodo.',
    productInfo:
      'Nostrud cupidatat nisi ullamco deserunt consequat occaecat qui ipsum labore.',
    projectInfo:
      'Qui nostrud consectetur adipisicing voluptate velit excepteur et proident ipsum cillum nulla laboris exercitation exercitation.',

    comments: [
      {
        id: 1,
        author: 'コメント者の名前',
        message: '質問No.2',
        reply: [
          {
            id: 1,
            author: '幹部社員指摘',
            message: '回答'
          }
        ]
      },
      {
        id: 2,
        author: 'コメント者の名前',
        message: '質問No.2',
        reply: []
      }
    ],
    createdDate: '2024/09/10',
    reportStatus: '下書き'
  }
];
