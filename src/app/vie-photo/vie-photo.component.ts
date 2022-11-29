import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vie-photo',
  templateUrl: './vie-photo.component.html',
  styleUrls: ['./vie-photo.component.css']
})
export class ViePhotoComponent {
  constructor(private api:ApiService){
    api.viePhoto().subscribe(
      (response) =>
      {
        this.data = response;
      }
    )

  }

  data:any = []

}
