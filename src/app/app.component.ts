import { Component,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { AppSettings } from './constants/constants.module';
// import { StorageService } from './service/storage.service';
// import { GlobalsService } from './service/globals.service';
// import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // providers: [AppService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telemanager';
  // screen: any;
  // subscription: Subscription
  // genders: { 'id': number; 'val': string; }[];
  
  //   constructor(private globalservice: GlobalsService, private storageService: StorageService,
  //   private appService: AppService, private router: Router){}

  ngOnInit() {
    // this.genders = [
    //   { 'id': 1, 'val': 'Male' },
    //   { 'id': 2, 'val': 'Female' }
    // ];
    // this.globalservice.genderList(this.genders);
    
    // if (this.storageService.getItem('user') == null) {
    //   this.screen = null;
    //   this.globalservice.changeScreen(null);
    // }
    // else {
    //   this.screen = this.storageService.getItem('user').data.roleId;
    //   this.globalservice.changeScreen(this.storageService.getItem('user').data.roleId);
    // }

  
    // this.tieupsScreen = AppSettings.TIEUPS_ROLE_ID;
    // this.operationScreen = AppSettings.OPERATIONAL_ROLE_ID;


//     this.subscription = this.globalservice.navItem$
//       .subscribe(item => {
//         this.screen = item;
//       });
// }
}
}
