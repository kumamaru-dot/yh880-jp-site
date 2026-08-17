export interface Product {
  code: string;
  name: string;
  category: string;
  description: string;
  uses: string[];
  image: string;
}

export const products: Product[] = [
  {
    code: 'YH880-1',
    name: '金属用 環境対応型水系洗浄剤',
    category: '精密加工・ハイテク産業向け',
    description:
      '精密機器や焼付塗装面、特殊コーティングなど、繊細な表面を傷めずに洗浄することを重視した金属用グレードです。',
    uses: [
      '精密機器・実験室用精密機器の洗浄',
      '焼付塗装面の脱脂・清浄化',
      '特殊コーティング部品の洗浄',
    ],
    image: '/images/product-yh880-1.svg',
  },
  {
    code: 'YH880-2',
    name: '工業用 環境対応型水系洗浄剤',
    category: '石油・ガス関連設備向け',
    description:
      '油田・油井や石油化学プラントで使用される工具・機器の重質油汚れに対応する、洗浄力を重視した工業用グレードです。',
    uses: [
      '油田・油井、石油化学プラントの各種工具',
      '掘削・探査機器、特殊車両の脱脂',
      '原油を含む重質油汚れの洗浄',
    ],
    image: '/images/product-yh880-2.svg',
  },
  {
    code: 'YH880-3',
    name: '機械設備用 環境対応型水系洗浄剤',
    category: '大型設備・特殊車両向け',
    description:
      '機械加工・製造工程から自動車製造ライン、船舶・海洋設備まで、幅広い現場での定常的な脱脂洗浄をカバーします。',
    uses: [
      '大型設備・特殊車両の脱脂',
      '機械加工/製造工程、工作機械の保守',
      '自動車製造ライン、船舶・海洋設備',
    ],
    image: '/images/product-yh880-3.svg',
  },
];
