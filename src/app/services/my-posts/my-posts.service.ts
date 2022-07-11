import {Injectable} from '@angular/core';
import {RestClientApi} from '../RestClient.api';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PostModel} from '../../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class MyPostsService extends RestClientApi {
  private myFavoritePosts: any[] = [];
  private apiUrl = `${environment.postsApi}`;
  constructor(http: HttpClient) {
    super(http);
  }

  async getMyPosts(id: string):  Promise<any> {
    return this.get(`${this.apiUrl}/posts?userId=${id}`);
  }

  async updatePost(post: PostModel): Promise<any> {
    return this.put<any>(`${this.apiUrl}/posts/${post.id}`, post);
  }

  async createPost(post: PostModel): Promise<any> {
    return this.post<any>(`${this.apiUrl}/posts`, post);
  }

  async deletePost(id: string): Promise<any> {
    return this.delete(`${this.apiUrl}/posts/${id}`);
  }

  getFavoritePosts(): any[] {
    return this.myFavoritePosts;
  }

  setFavoritePost(post: any): void {
    this.myFavoritePosts.push(post);
  }

  deleteFavoritePost(id: string): any {
   const index = this.myFavoritePosts.indexOf((post:any) => post.id == id);
   this.myFavoritePosts.splice(index, 1);
   return this.myFavoritePosts;
  }

  isFavoritePost(id:string): boolean {
    return this.myFavoritePosts.findIndex((post: any) => post.id == id) >= 0;
  }
}
