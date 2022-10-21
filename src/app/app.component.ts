import { Component } from '@angular/core';
import { Video } from './models/video';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it255';
  public videos: Video[] = [];
  private _links: string[] = [
    'YiUQE5bJKFU',
    'B32yjbCSVpU',
    'yG0oBPtyNb0',
    'wvUQcnfwUUM',
    'YiUQE5bJKFU',
    'qhZULM69DIw',
    'yG0oBPtyNb0'
  ]
  searchText: string;

  constructor(private _youtube: YoutubeService) {
    this.searchText = "";
    for (let i = 0; i < 6; i++) {
      this.videos.push(this.getVideoDetails(this._links[i]));
    }
  }

  private getVideoDetails(id: string): Video {
    return this._youtube.getVideoDetails(id);
  }

  public deleteVideo(video: Video) {
    this.videos = this.videos.filter(item => {
      return item.title !== video.title
    })
  }

  public updateVideo(video: Video){
    console.log('hello!');
  }
}
