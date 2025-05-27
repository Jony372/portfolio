import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  linkedin = 'https://www.linkedin.com/in/jony372/';
  github = 'https://github.com/Jony372';
  instagram = "https://www.instagram.com/jonyta.raw/"
  private text = 'jony16344@gmail.com';
  private Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: '#f0fff1',
    text: this.text,
    color: '#330069',
    iconColor: '#330069'
  });

  copyToClipboard() {
    navigator.clipboard.writeText(this.text)
      .then(() => {
        this.Toast.fire({
          icon: 'success',
          title: 'Correo copiado al portapapeles'
        })
      })
      .catch((error) => {
        this.Toast.fire({
          icon: 'error',
          title: 'Error al copiar el correo'
        })
      });
  }

}
