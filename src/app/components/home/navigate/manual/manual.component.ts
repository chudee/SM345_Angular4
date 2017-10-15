import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Manual } from '../../../../interfaces/manual';
import { TestService } from '../../../../services/test/test.service';
 
@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  manuals: Manual[];
  step = 0;
  loading: boolean = false;
  
  constructor(
    private router: Router,
    private testService: TestService
  ) { }
  
  ngOnInit() {
    this.getManuals();
  }
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  getManuals() {
    this.loading = true;
    this.testService
        .getManuals()
        .then(manuals => {
          this.loading = false;
          this.manuals = manuals;
        })
  }

}
