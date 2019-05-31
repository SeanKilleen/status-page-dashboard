import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from './mat.module';
import { NgModule } from '@angular/core'
import { ServiceCardComponent } from './components/service-card/service-card.component'
import { StatusComponent } from './components/service-card/status/status.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'

@NgModule({
  declarations: [AppComponent, ServiceCardComponent, StatusComponent, DashboardComponent],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
