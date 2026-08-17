export interface CaseStudy {
  industry: string;
  title: string;
  description: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    industry: '石油・ガス',
    title: '油田ワークオーバーリグの原油汚れ洗浄',
    description:
      'ワークオーバーリグに付着した原油汚れに対し、浸漬・スプレーによる洗浄を実施。重質油汚れの剥離・分散を確認しました。',
    image: '/images/case-oilfield.svg',
  },
  {
    industry: '機械加工',
    title: '機械加工工場での日常脱脂洗浄',
    description:
      '工作機械・治具の日常メンテナンスにおける脱脂洗浄に活用。従来の溶剤系洗浄剤からの置き換え事例です。',
    image: '/images/case-machining.svg',
  },
  {
    industry: '鉄道',
    title: '鉄道機関車の部品洗浄',
    description:
      '鉄道機関車の駆動部・部品洗浄における油汚れ除去に使用。金属部品への影響を確認しながら導入されています。',
    image: '/images/case-railway.svg',
  },
  {
    industry: 'インフラ・交通',
    title: '地下鉄設備のメンテナンス洗浄',
    description:
      '地下鉄車両・関連設備の定期メンテナンスにおける洗浄作業での活用事例です。',
    image: '/images/case-subway.svg',
  },
  {
    industry: '特殊車両・防衛関連',
    title: '特殊設備の脱脂洗浄',
    description:
      '特殊車両・特殊設備における脱脂洗浄用途での使用実績です。',
    image: '/images/case-special-vehicle.svg',
  },
  {
    industry: '寒冷地対応',
    title: '低温環境（-3℃）での重質油洗浄',
    description:
      '低温環境下での重質油汚れに対する洗浄性能を確認した事例です。凝固点-8℃の設計により低温下でも運用可能です。',
    image: '/images/case-coldregion.svg',
  },
];
