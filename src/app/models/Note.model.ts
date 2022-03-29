/*
Class storing information about single note.

events: NoteEvent[] - array storing all events included in this note
*/
class Note {
    events: NoteEvent[];

    constructor() {
        this.events = [];
    }
}