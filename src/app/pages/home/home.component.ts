import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { WORKS } from '../../data/works';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';

type AccountLink = {
  label: string;
  url: string;
  icon: string;
};

type SkillItem = {
  title: string;
  detail: string;
  note?: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, SiteHeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly profileImage = '/images/profile_image.png';
  readonly nameKanji = '平 伸彦';
  readonly nameRoman = 'Taira Nobuhiko';
  readonly birth = '1986年08月25日生まれ';
  readonly hometown = '群馬県出身';

  readonly accounts: AccountLink[] = [
    { label: 'Qiita', url: 'https://qiita.com/no215', icon: '/images/qiita-icon.png' },
    { label: 'GitHub', url: 'https://github.com/tairanobuhiko', icon: '/images/github-mark.svg' },
    { label: 'X', url: 'https://x.com/tairanobuhiko', icon: '/images/logo_metaX-3.svg' },
    { label: 'Zenn', url: 'https://zenn.dev/no215', icon: '/images/logo-only.svg' },
  ];

  readonly points: string[] = [
    'C#（Blazor）/ Python（FastAPI）/ Azure をベーススタックとした自社開発企業に在職',
    '小学生向け学習サポートを目的としたローマ字タイピング習得アプリを個人開発',
    '個人開発で工夫した内容を技術ブログで発信中',
  ];

  readonly profileParagraphs: string[] = [
    '前職でVBA・GASを活用した情報ポータルツールや自動化ツールの開発など、業務効率化に携わり2022年に社長賞を受賞。自身のアイデアや周りから得たフィードバックを反映し開発したツールで喜んでくれる人がいることが嬉しく、技術をもっと深く学び社内だけではなく世の中に価値を提供できるようなサービスに関わりたいと思うようになっていきました。',
    '個人学習に加え、Web開発に必要なスキルを体系的に学びたくプログラミングスクールに通い、2024年にエンジニアへ転職。現在はAIソリューションの SaaS 開発でフロント・バック・インフラの領域に携わっています。',
    '10代・20代で音楽制作、映像制作などで培ってきたクリエイティビティとプログラミングスキルを掛け合わせ、人が喜ぶサービスづくりをして世の中に価値を発揮していきたいと考えています。',
  ];

  readonly skills: SkillItem[] = [
    { title: 'コーディング', detail: 'HTML / CSS / Tailwind CSS' },
    { title: 'フロントエンド', detail: 'JavaScript / jQuery / TypeScript / React' },
    { title: 'バックエンド', detail: 'Ruby（Ruby on Rails）/ C#（ASP.NET Core Blazor）' },
    { title: 'データベース・インフラ', detail: 'MySQL / PostgreSQL / AWS / Render / Azure' },
    {
      title: 'その他',
      detail: 'Git / GitHub / Slack / Notion / Figma',
      note: 'こちらは開発等で使用しているツールです。',
    },
  ];

  readonly skillNotes: string[] = [
    '2023年11月より半年間、プログラミングスクールでRuby on Railsを中心にWebアプリケーション開発に必要な領域を学習しました。現在のスキル感について詳細は以下の制作実績をご覧ください。',
    '各領域を比較すると特にサーバーサイドの開発に興味がありますが、ゆくゆくはフルスタック領域でプロジェクトを主導していける PM や PdM など開発をしながらビジネスサイドにも関われるようなプレイングマネージャー領域を目指したいです。現在は自社開発企業にてC#（Blazor）、Python（FastAPI）、AzureをベースとしたAIソリューションの SaaS の開発に取り組んでいます。',
  ];

  readonly works = WORKS;
}
