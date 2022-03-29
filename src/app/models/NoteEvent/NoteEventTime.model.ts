abstract class NoteEventTime {

    abstract print() : string;
}

class NoteEventTimeStandard extends NoteEventTime {
    minutes:string;
    seconds:string;

    constructor(minutes: string, seconds: string) {
        super();
        this.minutes = minutes;
        this.seconds = seconds;
    }

    print(): string {
        return "[time:" + this.minutes + ":" + this.seconds + "] ";
    }
}

class NoteEventTimeLogEvent extends NoteEventTimeStandard {
    logEventType: LogEventType;
    spellId: string;
    counter: string;

    constructor(minutes: string, seconds: string, logEventType: LogEventType, spellId: string, counter: string) {
        super(minutes, seconds);
        this.logEventType = logEventType;
        this.spellId = spellId;
        this.counter = counter;
    }

    override print() : string {
        return "[time:" + this.minutes + ":" + this.seconds + "," + this.logEventType + ":" + this.spellId + ":" + this.counter + "] ";
    }
}

