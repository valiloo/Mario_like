import { Directive, HostBinding, HostListener } from '@angular/core';

export  enum KEY_CODE{
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Directive({
  selector: '[appPeach]'
})
export class PeachDirective {
bouger :number =10
readonly: number =0
vertical:number=0
horizontal:number =0
position:any; //start position for the image slicer
interval: any = 1000 ; //100 ms of interval for the setInterval()
tID: any 
@HostBinding ('style.transform') mytransformation : any
@HostBinding('style.backgroundPosition') animatedsprite : any
  constructor() { }

@HostListener ('window:keyup', [('$event')]) handleKeyboardEvent (event: KeyboardEvent){

  
  if (event.keyCode === KEY_CODE.RIGHT_ARROW){
  
    this.position = 58
    ; 
    //start position for the image slicer
    ; //100 ms of interval for the setInterval()
    
    this.tID = setInterval ( () => {
    
    this.animatedsprite = 
    `-${this.position}px 0px`; 
    //we use the ES6 template literal to insert the variable "position"
    
    if (this.position < 351)
    { this.position = this.position + 58;}
    //we increment the position by 58 each time
    else
    { this.position = 56; }
    //reset the position to 256px, once position exceeds 1536px
    
    }
    , this.interval ); //end of setInterval

this.horizontal+=this.bouger;
    
  }
  if (event.keyCode === KEY_CODE.LEFT_ARROW){
    
    this.horizontal-=this.bouger;
    
      }

  this.mytransformation = "translate("+this.horizontal + "px ,"+this.vertical +"px)";


}

  

}

