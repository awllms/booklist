const SHOP_DATA = {
  products: [
    {
      id: 1,
      title: 'UnFu*k Yourself',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: 'Get Out Of Your Head and Into Your Life',
      author: 'Gary John Bishop',
      narrator: 'Gary John Bishop',
      length: '3 hrs and 23 mins',
      releaseDate: '08-01-17',
      language: 'English',
      publisher: 'Harper Audio',
      price: 10,
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
        bestSeller: true,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 2,
      title: 'Talking to Strangers',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "What We Should Know About the People We Don't Know",
      author: 'Malcolm Gladwell',
      narrator: 'Malcolm Gladwell',
      length: '8 hrs and 42 mins',
      releaseDate: '09-10-19',
      language: 'English',
      publisher: 'Hachette Audio',
      price: 10,
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
        bestSeller: true,
        comingSoon: true,
        newRelease: true
      }
    },
    {
      id: 3,
      title: 'Sapiens',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "A Brief History of Humankind",
      author: 'Yuval Noah Harari',
      narrator: 'Derek Perkins',
      length: '15 hrs and 17 mins',
      releaseDate: '08-15-17',
      language: 'English',
      publisher: 'Harper Audio',
      price: 10,
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
        bestSeller: true,
        comingSoon: false,
        newRelease: true
      }
    },
    {
      id: 4,
      title: 'Why We Sleep',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "Unlocking the Power of Sleep and Dreams",
      author: 'Matthew Walker',
      narrator: 'Steve West',
      length: '13 hrs and 52 mins',
      releaseDate: '10-03-17',
      language: 'English',
      publisher: 'Simon & Schuster Audio',
      price: 10,
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
        bestSeller: false,
        comingSoon: true,
        newRelease: true
      }
    },
    {
      id: 5,
      title: 'The Black Swan',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "The Impact of the Highly Improbable",
      author: 'Nassim Nicholas Taleb',
      narrator: 'Joe Ochman',
      length: '15 hrs and 48 mins',
      releaseDate: '01-08-19',
      language: 'English',
      publisher: 'Random House Audio',
      price: 10,
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
        bestSeller: true,
        comingSoon: true,
        newRelease: false
      }
    },
    {
      id: 6,
      title: 'The Alchemist',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "A Fable About Following Your Dream",
      author: 'Paulo Coelho',
      narrator: 'Jeremy Irons',
      length: '4 hrs',
      releaseDate: '12-26-04',
      language: 'English',
      publisher: 'Harper Audio',
      price: 10,
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
        bestSeller: true,
        comingSoon: true,
        newRelease: false
      }
    },
    {
      id: 7,
      title: 'Zero to One',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "Notes on Startups, or How to Build the Future",
      author: 'Peter Thiel',
      narrator: 'Blake Masters',
      length: '4 hrs and 50 mins',
      releaseDate: '09-16-14',
      language: 'English',
      publisher: 'Random House Audio',
      price: 10,
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
        bestSeller: true,
        comingSoon: true,
        newRelease: false
      }
    },
    {
      id: 8,
      title: 'Thinking, Fast and Slow',
      imageUrl: 'https://i.ibb.co/f2c9W8h/product.jpg',
      subTitle: "",
      author: 'Daniel Kahneman',
      narrator: 'Patrick Egan',
      length: '20 hrs and 2 mins',
      releaseDate: '10-25-11',
      language: 'English',
      publisher: 'Random House Audio',
      price: 10,
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
      comingSoon: false,
      routeName: 'products/' + encodeURIComponent('Thinking, Fast and Slow'.replace(/[\s]/g, '-')
                                                                           .replace(/[,*]/g, '')
                                                                           .toLowerCase()),
      categories: {
        bestSeller: false,
        comingSoon: false,
        newRelease: true
      }
    }
  ],
  categories: {
    bestSeller: {
      name: 'Best Sellers'
    },
    comingSoon: {
      name: 'Coming Soon'
    },
    newRelease: {
      name: 'New Releases'
    },
  }
};

export default SHOP_DATA;

