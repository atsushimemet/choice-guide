import { useState } from 'react';
import type { Issue } from '../App';

interface IssueListProps {
  onIssueSelect: (issueId: string) => void;
  onBack: () => void;
}

// 拡張された論点型
interface IssueWithTags extends Issue {
  tags: string[];
}

// モックデータ
const mockIssues: IssueWithTags[] = [
  {
    id: '1',
    title: '医療費の負担軽減',
    description: '医療費の自己負担額を引き下げ、誰もが安心して医療を受けられる社会を実現する',
    progress: 65,
    status: '議論中',
    tags: ['医療']
  },
  {
    id: '2',
    title: '教育の完全無償化',
    description: '幼児教育から高等教育まで、すべての教育費を無償化し教育格差を解消する',
    progress: 40,
    status: '提案段階',
    tags: ['教育', '子育て']
  },
  {
    id: '3',
    title: '再生可能エネルギー推進',
    description: '2035年までに再生可能エネルギー比率を60%まで引き上げる',
    progress: 75,
    status: '実施中',
    tags: ['環境', '経済']
  },
  {
    id: '4',
    title: '待機児童ゼロ政策',
    description: '保育施設の増設と保育士確保により、待機児童問題を完全解決する',
    progress: 55,
    status: '実施中',
    tags: ['子育て']
  },
  {
    id: '5',
    title: 'デジタル行政の実現',
    description: 'すべての行政手続きをオンライン化し、利便性を大幅に向上させる',
    progress: 30,
    status: '計画中',
    tags: ['経済']
  },
  {
    id: '6',
    title: '中小企業支援強化',
    description: '税制優遇と融資制度の拡充により、中小企業の経営基盤を強化する',
    progress: 50,
    status: '議論中',
    tags: ['経済']
  }
];

const filterTags = ['すべて', '医療', '教育', '経済', '環境', '子育て'];

export function IssueList({ onIssueSelect, onBack }: IssueListProps) {
  const [selectedFilter, setSelectedFilter] = useState('すべて');

  // フィルタリングされた論点リスト
  const filteredIssues = selectedFilter === 'すべて'
    ? mockIssues
    : mockIssues.filter(issue => issue.tags.includes(selectedFilter));

  const getStatusColor = (status: string) => {
    switch (status) {
      case '実施中':
        return 'bg-black text-white';
      case '議論中':
        return 'bg-gray-200 text-gray-700';
      case '提案段階':
        return 'bg-gray-100 text-gray-600';
      case '計画中':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center h-14 px-4">
          <button onClick={onBack} className="text-gray-600 mr-3">
            ← 戻る
          </button>
          <h1 className="flex-1">
            主要な論点
          </h1>
        </div>

        {/* フィルタータグ */}
        <div className="px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedFilter === tag
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 論点リスト */}
      <div className="p-4 space-y-3">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue) => (
            <div
              key={issue.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => onIssueSelect(issue.id)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1 mr-3">
                  {issue.title}
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs whitespace-nowrap ${getStatusColor(
                    issue.status
                  )}`}
                >
                  {issue.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                {issue.description}
              </p>

              {/* タグ */}
              <div className="flex flex-wrap gap-2 mb-3">
                {issue.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 進捗バー */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>推進状況</span>
                  <span>{issue.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black transition-all"
                    style={{ width: `${issue.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            該当する論点が見つかりません
          </div>
        )}
      </div>
    </div>
  );
}