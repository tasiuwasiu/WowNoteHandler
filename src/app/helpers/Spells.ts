class Spells {

    private static spellsWarrior: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsPaladin: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsHunter: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsRogue: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsPriest: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsDK: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsShaman: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsMage: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsWarlock: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsMonk: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsDruid: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsDH: [Spell] = [ 
        new Spell("", "") 
    ];
    private static spellsNone: [Spell] = [ 
        new Spell("", "") 
    ];

    static spells: { [key: string]: [Spell] } = {
        [WowClass.Warrior]: this.spellsWarrior,
        [WowClass.Paladin]: this.spellsPaladin,
        [WowClass.Hunter]: this.spellsHunter,
        [WowClass.Rogue]: this.spellsRogue,
        [WowClass.Priest]: this.spellsPriest,
        [WowClass.DeathKnight]: this.spellsDK,
        [WowClass.Shaman]: this.spellsShaman,
        [WowClass.Mage]: this.spellsMage,
        [WowClass.Warlock]: this.spellsWarlock,
        [WowClass.Monk]: this.spellsMonk,
        [WowClass.Druid]: this.spellsDruid,
        [WowClass.DemonHunter]: this.spellsDH,
        [WowClass.None]: this.spellsNone
    }

}