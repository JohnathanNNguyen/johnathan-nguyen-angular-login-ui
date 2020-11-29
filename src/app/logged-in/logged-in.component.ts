import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  myLoginInfo;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.myLoginInfo = params
      console.log(params)
    })
  }

  ngOnInit(): void {
  }

}
