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
  private myPosts: any[] = [];
  private apiUrl = `${environment.postsApi}`;
  private isAlreadyAdded: boolean = false;
  constructor(http: HttpClient) {
    super(http);
  }

  async getMyPosts(id: number | string):  Promise<any> {
    return this.get(`${this.apiUrl}/posts?userId=${id}`);
  }

  async updatePost(post: PostModel): Promise<any> {
    return this.put<any>(`${this.apiUrl}/posts/${post.id}`, post);
  }

  async createPost(post: PostModel): Promise<any> {
    const newPost = await this.post<any>(`${this.apiUrl}/posts`, post);
    const all = await this.getMyPosts(post.userId);
    return all.push(newPost);
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

  setMyPosts(newPost: any): any {
    this.myPosts.push(newPost);
  }

  deleteMyPost(id: string): any {
    const index = this.myPosts.indexOf((post:any) => post.id == id);
    this.myPosts.splice(index, 1);
    return this.myPosts;
  }

  async getAllMyPosts(id: number): Promise<any> {
    if(!this.isAlreadyAdded) {
      const all = await this.getMyPosts(id);
      this.myPosts.push(...all);
      this.isAlreadyAdded = true;
    }

    return this.myPosts;
  }
}
