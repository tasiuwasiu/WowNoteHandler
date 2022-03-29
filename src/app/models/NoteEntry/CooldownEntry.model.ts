class CooldownEntry extends NoteEntry {
    
    spell: Spell;
    wowClass: WowClass;
    nick: string;

    constructor(spell: Spell, wowClass: WowClass, nick: string) {
        super();
        this.spell = spell;
        this.wowClass = wowClass;
        this.nick = nick;
    }

    print(): string {
        return "[spell:" + this.spell.id + "] " + this.nick + " ";
    }
}