import {Injectable} from '@angular/core';
import {PostModel} from '../../model/post.model';
import {RestClientApi} from '../RestClient.api';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalPostsServices extends RestClientApi {
  private listOfPosts: PostModel[] = [];
  private apiUrl = `${environment.postsApi}`;
  constructor(http: HttpClient) {
    super(http);
  }

  async listOfGlobalPosts(): Promise<any> {
    return this.get(`${this.apiUrl}/posts`);
  }
}
