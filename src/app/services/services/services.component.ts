import { Component } from '@angular/core';
import { IProduct } from '../services-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  products = [] as IProduct[];

  constructor() {
    this.products = [
      { pid: 101, pName: 'Smart Watch', price: 1799, description: 'Noise Pulse 2 Max Advanced Bluetooth Calling Smart Watch with 1.85 TFT and 550 Nits Brightness, Smart DND, 10 Days Battery, 100 Sports Mode, Smartwatch for Men and Women - (Midnight Blue)', imgUrl: "https://m.media-amazon.com/images/I/61+ux1NlBjL._SY450_.jpg" },
      { pid: 102, pName: 'Shoes', price: 1299, description: "Campus Mike (N) Men's Running Shoes", imgUrl: "https://m.media-amazon.com/images/I/71fvjo1LtjS._UL1500_.jpg" },
      { pid: 103, pName: "Men's Regular Shorts", price: 324, description: 'This Style has a sporty "RUNNING" print on the side. The Zipper pocket on this style is convenient to keep your mobile phone and keys', imgUrl: "https://m.media-amazon.com/images/I/31ufq-70GnL.jpg" },
      { pid: 104, pName: 'Steam Iron', price: 1740, description: 'Philips GC1905 1440-Watt Steam Iron with Spray (Blue)', imgUrl: "https://m.media-amazon.com/images/I/71SxUzhnLvL._SX522_.jpg" },
      { pid: 105, pName: 'Apple iPhone', price: 57900, description: 'Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording', imgUrl: "https://m.media-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg" },
      { pid: 106, pName: 'Buddha Polyresin Showpiece', price: 198, description: 'eCraftIndia Golden Handcrafted Palm Buddha Polyresin Showpiece (12.5 cm x 7.5 cm x 17.5 cm, Black)', imgUrl: "https://m.media-amazon.com/images/I/714Xn6vemoL._SX679_.jpg" },

    ];
  }
}
