import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from "gsap";

declare var $:any;


@Component({
  selector: 'app-lamplanding',
  templateUrl: './lamplanding.component.html',
  styleUrls: ['./lamplanding.component.css']
})
export class LamplandingComponent implements OnInit {
  
  
  // loading: boolean;
  constructor(public router: Router) { 
    
    
  }

  ngOnInit() {

    $("#parallaxwrapper").mousemove(function(e) {
      parallaxIt(e, ".parallax", -15);
      parallaxIt(e, ".parallax>img", -5);
    });
     
    function parallaxIt(e, target, movement) {
      var $this = $("#parallaxwrapper");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
    
      gsap.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

    $("#parallaxwrapper1").mousemove(function(e) {
      parallaxIt1(e, ".parallax1", -15);
      parallaxIt1(e, ".parallax1>img", -5);
    });

    function parallaxIt1(e, target, movement) {
      var $this = $("#parallaxwrapper1");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
    
      gsap.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

    $("#parallaxwrapper2").mousemove(function(e) {
      parallaxIt1(e, ".parallax2", -15);
      parallaxIt1(e, ".parallax2>img", -5);
    });

    function parallaxIt2(e, target, movement) {
      var $this = $("#parallaxwrapper2");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
    
      gsap.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
    

    $("#parallaxwrapper3").mousemove(function(e) {
      parallaxIt1(e, ".parallax3", -15);
      parallaxIt1(e, ".parallax3>img", -5);
    });

    function parallaxIt3(e, target, movement) {
      var $this = $("#parallaxwrapper3");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
    
      gsap.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

  }

}
