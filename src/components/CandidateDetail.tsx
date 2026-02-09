import { useEffect, useState } from 'react';

interface CandidateDetailProps {
  candidateId: string;
  onBack: () => void;
}

interface ManifestoItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface ActivityItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

// モックデータ
const candidateData: Record<string, {
  name: string;
  party: string;
  manifesto: ManifestoItem[];
  activities: ActivityItem[];
}> = {
  '1': {
    name: '山田太郎',
    party: '新進党',
    manifesto: [
      {
        id: 'm1',
        title: '地域医療の充実',
        description: '診療所の増設と医師確保のための支援金制度を創設します。',
        tags: ['医療', '地域']
      },
      {
        id: 'm2',
        title: '教育費の無償化拡大',
        description: '高等教育までの段階的な無償化を推進し、家計負担を軽減します。',
        tags: ['教育', '子育て']
      },
      {
        id: 'm3',
        title: '中小企業支援強化',
        description: '税制優遇と融資制度の拡充により、地域経済を活性化させます。',
        tags: ['経済', '地域']
      }
    ],
    activities: [
      {
        id: 'a1',
        date: '2026年1月',
        title: '地域医療シンポジウム開催',
        description: '医療関係者と住民が対話する場を設け、地域課題を共有しました。'
      },
      {
        id: 'a2',
        date: '2025年11月',
        title: '教育委員会との意見交換',
        description: '教育現場の声を聴き、政策立案に反映するための協議を実施。'
      },
      {
        id: 'a3',
        date: '2025年9月',
        title: '商工会議所訪問',
        description: '中小企業経営者から直接ヒアリングを行い、支援策を検討。'
      }
    ]
  },
  '2': {
    name: '佐藤花子',
    party: '民主連合',
    manifesto: [
      {
        id: 'm1',
        title: '子育て支援の拡充',
        description: '保育施設の増設と保育士の待遇改善を実現します。',
        tags: ['子育て', '福祉']
      },
      {
        id: 'm2',
        title: '働き方改革の推進',
        description: '長時間労働の是正と柔軟な働き方を可能にする制度を整備します。',
        tags: ['労働', '改革']
      }
    ],
    activities: [
      {
        id: 'a1',
        date: '2026年2月',
        title: '子育て世代との対話集会',
        description: '保育園待機児童問題について現場の声を直接伺いました。'
      },
      {
        id: 'a2',
        date: '2025年12月',
        title: '企業訪問キャンペーン',
        description: '働き方改革の実践企業を視察し、事例を収集。'
      }
    ]
  },
  '3': {
    name: '鈴木一郎',
    party: '国民党',
    manifesto: [
      {
        id: 'm1',
        title: '持続可能な経済成長',
        description: 'グリーン産業への投資を促進し、環境と経済を両立させます。',
        tags: ['経済', '環境']
      },
      {
        id: 'm2',
        title: '再生可能エネルギー推進',
        description: '太陽光・風力発電の導入支援と送電網の整備を進めます。',
        tags: ['環境', 'エネルギー']
      }
    ],
    activities: [
      {
        id: 'a1',
        date: '2026年1月',
        title: '環境フォーラム参加',
        description: '再生可能エネルギーの専門家と意見交換を実施。'
      }
    ]
  },
  '4': {
    name: '田中美咲',
    party: '未来の党',
    manifesto: [
      {
        id: 'm1',
        title: '行政のデジタル化',
        description: 'オンライン行政サービスを拡充し、利便性を向上させます。',
        tags: ['デジタル', '行政']
      },
      {
        id: 'm2',
        title: '地方創生プロジェクト',
        description: 'リモートワーク推進と地域への人材還流を支援します。',
        tags: ['地域', '創生']
      }
    ],
    activities: [
      {
        id: 'a1',
        date: '2026年2月',
        title: 'スタートアップ支援イベント',
        description: '若手起業家との交流会を開催し、支援策を検討。'
      }
    ]
  }
};

type Tab = 'manifesto' | 'activities';

export function CandidateDetail({ candidateId, onBack }: CandidateDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>('manifesto');
  const candidate = candidateData[candidateId] || candidateData['1'];
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [candidateId]);

  return (
    <div className="min-h-screen pb-40">
      {/* ヘッダー */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center h-14 px-4">
          <button onClick={onBack} className="text-gray-600">
            ← 戻る
          </button>
        </div>
      </div>

      {/* 候補者情報 */}
      <div className="p-6 border-b border-gray-200">
        <div className="mb-1">
          {candidate.name}
        </div>
        <div className="text-gray-600">
          {candidate.party}
        </div>
      </div>

      {/* タブ */}
      <div className="flex border-b border-gray-200 bg-white sticky top-14 z-10">
        <button
          onClick={() => setActiveTab('manifesto')}
          className={`flex-1 py-3 text-center transition-colors ${
            activeTab === 'manifesto'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-400'
          }`}
        >
          マニフェスト
        </button>
        <button
          onClick={() => setActiveTab('activities')}
          className={`flex-1 py-3 text-center transition-colors ${
            activeTab === 'activities'
              ? 'text-black border-b-2 border-black'
              : 'text-gray-400'
          }`}
        >
          活動実績
        </button>
      </div>

      {/* コンテンツ */}
      <div className="p-4 pb-6 space-y-6">
        {activeTab === 'manifesto' && (
          <div className="space-y-4">
            <div className="space-y-4">
              {candidate.manifesto.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="mb-3">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                この候補者を支援する
              </button>
            </div>
            <div className="h-16" />
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="space-y-4">
            <div className="space-y-4">
              {candidate.activities.map((item, index) => (
                <div key={item.id} className="relative pl-6 pb-4">
                  {/* タイムライン線 */}
                  {index !== candidate.activities.length - 1 && (
                    <div className="absolute left-1.5 top-2 bottom-0 w-px bg-gray-200" />
                  )}
                  
                  {/* タイムラインドット */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full" />
                  
                  <div className="text-sm text-gray-500 mb-1">
                    {item.date}
                  </div>
                  <div className="mb-2">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                この候補者を支援する
              </button>
            </div>
            <div className="h-16" />
          </div>
        )}
      </div>
    </div>
  );
}
