import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from "gsap";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $:any;


@Component({
  selector: 'app-lamplanding',
  templateUrl: './lamplanding.component.html',
  styleUrls: ['./lamplanding.component.css']
})
export class LamplandingComponent implements OnInit {

  windowScrolled: boolean;
  options: FormGroup;
  loading: boolean=false;
  constructor(public router: Router, public fb:FormBuilder) { 
    this.options = this.fb.group({
      name:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone:['',Validators.required],
      message:['',Validators.required]
    })
    
  }
  ngOnInit() {

    $("#parallaxwrapper").mousemove(function(e) {
      parallaxIt(e, ".parallax", -15);
      parallaxIt(e, ".parallax>img", -10);
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
      parallaxIt1(e, ".parallax1>img", -10);
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
      parallaxIt1(e, ".parallax2>img", -10);
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
      parallaxIt1(e, ".parallax3>img", -10);
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
  
  contactUs(){
    console.log('jsgashdgsajg')
    console.log(this.options.value);
    let x: any;
    // use for validation checking

    for (x in this.options.controls) {
      this.options.controls[x].markAsTouched();
    }
  }
  inputUntouched(val: any) {
    this.options.controls[val].markAsUntouched();
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  scrollToTop() {
    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }

    })();
  }

}
