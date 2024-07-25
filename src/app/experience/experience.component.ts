import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [CommonModule],
  template: `<h3>Досвід роботи:</h3>
    <ul>
        <li *ngFor="let exp of experience">{{ exp }}</li>
    </ul>`,
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience = [
    'З серпня 2020 року по грудень 2021 року працював на посаді бугалтера на часній фірмі батька.',
    'З грудня 2021 року працював в часній фірмі, де виконувались різного розряду замовлення.'
];
}
