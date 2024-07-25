import { Component } from '@angular/core';

@Component({
  selector: 'photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  photo =
    'https://avatars.githubusercontent.com/u/118755707?v=4';
}
