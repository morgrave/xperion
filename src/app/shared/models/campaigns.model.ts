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
      {
        index: '48',
        name: '48일차: 1차 성벽을 향한 전진',
        video: 'https://www.youtube.com/embed/v3e7DZmHDEU',
      },
      {
        index: '49',
        name: '49일차: 아흐마트의 미궁 하수구',
        video: 'https://www.youtube.com/embed/G3CEkti2KW0',
      },
      {
        index: '50',
        name: '50일차: 아펠리움 시민 대피',
        video: 'https://www.youtube.com/embed/8FyIj1HuaYA',
      },
      {
        index: '51',
        name: '51일차: 이교도 지휘부 타격',
        video: 'https://www.youtube.com/embed/A1pq8mbXedI',
      },
      {
        index: '52',
        name: '52일차: 아펠리움 내부 성벽 진입',
        video: 'https://www.youtube.com/embed/1fKxgQudXtc',
      },
      {
        index: '53',
        name: '53일차: 아펠리움의 결의',
        video: 'https://www.youtube.com/embed/XGWeQAqxRLs',
      },
      {
        index: '54',
        name: '54일차: 아펠리움 방어전',
        video: 'https://www.youtube.com/embed/3LQqisNHvW4',
      },
      {
        index: '55',
        name: '55일차: 페메토스 피라미드의 추격',
        video: 'https://www.youtube.com/embed/UBql3HRuGjc',
      },
      {
        index: '56',
        name: '56일차: 4인 기사단 등장',
        video: 'https://www.youtube.com/embed/mL16iceeZRo',
      },
      {
        index: '57',
        name: '57일차: 4인 기사단, 결투!',
        video: 'https://www.youtube.com/embed/IAXBoATjcbg',
      },
      {
        index: '58',
        name: '58일차: 타락한 태양 알샤함',
        video: 'https://www.youtube.com/embed/TvJfdgPzRsQ',
      },
      {
        index: '59',
        name: '59일차: 페메토스 피라미드의 결전',
        video: 'https://www.youtube.com/embed/KayNTgl7D6g',
      },
      {
        index: '60',
        name: '60일차: 파크탄 가문 연회 잠입',
        video: 'https://www.youtube.com/embed/OMe0qH8Hz6w',
      },
      {
        index: '61',
        name: '61일차: 연회의 조명 아래에서',
        video: 'https://www.youtube.com/embed/SrXyoEsMgQE',
      },
      {
        index: '62',
        name: '62일차: 모래 능선 너머로',
        video: 'https://www.youtube.com/embed/BP2VtdbZjIQ',
      },
      {
        index: '63',
        name: '63일차: 사막 탐사대 합류',
        video: 'https://www.youtube.com/embed/DWEemEubeLg',
      },
      {
        index: '64',
        name: '64일차: 벌레 굴 탐색',
        video: 'https://www.youtube.com/embed/fqkuULfUD44',
      },
      {
        index: '65',
        name: '65일차: 사막의 고양이들',
        video: 'https://www.youtube.com/embed/bPZqB3xnSuc',
      },
      {
        index: '66',
        name: '66일차: 오쉬메트의 신전을 향하여',
        video: 'https://www.youtube.com/embed/GclwchIf0Os',
      },
      {
        index: '67',
        name: '67일차: 벌레 굴의 혈투',
        video: 'https://www.youtube.com/embed/h4dWcXmMKXc',
      },
      {
        index: '68',
        name: '68일차: 세 유물이 모이다',
        video: 'https://www.youtube.com/embed/L-qO7ixSMsk',
      },
      {
        index: '69',
        name: '69일차: 영원한 일식 세토스카',
        video: 'https://www.youtube.com/embed/FxJJhk7ZifA',
      },
      {
        index: '70',
        name: '70일차: 지하굴의 결전',
        video: 'https://www.youtube.com/embed/hUSx86OJ_Xc',
      },
      {
        index: '71',
        name: '71일차: 다르고시아나 귀환',
        video: 'https://www.youtube.com/embed/ZUjTfgqLtB4',
      },
      {
        index: '72',
        name: '72일차: 대공 파틸라흐만 알현',
        video: 'https://www.youtube.com/embed/7gF3qFYnc38',
      },
      {
        index: '73',
        name: '73일차: 사막의 그림자',
        video: 'https://www.youtube.com/embed/MWG4114QX28',
      },
      {
        index: '74',
        name: '74일차: 호수 위의 결전',
        video: 'https://www.youtube.com/embed/hvKCKC2NGnQ',
      },
      {
        index: '75',
        name: '75일차: 이름없는 신전',
        video: 'https://www.youtube.com/embed/s2OaHBWw3Xo',
      },
      {
        index: '76',
        name: '76일차: 젤로이스와 다섯 용사들',
        video: 'https://www.youtube.com/embed/LjaTU3glEUM',
      },
      {
        index: '77',
        name: '77일차: 벤틀리와의 재회는...',
        video: 'https://www.youtube.com/embed/KvZ2tf2OtWo',
      },
      {
        index: '78',
        name: '78일차: 토르보스의 전령',
        video: 'https://www.youtube.com/embed/-ahj-xvzI1A',
      },
      {
        index: '79',
        name: '79일차: 최후의 전투',
        video: 'https://www.youtube.com/embed/YHV9lSBe4Jw',
      },
      {
        index: '80',
        name: '80일차: 다고시안 듀얼단 -完-',
        video: 'https://www.youtube.com/embed/ozMT3JVsBu0',
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
  {
    title: 'S0',
    label: '엑스페리온 단편',
    platform: 'ccfolia',
    npcs: [
    ],
    logs: [
      {
        index: '2023092101',
        name: '베네딕타 대수해 중망호',
        video: 'https://www.youtube.com/embed/E-gpojGJwM8',
      },
      {
        index: '2023092701',
        name: '베네딕타 대수해 턀망호',
        video: 'https://www.youtube.com/embed/hgTF17N8ROY',
      },
      {
        index: '2023092201',
        name: '중앙 제르마 협곡 1',
        video: 'https://www.youtube.com/embed/EeY8B01TEbs',
      },
      {
        index: '2023092501',
        name: '중앙 제르마 협곡 2',
        video: 'https://www.youtube.com/embed/AuQpD3r_WVI',
      },
      {
        index: '2023092802',
        name: '중앙 제르마 협곡 3',
        video: 'https://www.youtube.com/embed/ux_v4SfbY0o',
      },
      {
        index: '2023092801',
        name: '감람석 해안의 비밀 1',
        video: 'https://www.youtube.com/embed/JEe0YamBpmQ',
      },
      {
        index: '2023092901',
        name: '감람석 해안의 비밀 2',
        video: 'https://www.youtube.com/embed/kHqUiTvWz0M',
      },
      {
        index: '2023100201',
        name: '시트론 섬의 개척자들 1',
        video: 'https://www.youtube.com/embed/MXLM3Gf0Lek',
      },
      {
        index: '2023100301',
        name: '시트론 섬의 개척자들 2',
        video: 'https://www.youtube.com/embed/i0SYL-LW0Zo',
      },
      {
        index: '2023100903',
        name: '시트론 섬의 개척자들 3',
        video: 'https://www.youtube.com/embed/io-9mUh-QTo',
      },
      {
        index: '2023101001',
        name: '시트론 섬의 개척자들 4',
        video: 'https://www.youtube.com/embed/FcxPi93LZWA',
      },
      {
        index: '2023101801',
        name: '시트론 섬의 개척자들 5',
        video: 'https://www.youtube.com/embed/lYkbxrEfqxo',
      },
      {
        index: '2023102701',
        name: '시트론 섬의 개척자들 6',
        video: 'https://www.youtube.com/embed/V911Y-6GY5o',
      },
      {
        index: '2023102901',
        name: '시트론 섬의 개척자들 7',
        video: 'https://www.youtube.com/embed/xTo25V6OX64',
      },
      {
        index: '2024051302',
        name: '시트론 섬의 개척자들 8',
        video: 'https://www.youtube.com/embed/dqrJAWAgXz4',
      },
      {
        index: '2024051303',
        name: '시트론 섬의 개척자들 9',
        video: 'https://www.youtube.com/embed/xlxsJZpDdsU',
      },
      {
        index: '2023100801',
        name: '바로 갬빗이야! 턀망호',
        video: 'https://youtube.com/live/QHa3tBxyfPo?feature=share',
      },
      {
        index: '2023100901',
        name: '소환의 제단 턀망호',
        video: 'https://www.youtube.com/embed/HBP8GOGozgY',
      },
      {
        index: '2023100902',
        name: '핏빛 눈물 투기장 3-1',
        video: 'https://www.youtube.com/embed/xel5KLm6OY0',
      },
      {
        index: '2023101701',
        name: '핏빛 눈물 투기장 3-2',
        video: 'https://www.youtube.com/embed/1NdOkReYgoQ',
      },
      {
        index: '2023110101',
        name: '핏빛 눈물 투기장 4',
        video: 'https://www.youtube.com/embed/4PSittOA3Z8',
      },
      {
        index: '2023101301',
        name: '하수구 속의 발톱 1팀',
        video: 'https://www.youtube.com/embed/sfaKcRBZYls',
      },
      {
        index: '2023101602',
        name: '하수구 속의 발톱 2팀',
      },
      {
        index: '2024022602',
        name: '하늘탑을 향하여 1',
        video: 'https://www.youtube.com/embed/lGSbfGB8m3s',
      },
      {
        index: '2024030301',
        name: '하늘탑을 향하여 2',
        video: 'https://www.youtube.com/embed/5eRH51CA-Uw',
      },
      {
        index: '2024031101',
        name: '하늘탑을 향하여 3',
        video: 'https://www.youtube.com/embed/dXGFUGlDRpU',
      },
      {
        index: '2024051301',
        name: '군드렌 락시커 구출작전',
        video: 'https://www.youtube.com/embed/k9Rz7XvKPh4',
      },
      {
        index: '2024052001',
        name: '용의 영혼 1일차',
        video: 'https://www.youtube.com/embed/T8tAP0dJoFA',
      },
      {
        index: '2024052701',
        name: '용의 영혼 2일차',
        video: 'https://www.youtube.com/embed/2_M_SS_O2y8',
      },
      {
        index: '2024060201',
        name: '용의 영혼 3일차',
        video: 'https://www.youtube.com/embed/lDxmaGXrf5g',
      },
      {
        index: '2024071303',
        name: '닭들이 한 마리도 죽지 않은 날 1팀',
        video: 'https://www.youtube.com/embed/lCgFJz2iCho',
      },
      {
        index: '2024071304',
        name: '닭들이 한 마리도 죽지 않은 날 2팀',
        video: 'https://www.youtube.com/embed/DBKxL5MszEQ',
      },
      {
        index: '2024071302',
        name: '닭들이 한 마리도 죽지 않은 날 3팀',
        video: 'https://www.youtube.com/embed/GHjewPEF_lE',
      },
    ],
  },
  {
    title: 'AST',
    label: '아스트로',
    platform: 'ccfolia',
    npcs: [
    ],
    logs: [
      {
        index: '2023072201',
        name: '아스트로 ~행성 탐사자들~',
        video: 'https://www.youtube.com/embed/V7w0NlCVFw8',
      },
      {
        index: '2023101601',
        name: '아스트로 ~행성 탐사자들~ 2 1팀',
        video: 'https://www.youtube.com/embed/pO5c_NaPxO0',
      },
      {
        index: '2023102001',
        name: '아스트로 ~행성 탐사자들~ 2 2팀',
        video: 'https://www.youtube.com/embed/KDCHc5u_nh4',
      },
      {
        index: '2023101901',
        name: '아스트로 ~ 누군가의 히어로 1팀 1일차',
        video: 'https://www.youtube.com/embed/473PXRavHts',
      },
      {
        index: '2023102201',
        name: '아스트로 ~ 누군가의 히어로 1팀 2일차',
        video: 'https://www.youtube.com/embed/GUT0uVqvguU',
      },
      {
        index: '2023102501',
        name: '아스트로 ~ 누군가의 히어로 1팀 3일차',
        video: 'https://www.youtube.com/embed/R6q1szgVur8',
      },
      {
        index: '2023102601',
        name: '아스트로 ~ 누군가의 히어로 1팀 4일차',
        video: 'https://www.youtube.com/embed/9K48b4Lc8FU',
      },
      {
        index: '2023102101',
        name: '아스트로 ~ 누군가의 히어로 2팀 1일차',
        video: 'https://www.youtube.com/embed/o0uOuhzXrCc',
      },
      {
        index: '2023102301',
        name: '아스트로 ~ 누군가의 히어로 2팀 2일차',
        video: 'https://www.youtube.com/embed/8pUC1D2aNSk',
      },
      {
        index: '2023102401',
        name: '아스트로 ~ 누군가의 히어로 2팀 3일차',
        video: 'https://www.youtube.com/embed/_KUkz-mWMWI',
      },
    ],
  },
  {
    title: 'ARA',
    label: '시간선상의 아리아',
    platform: 'ccfolia',
    npcs: [
    ],
    logs: [
      {
        index: '2023122401',
        name: '시간선상의 아리아 1',
        video: 'https://www.youtube.com/embed/pwA-lRnl6JM',
      },
      {
        index: '2023122901',
        name: '시간선상의 아리아 2',
        video: 'https://www.youtube.com/embed/wxjcgDSBDIU',
      },
      {
        index: '2024010801',
        name: '시간선상의 아리아 3',
        video: 'https://www.youtube.com/embed/AZg4OeVSGvI',
      },
      {
        index: '2024011401',
        name: '시간선상의 아리아 4',
        video: 'https://www.youtube.com/embed/3xYSikI4LnM',
      },
      {
        index: '2024011801',
        name: '시간선상의 아리아 5',
        video: 'https://www.youtube.com/embed/A-mRaNT27q8',
      },
      {
        index: '2024012701',
        name: '시간선상의 아리아 6',
        video: 'https://www.youtube.com/embed/rbzCeiMwYFM',
      },
      {
        index: '2024013001',
        name: '시간선상의 아리아 켈시&마뇽',
        video: 'https://www.youtube.com/embed/nlk2RcVWfV8',
      },
      {
        index: '2024020201',
        name: '시간선상의 아리아 류월',
        video: 'https://www.youtube.com/embed/HJgHdOcrEnc',
      },
      {
        index: '2024020301',
        name: '시간선상의 아리아 7',
        video: 'https://www.youtube.com/embed/RJ5TZfcN9jM',
      },
      {
        index: '2024021201',
        name: '시간선상의 아리아 8',
        video: 'https://www.youtube.com/embed/i_fGIx0lJmk',
      },
      {
        index: '2024021801',
        name: '시간선상의 아리아 9',
        video: 'https://www.youtube.com/embed/G1wy1f86zLE',
      },
      {
        index: '2024022601',
        name: '시간선상의 아리아 10',
        video: 'https://www.youtube.com/embed/Y0BUa_Nm3QU',
      },
      {
        index: '2024031102',
        name: '시간선상의 아리아 11',
        video: 'https://www.youtube.com/embed/Zfv7mPerhhY',
      },
      {
        index: '2024040701',
        name: '시간선상의 아리아 12',
        video: 'https://www.youtube.com/embed/FwWk4J4fCpc',
      },
      {
        index: '2024041401',
        name: '시간선상의 아리아 13',
        video: 'https://www.youtube.com/embed/Yv9HC9kdl24',
      },
      {
        index: '2024050401',
        name: '시간선상의 아리아 14',
        video: 'https://www.youtube.com/embed/R9y6iyN4bMk',
      },
      {
        index: '2024050601',
        name: '시간선상의 아리아 15',
        video: 'https://www.youtube.com/embed/WHdV2uwhLg0',
      },
      {
        index: '2024051304',
        name: '시간선상의 아리아 16',
        video: 'https://www.youtube.com/embed/DGSNg-uRNp0',
      },
      {
        index: '2024060301',
        name: '시간선상의 아리아 17',
        video: 'https://www.youtube.com/embed/vU52WGRJkZc',
      },
      {
        index: '2024061001',
        name: '시간선상의 아리아 18',
        video: 'https://www.youtube.com/embed/wW5g5DW6QsQ',
      },
      {
        index: '2024062301',
        name: '시간선상의 아리아 19',
        video: 'https://www.youtube.com/embed/UMLQphbqRfk',
      },
      {
        index: '2024070201',
        name: '시간선상의 아리아 20',
        video: 'https://www.youtube.com/embed/Ry_XWHJhXdo',
      },
      {
        index: '2024071401',
        name: '시간선상의 아리아 21',
        video: 'https://www.youtube.com/embed/j7zNPYkYm4M',
      },
    ],
  },
  {
    title: 'PER',
    label: '페리아의 문장',
    platform: 'ccfolia',
    npcs: [
    ],
    logs: [
      {
        index: '2024060101',
        name: '페리아의 문장 1팀 1화: 사원의 섬',
        video: 'https://www.youtube.com/embed/PIcf_sz2jzc',
      },
      {
        index: '2024060801',
        name: '페리아의 문장 1팀 2화: 사원의 섬',
        video: 'https://www.youtube.com/embed/kz1A3nMwJVw',
      },
      {
        index: '2024061501',
        name: '페리아의 문장 1팀 3화: 사원의 섬',
        video: 'https://www.youtube.com/embed/oilNXo_HvxE',
      },
      {
        index: '2024062201',
        name: '페리아의 문장 1팀 4화: 페르하이트 채굴지',
        video: 'https://www.youtube.com/embed/TIav_6QPkbQ',
      },
      {
        index: '2024062901',
        name: '페리아의 문장 1팀 5화: 페르하이트 채굴지',
        video: 'https://www.youtube.com/embed/_tiOr-S1PUU',
      },
      {
        index: '2024070601',
        name: '페리아의 문장 1팀 6화: 페르하이트 채굴지',
        video: 'https://www.youtube.com/embed/A2Ylmzg5Zfc',
      },
      {
        index: '2024071301',
        name: '페리아의 문장 1팀 7화: 페르하이트 채굴지',
        video: 'https://www.youtube.com/embed/DMovp3QeTic',
      },
      {
        index: '2024060201',
        name: '페리아의 문장 2팀 1화: 사원의 섬',
        video: 'https://www.youtube.com/embed/_C-Q4An3R14',
      },
      {
        index: '2024060901',
        name: '페리아의 문장 2팀 2화: 사원의 섬',
        video: 'https://www.youtube.com/embed/uwscrJ3d-zA',
      },
      {
        index: '2024061601',
        name: '페리아의 문장 2팀 3화: 푸른차원 숲',
        video: 'https://www.youtube.com/embed/rc1zVKa3umg',
      },
      {
        index: '2024062302',
        name: '페리아의 문장 2팀 4화: 푸른차원 숲',
        video: 'https://www.youtube.com/embed/qayO0q1i75k',
      },
      {
        index: '2024063001',
        name: '페리아의 문장 2팀 5화: 푸른차원 숲',
        video: 'https://www.youtube.com/embed/k4T4rnrhKDE',
      },
      {
        index: '2024070701',
        name: '페리아의 문장 2팀 6화: 푸른차원 숲',
        video: 'https://www.youtube.com/embed/U5PeJCQCbHw',
      },
      {
        index: '2024071402',
        name: '페리아의 문장 2팀 7화: 푸른차원 숲',
        video: 'https://www.youtube.com/embed/1tsDn6QjCT4',
      },
    ],
  },
];
