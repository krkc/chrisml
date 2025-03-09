import { Component, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  webApiData: Signal<string[]>;
  constructor(
    private webApiService: WebApiService
  ) {
    this.webApiData = toSignal(this.webApiService.getData(), { initialValue: ['defaultValue'] });
  }

  ngOnInit() {
    
  }
}
