/**
 * ukraineRegionFacts.js
 * -------------------------------------------------------------
 * Interesting facts about the 27 regions of Ukraine:
 *   24 oblasts + the Autonomous Republic of Crimea
 *   + 2 cities with special status (Kyiv and Sevastopol).
 *
 * Keys are ISO 3166-2:UA codes, which are the IDs commonly used
 * on SVG maps of Ukraine — so you can usually do:
 *
 *   const info = regionFacts[clickedSvgPathId];
 *
 * Each entry has:
 *   name   – English name
 *   nameUk – Ukrainian name
 *   facts  – array of 3 short facts
 *
 * Note: Crimea and Sevastopol are internationally recognised as
 * part of Ukraine but have been under Russian occupation since 2014.
 * -------------------------------------------------------------
 */

export const regionFacts = {
  "UA-05": {
    name: "Vinnytsia Oblast",
    nameUk: "Вінницька область",
    facts: [
      "Vinnytsia is home to one of the largest floating fountains in Europe, the Roshen fountain, which puts on light-and-music shows over the Southern Bug river.",
      "During World War II, Adolf Hitler's Eastern Front headquarters, code-named 'Werwolf,' was built in a forest just outside the city.",
      "The renowned surgeon Nikolai Pirogov spent his final years on his estate here, where his embalmed body is still preserved in a small church museum."
    ]
  },
  "UA-07": {
    name: "Volyn Oblast",
    nameUk: "Волинська область",
    facts: [
      "The Shatsk Lakes in the north-west include Lake Svityaz, the deepest natural lake in Ukraine at roughly 58 metres.",
      "The regional capital, Lutsk, is dominated by Lubart's Castle, a striking 14th-century fortress that appears on Ukraine's 200-hryvnia banknote.",
      "The region gives its name to historic Volhynia, and towns like Volodymyr are among the oldest settlements in the country."
    ]
  },
  "UA-12": {
    name: "Dnipropetrovsk Oblast",
    nameUk: "Дніпропетровська область",
    facts: [
      "The city of Dnipro was a 'closed city' in Soviet times because of its secret rocket and missile plant, Pivdenmash (Yuzhmash).",
      "Kryvyi Rih sits on one of the world's largest iron-ore basins and is a powerhouse of Ukrainian metallurgy.",
      "Kryvyi Rih is also one of the longest cities in Europe, stretching over 120 kilometres from end to end."
    ]
  },
  "UA-14": {
    name: "Donetsk Oblast",
    nameUk: "Донецька область",
    facts: [
      "The city of Donetsk was founded in the 19th century by a Welsh industrialist, John Hughes, and was originally called Yuzovka after him.",
      "It lies at the heart of the Donbas, Ukraine's historic coal-mining region built on deep seams of coal and heavy industry.",
      "The town of Soledar was famous for its vast underground salt mines, whose galleries were large enough to host concerts and even a football match."
    ]
  },
  "UA-18": {
    name: "Zhytomyr Oblast",
    nameUk: "Житомирська область",
    facts: [
      "Sergei Korolev, the chief designer behind the Soviet space programme and Sputnik, was born in the city of Zhytomyr.",
      "The region lies in Polissia, a land of dense forests, rivers and bogs, and is known for its high-quality granite quarries around Korosten.",
      "Korosten was a stronghold of the Drevlians, an early East Slavic tribe famous from the chronicles for their revolt against Princess Olga."
    ]
  },
  "UA-21": {
    name: "Zakarpattia Oblast",
    nameUk: "Закарпатська область",
    facts: [
      "This is Ukraine's only region beyond the Carpathian Mountains, and it borders four countries: Hungary, Slovakia, Romania and Poland.",
      "A marker near the village of Dilove, placed in Austro-Hungarian times, claims to mark the geographical centre of Europe.",
      "The area is exceptionally multicultural, with Hungarian, Romanian and Rusyn communities, and it is known for its vineyards and thermal springs."
    ]
  },
  "UA-23": {
    name: "Zaporizhzhia Oblast",
    nameUk: "Запорізька область",
    facts: [
      "The island of Khortytsia in the Dnipro river was a historic centre of the Zaporozhian Cossacks and their fortified Sich.",
      "The Dnipro Hydroelectric Station (DniproHES), one of the Soviet Union's great engineering projects, spans the river here.",
      "The region is home to the Zaporizhzhia Nuclear Power Plant, the largest nuclear power station in Europe."
    ]
  },
  "UA-26": {
    name: "Ivano-Frankivsk Oblast",
    nameUk: "Івано-Франківська область",
    facts: [
      "The region is a gateway to the Carpathians and a magnet for hikers and skiers, including the popular Bukovel resort.",
      "Hoverla, Ukraine's highest peak at 2,061 metres, rises on the border between this oblast and Zakarpattia.",
      "Both the oblast and its capital are named after Ivan Franko, one of Ukraine's greatest writers; the city was formerly called Stanislaviv."
    ]
  },
  "UA-32": {
    name: "Kyiv Oblast",
    nameUk: "Київська область",
    facts: [
      "The oblast surrounds the capital on all sides but does not include the city of Kyiv itself, which is administered separately.",
      "It contains the Chornobyl Exclusion Zone, the sealed-off area around the 1986 nuclear disaster.",
      "In Bila Tserkva you'll find Oleksandriya, one of the largest and most beautiful landscape parks in Ukraine."
    ]
  },
  "UA-35": {
    name: "Kirovohrad Oblast",
    nameUk: "Кіровоградська область",
    facts: [
      "One of the commonly calculated geographical centres of Ukraine lies within this oblast.",
      "The capital has changed names more than almost any other Ukrainian city — from Yelisavetgrad to Zinovievsk, Kirovo, Kirovohrad and finally Kropyvnytskyi.",
      "Kropyvnytskyi is regarded as a birthplace of Ukrainian professional theatre, associated with the Tobilevych family of playwrights and actors."
    ]
  },
  "UA-09": {
    name: "Luhansk Oblast",
    nameUk: "Луганська область",
    facts: [
      "This is the easternmost region of Ukraine, sharing a long border with Russia.",
      "The city of Luhansk grew up around a cannon foundry established in 1795 to arm the Black Sea fleet.",
      "Together with Donetsk it forms the Donbas, a coal-rich industrial heartland."
    ]
  },
  "UA-46": {
    name: "Lviv Oblast",
    nameUk: "Львівська область",
    facts: [
      "The historic centre of Lviv is a UNESCO World Heritage Site, blending Gothic, Renaissance and Baroque architecture.",
      "Lviv is the heart of Ukrainian coffee culture, packed with atmospheric coffee houses and cafés.",
      "Lviv University, founded in 1661, is one of the oldest universities in Eastern Europe."
    ]
  },
  "UA-48": {
    name: "Mykolaiv Oblast",
    nameUk: "Миколаївська область",
    facts: [
      "Mykolaiv is known as the 'city of shipbuilders' and was long one of the most important shipyards on the Black Sea.",
      "It hosts the Mykolaiv Astronomical Observatory, founded in 1821 and among the oldest in the region.",
      "The city sits at the meeting point of the Southern Bug and Ingul rivers, near the Black Sea coast."
    ]
  },
  "UA-51": {
    name: "Odesa Oblast",
    nameUk: "Одеська область",
    facts: [
      "Odesa's Potemkin Stairs became world-famous through Sergei Eisenstein's 1925 film 'Battleship Potemkin.'",
      "Founded by decree of Catherine the Great in 1794, the city became a booming free port and one of the most cosmopolitan places in the empire.",
      "Beneath the city and surrounding area lie the Odesa catacombs, a maze of old stone quarries thought to be among the longest in the world."
    ]
  },
  "UA-53": {
    name: "Poltava Oblast",
    nameUk: "Полтавська область",
    facts: [
      "The decisive Battle of Poltava in 1709 saw Peter the Great defeat Charles XII of Sweden, reshaping the balance of power in Eastern Europe.",
      "The region is a cradle of modern Ukrainian literature: Ivan Kotliarevsky wrote here, and Nikolai Gogol was born nearby in Sorochyntsi.",
      "Poltava is famous in Ukrainian cuisine for its halushky, soft dumplings celebrated with a monument in the city."
    ]
  },
  "UA-56": {
    name: "Rivne Oblast",
    nameUk: "Рівненська область",
    facts: [
      "Near Klevan lies the 'Tunnel of Love,' a stretch of railway framed by trees grown into a green arch that draws couples and photographers.",
      "The Rivne Nuclear Power Plant is one of Ukraine's major energy producers.",
      "Much of the region belongs to Polissia, a low-lying land of forests, rivers and wetlands."
    ]
  },
  "UA-59": {
    name: "Sumy Oblast",
    nameUk: "Сумська область",
    facts: [
      "The town of Hlukhiv once served as a capital of the Cossack Hetmanate in the 18th century.",
      "In Trostianets stands one of the oldest chocolate-making sites in Ukraine, now home to a chocolate museum.",
      "The oblast runs along the border with Russia and is dotted with old estates and Cossack-era churches."
    ]
  },
  "UA-61": {
    name: "Ternopil Oblast",
    nameUk: "Тернопільська область",
    facts: [
      "The city of Ternopil is built around a large artificial pond right in its centre, a favourite spot for locals.",
      "The region is dotted with medieval castles, including Zbarazh, which inspired scenes in Henryk Sienkiewicz's historical novels.",
      "Beneath the Podillia countryside lies Optymistychna Cave, the longest gypsum cave in the world at over 260 kilometres of passages."
    ]
  },
  "UA-63": {
    name: "Kharkiv Oblast",
    nameUk: "Харківська область",
    facts: [
      "Kharkiv was the first capital of Soviet Ukraine from 1919 to 1934, before the seat of government moved to Kyiv.",
      "Its Freedom Square is one of the largest city squares in Europe, framed by the pioneering constructivist Derzhprom building.",
      "The city is a major centre of science and education, home to one of Ukraine's oldest universities, founded in 1804."
    ]
  },
  "UA-65": {
    name: "Kherson Oblast",
    nameUk: "Херсонська область",
    facts: [
      "Kherson was founded in 1778 by Prince Potemkin as the site of the Russian Empire's first Black Sea shipyard.",
      "The region is renowned across Ukraine for its watermelons and melons grown in the warm southern steppe.",
      "It contains Askania-Nova, a famous biosphere reserve of untouched steppe where zebras, bison and antelope roam free."
    ]
  },
  "UA-68": {
    name: "Khmelnytskyi Oblast",
    nameUk: "Хмельницька область",
    facts: [
      "Kamianets-Podilskyi is one of Ukraine's most dramatic towns, with an old city perched on an island of rock in a river canyon and guarded by a great fortress.",
      "The oblast and its capital are named after the Cossack leader Bohdan Khmelnytsky; the city was formerly called Proskuriv.",
      "It lies in historic Podillia, a region of fertile farmland and layered history."
    ]
  },
  "UA-71": {
    name: "Cherkasy Oblast",
    nameUk: "Черкаська область",
    facts: [
      "The town of Chyhyryn was the capital of Bohdan Khmelnytsky's Cossack state in the 17th century.",
      "The national poet Taras Shevchenko is buried on Taras Hill above the Dnipro near Kaniv, a major place of pilgrimage for Ukrainians.",
      "Uman is home to the exquisite Sofiyivka landscape park and is a pilgrimage destination for thousands of Hasidic Jews each year."
    ]
  },
  "UA-77": {
    name: "Chernivtsi Oblast",
    nameUk: "Чернівецька область",
    facts: [
      "The Residence of Bukovinian and Dalmatian Metropolitans in Chernivtsi, now part of the university, is a UNESCO World Heritage Site.",
      "The region lies in Bukovina, which was long ruled by Austria-Hungary and later Romania, giving it a distinctive Central European flavour.",
      "Chernivtsi is often called 'Little Vienna' for its elegant architecture and its historic mix of Ukrainian, Romanian, Jewish and German cultures."
    ]
  },
  "UA-74": {
    name: "Chernihiv Oblast",
    nameUk: "Чернігівська область",
    facts: [
      "Chernihiv is one of the oldest cities in Ukraine, preserving churches from the era of Kievan Rus such as the 11th-century Saviour Cathedral.",
      "The town of Baturyn served as the residence of Cossack Hetman Ivan Mazepa and a capital of the Hetmanate.",
      "The region's ancient monasteries and cave complexes make it a rich destination for lovers of medieval history."
    ]
  },
  "UA-43": {
    name: "Autonomous Republic of Crimea",
    nameUk: "Автономна Республіка Крим",
    facts: [
      "The Livadia Palace on the southern coast hosted the 1945 Yalta Conference, where Stalin, Roosevelt and Churchill met to shape the post-war world.",
      "Crimea is the homeland of the Crimean Tatars, an indigenous Turkic people whose Khan's Palace still stands in Bakhchysarai.",
      "The tiny Swallow's Nest castle, perched on a cliff above the sea near Yalta, is one of the most photographed landmarks in Ukraine."
    ]
  },
  "UA-30": {
    name: "Kyiv (city)",
    nameUk: "Київ",
    facts: [
      "Kyiv is over 1,500 years old and is often called the cradle of Kievan Rus, the medieval state from which Ukraine, Belarus and Russia trace roots.",
      "It holds two UNESCO World Heritage sites: Saint Sophia Cathedral and the Kyiv Pechersk Lavra, the Monastery of the Caves.",
      "The metro station Arsenalna, at about 105 metres deep, is one of the deepest underground stations in the world."
    ]
  },
  "UA-40": {
    name: "Sevastopol (city)",
    nameUk: "Севастополь",
    facts: [
      "Sevastopol is a historic naval city and has long been the main base of the Black Sea Fleet.",
      "It endured famous sieges during the Crimean War of 1854–55 and again in World War II, becoming a symbol of wartime endurance.",
      "On its outskirts lie the ruins of ancient Chersonesus, a Greek colony founded over 2,500 years ago and now a UNESCO World Heritage Site."
    ]
  }
};

export default regionFacts;
