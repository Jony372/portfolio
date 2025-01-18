import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutMeComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit(): void {
    initFlowbite();
    if(localStorage.getItem('color-theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  changeTheme() {

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      }
    // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
      } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
      }
    }
  }
}
