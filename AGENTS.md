# Repository Guidelines

## Project Structure & Module Organization
- `src/` にアプリ本体。`main.ts` がブートストラップ、`app/` 配下にスタンドアロンコンポーネント・ルーティング・`app.spec.ts` の単体テストを配置。  
- グローバルスタイルは `src/styles.css`、Tailwind 設定は `tailwind.config.js`。色・フォントの拡張はここで統一管理。  
- 静的アセットは `public/`、ビルド成果物は `dist/portfolio-angular/`。  
- 設計メモや判断ログは `_docs/thinking/`、機能追加の背景は `_docs/features/`、削除履歴は `_docs/deleted/` に残す。  
- Angular CLI 設定は `angular.json`、TypeScript 設定は `tsconfig*.json` を参照。

## Build, Test, and Development Commands
- `npm install`：依存関係を取得（`package-lock.json` 固定）。  
- `npm run dev`（または `npm start`）：`ng serve` でローカル起動。デフォルト `http://localhost:4200/`、HMR 対応。  
- `npm run build`：本番ビルド。出力は `dist/portfolio-angular/`。  
- `npm test`：`ng test` 経由で Vitest を実行。CI では `npm test -- --watch=false` を推奨。  
- スキャフォールディングは `ng generate component feature-card` など Angular CLI を使用。

## Coding Style & Naming Conventions
- TypeScript/Angular: クラス名・コンポーネント名は PascalCase、ファイル・フォルダーは kebab-case、関数・変数は camelCase。テンプレートセレクターは `app-` 接頭辞を維持。  
- インデントはスペース 2。Prettier 設定で幅 100 文字・シングルクォートが既定（`package.json` の `prettier`）。`*.html` は Angular パーサーで整形。  
- Tailwind ユーティリティは可読性を意識し論理順で並べる（レイアウト→サイズ→色→状態）。共通色・フォントは `tailwind.config.js` のトークンを使用。  
- コメント・ログ・エラーメッセージは可能な限り日本語で。HTML の数値文字参照ではなく日本語を直接記載する。

## Testing Guidelines
- 単体テストは対象ファイルと同階層の `*.spec.ts` に追加。新規ロジックはテストを必須化し、既存テストは破壊しない。  
- DOM 操作は TestBed＋`fixture.detectChanges()` を用い、描画結果やイベントを検証。  
- 変更前後で `npm test -- --watch=false` を実行し、失敗時は原因と修正内容を記録。

## Commit & Pull Request Guidelines
- コミットメッセージは英語・現在形・命令形で短く（例: `Add project card component`）。  
- PR タイトルは日本語で「[修正] 〜」形式を推奨。説明には目的、主要変更、`npm test` / `npm run build` 実行結果、スクリーンショット（UI 変更時）、関連 Issue、確認者を記載。  
- マージ前にテスト・ビルド・lint（該当する場合）を完走し、不要ファイルや秘密情報が含まれていないことを確認。

## Security & Configuration Tips
- API キーやトークンをソースに埋め込まない。必要なら環境変数やデプロイ先のシークレット管理を使用。  
- 依存追加時は npm のロックファイルを更新し、`npm audit` で重大脆弱性を確認。  
- 外部スクリプトの導入時はライセンスと CSP 影響を確認。不要な polyfill や大型ライブラリは避け、初期バンドルサイズを意識する。
