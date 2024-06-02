import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton,
  IonIcon,
  NavController
} from '@ionic/angular/standalone';
import { cardOutline, ticketOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButton,
    IonIcon,
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage {

  constructor(private navCtrl: NavController) { 
    addIcons({ ticketOutline, cardOutline});
  }

  navigateToMyTickets() {
    this.navCtrl.navigateForward("/my-tickets");
  }

  navigateToMyCreditCards() {
    this.navCtrl.navigateForward("/my-credit-cards");
  }

  navigateToAboutUs() {
    this.navCtrl.navigateForward("/about-us");
  }
}
