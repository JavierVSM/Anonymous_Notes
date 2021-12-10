import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  notes: any[] = [];


  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this._httpService.getAll()
    .subscribe((data:any)=>{
      this.notes = data;          
    });
  }
}
  