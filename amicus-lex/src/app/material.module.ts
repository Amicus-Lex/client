import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule} from '@angular/material';


@NgModule({
  imports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule],
  exports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule,  MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule],
})
export class MaterialModule { }