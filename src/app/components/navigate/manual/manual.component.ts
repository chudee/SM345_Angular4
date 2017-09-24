import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Manual } from './manual';
import { TestService } from '../../../services/test/test.service';
 
@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  manuals: Manual[];

  constructor(
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.getManuals();
  }

  getManuals() {
    this.testService
        .getManuals()
        .then(manuals => this.manuals = manuals)
  }

}
