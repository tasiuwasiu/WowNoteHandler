class StringEntry extends NoteEntry {
    
    message: string;

    constructor(message: string) {
        super();
        this.message = message;
    }

    print(): string {
        return this.message + " ";
    }
}