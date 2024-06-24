import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader } from '@ionic/angular/standalone'


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [ 
    IonHeader 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckoutPage {
  title: string = 'Checkout';
  selectedSeats: number[] = [];
  location: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedSeats = navigation.extras.state['selectedSeats'];
    }
  }

  navigateBack() {
    this.router.navigate(['/user-data']);
  }
  goToInvoice() {
    this.router.navigate(['/invoice']);
  }
  goToConfirmation() {
    this.router.navigate(['/confirmation']);
  }
}
