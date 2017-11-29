import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_services/in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ZenAppComponent } from './zen-app/zen-app.component';
import { ZenHomeComponent } from './zen-app/zen-home/zen-home.component';
import { ZenHeaderComponent } from './zen-app/zen-home/zen-header/zen-header.component';
import { ZenSearchComponent } from './zen-app/zen-home/zen-header/zen-search/zen-search.component';
import { ZenUserComponent } from './zen-app/zen-home/zen-header/zen-user/zen-user.component';
import { ZenLoginComponent } from './zen-app/zen-home/zen-header/zen-user/zen-login/zen-login.component';
import { ZenCategoriesComponent } from './zen-app/zen-home/zen-categories/zen-categories.component';
import { ZenNewscontainerComponent } from './zen-app/zen-home/zen-newscontainer/zen-newscontainer.component';
import { ZenTopvideosComponent } from './zen-app/zen-home/zen-topvideos/zen-topvideos.component';
import { ZenFooterComponent } from './zen-app/zen-home/zen-footer/zen-footer.component';
import { ZenNewsComponent } from './zen-app/zen-home/zen-newscontainer/zen-news/zen-news.component';
import { HomeService } from './_services/home-service.service';
import { AuthenticationService } from './_services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZenAppComponent,
    ZenHomeComponent,
    ZenHeaderComponent,
    ZenSearchComponent,
    ZenUserComponent,
    ZenLoginComponent,
    ZenCategoriesComponent,
    ZenNewscontainerComponent,
    ZenTopvideosComponent,
    ZenFooterComponent,
    ZenNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HomeService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

