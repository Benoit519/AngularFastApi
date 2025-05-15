import { Component } from '@angular/core';
import { TraitementImageService } from './services/traitement-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  traitementImagesService: TraitementImageService;
  title = 'Angular FastAPI';
  url!: string | ArrayBuffer
  formDataImage: FormData = new FormData();

  constructor(traitementImagesService: TraitementImageService) {
    this.traitementImagesService = traitementImagesService;
  }

  onFileChanged(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.url = reader.result;
        this.formDataImage.append('file', file);

      };
    }
  }

}
