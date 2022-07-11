import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../model/post.model';
import {MyPostsService} from '../../../services/my-posts/my-posts.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.scss']
})
export class MySpaceComponent implements OnInit {
  myPosts: PostModel[] = [];
  favoritePosts: any = [];
  constructor(private _myPostsService: MyPostsService) { }

  async ngOnInit(): Promise<void> {
    this.myPosts = await this._myPostsService.getAllMyPosts(environment.userId);
    this.favoritePosts = this._myPostsService.getFavoritePosts();
  }

}
