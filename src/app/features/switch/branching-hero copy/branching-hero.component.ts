import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

export interface Branch {
  id: string;
  label: string;
  subtitle?: string;
  href: string;            // full URL or app route
  accent?: string;         // CSS color for accents
  tag?: string;            // small tag on image
}

export interface BranchingData {
  kicker?: string;
  title?: string;
  lead?: string;
  branches: Branch[];
  layout?: { desktopSpan?: number[] }; // e.g. [6,6]
}

@Component({
  selector: 'app-branching-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './branching-hero.component.html',
  styleUrls: ['./branching-hero.component.scss']
})
export class BranchingHeroComponent {
  @Input() data!: BranchingData;

  year = new Date().getFullYear();

  desktopSpan(index: number): string {
    const spans = this.data?.layout?.desktopSpan || new Array(this.data?.branches?.length || 0).fill(6);
    const span = spans[index] || 6;
    return `span ${span}`;
  }

  isExternal(href: string): boolean {
    return /^https?:\/\//i.test(href);
  }

  accentBorder(hex?: string): string {
    return `1px solid ${hex || '#ffffff'}`;
  }
}
