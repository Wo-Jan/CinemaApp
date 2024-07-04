import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.page.html',
  styleUrls: ['./coming-soon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComingSoonPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  goComingSoon1() {
    this.navCtrl.navigateForward("/coming-soon-1");
  }

  goComingSoon2() {
    this.navCtrl.navigateForward("/coming-soon-2");
  }

  goComingSoon3() {
    this.navCtrl.navigateForward("/coming-soon-3");
  }

  goComingSoon4() {
    this.navCtrl.navigateForward("/coming-soon-4");
  }

  goComingSoon5() {
    this.navCtrl.navigateForward("/coming-soon-5");
  }

  goComingSoon6() {
    this.navCtrl.navigateForward("/coming-soon-6");
  }

  ngOnInit() {
  }

}
