import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatDialogModule} from '@angular/material';


@NgModule({
  imports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule, MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatDialogModule],
  exports: [ MatSidenavModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatProgressBarModule,  MatStepperModule, MatTabsModule, MatSelectModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatDialogModule],
})
export class MaterialModule { }