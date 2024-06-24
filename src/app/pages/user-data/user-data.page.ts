import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonButton,
  IonList,
  IonIcon,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons,
    IonButton,
    IonList,
    IonIcon,
    IonItem,
    IonInput
  ]
})
export class UserDataPage implements OnInit {

  title: string = 'User data';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  navigateBack() {
    this.router.navigate(['/seats']);
  }

}
