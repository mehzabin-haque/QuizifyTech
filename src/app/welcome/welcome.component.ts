import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
// import tailwind;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  xmlns = 'http://www.w3.org/2000/svg';
  xlinkns = 'http://www.w3.org/1999/xlink';
  whiteContainer: any;
  yolkContainer: any;
  allWhites: any;
  allYolks: any;
  tl: any;
  mainTl: any;

  constructor() {}

//   ngOnInit() {
//     this.whiteContainer = document.querySelector('.whiteContainer');
//     this.yolkContainer = document.querySelector('.yolkContainer');
//     this.allWhites = document.querySelectorAll('.whiteContainer circle');
//     this.allYolks = document.querySelectorAll('.yolkContainer use');
    
//     gsap.set('svg', {
//       visibility: 'visible'
//     });
    
//     gsap.set([this.allWhites, this.allYolks], {
//       transformOrigin: '50% 50%'
//     });
    
//     const mainTl = gsap.timeline({ repeat: -1 });

// for(let i = 0; i < 4; i++){
 
//   gsap.set(this.allYolks[i], {
//     svgOrigin: (Number(this.allYolks[i].getAttribute('x'))+20.5) + ' ' + (Number(this.allYolks[i].getAttribute('y'))+20.5)
//   }); 
 
//   const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
//   tl.from(this.allWhites[i], {
//       duration: 1,
//       scaleX: -1,
//       ease: 'elastic.out(0.7, 0.7)'
//     })
//     .from(this.allWhites[i], {
//       duration: 1,
//       scale: 0,
//       ease: 'elastic.out(0.16, 0.7)',
//     }, '-=1')
//     .to(this.allWhites[i], {
//       duration: 1,
//       scale: 0,
//       ease: 'circ.inOut'
//     })
//     .from(this.allYolks[i], {
//       duration: 0.7,
//       scaleX: -1.3,
//       ease: 'elastic.out(0.64, 0.57)',
//     }, '-=2')
//     .from(this.allYolks[i], {
//       duration: 1,
//       scaleY: 0,
//       ease: 'elastic.out(1.2, 0.77)',
//     }, '-=2')
//     .to(this.allYolks[i], {
//       duration: 1,
//       scale: 0,
//       ease: 'expo.inOut'
//     }, '-=1');
 
//   mainTl.add(tl, i/2);
// }

// gsap.set('svg', {
//   visibility: 'visible'
// });

// gsap.set([this.allWhites, this.allYolks], {
//   transformOrigin: '50% 50%'
// });

// gsap.globalTimeline.seek(100);
// gsap.globalTimeline.timeScale(1.2);
//   }

  onClick() {
    console.log('Button clicked');
  }
  
}

