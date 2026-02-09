import { useState } from 'react';
import type { Candidate } from '../App';

interface CandidateListProps {
  district: string;
  onCandidateSelect: (candidateId: string) => void;
  onBack: () => void;
  onNavigateToIssues: () => void;
}

// 拡張された候補者型
interface CandidateWithTags extends Candidate {
  tags: string[];
}

// モックデータ
const mockCandidates: CandidateWithTags[] = [
  {
    id: '1',
    name: '山田太郎',
    party: '新進党',
    description: '医療改革と教育政策に注力。地域密着型の政治を実践。',
    tags: ['医療', '教育']
  },
  {
    id: '2',
    name: '佐藤花子',
    party: '民主連合',
    description: '子育て支援の拡充と働き方改革を推進。実績多数。',
    tags: ['子育て', '教育']
  },
  {
    id: '3',
    name: '鈴木一郎',
    party: '国民党',
    description: '経済成長と環境保護の両立を目指す実務派。',
    tags: ['経済', '環境']
  },
  {
    id: '4',
    name: '田中美咲',
    party: '未来の党',
    description: 'デジタル化推進と地方創生に取り組む若手候補。',
    tags: ['経済']
  }
];

const filterTags = ['すべて', '医療', '教育', '経済', '環境', '子育て'];

export function CandidateList({ 
  district, 
  onCandidateSelect, 
  onBack,
  onNavigateToIssues 
}: CandidateListProps) {
  const [selectedFilter, setSelectedFilter] = useState('すべて');

  // フィルタリングされた候補者リスト
  const filteredCandidates = selectedFilter === 'すべて'
    ? mockCandidates
    : mockCandidates.filter(candidate => candidate.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center h-14 px-4">
          <button onClick={onBack} className="text-gray-600 mr-3">
            ← 戻る
          </button>
          <h1 className="flex-1">
            {district}の候補者
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

      {/* 候補者リスト */}
      <div className="p-4 space-y-3">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => onCandidateSelect(candidate.id)}
            >
              <div className="mb-2">
                <span className="text-sm text-gray-600">{candidate.party}</span>
              </div>
              <div className="mb-2">
                {candidate.name}
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {candidate.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {candidate.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-black">
                詳細を見る →
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            該当する候補者が見つかりません
          </div>
        )}
      </div>
    </div>
  );
}