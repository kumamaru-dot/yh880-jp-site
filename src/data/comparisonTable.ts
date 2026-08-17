export interface ComparisonRow {
  item: string;
  petroleum: string;
  domestic: string;
  international: string;
  yonghui: string;
}

export const comparisonColumns = [
  'ガソリン・軽油・灯油',
  '国内一般ブランド（水系）',
  '国際ブランド（水系）',
  '咏輝 水系洗浄剤',
] as const;

export const comparisonTable: ComparisonRow[] = [
  {
    item: '毒性',
    petroleum: '高い（吸入・皮膚刺激あり）',
    domestic: '中程度',
    international: '低〜中程度',
    yonghui: '低い（重金属不使用）',
  },
  {
    item: '臭気',
    petroleum: '強い刺激臭',
    domestic: 'やや臭気あり',
    international: '軽微な臭気',
    yonghui: 'ほぼ無臭',
  },
  {
    item: '皮膚接触',
    petroleum: '不可（保護具必須）',
    domestic: '要注意',
    international: '要注意',
    yonghui: '低刺激・接触可',
  },
  {
    item: 'pH',
    petroleum: '該当なし',
    domestic: '強アルカリ性が多い',
    international: '中性〜弱アルカリ性',
    yonghui: '中性域で腐食性が低い',
  },
  {
    item: '水溶性',
    petroleum: 'なし（油分離が必要）',
    domestic: 'あり',
    international: 'あり',
    yonghui: 'あり（排水処理と親和性）',
  },
  {
    item: '腐食性',
    petroleum: '低いが可燃性リスクあり',
    domestic: '強アルカリにより腐食しやすい',
    international: '製品により差がある',
    yonghui: '24時間浸漬でも腐食なし',
  },
  {
    item: '残留',
    petroleum: '油膜残留あり',
    domestic: '洗剤成分が残留しやすい',
    international: '製品により差がある',
    yonghui: '拭き取り・すすぎで残留少',
  },
  {
    item: '引火点',
    petroleum: 'あり（危険物指定）',
    domestic: 'なし',
    international: 'なし',
    yonghui: 'なし',
  },
  {
    item: '発火温度',
    petroleum: '低温で引火',
    domestic: '該当性低',
    international: '該当性低',
    yonghui: '2,000℃以上',
  },
  {
    item: '保管・輸送',
    petroleum: '危険物として厳格な管理が必要',
    domestic: '一般的な水系薬品と同等',
    international: '一般的な水系薬品と同等',
    yonghui: '危険物規制の対象外で管理が容易',
  },
  {
    item: '使用条件',
    petroleum: '換気・防爆対策が必須',
    domestic: '腐食対策が必要な場合あり',
    international: '製品により異なる',
    yonghui: '常温〜高温まで幅広く対応',
  },
  {
    item: '環境性',
    petroleum: 'VOC排出・土壌汚染リスク',
    domestic: '製品により差がある',
    international: '製品により差がある',
    yonghui: 'RoHS適合・生分解性に優れる',
  },
  {
    item: '洗浄効率',
    petroleum: '油汚れに強いが作業負荷大',
    domestic: '軽度の汚れ向け',
    international: '中〜重度の汚れに対応',
    yonghui: '91〜99%（重質油にも対応）',
  },
  {
    item: '総合コスト',
    petroleum: '購入・廃棄・安全対策コスト大',
    domestic: '中程度',
    international: 'やや高価格帯',
    yonghui: '希釈使用により総合的に低コスト',
  },
];
