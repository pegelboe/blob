import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * Example taken from:
 * https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
 */
export class AppComponent implements AfterViewInit {
  @ViewChild('myCanvas', {static: false}) canvas: ElementRef;
  public canvasContext: CanvasRenderingContext2D;
  startX: number;
  startY: number;
  dx: number = 2;
  dy: number = -2;
  
  ngAfterViewInit(): void {
    this.canvasContext = this.canvas.nativeElement.getContext('2d');

    this.startX = this.canvasContext.canvas.width/2;
    this.startY = this.canvasContext.canvas.height-30;

    //this.canvasBasics();

    setInterval(() => { 
      this.drawBallStraight(); 
    }, 10);
  }

  drawBallStraight(): void {
    this.drawBall();
    this.startX += this.dx;
    this.startY += this.dy;
  }

  drawBall(): void {
    let ctx = this.canvasContext;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.arc(this.startX, this.startY, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  private canvasBasics(): void {
    let ctx = this.canvasContext;

    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(240, 160, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(160, 10, 100, 40);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();
    
  }


}


