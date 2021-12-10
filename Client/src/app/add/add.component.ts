import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  new: any = {name: ""};
  finalmessage="";

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
  }

  addNote( event: any ): void {
    if(this.new.length < 3 ){
      this.finalmessage="the note must be at least 3 letters.";
    }
    else{
      this._httpService.add(this.new)
      .subscribe((data:any) =>{
        location.reload();
      });
    }   
  }

}
