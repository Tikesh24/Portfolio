import { Component, OnInit, HostListener,AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit,AfterViewInit {

  constructor() { }

  check: boolean = false;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('solid');
    } else {
      element.classList.remove('solid');
    }
  }

  changeNavSolid(){
    let element = document.querySelector('.navbar');
    if(this.check == false){
      element.classList.add('solid');
      this.check = true;
    }else{
      element.classList.remove('solid');
      this.check = false;
    }

  }

  ngAfterViewInit() { 

    /* Scroll up or down effect*/
    // var lastScrollTop = 0;
    // $(window).scroll(function(event){
    //    var st = $(this).scrollTop();
    //    if (st > lastScrollTop){
    //     $('.navbar').addClass('solid');
    //    } else {
    //     $('.navbar').removeClass('solid');
    //    }
    //    lastScrollTop = st;
    // });

    /* Fading and unfading effect */
    // $(document).ready(function() {
    //   // Transition effect for navbar 
    //   $(window).scroll(function() {
    //     // checks if window is scrolled more than 500px, adds/removes solid class
    //     if($(this).scrollTop() > 20) { 
    //         $('.navbar').addClass('solid');
    //     } else {
    //         $('.navbar').removeClass('solid');
    //     }
    //   });
    // });

    /* Toggling div after nav bar */

    // The function actually applying the offset
    function offsetAnchor() {
      if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 50);
      }
    }

    // Captures click events of all a elements with href starting with #
    $(document).on('click', 'a[href^="#"]', function(event) {
      // Click events are captured before hashchanges. Timeout
      // causes offsetAnchor to be called after the page jump.
      window.setTimeout(function() {
        offsetAnchor();
      }, 0);
    });

    // Set the offset when entering page with hash present in the url
    window.setTimeout(offsetAnchor, 0);
  }

  ngOnInit() {
  }

}
