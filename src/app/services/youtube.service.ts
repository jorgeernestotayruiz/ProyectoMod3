import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeUrl: string = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUMCQlw54oqPMRnKKRjsRnYA&key=AIzaSyCXa0JoQLE9Y5edB1FcqO-xknHEMfOUhi4';

  constructor(public http:HttpClient) {
    console.log('listo')
   }

   getVideos () {

    return this.http.get(this.youtubeUrl)
   }
}
