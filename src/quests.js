//questType, questOfferer, questReceiver, regionQuest, regionDeliver, optionGood, optionBad, rewardGood[Ehre, Gold, life], rewardBad[Ehre, Gold, Life], questText,
// let questTableBronze = [
//     ["Deliver", "Jorn", "Seppo", "Frosgar", "Talvar", "Fische an den Hafen von Talvar bringen", "Die Fische essen", ["1", "2", "0"], ["-1", "0", "5"], null, "text blablabla"],
//     ["Monster", "Dorfbewohner von Nebelfrost", "Dorfbewohner von Nebelfrost", "Frosgar", "Frosgar", "Hilf den Dorfbewohnern den Drachen zu töten", "Hilfe ablehnen", ["1", "4", "0"], ["0", "0", "0"], null,"text blablabla"],
//     ["Return", "Gunnar", "Holzhändler", "Frosgar", "Athos", "Hole das Holz am Hafen von Athos und bringe es hierher", "Nimm das Geld und behalte es für dich.", ["1", "2", ""], ["-1", "", "5"], false,"text blablabla"],
// ]
  
let questTableSilver = [
  
];
  
let questTableGold = [
  
];

// Offerer[Name, Picture, Text], Middleman[Name, Picture, Text], Receiver[Name, Picture, Text], Regions[questRegion, questDeliverRegion] questRewardGood[Honor, Gold, Move, Happening], questRewardBad[Honor, Gold, Move, Happening], questRewardDeny[Honor, Gold, Move, Happening], optionGood[hasOption, optionGoodType, optionGoodText], optionBad[hasOption, optionBadType, optionBadText], optionDeny[hasOption, optionDenyType, optionDenyText], Monster, optionGood2[], optionBad2[]
let questTableBronze = [
    [   
        "Bronze",
        ["Bjorn, Jäger", "Bild", "Während unserer letzten Jagd wurde eine ungewöhnlich große und gefährliche Bestie gesichtet - ein gigantischer Wolf von beispiellosem Ausmaß. Diese Kreatur hat bereits mehrere unserer erfahrensten Jäger getötet und stellt eine ernsthafte Bedrohung für unser Dorf dar. Finde, diesen übermächtigen Wolf  und besiege ihn. Bringe mir einen seiner Reisszähne als Beweis für deine Tat. Für diese gefährliche Aufgabe werde ich dich großzügig belohnen."],
        ["-", "-", "-"],
        ["Bjorn, Jäger", "Bild", "Text"],
        ["Frostgar", "Frostgar"]
        [1, 5, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
        [1, "ReturnMonster", "Annehmen"],
        [0, "-", "-"],
        [1, "None", "Ablehnen"],
        [1, 0],
        [0, "-", "-"],
        [0, "-", "-"]
    ],
    [
        "Bronze",
        ["Freya, Schmiedin", "Bild", "Ich habe eine Waffenlieferung für die Zwerge in Drakan. Bringe sie ihnen, ich werde dir dafür einen Anteil geben."],
        ["Zwerge", "Bild", "Text"],
        ["Freya, Schmiedin", "Bild", "Text"],
        ["Frostgar", "Drakan"]
        [1, 5, 0, 0], [-1, 10, 0, 1], [0, 0, 0, 0],
        [1, "Return", "Abliefern und Gold zurückbringen"],
        [1, "Deliver", "Abliefern und Gold für sich behalten"],
        [1, "None", "Ablehnen"],
        [2, 0],
        [0, "-", "-"],
        [0, "-", "-"]
    ],
    [
        "Bronze",
        ["Grimgar, Dorfbewohner", "Bild", "Unser friedliches Dorf wurde von einem anderen Stamm überfallen, einige unserer Häuser wurden abgebrannt und die Nahrungsmittel wurden gestohlen. Aber all das ist nicht so schlimm wie der Verlust des Amulettes meines Vaters. Hilf mir bitte, den Dieb zu fassen und mir das Amulett wieder zu beschaffen, um den Rest dieser abscheulichen Übeltäter kümmern wir uns später."],
        ["-", "-", "-"],
        ["Grimgar, Dorfbewohner", "Bild", "Text"],
        ["Frostgar", "Frostgar"]
        [1, 3, 0, 0], [0, 3, 0, 0], [0, 0, 0, 0],
        [1, "ReturnMonster", "Den Dieb finden und das Amulett zurückbringen"],
        [1, "Fight", "Ablehnen"],
        [0, "-", "-"],
        [3, 4],
        [0, "-", "-"],
        [0, "-", "-"]
    ],
    [
        "Bronze",
        ["Hilda, Handwerkerin", "Bild", "Ich habe gehört, dass es in Aridora begabte Handwerker gibt, von denen ich neue Fertigkeiten und Möglichkeiten lernen kann, um meine eigene Handwerkskunst zu verbessern. Die Reise über das Meer ist jedoch alleine viel zu gefährlich. Könntest du mich begleiten und mich sicher nach Aridora bringen?"],
        ["-", "-", "-"],
        ["Max, Handwerker", "Bild", "Text"],
        ["Frostgar", "Arida"]
        [1, 5, 0, 0], [-1, 0, 0, 0], [0, 0, 0, 0],
        [1, "Deliver", "Hilf Hilda"],
        [1, "End", "Nimm Hilda auf dem Weg ihr Gepäck und ihre Wertsachen ab und lasse sie zurück"],
        [1, "None", "Ablehnen"],
        [0, 5],
        [0, "-", "-"],
        [0, "-", "-"]
    ],
    [
        "Bronze",
        ["Leyla", "Bild", "Ich verfüge über einige kostbare Edelsteine, die in Drakan benötigt werden, um Waffen zu veredeln. Bringe sie zu den Zwergen,  welche in dieser Gegend leben, und tausche sie dort gegen Feueressenz ein. Sobald du die Feueressenz hast, bringe sie zu mir zurück. Ich brauche sie, um meine Schmuckstücke herzustellen."],
        ["Zwerge", "Bild", "Text"],
        ["Leyla", "Bild",  "Text"],
        ["Frostgar", "Drakan"]
        [1, 3, 0, 0], [-1, 5, 0, 0], [0, 0, 0, 0],
        [1, "Return", "Hole die Feueressenz"],
        [1, "Deliver", "Stiehl die Diamanten und verkaufe sie am Hafen von Aridora"],
        [1, "None", "Ablehnen"],
        [0, 0],
        [0, "-", "-"],
        [0, "-", "-"]
    ]
]

module.exports = {
    questTableBronze,
    questTableSilver,
    questTableGold
  };

