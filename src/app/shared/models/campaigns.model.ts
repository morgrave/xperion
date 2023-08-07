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
        video: 'https://www.youtube.com/embed/Xt5P9OYWDbc',
      },
      {
        index: '2',
        name: '2일차: 샌드타운에서 벌어진 일',
        video: 'https://www.youtube.com/embed/i1zZCoFJ-bQ',
      },
      {
        index: '3',
        name: '3일차: 폐허의 유적 탐험',
        video: 'https://www.youtube.com/embed/b-z-51ipMZ0',
      },
      {
        index: '4',
        name: '4일차: 기나긴 여정의 시작',
        video: 'https://www.youtube.com/embed/mk-Lw__dF3I',
      },
      {
        index: '5',
        name: '5일차: 수도 다르고시아나로 가는 길',
        video: 'https://www.youtube.com/embed/PQKy_nikFWE',
      },
      {
        index: '6',
        name: '6일차: 크리스탈 궁 입성',
        video: 'https://www.youtube.com/embed/F2WsqKDVi-Y',
      },
      {
        index: '7',
        name: '7일차: 뜨거운 사막의 황야',
        video: 'https://www.youtube.com/embed/z2HBcw_Xb-0',
      },
      {
        index: '8',
        name: '8일차: 크리스탈 호수를 향하여',
        video: 'https://www.youtube.com/embed/Kbnkqr_WK_o',
      },
      {
        index: '9',
        name: '9일차: 스위트 하우스 살인사건',
        video: 'https://www.youtube.com/embed/YCNtzD-c6jo',
      },
      {
        index: '10',
        name: '10일차: 호수의 신과 저주',
        video: 'https://www.youtube.com/embed/NnxF5KDYEvk',
      },
      {
        index: '11',
        name: '11일차: 엘리아킴의 작별인사',
        video: 'https://www.youtube.com/embed/vfyThm5tgdc',
      },
      {
        index: '12',
        name: '12일차: 크리스탈 동굴 속으로',
        video: 'https://www.youtube.com/embed/yodgufDl90g',
      },
      {
        index: '13',
        name: '13일차: 크리스탈 동굴의 괴수들',
        video: 'https://www.youtube.com/embed/dJFpg8EFQmA',
      },
      {
        index: '14',
        name: '14일차: 크리스탈 동굴 탐색',
        video: 'https://www.youtube.com/embed/NuJGJxhWiWw',
      },
      {
        index: '15',
        name: '15일차: 크리스탈 동굴의 결전',
        video: 'https://www.youtube.com/embed/GYiIeMS793k',
      },
      {
        index: '16',
        name: '16일차: 불꽃 결사대 출정',
        video: 'https://www.youtube.com/embed/36CrlhouEH8',
      },
      {
        index: '17',
        name: '17일차: 카시로프 해적단 등장',
        video: 'https://www.youtube.com/embed/tBMI5zVnXC4',
      },
      {
        index: '18',
        name: '18일차: 토제르 타운의 모험',
        video: 'https://www.youtube.com/embed/6A3Y9G7geoU',
      },
      {
        index: '19',
        name: '19일차: 나무 위 고양이와 원반개미',
        video: 'https://www.youtube.com/embed/0zkva10U14s',
      },
      {
        index: '20',
        name: '20일차: 위험한 레이반',
        video: 'https://www.youtube.com/embed/SjFztHq7C0o',
      },
      {
        index: '21',
        name: '21일차: 전설적인 사냥꾼 레밍턴',
        video: 'https://www.youtube.com/embed/Tkh7N-DNB2o',
      },
      {
        index: '22',
        name: '22일차: 공포의 마수 추적',
        video: 'https://www.youtube.com/embed/9A_R-RoqPe8',
      },
      {
        index: '23',
        name: '23일차: 젤로이스의 비밀 실험실',
        video: 'https://www.youtube.com/embed/b9jFDbUy11Y',
      },
      {
        index: '24',
        name: '24일차: 토제르 타운의 결전',
        video: 'https://www.youtube.com/embed/n3L9WTUfqgc',
      },
      {
        index: '25',
        name: '25일차: 얄다스 시로 가는 길',
        video: 'https://www.youtube.com/embed/yRJyNg4bW80',
      },
      {
        index: '26',
        name: '26일차: 해적단 간부 럼피 출현',
        video: 'https://www.youtube.com/embed/XZWd2V8qa_0',
      },
      {
        index: '27',
        name: '27일차: 얄다스 시의 재해',
        video: 'https://www.youtube.com/embed/ZrLTlLfe1jk',
      },
      {
        index: '28',
        name: '28일차: 암살자 지그문트의 습격',
        video: 'https://www.youtube.com/embed/TiSGNKZEKac',
      },
      {
        index: '29',
        name: '29일차: 얄다스의 신부 마르틴',
        video: 'https://www.youtube.com/embed/nzTNZyly-3g',
      },
      {
        index: '30',
        name: '30일차: 테론의 시련',
        video: 'https://www.youtube.com/embed/TG0IqooET5s',
      },
      {
        index: '31',
        name: '31일차: 지하도시로 가는 열차',
        video: 'https://www.youtube.com/embed/ADQn0qEWkpE',
      },
      {
        index: '32',
        name: '32일차: 얄다스 시의 진실',
        video: 'https://www.youtube.com/embed/FXlLWtKx4ec',
      },
      {
        index: '33',
        name: '33일차: 지그문트와 도플갱어들',
        video: 'https://www.youtube.com/embed/qDey2CJtHgo',
      },
      {
        index: '34',
        name: '34일차: 테론이 품은 어둠',
        video: 'https://www.youtube.com/embed/IOKAGexic1A',
      },
      {
        index: '35',
        name: '35일차: 무덤 황제의 옥좌로',
        video: 'https://www.youtube.com/embed/PMWeQCsLPvk',
      },
      {
        index: '36',
        name: '36일차: 얄다스 시의 결전',
        video: 'https://www.youtube.com/embed/xFoYGeZyFvI',
      },
      {
        index: '37',
        name: '37일차: 라하르 시로 가는 마차',
        video: 'https://www.youtube.com/embed/cPH8y3HcYbA',
      },
      {
        index: '38',
        name: '38일차: 귀족 알 네르힌과의 조우',
        video: 'https://www.youtube.com/embed/dUTNuZbLu8I',
      },
      {
        index: '39',
        name: '39일차: 오크 주둔지를 넘어 라하르로',
        video: 'https://www.youtube.com/embed/aRdxcg-zsQc',
      },
      {
        index: '40',
        name: '40일차: 경비대장 오스만의 우울',
        video: 'https://www.youtube.com/embed/1CYiLK18fTA',
      },
      {
        index: '41',
        name: '41일차: 샤그히르 타운의 난투',
        video: 'https://www.youtube.com/embed/Ws1k_HrOZPk',
      },
      {
        index: '42',
        name: '42일차: 샤그히르 투기장 습격',
        video: 'https://www.youtube.com/embed/8owQg4IVT6s',
      },
      {
        index: '43',
        name: '43일차: 간부 럼피의 함선에서',
        video: 'https://www.youtube.com/embed/cp4P8kf69ow',
      },
      {
        index: '44',
        name: '44일차: 전장의 포화',
        video: 'https://www.youtube.com/embed/VJ3NeHH7DHA',
      },
      {
        index: '45',
        name: '45일차: 와일드본 민병대 구원',
        video: 'https://www.youtube.com/embed/eolS1ZF6ACk',
      },
      {
        index: '46',
        name: '46일차: 성벽 내부로 향하는 길',
        video: 'https://www.youtube.com/embed/DYG3EREGnQE',
      },
      {
        index: '47',
        name: '47일차: 유적지에서의 전투',
        video: 'https://www.youtube.com/embed/OzWMFZqQoks',
      },
    ],
  },
  {
    title: 'S4',
    label: '엑스페리온 시즌 4',
    platform: 'ccfolia',
    npcs: [
    ],
    logs: [
      {
        index: '01',
        name: '튜토리얼: 칼루스 여관의 만남',
        video: 'https://www.youtube.com/embed/8TmpBWsEmsA',
      },
      {
        index: '02',
        name: '튜토리얼: 벨 산림지대 조사',
        video: 'https://www.youtube.com/embed/r1mRLGS6Cqo',
      },
    ],
  },
];
