import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/models/notes.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  note: Note;
  noteId: number;
  new: boolean;
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.note = new Note();
      if(params.id){
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      }else {
        this.new = true;
      }
    })
 
  }

  submit(form: NgForm){
    if(this.new){
      this.notesService.add(form.value);
    }else{
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
  }

  onCancel(){
    this.router.navigateByUrl('/');
  }
}
