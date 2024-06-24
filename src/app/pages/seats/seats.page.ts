import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton,
  IonProgressBar,
  IonButtons,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone'

interface Seat {
  id: number;
  status: 'available' | 'reserved' | 'selected';
}

@Component({
  selector: 'app-seats',
  templateUrl: './seats.page.html',
  styleUrls: ['./seats.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    CommonModule,
    IonProgressBar,
    IonButtons,
    IonIcon,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol
  ]

})
export class SeatsPage {
  title: string = 'Seats';
  seats: Seat[][] = [];
  selectedSeats: Seat[] = [];

  constructor(private router: Router) {
    this.initializeSeats();
  }

  selectSeat(seat: Seat) {
    // Lógica para seleccionar/deseleccionar asientos
    if (seat.status === 'available') {
      seat.status = 'selected';
      this.selectedSeats.push(seat);
    } else if (seat.status === 'selected') {
      seat.status = 'available';
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    }
  }


  private initializeSeats() {
    // Ejemplo de inicialización de asientos
    const totalRows = 3;
    const seatsPerRow = 8;
    let seatId = 1;

    for (let row = 0; row < totalRows; row++) {
      const rowSeats: Seat[] = [];
      for (let col = 0; col < seatsPerRow; col++) {
        // Ejemplo de estado inicial, ajusta según tu lógica
        const status = Math.random() > 0.5 ? 'available' : 'reserved';
        rowSeats.push({ id: seatId++, status });
      }
      this.seats.push(rowSeats);
    }
  }

  goToUserData() {
    this.router.navigate(['/user-data'], { state: { selectedSeats: this.selectedSeats } });
    console.log('Selected seats:', this.selectedSeats);
  }
  navigateBack() {
    this.router.navigate(['/selection']);
  }
}
