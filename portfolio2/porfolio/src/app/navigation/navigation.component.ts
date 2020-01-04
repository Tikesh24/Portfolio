import { Component, OnInit , AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit,AfterViewInit {

  constructor() { }

  check:boolean = true;

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
    $(document).ready(function() {
      // Transition effect for navbar 
      $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 20) { 
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
      });
    });

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
