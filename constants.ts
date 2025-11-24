import { Location, ArtWork } from './types';

export const LOCATIONS: Location[] = [
  {
    id: 'westlake',
    name: '泉州西湖公园',
    description: '水光潋滟，园林典范。西湖公园不仅是生态休憩之地，更是传统闽南园林与现代景观设计的融合样本。其蜿蜒的栈道与湖心亭为形态设计提供了流线灵感。',
    imageUrl: 'https://picsum.photos/seed/westlake/800/600',
    features: ['园林景观', '水体形态', '生态设计'],
  },
  {
    id: 'zimao',
    name: '晋江紫帽山',
    description: '紫帽凌霄，钟灵毓秀。作为泉州四大名山之一，紫帽山的自然肌理、植被色彩以及山间的摩崖石刻，为自然主义风格的产品设计提供了丰富的材质与纹理参考。',
    imageUrl: 'https://picsum.photos/seed/zimao/800/600',
    features: ['自然肌理', '原生材质', '山林色彩'],
  },
  {
    id: 'crafts',
    name: '莆田工艺美术城',
    description: '工匠精神，艺韵流长。汇聚了木雕、玉雕、金银首饰等顶尖工艺。这里是研究传统制造工艺与现代产品设计结合的最佳田野调查地。',
    imageUrl: 'https://picsum.photos/seed/crafts/800/600',
    features: ['传统工艺', '精细雕刻', '材质创新'],
  },
  {
    id: 'nangshan',
    name: '莆田囊山寺',
    description: '古刹禅意，建筑瑰宝。囊山寺的建筑制式、斗拱结构以及其蕴含的佛教禅宗美学，为极简主义与富有东方神韵的家居产品设计提供了深厚的文化底蕴。',
    imageUrl: 'https://picsum.photos/seed/nangshan/800/600',
    features: ['建筑结构', '禅宗美学', '空间布局'],
  },
];

export const MOCK_WORKS: ArtWork[] = [
  {
    id: 'w1',
    title: '湖韵·茶具组',
    studentName: '张晓明',
    locationId: 'westlake',
    description: '提取西湖波纹的流线形态，结合透明树脂与陶瓷。',
    imageUrl: 'https://picsum.photos/seed/art1/600/600',
    category: 'Ceramic',
  },
  {
    id: 'w2',
    title: '紫帽·层峦灯具',
    studentName: '李思',
    locationId: 'zimao',
    description: '模拟紫帽山层叠的山峦轮廓，利用光影营造山间晨雾感。',
    imageUrl: 'https://picsum.photos/seed/art2/600/600',
    category: 'Wood',
  },
  {
    id: 'w3',
    title: '雕刻时光·音响',
    studentName: '王伟',
    locationId: 'crafts',
    description: '借鉴莆田木雕的镂空技艺，设计具有复古韵味的蓝牙音响。',
    imageUrl: 'https://picsum.photos/seed/art3/600/600',
    category: 'Wood',
  },
  {
    id: 'w4',
    title: '禅意·收纳盒',
    studentName: '陈静',
    locationId: 'nangshan',
    description: '受囊山寺建筑斗拱启发，采用榫卯结构的桌面收纳系统。',
    imageUrl: 'https://picsum.photos/seed/art4/600/600',
    category: 'Mixed',
  },
  {
    id: 'w5',
    title: '石语·镇纸',
    studentName: '刘强',
    locationId: 'zimao',
    description: '结合紫帽山摩崖石刻的字体笔触，设计的现代办公文具。',
    imageUrl: 'https://picsum.photos/seed/art5/600/600',
    category: 'Metal',
  },
  {
    id: 'w6',
    title: '影·香薰炉',
    studentName: '赵敏',
    locationId: 'nangshan',
    description: '提取寺庙香火缭绕的意象，结合现代金属工艺。',
    imageUrl: 'https://picsum.photos/seed/art6/600/600',
    category: 'Metal',
  },
];
