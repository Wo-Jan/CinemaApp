import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-in-a-violent-nature',
  templateUrl: './in-a-violent-nature.page.html',
  styleUrls: ['./in-a-violent-nature.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InAViolentNaturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
