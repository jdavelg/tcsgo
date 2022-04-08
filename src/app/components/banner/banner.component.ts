import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() banners: any[]; // decorate the property with @Input()

  constructor() {
   
  }

  ngOnInit(): void {
  }

}
