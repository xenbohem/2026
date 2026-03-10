const books={

1:["Origins of Coffee","Coffee first grew wild in Ethiopia before spreading across Arabia."],
2:["Silk Road Tea","Tea traveled along ancient trade routes connecting China to Europe."],
3:["Matcha Ceremony","Japanese monks developed the spiritual preparation of powdered green tea."],
4:["British Tea Culture","Afternoon tea became a ritual of elegance in Victorian society."],
5:["Mystery of Earl Grey","Legend says the blend honored Charles Grey after a Chinese gift."],
6:["East India Trade","Tea commerce shaped global trade routes and empires."],
7:["Victorian Tea","Tea etiquette reflected refinement and social grace."],
8:["Lavender Infusions","Star's favorite floral drink of the café."],
9:["Milo's Garden","The sacred garden grows herbs of healing."],
10:["Healing Herbs","Ancient remedies hidden in leaves and roots."],

11:["Royal Courts","The traditions of British monarchy."],
12:["Rise of Empires","Civilizations rising and falling across history."],
13:["Shakespeare","Poetry and plays shaping English literature."],
14:["Natural History","Catalogues of animals and nature."],
15:["Ancient Wisdom","Philosophies of early civilizations."],
16:["Pliny the Elder","Roman scholar documenting the natural world."],
17:["Age of Sail","Exploration across the oceans."],
18:["European Monarchies","Lineages of kings and queens."],
19:["Philosophy of Manners","Etiquette as a noble discipline."],
20:["Kyoto Tea Houses","Sacred architecture of tea culture."],

21:["Star","Star grew into the protector of Chimera Café."],
22:["Chari","The quiet apprentice learning courage."],
23:["Milo","Guardian of the sacred garden."],
24:["Miki","Punk musician fighting for justice."],
25:["Hans","A refined vampire fox devoted to tea and knowledge."],
26:["Lab Escape","The night the chimera fled the laboratory."],
27:["Two Scientists","The mysterious creators behind the experiments."],
28:["Sanctuary","Yeshua opened a paradise beyond worlds."],
29:["Cafe Founding","The first day Chimera Café opened."],
30:["Future","The destiny yet unwritten."]
}

function openBook(id){

document.getElementById("bookPanel").style.display="flex"

document.getElementById("bookTitle").innerText=books[id][0]

document.getElementById("bookText").innerText=books[id][1]

}

function closeBook(){

document.getElementById("bookPanel").style.display="none"

}
