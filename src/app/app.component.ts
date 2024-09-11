import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WikipediaService } from './wikipedia.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageListComponent, SearchBarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  pages = [];

  constructor(private wikipedia: WikipediaService) { 
  }
  
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => { 
      this.pages = response.query.search;
    });
    
  }
}
