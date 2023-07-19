import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videos:any[]=[];
  
  constructor(private youtu:YoutubeService){
    this.youtu.getVideos()
    .subscribe((data: any)=>{
      console.log(data.items)
      this.videos=data.items;
    });

  }

}
