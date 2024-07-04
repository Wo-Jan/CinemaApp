import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-coming-soon-3',
  templateUrl: './coming-soon-3.page.html',
  styleUrls: ['./coming-soon-3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComingSoon3Page implements OnInit {

  constructor()  { }

  ngOnInit() {
  }

}
