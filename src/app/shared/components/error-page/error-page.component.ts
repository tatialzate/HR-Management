import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  seconds = 3;
  constructor(private router: Router) { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.seconds -= 1;
      setTimeout(() => {
        this.router.navigate(['/login']);
        clearInterval(interval);
      }, 2000);
    }, 1000);
  }
}
