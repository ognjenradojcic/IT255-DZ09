import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Video } from '../models/video';

export const YOUTUBE_API_KEY =
  'AIzaSyBcgpGZQLBjLWz2faY2Cq1Zv_rbPlBf-Ak';
export const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/videos';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  _apiKey = "AIzaSyBcgpGZQLBjLWz2faY2Cq1Zv_rbPlBf-Ak";
  _apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(private _http: HttpClient,
   ) { }

  public getEmbedLink(link:any) {
    let ID = '';
    link = link.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (link[2] !== undefined) {
      ID = link[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = link;
    }
    return 'https://www.youtube.com/embed/' + ID;
  }

  getVideoDetails(id: string): Video {
    let video = new Video("", "", "https://www.youtube.com/embed/" + id);
    const params: string = [
      `id=${id}`,
      `part=snippet`,
      `key=${this._apiKey}`,
    ].join('&');
    const queryUrl = `${this._apiUrl}?${params}`;
    this._http.get(queryUrl).subscribe((data: any) => {
      video.title = data.items[0].snippet.title;
      video.description = data.items[0].snippet.description;
    });
    return video;
  }
}
