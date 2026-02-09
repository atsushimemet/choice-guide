import { useState } from 'react';
import { DistrictInput } from './components/DistrictInput';
import { CandidateList } from './components/CandidateList';
import { CandidateDetail } from './components/CandidateDetail';
import { IssueList } from './components/IssueList';
import { IssueDetail } from './components/IssueDetail';
import { ComponentShowcase } from './components/ComponentShowcase';

export type Screen = 
  | 'district-input'
  | 'candidate-list'
  | 'candidate-detail'
  | 'issue-list'
  | 'issue-detail'
  | 'component-showcase';

export interface Candidate {
  id: string;
  name: string;
  party: string;
  description: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('district-input');
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [district, setDistrict] = useState<string>('');

  const handleDistrictSubmit = (districtValue: string) => {
    setDistrict(districtValue);
    setCurrentScreen('candidate-list');
  };

  const handleCandidateSelect = (candidateId: string) => {
    setSelectedCandidate(candidateId);
    setCurrentScreen('candidate-detail');
  };

  const handleIssueSelect = (issueId: string) => {
    setSelectedIssue(issueId);
    setCurrentScreen('issue-detail');
  };

  const handleBack = () => {
    if (currentScreen === 'candidate-detail') {
      setCurrentScreen('candidate-list');
    } else if (currentScreen === 'candidate-list') {
      setCurrentScreen('district-input');
    } else if (currentScreen === 'issue-detail') {
      setCurrentScreen('issue-list');
    } else if (currentScreen === 'issue-list') {
      setCurrentScreen('candidate-list');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'district-input':
        return <DistrictInput onSubmit={handleDistrictSubmit} />;
      case 'candidate-list':
        return (
          <CandidateList 
            district={district}
            onCandidateSelect={handleCandidateSelect}
            onBack={handleBack}
            onNavigateToIssues={() => setCurrentScreen('issue-list')}
          />
        );
      case 'candidate-detail':
        return (
          <CandidateDetail 
            candidateId={selectedCandidate!}
            onBack={handleBack}
          />
        );
      case 'issue-list':
        return (
          <IssueList 
            onIssueSelect={handleIssueSelect}
            onBack={handleBack}
          />
        );
      case 'issue-detail':
        return (
          <IssueDetail 
            issueId={selectedIssue!}
            onBack={handleBack}
            onCandidateSelect={handleCandidateSelect}
          />
        );
      case 'component-showcase':
        return (
          <ComponentShowcase 
            onBack={() => setCurrentScreen('district-input')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* モバイルコンテナ */}
      <div className="w-full max-w-[390px] min-h-screen bg-white relative">
        {renderScreen()}
        
        {/* ボトムナビゲーション */}
        {currentScreen !== 'district-input' && currentScreen !== 'component-showcase' && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white border-t border-gray-200">
            <div className="flex justify-around items-center h-16">
              <button
                onClick={() => setCurrentScreen('candidate-list')}
                className={`flex-1 h-full flex items-center justify-center ${
                  currentScreen === 'candidate-list' || currentScreen === 'candidate-detail'
                    ? 'text-black'
                    : 'text-gray-400'
                }`}
              >
                候補者
              </button>
              <div className="w-px h-8 bg-gray-200" />
              <button
                onClick={() => setCurrentScreen('issue-list')}
                className={`flex-1 h-full flex items-center justify-center ${
                  currentScreen === 'issue-list' || currentScreen === 'issue-detail'
                    ? 'text-black'
                    : 'text-gray-400'
                }`}
              >
                論点
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}