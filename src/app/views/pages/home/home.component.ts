import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../model/post.model';
import {GlobalPostsServices} from '../../../services/posts/global-posts.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  globalPosts: any = [];
  constructor(private globalPostsServices: GlobalPostsServices) { }

  async ngOnInit(): Promise<void> {
    this.globalPosts = await this.globalPostsServices.listOfGlobalPosts();
  }

}
