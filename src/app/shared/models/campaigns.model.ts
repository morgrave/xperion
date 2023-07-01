export interface Campaign {
  title: string;
  label: string;
  platform: string;
  npcs: NPC[];
  logs: Log[];
}

export interface NPC {
  name: string;
  avatar: string;
}

export interface Log {
  index: string;
  name: string;
  images?: Image[];
  interfaces?: Image[];
}

export interface Image {
  id: string;
  file: string;
}

export const Campaigns = [
  {
    title: 'S3',
    label: '엑스페리온 시즌 3',
    platform: 'ccfolia',
    npcs: [
    ],
    logs: [
      {
        index: '0',
        name: '튜토리얼',
      },
      {
        index: '1',
        name: '1일차',
      },
      {
        index: '2',
        name: '2일차',
      },
      {
        index: '3',
        name: '3일차',
      },
      {
        index: '4',
        name: '4일차',
      },
      {
        index: '5',
        name: '5일차',
      },
      {
        index: '6',
        name: '6일차',
      },
      {
        index: '7',
        name: '7일차',
      },
      {
        index: '8',
        name: '8일차',
      },
      {
        index: '9',
        name: '9일차',
      },
      {
        index: '10',
        name: '10일차',
      },
      {
        index: '11',
        name: '11일차',
      },
      {
        index: '12',
        name: '12일차',
      },
      {
        index: '13',
        name: '13일차',
      },
      {
        index: '14',
        name: '14일차',
      },
      {
        index: '15',
        name: '15일차',
      },
      {
        index: '16',
        name: '16일차',
      },
      {
        index: '17',
        name: '17일차',
      },
      {
        index: '18',
        name: '18일차',
      },
      {
        index: '19',
        name: '19일차',
      },
      {
        index: '20',
        name: '20일차',
      },
      {
        index: '21',
        name: '21일차',
      },
      {
        index: '22',
        name: '22일차',
      },
      {
        index: '23',
        name: '23일차',
      },
      {
        index: '24',
        name: '24일차',
      },
      {
        index: '25',
        name: '25일차',
      },
      {
        index: '26',
        name: '26일차',
      },
      {
        index: '27',
        name: '27일차',
      },
      {
        index: '28',
        name: '28일차',
      },
      {
        index: '29',
        name: '29일차',
      },
      {
        index: '30',
        name: '30일차',
      },
      {
        index: '31',
        name: '31일차',
      },
      {
        index: '32',
        name: '32일차',
      },
      {
        index: '33',
        name: '33일차',
      },
      {
        index: '34',
        name: '34일차',
      },
      {
        index: '35',
        name: '35일차',
      },
      {
        index: '36',
        name: '36일차',
      },
      {
        index: '37',
        name: '37일차',
      },
      {
        index: '38',
        name: '38일차',
      },
      {
        index: '39',
        name: '39일차',
      },
      {
        index: '40',
        name: '40일차',
      },
      {
        index: '41',
        name: '41일차',
      },
      {
        index: '42',
        name: '42일차',
      },
    ],
  },
];
