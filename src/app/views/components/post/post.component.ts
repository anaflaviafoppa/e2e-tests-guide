import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../model/post.model';
import {MyPostsService} from '../../../services/my-posts/my-posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostModel = {
    title: '',
    body: '',
    userId: '',
    id: '',
  };
  @Input() isDeleteEnabled: boolean = false;
  @Input() isEditEnabled: boolean = false;
  isEditMode: boolean = false;

  constructor(private _myPostsService: MyPostsService) { }

  ngOnInit(): void {
  }

  favoritePost(): void {
    if(this.isFavorite()) {
      this._myPostsService.deleteFavoritePost(this.post.id);
    } else {
      this._myPostsService.setFavoritePost(this.post)
    }
  }

  isFavorite(): boolean {
    return this._myPostsService.isFavoritePost(this.post.id);
  }

  async deletePost(): Promise<void> {
    this._myPostsService.deleteMyPost(this.post.id)
  }

}
