export const localize = {
    fr: { // langue
        global: {
            closeLabel: 'Fermer',
            yes: 'Oui',
            no: 'Non',
            delete: 'Supprimer',
            validate: 'Valider',
        },
        characs: {
            1: 'Chevalier',
            2: 'Prêtre',
            3: 'Magicien',
            4: 'Voleur',
        },
        books: {
            1: 'Les Treize Mages',
            2: 'Le Maître des Rêves',
            3: 'Le Port des Assassins',
            4: 'L\' Impossible Mission',
            5: 'Les Murailles de Spyte',
        },
        settings: { // page
            title: 'Réglages',
            language: 'Langue',
            langChoice: {'fr':'Français', 'en':'English'},
            color: 'Couleur',
            colorChoice: {'red': 'Rouge', 'gold': 'Or', 'green': 'Vert', 'blue': 'Bleu'}
        },
        selection: {
            selectionFeedBack: 'Selection remise à zero !',
            startingBook: 'Livre de départ',
            bookSelect: 'Sélection du livre',
            characSelect: 'Selection de Personnage(s)',
            loadGame: 'Charger une sauvegarde',
            gameValidate: 'Valider',
            reSetTitle: 'Remise à zero',
            reSetMess: 'Supprimer les données ?',
            bookChoiceTitle: 'Choix du livre',
            bookChoiceMess: 'Vous devez choisir un livre de départ',
            characChoiceTitle: 'Choix de personnage',
            characChoiceMess: 'Vous devez choisir au moins un personnage',
            choosenBook: 'Livre choisi',
            cantChangeBook: 'Vous ne pouvez plus changer de livre \n à moins de recommencer !!',
            cantChangeTeam: 'Vous ne pouvez plus changer d\'équipe \n à moins de recommencer !!',
        },
        sheet: {
            paraTitle: 'Paragrahe',
            paraMess: 'Notez le paragraphe en cours',
            noteTitle: 'Notes',
            noteMess: 'Prenez des notes !',
            diceTitle: 'Lancé de dés',
            diceMess: '',
            saveTitle: 'Sauvegarde',
            saveMess: 'Sauvegardez votre partie',
            changeBookTitle: 'Changement de livre',
            changeBookMess: '',
            sectionLabel: 'Paragraphe',
            noteLabel: 'Notes',
            characs: 'Personnages',
            noSelection: 'Aucune selection',
            actions: 'Actions',
            save: 'Sauvegarde',
            launchDice: 'Lancé de dé',
            currentBook: 'Livre en cours',
            changeBook: 'Changer de livre',
        },
        characSheet: {
            setAttributesTitle: 'Modification des caractéristiques',
            setAttributesMess: '',
            setXpTitle: 'Ajout de points d\'expérience',
            setXpMess: '',
            type: 'Classe',
            givenName: 'Nom',
            level: 'Niveau',
            xp: 'XP',
            force: 'Force',
            force_descr: 'La Force mesure les aptitudes physiques du personnage.',
            pouvoir: 'Pouvoir',
            pouvoir_descr: 'Le Pouvoir détermine sa résistance aux sortilèges et, dans le cas des magiciens, ses aptitudes à maîtriser la magie.',
            habilete: 'Habileté',
            habilete_descr: 'L\'Habileté tient compte à la fois de l\'agilité du personnage et de sa présenced\'esprit.',
            endurance: 'Endurance',
            endurance_descr: 'L\'Endurance détermine la constitution et la résistance du personnage. Les blessures subies au combat font baisser le total d\'Endurance. Lorsquecelui-ci atteint zéro, le personnage meurt.',
            protection: 'Protection',
            dommage: 'Dommage',
            bonus: 'Bonus',
            skills: 'Inventaire',
            items: 'Capacités',
            rankChange: 'Vous navez pas changé de niveau',
        },
        skills: {
            skills: 'Skills',
            1: { //Warrior
                descr: "You are the master of the fighting arts. You have better Fighting Prowess than any other adventuring type at the same rank, and when you strike a blow you inflict more damage. You also have chainmail armour which provides an Armour Rating of three - better than the armour available to other characters. \n These advantages give you a real edge in any fight, but you do not get things all your own way. You have none of the other characters' special skills - the Sage's ESP, for instance, or the Trickster's low, devious cunning. Also, because you are of noble birth and follow the honourable traditions of your ancestors, you must be careful to stay true to the code of chivalry. You may take an experience point penalty if you behave in a dishonourable, cowardly or uncouth manner",
                1 :{name: 'Ambidextérité', description: "Vous pouvez combattre avec deux épées (une dans chaque main) et frapper ainsi deux fois par Assaut. Si vous combattez avec une arme magique, les bonifications qu'elle vous apporte ne peuvent s'appliquer à la deuxième arme."},
                2 :{name: "Combat à mains nues", description: "Contrairement aux autres personnages, vous combattez à mains nues sans subir de pénalité ni en FORCE ni en Dommages."},
            },
            2: { //Sage
                descr: "Your upbringing has been in the spartan Monastery of Illumination on the barren island of Kaxos. There you studied the Mystic Way - a series of demanding psionic disciplines and rigorous physical training.",
                1 :{name: "Tir", description: "Tant que vous possédez votre arc et vos flèches, vous pouvez choisir le tir lors des combats. Pour cela, vous n'avez pas besoin de vous trouver dans une case adjacente à celle de l'ennemi pour l'atteindre. Pour le toucher, vous devez obtenir un résultat inférieur ou égal à votre total d'HABILETÉ avec deux dés. Dommage de 1 dé (moins la Protection)."},
                2 :{name: "Maîtrise du Bâton", description: "Une longue pratique des arts martiaux associée à une parfaite connaissance de l'organisme humain vous permet de toucher l'ennemi à ses points faibles. Lorsque vous combattez avec votre bâton et que vous frappez votre adversaire, il vous est possible de déterminer votre coup avec trois dés au lieu des deux dés habituellement requis. Cela augmente la difficulté mais, si le coup porte, vous infligez à votre adversaire 1 dé de Dommages supplémentaires et vousparvenez à le déséquilibrer, et un ennemi à terre ne peut réagir avant la fin de l'Assaut suivant."},
                3  :{name: "Soins", description: "Vous pouvez utiliser ce pouvoir psychique à tout moment, sauf au combat. Pour prodiguer des soins vous devez avant tout déterminer le nombre de points d'ENDURANCE que vous allez dépenser à cet effet. Otez ces points de votre total d'ENDURANCE et jetez 1 dé - 2. Multipliez le résultat par le nombre de points d'ENDURANCE dépensés, afin de connaître le total d'Énergie Curative - sous forme de points d'ENDURANCE - que vous avez rassemblés. Ces points peuvent ensuite être distribués entre les membres de l'expédition, vous y compris. Exemple : Alric le prêtre décide de prodiguer des Soins et y consacre 5 points d'ENDURANCE. Il jette 1 dé - 2 et obtient 4. Il multiplie les 5 points qu'il a consacrés par 2 (4 - 2) et rassemble ainsi 10 points d'ENDURANCE. Il peut donc récupérer ses 5 points d'ENDURANCE et distribuer les 5 points restants à ses compagnons. Les résultats négatifs comptent pour zéro. Cet te pratique comporte des risques puisque vous pouvez dépenser despoints sans rien avoir en retour.Vous serez averti lorsque vous pourrez recourir à d'autres pouvoirs psychiques."},
                4 :{name: "Perceptions extrasensorielles", description: "Possibilité de connaître les pensées d'autrui."},
                5 :{name: "Clairvoyance", description: "Cette faculté permet de voir à travers les tentures un épais brouillard ou de l'eau trouble. Elle ne s'étend pas aux matériaux durs telsque la pierre ou le métal."},
                6 :{name: "Lévitation", description: "Vous pouvez vous élever à la verticale dans les airs."},
                7 :{name: "Exorcisme", description: "Ce pouvoir permet de repousser les Fantômes ou les Morts Vivants en neutralisant l'énergie surnaturelle qui les anime."},
            },
            3: { //Enchanter
                descr: "Forget the mundane arts of swordplay. You can use a sword if you have to, but your true forte is in the manipulation of occult powers of Sorcery.\n Your special skills are more involved than those available to any other character because you have a host of useful and deadly spells at your command. The procedure for spellcasting is quite involved, so read the following stages carefully.",
                1 :{name: "Miasmes (Level 1)", description: "Un brouillard toxique recouvre tous les adversaires et inflige à chacun la perte de 1 point d'ENDURANCE (moins la valeur de Protection). Il s'agit d'un sortilège d'attaque."},
                2 :{name: "Hurlement (Level 1)", description: "Ce sortilège mental ne peut affecter qu'une seule cible. Le cri du magicien trouble l'adversaire qui procède à ses jets de coups et à ses jets de tir avec trois dés au lieu de deux pendant quatre Assauts"},
                3 :{name: "Foudre Blanche (Level 1)", description: "Ce sortilège d'attaque frappe un seul adversaire et provoque la perte de 2 dés + 2 d'ENDURANCE (moins la valeur de Protection)."},
                4 :{name: "Blessure (Level 2)", description: "Ce sortilège d'attaque frappe un seul adversaire et provoque la perte de 3 dés + 3 d'ENDURANCE (moins la valeur de Protection)."},
                5 :{name: "Puissance (Level 2)", description: "Ce sortilège augmente votre FORCE de 2 points et permet d'ajouter 2 points aux Dommages que vous infligez ou biend'augmenter de 1 point le total de FORCE de tous vos compagnons (vous compris) et d'ajouter 1 point à leur jet de Dommages. Les effets durent quatre Assauts."},
                6 :{name: "Teleportation (Level 2)", description: "Lorsque vous désirez rompre le combat, ce sortilège téléporte tous les membres de l'expédition vers la plus proche sortie, permettant de fuir dès l'Assaut suivant."},
                7 :{name: "Souffle Mortel (Level 3)", description: "Ce sortilège mental provoque la perte de 2 points d'ENDURANCE chez tous les adversaires qui n'auront su y résister. Dans ce cas, la Protection est inopérante."},
                8 :{name: "Vampire (Level 3)", description: "Ce sortilège mental n'affecte qu'un seul adversaire, qui, s'il ne peut y résister, perd 4 dés d'ENDURANCE.  De surcroît, le magicien récupère la moitié des points d'ENDURANCE perdus par la victime (arrondis au chiffre inférieur). Bien entendu, votre total d'ENDURANCE ne peut excéder son total de départ."},
                9 :{name: "Météore (Level 4)", description: "Ce sortilège d'attaque provoque la perte de 2 dés + 2 points d'ENDURANCE chez tous les adversaires (moins leur valeur de Protection)."},
                10 :{name: "Main du Diable (Level 4)", description: "Ce sortilège mental opère par imposition de la main. Il est donc nécessaire d'être en contact avec l'adversaire, qui perd 7 dés d'ENDURANCE s'il ne peut résister. S'il résiste, il ne perd que 2 dés d'ENDURANCE."},
                11 :{name: "Foudre Noire (Level 5)", description: "Ce sortilège d'attaque puissant frappe un seul adversaire et provoque la perte de 7 dés + 7 d'ENDURANCE (moins la valeur de Protection)."},
                12 :{name: "Asservissement (Level 5)", description: "Ce sortilège mental permet de contrôler l'esprit d'un seul adversaire qui, s'il ne peut y résister, demeure immobile et, si vous n'êtes pas en combat, doit répondre à vos questions. Le magicien peut lui ordonner de combattre ses anciens compagnons d'armes. Jetez alors un dé : avec un résultat de 6, l'adversaire reprend ses esprits et attaque à nouveau. Ce sortilège opère tant que vous demeurez à proximité. Lorsque vous quittez la pièce où se trouve la victime, la malheureuse meurt aussitôt."},
                13 :{name: "Appel du Faltyn", description: "Une petite créature surnaturelle apparaît pour vous servir pendant un temps."},
                14 :{name: "Oracle", description: "Ce sortilège permet d'avoir un aperçu du futur."},
                15 :{name: "Detection de la Magie", description: "Elle permet d'avoir conscience des forces surnaturelles mises en oeuvre alentour."},
            },
            4: { //Trickster
                descr: "Some Adventurers are honest, chivalrous and honourable. Not you. You are basically a rogue - a likeable rogue, perhaps, but a rogue nonetheless. You live by your wits. If you can win a fight by trickery or by shooting someone in the back, you will. Cunning is your main weapon.\n But when you have to face someone in a straight fight, you are no pushover. After the Warrior, you are perhaps the best fighter in any party.",
                1 :{name: "Esquive", description: "Votre agilité et votre souplesse vous ont rendu maître dans l'art de l'esquive.Chaque fois qu\'un adversaire tente de vous frapper, il doit jeter 2 dés + 1 au lieu des deux dés habituels."},
                2 :{name: "Tir", description: "Tant que vous possédez votre arc et vos flèches, vous pouvez choisir le tir lors des combats. Pour cela, vous n'avez pas besoin de vous trouver dans une case adjacente à celle de l'ennemi pour l'atteindre. Pour le toucher, vous devez obtenir un résultat inférieur ou égal à votre total d'HABILETÉ avec deux dés. Dommage de 1 dé (moins la Protection)."},
                3 :{name: "Vivacité", description: "Lors d'un affrontement, vous pouvez tenter deux actions dans le même Assaut (mais une seule fois par combat). La première action est entreprise au début de l'Assaut, en fonction de votre total d'HABILETÉ. Vous pouvez agir une deuxième fois, en fin d'Assaut, lorsque votre adversaire a épuisé ses possibilités d'action (ce qui vous permet de fuir sans risques en cours d'affrontement)."},
            },
        },
        items: {
            yes: 'Oui',
            no: 'Non',
            closeLabel: 'Fermer',
            validate: 'Valider',
            itemsTitle: 'Inventaire', 
            itemDeleteTitle: 'Suppression',
            itemDeleteMess: 'Supprimer',
            lossArmour: 'Cela entraînera la perte \n de vos points de protection',
            lossWeapon: 'Cela entraînera la perte \n de 2 points de force, et 2 points de dégâts.',
            tooMuchObjects: 'Vous avez dix objets, vous ne pouvez plus en ajouter.',
            addItem: 'Ajout d\'un objet',
            withWhomToChange: 'Avec qui voulez-vous échanger',
            justOneCharac: 'Vous n\' avez qu\' un seul Personnage dans l\'équipe !',
            heHasTooMuch: 'Ce personnage a déjà dix objets dans son inventaire',
            tradingTitle: 'Echange d\' objet',
            chooseType: 'Choisissez un type d\'objet :',
            typeName: 'Saisissez un nom',
            namePlaceholder: 'nom',
            typeDescr: 'Saisissez une déscription (facultatif)',
            descrPlaceholder: 'description',
            usingQty: 'Quantité utilisable ?',
            chooseQty: 'Choisissez une quantité',
            type1: 'Objet',
            type2: 'Arme',
            type3: 'Armure',
        },
        forAlert: {
            validate: 'Valider',
            numSection: 'N° de paragraphe',
            writeNote: 'Ecrivez votre note ici',
            diceNumber: 'Nombre de dés à lancer',
            slotOne : 'Sauvegarde 1',
            slotTwo: 'Sauvegarde 2',
            slotThree: 'Sauvegarde 3',
            diceLaunchResult: ' dé(s) lancé(s), résultat : ',
            lastBook: 'Vous êtes au dernier livre !',
            bookChoice: 'Choix possible :',
            loadingTitle: 'Chargement de sauvegarde',
            loadingMess: 'Charger la sauvegarde n° ',
            loadingWarning: ' ? \nLa partie en cours sera supprimée !',
            team: 'Equipe',
            level: 'Niveau',
            book: 'Livre',
            section: 'Paragraphe',
            deleteSlot: 'Effacer cette sauvgarde ?',
            characters: 'Personnage(s)',
            closingApp: 'Fermeture de l\'application',
            closingAppMess: 'Voulez-vous partir des Terres de Legendes ?',
        }
    },
    en: {
        global: {
            closeLabel: 'Close',
            yes: 'Yes',
            no: 'No',
            delete: 'Delete',
            validate: 'Validate',
        },
        characs: {
            1: 'Warrior',
            2: 'Sage',
            3: 'Enchanter',
            4: 'Trickster',
        },
        books: {
            1: 'The battlepits of Krarth',
            2: 'The kingdom of Wyrd',
            3: 'The demon\'s claw',
            4: 'Doomwalk',
            5: 'The walls of Spyte',
        },
        settings: { // page
            title: 'Settings',
            language: 'Language',
            langChoice: {'fr':'Français', 'en':'English'},
            color: 'Color',
            colorChoice: {'red': 'Red', 'gold': 'Gold', 'green': 'Green', 'blue': 'Blue'}
        },
        selection: {
            selectionFeedBack: 'Selection is deleted !',
            startingBook: 'Starting book',
            bookSelect: 'Book selection',
            characSelect: 'Character(s) selection',
            loadGame: 'Load a game',
            gameValidate: 'Validate',
            reSetTitle: 'Reset',
            reSetMess: 'Delete your data ?',
            bookChoiceTitle: 'Book choice',
            bookChoiceMess: 'You must choose a starting book',
            characChoiceTitle: 'Character choice',
            characChoiceMess: 'You must select at least one character',
            choosenBook: 'Choosen book',
            cantChangeBook: 'You can\'t change book now \n unless you reset your data !',
            cantChangeTeam: 'You can\' change your team now \n unless you resest your data !',
        },
        sheet: {
            paraTitle: 'Section',
            paraMess: 'Note the current section',
            noteTitle: 'Notes',
            noteMess: 'Take notes !',
            diceTitle: 'Launch die',
            diceMess: '',
            saveTitle: 'Save',
            saveMess: 'Save your data',
            changeBookTitle: 'Change book',
            changeBookMess: '',
            sectionLabel: 'Section',
            noteLabel: 'Notes',
            characs: 'Characters',
            noSelection: 'No data',
            actions: 'Actions',
            save: 'Save',
            launchDice: 'Launch die',
            currentBook: 'Current book',
            changeBook: 'Change book',
        },
        characSheet: {
            setAttributesTitle: 'Set attributes',
            setAttributesMess: '',
            setXpTitle: 'Add experience points',
            setXpMess: '',
            type: 'Class',
            givenName: 'Name',
            level: 'Rank',
            xp: 'XP',
            force: 'Fighting Pr.',
            force_descr: 'A measure of how powerful a fighter the character is',
            pouvoir: 'Psychic Ab',
            pouvoir_descr: "An indicator of the character's resistance to attack spells and (in the case of an Enchanter) his or her aptitude for magic",
            habilete: 'Awareness',
            habilete_descr: "A difficult concept, as it encompasses quickness of thought, dexterity and general nous",
            endurance: 'Endurance',
            endurance_descr: "The attribute measuring the character's state of health; wounds are deducted from Endurance, and if it reaches zero then the character dies",
            protection: 'Armour Rating',
            dommage: 'Damage',
            bonus: 'Bonus',
            skills: 'Skills',
            items: 'Items',
            rankChange: 'You do not gain new rank',
        },
        skills: {
            skills: 'Skills',
            1: { //Warrior
                descr: "You are the master of the fighting arts. You have better Fighting Prowess than any other adventuring type at the same rank, and when you strike a blow you inflict more damage. You also have chainmail armour which provides an Armour Rating of three - better than the armour available to other characters. \n These advantages give you a real edge in any fight, but you do not get things all your own way. You have none of the other characters' special skills - the Sage's ESP, for instance, or the Trickster's low, devious cunning. Also, because you are of noble birth and follow the honourable traditions of your ancestors, you must be careful to stay true to the code of chivalry. You may take an experience point penalty if you behave in a dishonourable, cowardly or uncouth manner",
                1 :{name: 'Ambidextrousness', description: "You can wield two weapons (one in each hand) and make two strikes each Round. Any bonuses due to magical weapons should be figured separately - eg, if one of your swords gives +2 Fighting Prowess, you only get the +2 bonus for the attack you make with that weapon."},
                2 :{name: 'Unarmed martial arts', description: "When fighting without a weapon, you do not reduce your Fighting Prowess of damage rolls."},
            },
            2: { //Sage
                descr: "Your upbringing has been in the spartan Monastery of Illumination on the barren island of Kaxos. There you studied the Mystic Way - a series of demanding psionic disciplines and rigorous physical training.",
                1 :{name: "Archery", description: "As long as you have your bow and arrows, you can use the shoot option in combat. You do not have to be in an adjacent square in order to shoot. A shoot roll is just like a fight roll - that is, to hit you must roll equal to or under your Fighting Prowess on two Dice.\n Regardless of your rank, arrows inflict only one Die Endurance damage (less Armour Rating) on the target."},
                2 :{name: "Quarterstaff technique", description: "Your expertise in quarterstaff fighting includes a knowledge of critical nerve points. When attacking with the staff, you can elect to make your fight roll on three Dice instead of two. This is obviously more difficult, but it means that if you do hit you inflict an extra one Die damage and knock your foe off-balance, causing him to take his action at the end of the following Round (that is, as if he had an Awareness score of one)"},
                3  :{name: "Healing", description: "You can use this psionic ability at any time except during a combat. When you attempt to Heal, you decide how many points of Endurance you are going to use. You deduct these from your Endurance, then roll 1 Die-2 and multiply this by the number of points you expended. The result is the Healing energy (in the form of Endurance points) that you are able to draw from the Cosmic Flux. These points may be distributed as you wish among the players (including yourself). No player can increase his or her Endurance above its initial score, of course.\n An example will show how this works. Alfric is a Sage who decides to expend five Endurance in a Healing attempt. He thus rolls 1 Die-2 and multiplies the figure by five - rolling four on the Die, say, and thus getting a total of ten Endurance points. He could restore his own Endurance to what it was before he tried the Healing, and this would still leave him with five points to distribute to himself or his companions as he wishes.\n Negative results on the 1 Die-2 roll are counted as zero, as mentioned earlier. Your power of Healing is always a gamble, though, because you might roll one or two on the Die and thus get back no points from the Cosmic Flux."},
                4 :{name: "ESP", description: "The ability to detect thoughts"},
                5 :{name: "Paranormal Sight", description: "The ability to see through soft materials such as curtains, fog or water (not stone or metal)"},
                6 :{name: "Levitation", description: "The ability to negate the force of gravity on your body, allowing you to rise vertically into the air"},
                7 :{name: "Exorcism", description: "The ability to dispel ghosts and other wraiths by stifling the paranormal energies that sustain them"},
            },
            3: { //Enchanter
                descr: "Forget the mundane arts of swordplay. You can use a sword if you have to, but your true forte is in the manipulation of occult powers of Sorcery.\n Your special skills are more involved than those available to any other character because you have a host of useful and deadly spells at your command. The procedure for spellcasting is quite involved, so read the following stages carefully.",
                1 :{name: "Volcano Spray (Level 1)", description: "Causes all enemies in the vicinity to lose one Die Endurance.\n This is a Blasting spell, so it cannot be resisted.\nThe enemies' Armour Rating, if any, is deducted from the damage Die roll.\n For this and all other spells that affect multiple enemies, I assume that damage dice are rolled separately for each target."},
                2 :{name: "Nighthowl (Level 1)", description: "A Psychic spell that affects a single opponent.\n If the opponent fails to resist, he/she/it must make fight or shoot rolls using one Die more than usual (that is, on three Dice rather than two Dice) for the next four Rounds."},
                3 :{name: "White Fire (Level 1)", description: "This Blasting spell strikes one opponent, causing the loss of 2 Dice+2 Endurance (less Armour Rating)"},
                4 :{name: "Swordthrust (Level 2)", description: "A Blasting spell affecting one enemy, who loses 3 Dice+3 Endurance; armour reduces the damage in the usual way."},
                5 :{name: "Eye of the Tiger (Level 2)", description: "When this spell is cast, you can either add two to your Fighting Prowess and damage rolls or add one to the Fighting Prowess and damage rolls of everyone in the party including yourself.\n This lasts for four Rounds of combat."},
                6 :{name: "Immediate Deliverance (Level 2)", description: "Used during a combat from which you wish to flee, this spell Teleports everyone in the party to the exit (if there is one).\n You are then ready to beat a retreat in the next Round."},
                7 :{name: "Mists of Death (Level 3)", description: "All enemies in the vicinity lose two Dice Endurance if they fail to resist this Psychic spell. Armour gives no protection."},
                8 :{name: "The Vampire Spell (Level 3)", description: "This Psychic spell can be directed against a single foe, who loses four Dice Endurance if he fails to resist it.\n Some of the vital energy he loses is channelled into you: your own Endurance is increased by half the amount he loses (rounded down).\n Of course, your Endurance still cannot exceed its initial score."},
                9 :{name: "Sheet Lightning (Level 4)", description: "A powerful Blasting spell that inflicts 2 Dice+2 damage to all opponents in the vicinity. Armour protects from this as usual."},
                10 :{name: "Ghastly Touch (Level 4)", description: "This is the only spell that requires you to be in an adjacent square to your intended victim. It is a Psychic spell that affects one opponent, who loses seven Dice Endurance if he fails to resist it - and two Dice even if he does resist it. Armour gives no protection."},
                11 :{name: "Nemesis Bolt (Level 5)", description: "This highly focused bolt of energy strikes one foe, who loses 7 Dice+7 Endurance.\n  It is a Blasting spell, so armour will reduce the damage."},
                12 :{name: "Servile Enthralment (Level 5)", description: "This Psychic spell affects one enemy.\n If not resisted, it brings the enemy under your control.\n He/she/it simply stops moving and in non-combat situations may respond to your questions.\n If you order an Enthralled foe to fight for you (that is, against his own former companions), you must roll one Die: on a 6 he recovers his wits and attacks you.\n Enthralment lasts long enough for you to leave the vicinity, so you proceed as though you had slain the opponent in question."},
                13 :{name: "Summon Faltyn", description: "Calls a sly, faerie creature to serve you for a time"},
                14 :{name: "Prediction", description: "Grants a glimpse into possible futures"},
                15 :{name: "Detect spells", description: "Informs you when magic is operating nearby. There is no need to make Dice rolls to cast such spells because it will not usually matter whether it takes several attempts to get them to work."},
            },
            4: { //Trickster
                descr: "Some Adventurers are honest, chivalrous and honourable. Not you. You are basically a rogue - a likeable rogue, perhaps, but a rogue nonetheless. You live by your wits. If you can win a fight by trickery or by shooting someone in the back, you will. Cunning is your main weapon.\n But when you have to face someone in a straight fight, you are no pushover. After the Warrior, you are perhaps the best fighter in any party.",
                1 :{name: 'Dodging technique', description: "You are very adept at evading attacks. When an opponent makes a fight roll against you, he or she (or it) must roll 2 Dice+1 instead of the usual 2 Dice"},
                2 :{name: 'Archery', description: "As long as you have your bow and arrows, you can use the shoot option in combat. You do not have to be in an adjacent square in order to shoot. A shoot roll is just like a fight roll - that is, to hit you must roll equal to or under your Fighting Prowess on two Dice. \n Regardless of your rank, arrows inflict only one Die Endurance damage (less Armour Rating) on the target."},
                3 :{name: 'Quick Thinking', description: "Once in each combat you can use this ability to take two actions in the same Round. The first action happens at the point in the Round when you would normally get to act, that is, as governed by your Awareness. The second action comes at the end of the Round when everyone else has had a chance to do something"},
            },
        },
        items: {
            yes: 'Yes',
            no: 'No',
            closeLabel: 'Close',
            validate: 'Validate',
            itemsTitle: 'Items', 
            itemDeleteTitle: 'Deletion',
            itemDeleteMess: 'Delete',
            lossArmour: 'This will set your Armour Rating to zero',
            lossWeapon: 'This will make you lose : \n two points or Fighting Prowess, \n and two points of damage',
            tooMuchObjects: 'You already own ten objects, you can\'t add more.',
            addItem: 'Add item',
            withWhomToChange: 'With whom to change',
            justOneCharac: 'You have just one character in your team !',
            heHasTooMuch: 'This character has already ten objects in his inventory',
            tradingTitle: 'Trading items',
            chooseType: 'Choose a type of item :',
            typeName: 'Type a name',
            namePlaceholder: 'name',
            typeDescr: 'Type a description (optional)',
            descrPlaceholder: 'description',
            usingQty: 'Using quantity ?',
            chooseQty: 'Choose a quantity',
            type1: 'Object',
            type2: 'Weapon',
            type3: 'Armour',
        },
        forAlert: {
            validate: 'Validate',
            numSection: 'Section number',
            writeNote: 'Write your note here',
            diceNumber: 'Number of dice to launch',
            slotOne : 'Slot 1',
            slotTwo: 'Slot 2',
            slotThree: 'Slot 3',
            diceLaunchResult: ' dice(s) launched, result : ',
            lastBook: 'You are at the last book !',
            bookChoice: 'Make your choice :',
            loadingTitle: 'Loading Save',
            loadingMess: 'Load slot n° ',
            loadingWarning: ' ? \n current data will be lost !',
            team: 'Team',
            level: 'Level',
            book: 'Book',
            section: 'Section',
            deleteSlot: 'Delete this slot ?',
            characters: 'Character(s)',
            closingApp: 'Close application ?',
            closingAppMess: 'Do you want to leave Blood Sword ?',
        }
    }
    
};
