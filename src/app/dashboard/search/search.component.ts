import { Component, OnInit } from '@angular/core';
import { faSearch, faTruckPickup} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchIcon = faSearch;

  constructor() { }

  ngOnInit() {
  }

}
