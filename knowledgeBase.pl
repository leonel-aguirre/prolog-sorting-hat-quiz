% Data collected from: https://www.reddit.com/r/Pottermore/comments/44os14/pottermore_sorting_hat_quiz_analysis/.

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

weights(a1, [27.31307938, 25.92258493, -28.87112887, -22.21557617]).
weights(a2, [-27.07398054, -25.53254608, 30.81085673, 23.30406316]).
weights(a3, [28.81628797, 26.53804988, -29.61546288, -24.03943097]).
weights(a4, [-27.41760127, -25.25110895, 29.47879885, 25.29708668]).
weights(a5, [-26.99015136, 29.21779485, -24.15712033, 24.38099947]).
weights(a6, [28.653864, -28.67894522, 26.97274135, -24.67312267]).
weights(a7, [-11.75519742, -10.92370078, -10.86606985, 35.83478687]).
weights(a8, [-12.60998441, 40.265642, -10.2989145, -14.55694498]).
weights(a9, [42.87682039, -15.5525649, -16.60672085, -9.827956095]).
weights(a10, [-15.48432768, -18.0245794, 45.89311983, -10.87602756]).
weights(a11, [-13.7807683, -13.91040329, 46.49760029, -16.18133969]).
weights(a12, [41.37660787, -11.1817536, -21.22463154, -7.60796961]).
weights(a13, [-10.57625107, 40.25907324, -11.94444904, -15.29969347]).
weights(a14, [-12.2082282, -9.366492361, -12.77709973, 36.48253984]).
weights(a15, [-12.39357202, 40.07671351, -12.50534524, -13.46060562]).
weights(a16, [-14.87071125, -16.00228703, 43.98568091, -11.52986338]).
weights(a17, [-11.48453278, -10.16648232, -15.37467794, 38.23373882]).
weights(a18, [41.31616697, -14.48335335, -19.24767597, -5.019035161]).
weights(a19, [-15.09086809, -13.3779201, 43.10458952, -13.19529925]).
weights(a20, [43.15790393, -12.41975537, -18.22940109, -10.43593648]).
weights(a21, [-15.52102159, 42.01691959, -8.467320109, -15.59260888]).
weights(a22, [-12.48667468, -10.53541555, -11.03327086, 36.26321903]).
weights(a23, [42.20240168, -8.357753463, -22.78056435, -8.243194893]).
weights(a24, [-8.586342901, -7.507111586, -16.19218269, 35.04330848]).
weights(a25, [-12.55006436, 38.93217968, -11.48254915, -14.14056557]).
weights(a26, [-14.20337805, -16.50952349, 45.40854108, -13.23654274]).
weights(a27, [-13.99879538, 40.11098139, -9.406077434, -15.58163736]).
weights(a28, [-16.25660413, -14.34614176, 46.3278991, -14.08038371]).
weights(a29, [40.92686336, -11.34270662, -17.29827761, -10.81718067]).
weights(a30, [-10.00982635, -11.93103289, -11.01834159, 34.71808527]).
weights(a31, [-10.33126266, -10.98565505, -12.52911445, 35.07799069]).
weights(a32, [-14.00827913, -14.41607143, 43.22386173, -12.52828715]).
weights(a33, [-12.98508415, 40.30457373, -12.26180667, -12.91961924]).
weights(a34, [44.15185475, -14.48981764, -19.39087512, -7.911670833]).
weights(a35, [-11.70832774, 38.10156627, -10.47728774, -14.4066053]).
weights(a36, [-11.38975609, -19.363342, 45.66505899, -12.41636611]).
weights(a37, [-18.79689945, -8.167283167, -10.95346404, 39.02161532]).
weights(a38, [41.23017056, -14.2140387, -17.91308959, -6.702406531]).
weights(a39, [-22.52161163, -11.39500098, 46.9276079, -10.3717712]).
weights(a40, [-10.90548604, -9.593133701, -16.14193004, 38.09339906]).
weights(a41, [-12.21860138, 37.71117418, -10.66015592, -13.04771215]).
weights(a42, [42.85559784, -13.92739453, -18.49815241, -7.988791579]).
weights(a43, [29.36249156, -26.05442147, 22.00609388, -23.63817211]).
weights(a44, [-9.379429293, -7.076799721, -13.36717194, 31.65289076]).
weights(a45, [-9.700034249, 42.34681029, -10.37103553, -20.32349944]).
weights(a46, [43.98182657, -7.569136306, -22.75962425, -11.54315695]).
weights(a47, [-6.966899719, -17.49563511, 41.93544305, -15.12882189]).
weights(a48, [-24.05779612, 29.0768229, -23.46927222, 20.08155918]).
weights(a49, [-28.21972672, 26.96307844, 31.95072949, -29.10382335]).
weights(a50, [-24.05310951, -23.48514187, 27.93543613, 21.04293859]).
weights(a51, [29.03349777, -28.05313842, 24.90792029, -23.82686029]).
weights(a52, [29.94248441, -19.42137955, -35.99363729, 26.75190709]).
weights(a53, [-26.09709417, 31.63714224, -24.79204017, 21.68704531]).
weights(a54, [-23.38608287, 29.56240784, -24.43494458, 20.27897556]).
weights(a55, [-10.02110229, 41.34717373, -13.15711695, -15.54384446]).
weights(a56, [27.74841466, -26.66929985, 25.37043067, -24.89501457]).
weights(a57, [34.35667446, -14.96501695, -28.68955105, 10.71436737]).
weights(a58, [-10.98726978, -16.01999991, 43.07559247, -13.92482477]).
weights(a59, [-11.84099775, -9.375944575, -10.65163345, 33.45753935]).
weights(a60, [-24.17506604, 28.02462586, -25.1266397, 22.78835747]).
weights(a61, [30.94950708, -16.89419896, 2.016868281, -14.33237054]).
weights(a62, [-21.74919519, -23.24640341, 35.67345622, 11.88982939]).
weights(a63, [-26.37624459, 19.87071358, 34.83739639, -26.54712946]).
weights(a64, [0.332990318, -17.10768552, -14.56762339, 33.38204993]).
weights(a65, [-2.458592609, 35.53189074, -13.20459011, -17.12880799]).
weights(a66, [31.23750325, -25.11011193, -28.8908555, 25.28530318]).
weights(a67, [-14.19988561, 38.71431659, -9.304880652, -13.19296379]).
weights(a68, [29.72186159, -27.4287872, 21.78213483, -20.92465167]).
weights(a69, [-7.778462793, -13.81585107, -13.30728434, 35.89289216]).
weights(a70, [-12.54890353, -18.47726582, 48.09882314, -15.26330099]).
weights(a71, [42.92989547, -9.446864814, -19.33008843, -13.34053828]).
weights(a72, [-11.12421806, 39.19823338, -9.845999385, -16.51249774]).
weights(a73, [27.3714009, 24.0994136, -27.38973573, -22.53814016]).
weights(a74, [-19.64625528, 31.81426945, -18.49200208, 8.733770043]).
weights(a75, [-22.93634644, -24.86864463, 28.12543954, 21.80812282]).
weights(a76, [27.95707126, 27.5289272, -30.00833793, -23.97913683]).
weights(a77, [-11.72034886, -10.41163098, -11.93375648, 36.37906121]).
weights(a78, [24.35997997, -25.33791883, 27.00762335, -24.61394017]).
weights(a79, [-28.33101425, -24.04994569, 34.15713638, 19.82128656]).
weights(a80, [-12.21949559, 39.18673579, -14.32592834, -10.15802264]).
weights(a81, [-16.77231763, -9.948193394, 45.02575153, -15.61728574]).
weights(a82, [-7.926035393, -10.24499201, -15.64058444, 37.26154927]).
weights(a83, [40.38906615, -7.371976409, -20.39648571, -11.08309843]).
weights(a84, [-13.48432155, -17.29439279, 41.3626604, -8.254486504]).
weights(a85, [42.1033363, -13.65683918, -13.49218299, -12.21474272]).
weights(a86, [-10.92391358, 38.69530242, -13.4125977, -12.69153243]).
weights(a87, [-13.12925161, -8.009293327, -13.65120757, 36.94995767]).
weights(a88, [-18.51698777, 43.19651328, -5.627175508, -16.24151016]).
weights(a89, [-5.297205391, -17.31138241, -10.74329071, 35.97599782]).
weights(a90, [40.41114795, -8.735245784, -18.1847105, -11.05628226]).
weights(a91, [-19.40603566, -12.71912669, 45.08269049, -11.02696975]).
weights(a92, [-16.19003593, 38.81152886, -12.6984308, -8.023692844]).
weights(a93, [41.33854576, -10.03525098, -15.91229289, -13.32183833]).
weights(a94, [-12.96227842, -16.55271609, 45.43418375, -13.83281749]).
weights(a95, [-15.94847125, -5.745641099, -14.83832559, 38.61738702]).
weights(a96, [-11.22676033, -19.11937453, 44.82488386, -11.93639792]).
weights(a97, [-8.811621902, -12.02741304, -14.9112595, 37.69703494]).
weights(a98, [42.24315194, -12.70821137, -18.82743135, -9.136595044]).
weights(a99, [-12.43166553, 35.99676211, -8.879904942, -12.94114978]).
weights(a100, [-14.65804948, -15.8493254, 44.16189924, -11.70782536]).
weights(a101, [39.6505303, -10.56490073, -17.17403609, -10.73515537]).
weights(a102, [-10.77612981, -13.71260225, -11.14976792, 37.69080105]).
weights(a103, [-11.6321132, 37.79842292, -12.45575343, -12.64871392]).
weights(a104, [21.85474842, -15.70618627, -18.29258668, 13.43032963]).
weights(a105, [1.195226867, -16.3304582, -16.65956807, 34.18266524]).
weights(a106, [0.839050219, -14.37048947, -16.95729454, 33.06015636]).
weights(a107, [-3.31335692, -15.09699497, -14.64059784, 34.29663831]).
weights(a108, [-2.010973881, -12.31639926, -14.30409975, 30.4632386]).
weights(a109, [-0.6218274, 33.24307636, -15.52800838, -16.11836321]).
weights(a110, [4.48854486, 32.14465664, -17.05815483, -18.02695104]).
weights(a111, [0.915519162, 35.14392634, -16.87498976, -18.23297959]).
weights(a112, [-12.04575153, 8.511453759, 13.7489804, -8.123961651]).
weights(a113, [-1.251899991, 34.06472026, -16.7952532, -15.0925878]).
weights(a114, [-1.094048974, -21.72975856, 41.40180117, -16.72326959]).
weights(a115, [-3.687242276, -21.61573659, 42.45530748, -15.4372711]).
weights(a116, [19.14913015, -8.1912111, 0.748385153, -10.04837708]).
weights(a117, [-5.394126249, -20.42261255, 42.91383116, -15.27359533]).
weights(a118, [-10.19693536, 7.340865871, 12.782762, -6.99714692]).
weights(a119, [28.91718573, -21.62314612, -30.0065675, 25.44278097]).
weights(a120, [-29.32055396, 24.3783615, 32.97249578, -25.34810279]).
weights(a121, [-25.36928858, 22.41930741, 32.6497265, -27.11046939]).
weights(a122, [30.63227296, -23.60407631, -31.08418312, 25.892524]).
weights(a123, [-27.37364476, 28.45701138, -23.55695615, 25.02450925]).
weights(a124, [27.02941592, -27.55102988, 25.78541162, -23.44987827]).

% 📏😸 Rules Start Here 😸📏