import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 50) {
        nav?.classList.add('bg-nav', 'shadow');
        nav?.classList.remove('bg-top', 'shadow');
      } else {
        nav?.classList.remove('bg-nav', 'shadow');
        nav?.classList.add('bg-top', 'shadow');
      }
    });
  }

}
