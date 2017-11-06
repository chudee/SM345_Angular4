import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Mentoring } from '../../../../interfaces/mentoring';
import { TestService } from '../../../../services/test/test.service';

@Component({
  selector: 'app-mentoring-create',
  templateUrl: './mentoring-create.component.html',
  styleUrls: ['./mentoring-create.component.css']
})
export class MentoringCreateComponent {
  img

}
