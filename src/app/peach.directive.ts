import { Directive, HostBinding, HostListener } from '@angular/core';

export  enum KEY_CODE{
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Directive({
  selector: '[appPeach]'
})
export class PeachDirective {
bouger :number =5
readonly: number =0
vertical:number=0
horizontal:number =0
position:any = 53
tID: any
fps: any = 20

@HostBinding ('style.transform') mytransformation : any = "scaleX(-1)"
@HostBinding('style.backgroundPosition') animatedsprite : any



  constructor() { }

@HostListener ('window:keydown', [('$event')]) handleKeyboardEvent (event: KeyboardEvent){

  
  if (event.keyCode === KEY_CODE.RIGHT_ARROW){
  
    this.tID = () => {

  

    this.animatedsprite =  `-${this.position}px 0px`; 
    this.position +=53
    
    if (this.position >= 351)


    {
      this.position = 53;
    
    }

  }
    
    this.horizontal+=this.bouger;
    this.mytransformation = "translate("+this.horizontal + "px ,"+this.vertical +"px)";

    requestAnimationFrame(this.tID)
  }
  if (event.keyCode === KEY_CODE.LEFT_ARROW){
    
    this.tID = () => {
      
      this.animatedsprite =  `-${this.position}px 0px`; 
      this.position +=53
      
      if (this.position >= 351)
  
  
      {
        this.position = 53;
      }
  
      } 

      this.horizontal-=this.bouger;
      this.mytransformation = "translate("+this.horizontal + "px ,"+this.vertical +"px)";
  
      requestAnimationFrame(this.tID())
    }
  }
}

  



