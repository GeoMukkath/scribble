import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes : Note[] = new Array<Note>();

  constructor() { }

  getNoteById(id:string){
    return this.notes.find(n => n.order === id);
  }

  getNotes(){
    return this.notes;
  }
  getId(note: Note){
    return this.notes.indexOf(note);
  }
 
  add(note: Note){
    note.order = this.notes.length.toString();
    note.lastAccessed = new Date();
    this.notes.push(note);
  }

  update(id: string, title: string, body: string ){
    let note = this.notes.find(n => n.order === id);
    note.title = title;
    note.body = body;
  }

  updateOrder(id: string) {
    let note = this.notes.find(n => n.order === id);
    note.lastAccessed = new Date();
    // this.updateNotesOrder(id);
    // note.order = (this.notes.length - 1).toString();
  }

  delete(id: string){
    const index = this.notes.findIndex(n => n.order === id);
    this.notes.splice(index, 1);
  }

  private updateNotesOrder(id: string) {
    const updatedList: Note[] = new Array<Note>();
    this.notes.forEach(note => {
      if (note.order !== id && +note.order > 0)
      note.order = (+note.order - 1).toString();
      updatedList.push(note);
    });

    this.notes = updatedList;
  }
}
