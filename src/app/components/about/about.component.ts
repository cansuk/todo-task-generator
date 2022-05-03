import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // subscription: Subscription;
  btnVisible?: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
