import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
identity;
token;
  constructor(
    public tokenService: TokenService,
    private storage: Storage,
  ) { }

 async ngOnInit() {
   await this.storage.create();
  this.identity = await this.tokenService.GetUser();
  this.token = this.tokenService.GetPayload();
  }

}
