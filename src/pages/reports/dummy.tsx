export type Reply = {
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
        author: 'employee one',
        message: 'In ipsum et qui sunt quis consectetur fugiat tempor anim do.',
        reply: [
          {
            author: 'senior employee',
            message:
              'Et velit elit ullamco laboris elit ullamco nisi quis culpa laboris aliquip dolor adipisicing.'
          },
          {
            author: 'senior employee',
            message:
              'Et velit ea adipisicing fugiat cillum aliqua fugiat culpa occaecat cillum aliquip excepteur ullamco excepteur.'
          }
        ]
      },
      {
        id: 2,
        author: 'employee two',
        message:
          'Aliquip eiusmod duis reprehenderit est voluptate do non qui cupidatat esse eiusmod velit qui.',
        reply: []
      }
    ],
    createdDate: '2024/09/09',
    reportStatus: 'Publish'
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
        author: 'employee one',
        message: 'In ipsum et qui sunt quis consectetur fugiat tempor anim do.',
        reply: [
          {
            author: 'senior employee',
            message:
              'Et velit elit ullamco laboris elit ullamco nisi quis culpa laboris aliquip dolor adipisicing.'
          },
          {
            author: 'senior employee',
            message:
              'Et velit ea adipisicing fugiat cillum aliqua fugiat culpa occaecat cillum aliquip excepteur ullamco excepteur.'
          }
        ]
      },
      {
        id: 2,
        author: 'employee two',
        message:
          'Aliquip eiusmod duis reprehenderit est voluptate do non qui cupidatat esse eiusmod velit qui.',
        reply: []
      }
    ],
    createdDate: '2024/09/10',
    reportStatus: 'Draft'
  }
];
