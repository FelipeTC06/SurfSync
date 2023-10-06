import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from "../ui/layout/layout.component";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CommonModule, RouterModule, LayoutComponent]
})
export class DashboardComponent {

  public imageCloudRain!: SafeResourceUrl;
  public imageMoonCloudBolt!: SafeResourceUrl;
  public imageSunCloud!: SafeResourceUrl;
  public imageWind!: SafeResourceUrl;
  public imageMareAlta!: SafeResourceUrl;
  public imageMareBaixa!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit() {
    this.loadImagens();
  }

  private loadImagens() {
    this.imageCloudRain = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/weather icons/cloud-rain.png');
    this.imageMoonCloudBolt = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/weather icons/moon-cloud-bolt.png');
    this.imageSunCloud = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/weather icons/sun-cloud.png');
    this.imageWind = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/weather icons/wind.png');
    this.imageMareAlta = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/weather icons/mare-alta.png');
    this.imageMareBaixa = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/weather icons/mare-baixa.png');
  }

}
