interface IssueDetailProps {
  issueId: string;
  onBack: () => void;
  onCandidateSelect: (candidateId: string) => void;
}

interface IssueData {
  title: string;
  status: string;
  progress: number;
  overview: string;
  background: string;
  candidates: {
    id: string;
    name: string;
    party: string;
  }[];
  options: {
    title: string;
    description: string;
    supporters: string[];
  }[];
  timeline: {
    date: string;
    event: string;
  }[];
}

// モックデータ
const issueData: Record<string, IssueData> = {
  '1': {
    title: '医療費の負担軽減',
    status: '議論中',
    progress: 65,
    overview: '医療費の自己負担額を引き下げ、誰もが安心して医療を受けられる社会を実現することを目指します。特に高齢者や慢性疾患患者の負担軽減を優先します。',
    background: '現在の医療費自己負担は、多くの世帯にとって大きな経済的負担となっています。特に高齢化が進む中、医療費の増大が家計を圧迫し、必要な治療を受けられないケースも報告されています。',
    candidates: [
      {
        id: '1',
        name: '田中太郎',
        party: '新進党'
      },
      {
        id: '2',
        name: '佐藤花子',
        party: '民主連合'
      }
    ],
    options: [
      {
        title: '自己負担率を2割から1割へ引き下げ',
        description: '段階的に自己負担率を引き下げ、最終的に1割負担を目指す',
        supporters: ['新進党', '民主連合']
      },
      {
        title: '低所得者向け医療費補助制度の拡充',
        description: '所得に応じた補助制度を充実させ、負担能力に配慮した制度設計を行う',
        supporters: ['未来の党']
      },
      {
        title: '現行制度の維持',
        description: '財政状況を鑑み、現行の負担率を維持しつつ制度の効率化を図る',
        supporters: ['国民党']
      }
    ],
    timeline: [
      {
        date: '2026年2月',
        event: '厚生労働委員会で負担軽減案が提出される'
      },
      {
        date: '2026年1月',
        event: '医療関係者団体との意見交換会を実施'
      },
      {
        date: '2025年12月',
        event: '国民アンケート調査を実施（回答数：10,000件）'
      },
      {
        date: '2025年11月',
        event: '医療費負担に関する検討委員会が発足'
      }
    ]
  },
  '2': {
    title: '教育の完全無償化',
    status: '提案段階',
    progress: 40,
    overview: '幼児教育から高等教育まで、すべての教育費を無償化し、教育格差を解消することを目指します。',
    background: '教育費の家計負担は年々増加しており、経済的理由により進学を断念するケースが社会問題となっています。',
    candidates: [
      {
        id: '3',
        name: '山田次郎',
        party: '民主連合'
      },
      {
        id: '4',
        name: '伊藤美子',
        party: '未来の党'
      }
    ],
    options: [
      {
        title: '段階的完全無償化',
        description: '5年計画で幼児教育から高等教育まで段階的に無償化を実現',
        supporters: ['民主連合', '未来の党']
      },
      {
        title: '高等教育のみ無償化',
        description: '大学・専門学校の授業料を優先的に無償化',
        supporters: ['新進党']
      }
    ],
    timeline: [
      {
        date: '2026年1月',
        event: '教育無償化法案が国会に提出される'
      },
      {
        date: '2025年10月',
        event: '文部科学省が実現可能性調査を開始'
      }
    ]
  },
  '3': {
    title: '再生可能エネルギー推進',
    status: '実施中',
    progress: 75,
    overview: '2035年までに再生可能エネルギー比率を60%まで引き上げ、持続可能な社会を実現します。',
    background: '気候変動対策の国際的な要請を受け、化石燃料依存からの脱却が急務となっています。',
    candidates: [
      {
        id: '5',
        name: '高橋三郎',
        party: '国民党'
      },
      {
        id: '6',
        name: '吉田四子',
        party: '未来の党'
      }
    ],
    options: [
      {
        title: '大規模太陽光・風力発電の推進',
        description: '国内各地に大規模発電施設を建設し、送電網を整備',
        supporters: ['国民党', '未来の党']
      },
      {
        title: '分散型エネルギーシステムの構築',
        description: '地域ごとに小規模発電設備を整備し、エネルギーの地産地消を促進',
        supporters: ['新進党', '民主連合']
      }
    ],
    timeline: [
      {
        date: '2026年2月',
        event: '再エネ比率が40%に到達'
      },
      {
        date: '2025年9月',
        event: '洋上風力発電プロジェクト3件が稼働開始'
      },
      {
        date: '2025年6月',
        event: '再生可能エネルギー促進法が成立'
      }
    ]
  },
  '4': {
    title: '待機児童ゼロ政策',
    status: '実施中',
    progress: 55,
    overview: '保育施設の増設と保育士確保により、待機児童問題を完全解決します。',
    background: '都市部を中心に待機児童問題が深刻化し、子育て世代の就労に大きな影響を与えています。',
    candidates: [
      {
        id: '7',
        name: '木村五郎',
        party: '民主連合'
      },
      {
        id: '8',
        name: '松村六子',
        party: '新進党'
      }
    ],
    options: [
      {
        title: '認可保育所の大幅増設',
        description: '向こう3年間で認可保育所を1,000施設増設',
        supporters: ['民主連合']
      },
      {
        title: '保育士待遇改善による人材確保',
        description: '保育士の給与を平均20%引き上げ、人材確保を促進',
        supporters: ['新進党', '未来の党']
      }
    ],
    timeline: [
      {
        date: '2026年1月',
        event: '新規保育施設50ヶ所が開設'
      },
      {
        date: '2025年11月',
        event: '保育士待遇改善法が成立'
      }
    ]
  },
  '5': {
    title: 'デジタル行政の実現',
    status: '計画中',
    progress: 30,
    overview: 'すべての行政手続きをオンライン化し、利便性を大幅に向上させます。',
    background: '行政手続きの煩雑さが国民の負担となっており、デジタル化による効率化が求められています。',
    candidates: [
      {
        id: '9',
        name: '鈴木七郎',
        party: '未来の党'
      },
      {
        id: '10',
        name: '藤田八子',
        party: '新進党'
      }
    ],
    options: [
      {
        title: '全手続きの完全オンライン化',
        description: '2028年までにすべての行政手続きをオンラインで完結可能に',
        supporters: ['未来の党']
      },
      {
        title: '段階的デジタル化',
        description: '利用頻度の高い手続きから優先的にオンライン化を進める',
        supporters: ['新進党', '国民党']
      }
    ],
    timeline: [
      {
        date: '2026年2月',
        event: 'デジタル行政推進本部が設置される'
      },
      {
        date: '2025年12月',
        event: '行政手続きデジタル化基本方針が策定'
      }
    ]
  },
  '6': {
    title: '中小企業支援強化',
    status: '議論中',
    progress: 50,
    overview: '税制優遇と融資制度の拡充により、中小企業の経営基盤を強化します。',
    background: '中小企業は日本経済の基盤ですが、資金調達や人材確保に課題を抱えています。',
    candidates: [
      {
        id: '11',
        name: '加藤九郎',
        party: '国民党'
      },
      {
        id: '12',
        name: '山本十子',
        party: '新進党'
      }
    ],
    options: [
      {
        title: '法人税減税',
        description: '中小企業向けの法人税率を現行の19%から15%に引き下げ',
        supporters: ['国民党', '新進党']
      },
      {
        title: '無利子融資制度の創設',
        description: '中小企業向けの無利子融資枠を新たに設定',
        supporters: ['民主連合']
      }
    ],
    timeline: [
      {
        date: '2026年1月',
        event: '中小企業支援法案が国会で審議開始'
      },
      {
        date: '2025年10月',
        event: '商工会議所との意見交換会を実施'
      }
    ]
  }
};

export function IssueDetail({ issueId, onBack, onCandidateSelect }: IssueDetailProps) {
  const issue = issueData[issueId] || issueData['1'];

  return (
    <div className="min-h-screen pb-24">
      {/* ヘッダー */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center h-14 px-4">
          <button onClick={onBack} className="text-gray-600">
            ← 戻る
          </button>
        </div>
      </div>

      {/* タイトル */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <h1 className="flex-1 mr-3">
            {issue.title}
          </h1>
          <span className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-700 whitespace-nowrap">
            {issue.status}
          </span>
        </div>
        
        {/* 進捗バー */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm text-gray-500">
            <span>推進状況</span>
            <span>{issue.progress}%</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-black transition-all"
              style={{ width: `${issue.progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* 論点概要 */}
        <section>
          <h2 className="text-sm text-gray-500 mb-2">論点概要</h2>
          <p className="text-gray-700 leading-relaxed">
            {issue.overview}
          </p>
        </section>

        {/* 背景 */}
        <section>
          <h2 className="text-sm text-gray-500 mb-2">背景</h2>
          <p className="text-gray-700 leading-relaxed">
            {issue.background}
          </p>
        </section>

        {/* 候補者 */}
        <section>
          <h2 className="text-sm text-gray-500 mb-3">候補者</h2>
          <div className="space-y-3">
            {issue.candidates.map((candidate, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="mb-2">
                  {candidate.name} ({candidate.party})
                </div>
                <button
                  className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  onClick={() => onCandidateSelect(candidate.id)}
                >
                  詳細を見る
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 選択肢 */}
        <section>
          <h2 className="text-sm text-gray-500 mb-3">主な選択肢</h2>
          <div className="space-y-3">
            {issue.options.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="mb-2">
                  {option.title}
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {option.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {option.supporters.map((supporter) => (
                    <span
                      key={supporter}
                      className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700"
                    >
                      {supporter}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 推進状況（タイムライン） */}
        <section>
          <h2 className="text-sm text-gray-500 mb-3">推進状況</h2>
          <div className="space-y-4">
            {issue.timeline.map((item, index) => (
              <div key={index} className="relative pl-6">
                {index !== issue.timeline.length - 1 && (
                  <div className="absolute left-1.5 top-2 bottom-0 w-px bg-gray-200" />
                )}
                <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full" />
                
                <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                <div className="text-sm text-gray-700">{item.event}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
