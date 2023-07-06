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
  video?: string;
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
        name: '1일차: 다고시안 듀얼단 탄생',
      },
      {
        index: '2',
        name: '2일차: 샌드타운에서 벌어진 일',
      },
      {
        index: '3',
        name: '3일차: 폐허의 유적 탐험',
      },
      {
        index: '4',
        name: '4일차: 기나긴 여정의 시작',
      },
      {
        index: '5',
        name: '5일차: 수도 다르고시아나로 가는 길',
      },
      {
        index: '6',
        name: '6일차: 크리스탈 궁 입성',
      },
      {
        index: '7',
        name: '7일차: 악마를 보았다',
      },
      {
        index: '8',
        name: '8일차: 크리스탈 호수를 향하여',
      },
      {
        index: '9',
        name: '9일차: 스위트 하우스 살인사건',
      },
      {
        index: '10',
        name: '10일차: 호수의 신과 저주',
      },
      {
        index: '11',
        name: '11일차: 엘리아킴의 작별인사',
      },
      {
        index: '12',
        name: '12일차: 크리스탈 동굴 속으로',
      },
      {
        index: '13',
        name: '13일차: 크리스탈 동굴의 괴수들',
      },
      {
        index: '14',
        name: '14일차: 크리스탈 동굴 탐색',
      },
      {
        index: '15',
        name: '15일차: 크리스탈 동굴의 결전',
      },
      {
        index: '16',
        name: '16일차: 불꽃 결사대 출정',
      },
      {
        index: '17',
        name: '17일차: 카시로프 해적단 등장',
      },
      {
        index: '18',
        name: '18일차: 토제르 타운의 모험',
      },
      {
        index: '19',
        name: '19일차: 나무 위 고양이와 원반개미',
      },
      {
        index: '20',
        name: '20일차: 위험한 레이반',
      },
      {
        index: '21',
        name: '21일차: 전설적인 사냥꾼 레밍턴',
      },
      {
        index: '22',
        name: '22일차: 공포의 마수 추적',
      },
      {
        index: '23',
        name: '23일차: 젤로이스의 비밀 실험실',
      },
      {
        index: '24',
        name: '24일차: 토제르 타운의 결전',
      },
      {
        index: '25',
        name: '25일차: 얄다스 시로 가는 길',
      },
      {
        index: '26',
        name: '26일차: 해적단 간부 럼피 출현',
      },
      {
        index: '27',
        name: '27일차: 얄다스 시의 재해',
      },
      {
        index: '28',
        name: '28일차: 암살자 지그문트의 습격',
      },
      {
        index: '29',
        name: '29일차: 얄다스의 신부 마르틴',
      },
      {
        index: '30',
        name: '30일차: 테론의 시련',
      },
      {
        index: '31',
        name: '31일차: 지하도시로 가는 열차',
      },
      {
        index: '32',
        name: '32일차: 얄다스 시의 진실',
      },
      {
        index: '33',
        name: '33일차: 지그문트와 도플갱어들',
      },
      {
        index: '34',
        name: '34일차: 테론이 품은 어둠',
      },
      {
        index: '35',
        name: '35일차: 무덤 황제의 옥좌로',
      },
      {
        index: '36',
        name: '36일차: 얄다스 시의 결전',
      },
      {
        index: '37',
        name: '37일차: 라하르 시로 가는 마차',
      },
      {
        index: '38',
        name: '38일차: 귀족 알 네르힌과의 조우',
      },
      {
        index: '39',
        name: '39일차: 오크 주둔지를 넘어 라하르로',
      },
      {
        index: '40',
        name: '40일차: 경비대장 오스만의 우울',
      },
      {
        index: '41',
        name: '41일차: 샤그히르 타운의 난투',
      },
      {
        index: '42',
        name: '42일차: 샤그히르 투기장 습격',
      },
      {
        index: '43',
        name: '43일차: 간부 럼피의 함선에서',
      },
    ],
  },
];
