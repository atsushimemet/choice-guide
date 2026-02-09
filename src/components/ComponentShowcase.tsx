import { useState } from 'react';

interface ComponentShowcaseProps {
  onBack: () => void;
}

export function ComponentShowcase({ onBack }: ComponentShowcaseProps) {
  const [buttonState, setButtonState] = useState('normal');
  const [progressValue, setProgressValue] = useState(60);

  return (
    <div className="min-h-screen pb-20">
      {/* ヘッダー */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center h-14 px-4">
          <button onClick={onBack} className="text-gray-600 mr-3">
            ← 戻る
          </button>
          <h1 className="flex-1">
            UIコンポーネント一覧
          </h1>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* セクション: ボタン */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            ボタン
          </h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">プライマリボタン</p>
              <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                プライマリアクション
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">セカンダリボタン</p>
              <button className="w-full py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                セカンダリアクション
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">テキストボタン</p>
              <button className="text-black hover:text-gray-600 transition-colors">
                詳細を見る →
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">無効化ボタン</p>
              <button 
                disabled 
                className="w-full py-3 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed"
              >
                無効なアクション
              </button>
            </div>
          </div>
        </section>

        {/* セクション: タグ・ラベル */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            タグ・ラベル
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">角丸タグ</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  医療
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  教育
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  経済
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  環境
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">選択可能タグ</p>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm">
                  選択中
                </button>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  未選択
                </button>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200">
                  未選択
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">ステータスラベル</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-black text-white rounded text-xs">
                  実施中
                </span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                  議論中
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                  提案段階
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                  計画中
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: カード */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            カード
          </h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">基本カード</p>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="mb-2">カードタイトル</div>
                <p className="text-sm text-gray-600">
                  カードの内容がここに表示されます。簡潔で読みやすいテキストを心がけます。
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">ホバー効果付きカード</p>
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors cursor-pointer">
                <div className="mb-2">クリック可能なカード</div>
                <p className="text-sm text-gray-600 mb-2">
                  マウスオーバーで境界線の色が変わります。
                </p>
                <div className="text-sm text-black">
                  詳細を見る →
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: 入力フィールド */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            入力フィールド
          </h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">テキスト入力</p>
              <input
                type="text"
                placeholder="テキストを入力"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">値が入力された状態</p>
              <input
                type="text"
                value="入力済みのテキスト"
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>
        </section>

        {/* セクション: プログレスバー */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            プログレスバー
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">基本プログレスバー</p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all"
                  style={{ width: `${progressValue}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>進捗</span>
                <span>{progressValue}%</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">太めのプログレスバー</p>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all"
                  style={{ width: '75%' }}
                />
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">75%</div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">進捗調整</p>
              <input
                type="range"
                min="0"
                max="100"
                value={progressValue}
                onChange={(e) => setProgressValue(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* セクション: タブ */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            タブ
          </h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">タブナビゲーション</p>
              <div className="flex border-b border-gray-200">
                <button className="flex-1 py-3 text-center text-black border-b-2 border-black">
                  タブ1
                </button>
                <button className="flex-1 py-3 text-center text-gray-400">
                  タブ2
                </button>
                <button className="flex-1 py-3 text-center text-gray-400">
                  タブ3
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: 区切り線 */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            区切り線
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">水平線</p>
              <div className="border-b border-gray-200" />
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">垂直線（例）</p>
              <div className="flex items-center gap-4 h-12">
                <div>左側</div>
                <div className="w-px h-8 bg-gray-200" />
                <div>右側</div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: タイムライン */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            タイムライン
          </h2>
          
          <div className="space-y-4">
            <div className="relative pl-6 pb-4">
              <div className="absolute left-1.5 top-2 bottom-0 w-px bg-gray-200" />
              <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full" />
              <div className="text-sm text-gray-500 mb-1">2026年2月</div>
              <div className="text-sm">最新のイベント</div>
            </div>

            <div className="relative pl-6 pb-4">
              <div className="absolute left-1.5 top-2 bottom-0 w-px bg-gray-200" />
              <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full" />
              <div className="text-sm text-gray-500 mb-1">2026年1月</div>
              <div className="text-sm">過去のイベント</div>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-2 w-3 h-3 bg-black rounded-full" />
              <div className="text-sm text-gray-500 mb-1">2025年12月</div>
              <div className="text-sm">最も古いイベント</div>
            </div>
          </div>
        </section>

        {/* セクション: レイアウト */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            レイアウト
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">2カラムレイアウト</p>
              <div className="flex gap-3">
                <div className="flex-1 border border-gray-200 rounded-lg p-4 text-center">
                  左
                </div>
                <div className="flex-1 border border-gray-200 rounded-lg p-4 text-center">
                  右
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">3カラムレイアウト</p>
              <div className="flex gap-2">
                <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center text-sm">
                  左
                </div>
                <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center text-sm">
                  中央
                </div>
                <div className="flex-1 border border-gray-200 rounded-lg p-3 text-center text-sm">
                  右
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション: テキストスタイル */}
        <section>
          <h2 className="mb-4 pb-2 border-b border-gray-200">
            テキストスタイル
          </h2>
          
          <div className="space-y-2">
            <div className="text-black">通常テキスト（黒）</div>
            <div className="text-gray-700">セカンダリテキスト（濃いグレー）</div>
            <div className="text-gray-600">説明テキスト（グレー）</div>
            <div className="text-gray-500">補助テキスト（薄いグレー）</div>
            <div className="text-gray-400">無効テキスト（最も薄いグレー）</div>
          </div>
        </section>

        {/* デザイン原則 */}
        <section className="bg-gray-50 rounded-lg p-4">
          <h2 className="mb-3">
            デザイン原則
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• モノトーン配色（白・黒・グレー）</li>
            <li>• 画像・アイコン不使用</li>
            <li>• 角丸 8〜12px</li>
            <li>• シャドウ最小限</li>
            <li>• 高可読性重視</li>
            <li>• 政治的中立性</li>
            <li>• 信頼感・透明性</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
