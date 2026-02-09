import { useState } from 'react';

interface DistrictInputProps {
  onSubmit: (district: string) => void;
}

export function DistrictInput({ onSubmit }: DistrictInputProps) {
  const [district, setDistrict] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (district.trim()) {
      onSubmit(district);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-center mb-2">
          あなたの選挙区を入力
        </h1>
        
        <p className="text-center text-gray-600 mb-8">
          お住まいの選挙区を入力してください
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="例：東京都1区"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            disabled={!district.trim()}
          >
            候補者を見る
          </button>
        </form>
      </div>
    </div>
  );
}
