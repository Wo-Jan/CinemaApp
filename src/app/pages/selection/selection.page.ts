import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonBackButton, 
  IonSegment, 
  IonSegmentButton, 
  IonLabel, 
  IonButton, 
  IonIcon,
  IonDatetime,
  IonDatetimeButton,
  IonModal
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonButton,
    IonIcon,
    IonDatetime,
    IonDatetimeButton,
    IonModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectionPage implements OnInit {
  title: string = 'Selection';
  selectedDay: string = '';
  selectedTime: string = '';
  
  constructor(private router: Router) {
    addIcons ({ arrowBackOutline })
  }

  ngOnInit() { }

  selectDay(day: string) {
    this.selectedDay = day;
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  goToSeats() {
    this.router.navigate(['/seats']);
    console.log('Selected Day:', this.selectedDay);
    console.log('Selected Time:', this.selectedTime);
  }
  navigateBack() {
    this.router.navigate(['/home']);
  }
}
