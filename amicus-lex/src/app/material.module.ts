import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule} from '@angular/material';


@NgModule({
  imports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule],
  exports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule,  MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule],
})
export class MaterialModule { }