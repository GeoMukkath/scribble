import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/models/notes.service';
import { Note } from '../../models/note.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  deleteNote(id: number){
    this.notesService.delete(id);
  }
}
