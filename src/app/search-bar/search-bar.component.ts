import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() submitted = new EventEmitter<string>();

  term = '';

  onInput(event : Event ) { 
    this.term = (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();  // prevent form from default submitting
    this.submitted.emit(this.term);
  }

}
