import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  selectedTab(e) {
    switch (e.index) {
        case 0:
            this.router.navigateByUrl('/admin/(user:user)');
            break;
        case 1:
            this.router.navigateByUrl('/admin/(report:report)');
            break;
        case 2:
            this.router.navigateByUrl('/admin/(mentoring-setting:mentoring-setting)');
            break;
        case 3:
            this.router.navigateByUrl('/admin/(mentoring-list:mentoring-list)');
            break;
        case 4:
            this.router.navigateByUrl('/admin/(survey-setting:survey-setting)');
            break;
        case 5:
            this.router.navigateByUrl('/admin/(survey-result:survey-result)');
            break;
        case 6:
            this.router.navigateByUrl('/admin/(excel:excel)');
            break;
      default:
          console.log('material-design-mdtabs-with-router');
          break;
      }
  }

}
