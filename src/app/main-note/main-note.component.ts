import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.css']
})
export class MainNoteComponent implements OnInit {

  myForm = this.fb.group({
    title: [],
    body: []
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  save(){
    console.log('hola');
  }
}
