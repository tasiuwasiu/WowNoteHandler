class NoteEvent {
    eventTime: NoteEventTime;
    entries: NoteEntry[];

    constructor(eventTime: NoteEventTime) {
        this.eventTime = eventTime;
        this.entries = [];
    }

    addEntry(entry: NoteEntry, index: number) {
        this.entries.splice(index, 0, entry);
    }

    print() : string {
        var result =  this.eventTime.print();
        this.entries.forEach(entry => {
            result += entry.print();
        });
        return result;
    }
}