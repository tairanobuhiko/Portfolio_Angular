export type WorkId = 'furima' | 'word-chain';

export interface WorkRow {
  label: string;
  value: string;
  isLink?: boolean;
}

export interface WorkTable {
  title?: string;
  rows: WorkRow[];
}

export interface WorkData {
  id: WorkId;
  title: string;
  titleHtml?: string;
  stack: string;
  environment: string;
  repositoryUrl: string;
  hero: {
    pc: string;
    sp?: string;
    alt: string;
  };
  duration: string;
  productUrl?: string;
  summaryRows: WorkRow[];
  testNote?: string;
  testTables: WorkTable[];
  stopServiceMessage?: string;
  outline: string[];
  background?: string[];
  craftPoints: string[];
  futurePlans?: string[];
  aboutImages?: string[];
}

export const WORKS: WorkData[] = [
  {
    id: 'furima',
    title: 'FURIMA（フリマアプリ）',
    stack: 'Ruby / Ruby on Rails / MySQL / GitHub / Render / Visual Studio Code / draw.io',
    environment: 'Ruby / Ruby on Rails / MySQL / GitHub / Render / Visual Studio Code / draw.io',
    repositoryUrl: 'https://github.com/tairanobuhiko/furima-40102',
    hero: {
      pc: '/images/work/01/furimaApp_image.png',
      sp: '/images/work/01/furimaApp_image_sp.jpg',
      alt: 'FURIMA（フリマアプリ）',
    },
    duration: '50時間',
    productUrl: 'https://furima-40102.onrender.com/',
    summaryRows: [
      { label: '制作時間', value: '50時間' },
      { label: 'URL', value: 'https://furima-40102.onrender.com/', isLink: true },
      { label: 'ID', value: 'admin' },
      { label: 'PASS', value: '2222' },
    ],
    testTables: [
      {
        title: '購入テスト用アカウント',
        rows: [
          { label: 'mail', value: 'fuga@com' },
          { label: 'PASS', value: 'fuga7890' },
        ],
      },
      {
        title: '購入テスト用カード情報',
        rows: [
          { label: '番号', value: '4242424242424242' },
          { label: '期限', value: '08/25' },
          { label: 'CVC', value: '123' },
        ],
      },
    ],
    stopServiceMessage: '現在サービス停止中',
    outline: [
      'プログラミングスクールの最終課題制作としてフリーマーケットのアプリケーションを作成しました。ユーザーを登録すると商品を出品できるようになります。自身が出品した商品は、編集と削除をすることができます。他のユーザーが出品した商品は、クレジットカードを用いて購入することができます。',
      'クレジットカード購入機能については、PAY.JPが提供しているAPIを使用しています。',
    ],
    craftPoints: [
      'Render を利用したデプロイ環境でスリープ対策として Google Apps Script による定期通信を実装し、可用性を確保しました。',
    ],
  },
  {
    id: 'word-chain',
    title: 'しりとり画像ジェネレーター（Word Chain Image Generator）',
    titleHtml: 'しりとり画像ジェネレーター<br>（Word Chain Image Generator）',
    stack:
      'Ruby / Ruby on Rails / Tailwind CSS / JavaScript / PostgreSQL / Render / AWS S3 / StableDiffusion / OpenAI(DALL-E3) / Google Apps Script / Twitter API / Tiny_URL / GitHub / GitHub Actions / Figma / draw.io / Cursor / Google Analytics',
    environment:
      'Ruby / Ruby on Rails / Tailwind CSS / JavaScript / PostgreSQL / Render / AWS S3 / StableDiffusion / OpenAI(DALL-E3) / Google Apps Script / Twitter API / Tiny_URL / GitHub / GitHub Actions / Figma / draw.io / Cursor / Google Analytics',
    repositoryUrl: 'https://github.com/tairanobuhiko/word_chain_image_generator',
    hero: {
      pc: '/images/work/02/originalApp_image02.png',
      sp: '/images/work/02/originalApp_image_sp.jpg',
      alt: 'しりとり画像ジェネレーター（Word Chain Image Generator）',
    },
    duration: '150時間',
    productUrl: 'https://word-chain-image-generator.onrender.com/',
    summaryRows: [
      { label: '制作時間', value: '150時間' },
      { label: 'URL', value: 'https://word-chain-image-generator.onrender.com/', isLink: true },
    ],
    testNote: '（削除機能以外はゲストモードで使用可能です）',
    testTables: [
      {
        title: 'テスト用アカウント',
        rows: [
          { label: 'mail', value: 'test@com' },
          { label: 'PASS', value: 'test7890' },
        ],
      },
    ],
    stopServiceMessage: '現在サービス停止中',
    outline: [
      'ローマ字タイピングの習得を目的とした小学生向けアプリケーションです。',
      '画像生成機能が興味・動機づけとなり、プロンプトとなるしりとりをタイピング形式で行うことで結果的にローマ字タイピングの習得につながります。',
      'しりとりの結果をプロンプトとして画像生成を行い、どんな画像ができるかを楽しみながらローマ字タイピングの練習に取り組むことができます。',
    ],
    background: [
      '2020年より小学1年生からラップトップPCが貸与され幼少期からITリテラシーが求められる時代になりました。',
      'PCを扱うためには基本的なキーボードタイピングが必要で、我が子に対し早いうちからキーボードタイピングを覚えさせることが大切だと考える親御さんも多くいます。',
      '実際に私の長女がローマ字タイピングの習得ができず、かと言って「練習するのもつまらない！ローマ字も覚えたくない！！」といった課題を抱えておりました...',
      'ローマ字そのものを教えることはできるがなんとか主体的に学習につながる環境づくりをサポートできないか。',
      'といった考えから「子供たちがローマ字入力でのキーボードタイピングを習得しやすく、楽しく学べる環境を提供し、ITリテラシー向上のきっかけになることで世の中への貢献になれば」という想いで企画、開発に至りました。',
    ],
    craftPoints: [
      '〈１〉テストコード実装においてテストのたびに画像生成APIを叩く処理をエミュレートし外部APIによる依存を制御することでAPIコストを抑制しテストの安定性を向上させました。',
      '〈２〉画像生成機能において適切な生成AIモデルを選択し、ネガティブプロンプトをあらかじめ制御することで不適切な画像を生成させない仕様としました。',
      '〈３〉画像生成のリクエスト制限（429エラー）やサーバーエラー（500, 503）の対策として指数バックオフ方式（2秒〜32秒、最大5回）でリトライを行うロジックにしました。429エラーの場合は別の生成モデルのAPIへフォールバックする仕様とし、画像生成の安定性向上に努めました。',
    ],
    futurePlans: [
      'スコアリング機能：しりとりを続けたくなる要素＝タイピング練習につながる要素として検討しています。',
      '制限時間機能：ゲーム性を高める目的ですが、ペルソナである小学校低学年に対しては楽しめなくなる要素の可能性もあるため難易度選択の追加要素として検討しています。',
    ],
    aboutImages: ['/images/work/02/IMG_2645.jpg', '/images/work/02/IMG_2647.JPG'],
  },
];

export const findWorkById = (id: string | null | undefined): WorkData | undefined =>
  WORKS.find((work) => work.id === id);
