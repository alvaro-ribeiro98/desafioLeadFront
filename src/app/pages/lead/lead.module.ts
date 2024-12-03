import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { LeadComponent } from './lead.component';
import { ComponentsService } from 'src/app/services/componets.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LeadService } from 'src/app/services/lead.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [LeadComponent],
  providers: [
    DatePipe,
    DecimalPipe,
    ComponentsService,
    LeadService  
  ],
  exports: [LeadComponent]
})
export class LeadModule { }
export function getApiUrl() {
  return 'https://localhost:7212/api';
}
