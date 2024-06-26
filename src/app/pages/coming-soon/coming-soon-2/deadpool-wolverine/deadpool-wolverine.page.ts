import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-deadpool-wolverine',
  templateUrl: './deadpool-wolverine.page.html',
  styleUrls: ['./deadpool-wolverine.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DeadpoolWolverinePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
