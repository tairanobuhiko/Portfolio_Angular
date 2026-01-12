import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  WORKS,
  WorkData,
  WorkId,
  WorkRow,
  WorkTable,
  findWorkById,
} from '../../data/works';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, RouterLink, SiteHeaderComponent],
  templateUrl: './work-detail.component.html',
})
export class WorkDetailComponent {
  work?: WorkData;
  others: WorkData[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') as WorkId | null;
      this.loadWork(id);
    });
  }

  trackByRow = (_: number, row: WorkRow): string => row.label;
  trackByTableTitle = (_: number, table: WorkTable): string => table.title ?? table.rows[0]?.label;

  private loadWork(id: WorkId | null): void {
    const found = findWorkById(id ?? undefined);
    if (!found) {
      this.router.navigateByUrl('/');
      return;
    }
    this.work = found;
    this.others = WORKS.filter((item) => item.id !== found.id);
    // 詳細ページ遷移時に先頭へ移動
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
