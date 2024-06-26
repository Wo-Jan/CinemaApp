import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quien-teme-al-pueblo-de-hitler',
  templateUrl: './quien-teme-al-pueblo-de-hitler.page.html',
  styleUrls: ['./quien-teme-al-pueblo-de-hitler.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuienTemeAlPuebloDeHitlerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
