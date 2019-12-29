const SHOP_DATA = {
  products: [
    {
      id: 1,
      title: 'UnFu*k Yourself',
      imageUrl: 'https://i.ibb.co/H4KzZmP/unfu-k-yourself.jpg',
      subTitle: 'Get Out Of Your Head and Into Your Life',
      author: 'Gary John Bishop',
      narrator: 'Gary John Bishop',
      length: '3 hrs and 23 mins',
      releaseDate: '08-01-17',
      language: 'English',
      publisher: 'Harper Audio',
      price: 20,
      description: `<p>New York Times Best Seller</p>
  
      <p>Joining the ranks of The Life-Changing Magic of Not Giving a F*ck, The Subtle Art of Not Giving a F*ck, 
      You Are a Badass, and F*ck Feelings is this refreshing, BS-free self-empowerment guide that offers an 
      honest, no-nonsense, tough-love approach to help you move past self-imposed limitations.</p>
  
      <p>Are you tired of feeling f*cked up? If you are, Gary John Bishop has the answer. In this straightforward 
      handbook, he gives you the tools and advice you need to demolish the slag weighing you down and 
      become the truly unf*cked version of yourself. “Wake up to the miracle you are,” he directs. “Here’s 
      what you’ve forgotten: You’re a f*cking miracle of being.” It isn’t other people that are standing in your 
      way; it isn’t even your circumstances that are blocking your ability to thrive. It’s yourself and the negative 
      self-talk you keep telling yourself.</p> 
  
      <p>In Unf*ck Yourself, Bishop leads you through a series of seven assertions:</p> 
  
      <p>I am willing</p>
      <p>I am wired to win</p> 
      <p>I got this</p> 
      <p>I embrace the uncertainty</p> 
      <p>I am not my thoughts; I am what I do</p> 
      <p>I am relentless</p> 
      <p>I expect nothing and accept everything</p> 
      <p>Lead the life you were meant to have - Unf*ck Yourself.</p> 
  
      <p>&copy; Gary John Bishop (P)2017 HarperCollins Publishers</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('UnFu*k YourSelf'.replace(/[\s]/g, '-')
                                                                   .replace(/[,*]/g, '')
                                                                   .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: true,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 2,
      title: 'Talking to Strangers',
      imageUrl: 'https://i.ibb.co/6Y6LJjS/talking-to-strangers.jpg',
      subTitle: "What We Should Know About the People We Don't Know",
      author: 'Malcolm Gladwell',
      narrator: 'Malcolm Gladwell',
      length: '8 hrs and 42 mins',
      releaseDate: '09-10-19',
      language: 'English',
      publisher: 'Hachette Audio',
      price: 20,
      description: `
      <p>Malcolm Gladwell, host of the podcast Revisionist History and author of the number one New York Times 
      best-seller Outliers, reinvents the audiobook in this immersive production of Talking to Strangers, 
      a powerful examination of our interactions with people we don’t know.</p>
  
      <p>How did Fidel Castro fool the CIA for a generation? Why did Neville Chamberlain think he could trust 
      Adolf Hitler? Why are campus sexual assaults on the rise? Do television sitcoms teach us something about 
      the way we relate to each other that isn't true?</p>
  
      <p>While tackling these questions, Malcolm Gladwell was not solely writing a book for the page. 
      He was also producing for the ear. In the audiobook version of Talking to Strangers, you’ll hear the 
      voices of people he interviewed—scientists, criminologists, military psychologists. Court transcripts 
      are brought to life with re-enactments. You actually hear the contentious arrest of Sandra Bland by 
      the side of the road in Texas. As Gladwell revisits the deceptions of Bernie Madoff, the trial of Amanda 
      Knox, and the suicide of Sylvia Plath, you hear directly from many of the players in these real-life 
      tragedies. There’s even a theme song—Janelle Monae’s “Hell You Talmbout”. </p> 
  
      <p>Something is very wrong, Gladwell argues, with the tools and strategies we use to make sense 
      of people we don't know. And because we don't know how to talk to strangers, we are inviting conflict 
      and misunderstanding in ways that have a profound effect on our lives and our world.</p> 
  
      <p>The audiobook edition of Talking to Strangers was an instant number one best seller, and was 
      one of the most pre-ordered audiobooks in history. It seamlessly marries audiobooks and podcasts, 
      creating a completely new and real listening experience.</p>
  
      <p>&copy; 2019 Malcolm Gladwell (P)2019 Hachette Audio</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Talking to Strangers'.replace(/[\s]/g, '-')
                                                                        .replace(/[,*]/g, '')
                                                                        .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: true,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 3,
      title: 'Sapiens',
      imageUrl: 'https://i.ibb.co/mhzD8dr/sapiens.jpg',
      subTitle: "A Brief History of Humankind",
      author: 'Yuval Noah Harari',
      narrator: 'Derek Perkins',
      length: '15 hrs and 17 mins',
      releaseDate: '08-15-17',
      language: 'English',
      publisher: 'Harper Audio',
      price: 20,
      description: `
      <p>From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution 
      - a number one international best seller - that explores the ways in which biology and history have 
      defined us and enhanced our understanding of what it means to be "human".</p>
  
      <p>One hundred thousand years ago, at least six different species of humans inhabited Earth. 
      Yet today there is only one - Homo sapiens. What happened to the others? And what may happen to us?</p>
  
      <p>Most books about the history of humanity pursue either a historical or a biological approach, 
      but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 
      years ago, with the appearance of modern cognition. From examining the role evolving humans have 
      played in the global ecosystem to charting the rise of empires, Sapiens integrates history and 
      science to reconsider accepted narratives, connect past developments with contemporary concerns, 
      and examine specific events within the context of larger ideas.</p> 
  
      <p>Dr. Harari also compels us to look ahead, because, over the last few decades, humans have 
      begun to bend laws of natural selection that have governed life for the past four billion years. 
      We are acquiring the ability to design not only the world around us but also ourselves. Where 
      is this leading us, and what do we want to become?</p> 
  
      <p>The audiobook edition of Talking to Strangers was an instant number one best seller, and was 
      one of the most pre-ordered audiobooks in history. It seamlessly marries audiobooks and podcasts, 
      creating a completely new and real listening experience.</p>

      <p>This provocative and insightful work is sure to spark debate and is essential for aficionados 
      of Jared Diamond, James Gleick, Matt Ridley, Robert Wright, and Sharon Moalem.</p>
  
      <p>&copy; 2015 Yuval Noah Harari (P)2017 HarperCollins Publishers</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Sapiens'.replace(/[\s]/g, '-')
                                                           .replace(/[,*]/g, '')
                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: true,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 4,
      title: 'Why We Sleep',
      imageUrl: 'https://i.ibb.co/f8DXNFm/why-we-sleep.jpg',
      subTitle: "Unlocking the Power of Sleep and Dreams",
      author: 'Matthew Walker',
      narrator: 'Steve West',
      length: '13 hrs and 52 mins',
      releaseDate: '10-03-17',
      language: 'English',
      publisher: 'Simon & Schuster Audio',
      price: 20,
      description: `
      <p>The first sleep book by a leading scientific expert - Professor Matthew Walker, director 
      of UC Berkeley's Sleep and Neuroimaging Lab - reveals his groundbreaking exploration of sleep, 
      explaining how we can harness its transformative power to change our lives for the better.</p>
  
      <p>Sleep is one of the most important but least understood aspects of our life, wellness, 
      and longevity. Until very recently, science had no answer to the question of why we sleep, 
      or what good it served, or why we suffer such devastating health consequences when we don't 
      sleep. Compared to the other basic drives in life - eating, drinking, and reproducing - 
      the purpose of sleep remained elusive.</p>
  
      <p>But an explosion of scientific discoveries in the last 20 years has shed new light on 
      this fundamental aspect of our lives. Now, preeminent neuroscientist and sleep expert 
      Matthew Walker gives us a new understanding of the vital importance of sleep and dreaming. 
      Among so many other things, within the brain, sleep enriches our ability to learn, memorize, 
      and make logical decisions. It recalibrates our emotions, restocks our immune system, 
      fine-tunes our metabolism, and regulates our appetite. Dreaming mollifies painful memories 
      and creates a virtual reality space in which the brain melds past and present knowledge to 
      inspire creativity.</p> 
  
      <p>Walker answers important questions about sleep: How do caffeine and alcohol affect 
      sleep? What really happens during REM sleep? Why do our sleep patterns change across a 
      lifetime? How do common sleep aids affect us, and can they do long-term damage? Charting 
      cutting-edge scientific breakthroughs and synthesizing decades of research and clinical 
      practice, Walker explains how we can harness sleep to improve learning, mood, and energy 
      levels; regulate hormones; prevent cancer, Alzheimer's, and diabetes; slow the effects of 
      aging; increase longevity; enhance the education and lifespan of our children, and boost 
      the efficiency, success, and productivity of our businesses. Clear-eyed, fascinating, 
      and immensely accessible, Why We Sleep is the crucial account on sleep that will forever 
      change listeners' minds on the subject.</p> 
  
      <p>&copy; 2017 Matthew Walker (P)2017 Simon & Schuster, Inc.</p>`,
      timesSold: 3,
      available: true,
      routeName: 'products/' + encodeURIComponent('Why We Sleep'.replace(/[\s]/g, '-')
                                                                .replace(/[,*]/g, '')
                                                                .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: true,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 5,
      title: 'The Black Swan',
      imageUrl: 'https://i.ibb.co/fSx8y4p/the-black-swan.jpg',
      subTitle: "The Impact of the Highly Improbable",
      author: 'Nassim Nicholas Taleb',
      narrator: 'Joe Ochman',
      length: '15 hrs and 48 mins',
      releaseDate: '01-08-19',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>The Black Swan is a stand-alone book in Nassim Nicholas Taleb’s landmark Incerto series, 
      an investigation of opacity, luck, uncertainty, probability, human error, risk, and 
      decision-making in a world we don’t understand. The other books in the series are Fooled 
      by Randomness, Antifragile, Skin in the Game, and The Bed of Procrustes.</p>
  
      <p>A black swan is a highly improbable event with three principal characteristics: It is 
      unpredictable; it carries a massive impact; and, after the fact, we concoct an explanation 
      that makes it appear less random, and more predictable, than it was. The astonishing success 
      of Google was a black swan; so was 9/11. For Nassim Nicholas Taleb, black swans underlie 
      almost everything about our world, from the rise of religions to events in our own personal 
      lives.</p>
  
      <p>Why do we not acknowledge the phenomenon of black swans until after they occur? Part of 
      the answer, according to Taleb, is that humans are hardwired to learn specifics when they 
      should be focused on generalities. We concentrate on things we already know and time and 
      time again fail to take into consideration what we don’t know. We are, therefore, unable 
      to truly estimate opportunities, too vulnerable to the impulse to simplify, narrate, and 
      categorize, and not open enough to rewarding those who can imagine the “impossible”.</p> 
  
      <p>For years, Taleb has studied how we fool ourselves into thinking we know more than 
      we actually do. We restrict our thinking to the irrelevant and inconsequential, while 
      large events continue to surprise us and shape our world. In this revelatory book, Taleb 
      explains everything we know about what we don’t know, and this second edition features a 
      new philosophical and empirical essay, “On Robustness and Fragility”, which offers tools 
      to navigate and exploit a Black Swan world.</p>

      <p>Elegant, startling, and universal in its applications, The Black Swan will change 
      the way you look at the world. Taleb is a vastly entertaining writer, with wit, irreverence, 
      and unusual stories to tell. He has a polymathic command of subjects ranging from cognitive 
      science to business to probability theory. The Black Swan is a landmark book - itself a 
      black swan.</p>
  
      <p>&copy; 2010 Nassim Nicholas Taleb	(P)2018 Random House Audio.</p>`,
      timesSold: 1,
      available: true,
      routeName: 'products/' + encodeURIComponent('The Black Swan'.replace(/[\s]/g, '-')
                                                                  .replace(/[,*]/g, '')
                                                                  .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 6,
      title: 'The Alchemist',
      imageUrl: 'https://i.ibb.co/hDfs3V8/the-alchemist.jpg',
      subTitle: "A Fable About Following Your Dream",
      author: 'Paulo Coelho',
      narrator: 'Jeremy Irons',
      length: '4 hrs',
      releaseDate: '12-26-04',
      language: 'English',
      publisher: 'Harper Audio',
      price: 20,
      description: `
      <p>Paulo Coelho's enchanting novel has inspired a devoted following around the world. 
      This story, dazzling in its simplicity and wisdom, is about an Andalusian shepherd boy 
      named Santiago who travels from his homeland in Spain to the Egyptian desert in search 
      of treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who 
      calls himself king, and an Alchemist, all of whom point Santiago in the direction of 
      his quest. No one knows what the treasure is, or if Santiago will be able to surmount 
      the obstacles along the way But what starts out as a journey to find worldly goods 
      turns into a meditation on the treasures found within. Lush, evocative, and deeply 
      humane, the story of Santiago is art eternal testament to the transforming power of our 
      dreams and the importance of listening to our hearts.</p>
  
      <p>&copy; 1988 Paulo Coelho (P)2005 HarperCollins Publishers</p>`,
      timesSold: 3,
      available: true,
      routeName: 'products/' + encodeURIComponent('The Alchemist'.replace(/[\s]/g, '-')
                                                                 .replace(/[,*]/g, '')
                                                                 .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: true,
        healthAndWellness: false,
        fiction: true,
        biosAndMemoirs: false,
        nonFiction: false,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 7,
      title: 'Zero to One',
      imageUrl: 'https://i.ibb.co/MN9Lp5g/zero-to-one.jpg',
      subTitle: "Notes on Startups, or How to Build the Future",
      author: 'Peter Thiel',
      narrator: 'Blake Masters',
      length: '4 hrs and 50 mins',
      releaseDate: '09-16-14',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>Every moment in business happens only once.</p>

      <p>The next Bill Gates will not build an operating system. The next Larry Page or 
      Sergey Brin won’t make a search engine. And the next Mark Zuckerberg won't create a social 
      network. If you are copying these guys, you aren't learning from them.</p>

      <p>It's easier to copy a model than to make something new: doing what we already 
      know how to do takes the world from 1 to n, adding more of something familiar. But 
      every time we create something new, we go from 0 to 1. The act of creation is singular, 
      as is the moment of creation, and the result is something fresh and strange.</p>

      <p>Progress comes from monopoly, not competition.</p>

      <p>If you do what has never been done and you can do it better than anybody else, you 
      have a monopoly - and every business is successful exactly insofar as it is a monopoly. 
      But the more you compete, the more you become similar to everyone else. From the 
      tournament of formal schooling to the corporate obsession with outdoing rivals, 
      competition destroys profits for individuals, companies, and society as a whole.</p>

      <p>Zero to One is about how to build companies that create new things. It draws on 
      everything Peter Thiel has learned directly as a co-founder of PayPal and Palantir 
      and then an investor in hundreds of startups, including Facebook and SpaceX. The single 
      most powerful pattern Thiel has noticed is that successful people find value in unexpected 
      places, and they do this by thinking about business from first principles instead of 
      formulas. Ask not, what would Mark do? Ask: What valuable company is nobody building?</p>
  
      <p>&copy; 2014 Peter Thiel (P)2014 Random House Audio.</p>`,
      timesSold: 0,
      available: true,
      routeName: 'products/' + encodeURIComponent('Zero to One'.replace(/[\s]/g, '-')
                                                               .replace(/[,*]/g, '')
                                                               .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: true,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 8,
      title: 'Thinking, Fast and Slow',
      imageUrl: 'https://i.ibb.co/6t5td86/thinking-fast-and-slow.jpg',
      subTitle: "",
      author: 'Daniel Kahneman',
      narrator: 'Patrick Egan',
      length: '20 hrs and 2 mins',
      releaseDate: '10-25-11',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>The guru to the gurus at last shares his knowledge with the rest of us. Nobel 
      laureate Daniel Kahneman's seminal studies in behavioral psychology, behavioral 
      economics, and happiness studies have influenced numerous other authors, including 
      Steven Pinker and Malcolm Gladwell. In Thinking, Fast and Slow, Kahneman at last 
      offers his own, first book for the general public. It is a lucid and enlightening 
      summary of his life's work. It will change the way you think about thinking. </p>

      <p>Two systems drive the way we think and make choices, Kahneman explains: System 
      One is fast, intuitive, and emotional; System Two is slower, more deliberative, 
      and more logical. Examining how both systems function within the mind, Kahneman 
      exposes the extraordinary capabilities as well as the biases of fast thinking and 
      the pervasive influence of intuitive impressions on our thoughts and our choices. 
      Engaging the reader in a lively conversation about how we think, he shows where we 
      can trust our intuitions and how we can tap into the benefits of slow thinking, 
      contrasting the two-system view of the mind with the standard model of the rational 
      economic agent. </p>

      <p>Kahneman's singularly influential work has transformed cognitive psychology and 
      launched the new fields of behavioral economics and happiness studies. In this 
      path-breaking book, Kahneman shows how the mind works, and offers practical and 
      enlightening insights into how choices are made in both our business and personal 
      lives - and how we can guard against the mental glitches that often get us into 
      trouble. </p>
  
      <p>&copy; 2011 Daniel Kahneman (P)2011 Random House Audio.</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Thinking, Fast and Slow'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: true,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: false
      }
    },
      {
      id: 9,
      title: 'Catch and Kill',
      imageUrl: 'https://i.ibb.co/85LVMKp/catch-and-kill.jpg',
      subTitle: "Lies, Spies, and a Conspiracy to Protect Predators",
      author: 'Ronan Farrow',
      narrator: 'Ronan Farrow',
      length: '10 hrs and 43 mins',
      releaseDate: '10-15-19',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>In a dramatic account of violence and espionage, Pulitzer Prize-winning 
      investigative reporter Ronan Farrow exposes serial abusers and a cabal of 
      powerful interests hell-bent on covering up the truth. At any cost.</p>

      <p>In 2017, a routine network television investigation led Ronan Farrow to a 
      story only whispered about: one of Hollywood's most powerful producers was a 
      predator, protected by fear, wealth, and a conspiracy of silence. As Farrow 
      drew closer to the truth, shadowy operatives, from high-priced lawyers to 
      elite war-hardened spies, mounted a secret campaign of intimidation, 
      threatening his career, following his every move, and weaponizing an account 
      of abuse in his own family.</p>

      <p>All the while, Farrow and his producer faced a degree of resistance they 
      could not explain - until now. And a trail of clues revealed corruption and 
      cover-ups from Hollywood to Washington and beyond.</p>

      <p>This is the untold story of the exotic tactics of surveillance and 
      intimidation deployed by wealthy and connected men to threaten journalists, 
      evade accountability, and silence victims of abuse. And it's the story of 
      the women who risked everything to expose the truth and spark a global 
      movement.</p>

      <p>Both a spy thriller and a meticulous work of investigative journalism, 
      Catch and Kill breaks devastating new stories about the rampant abuse of 
      power and sheds far-reaching light on investigations that shook the 
      culture.</p>
  
      <p>&copy; 2019 Ronan Farrow (P)2019 Hachette Audio</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Catch and Kill'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: true,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 10,
      title: 'Steve Jobs',
      imageUrl: 'https://i.ibb.co/nwjLJ7j/steve-jobs.jpg',
      subTitle: "",
      author: 'Walter Isaacson',
      narrator: 'Dylan Baker',
      length: '25 hrs and 18 mins',
      releaseDate: '10-24-11',
      language: 'English',
      publisher: 'Simon & Schuster Audio',
      price: 20,
      description: `
      <p>Featuring a new epilogue read by the author.</p>

      <p>From the author of the best-selling biographies of Benjamin Franklin and 
      Albert Einstein, this is the exclusive biography of Steve Jobs.</p>

      <p>Based on more than 40 interviews with Jobs conducted over two years - 
      as well as interviews with more than a hundred family members, friends, 
      adversaries, competitors, and colleagues - Walter Isaacson has written a 
      riveting story of the roller-coaster life and searingly intense personality 
      of a creative entrepreneur whose passion for perfection and ferocious drive 
      revolutionized six industries: personal computers, animated movies, music, 
      phones, tablet computing, and digital publishing.</p>

      <p>At a time when America is seeking ways to sustain its innovative edge, 
      and when societies around the world are trying to build digital-age economies, 
      Jobs stands as the ultimate icon of inventiveness and applied imagination. 
      He knew that the best way to create value in the 21st century was to connect 
      creativity with technology. He built a company where leaps of the imagination 
      were combined with remarkable feats of engineering.</p>

      <p>Although Jobs cooperated with this book, he asked for no control over 
      what was written. He put nothing off-limits. He encouraged the people he 
      knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, 
      about the people he worked with and competed against. His friends, foes, 
      and colleagues provide an unvarnished view of the passions, perfectionism, 
      obsessions, artistry, devilry, and compulsion for control that shaped his 
      approach to business and the innovative products that resulted.</p>

      <p>Driven by demons, Jobs could drive those around him to fury and despair. 
      But his personality and products were interrelated, just as Apple's hardware 
      and software tended to be, as if part of an integrated system. His tale is 
      instructive and cautionary, filled with lessons about innovation, character, 
      leadership, and values.</p>
  
      <p>&copy; 2011 Walter Isaacson (P)2011 Simon & Schuster</p>`,
      timesSold: 20,
      available: true,
      routeName: 'products/' + encodeURIComponent('Steve Jobs'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: true,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 11,
      title: 'The Everything Store',
      imageUrl: 'https://i.ibb.co/LC9hnzQ/the-everything-store.jpg',
      subTitle: "Jeff Bezos and the Age of Amazon",
      author: 'Brad Stone',
      narrator: 'Pete Larkin',
      length: '13 hrs',
      releaseDate: '10-15-13',
      language: 'English',
      publisher: 'Hachette Audio',
      price: 20,
      description: `
      <p>Audie Award Finalist, Business/Educational, 2014</p>

      <p>The definitive story of Amazon.com, one of the most successful companies 
      in the world, and of its driven, brilliant founder, Jeff Bezos.</p>

      <p>Amazon.com started off delivering books through the mail. But its visionary 
      founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon 
      to become the everything store, offering limitless selection and seductive 
      convenience at disruptively low prices. To do so, he developed a corporate 
      culture of relentless ambition and secrecy that's never been cracked. Until 
      now.</p>

      <p>Brad Stone enjoyed unprecedented access to current and former Amazon 
      employees and Bezos family members, giving listeners the first in-depth, 
      fly-on-the-wall account of life at Amazon. Compared to tech's other elite 
      innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands 
      out for his restless pursuit of new markets, leading Amazon into risky new 
      ventures like the Kindle and cloud computing, and transforming retail in the 
      same way Henry Ford revolutionized manufacturing.</p>

      <p>The Everything Store will be the revealing, definitive biography of the 
      company that placed one of the first and largest bets on the Internet and 
      forever changed the way we shop and read.</p>
  
      <p>&copy; 2013 Brad Stone (P)2013 Hachette Audio</p>`,
      timesSold: 15,
      available: true,
      routeName: 'products/' + encodeURIComponent('The Everything Store'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: true,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 12,
      title: 'Shoe Dog',
      imageUrl: 'https://i.ibb.co/YdQ3tj4/shoe-dog.jpg',
      subTitle: "A Memoir by the Creator of Nike",
      author: 'Phil Knight',
      narrator: 'Norbert Leo Butz, Phil Knight',
      length: '13 hrs and 21 mins',
      releaseDate: '04-26-16',
      language: 'English',
      publisher: 'Simon & Schuster Audio',
      price: 20,
      description: `
      <p>In this candid and riveting memoir, for the first time ever, Nike founder 
      and CEO Phil Knight shares the inside story of the company's early days as an 
      intrepid start-up and its evolution into one of the world's most iconic, 
      game-changing, and profitable brands.</p>

      <p>In 1962, fresh out of business school, Phil Knight borrowed fifty dollars 
      from his father and created a company with a simple mission: import high-quality, 
      low-cost athletic shoes from Japan. Selling the shoes from the trunk of his 
      lime-green Plymouth Valiant, Knight grossed $8,000 his first year. Today, Nike's 
      annual sales top $30 billion. In an age of start-ups, Nike is the ne plus ultra 
      of all start-ups, and the swoosh has become a revolutionary, globe-spanning icon, 
      one of the most ubiquitous and recognizable symbols in the world today.</p>

      <p>But Knight, the man behind the swoosh, has always remained a mystery. Now, 
      for the first time, in a memoir that is candid, humble, gutsy, and wry, 
      he tells his story, beginning with his crossroads moment. At 24, after 
      backpacking around the world, he decided to take the unconventional path to 
      start his own business - a business that would be dynamic, different.</p>

      <p>Knight details the many risks and daunting setbacks that stood between 
      him and his dream - along with his early triumphs. Above all, he recalls the 
      formative relationships with his first partners and employees, a ragtag group 
      of misfits and seekers who became a tight-knit band of brothers. Together, 
      harnessing the transcendent power of a shared mission and a deep belief in 
      the spirit of sport, they built a brand that changed everything.</p>
  
      <p>&copy; 2016 Phil Knight (P)2016 Simon & Schuster</p>`,
      timesSold: 12,
      available: true,
      routeName: 'products/' + encodeURIComponent('Shoe Dog'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: true,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 13,
      title: 'Permanent Record',
      imageUrl: 'https://i.ibb.co/THfPVCy/permanant-record.jpg',
      subTitle: "",
      author: 'Edward Snowden',
      narrator: 'Holter Graham',
      length: '11 hrs and 31 mins',
      releaseDate: '09-17-19',
      language: 'English',
      publisher: 'Macmillan Audio',
      price: 20,
      description: `
      <p>An NPR Best Book of the Year - 2019</p>

      <p>Edward Snowden, the man who risked everything to expose the US government’s 
      system of mass surveillance, reveals for the first time the story of his life, 
      including how he helped to build that system and what motivated him to try to 
      bring it down.</p>

      <p>In 2013, 29-year-old Edward Snowden shocked the world when he broke with 
      the American intelligence establishment and revealed that the United States 
      government was secretly pursuing the means to collect every single phone call, 
      text message, and email. The result would be an unprecedented system of mass 
      surveillance with the ability to pry into the private lives of every person 
      on earth. Six years later, Snowden reveals for the very first time how he 
      helped to build this system and why he was moved to expose it.</p>

      <p>Spanning the bucolic Beltway suburbs of his childhood and the clandestine 
      CIA and NSA postings of his adulthood, Permanent Record is the extraordinary 
      account of a bright young man who grew up online - a man who became a spy, a 
      whistleblower, and, in exile, the internet’s conscience. Written with wit, 
      grace, passion, and an unflinching candor, Permanent Record is a crucial memoir 
      of our digital age and destined to be a classic.</p>
  
      <p>&copy; Edward Snowden (P)2019 Macmillan Audio</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Permanent Record'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 14,
      title: 'Alibaba',
      imageUrl: 'https://i.ibb.co/LrBxFYD/alibaba.jpg',
      subTitle: "The House That Jack Ma Built",
      author: 'Duncan Clark',
      narrator: 'Jim Meskimen',
      length: ' 9 hrs and 9 mins',
      releaseDate: '04-12-16',
      language: 'English',
      publisher: 'HarperAudio',
      price: 20,
      description: `
      <p>An engrossing insider's account of how a teacher built one of the world's 
      most valuable companies - rivaling Walmart and Amazon - and forever reshaped 
      the global economy.</p>

      <p>In just a decade and a half, Jack Ma, a man from modest beginnings who 
      started out as an English teacher, founded Alibaba and built it into one of 
      the world's largest companies, an e-commerce empire on which hundreds of 
      millions of Chinese consumers depend. Alibaba's $25 billion IPO in 2014 was 
      the largest global IPO ever. A Rockefeller of his age who is courted by CEOs 
      and presidents around the world, Jack is an icon for China's booming private 
      sector and the gatekeeper to hundreds of millions of middle-class consumers.</p>

      <p>Duncan Clark first met Jack in 1999 in the small apartment where Jack 
      founded Alibaba. Granted unprecedented access to a wealth of new material 
      including exclusive interviews, Clark draws on his own experience as an early 
      advisor to Alibaba and two decades in China chronicling the Internet's impact 
      on the country to create an authoritative, compelling narrative account of 
      Alibaba's rise.</p>

      <p>How did Jack overcome his humble origins and early failures to achieve 
      massive success with Alibaba? How did he outsmart rival entrepreneurs from 
      China and Silicon Valley? Can Alibaba maintain its 80 percent market share? 
      As it forges ahead into finance and entertainment, are there limits to 
      Alibaba's ambitions? How does the Chinese government view its rise? Will 
      Alibaba expand further overseas, including in the US?</p>

      <p>Clark tells Alibaba's tale in the context of China's momentous economic 
      and social changes, illuminating an unlikely corporate titan as never 
      before.</p>
  
      <p>&copy; Duncan Clark (P)2016 HarperCollins Publishers</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Alibaba'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: true,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 15,
      title: 'Elon Musk',
      imageUrl: 'https://i.ibb.co/PWRpSMD/elon-musk.jpg',
      subTitle: "Tesla, SpaceX, and the Quest for a Fantastic Future",
      author: 'Ashlee Vance',
      narrator: 'Fred Sanders',
      length: '13 hrs and 23 mins',
      releaseDate: '05-19-15',
      language: 'English',
      publisher: 'HarperAudio',
      price: 20,
      description: `
      <p>In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating 
      and authorized look at the extraordinary life of one of Silicon Valley's most 
      exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - 
      and a fascinating exploration of the renewal of American invention and its new 
      makers.</p>

      <p>Elon Musk spotlights the technology and vision of Elon Musk, the renowned 
      entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one 
      of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the 
      full spectacle and arc of the genius' life and work, from his tumultuous 
      upbringing in South Africa and flight to the United States to his dramatic 
      technical innovations and entrepreneurial pursuits.</p>

      <p>Vance uses Musk's story to explore one of the pressing questions of our age:
      Can the nation of inventors and creators who led the modern world for a century 
      still compete in an age of fierce global competition? He argues that Musk - 
      one of the most unusual and striking figures in American business history - 
      is a contemporary, visionary amalgam of legendary inventors and industrialists, 
      including Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. More than 
      any other entrepreneur today, Musk has dedicated his energies and his own vast 
      fortune to inventing a future that is as rich and far reaching as the 
      visionaries of the golden age of science-fiction fantasy.</p>
  
      <p>&copy; Ashlee Vance (P)2015 HarperCollins Publishers</p>`,
      timesSold: 4,
      available: true,
      routeName: 'products/' + encodeURIComponent('Elon Musk'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: true,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: false
      }
    },
    {
      id: 16,
      title: 'The Body',
      imageUrl: 'https://i.ibb.co/BqPKNNJ/the-body.jpg',
      subTitle: "A Guide for Occupants",
      author: 'Bill Bryson',
      narrator: 'Bill Bryson',
      length: '14 hrs and 4 mins',
      releaseDate: '10-15-19',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>AN INSTANT NEW YORK TIMES BEST SELLER</p>
      <p>NAMED A BEST BOOK OF THE YEAR BY THE WASHINGTON POST</p>
      <p>LONGLISTED FOR THE PEN E.O. WILSON LITERARY SCIENCE WRITING AWARD</p>
      <p>"Glorious. . .You will marvel at the brilliance and vast weirdness of 
      your design." (The Washington Post)</p>

      <p>Bill Bryson, bestselling author of A Short History of Nearly Everything, 
      takes us on a head-to-toe tour of the marvel that is the human body. As 
      addictive as it is comprehensive, this is Bryson at his very best, a 
      must-listen owner's manual for everybody.</p>

      <p>Bill Bryson once again proves himself to be an incomparable companion as 
      he guides us through the human body - how it functions, its remarkable ability 
      to heal itself, and (unfortunately) the ways it can fail. Full of extraordinary 
      facts (your body made a million red blood cells since you started reading this) 
      and irresistible Bryson-esque anecdotes, The Body will lead you to a deeper 
      understanding of the miracle that is life in general and you in particular. 
      As Bill Bryson writes, "We pass our existence within this wobble of flesh and 
      yet take it almost entirely for granted." The Body will cure that indifference 
      with generous doses of wondrous, compulsively listenable facts and information.
      </p>
  
      <p>&copy; 2019 Bill Bryson (P)2019 Random House Audio</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('The Body'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: false,
        healthAndWellness: true,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 17,
      title: 'Loserthink',
      imageUrl: 'https://i.ibb.co/51F67n0/loser-think.jpg',
      subTitle: "How Untrained Brains Are Ruining America",
      author: 'Scott Adams',
      narrator: 'Scott Adams',
      length: '6 hrs and 58 mins',
      releaseDate: '11-05-19',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>From the creator of Dilbert and author of Win Bigly, a guide to spotting 
      and avoiding loserthink: sneaky mental habits trapping victims in their 
      own bubbles of reality. If you've been on social media lately, or turned 
      on your TV, you may have noticed a lot of dumb ideas floating around. </p>

      <p>"We know when history will repeat and when it won't." </p>
      <p>"We can tell the difference between evidence and coincidences."</p>
      <p>"The simplest explanation is usually true."</p>
      <p>Wrong, wrong, and dangerous!</p>

      <p>If we're not careful, loserthink would have us believe that every Trump 
      supporter is a bigoted racist, addicts should be responsible for fixing 
      the opioid epidemic, and that your relationship fell apart simply because 
      you chewed with your mouth open. </p>

      <p>Even the smartest people can slip into loserthink's seductive grasp. This 
      book will teach you how to spot and avoid it - and will give you scripts 
      to respond when hollow arguments are being brandished against you, whether 
      by well-intentioned friends, strangers on the internet, or political pundits. 
      You'll also learn how to spot the underlying causes of loserthink, like the 
      inability to get ego out of your decisions, thinking with words instead of 
      reasons, failing to imagine alternative explanations, and making too much 
      of coincidences.</p>

      <p>Your bubble of reality doesn't have to be a prison. This book will show 
      you how to break free - and, what's more, to be among the most perceptive 
      and respected thinkers in every conversation.</p>

      <p>"They say you shouldn’t judge a book by its cover, but they never 
      tell you why. So I went ahead and judged it. Looks great!" (Juan Variable)</p>
      <p>"Don’t think of this book as something you ‘read.’ Think of it as 
      ‘survival.’ And you want to survive, don’t you?" (M. Wordthinker)</p>

      <p>"If you love this book, you are probably part of a clandestine global 
      conspiracy to control the world. You’ll probably deny it, but I know what 
      you are thinking." (Reed Mines)</p>
  
      <p>&copy; 2019 Scott Adams (P)2019 Penguin Audio</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('Loserthink'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: true,
        artsAndEntertainment: true,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 18,
      title: 'Do the Work',
      imageUrl: 'https://i.ibb.co/jH5cX2w/do-the-work.jpg',
      subTitle: `The Official Unrepentant, Ass-Kicking, No-Kidding, 
      Change-Your-Life Sidekick to Unfu*k Yourself`,
      author: 'Gary John Bishop',
      narrator: 'Gary John Bishop',
      length: '2 hrs and 12 mins',
      releaseDate: '10-22-19',
      language: 'English',
      publisher: 'HarperAudio',
      price: 20,
      description: `
      <p>Based on the life-changing lessons from the New York Times best seller 
      that has sold more than a million copies, a practical, hands-on guide that 
      helps you do the work you need to change your life.</p>

      <p>In Unfu*k Yourself, Gary John Bishop inspired people to put his words 
      into action to help them transform their fu*king lives. While millions 
      of fans have embraced the messages in the book, Bishop knows it can be 
      hard to actually take the next step and do the necessary work. Written 
      in his no-nonsense, tough-love voice, Do the Work is the kick in the ass 
      you need to get moving and create the life you want. By drilling down 
      into the three categories of self, people, and purpose, he helps us 
      identify and remedy the primary problems and challenges that frustrate 
      and often cripple us.</p>
      <p>Filled with new material, Do the Work expands the lessons in Unfu*k 
      Yourself, giving us the tools to identify, explore, and understand our 
      specific issues and root them out. As Bishop makes clear, "This is a 
      personal workshop for your brain, a legit resource where you can work 
      your life out, what matters to you, whats going to make the biggest 
      difference and empower you to act in ways that make some palpable 
      change to the direction your life is currently taking."</p>
      
      <p>So, what are you waiting for?</p>
  
      <p>&copy; 2019 Gary John Bishop (P)2019 HarperAudio</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('Do the Work'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: false,
        personalDevelopment: true,
        artsAndEntertainment: false,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 19,
      title: 'Mindf*ck',
      imageUrl: 'https://i.ibb.co/zHgn5D6/mindfck.jpg',
      subTitle: "Cambridge Analytica and the Plot to Break America",
      author: 'Christopher Wylie',
      narrator: 'Graham Halstead',
      length: '11 hrs and 49 mins',
      releaseDate: '10-08-19',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>For the first time, the Cambridge Analytica whistleblower tells the 
      inside story of the data mining and psychological manipulation behind 
      the election of Donald Trump and the Brexit referendum, connecting 
      Facebook, WikiLeaks, Russian intelligence, and international hackers.</p>

      <p>Named one of the Best Books of the Year by Evening Standard</p>

      <p>Mindf*ck goes deep inside Cambridge Analytica’s "American operations", 
      which were driven by Steve Bannon’s vision to remake America and fueled 
      by mysterious billionaire Robert Mercer’s money, as it weaponized and 
      wielded the massive store of data it had harvested on individuals - in 
      excess of 87 million - to disunite the United States and set Americans 
      against each other. Bannon had long sensed that deep within America’s 
      soul lurked an explosive tension. Cambridge Analytica had the data to 
      prove it, and in 2016 Bannon had a presidential campaign to use as his 
      proving ground.</p>
      
      <p>Christopher Wylie might have seemed an unlikely figure to be at the 
      center of such an operation. Canadian and liberal in his politics, he 
      was only 24 when he got a job with a London firm that worked with the 
      UK Ministry of Defense and was charged putatively with helping to 
      build a team of data scientists to create new tools to identify and 
      combat radical extremism online. In short order, those same military 
      tools were turned to political purposes, and Cambridge Analytica was 
      born.</p>

      <p>Wylie’s decision to become a whistleblower prompted the largest 
      data-crime investigation in history. His story is both exposé and 
      dire warning about a sudden problem born of very new and powerful 
      capabilities. It has not only laid bare the profound vulnerabilities 
      - and profound carelessness - in the enormous companies that drive 
      the attention economy, it has also exposed the profound vulnerabilities 
      of democracy itself. What happened in 2016 was just a trial run. 
      Ruthless actors are coming for your data, and they want to control 
      what you think.</p>
  
      <p>&copy; 2019 Christopher Wylie (P)2019 Random House Audio</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('Mindf*ck'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: true,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: true,
        newRelease: true
      }
    },
    {
      id: 20,
      title: 'Start with No',
      imageUrl: 'https://i.ibb.co/RBd3xZq/start-with-no.jpg',
      subTitle: "The Negotiating Tools That the Pros Don't Want You to Know",
      author: 'Jim Camp',
      narrator: '',
      length: '7 hrs',
      releaseDate: '06-02-20',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>Start with No offers a contrarian, counterintuitive system for 
      negotiating any kind of deal in any kind of situation - the purchase 
      of a new house, a multimillion-dollar business deal, or where to take 
      the kids for dinner.</p>

      <p>Think a win-win solution is the best way to make the deal? Think 
      again.</p>

      <p>For years now, win-win has been the paradigm for business negotiation. 
      But today, win-win is just the seductive mantra used by the toughest 
      negotiators to get the other side to compromise unnecessarily, early, 
      and often. Win-win negotiations play to your emotions and take advantage 
      of your instinct and desire to make the deal</p>
      
      <p>Start with No introduces a system of decision-based negotiation that 
      teaches you how to understand and control these emotions. It teaches 
      you how to ignore the siren call of the final result, which you can’t 
      really control, and how to focus instead on the activities and behavior 
      that you can and must control in order to successfully negotiate with 
      the pros.</p>

      <p>The best negotiators:</p>
      <p>Aren’t interested in "yes" - they prefer "no"</p>
      <p>Never, ever rush to close, but always let the other side feel comfortable 
      and secure</p>
      <p>Are never needy; they take advantage of the other party’s neediness</p>
      <p>Create a "blank slate" to ensure they ask questions and listen to the 
      answers, to make sure they have no assumptions and expectations</p>
      <p>Always have a mission and purpose that guides their decisions</p>
      <p>Don’t send so much as an email without an agenda for what they want 
      to accomplish</p>
      <p>Know the four "budgets" for themselves and for the other side: time, 
      energy, money, and emotion</p>
      <p>Never waste time with people who don’t really make the decision</p>
      
      <p>Start with No is full of dozens of business as well as personal 
      stories illustrating each point of the system. It will change your 
      life as a negotiator. If you put to good use the principles and practices 
      revealed here, you will become an immeasurably better negotiator.</p>
  
      <p>&copy; 2011 Jim Camp (P)2020 Random House Audio</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('Start with No'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: false,
        businessAndMoney: true,
        personalDevelopment: false,
        artsAndEntertainment: true,
        healthAndWellness: false,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: true,
        newRelease: false
      }
    },
    {
      id: 21,
      title: 'Brain Wash',
      imageUrl: 'https://i.ibb.co/TLMck0G/brainwash.jpg',
      subTitle: "Detox Your Mind for Clearer Thinking, Deeper Relationships, and Lasting Happiness",
      author: 'David Perlmutter MD, Austin Perlmutter MD, Kristin Loberg',
      narrator: 'Peter Ganim',
      length: '7 hrs and 17 mins',
      releaseDate: '01-14-20',
      language: 'English',
      publisher: 'Random House Audio',
      price: 20,
      description: `
      <p>Dr. David Perlmutter, number-one New York Times best-selling author 
      of Grain Brain, and Dr. Austin Perlmutter, his son, explore how modern c
      ulture threatens to rewire our brains and damage our health, offering a 
      practical plan for healing.</p>

      <p>Contemporary life provides us with infinite opportunities, along with 
      endless temptations. We can eat whatever we want, whenever we want. We 
      can immerse ourselves in the vast, enticing world of digital media. We 
      can buy goods and services for rapid delivery with our fingertips or 
      voice commands. But living in this 24/7 hyper-reality poses serious 
      risks to our physical and mental states, our connections to others, 
      and even to the world at large. </p>

      <p>Brain Wash builds from a simple premise: Our brains are being gravely 
      manipulated, resulting in behaviors that leave us more lonely, anxious, 
      depressed, distrustful, illness-prone, and overweight than ever before. 
      </p>
      
      <p>Based on the latest science, the book identifies the mental hijacking 
      that undermines each and every one of us, and presents the tools necessary 
      to think more clearly, make better decisions, strengthen bonds with others, 
      and develop healthier habits. Featuring a 10-day bootcamp program, including 
      a meal plan and 40 delicious original recipes, Brain Wash is the key to 
      cultivating a more purposeful and fulfilling life. </p>
  
      <p>&copy; 2020 David Perlmutter MD, Austin Perlmutter MD, and 
      Kristin Loberg (P)2020 Little, Brown & Company</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('Brain Wash'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: true,
        healthAndWellness: true,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: true,
        newRelease: false
      }
    },
    {
      id: 22,
      title: 'Tiny Habits',
      imageUrl: 'https://i.ibb.co/7QFx92W/tiny-habits.jpg',
      subTitle: "The Small Changes that Change Everything",
      author: 'BJ Fogg PhD',
      narrator: '',
      length: 'Not Yet Known',
      releaseDate: '01-14-20',
      language: 'English',
      publisher: 'Audible Studios',
      price: 20,
      description: `
      <p>The world’s leading expert on habit formation shows how you can have 
      a happier, healthier life: by starting small. </p>

      <p>Myth: Change is hard. Reality: Change can be easy if you know the simple 
      steps of behavior design. </p>

      <p>Myth: It’s all about willpower. Reality: Willpower is fickle and finite, 
      and exactly the wrong way to create habits.</p>
      
      <p>Myth: You have to make a plan and stick to it. Reality: You transform 
      your life by starting small and being flexible. </p>
      
      <p>BJ Fogg is here to change your life - and revolutionize how we think about 
      human behavior. Based on 20 years of research and Fogg’s experience coaching 
      more than 40,000 people, Tiny Habits cracks the code of habit formation. 
      With breakthrough discoveries in every chapter, you’ll learn the simplest 
      proven ways to transform your life. Fogg shows you how to feel good about 
      your successes instead of bad about your failures. Whether you want to lose 
      weight, de-stress, sleep better, or be more productive each day, Tiny Habits 
      makes it easy to achieve. </p>

      <p>Already the habit guru to companies around the world, Fogg brings his 
      proven method to a global audience for the first time. Whether you want 
      to lose weight, de-stress, sleep better, or exercise more, Tiny Habits 
      makes it easy to achieve.</p>

      <p>&copy; 2019 BJ Fogg (P)2019 Audible, Inc.</p>`,
      timesSold: 5,
      available: true,
      routeName: 'products/' + encodeURIComponent('Tiny Habits'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        scienceAndTechnology: true,
        businessAndMoney: false,
        personalDevelopment: false,
        artsAndEntertainment: true,
        healthAndWellness: true,
        fiction: false,
        biosAndMemoirs: false,
        nonFiction: true,
        bestSeller: false,
        comingSoon: true,
        newRelease: false
      }
    }
  ],
  categories: {
    newRelease: {
      name: 'New Releases'
    },
    nonFiction: {
      name: 'Non Fiction'
    },
    biosAndMemoirs: {
      name: 'Biographies & Memoirs'
    },
    bestSeller: {
      name: 'Best Sellers'
    },
    personalDevelopment: {
      name: 'Personal Development'
    },
    businessAndMoney: {
      name: 'Business & Money'
    },
    scienceAndTechnology: {
      name: 'Science & Technology'
    },
    artsAndEntertainment: {
      name: 'Arts & Entertainment'
    },
    healthAndWellness: {
      name: 'Health & Wellness'
    },
    fiction: {
      name: 'Fiction'
    },
    comingSoon: {
      name: 'Coming Soon'
    }
  }
};

export default SHOP_DATA;

