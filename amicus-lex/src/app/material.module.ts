import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule} from '@angular/material';


@NgModule({
  imports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule],
  exports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule,  MatStepperModule],
})
export class MaterialModule { }