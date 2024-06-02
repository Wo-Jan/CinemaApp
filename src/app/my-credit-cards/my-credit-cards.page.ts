import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-credit-cards',
  templateUrl: './my-credit-cards.page.html',
  styleUrls: ['./my-credit-cards.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MyCreditCardsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
