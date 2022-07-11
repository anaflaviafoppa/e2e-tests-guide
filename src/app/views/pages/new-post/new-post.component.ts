import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MyPostsService} from '../../../services/my-posts/my-posts.service';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {Route} from '../../../app-routing.module';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  titleControl = new FormControl('', Validators.required);
  bodyControl = new FormControl('', Validators.required);
  form = this._formBuilder.group({
    title: this.titleControl,
    body: this.bodyControl,
  });
  constructor(private _formBuilder: FormBuilder,
              private _myPostsService: MyPostsService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  async onSubmitForm(): Promise<void> {
    const body = this.form.value;
    body.userId = environment.userId;
    await this._myPostsService.createPost(body);
    this._router.navigate([Route.MY_SPACE]).then(() => {});
  }

}
