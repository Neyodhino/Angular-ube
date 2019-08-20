import { Component, OnInit } from '@angular/core';
import { faTruckPickup, faCheckCircle, faHourglass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructionIcon = faTruckPickup;
  completedIcon = faCheckCircle;
  uncompletedIcon = faHourglass;

  constructor() { }

  ngOnInit() {
  }

}
