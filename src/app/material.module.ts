import { NgModule } from '@angular/core';
import { MatToolbarModule,
         MatButtonModule,
         MatProgressBarModule,
         MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule
  ]
})

export class MaterialModule {}
