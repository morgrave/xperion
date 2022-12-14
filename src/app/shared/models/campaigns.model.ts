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
    ],
  },
];
