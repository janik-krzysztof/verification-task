import {animate, animation, style} from '@angular/animations';

export const fadeInAnimation = animation([
  style({opacity: 0}),
  animate('{{milliseconds}}ms', style({opacity: 1}))
]);
