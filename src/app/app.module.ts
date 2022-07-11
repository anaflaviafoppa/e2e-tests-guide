import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/pages/login/login.component';
import { HomeComponent } from './views/pages/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ListOfPostsComponent } from './views/widgets/list-of-posts/list-of-posts.component';
import { CreatePostComponent } from './views/components/create-post/create-post.component';
import { PostComponent } from './views/components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import { MySpaceComponent } from './views/pages/my-space/my-space.component';
import { NavBarComponent } from './views/components/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { NewPostComponent } from './views/pages/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListOfPostsComponent,
    CreatePostComponent,
    PostComponent,
    MySpaceComponent,
    NavBarComponent,
    NewPostComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        HttpClientModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
