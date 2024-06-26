import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-in-a-vionlent-nature',
  templateUrl: './in-a-vionlent-nature.page.html',
  styleUrls: ['./in-a-vionlent-nature.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InAVionlentNaturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
