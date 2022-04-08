import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responsiveOptions: any;
  programas:any[]

  constructor() {
this.programas=[
  
    {
			"id": "1001",		
			"name": "Viva la mañana",
			"image": "vlm.png",		
		},
    {
			"id": "10201",		
			"name": "Play",
			"image": "play.png",		
		},
    {
			"id": "1901",		
			"name": "Liberadas",
			"image": "lib.png",		
		},
  
]

}

  ngOnInit(): void {
  }

}
