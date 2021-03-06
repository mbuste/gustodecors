import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeDnaComponent } from './components/home-dna/home-dna.component';
import { HomeWorkComponent } from './components/home-work/home-work.component';
import { RebuildIndexComponent } from './components/rebuilds/rebuild-index/rebuild-index.component';
import { RebuildDesignComponent } from './components/rebuilds/rebuild-design/rebuild-design.component';
import { RebuildDetailComponent } from './components/rebuilds/rebuild-detail/rebuild-detail.component';
import { RebuildFinishingComponent } from './components/rebuilds/rebuild-finishing/rebuild-finishing.component';
import { DnaIndexComponent } from './components/dna/dna-index/dna-index.component';
import { UsComponent } from './components/dna/us/us.component';
import { BirthComponent } from './components/dna/birth/birth.component';
import { VisionComponent } from './components/dna/vision/vision.component';
import { LightIndexComponent } from './components/lighting/light-index/light-index.component';
import { LightEngineeringComponent } from './components/lighting/light-engineering/light-engineering.component';
import { LightResultsComponent } from './components/lighting/light-results/light-results.component';
import { JoinIndexComponent } from './components/join/join-index/join-index.component';
import { JoinFormComponent } from './components/join/join-form/join-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LazyimgDirective } from './lazyimg.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    HomeDnaComponent,
    HomeWorkComponent,
    RebuildIndexComponent,
    RebuildDesignComponent,
    RebuildDetailComponent,
    RebuildFinishingComponent,
    DnaIndexComponent,
    UsComponent,
    BirthComponent,
    VisionComponent,
    LightIndexComponent,
    LightEngineeringComponent,
    LightResultsComponent,
    JoinIndexComponent,
    JoinFormComponent,
    CarouselComponent,
    LazyimgDirective,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
