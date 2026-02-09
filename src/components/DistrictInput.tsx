import { useState } from 'react';

type Municipality = {
  name: string;
  districts: string[];
};

type Prefecture = {
  name: string;
  municipalities: Municipality[];
};

const districtOptions: Prefecture[] = [
  {
    name: '北海道',
    municipalities: [
      {
        name: '札幌市中央区',
        districts: ['北海道第1区', '北海道第2区'],
      },
      {
        name: '旭川市',
        districts: ['北海道第6区'],
      },
    ],
  },
  {
    name: '東京都',
    municipalities: [
      {
        name: '千代田区',
        districts: ['東京第1区'],
      },
      {
        name: '新宿区',
        districts: ['東京第10区', '東京第11区'],
      },
    ],
  },
  {
    name: '大阪府',
    municipalities: [
      {
        name: '大阪市北区',
        districts: ['大阪第1区'],
      },
      {
        name: '堺市',
        districts: ['大阪第16区', '大阪第17区'],
      },
    ],
  },
];

interface DistrictInputProps {
  onSubmit: (district: string) => void;
}

export function DistrictInput({ onSubmit }: DistrictInputProps) {
  const [prefecture, setPrefecture] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [district, setDistrict] = useState('');

  const selectedPrefecture = districtOptions.find((option) => option.name === prefecture);
  const selectedMunicipality = selectedPrefecture?.municipalities.find(
    (option) => option.name === municipality
  );

  const handlePrefectureChange = (value: string) => {
    setPrefecture(value);
    setMunicipality('');
    setDistrict('');
  };

  const handleMunicipalityChange = (value: string) => {
    setMunicipality(value);
    setDistrict('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (district) {
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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">1. 都道府県</label>
              <select
                value={prefecture}
                onChange={(e) => handlePrefectureChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white"
              >
                <option value="">選択してください</option>
                {districtOptions.map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">2. 市区町村</label>
              <select
                value={municipality}
                onChange={(e) => handleMunicipalityChange(e.target.value)}
                disabled={!prefecture}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white disabled:bg-gray-100 disabled:text-gray-500"
              >
                <option value="">
                  {prefecture ? '選択してください' : '先に都道府県を選択'}
                </option>
                {selectedPrefecture?.municipalities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">3. 選挙区</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                disabled={!municipality}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 bg-white disabled:bg-gray-100 disabled:text-gray-500"
              >
                <option value="">
                  {municipality ? '選択してください' : '先に市区町村を選択'}
                </option>
                {selectedMunicipality?.districts.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {district && (
            <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700">
              選択された選挙区：<span className="font-semibold">{district}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            disabled={!district}
          >
            候補者を見る
          </button>
        </form>
      </div>
    </div>
  );
}
