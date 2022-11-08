% 1. Each quiz consists of 8 questions.

% 2. There are 28 possible questions in total.

% 3. The first and last question have 3 possibilities:
%   First question: dawn/dusk, forest/river or moon/stars.
%   Last question: black/white, head/tails or left/right.

% 4. Question 2-7 are each drawn from a different question set and occur in random order.
%   Set #2: hate to be called, after you've died, known to history, potion.
%   Set #3: goblets, instrument, magical garden, boxes, flutterby bush.
%   Set #4: difficult to deal with, troll, which would you rather be.
%   Set #5: power, looking forward to learning, most like to study.
%   Set #6: bridge, cheating, muggle, nightmare, road, street.
%   Set #7: pet.

% 5. Each question has a different probability to occur on the quiz 
%   (depending on the size of the set it comes from), with the Pet 
%   question occurring 100% of the time.

% 6. There are 3⋅1⋅3⋅3⋅4⋅5⋅6⋅3 = 9720 quiz combinations 
%   and 6⋅15⋅17⋅20⋅16⋅20⋅24⋅6 = 1410048000 possible sortings.

question(q1, "Dawn or dusk?").
question(q2, "Forest or river?").
question(q3, "Moon or stars?").
question(q4, "Which of the following would you most hate people to call you?").
question(q5, "After you have died, what would you most like people to do when they hear your name?").
question(q6, "How would you like to be known to history?").
question(q7, "Given the choice, would you rather invent a potion that would guarantee you:").
question(q8, "Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary.  If it lured you, it would smell of:").
question(q9, "Four goblets are placed before you.  Which would you choose to drink?").
question(q10, "What kind of instrument most pleases your ear?").
question(q11, "You enter an enchanted garden.  What would you be most curious to examine first?").
question(q12, "Four boxes are placed before you. Which would you try and open?").
question(q13, "A troll has gone beserk in the Headmaster's study at Hogwarts.  It is about to smash, crush and tear several irreplaceable items and treasures. In which order would you rescue these objects from the troll's club, if you could?").
question(q14, "Which of the following do you find most difficult to deal with?").
question(q15, "Which would you rather be:").
question(q16, "If you could have any power, which would you choose?").
question(q17, "What are you most looking forward to learning at Hogwarts?").
question(q18, "Which of the following would you most like to study?").
question(q19, "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass.  Do you:").
question(q20, "One of your house mates has cheated in a Hogwarts exam by using a Self-Spelling Quill. Now he has come top of the class in Charms, beating you into second place. Professor Flitwick is suspicious of what happened.  He draws you to one side after his lesson and asks you whether or not your classmate used a forbidden quill.  What do you do?").
question(q21, "A Muggle confronts you and says that they are sure you are a witch or wizard.  Do you:").
question(q22, "Which nightmare would frighten you most?").
question(q23, "Which road tempts you most?").
question(q24, "Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source.  Do you:").
question(q25, "If you were attending Hogwarts, which pet would you choose to take with you?").
question(q26, "Black or white?").
question(q27, "Heads or tails?").
question(q28, "Left or right?").

answer(a1, "Dawn").
answer(a2, "Dusk").
answer(a3, "Forest").
answer(a4, "River").
answer(a5, "Moon").
answer(a6, "Stars").
answer(a7, "Ordinary").
answer(a8, "Ignorant").
answer(a9, "Cowardly").
answer(a10, "Selfish").
answer(a11, "Miss you, but smile").
answer(a12, "Ask for more stories about your adventures").
answer(a13, "Think with admiration of your achievements").
answer(a14, "I don't care what people think of me after I'm dead, it's what they think of me while I'm alive that counts").
answer(a15, "The Wise").
answer(a16, "The Good").
answer(a17, "The Great").
answer(a18, "The Bold").
answer(a19, "Love?").
answer(a20, "Glory?").
answer(a21, "Wisdom?").
answer(a22, "Power?").
answer(a23, "A crackling log fire").
answer(a24, "The sea").
answer(a25, "Fresh parchment").
answer(a26, "Home").
answer(a27, "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.").
answer(a28, "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.").
answer(a29, "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.").
answer(a30, "The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.").
answer(a31, "The violin").
answer(a32, "The trumpet").
answer(a33, "The piano").
answer(a34, "The drum").
answer(a35, "The silver leafed tree bearing golden apples").
answer(a36, "The fat red toadstools that appear to be talking to each other").
answer(a37, "The bubbling pool, in the depths of which something luminous is swirling").
answer(a38, "The statue of an old wizard with a strangely twinkling eye").
answer(a39, "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.").
answer(a40, "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.").
answer(a41, "The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.").
answer(a42, "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.'").
answer(a43, "First, a nearly perfected cure for dragon pox. Then student records going back 1000 years. Finally, a mysterious handwritten book full of strange runes.").
answer(a44, "First, student records going back 1000 years. Then a mysterious handwritten book full of strange runes. Finally, a nearly perfected cure for dragon pox.").
answer(a45, "First, a mysterious handwritten book full of strange runes. Then a nearly perfected cure for dragon pox. Finally, student records going back 1000 years.").
answer(a46, "First, a nearly perfected cure for dragon pox. Then a mysterious handwritten book full of strange runes. Finally, student records going back 1000 years.").
answer(a47, "First student records going back 1000 years. Then, a nearly perfected cure for dragon pox. Finally, a mysterious handwritten book full of strange runes.").
answer(a48, "First, a mysterious handwritten book full of strange runes. Then student records going back 1000 years. Finally, a nearly perfected cure for dragon pox.").
answer(a49, "Hunger").
answer(a50, "Cold").
answer(a51, "Loneliness").
answer(a52, "Boredom").
answer(a53, "Being ignored").
answer(a54, "Envied?").
answer(a55, "Imitated?").
answer(a56, "Trusted?").
answer(a57, "Praised?").
answer(a58, "Liked?").
answer(a59, "Feared?").
answer(a60, "The power to read minds").
answer(a61, "The power of invisibility").
answer(a62, "The power of superhuman strength").
answer(a63, "The power to speak to animals").
answer(a64, "The power to change the past").
answer(a65, "The power to change your appearance at will").
answer(a66, "Apparition and Disapparition (being able to materialize and dematerialize at will)").
answer(a67, "Transfiguration (turning one object into another object)").
answer(a68, "Flying on a broomstick").
answer(a69, "Hexes and jinxes").
answer(a70, "All about magical creatures, and how to befriend/care for them").
answer(a71, "Secrets about the castle").
answer(a72, "Every area of magic I can").
answer(a73, "Centaurs").
answer(a74, "Goblins").
answer(a75, "Merpeople").
answer(a76, "Ghosts").
answer(a77, "Vampires").
answer(a78, "Werewolves").
answer(a79, "Trolls").
answer(a80, "Attempt to confuse the troll into letting all three of you pass without fighting?").
answer(a81, "Suggest drawing lots to decide which of you will fight?").
answer(a82, "Suggest that all three of you should fight (without telling the troll)?").
answer(a83, "Volunteer to fight?").
answer(a84, "Lie and say you don't know (but hope that somebody else tells Professor Flitwick the truth).").
answer(a85, "Tell Professor Flitwick that he ought to ask your classmate (and resolve to tell your classmate that if he doesn't tell the truth, you will).").
answer(a86, "Tell Professor Flitwick the truth. If your classmate is prepared to win by cheating, he deserves to be found out. Also, as you are both in the same house, any points he loses will be regained by you, for coming first in his place.").
answer(a87, "You would not wait to be asked to tell Professor Flitwick the truth. If you knew that somebody was using a forbidden quill, you would tell the teacher before the exam started.").
answer(a88, "Ask what makes them think so?").
answer(a89, "Agree, and ask whether they'd like a free sample of a jinx?").
answer(a90, "Agree, and walk away, leaving them to wonder whether you are bluffing?").
answer(a91, "Tell them that you are worried about their mental health, and offer to call a doctor.").
answer(a92, "Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.").
answer(a93, "An eye at the keyhole of the dark, windowless room in which you are locked.").
answer(a94, "Waking up to find that neither your friends nor your family have any idea who you are.").
answer(a95, "Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you.").
answer(a96, "The wide, sunny, grassy lane").
answer(a97, "The narrow, dark, lantern-lit alley").
answer(a98, "The twisting, leaf-strewn path through woods").
answer(a99, "The cobbled street lined with ancient buildings").
answer(a100, "Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?").
answer(a101, "Draw your wand and try to discover the source of the noise?").
answer(a102, "Draw your wand and stand your ground?").
answer(a103, "Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?").
answer(a104, "Tabby cat").
answer(a105, "Siamese cat").
answer(a106, "Ginger cat").
answer(a107, "Black cat").
answer(a108, "White cat").
answer(a109, "Tawny owl").
answer(a110, "Screech owl").
answer(a111, "Brown owl").
answer(a112, "Snowy owl").
answer(a113, "Barn owl").
answer(a114, "Common toad").
answer(a115, "Natterjack toad").
answer(a116, "Dragon toad").
answer(a117, "Harlequin toad").
answer(a118, "Three toed tree toad").
answer(a119, "Black").
answer(a120, "White").
answer(a121, "Heads").
answer(a122, "Tails").
answer(a123, "Left").
answer(a124, "Right").