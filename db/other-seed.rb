puppies:



Notebook.create(user_id: 12, title: "Sorting Algorithm")

Note.create(user_id: 1, notebook_id: 12, title: "Bubble Sort",
body:  "<pre><code>def bubble_sort(array)\n  n = array.length\n  loop do\n    swapped = false\n\n    (n-1).times do |i|\n      if array[i] &gt; array[i+1]\n        array[i], array[i+1] = array[i+1], array[i]\n        swapped = true\n      end\n    end\n\n    break if not swapped\n  end\n\n  array\nend</code></pre><p></p><p><em>Bubble sort</em> is a simple sorting algorithm. The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second, it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.<a href=\"https://en.wikipedia.org/wiki/Sorting_algorithm#cite_note-28\">[28]</a> This algorithm's average and worst-case performance is O(<em>n</em>2), so it is rarely used to sort large, unordered data sets. Bubble sort can be used to sort a small number of items (where its asymptotic inefficiency is not a high penalty). Bubble sort can also be used efficiently on a list of any length that is nearly sorted (that is, the elements are not significantly out of place). For example, if any number of elements are out of place by only one position (e.g. 0123546789 and 1032547698), bubble sort's exchange will get them in order on the first pass, the second pass will find all elements in order, so the sort will take only 2<em>n</em> time.</p><p></p><p></p>")


Note.create(user_id: 1, notebook_id: 1, title: "Bubble Sort",
body:  "<pre><code>def bubble_sort(array)\n  n = array.length\n  loop do\n    swapped = false\n\n    (n-1).times do |i|\n      if array[i] &gt; array[i+1]\n        array[i], array[i+1] = array[i+1], array[i]\n        swapped = true\n      end\n    end\n\n    break if not swapped\n  end\n\n  array\nend</code></pre><p></p><p><em>Bubble sort</em> is a simple sorting algorithm. The algorithm starts at the beginning of the data set. It compares the first two elements, and if the first is greater than the second, it swaps them. It continues doing this for each pair of adjacent elements to the end of the data set. It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.<a href=\"https://en.wikipedia.org/wiki/Sorting_algorithm#cite_note-28\">[28]</a> This algorithm's average and worst-case performance is O(<em>n</em>2), so it is rarely used to sort large, unordered data sets. Bubble sort can be used to sort a small number of items (where its asymptotic inefficiency is not a high penalty). Bubble sort can also be used efficiently on a list of any length that is nearly sorted (that is, the elements are not significantly out of place). For example, if any number of elements are out of place by only one position (e.g. 0123546789 and 1032547698), bubble sort's exchange will get them in order on the first pass, the second pass will find all elements in order, so the sort will take only 2<em>n</em> time.</p><p></p><p></p>")






Notebook.create(user_id: 1, title: "Explained like I'm 5")





Note.create(user_id: 1, notebook_id: 1, title:"During the height of the cold war, Neil Armstrong's final task on the moon was to place memorial items honoring fallen Russian cosmonauts.", body: "On 26 April 1967, Komarov was given a state funeral in Moscow, and his ashes were interred in the Kremlin Wall Necropolis at Red Square. The American astronauts requested the Soviet government to allow a representative to attend, but were turned down.

Komarov was posthumously awarded his second Order of Lenin and also the Order of Hero of the Soviet Union.[citation needed]

On 25 April 1968, a memorial service was held for Komarov at the crash site near Orsk 51°21′41.67″N 59°33′44.75″E. Kamanin noted in his diary that over 10,000 people were present at this service, some driving hundreds of kilometres for the event.

Komarov has been featured on commemorative First Day Covers and stamps for his contribution to the space program – from several different countries.

Komarov is commemorated with other prominent figures from the early Russian space program with a bust on Cosmonauts Alley in Moscow, and he is also honored with a monument at the crash site near Orsk.


Commemorative plaque and the Fallen Astronaut sculpture left on the Moon
Before leaving the Moon on Apollo 11, Neil Armstrong's final task was to place a small package of memorial items to honor Komarov, Yuri Gagarin, and the Apollo 1 astronauts Virgil Grissom, Edward White, and Roger Chaffee. Komarov's name also appears on a commemorative plaque left at Hadley Rille on the Moon by the commander of Apollo 15, David Scott in memory of 14 deceased NASA astronauts and USSR cosmonauts, along with a small sculpture representing the Fallen Astronaut on 1 August 1971. This plaque and the sculpture represent those astronauts and cosmonauts who died in the quest to reach outer space and the Moon.")


Note.create(user_id: 1, notebook_id: 1, title: "Ancient Greeks had a word, akrasia, to describe the lack of will that prevents us from doing something that we know is good for us",
body: "The problem goes back at least as far as Plato. Socrates (in Plato's Protagoras) asks precisely how this is possible—if one judges action A to be the best course of action, why would one do anything other than A?

In the dialogue Protagoras, Socrates attests that akrasia does not exist, claiming “No one goes willingly toward the bad” (358d). If a person examines a situation and decides to act in the way he determines to be best, he will actively pursue this action, as the best course is also the good course, i.e. man's natural goal. An all-things-considered assessment of the situation will bring full knowledge of a decision's outcome and worth linked to well-developed principles of the good. A person, according to Socrates, never chooses to act poorly or against his better judgment; actions that go against what is best are only a product of being ignorant of facts or knowledge of what is best or good.

Aristotle on the other hand took a more empirical approach to the question, acknowledging that we intuitively believe in akrasia. He distances himself from the Socratic position by locating the breakdown of reasoning in an agent’s opinion, not his appetition. Now, without recourse to appetitive desires, Aristotle reasons that akrasia occurs as a result of opinion. Opinion is formulated mentally in a way that may or may not imitate truth, while appetites are merely desires of the body. Thus opinion is only incidentally aligned with or opposed to the good, making an akratic action the product of opinion instead of reason. For Aristotle, the antonym of akrasia is enkrateia, which means in power (over oneself).

The word akrasia occurs twice in the Koine Greek New Testament. In Matthew 23:25 Jesus uses it to describe hypocritical religious leaders. The Apostle Paul also gives the threat of temptation through akrasia as a reason for a husband and wife to not deprive each other of sex (1 Corinthians 7:5).

In Edmund Spenser's The Faerie Queene, book II, Acrasia, the embodiment of intemperance dwelling in the Bower of Bliss, had the Circe-like capacity of transforming her lovers into monstrous animal shapes.")

Note.create(user_id: 1, notebook_id: 2, title: "If insects do not have lungs, how do they drown?", body: "They still absorb oxygen from the air through spiracles. When the spiracles are submerged, they can't absorb oxygen.
Drowning has less to do with having lungs and more to do with not having gills.
Insects breathe through tubes in their bodies called trachea - the openings are called spiracles. The trachea branch from large central tubes from the spiracle openings into thinner and thinner tubes that permeate the insect's body, essentially giving their tissues direct access to air. Breathing is, for the most part, passive. The oxygen diffuses throughout the tube from the air, and CO2 diffuses out. Some insects, especially larger ones, have mechanisms to drive air flow to increase the amount of oxygen they get.
Many insects (and spiders ) can trap a bubble of air around their abdomens, which is often enough for them to breathe long enough to escape the water (not to mention giving them greater buoyancy), but that supply will not last forever if they stay submerged. Because the direct access requires air, which exchanges gasses much more readily than water, if water gets into the trachea the insect will drown in pretty much the same way as animals do when water gets into lungs - both mechanisms are poorly adapted to exchange O2 and CO2 in water, and can't do it fast enough.
A surfactant (like soap) lowers the surface tension of water, which will collapse the bubble around the insect, drowning it much more quickly. Some insects can close the spiracles and trap some air inside their bodies, but that oxygen won't last long.
There are many arthropods that live in the water, including some insects. Some use the method mentioned above (trapping air around them), but many athropods do, in fact, have gills (like crayfish ). Those with gills have the same problem in reverse - gills are poorly adapted to exchanging gasses without water, so they suffocate out of water.")

Note.create(user_id: 1, notebook_id: 2, title: "Why does lemon + baking soda whiten teeth?", body: "It will whiten, but it will also wear away the enamel. It's a bad idea to mix an acid with an abrasive on your teeth. The acid weakens the enamel, making it come off more easily.
Enamel is actually clear - dentin is what gets stained in the long term. Enamel staining can be taken off with abrasion. You can get some whitening effect through the enamel and to the dentin, which is what is happening. But commercial and professional products will do this without the unnecessary abrasion of enamel.
You should seriously tell your girlfriend to stop. Enamel doesn't get replaced, but you can somewhat fix it with fluoride. But if you keep stripping enamel away there's nothing you can do and then you'll just lose your teeth.
You can hear more dentists recommending against the process here: https://www.sharecare.com/health/teeth-whitening/baking-soda-lemon-juice-used-teeth-whitener
And no, that's not just because they're out to make money. They'll even point you to off-the-shelf whitening products, from which they get no commission. If they were actually after money, they'd encourage this because they'd get to make you a nice set of dentures to replace all the teeth you lose.")

Note.create(user_id: 1, notebook_id: 2, title: "How Li-Fi Works?", body: "Supersheesh is right, but I don't think it was very eli5.
Let's take a dark room. Most bathrooms work very well for this.
Now computers always send things as 1s and 0s. So lets assign things. Light off is 0. Light on is 1.
Now we can send messages. But it is so slow that humans see the light dark. We don't want this, we want the light on.
So we use something computers do very well, talk very fast. So now instead of slowly flicking the light on and off, instead we turn the light on and off billions of times a second. Now the humans can't tell the difference. All the humans see is that the light is basically half as strong.
So lets fix that half strength.
Humans only see particular colors. In particular we don't see infrared or ultraviolet. There are other colors of light that we don't see, or see very weakly. We take the normal lights in the room, but we block that normal light from sending infrared. To the humans this did not change the light at all. To the computer though, it is easy enough to make a computer that only sees infrared. Now we can turn that infrared light on and off very quickly for the message.
To the human the light doesn't change, but now the computers can talk to each other with light very quickly and easily.
Even better there are many different infrared colors. This means that the computers can use different colors of infrared to talk and speed up their talking with each other.
However infrared is old technology. It doesn't bounce very well in most places. This can be good or bad. It also has a lot of interference because heat shows up in infrared.
So we go back to the color choices. Since we can use any color we want, we can choose any color that humans don't see very well, but we want ones that bounce off walls very well. Right now there are many different ideas of the best color to use, and it is a very complex decision.
Now you might have noticed that we have something of a problem. How do we tell the difference between a long series of 1111111...111111 and simply the light being on? Actually the fix to this is to add security. Encrypting the data means that it is impossible to have a long stream of 11111...1111 (or as close to impossible as we can make it). Instead each bit will appear to be randomly 1 or 0, exactly the result we need. So added security makes it possible to send any message and have it received.
So that's the basics of lifi. Flicking a light on and off really really quickly. Everything after that is to make it nicer for humans or to deal with seemingly weird failures.")
