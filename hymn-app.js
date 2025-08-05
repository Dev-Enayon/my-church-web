// Function to open the settings modal
function openSettings() {
  document.getElementById("settingsModal").style.display = "block";
}

// Function to close the settings modal
function closeSettings() {
  document.getElementById("settingsModal").style.display = "none";
}

// Function to go back to the home screen (close settings modal)
function backToHome() {
  // Hide the settings modal if it's open
  document.getElementById("settingsModal").style.display = "none";

  // Optionally, you can reset the page to a default state if needed:
  document.getElementById("hymnNumber").value = '';  // Clear hymn number input
  document.getElementById("hymnDetails").innerHTML = '';  // Clear hymn details display

  // Hide the "Add to Favorites" and "Back to Home" buttons again
  document.getElementById("favoriteBtn").style.display = 'none';  
  document.getElementById("signOutBtn").style.display = 'none'; 
}

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('darkModeToggleSetting');

  if (darkModeToggle.checked) {
    body.classList.add('dark-mode'); // Add dark mode class to body
  } else {
    body.classList.remove('dark-mode'); // Remove dark mode class from body
  }
}

// Function to update language text
function updateLanguage() {
  const lang = document.getElementById("languageSelect").value;
  const langData = languageData[lang];

  document.getElementById("hymnNumber").placeholder = langData.enterNumber;
  document.getElementById("languageSelect").setAttribute("aria-label", langData.selectLanguage);
  document.querySelector("button").textContent = langData.findHymn;
}

// Function to find hymn by number
function findHymn() {
  const hymnNumber = document.getElementById("hymnNumber").value;

  // Basic validation for hymn number
  if (!hymnNumber || isNaN(hymnNumber) || !hymns[hymnNumber]) {
    document.getElementById("hymnDetails").innerHTML = "<p>Please enter a valid hymn number.</p>";
    return;
  }

  // Check if the hymn exists in the hymns object
  const hymn = hymns[hymnNumber];
  const lang = document.getElementById("languageSelect").value;

  // Generate the hymn details HTML
  const hymnDetails = `
    <h3>${hymn.title[lang]}</h3>
    <div id="hymnText">${hymn.lyrics[lang]}</div>
    <p>${hymn.writeUp[lang]}</p>
  `;
  document.getElementById("hymnDetails").innerHTML = hymnDetails;

  // Display the "Add to Favorites" and "Back to Home" buttons below the hymn content
  document.getElementById("favoriteBtn").style.display = 'inline-block';
  document.getElementById("signOutBtn").style.display = 'inline-block';

  // Add Back to Home Button at the bottom
  const backButton = `
    <button id="backToHomeBtn" onclick="backToHome()">Back to Home</button>
  `;
  document.getElementById("hymnDetails").innerHTML += backButton;
}

// Function to handle sharing a hymn (full screen view)
function shareHymn(hymnNumber) {
  const hymn = hymns[hymnNumber];
  const lang = document.getElementById("languageSelect").value;

  // Generate the hymn details HTML in a full-screen view
  const hymnDetails = `
    <div class="full-screen-hymn">
      <h3>${hymn.title[lang]}</h3>
      <div id="hymnText">${hymn.lyrics[lang]}</div>
      <p>${hymn.writeUp[lang]}</p>
    </div>
    <div class="hymn-actions">
      <button onclick="backToHome()">Back to Home</button>
      <button onclick="addToFavorites()">Add to Favorites</button>
    </div>
  `;
  document.getElementById("hymnDetails").innerHTML = hymnDetails;

  // Optionally apply full-screen styles
  document.getElementById("hymnDetails").style.height = "100vh";
  document.getElementById("hymnDetails").style.overflow = "auto";
}

// Function to add hymn to favorites (placeholder function)
function addToFavorites() {
  alert("Hymn added to favorites!");
  // You can implement the actual logic for adding the hymn to a favorites list here.
}

// Your existing hymns and languageData here:
const hymns = {
  1: {
    title: {
      en: "All hail the power of Jesus name", 
      yo: "Gbogbo aye, gbe Jesu ga.",
      fr: "Grâce étonnante"
    },
    lyrics: {
      en: `
       1
All hail the pow’r of Jesus’ name!<br>
  Let angels prostrate fall,<br>
  Let angels prostrate fall;<br>
Bring forth the royal diadem,<br><br>
 
And crown Him, crown Him, 7ce<br>
And crown Him Lord of all!<br><br>

2
Ye chosen seed of Israel’s race,<br>
  Ye ransomed from the fall,<br>
  Ye ransomed from the fall,<br>
Hail Him who saves you by His grace,<br><br>

3
Sinners, whose love can ne’er forget<br>
  The wormwood and the gall,<br>
  The wormwood and the gall,<br>
Go, spread your trophies at His feet,<br>

4
Let every kindred, every tribe,<br>
  On this terrestrial ball,<br>
  On this terrestrial ball,<br>
To Him all majesty ascribe,<br><br>

5
O that with yonder sacred throng<br>
  We at His feet may fall,<br>
  We at His feet may fall!<br>
We’ll join the everlasting song,<br><br>
      `,
      yo: `
        Gbogbo aye, gbe Jesu ga,
        Gbe awọn angẹli kọlu;
        Wa diadem ọba, 
        Ati orukọ Rẹ ni gbogbo aye.
        Wa diadem ọba,
        Ati orukọ Rẹ ni gbogbo aye.

        Ẹgbẹ Israel, eyiti a yàn,
        Ẹlẹgbẹ ti o gba itusilẹ,
        Gbe Ẹni ti o daabo bo o ni ọpẹ,
        Ati orukọ Rẹ ni gbogbo aye.
        Gbe Ẹni ti o daabo bo o ni ọpẹ,
        Ati orukọ Rẹ ni gbogbo aye.
      `,
      fr: `
        Tout le pouvoir au nom de Jésus !
        Que les anges se prosternent;
        Apportez la couronne royale,
        Et couronnez-le Seigneur de tout.
        Apportez la couronne royale,
        Et couronnez-le Seigneur de tout.

        Vous, semence choisie de la race d'Israël,
        Vous rachetés du péché,
        Hail celui qui vous sauve par sa grâce,
        Et couronnez-le Seigneur de tout.
        Hail celui qui vous sauve par sa grâce,
        Et couronnez-le Seigneur de tout.
      `,
      eg: `
        Afaŋka Ọlọrun,
        Fi ẹsẹ wa ki awọn angẹli,
        Wa diademi ọba,
        Ki a si kà Ọ Lord.
        Wa diademi ọba,
        Ki a si kà Ọ Lord.

        Ẹgbẹ Israel, eyiti a yàn,
        Ẹlẹgbẹ ti o gba itusilẹ,
        Gbe Ẹni ti o daabo bo o ni ọpẹ,
        Ki a si kà Ọ Lord.
        Gbe Ẹni ti o daabo bo o ni ọpẹ,
        Ki a si kà Ọ Lord.
      `
    },
    writeUp: {
      en: "This hymn praises the power and majesty of Jesus Christ, calling all to honor Him as the King of Kings.",
      yo: "Hymn yi n ṣe ayẹyẹ agbara ati ọlá Jesu Kristi, n pe gbogbo eniyan lati bọwọ fun un gẹgẹ bi Ọba ti awọn ọba.",
      
    }
  },
  2: {
    title: {
      en: "Sweet is the work, my God, my king",
      yo: "Dun ni iṣẹ, Ọlọrun mi, Ọba mi",
    },
    lyrics: {
      en: `
        1. Sweet is the work, my God, my king,<br>
        To praise Thy name, give thanks and sing,<br>
        To show Thy love by morning light,<br>
        And talk of all Thy truth at night.<br><br>

        2. Sweet is the day of sacred rest,<br>
        No mortal cares shall seize my breast;<br>
        O may my heart in tune be found<br>
        Like David’s harp of solemn sound!<br><br>

        3. My heart shall triumph in my Lord<br>
        And bless His works, and bless His Word.<br>
        Thy works of grace, how bright they shine!<br>
        How deep Thy counsels, how divine!<br><br>

        4. Fools never raise their thoughts so high;<br>
        Like brutes they live, like brutes they die;<br>
        Like grass they flourish, till Thy breath<br>
        Blast them in everlasting death.<br><br>

        5. But I shall share a glorious part,<br>
        When grace has well refined my heart;<br>
        And fresh supplies of joy are shed,<br>
        Like holy oil, to cheer my head.<br><br>

        6. Sin (my worst enemy before)<br>
        Shall vex my eyes and ears no more;<br>
        My inward foes shall all be slain,<br>
        Nor Satan break my peace again.<br><br>

        7. Then shall I see, and hear, and know<br>
        All I desired and wished below;<br>
        And every power find sweet employ<br>
        In that eternal world of joy.<br><br>

        8. And then what triumphs shall I raise<br>
        To Thy dear name through endless days,<br>
        For in the realms of joy I’ll see<br>
        Thy face in full felicity.<br>
      `,
      yo: `Dun ni iṣẹ, Ọlọrun mi, Ọba mi...
      (You can add the Yoruba lyrics here in a similar format)`,
      fr: `Doux est le travail, mon Dieu, mon roi...
      (You can add the French lyrics here in a similar format)`
    },
    writeUp: {
      en: "This hymn expresses the joy and devotion of serving and praising God, with an emphasis on the eternal rewards of doing so.",
      yo: "Hymn yi n ṣe afihan ayọ ati ifẹ ti iṣẹ ati iyin fun Ọlọrun, pẹlu idojukọ lori awọn ẹbun ailopin ti ṣiṣe bẹ.",
      fr: "Ce cantique exprime la joie et la dévotion du service et de la louange à Dieu, avec un accent sur les récompenses éternelles de le faire."
    }
  },
  3: {
    title: {
      en: "Oh worship the King, all glorious above",
      yo: "Ijọba Ọba, gbogbo ẹwa rẹ",
      fr: "Oh, adorez le Roi, tout glorieux au-dessus"
    },
    lyrics: {
      en: `
        1. Oh worship the King, all glorious above:<br>
        Oh gratefully sing His power and His love;<br>
        Our Shield and Defender, the Ancient of days,<br>
        Pavilion'd in splendour, and girded with praise.<br><br>

        2. Oh tell of His might, oh sing of His grace,<br>
        Whose robe is the light, whose canopy space;<br>
        His chariots of wrath deep thunder clouds form,<br>
        And dark is His path on the wings of the storm.<br><br>

        3. The earth, with its store of wonders untold,<br>
        Almighty, Thy power hath founded of old;<br>
        Hath stablish'd it fast by a changeless decree,<br>
        And round it hath cast, like a mantle, the sea.<br><br>

        4. Thy bountiful care, what tongue can recite?<br>
        It breathes in the air, it shines in the light;<br>
        It streams from the hills, it descends to the plain,<br>
        And sweetly distils in the dew and the rain.<br><br>

        5. Frail children of dust, and feeble as frail,<br>
        In Thee do we trust, nor find Thee to fail;<br>
        Thy mercies, how tender, how firm to the end,<br>
        Our Maker, Defender, Redeemer, and Friend.<br>
      `,
      yo: `Ijọba Ọba, gbogbo ẹwa rẹ...
      (You can add the Yoruba lyrics here in a similar format)`,
      fr: `Oh, adorez le Roi, tout glorieux au-dessus...
      (You can add the French lyrics here in a similar format)`
    },
    writeUp: {
      en: "This hymn calls believers to worship God for His greatness, power, and love, celebrating His majesty and providence.",
      yo: "Hymn yi n pe awọn onigbagbọ lati bọwọ fun Ọlọrun fun agbara Rẹ, ifẹ, ati ọlá Rẹ, n ṣe ayẹyẹ ọlá ati abojuto Rẹ.",
      fr: "Ce cantique appelle les croyants à adorer Dieu pour sa grandeur, sa puissance et son amour, célébrant sa majesté et sa providence."
    }
  },
  4: {
    title: {
      en: "Praise Him, Praise Him",
      yo: "Yin un, Yin un",
      fr: "Louez-le, Louez-le"
    },
    lyrics: {
      en: `
        1. Praise him, praise him! Jesus, our blessed redeemer!<br>
        Sing, O earth, his wonderful love proclaim!<br>
        Hail him, hail him! Highest archangels in glory!<br>
        Strength and honor give to his holy name!<br>
        Like a shepherd, Jesus will guard his children.<br>
        In his arms he carries them all day long.<br><br>

        Refrain:<br>
        Praise him! Praise him! tell of his excellent greatness.<br>
        Praise him! Praise him! ever in joyful song.<br><br>

        2. Praise him, praise him! Jesus, our blessed redeemer!<br>
        For our sins, he suffered, and bled, and died.<br>
        He our rock, our hope of eternal salvation,<br>
        Hail him, hail him! Jesus, the crucified.<br>
        Sound his praises, Jesus who bore our sorrows,<br>
        Love unbounded, wonderful, deep, and strong.<br><br>

        [Refrain]<br><br>

        3. Praise him, praise him! Jesus, our blessed redeemer!<br>
        Heav’nly portals loud with hosannas ring!<br>
        Jesus, Savior, reigneth forever and ever!<br>
        Crown him, crown him! Prophet, and priest, and king!<br>
        Christ is coming, over the world victorious.<br>
        Pow’r and glory unto the Lord belong.<br><br>

        [Refrain]
      `,
      yo: `...`,  // Yoruba lyrics if needed
      fr: `...`,  // French lyrics if needed
      eg: `...`   // Egba lyrics if needed
    },
    writeUp: {
      en: "This hymn celebrates the greatness and majesty of Jesus Christ, calling all to praise Him for His sacrifice and eternal reign.",
      yo: "Hymn yi n ṣe ayẹyẹ ọlá ati iyin fun Jesu Kristi, n pe gbogbo eniyan lati yin un fun ìrònú Rẹ ati ijọba Rẹ t’o wa titi laelae.",
      fr: "Ce cantique célèbre la grandeur et la majesté de Jésus-Christ, appelant tous à le louer pour son sacrifice et son règne éternel.",
      eg: "Afaŋka Ọlọrun n ṣe ayẹyẹ ọlá ati iyin fun Jesu Kristi, n pe gbogbo eniyan lati yin un fun ìrònú Rẹ ati ijọba Rẹ t’o wa titi laelae."
    }
  },
  5: {
    title: {
      en: "The God of Abraham Praise",
      yo: "Ọlọrun Abraham, yin",
      fr: "Le Dieu d'Abraham, louez-le"
    },
    lyrics: {
      en: `
        1. The God of Abraham praise,<br>
        Who reigns enthroned above;<br>
        Ancient of everlasting days,<br>
        And God of Love;<br>
        Jehovah, great I AM!<br>
        By earth and Heav’n confessed;<br>
        I bow and bless the sacred name<br>
        Forever blessed.<br><br>

        2. The God of Abraham praise,<br>
        At whose supreme command<br>
        From earth I rise—and seek the joys<br>
        At His right hand;<br>
        I all on earth forsake,<br>
        Its wisdom, fame, and power;<br>
        And Him my only portion make,<br>
        My shield and tower.<br><br>

        3. He by Himself has sworn;<br>
        I on His oath depend,<br>
        I shall, on eagle wings upborne,<br>
        To Heaven ascend.<br>
        I shall behold His face;<br>
        I shall His power adore,<br>
        And sing the wonders of His grace<br>
        Forevermore.<br><br>

        4. Though nature’s strength decay,<br>
        And earth and hell withstand,<br>
        To Canaan’s bounds I urge my way,<br>
        At His command.<br>
        The watery deep I pass,<br>
        With Jesus in my view;<br>
        And through the howling wilderness<br>
        My way pursue.<br><br>

        5. The God who reigns on high<br>
        The great archangels sing,<br>
        And Holy, holy, holy! cry,<br>
        Almighty King!<br>
        Who was, and is, the same,<br>
        And evermore shall be:<br>
        Jehovah—Father—great I AM,<br>
        We worship Thee!<br><br>

        6. The whole triumphant host<br>
        Give thanks to God on high;<br>
        Hail, Father, Son, and Holy Ghost,<br>
        They ever cry.<br>
        Hail, Abraham’s God, and mine!<br>
        (I join the heavenly lays)<br>
        All might and majesty are Thine,<br>
        And endless praise.<br>
      `,
      yo: `...`,  // Yoruba lyrics if needed
      fr: `...`,  // French lyrics if needed
      eg: `...`   // Egba lyrics if needed
    },
    writeUp: {
      en: "This hymn praises the eternal God of Abraham, calling on all to worship His power, majesty, and love through eternal praise.",
      yo: "Hymn yi n ṣe ayẹyẹ Ọlọrun Abraham, n pe gbogbo eniyan lati bọwọ fun agbara Rẹ, ọlá, ati ifẹ Rẹ nipasẹ iyin ti o wa titi.",
      fr: "Ce cantique loue le Dieu éternel d'Abraham, appelant tous à adorer Sa puissance, Sa majesté et Son amour par une louange éternelle.",
      eg: "Afaŋka Ọlọrun Abraham n ṣe ayẹyẹ Ọlọrun pẹ̀lú, n pe gbogbo eniyan lati bọwọ fun agbara Rẹ, ọlá, ati ifẹ Rẹ nipasẹ iyin ti o wa titi."
    }
  },
  6: {
    title: {
      en: "O for a thousand tongues to sing",
      yo: "O fun ẹẹdẹgbẹrun ẹnu lati kọrin",
      fr: "Ô pour mille langues à chanter"
    },
    lyrics: {
      en: `
1 O for a thousand tongues to sing<br>
  My great Redeemer’s praise,<br>
The glories of my God and King,<br>
  The triumphs of His grace<br><br>

2  Jesus! the name that charms our fears,<br>
  That bids our sorrows cease;<br>
’Tis music in the sinner’s ears,<br>
  ’Tis life, and health, and peace.<br><br>

3  He breaks the power of canceled sin,<br>
  He sets the prisoner free;<br>
His blood can make the foulest clean;<br>
  His blood availed for me.<br><br>

4 He speaks, and listening to his voice,<br>
new life the dead receive;<br>
the mournful, broken hearts rejoice,<br>
the humble poor believe.<br><br>

5 Hear him, ye deaf; his praise, ye dumb,<br>
your loosened tongues employ;<br>
ye blind, behold your savior come,<br>
and leap, ye lame, for joy.<br><br>

6  My gracious Master and my God,<br>
assist me to proclaim,<br>
to spread through all the earth abroad<br>
the honors of thy name.<br>
      `,
      yo: `...`,
      fr: `...`
    },
    writeUp: {
      en: "This hymn expresses a desire to proclaim the glory of God and the transformative power of Christ's redemptive work.",
      yo: "Hymn yi n ṣafihan ifẹ lati kede ọlá Ọlọrun ati agbara iyipada iṣẹ igbala Kristi.",
      fr: "Ce cantique exprime un désir de proclamer la gloire de Dieu et le pouvoir transformateur de l'œuvre rédemptrice du Christ."
    }
  },
  7: {
    title: {
      en: "Be glad in the Lord and rejoice",
      yo: "Yẹra ninu Oluwa ki o si yọ",
      fr: "Réjouissez-vous dans le Seigneur et réjouissez-vous"
    },
    lyrics: {
      en: `
        1. Be glad in the Lord and rejoice,<br>
        All ye that are upright in heart;<br>
        And ye that have made him your choice,<br>
        Bid sadness and sorrow depart.<br><br>

        Refrain:<br>
        Rejoice, rejoice! Be glad in the Lord and rejoice!<br><br>

        2. What though in the conflict for right<br>
        Your enemies almost prevail,<br>
        God’s armies, just hid from your sight,<br>
        Are more than the foes which assail.<br><br>

        3. Though darkness surround you by day,<br>
        Your sky by the night be o’ercast,<br>
        Let nothing your spirit dismay,<br>
        But trust till the danger is past.<br><br>

        4. Be glad in the Lord and rejoice,<br>
        His praises proclaiming in song;<br>
        Acclaim him with trumpet and voice,<br>
        The loud hallelujahs prolong.<br>
      `,
      yo: `...`,
      fr: `...`
    },
    writeUp: {
      en: "This hymn encourages believers to rejoice in the Lord regardless of life's challenges, reminding them of God's power and protection.",
      yo: "Hymn yi n kọọ awọn onigbagbọ lati yọ ninu Oluwa laibikita awọn ipenija aye, n jẹ ki wọn ranti agbara ati aabo Ọlọrun.",
      fr: "Ce cantique encourage les croyants à se réjouir dans le Seigneur malgré les défis de la vie, leur rappelant le pouvoir et la protection de Dieu."
    }
  },
  8: {
    title: {
      en: "Children of Jerusalem",
      yo: "Ẹlẹgbẹ Jerusalema",
      fr: "Enfants de Jérusalem"
    },
    lyrics: {
      en: `
        1. Children of Jerusalem<br>
        Sang the praise of Jesus’ name;<br>
        Children, too, of modern days<br>
        Join to sing the Savior’s praise.<br><br>
        
        Refrain:<br>
        Hark, hark, hark, while infant voices sing,<br>
        Hark, hark, hark, while infant voices sing<br>
        Loud hosannas, loud hosannas,<br>
        Loud hosannas to our King.<br><br>

        2. We are taught to love the Lord,<br>
        We are taught to read His word;<br>
        We are taught the way to heaven;<br>
        Praise for all to God be given. [Refrain]<br><br>

        3. Parents, teachers, old and young,<br>
        All unite to swell the song;<br>
        Higher and yet higher rise,<br>
        Till hosannas fill the skies. [Refrain]<br><br>
        
        Amen.<br>
      `,
      yo: `...`,
      fr: `...`
    },
    writeUp: {
      en: "This hymn invites children and all believers to join in praise and worship of Jesus Christ, celebrating His greatness and teaching of love.",
      yo: "Hymn yi n pe awọn ọmọde ati gbogbo awọn onigbagbọ lati darapọ ni iyin ati iṣẹ-ọwọ fun Jesu Kristi, n ṣe ayẹyẹ ọlá ati ẹkọ Rẹ ti ifẹ.",
      fr: "Ce cantique invite les enfants et tous les croyants à se joindre dans la louange et l'adoration de Jésus-Christ, célébrant sa grandeur et son enseignement de l'amour."
    }
  },
  9: {
    title: {
      en: "Father, Our Creator",
      yo: "Baba, Olùdá wa",
      fr: "Père, notre Créateur"
    },
    lyrics: {
      en: `
        1. Father, our creator,<br>
        Hear these our hymns of praise,<br>
        On earth and in heaven,<br>
        Blessed mighty Father,<br><br>
        
        CHORUS:<br>
        To Thee alone we give all thanks,<br>
        And all honour, glory combined.<br><br>

        2. O blessed God the Son,<br>
        Thou died to save us all,<br>
        Thou rose up the third day;<br>
        And ascended to heaven:<br><br>

        CHORUS:<br>
        To Thee alone we give all thanks,<br>
        And all honour, glory combined.<br><br>

        3. To Thee God, Holy Ghost,<br>
        We raise our hymns of praise,<br>
        The ever-living light;<br>
        Thou hast put in our hearts;<br><br>

        CHORUS:<br>
        To Thee alone we give all thanks,<br>
        And all honour, glory combined.<br><br>

        4. Holy, Holy, Holy,<br>
        All praise to Trinity,<br>
        On earth and in heaven<br>
        All people sing to Thee.<br><br>

        CHORUS:<br>
        To Thee alone we give all thanks,<br>
        And all honour, glory combined.<br><br>

        Amen.<br>
      `,
      yo: `...`,
      fr: `...`
    },
    writeUp: {
      en: "This hymn praises the Father, Son, and Holy Ghost, celebrating the divine unity of the Trinity and giving thanks for the Creator's mighty acts.",
      yo: "Hymn yi n ṣe iyin fun Baba, Ọmọ, ati Ẹmi Mímọ, n ṣe ayẹyẹ isọdọkan igbagbogbo ti Trinity ati fifun ọpẹ fun iṣẹ iyanu ti Olùdá.",
      fr: "Ce cantique loue le Père, le Fils et le Saint-Esprit, célébrant l'unité divine de la Trinité et rendant grâce pour les actes puissants du Créateur."
    }
  },
  125: {
  title: {
    en: "There's a Stranger at the Door",
    yo: "", // You can fill in Yoruba if available
    fr: ""  // You can fill in French if available
  },
  lyrics: {
    en: `
      1. There’s a Stranger at the door,<br>
      Let Him in;<br>
      He has been there oft before,<br>
      Let Him in;<br>
      Let Him in, ere He is gone,<br>
      Let Him in, the Holy One,<br>
      Jesus Christ, the Father’s Son,<br>
      Let Him in.<br><br>

      2. Open now to Him your heart,<br>
      Let Him in;<br>
      If you wait He will depart,<br>
      Let Him in;<br>
      Let Him in, He is your Friend,<br>
      He your soul will sure defend.<br>
      He will keep you to the end,<br>
      Let Him in.<br><br>

      3. Hear you now His loving voice?<br>
      Let Him in;<br>
      Now, oh, now make Him your choice,<br>
      Let Him in;<br>
      He is standing at your door,<br>
      Joy to you He will restore,<br>
      And His Name you will adore,<br>
      Let Him in.<br><br>

      4. Now admit the heavenly Guest,<br>
      Let Him in;<br>
      He will make for you a feast,<br>
      Let Him in;<br>
      He will speak your sins forgiven,<br>
      And when earth ties all are riven,<br>
      He will take you home to Heaven,<br>
      Let Him in.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn invites the listener to open their heart to Jesus Christ, the heavenly Guest, who brings forgiveness, joy, and eternal life.",
    yo: "",
    fr: ""
  }
},
126: {
  title: {
    en: "In Tenderness He Sought Me",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. In tenderness He sought me,<br>
      Weary and sick with sin,<br>
      And on His shoulders brought me<br>
      Back to His fold again.<br>
      While angels in His presence sang<br>
      Until the courts of heaven rang.<br><br>

      Refrain:<br>
      O the love that sought me!<br>
      O the blood that bought me!<br>
      O the grace that brought me to the fold,<br>
      Wondrous grace that brought me to the fold!<br><br>

      2. He washed the bleeding sin-wounds<br>
      And poured in oil and wine;<br>
      He whispered to assure me,<br>
      “I’ve found thee, thou art Mine;”<br>
      I never heard a sweeter voice;<br>
      It made my aching heart rejoice!<br>
      (Refrain)<br><br>

      3. He pointed to the nail prints,<br>
      For me His blood was shed,<br>
      A mocking crown so thorny<br>
      Was placed upon His head:<br>
      I wondered what He saw in me<br>
      To suffer such deep agony.<br>
      (Refrain)<br><br>

      4. I’m sitting in His presence,<br>
      The sunshine of His face,<br>
      While with adoring wonder<br>
      His blessings I retrace:<br>
      It seems as if eternal days<br>
      Are far too short to sound His praise.<br>
      (Refrain)<br><br>

      5. So while the hours are passing,<br>
      All now is perfect rest;<br>
      I’m waiting for the morning,<br>
      The brightest and the best,<br>
      When He will call us to His side,<br>
      To be with Him, His spotless bride.<br>
      (Refrain)<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn reflects the tender love and saving grace of Jesus Christ, who rescues, heals, and secures the soul with eternal hope and rest.",
    yo: "",
    fr: ""
  }
},
127: {
  title: {
    en: "My Happy Heart is Singing",
    yo: "", // Add Yoruba translation if needed
    fr: ""  // Add French translation if needed
  },
  lyrics: {
    en: `
      Verse 1<br>
      My happy heart is singing<br>
      My heav'nly Father's love;<br>
      He send so many blessings<br>
      Like sunbeams from above.<br><br>

      Chorus:<br>
      But Jesus is the best of all<br>
      Yes Jesus is the best of all<br>
      Of all the joys that may surround me,<br>
      The best of all is Jesus.<br><br>

      Verse 2<br>
      Tho' other joys may fail me,<br>
      And sorrows may befall,<br>
      My Saviour will be with me,<br>
      And He is best of all.<br><br>

      Chorus:<br>
      But Jesus is the best of all<br>
      Yes Jesus is the best of all<br>
      Of all the joys that may surround me,<br>
      The best of all is Jesus.<br><br>

      Verse 3<br>
      O, let me tell to others<br>
      The story of His grace,<br>
      Rejoicing in His service,<br>
      Until I see His face.<br><br>

      Chorus:<br>
      But Jesus is the best of all<br>
      Yes Jesus is the best of all<br>
      Of all the joys that may surround me,<br>
      The best of all is Jesus.<br><br>

      Verse 4<br>
      And when I view the glories,<br>
      Within the jasper wall,<br>
      I'll sing with all the ransomed,<br>
      My Saviour's best of all.<br><br>

      Chorus:<br>
      But Jesus is the best of all<br>
      Yes Jesus is the best of all<br>
      Of all the joys that may surround me,<br>
      The best of all is Jesus.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This joyful hymn celebrates the unmatched love and presence of Jesus, who remains the greatest joy above all earthly blessings and experiences.",
    yo: "",
    fr: ""
  }
},
128: {
  title: {
    en: "I Have a Song I Love to Sing",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. I have a song I love to sing,<br>
      Since I have been redeemed,<br>
      Of my Redeemer, Savior, King,<br>
      Since I have been redeemed.<br><br>

      Chorus:<br>
      Since I have been redeemed,<br>
      Since I have been redeemed,<br>
      I will glory in His name;<br>
      Since I have been redeemed,<br>
      I will glory in my Savior's name.<br><br>

      2. I have a Christ who satisfies,<br>
      Since I have been redeemed,<br>
      To do His will-- my highest prize,<br>
      Since I have been redeemed.<br>
      (Chorus)<br><br>

      3. I have a witness bright and clear,<br>
      Since I have been redeemed,<br>
      Dispelling ev'ry doubt and fear,<br>
      Since I have been redeemed.<br>
      (Chorus)<br><br>

      4. I have a home prepared for me,<br>
      Since I have been redeemed,<br>
      Where I shall dwell eternally,<br>
      Since I have been redeemed.<br>
      (Chorus)<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn joyfully proclaims the transformation and hope that comes from being redeemed by Christ, inspiring believers to glorify Him always.",
    yo: "",
    fr: ""
  }
},
129: {
  title: {
    en: "Rock of Ages",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Rock of Ages, cleft for me,<br>
      Let me hide myself in thee;<br>
      Let the water and the blood,<br>
      From thy wounded side which flowed,<br>
      Be of sin the double cure;<br>
      Save from wrath and make me pure.<br><br>

      2. Not the labors of my hands<br>
      Can fulfill thy law's demands;<br>
      Could my zeal no respite know,<br>
      Could my tears forever flow,<br>
      All for sin could not atone;<br>
      Thou must save, and thou alone.<br><br>

      3. Nothing in my hand I bring,<br>
      Simply to the cross I cling;<br>
      Naked, come to thee for dress;<br>
      Helpless, look to thee for grace;<br>
      Foul, I to the fountain fly;<br>
      Wash me, Savior, or I die.<br><br>

      4. While I draw this fleeting breath,<br>
      When mine eyes shall close in death,<br>
      When I soar to worlds unknown,<br>
      See thee on thy judgment throne,<br>
      Rock of Ages, cleft for me,<br>
      Let me hide myself in thee.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This powerful hymn is a cry for mercy and grace, declaring that salvation comes only through Jesus Christ, our Rock and eternal refuge.",
    yo: "",
    fr: ""
  }
},
130: {
  title: {
    en: "O Lord with Thy Guiding Rod",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. O Lord with Thy guiding rod,<br>
      Always tend me gently home<br>
      Let Thy wrath cease on my ways<br>
      That I stumbleth not again.<br><br>

      2. Cure my sickness Lord I pray;<br>
      Behold me I seek, Thy grace<br>
      This will be my only plea<br>
      Behold me in Thy mercy.<br><br>

      3. Who heth low in the grace<br>
      That can tell of salvation,<br>
      Lord strengthen my weakest heart<br>
      Speak and I will surely live.<br><br>

      4. Behold He cometh to hear<br>
      I have caught a glimpse of Him,<br>
      Glory encompasses me<br>
      My soul arise to praise Him. Amin.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn is a heartfelt prayer for divine guidance, healing, and mercy, ending in a joyful vision of God's glory and a soul stirred to praise.",
    yo: "",
    fr: ""
  }
},
131: {
  title: {
    en: "Think of My Affliction O Lord",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      Think of my affliction O Lord.<br>
      Send Thy only help<br>
      My heart fainteth for salvation<br>
      And will my work not end?<br><br>

      It is more proportion for me<br>
      If my father whips me,<br>
      Punish me for refusing Thee<br>
      That I may believe Thee.<br><br>

      I know righteous is thy judgement<br>
      As harsh as it may be,<br>
      Paints that I have already borne<br>
      Cometh from Thee alone.<br><br>

      Before I knew Thy guiding hand<br>
      I always went astray,<br>
      When I read Thy consoling words<br>
      I do not go astray.<br><br>

      Amen.<br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "A reflective and humble hymn of repentance, this prayer acknowledges God's righteous judgment and the restoring power of His Word and guidance.",
    yo: "",
    fr: ""
  }
},
132: {
  title: {
    en: "God Be Merciful to Me",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Sinful, sighing to be blest,<br>
      Bound, and longing to be free;<br>
      Weary, waiting for my rest;<br>
      God be merciful to me.<br><br>

      2. Goodness I have none to plead,<br>
      Sinfulness in all I see,<br>
      I can only bring my need;<br>
      God be merciful to me.<br><br>

      3. Broken heart and downcast eyes<br>
      Dare not lift themselves to Thee;<br>
      Yet Thou canst interpret sighs:<br>
      God be merciful to me.<br><br>

      4. From this sinful heart of mine<br>
      To Thy bosom I would flee:<br>
      I am not my own but Thine:<br>
      God be merciful to me.<br><br>

      5. There is One beside the throne,<br>
      And my only hope and plea<br>
      Are in Him, and Him alone:<br>
      God be merciful to me.<br><br>

      6. He my cause will undertake,<br>
      My interpreter will be;<br>
      He's my all; and for His sake<br>
      God be merciful to me.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "A deeply humble prayer of repentance, this hymn pleads for God's mercy, recognizing Christ as the sole hope and intercessor for salvation.",
    yo: "",
    fr: ""
  }
},
133: {
  title: {
    en: "No, Not Despairingly",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. No, not despairingly<br>
      Come I to Thee;<br>
      No, not distrustingly<br>
      Bend I the knee;<br>
      Sin hath gone over me,<br>
      Yet is this still my plea,<br>
      Jesus hath died.<br><br>

      2. Ah! Mine iniquity<br>
      Crimson has been,<br>
      Infinite, infinite,<br>
      Sin upon sin;<br>
      Sin of not loving Thee,<br>
      Sin of not trusting Thee,<br>
      Infinite sin.<br><br>

      3. Lord, I confess to Thee<br>
      Sadly my sin;<br>
      All I am, tell to Thee,<br>
      All I have been;<br>
      Purge Thou my sin away,<br>
      Wash Thou my soul this day;<br>
      Lord, make me clean.<br><br>

      4. Faithful and just art Thou,<br>
      Forgiving all;<br>
      Loving and kind art Thou<br>
      When poor ones call;<br>
      Lord, let the cleansing blood,<br>
      Blood of the Lamb of God,<br>
      Pass o'er my soul.<br><br>

      5. Then all is peace and light<br>
      This soul within;<br>
      Thus shall I walk with Thee,<br>
      The loved Unseen;<br>
      Leaning on Thee, my God,<br>
      Guided along the road,<br>
      Nothing between.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn is a sincere confession of sin and a plea for cleansing through Christ's sacrifice, ending in peace, assurance, and daily fellowship with God.",
    yo: "",
    fr: ""
  }
},
134: {
  title: {
    en: "Unworthy I Am, Lord",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Unworthy I am, Lord.<br>
      My Lord, my God, Saviour,<br>
      May I draw nearer to Thee, Lord?<br>
      With all my sinful load.<br><br>

      2. My sins do press on me<br>
      With my uncleansed heart,<br>
      How sorrowful this may be, Lord?<br>
      In this Thy holy sight.<br><br>

      3. Do I move to the grave,<br>
      In this my hopeless state?<br>
      I have joy in Thy painful death<br>
      For me the miserable.<br><br>

      4. The blood which Thou hast shed,<br>
      Which is free given grace,<br>
      Can clean me, a sinner so bad;<br>
      Can soften hardened heart.<br><br>

      5. I worship at Thy feet,<br>
      Forgive to me my sins,<br>
      Here I’ll not arise on my knees<br>
      Till Thou shalt say ‘Arise’.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "A deeply humble hymn of confession, expressing the sinner's unworthiness and pleading for forgiveness, cleansing, and the mercy found in Christ's sacrifice.",
    yo: "",
    fr: ""
  }
},
135: {
  title: {
    en: "Lord, in This Thy Mercy’s Day",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Lord, in this Thy mercy’s day,<br>
      Ere for us it pass away,<br>
      On our knees we fall and pray.<br><br>

      2. Holy Jesus, grant us tears,<br>
      Fill us with heart searching fears,<br>
      Ere the hour of doom appears.<br><br>

      3. Lord, on us Thy Spirit pour,<br>
      Kneeling lowly at Thy door,<br>
      Ere it close forevermore.<br><br>

      4. By Thy night of agony,<br>
      By Thy supplicating cry,<br>
      By Thy willingness to die,<br><br>

      5. By Thy tears of bitter woe,<br>
      For Jerusalem below,<br>
      Let us not Thy peace forego.<br><br>

      6. Judge and Savior of our race,<br>
      Grant us, when we see Thy face,<br>
      With Thy ransomed ones a place.<br><br>

      7. On Thy love we rest alone,<br>
      And that love shall then be known,<br>
      By the pardoned, round Thy throne.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This solemn hymn is a heartfelt plea for mercy, repentance, and spiritual awakening before it is too late, resting in the redeeming love of Christ.",
    yo: "",
    fr: ""
  }
},
136: {
  title: {
    en: "Just as I Am, Without One Plea",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Just as I am, without one plea,<br>
      But that Thy blood was shed for me,<br>
      And that Thou bid’st me come to Thee,<br>
      O Lamb of God, I come! I come!<br><br>

      2. Just as I am, and waiting not<br>
      To rid my soul of one dark blot;<br>
      To Thee whose blood can cleanse each spot,<br>
      O Lamb of God, I come, I come!<br><br>

      3. Just as I am, though tossed about<br>
      With many a conflict, many a doubt;<br>
      Fightings within, and fears without,<br>
      O Lamb of God, I come, I come!<br><br>

      4. Just as I am, poor, wretched, blind;<br>
      Sight, riches, healing of the mind;<br>
      Yes, all I need, in Thee to find,<br>
      O Lamb of God, I come, I come!<br><br>

      5. Just as I am, Thou wilt receive,<br>
      Wilt welcome, pardon, cleanse, relieve;<br>
      Because Thy promise I believe,<br>
      O Lamb of God, I come, I come!<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This beloved hymn is a humble declaration of faith and surrender, emphasizing God's grace, mercy, and readiness to accept all who come to Him.",
    yo: "",
    fr: ""
  }
},
204: {
  title: {
    en: "My Heart Is Open to Thee",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. My heart is open to Thee, dear Lord,<br>
      Come in, come in,<br>
      My faith is clinging to Thy dear word,<br>
      Come in, Come in:<br><br>

      Chorus:<br>
      Come not to tarry, but stay, dear Lord<br>
      All shall be Thine love can afford<br>
      Here in my heart ever make Thine abode<br>
      Come in, Come in.<br><br>

      2. Yes, there is room in my heart, dear Lord<br>
      Come in, Come in;<br>
      Thy presence makes Heaven real to me,<br>
      Come in, Come in.<br><br>

      (Chorus)<br><br>

      3. I kept Thee standing outside so long<br>
      Come in, Come in,<br>
      I pray Thee pardon this shameful wrong,<br>
      Come in, Come in.<br><br>

      (Chorus)<br><br>

      4. I hear Thee knocking at my heart's door<br>
      Come in, Come in,<br>
      I'll keep Thee waiting outside no more<br>
      Come in, Come in.<br><br>

      (Chorus)<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn expresses a deep personal invitation for Jesus to dwell in the heart, moving from repentance to full surrender and fellowship with Christ.",
    yo: "",
    fr: ""
  }
},
205: {
  title: {
    en: "Holy Spirit, Truth Divine",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Holy Spirit, Truth divine,<br>
      Dawn upon this soul of mine.<br>
      Voice of God, and inward Light,<br>
      Wake my spirit, clear my sight.<br><br>

      2. Holy Spirit, Love divine,<br>
      Glow within this heart of mine.<br>
      Kindle ev’ry high desire,<br>
      Purify me with your fire.<br><br>

      3. Holy Spirit, Pow’r divine,<br>
      Fill and nerve this will of mine.<br>
      Boldly may I always live,<br>
      Bravely serve and gladly give.<br><br>

      4. Holy Spirit, Law divine,<br>
      Reign within this soul of mine.<br>
      Be my law and I shall be<br>
      Firmly bound, forever free.<br><br>

      5. Holy Spirit, Peace divine,<br>
      Still this restless heart of mine.<br>
      Speak to calm this tossing sea,<br>
      Grant me your tranquility.<br><br>

      6. Holy Spirit, Joy divine,<br>
      Gladden now this heart of mine.<br>
      In the desert ways I sing,<br>
      Spring, O living Water, spring!<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn is a meditative prayer to the Holy Spirit, calling on Him as Truth, Love, Power, Law, Peace, and Joy to transform, guide, and fill every part of the believer's life.",
    yo: "",
    fr: ""
  }
},
207: {
  title: {
    en: "Come, Thou Holy Paraclete",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Come, Thou holy Paraclete,<br>
      And from Thy celestial seat<br>
      Send Thy light and brilliancy:<br>
      Father of the poor, draw near;<br>
      Giver of all gifts, be here;<br>
      Come, the soul’s true radiancy.<br><br>

      2. Come, of comforters the best,<br>
      Of the soul the sweetest guest,<br>
      Come in toil refreshingly:<br>
      Thou in labor rest most sweet,<br>
      Thou art shadow from the heat,<br>
      Comfort in adversity.<br><br>

      3. O Thou Light, most pure and blest,<br>
      Shine within the inmost breast<br>
      Of Thy faithful company.<br>
      Where Thou art not, man hath naught;<br>
      Every holy deed and thought<br>
      Comes from Thy divinity.<br><br>

      4. What is soilèd, make Thou pure;<br>
      What is wounded, work its cure;<br>
      What is parchèd, fructify;<br>
      What is rigid, gently bend;<br>
      What is frozen, warmly tend;<br>
      Strengthen what goes erringly.<br><br>

      5. Fill Thy faithful, who confide<br>
      In Thy power to guard and guide,<br>
      With Thy sevenfold mystery.<br>
      Here Thy grace and virtue send:<br>
      Grant salvation to the end,<br>
      And in Heav’n felicity.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This ancient hymn is a powerful invocation to the Holy Spirit, the Paraclete, asking for His light, comfort, purification, strength, and guidance to lead believers into eternal joy.",
    yo: "",
    fr: ""
  }
},
208: {
  title: {
    en: "Showers of Blessing",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. There shall be showers of blessing:<br>
      This is the promise of love;<br>
      There shall be seasons refreshing,<br>
      Sent from the Savior above.<br><br>

      Refrain:<br>
      Showers of blessing,<br>
      Showers of blessing we need:<br>
      Mercy-drops round us are falling,<br>
      But for the showers we plead.<br><br>

      2. There shall be showers of blessing,<br>
      Precious reviving again;<br>
      Over the hills and the valleys,<br>
      Sound of abundance of rain.<br>
      (Refrain)<br><br>

      3. There shall be showers of blessing:<br>
      Send them upon us, O Lord;<br>
      Grant to us now a refreshing,<br>
      Come and now honor Thy Word.<br>
      (Refrain)<br><br>

      4. There shall be showers of blessing:<br>
      Oh, that today they might fall,<br>
      Now as to God we're confessing,<br>
      Now as on Jesus we call!<br>
      (Refrain)<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This uplifting hymn is a prayer for spiritual revival and renewal, calling on God to fulfill His promise and send abundant blessings like life-giving rain.",
    yo: "",
    fr: ""
  }
},
209: {
  title: {
    en: "Holy Bible",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Holy Bible, book divine,<br>
      Precious treasure, thou art mine;<br>
      Mine to tell me whence I came;<br>
      Mine to teach me what I am:<br><br>

      2. Mine to chide me when I stray,<br>
      Mine to show a Savior's way;<br>
      Mine art thou to guide my feet;<br>
      Mine to judge, condemn, acquit.<br><br>

      3. Mine to comfort in distress,<br>
      If the Holy Spirit bless;<br>
      Mine to show by living faith,<br>
      We can triumph over death.<br><br>

      4. Mine to tell of joys to come,<br>
      And the rebel sinner's doom;<br>
      Holy Bible, book divine,<br>
      Precious treasure, thou art mine.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn is a declaration of the personal value and spiritual richness of the Holy Bible, portraying it as a divine guide, comforter, and source of truth and hope.",
    yo: "",
    fr: ""
  }
},
211: {
  title: {
    en: "Lord, Thy Word Abideth",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Lord, Thy Word abideth,<br>
      And our footsteps guideth;<br>
      Who its truth believeth,<br>
      Light and joy receiveth.<br><br>

      2. When our foes are near us,<br>
      Then Thy Word doth cheer us,<br>
      Word of consolation,<br>
      Message of salvation.<br><br>

      3. When the storms are o’er us,<br>
      And dark clouds before us,<br>
      Then its light directeth,<br>
      And our way protecteth.<br><br>

      4. Who can tell the pleasure,<br>
      Who recount the treasure,<br>
      By Thy Word imparted<br>
      To the simple-hearted?<br><br>

      5. Word of mercy, giving<br>
      Succour to the living;<br>
      Word of life, supplying<br>
      Comfort to the dying.<br><br>

      6. O that we, discerning<br>
      Its most holy learning,<br>
      Lord, may love and fear Thee,<br>
      Evermore be near Thee.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn celebrates the guiding, comforting, and life-giving power of God's Word, urging believers to cherish its teachings and draw closer to the Lord through it.",
    yo: "",
    fr: ""
  }
},
212: {
  title: {
    en: "Bible, Everliving Book",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Thou Bible, everliving book,<br>
      Thy start is never known;<br>
      Nobody knows thy origin,<br>
      No one will know the end.<br><br>

      2. Thou art the Almighty secret,<br>
      Thou came from Heavenly King;<br>
      Thou art the sword to kill death pains,<br>
      The true picture of God.<br><br>

      3. Thou art the chief amongst all those<br>
      Books of the ancient times;<br>
      Thou point the way to salvation<br>
      To all saints on the earth.<br><br>

      4. Thou treasure of the Trinity,<br>
      Of Great King on the throne;<br>
      Please make thyself known unto me<br>
      So that I doubt no more.<br><br>

      5. I want to read thee and then pray,<br>
      I want to learn from thee;<br>
      Thou great book of the ancient time,<br>
      Reveal me Jesus' love.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn praises the Bible as the eternal, divine, and mysterious Word of God, highlighting its power, origin, and role in revealing salvation and the love of Jesus to believers.",
    yo: "",
    fr: ""
  }
},
213: {
  title: {
    en: "Cling to the Bible",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Cling to the Bible, though all else be taken;<br>
      Lose not its precepts, so precious and pure;<br>
      Souls that are sleeping its tidings awaken;<br>
      Life from the dead in its promises sure.<br><br>

      Refrain:<br>
      Cling to the Bible!<br>
      Cling to the Bible!<br>
      Cling to the Bible—<br>
      Our Lamp and our Guide!<br><br>

      2. Cling to the Bible! This jewel and treasure<br>
      Brings life eternal, and saves fallen man;<br>
      Surely its value no mortal can measure:<br>
      Seek for its blessing, O soul, while you can!<br>
      (Refrain)<br><br>

      3. Lamp for the feet that in byways have wandered,<br>
      Guide for the youth that would otherwise fall;<br>
      Hope for the sinner whose life has been squandered,<br>
      Staff for the agèd, and best book of all.<br>
      (Refrain)<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn is a powerful encouragement to hold tightly to the Bible as a source of truth, life, guidance, and hope across all stages of life and circumstances.",
    yo: "",
    fr: ""
  }
},

137: {
  title: {
    en: "Loving Saviour, Hear My Cry",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      Verse 1<br>
      Loving Saviour, hear my cry,<br>
      Hear my cry, hear my cry;<br>
      Trembling to Thine arms I fly:<br>
      O save me at the Cross!<br>
      I have sinn'd, but Thou hast died,<br>
      Thou hast died, Thou hast died;<br>
      In Thy mercy let me hide:<br>
      O save me at the Cross!<br><br>

      Chorus<br>
      Lord Jesus, receive me,<br>
      No more would I grieve Thee,<br>
      Now, blessed Redeemer,<br>
      O save me at the Cross!<br><br>

      Verse 2<br>
      Tho' I perish I will pray,<br>
      I will pray, I will pray;<br>
      Thou of life the Living Way:<br>
      O save me at the Cross!<br>
      Thou hast said Thy grace is free,<br>
      Grace is free, grace is free:<br>
      Have compassion, Lord on me:<br>
      O save me at the Cross!<br><br>

      Chorus<br>
      Lord Jesus, receive me,<br>
      No more would I grieve Thee,<br>
      Now, blessed Redeemer,<br>
      O save me at the Cross!<br><br>

      Verse 3<br>
      Wash me in Thy cleansing blood,<br>
      Cleansing blood, cleansing blood;<br>
      Plunge me now beneath the flood:<br>
      O save me at the Cross!<br>
      Only faith will pardon bring,<br>
      Pardon bring, pardon bring:<br>
      In that faith to Thee I cling:<br>
      O save me at the Cross!<br><br>

      Chorus<br>
      Lord Jesus, receive me,<br>
      No more would I grieve Thee,<br>
      Now, blessed Redeemer,<br>
      O save me at the Cross!<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A heartfelt plea of repentance and faith, this hymn expresses a sinner’s cry for mercy, pointing to Christ's sacrifice at the cross as the only hope of salvation.",
    yo: "",
    fr: ""
  }
},
138: {
  title: {
    en: "Pass Me Not, O Gentle Savior",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Pass me not, O gentle Savior,<br>
      Hear my humble cry;<br>
      While on others Thou art calling,<br>
      Do not pass me by.<br><br>

      Refrain:<br>
      Savior, Savior, hear my humble cry;<br>
      While on others Thou art calling,<br>
      Do not pass me by.<br><br>

      2. Let me at a throne of mercy<br>
      Find a sweet relief;<br>
      Kneeling there in deep contrition;<br>
      Help my unbelief.<br>
      [Refrain]<br><br>

      3. Trusting only in Thy merit,<br>
      Would I seek Thy face;<br>
      Heal my wounded, broken spirit,<br>
      Save me by Thy grace.<br>
      [Refrain]<br><br>

      4. Thou, the Spring of all my comfort,<br>
      More than life to me;<br>
      Whom have I on earth beside Thee?<br>
      Whom in Heav’n but Thee?<br>
      [Refrain]<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A moving plea for the Savior's attention and mercy, this hymn echoes the deep longing of the soul not to be forgotten in the day of grace.",
    yo: "",
    fr: ""
  }
},
139: {
  title: {
    en: "And Dost Thou Say, Ask What Thou Wilt",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. And dost Thou say, Ask what thou wilt?<br>
      Lord, I would seize the golden hour:<br>
      I pray to be released from guilt,<br>
      And freed from sin and Satan's power.<br><br>

      2. More of Thy presence, Lord, impart,<br>
      More of Thine image let me bear;<br>
      Erect Thy throne within my heart,<br>
      And reign without a rival there.<br><br>

      3. Give me to read my pardon sealed,<br>
      And from Thy joy to draw my strength,<br>
      To have Thy boundless love revealed,<br>
      Its height, and depth, its breadth, and length.<br><br>

      4. Grant these requests, I ask no more,<br>
      But to Thy care the rest resign;<br>
      Living or dying, rich or poor,<br>
      All shall be well if Thou art mine.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A prayerful hymn embracing God's promise to hear our petitions, expressing a deep desire for forgiveness, divine presence, and complete surrender.",
    yo: "",
    fr: ""
  }
},
140: {
  title: {
    en: "When at Thy Footstool, Lord, I Bend",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. When at Thy footstool, Lord, I bend,<br>
      And plead with Thee for mercy there,<br>
      Think of the sinner's dying Friend,<br>
      And for His sake receive my prayer.<br><br>

      2. Oh, think not of my shame and guilt,<br>
      My thousand stains of deepest dye!<br>
      Think of the blood which Jesus spilt,<br>
      And let that blood my pardon buy.<br><br>

      3. Think, Lord, how I am still Thine own,<br>
      The trembling creature of Thy hand;<br>
      Think how my heart to sin is prone,<br>
      And what temptations round me stand.<br><br>

      4. Oh, think upon Thy holy Word,<br>
      And every plighted promise there!<br>
      How prayer should evermore be heard,<br>
      And how Thy glory is to spare.<br><br>

      5. Oh, think not of my doubts and fears,<br>
      My strivings with Thy grace divine;<br>
      Think upon Jesus' woes and tears,<br>
      And let His merits stand for mine.<br><br>

      6. Thine eye, Thine ear, they are not dull;<br>
      Thine arm can never shortened be;<br>
      Behold me here; my heart is full;<br>
      Behold, and spare, and succor me.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "This hymn is a humble prayer for mercy, leaning solely on the merits of Christ. It acknowledges guilt, seeks grace, and expresses trust in God's promises.",
    yo: "",
    fr: ""
  }
},
141: {
  title: {
    en: "Approach, My Soul, the Mercy-Seat",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Approach, my soul, the mercy seat<br>
      Where Jesus answers pray'r;<br>
      There humbly fall before His feet,<br>
      For none can perish there.<br><br>

      2. My only plea, Your promise true;<br>
      With this I venture nigh;<br>
      You beckon burdened souls to You,<br>
      And such, O Lord, am I.<br><br>

      3. Bowed down beneath a load of sin,<br>
      By Satan sorely pressed;<br>
      By war without and fears within,<br>
      I come to You for rest.<br><br>

      4. Thus be my shield and hiding place!<br>
      That sheltered near Your side,<br>
      I may my fierce accuser face,<br>
      And say the Lamb has died.<br><br>

      5. Oh, wondrous love! To bleed and die,<br>
      To bear the cross and shame,<br>
      That guilty sinners, such as I,<br>
      Might plead Your gracious name.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A heartfelt invitation to approach God's mercy with confidence in Christ's atonement. It expresses trust in His promises and hope for peace in the midst of sin and fear.",
    yo: "",
    fr: ""
  }
},
142: {
  title: {
    en: "O Thou, from Whom All Goodness Flows",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. O Thou, from whom all goodness flows,<br>
      I lift my soul to Thee;<br>
      In all my sorrows, conflicts, woes,<br>
      Good Lord, remember me.<br><br>

      2. When on my aching, burdened heart<br>
      My sins lie heavily,<br>
      Thy pardon grant, new peace impart:<br>
      Good Lord, remember me.<br><br>

      3. When trials sore obstruct my way,<br>
      And ills I cannot flee,<br>
      O let my strength be as my day:<br>
      Good Lord, remember me.<br><br>

      4. If, for Thy sake, upon my name<br>
      Shame and reproach shall be,<br>
      All hail reproach, and welcome shame!<br>
      Good Lord, remember me.<br><br>

      5. When, in the solemn hour of death,<br>
      I wait Thy just decree,<br>
      Be this the pray'r of my last breath:<br>
      Good Lord, remember me.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "This prayerful hymn appeals for God’s remembrance in every season of life—sorrow, trial, shame, and death—trusting in His mercy and sustaining grace.",
    yo: "",
    fr: ""
  }
},
143: {
  title: {
    en: "I Am Coming to the Cross",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. I am coming to the cross;<br>
      I am poor, and weak, and blind;<br>
      I am counting all but dross;<br>
      I shall full salvation find.<br><br>

      I am trusting, Lord, in Thee,<br>
      Blessed Lamb of Calvary;<br>
      Humbly at Thy cross I bow,<br>
      Save me, Jesus, save me now.<br><br>

      2. Long my heart has sighed for Thee;<br>
      Long has evil dwelt within;<br>
      Jesus sweetly speaks to me,<br>
      “I will cleanse you from all sin.”<br><br>

      3. Here I give my all to Thee—<br>
      Friends and time and earthly store,<br>
      Soul and body Thine to be—<br>
      Wholly Thine forevermore.<br><br>

      4. In the promises I trust;<br>
      Now I feel the blood applied;<br>
      I am prostrate in the dust;<br>
      I with Christ am crucified.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A humble and earnest hymn of surrender and salvation, expressing trust in Christ’s cleansing power at the cross.",
    yo: "",
    fr: ""
  }
},
144: {
  title: {
    en: "O Lord, Turn Not Thy Face from Me",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. O Lord, turn not Thy face from me,<br>
      Who lie in woeful state,<br>
      Lamenting all my sinful life<br>
      Before Thy mercy-gate.<br><br>

      2. A gate which opens wide to those<br>
      That do lament their sin;<br>
      Shut not that gate against me, Lord,<br>
      But let me enter in.<br><br>

      3. And call me not to strict account<br>
      How I have sojourned here;<br>
      For then my guilty conscience knows<br>
      How vile I shall appear.<br><br>

      4. Mercy, good Lord, mercy I ask;<br>
      This is my humble prayer;<br>
      For mercy, Lord, is all my suit:<br>
      O let Thy mercy spare.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "This penitential hymn is a heartfelt plea for divine mercy and forgiveness, emphasizing God’s open gate of grace for repentant souls.",
    yo: "",
    fr: ""
  }
},
145: {
  title: {
    en: "Lord Jesus, Think on Me",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Lord Jesus, think on me<br>
      And purge away my sin;<br>
      From earthborn passions set me free<br>
      And make me pure within.<br><br>

      2. Lord Jesus, think on me,<br>
      With many a care oppressed;<br>
      Let me Thy loving servant be<br>
      And taste Thy promised rest.<br><br>

      3. Lord Jesus, think on me<br>
      Nor let me go astray;<br>
      Through darkness and perplexity<br>
      Point Thou the heavenly way.<br><br>

      4. Lord Jesus, think on me<br>
      That, when the flood is past,<br>
      I may th’eternal brightness see<br>
      And share Thy joy at last.<br><br>

      5. Lord Jesus, think on me<br>
      That I may sing above<br>
      To Father, Spirit, and to Thee<br>
      The strains of praise and love.<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A meditative hymn seeking Christ’s continual guidance, cleansing, and eternal joy, ending with a longing to join in heavenly praise.",
    yo: "",
    fr: ""
  }
},
146: {
  title: {
    en: "Yet There Is Room",
    yo: "", // Yoruba title if available
    fr: ""  // French title if available
  },
  lyrics: {
    en: `
      1. "Yet there is room!" The Lamb's bright hall of song,<br>
      With its fair glory, beckons thee along;<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      2. Day is declining, and the sun is low;<br>
      The shadows lengthen, light makes haste to go:<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      3. The bridal hall is filling for the feast;<br>
      Pass in, pass in, and be the Bridegroom's guest;<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      4. It fills, it fills, that hall of jubilee!<br>
      Make haste, make haste; 'tis not too full for thee;<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      5. Yet there is room! Still open stands the gate,<br>
      The gate of love; it is not yet too late:<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      6. Pass in, pass in, that banquet is for thee;<br>
      That cup of everlasting joy is free;<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      7. All heaven is there, all joy! Go in, go in;<br>
      The angels beckon thee the prize to win;<br>
      Room, room, still room! Oh, enter, enter now!<br><br>

      8. Ere night that gate may close, and seal thy doom,<br>
      Then the last, low, long cry: "No room, no room!"<br>
      No room, no room:--Oh, woeful cry, "No room."<br><br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "An urgent gospel invitation calling all to enter the banquet of salvation while there’s still time—before the gate closes forever.",
    yo: "",
    fr: ""
  }
},
147: {
  title: {
    en: "Jesus, Keep Me Near the Cross",
    yo: "", // Yoruba title if available
    fr: ""  // French title if available
  },
  lyrics: {
    en: `
      1. Jesus, keep me near the cross,<br>
      There a precious fountain;<br>
      Free to all, a healing stream,<br>
      Flows from Calv'ry's mountain.<br><br>

      <b>Refrain:</b><br>
      In the cross, in the cross<br>
      Be my glory ever,<br>
      Till my ransomed soul shall find<br>
      Rest beyond the river.<br><br>

      2. Near the cross, a trembling soul,<br>
      Love and mercy found me;<br>
      There the Bright and Morning Star<br>
      Shed His beams around me.<br>
      [Refrain]<br><br>

      3. Near the cross! O Lamb of God,<br>
      Bring its scenes before me;<br>
      Help me walk from day to day<br>
      With its shadow o'er me.<br>
      [Refrain]<br><br>

      4. Near the cross! I'll watch and wait,<br>
      Hoping, trusting ever;<br>
      Till I reach the golden strand,<br>
      Just beyond the river.<br>
      [Refrain]
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A heartfelt plea to remain close to the power and promise of the cross, trusting Christ’s sacrifice for peace, strength, and eternal rest.",
    yo: "",
    fr: ""
  }
},
148: {
  title: {
    en: "Christ Redeemer Died on the Cross",
    yo: "", // Yoruba title if available
    fr: ""  // French title if available
  },
  lyrics: {
    en: `
      1. Christ our Redeemer died on the cross,<br>
      Died for the sinner, paid all his due;<br>
      Sprinkle your soul with the blood of the Lamb,<br>
      “And I will pass, will pass over you.”<br><br>

      <b>Chorus:</b><br>
      When I see the blood,<br>
      When I see the blood,<br>
      When I see the blood,<br>
      I will pass, I will pass over you.<br><br>

      2. Chiefest of sinners, Jesus will save;<br>
      All He has promised, that will He do;<br>
      Wash in the fountain opened for sin,<br>
      “And I will pass, will pass over you.”<br><br>

      3. Judgment is coming, all will be there,<br>
      Each one receiving justly his due;<br>
      Hide in the saving, sin-cleansing blood,<br>
      “And I will pass, will pass over you.”<br><br>

      4. O great compassion! O boundless love!<br>
      O loving kindness, faithful and true!<br>
      Find peace and shelter under the blood,<br>
      “And I will pass, will pass over you.”<br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A powerful gospel hymn emphasizing salvation through the blood of Jesus, echoing the Passover theme of protection by faith.",
    yo: "",
    fr: ""
  }
},
149: {
  title: {
    en: "Oh Our Forgiving Father Forgive Us",
    yo: "", // Yoruba translation if applicable
    fr: ""  // French translation if applicable
  },
  lyrics: {
    en: `
      1. All creatures of our God and King,<br>
      Lift up your voice and with us sing<br>
      Alleluia, alleluia!<br>
      Thou burning sun with golden beam,<br>
      Thou silver moon with softer gleam,<br>
      O praise him, O praise him,<br>
      Alleluia, alleluia, alleluia.<br><br>

      2. Thou rushing winds that art so strong,<br>
      Ye clouds that sail in Heav'n along,<br>
      O praise him, alleluia!<br>
      Thou rising morn, in praise rejoice,<br>
      Ye lights of evening, find a voice.<br>
      O praise him, O praise him,<br>
      Alleluia, alleluia, alleluia.<br><br>

      3. And all ye saints of tender heart,<br>
      Forgiving others, take your part,<br>
      O sing ye, alleluia!<br>
      Ye who long pain and sorrow bear,<br>
      Praise God and on him cast your care:<br>
      O praise him, O praise him,<br>
      Alleluia, alleluia, alleluia.<br><br>

      4. Let all things their creator bless,<br>
      And worship him in humbleness,<br>
      O praise him, alleluia!<br>
      Praise, praise the Father, praise the Son,<br>
      And praise the Spirit, Three in One:<br>
      O praise him, O praise him,<br>
      Alleluia, alleluia, alleluia.<br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A hymn of universal praise, calling all creation and all believers to glorify the Trinity in joy and humility.",
    yo: "",
    fr: ""
  }
},
150: {
  title: {
    en: "Alas! And Did My Saviour Bleed",
    yo: "", // Yoruba translation if needed
    fr: ""  // French translation if needed
  },
  lyrics: {
    en: `
      1. Alas! and did my Savior bleed,<br>
      and did my Sovereign die!<br>
      Would he devote that sacred head<br>
      for sinners such as I?<br><br>

      2. Was it for crimes that I have done,<br>
      he groaned upon the tree?<br>
      Amazing pity! Grace unknown!<br>
      And love beyond degree!<br><br>

      3. Well might the sun in darkness hide,<br>
      and shut its glories in,<br>
      when God, the mighty maker, died<br>
      for his own creature's sin.<br><br>

      4. Thus might I hide my blushing face<br>
      while his dear cross appears;<br>
      dissolve my heart in thankfulness,<br>
      and melt mine eyes to tears.<br><br>

      5. But drops of tears can ne'er repay<br>
      the debt of love I owe.<br>
      Here, Lord, I give myself away;<br>
      'tis all that I can do.<br>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A heartfelt hymn reflecting on Christ's sacrificial death, stirring awe, repentance, and a response of total surrender.",
    yo: "",
    fr: ""
  }
},
151: {
  title: {
    en: "Thou Who Sparest Not Thy Son",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Less than the least of all<br>
      Thy mercies, Lord, are we;<br>
      Yet, for the greatest we may call,<br>
      The greatest are most free.<br><br>

      2. Thy Son Thou didst not spare,<br>
      Yet us Thou sparest still;<br>
      Him didst Thou send our guilt to bear,<br>
      Our righteousness fulfil.<br><br>

      3. For such amazing grace,<br>
      What can poor sinners give?<br>
      At Thy command, we seek Thy face,<br>
      We meet our Judge, and live.<br><br>

      4. The world we would forsake,<br>
      Our all to Thee resign;<br>
      O save us for Thy mercies' sake!<br>
      O save us,—we are Thine!<br><br>

      5. Meanwhile, as pilgrims here,<br>
      Who seek our home above,<br>
      Thee may we serve, with holy fear,<br>
      And love, with child-like love.<br><br>

      <i>– Sacred Poems and Hymns</i>
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A deeply reverent hymn acknowledging God's mercy, Christ's sacrifice, and our response of surrender, service, and love.",
    yo: "",
    fr: ""
  }
},
152: {
  title: {
    en: "I Gave My Life for Thee",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. “I gave my life for thee,<br>
      My precious blood I shed,<br>
      That thou might’st ransom’d be,<br>
      And quickened from the dead.<br>
      I gave, I gave my life for thee:<br>
      What hast thou given for me?<br><br>

      2. I spent long years for thee<br>
      In weariness and woe,<br>
      That an eternity<br>
      Of joy thou mightiest know.<br>
      I spent, I spent long years for thee;<br>
      Hast thou spent one for me?<br><br>

      3. My Father’s home of light,<br>
      My rainbow-circled throne,<br>
      I left, for earthly night,<br>
      For wanderings sad and lone;<br>
      I left, I left it all for thee:<br>
      Hast thou left aught for me?<br><br>

      4. I suffered much for thee,<br>
      More than thy tongue may tell,<br>
      Of bitt’rest agony,<br>
      To rescue thee from hell;<br>
      I’ve borne, I’ve borne it all for thee:<br>
      What canst thou bear for me?<br><br>

      5. And I have brought to thee,<br>
      Down from my home above,<br>
      Salvation full and free,<br>
      My pardon and my love;<br>
      Great gifts, great gifts I brought to thee;<br>
      What hast thou brought to me?<br><br>

      6. O, let thy life be given,<br>
      Thy years for Him be spent,<br>
      World fetters all be riv’n,<br>
      And joy with suff’ring blent;<br>
      I gave, I gave myself for thee:<br>
      Give thou thyself to me!
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A personal and moving hymn where Christ speaks of His sacrifice, calling for a heartfelt and surrendered response from the believer.",
    yo: "",
    fr: ""
  }
},
153: {
  title: {
    en: "Uncreated Fount of Light",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Uncreated Fount of light,<br>
      Glory without shade of night,<br>
      Everlasting, infinite<br>
      Holy Father, hear us.<br><br>

      2. Well of life that ever flows,<br>
      Life more pure than stainless snows,<br>
      Life in calm serene repose,<br>
      Holy Father, hear us.<br><br>

      3. Blessed One, whose name is love,<br>
      Pleads with Thee Thy Son above;<br>
      Broods o’er Thy hovering Dove;<br>
      Holy Father, hear us.<br><br>

      4. Round about Thy sapphire throne,<br>
      Shines the rainbow’s emerald zone,<br>
      Breathing heavenly peace alone;<br>
      Holy Father, hear us.<br><br>

      5. There before Thy mercy-seat<br>
      Saints in light and angels meet;<br>
      Yet behold us at Thy feet;<br>
      Holy Father, hear us.<br><br>

      6. Thou, whose deep compassions yearn<br>
      For the prodigal’s return,<br>
      And his far-off steps discern,<br>
      Holy Father, hear us.<br><br>

      7. Aching hearts that long for rest,<br>
      Wilder’d souls by doubt oppress’d,<br>
      Babes that crave a parent’s breast,<br>
      Holy Father, hear us.<br><br>

      8. All have some great gift to seek,<br>
      Hungered, thirsty, weary, weak;<br>
      All have wants no words can speak,<br>
      Holy Father, hear us.<br><br>

      9. Is not Thy paternal board<br>
      With all royal bounties stored,<br>
      Priceless, countless, unexplored?<br>
      Holy Father, hear us.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A rich and reverent hymn of prayer, praising God's majesty and mercy while lifting up the deep needs and cries of humanity.",
    yo: "",
    fr: ""
  }
},
154: {
  title: {
    en: "Have You Heard the Story of the Cross",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Have you heard the story of the cross,<br>
      Where Jesus bled and died,<br>
      When your debt was paid by His precious blood<br>
      That gushed from His wounded side.<br><br>

      <b>Refrain:</b><br>
      He died of a broken heart for thee,<br>
      He died of a broken heart;<br>
      O wondrous love! it was for thee,<br>
      He died of a broken heart.<br><br>

      2. Have you heard how they placed the crown of thorns<br>
      Upon His lovely brow,<br>
      When He prayed, “Forgive them, O forgive,<br>
      They know not what they do?”<br>
      [Refrain]<br><br>

      3. Have you heard that He saved the dying thief,<br>
      When hanging on the tree,<br>
      Who looked with pitying eyes and said,<br>
      “Dear Lord, remember me?”<br>
      [Refrain]<br><br>

      4. Have you heard that He looked to heav’n and said,<br>
      “’Tis finished”—all for thee?<br>
      Have you ever said, “I thank Thee, Lord,<br>
      For giving Thy life for me?”<br>
      [Refrain]
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A reflective and touching hymn recounting the story of Christ’s crucifixion and calling for a personal response of gratitude and faith.",
    yo: "",
    fr: ""
  }
},
155: {
  title: {
    en: "Glory to Jesus",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Glory be to Jesus,<br>
      Who in bitter pains<br>
      Poured for me the life-blood<br>
      From His sacred veins.<br><br>

      2. Grace and life eternal<br>
      In that Blood I find;<br>
      Blest be His compassion,<br>
      Infinitely kind.<br><br>

      3. Blest through endless ages<br>
      Be the precious stream,<br>
      Which from endless torments<br>
      Did the world redeem.<br><br>

      4. Abel’s blood for vengeance<br>
      Pleaded to the skies;<br>
      But the blood of Jesus<br>
      For our pardon cries.<br><br>

      5. It the conscience sprinkles,<br>
      Frees our guilty hearts;<br>
      Satan in confusion<br>
      Terror-struck departs.<br><br>

      6. Oft as earth exulting<br>
      Wafts its praise on high,<br>
      Angel-hosts rejoicing<br>
      Make their glad reply.<br><br>

      7. Lift ye then your voices;<br>
      Swell the mighty flood;<br>
      Louder still and louder<br>
      Praise the precious blood.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A triumphant hymn glorifying the redeeming blood of Jesus, celebrating His sacrifice and the eternal blessings it brings.",
    yo: "",
    fr: ""
  }
},
156: {
  title: {
    en: "When I Survey the Wondrous Cross",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. When I survey the wondrous cross<br>
      On which the Prince of glory died,<br>
      My richest gain I count but loss,<br>
      And pour contempt on all my pride.<br><br>

      2. Forbid it, Lord, that I should boast<br>
      Save in the death of Christ, my God!<br>
      All the vain things that charm me most,<br>
      I sacrifice them through His blood.<br><br>

      3. See, from His head, His hands, His feet,<br>
      Sorrow and love flow mingled down.<br>
      Did e'er such love and sorrow meet,<br>
      Or thorns compose so rich a crown?<br><br>

      4. Were the whole realm of nature mine,<br>
      That were a present far too small.<br>
      Love so amazing, so divine,<br>
      Demands my soul, my life, my all.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A deeply moving hymn that reflects on the sacrifice of Christ, calling believers to surrender all in response to His amazing love.",
    yo: "",
    fr: ""
  }
},
157: {
  title: {
    en: "Oh Perfect Life of Love",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. O perfect life of love!<br>
      All, all, is finished now,<br>
      All that He left His throne above<br>
      To do for us below.<br><br>

      2. No work is left undone<br>
      Of all the Father willed;<br>
      His toil, His sorrows, one by one,<br>
      The Scriptures have fulfilled.<br><br>

      3. No pain that we can share<br>
      But He has felt its smart;<br>
      All forms of human grief and care<br>
      Have pierced that tender heart.<br><br>

      4. And on His thorn-crowned head<br>
      And on His sinless soul<br>
      Our sins in all their guilt were laid<br>
      That He might make us whole.<br><br>

      5. In perfect love He dies;<br>
      For me He dies, for me!<br>
      O all-atoning Sacrifice,<br>
      You died to make me free!<br><br>

      6. In ev'ry time of need,<br>
      Before the judgment throne,<br>
      Your works, O Lamb of God, I'll plead,<br>
      Your merits, not my own.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A reverent hymn honoring the completed work of Christ, emphasizing His suffering, love, and the believer’s dependence on His righteousness.",
    yo: "",
    fr: ""
  }
},
159: {
  title: {
    en: "I Have a Precious Saviour",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. I have a precious Saviour,<br>
      He came from Heav'n above<br>
      And died for me on Calvary,<br>
      To prove His matchless love.<br>
      This love so freely given,<br>
      He offers now to you;<br>
      Won't you let my Saviour be your Saviour too?<br><br>

      <b>Chorus:</b><br>
      Won't you let Him be your Saviour too?<br>
      He would prove a faithful friend to you,<br>
      He would purify your soul,<br>
      Keep you ever pure and whole,<br>
      Won't you let my Saviour be your Saviour too?<br><br>

      2. I have a loving Saviour,<br>
      He hears me when I call;<br>
      He helps to bear each load of care,<br>
      And lifts me when I fall;<br>
      So kind is He, so tender,<br>
      Compassionate and true,<br>
      Won't you let my Saviour be your Saviour too?<br><br>

      <b>Chorus</b><br>
      Won't you let Him be your Saviour too?<br>
      He would prove a faithful friend to you,<br>
      He would purify your soul,<br>
      Keep you ever pure and whole,<br>
      Won't you let my Saviour be your Saviour too?<br><br>

      3. I have a faithful Saviour,<br>
      With me He will abide;<br>
      And hold my hand until I land<br>
      Upon the other side.<br>
      Someday in all His glory,<br>
      My Saviour I shall view.<br>
      Brother, won't you let Him be your Saviour too?<br><br>

      <b>Chorus</b><br>
      Won't you let Him be your Saviour too?<br>
      He would prove a faithful friend to you,<br>
      He would purify your soul,<br>
      Keep you ever pure and whole,<br>
      Won't you let my Saviour be your Saviour too?
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A personal and evangelistic hymn that shares the blessings of knowing Christ, and lovingly invites others to receive Him as Saviour too.",
    yo: "",
    fr: ""
  }
},
160: {
  title: {
    en: "I Have Been to the Fountain of Cleansing",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. I have been to the fountain of cleansing,<br>
      And plung'd 'neath the life-giving flow,<br>
      'Tis the blood shed on Calvary's mountain,<br>
      That makes the soul the whiter than snow.<br><br>

      <b>Chorus:</b><br>
      O yes, it makes whiter than snow,<br>
      The blood cleanses me, this I know,<br>
      Since it cleans'd me from sin,<br>
      He's been living within,<br>
      His blood cleanses whiter than snow.<br><br>

      2. I have been to the fountain of cleansing,<br>
      Found peace in the Crucified One,<br>
      All my sins by His grace have been cancelled,<br>
      And heav’n in my soul is begun.<br><br>

      <b>Chorus</b><br>
      O yes, it makes whiter than snow,<br>
      The blood cleanses me, this I know,<br>
      Since it cleans'd me from sin,<br>
      He's been living within,<br>
      His blood cleanses whiter than snow.<br><br>

      3. I have been to the fountain of cleansing,<br>
      And glory is flooding my soul,<br>
      Hallelujah! my heart is rejoicing,<br>
      His blood makes me ev’ry whit whole.<br><br>

      <b>Chorus</b><br>
      O yes, it makes whiter than snow,<br>
      The blood cleanses me, this I know,<br>
      Since it cleans'd me from sin,<br>
      He's been living within,<br>
      His blood cleanses whiter than snow.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A joyful testimony hymn about the cleansing power of Jesus’ blood, bringing peace, forgiveness, and inner rejoicing to the believer.",
    yo: "",
    fr: ""
  }
},
161: {
  title: {
    en: "Ride on, Ride on in Majesty",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Ride on, ride on in majesty!<br>
      Hear all the tribes hosanna cry;<br>
      O Savior meek, pursue Your road<br>
      with palms and scattered garments strowed.<br><br>

      2. Ride on, ride on in majesty!<br>
      In lowly pomp ride on to die.<br>
      O Christ, Your triumphs now begin<br>
      o’er captive death and conquered sin.<br><br>

      3. Ride on, ride on in majesty!<br>
      The host of angels in the sky<br>
      look down with sad and wond'ring eyes<br>
      to see th'approaching Sacrifice.<br><br>

      4. Ride on, ride on in majesty!<br>
      Your last and fiercest strife is nigh.<br>
      The Father on His sapphire throne<br>
      awaits His own anointed Son.<br><br>

      5. Ride on, ride on in majesty!<br>
      In lowly pomp ride on to die,<br>
      bow Your meek head to mortal pain,<br>
      then take, O Christ, Your pow'r and reign.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A powerful Palm Sunday hymn portraying Jesus' humble but triumphant entry into Jerusalem, leading to His sacrificial death and ultimate reign.",
    yo: "",
    fr: ""
  }
},
162: {
  title: {
    en: "All Glory, Laud and Honour",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. All glory, laud, and honor<br>
      to you, Redeemer, King,<br>
      to whom the lips of children<br>
      made sweet hosannas ring.<br>
      You are the King of Israel<br>
      and David's royal Son,<br>
      now in the Lord's name coming,<br>
      the King and Blessed One.<br><br>

      2. The company of angels<br>
      is praising you on high;<br>
      and we with all creation<br>
      in chorus make reply.<br>
      The people of the Hebrews<br>
      with palms before you went;<br>
      our praise and prayer and anthems<br>
      before you we present.<br><br>

      3. To you before your passion<br>
      they sang their hymns of praise;<br>
      to you, now high exalted,<br>
      our melody we raise.<br>
      As you received their praises,<br>
      accept the prayers we bring,<br>
      for you delight in goodness,<br>
      O good and gracious King!
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A traditional hymn of praise honoring Christ as King, echoing the praises of children and saints during His triumphal entry into Jerusalem.",
    yo: "",
    fr: ""
  }
},
163: {
  title: {
    en: "Listen to Hymns of Deliv'erance",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. To God be the glory, great things He hath done,<br>
      So loved He the world that He gave us His Son,<br>
      Who yielded His life our redemption to win,<br>
      And opened the life-gate that all may go in.<br><br>

      <b>Chorus:</b><br>
      Praise the Lord, praise the Lord,<br>
      Let the earth hear His voice;<br>
      Praise the Lord, praise the Lord,<br>
      Let the people rejoice;<br>
      Oh, come to the Father, through Jesus the Son,<br>
      And give Him the glory; great things He hath done.<br><br>

      2. Oh, perfect redemption, the purchase of blood,<br>
      To every believer the promise of God;<br>
      The vilest offender who truly believes,<br>
      That moment from Jesus a pardon receives.<br><br>

      <b>Chorus</b><br>
      Praise the Lord, praise the Lord,<br>
      Let the earth hear His voice;<br>
      Praise the Lord, praise the Lord,<br>
      Let the people rejoice;<br>
      Oh, come to the Father, through Jesus the Son,<br>
      And give Him the glory; great things He hath done.<br><br>

      3. Great things He hath taught us, great things He hath done,<br>
      And great our rejoicing through Jesus the Son;<br>
      But purer, and higher, and greater will be<br>
      Our wonder, our transport when Jesus we see.<br><br>

      <b>Chorus</b><br>
      Praise the Lord, praise the Lord,<br>
      Let the earth hear His voice;<br>
      Praise the Lord, praise the Lord,<br>
      Let the people rejoice;<br>
      Oh, come to the Father, through Jesus the Son,<br>
      And give Him the glory; great things He hath done.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A triumphant hymn of praise celebrating God's love, redemption through Jesus, and the joy of salvation.",
    yo: "",
    fr: ""
  }
},
164: {
  title: {
    en: "Welcome, Happy Morning! Age to Age Shall Say",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. "Welcome, happy morning!"<br>
      age to age shall say:<br>
      "Hell today is vanquished;<br>
      heav'n is won today!"<br>
      Lo, the dead is living,<br>
      God forevermore!<br>
      Him, their true Creator,<br>
      all his works adore.<br><br>

      <b>Refrain:</b><br>
      "Welcome, happy morning!"<br>
      age to age shall say:<br>
      "Hell today is vanquished;<br>
      heav'n is won today!"<br><br>

      2. Maker and Redeemer,<br>
      life and health of all,<br>
      God from heav'n beholding<br>
      human nature's fall,<br>
      of the Father's Godhead<br>
      you, the only Son,<br>
      mankind to deliver<br>
      manhood did put on.<br><br>

      <b>Refrain</b><br>
      "Welcome, happy morning!"<br>
      age to age shall say:<br>
      "Hell today is vanquished;<br>
      heav'n is won today!"<br><br>

      3. Source of all things living,<br>
      you came down to die,<br>
      plumbed the depths of hell<br>
      to raise us up on high.<br>
      Come, then, true and faithful,<br>
      come fulfill your word;<br>
      this is our third morning—<br>
      rise, O buried Lord.<br><br>

      <b>Refrain</b><br>
      "Welcome, happy morning!"<br>
      age to age shall say:<br>
      "Hell today is vanquished;<br>
      heav'n is won today!"<br><br>

      4. Free the souls long prisoned,<br>
      bound with Satan's chain;<br>
      all that now is fallen<br>
      raise to life again.<br>
      Show your face in brightness;<br>
      shine in ev'ry land<br>
      as in Eden's garden<br>
      when the world began.<br><br>

      <b>Refrain</b><br>
      "Welcome, happy morning!"<br>
      age to age shall say:<br>
      "Hell today is vanquished;<br>
      heav'n is won today!"
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A vibrant Easter hymn celebrating the resurrection of Christ, His victory over death, and the renewal of life for all creation.",
    yo: "",
    fr: ""
  }
},
165: {
  title: {
    en: "Alleluia! Alleluia! Alleluia!",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. The strife is o'er, the battle done;<br>
      the victory of life is won;<br>
      the song of triumph has begun.<br>
      Alleluia!<br><br>

      2. The powers of death have done their worst,<br>
      but Christ their legions has dispersed.<br>
      Let shouts of holy joy outburst.<br>
      Alleluia!<br><br>

      3. The three sad days are quickly sped;<br>
      he rises glorious from the dead.<br>
      All glory to our risen Head.<br>
      Alleluia!<br><br>

      4. He closed the yawning gates of hell;<br>
      the bars from heaven's high portals fell.<br>
      Let hymns of praise his triumph tell.<br>
      Alleluia!<br><br>

      5. Lord, by the stripes which wounded thee,<br>
      from death's dread sting thy servants free,<br>
      that we may live and sing to thee.<br>
      Alleluia!
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A victorious Easter hymn rejoicing in Christ’s resurrection, His triumph over death, and the freedom He brings to believers.",
    yo: "",
    fr: ""
  }
},
166: {
  title: {
    en: "Christ the Lord is Risen Today, Hallelujah",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Christ the Lord is risen today, Alleluia!<br>
      Sons of men and angels say, Alleluia!<br>
      Raise your joys and triumphs high, Alleluia!<br>
      Sing ye heav’ns, and earth reply, Alleluia!<br><br>

      2. Love’s redeeming work is done, Alleluia!<br>
      Fought the fight, the battle won, Alleluia!<br>
      Lo! Our sun’s eclipse is o’er, Alleluia!<br>
      Lo! He sets in blood no more, Alleluia!<br><br>

      3. Vain the stone, the watch, the seal, Alleluia!<br>
      Christ has burst the gates of hell, Alleluia!<br>
      Death in vain forbids His rise, Alleluia!<br>
      Christ has opened paradise, Alleluia!<br><br>

      4. Lives again our glorious king, Alleluia!<br>
      Where, O death, is now thy sting? Alleluia!<br>
      Dying once He all doth save, Alleluia!<br>
      Where thy victory, O grave? Alleluia!<br><br>

      5. Soar we now, where Christ has led, Alleluia!<br>
      Following our exalted Head, Alleluia!<br>
      Made like Him, like Him we rise, Alleluia!<br>
      Ours the cross—the grave—the skies, Alleluia!<br><br>

      6. Hail the Lord of earth and Heaven, Alleluia!<br>
      Praise to Thee by both be given, Alleluia!<br>
      Thee we greet triumphant now, Alleluia!<br>
      Hail the resurrection Thou, Alleluia!
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A triumphant Easter anthem celebrating the resurrection of Christ, His victory over death, and the hope of eternal life for all believers.",
    yo: "",
    fr: ""
  }
},
167: {
  title: {
    en: "Jesus Lives; Thy Terrors Now",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Jesus lives! thy terrors now<br>
      Can, O Death, no more appall us;<br>
      Jesus lives! by this we know<br>
      Thou, O Grave, canst not enthrall us.<br>
      Hallelujah!<br><br>

      2. Jesus lives! henceforth is death<br>
      But the gate of Life immortal;<br>
      This shall calm our trembling breath,<br>
      When we pass its gloomy portal.<br>
      Hallelujah!<br><br>

      3. Jesus lives! for us He died;<br>
      Then alone to Jesus living,<br>
      Pure in heart may we abide,<br>
      Glory to our Savior giving.<br>
      Hallelujah!<br><br>

      4. Jesus lives! our hearts know well<br>
      Naught from us His love shall sever;<br>
      Life, nor death, nor powers of hell<br>
      Tear us from His keeping ever.<br>
      Hallelujah!<br><br>

      5. Jesus lives! to Him the Throne<br>
      Over all the world is given;<br>
      We, in spirit with Him one,<br>
      Rest and reign with Him in heaven.<br>
      Hallelujah!
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A comforting resurrection hymn declaring Christ’s victory over death and the believer’s assurance of eternal life with Him.",
    yo: "",
    fr: ""
  }
},
168: {
  title: {
    en: "On the Resurrection Morning",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. On the resurrection morning<br>
      Soul and body meet again;<br>
      No more sorrow, no more weeping,<br>
      No more pain.<br><br>

      2. Here awhile they must be parted,<br>
      And the flesh its sabbath keep,<br>
      Waiting in a holy stillness,<br>
      Wrapt in sleep.<br><br>

      3. For a space that tired body<br>
      Lies with feet toward the dawn;<br>
      Till there breaks the last and brightest<br>
      Easter morn.<br><br>

      4. But the soul in contemplation<br>
      Utters earnest prayers and strong;<br>
      Breaking at the resurrection<br>
      Into song.<br><br>

      5. Soul and body reunited,<br>
      Thenceforth nothing will divide,<br>
      Waking up in Christ's own likeness,<br>
      Satisfied.<br><br>

      6. Oh, the beauty, oh, the gladness<br>
      Of that resurrection-day!<br>
      Which shall not through endless ages,<br>
      Pass away!<br><br>

      7. On that happy Easter morning<br>
      All the graves their dead restore,<br>
      Father, sister, child and mother,<br>
      Meet once more.<br><br>

      8. To that brightest of all meetings,<br>
      Bring us, Jesus Christ, at last;<br>
      To Thy cross, through death and judgment,<br>
      Holding fast.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A deeply hopeful hymn reflecting on the reunion of soul and body, the joy of resurrection, and the eternal morning in Christ’s presence.",
    yo: "",
    fr: ""
  }
},
169: {
  title: {
    en: "Jesus, Stand Among Us",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Jesus, stand among us<br>
      in your risen power;<br>
      let this time of worship<br>
      be a hallowed hour.<br><br>

      2. Breathe the Holy Spirit<br>
      into every heart;<br>
      bid the fears and sorrows<br>
      from each soul depart.<br><br>

      3. Thus with quickened footsteps<br>
      we'll pursue our way,<br>
      watching for the dawning<br>
      of the eternal day.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A simple and reverent prayer hymn inviting Christ’s presence into worship, seeking peace, renewal, and focus on eternity.",
    yo: "",
    fr: ""
  }
},

170: {
  title: {
    en: "I Know That My Redeemer Lives",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. I know that my Redeemer lives;<br>
      what comfort this sweet sentence gives!<br>
      He lives, He lives, who once was dead;<br>
      He lives, my everlasting Head.<br><br>

      2. He lives triumphant from the grave,<br>
      He lives eternally to save,<br>
      He lives all-glorious in the sky,<br>
      He lives exalted there on high.<br><br>

      3. He lives to bless me with His love,<br>
      He lives to plead for me above,<br>
      He lives my hungry soul to feed,<br>
      He lives to help in time of need.<br><br>

      4. He lives to grant me rich supply,<br>
      He lives to guide me with His eye,<br>
      He lives to comfort me when faint,<br>
      He lives to hear my soul's complaint.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A deeply personal resurrection hymn declaring the living presence of Christ and His ongoing care, guidance, and love for the believer.",
    yo: "",
    fr: ""
  }
},
171: {
  title: {
    en: "Pleasant Are Thy Courts Above",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1. Pleasant are Thy courts above<br>
      In the land of light and love;<br>
      Pleasant are Thy courts below<br>
      In this land of sin and woe.<br>
      O my spirit longs and faints<br>
      For the converse of Thy saints,<br>
      For the brightness of Thy face,<br>
      For Thy fullness, God of grace.<br><br>

      2. Happy birds that sing and fly<br>
      Round Thy altars, O Most High;<br>
      Happier souls that find a rest<br>
      In a heavenly Father's breast!<br>
      Like the wandering dove that found<br>
      No repose on earth around,<br>
      They can to their ark repair<br>
      And enjoy it ever there.<br><br>

      3. Happy souls, their praises flow<br>
      Even in this vale of woe;<br>
      Waters in the desert rise,<br>
      Manna feeds them from the skies;<br>
      On they go from strength to strength<br>
      Till they reach Thy throne at length,<br>
      At Thy feet adoring fall,<br>
      Who hast led them safe through all.<br><br>

      4. Lord, be mine this prize to win;<br>
      Guide me through a world of sin,<br>
      Keep me by Thy saving grace,<br>
      Give me at Thy side a place.<br>
      Sun and shield alike Thou art;<br>
      Guide and guard my erring heart.<br>
      Grace and glory flow from Thee;<br>
      Shower, O shower them, Lord, on me.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A heartfelt meditation on the joy of worshiping in God's presence, both in this life and the life to come, full of longing and spiritual hope.",
    yo: "",
    fr: ""
  }
},
172: {
  title: {
    en: "Jerusalem My Happy Home",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Jerusalem, my happy home!<br>
      Name ever dear to me;<br>
      When shall my labors have an end,<br>
      In joy, and peace, and thee?<br><br>

      When shall these eyes thy heaven-built walls<br>
      And pearly gates behold?<br>
      Thy bulwarks, with salvation strong,<br>
      And streets of shining gold?<br><br>

      There happier bowers than Eden’s bloom,<br>
      Nor sin nor sorrow know:<br>
      Blest seats, through rude and stormy scenes,<br>
      I onward press to you.<br><br>

      Why should I shrink at pain and woe?<br>
      Or feel at death dismay?<br>
      I’ve Canaan’s goodly land in view,<br>
      And realms of endless day.<br><br>

      Apostles, martyrs, prophets there<br>
      Around my Savior stand;<br>
      And soon my friends in Christ below<br>
      Will join the glorious band.<br><br>

      Jerusalem, my happy home!<br>
      My soul still pants for thee;<br>
      Then shall my labors have an end,<br>
      When I thy joys shall see.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A stirring hymn of eternal hope and heavenly longing, expressing the deep desire for the peace and joy of the heavenly Jerusalem.",
    yo: "",
    fr: ""
  }
},
173: {
  title: {
    en: "At the End of This Wicked Life",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      At the end of this wicked life;<br>
      Life of sorrow and vanity,<br>
      A good place there exists<br>
      There remain no changes of life<br>
      Excepting Day there is no night<br>
      Tell me wouldst thou be there?<br><br>

      Its glorious gate shuts away sins<br>
      Things filthy never attend it<br>
      To mingle its beauty<br>
      By its beautiful surroundings<br>
      We hear no more of damnations<br>
      Tell me wouldst thou be there?<br><br>

      Only the meek shall reach its ground<br>
      Who worship the Lord with reverence,<br>
      Who never mind the world<br>
      Who or by Holy Ghost guided,<br>
      Who by the narrow road walketh<br>
      They alone would be there. Amin.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A reflective hymn inviting the soul to consider eternity and pursue the narrow path that leads to the glorious, sin-free kingdom of God.",
    yo: "",
    fr: ""
  }
},
174: {
  title: {
    en: "Jerusalem on High",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Jerusalem on high, my song that city is,<br>
      My home whene’er I die, the center of my bliss;<br>
      O happy place! When shall I be,<br>
      My God, with Thee, to see Thy face?<br><br>

      There dwells my Lord, my King, judged here unfit to live;<br>
      There angels to Him sing and lowly homage give;<br>
      O happy place! When shall I be,<br>
      My God, with Thee, to see Thy face?<br><br>

      The patriarchs of old there from their travels cease;<br>
      The prophets there behold their longed for Prince of peace;<br>
      O happy place! When shall I be,<br>
      My God, with Thee, to see Thy face?<br><br>

      The Lamb’s Apostles there I might with joy behold,<br>
      The harpers I might hear harping on harps of gold;<br>
      O happy place! When shall I be,<br>
      My God, with Thee, to see Thy face?<br><br>

      The bleeding martyrs, they within those courts are found,<br>
      Clothèd in pure array, their scars with glory crowned;<br>
      O happy place! When shall I be,<br>
      My God, with Thee, to see Thy face?<br><br>

      Ah me! ah me! that I in Kedar’s tent here stay;<br>
      No place like that on high; Lord thither guide my way;<br>
      O happy place! When shall I be,<br>
      My God, with Thee, to see Thy face?
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A joyful and longing hymn for the heavenly city of Jerusalem, where saints, angels, and martyrs dwell in the presence of God.",
    yo: "",
    fr: ""
  }
},
175: {
  title: {
    en: "Forever with the Lord",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Forever with the Lord!<br>
      Amen, so let it be!<br>
      Life from His death is in that word<br>
      ’Tis immortality.<br><br>

      Here in the body pent,<br>
      Absent from Him I roam,<br>
      Yet nightly pitch my moving tent<br>
      A day’s march nearer home.<br><br>

      My Father’s house on high,<br>
      Home of my soul, how near<br>
      At times to faith’s foreseeing eye<br>
      Thy golden gates appear!<br><br>

      Ah! then my spirit faints<br>
      To reach the land I love,<br>
      The bright inheritance of saints,<br>
      Jerusalem above.<br><br>

      Yet clouds will intervene,<br>
      And all my prospect flies;<br>
      Like Noah’s dove, I flit between<br>
      Rough seas and stormy skies.<br><br>

      Anon the clouds depart,<br>
      The winds and waters cease,<br>
      While sweetly o’er my gladdened heart<br>
      Expands the bow of peace.<br><br>

      I hear at morn and even,<br>
      At noon and midnight hour,<br>
      The choral harmonies of Heaven<br>
      Earth’s Babel tongues overpower;<br><br>

      Then, then I feel that He,<br>
      Remembered or forgot,<br>
      The Lord, is never far from me,<br>
      Though I perceive Him not.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A reflective and hopeful hymn expressing longing for the eternal home with God, amid the trials and clouds of earthly life.",
    yo: "",
    fr: ""
  }
},
176: {
  title: {
    en: "We speak of the realms of the blest",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Verse 1<br>
      We speak of the realms of the Blest,<br>
      Of that country so bright and so fair,<br>
      And oft are its glories confessed;<br>
      But what must it be to be there?<br><br>

      Verse 2<br>
      We speak of its pathways of gold,<br>
      Of its walls decked with jewels most rare,<br>
      Its wonders and pleasures untold;<br>
      But what must it be to be there?<br><br>

      Verse 3<br>
      We speak of its freedom from sin,<br>
      From sorrow, temptation, and care,<br>
      From trials without and within;<br>
      But what must it be to be there?<br><br>

      Verse 4<br>
      We speak of its anthems of praise,<br>
      With which we can never compare<br>
      The sweetest on earth we can raise;<br>
      But what must it be to be there?<br><br>

      Verse 5<br>
      We speak of its service of love,<br>
      Of the robes which the glorified wear,<br>
      The church of the First-born above;<br>
      But what must it be to be there?<br><br>

      Verse 6<br>
      Do Thou, Lord, 'midst pleasure of woe,<br>
      Still for Heaven our spirits prepare;<br>
      And shortly we also shall know<br>
      And feel what it is to be there.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A contemplative hymn imagining the wonders of heaven, and longing to experience its joy, peace, and glory firsthand.",
    yo: "",
    fr: ""
  }
},
177: {
  title: {
    en: "In the land of fadeless day",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Verse 1<br>
      In the land of fadeless day<br>
      lies the city four-square;<br>
      it shall never pass away<br>
      and there is no night there.<br><br>

      Refrain:<br>
      God shall wipe away all tears;<br>
      there’s no death, no pain, nor fears;<br>
      and they count not time by years<br>
      for there is no night there.<br><br>

      Verse 2<br>
      All the gates of pearl are made<br>
      in the city four-square;<br>
      all the streets with gold are laid,<br>
      and there is no night there.<br>
      [Refrain]<br><br>

      Verse 3<br>
      And the gates shall never close<br>
      in the city four-square,<br>
      there life’s crystal river flows,<br>
      and there is no night there.<br>
      [Refrain]<br><br>

      Verse 4<br>
      There thy need no sunshine bright,<br>
      in that city four-square;<br>
      for the Lamb is all the light,<br>
      and there is no night there.<br>
      [Refrain]
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A comforting hymn describing the eternal peace, light, and glory of heaven, where suffering and time no longer exist.",
    yo: "",
    fr: ""
  }
},
178: {
  title: {
    en: "In this world there are burdens we must bear",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Verse 1<br>
      In this world there are burdens we must bear<br>
      And our eyes are made wet and dim with tears;<br>
      There's no grief, neither sorrow over there,<br>
      In that land where there are no days nor years<br><br>

      Chorus<br>
      In that land where there are no days nor years.<br>
      Neither sorrow nor anguish or tears;<br>
      We shall dwell there in peace and our joys ne'er shall cease<br>
      In that land where there are no days nor years<br><br>

      Verse 2<br>
      Though we toil, oft our labour seems in vain,<br>
      We have faith though no fruit our visions cheer,<br>
      But the Lord will all mystery make plain,<br>
      In that land where there are no days nor years<br><br>

      Chorus<br>
      In that land where there are no days nor years,<br>
      Neither sorrow nor anguish or tears;<br>
      We shall dwell there in peace and our joys ne'er shall cease<br>
      In that land where there are no days nor years<br><br>

      Verse 3<br>
      So we smile as we labour day by day,<br>
      And forget all our sorrows, griefs and fears,<br>
      For when all earthly things have passed away,<br>
      We shall dwell where there are no days nor years<br><br>

      Chorus<br>
      In that land where there are no days nor years,<br>
      Neither sorrow nor anguish or tears;<br>
      We shall dwell there in peace and our joys ne'er shall cease<br>
      In that land where there are no days nor years.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A hymn of hope and endurance, looking forward to a land of eternal peace where time, sorrow, and pain no longer exist.",
    yo: "",
    fr: ""
  }
},
178: {
  title: {
    en: "In this world there are burdens we must bear",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Verse 1<br>
      In this world there are burdens we must bear<br>
      And our eyes are made wet and dim with tears;<br>
      There's no grief, neither sorrow over there,<br>
      In that land where there are no days nor years<br><br>

      Chorus<br>
      In that land where there are no days nor years.<br>
      Neither sorrow nor anguish or tears;<br>
      We shall dwell there in peace and our joys ne'er shall cease<br>
      In that land where there are no days nor years<br><br>

      Verse 2<br>
      Though we toil, oft our labour seems in vain,<br>
      We have faith though no fruit our visions cheer,<br>
      But the Lord will all mystery make plain,<br>
      In that land where there are no days nor years<br><br>

      Chorus<br>
      In that land where there are no days nor years,<br>
      Neither sorrow nor anguish or tears;<br>
      We shall dwell there in peace and our joys ne'er shall cease<br>
      In that land where there are no days nor years<br><br>

      Verse 3<br>
      So we smile as we labour day by day,<br>
      And forget all our sorrows, griefs and fears,<br>
      For when all earthly things have passed away,<br>
      We shall dwell where there are no days nor years<br><br>

      Chorus<br>
      In that land where there are no days nor years,<br>
      Neither sorrow nor anguish or tears;<br>
      We shall dwell there in peace and our joys ne'er shall cease<br>
      In that land where there are no days nor years.
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A hymn of hope and endurance, looking forward to a land of eternal peace where time, sorrow, and pain no longer exist.",
    yo: "",
    fr: ""
  }
},
179: {
  title: {
    en: "A few more years shall roll",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1 A few more years shall roll,<br>
      a few more seasons come,<br>
      and we shall be with those that rest<br>
      asleep within the tomb.<br><br>

      Refrain:<br>
      Then, O my Lord, prepare<br>
      my soul for that blest day;<br>
      O wash me in your precious blood,<br>
      and take my sins away.<br><br>

      2 A few more suns shall set<br>
      o'er these dark hills of time,<br>
      and we shall be where suns are not,<br>
      a far serener clime. [Refrain]<br><br>

      3 A few more storms shall beat<br>
      on this wild, rocky shore,<br>
      and we shall be where tempests cease,<br>
      and surges swell no more. [Refrain]<br><br>

      4 A few more struggles here,<br>
      a few more partings o'er,<br>
      a few more toils, a few more tears,<br>
      and we shall weep no more. [Refrain]<br><br>

      5 'Tis but a little while<br>
      and he shall come again,<br>
      who died that we might live with him,<br>
      who lives that we might reign. [Refrain]
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A comforting hymn of perseverance, reminding believers that trials are brief and eternal rest awaits with Christ.",
    yo: "",
    fr: ""
  }
},
180: {
  title: {
    en: "Those eternal bowers man hath never trod",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Verse 1<br>
      Those eternal bowers man hath never trod,<br>
      Those unfolding flowers round the Throne of God:<br>
      Who may hope to gain them after weary fight?<br>
      Who at length attain them, clad in robes of white?<br><br>

      Verse 2<br>
      He who wakes from slumber at the SPIRIT's voice,<br>
      Daring here to number things unseen his choice;<br>
      He who casts his burden down at JESUS' Cross,<br>
      CHRIST's reproach his guerdon, all beside but loss<br><br>

      Verse 3<br>
      He who gladly barters all on earthly ground;<br>
      He who, like the Martyrs, says ''I will be crowned:''<br>
      He whose one oblation is a life of love,<br>
      Knit in GOD's salvation to the blest above<br><br>

      Verse 4<br>
      Shame upon you, legions of the Heavenly King,<br>
      Citizens of regions past imagining!<br>
      What, with pipe and tabor dream away the light,<br>
      When He calls to labour and faith's arduous fight?<br><br>

      Verse 5<br>
      JESU, LORD of Glory, as we breast the tide,<br>
      Whisper Thou the story of the other side;<br>
      Where the Saints are casting crowns before Thy Feet,<br>
      Safe for everlasting, in Thyself complete
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A hymn urging spiritual readiness and devotion, highlighting the eternal reward of those who follow Christ faithfully.",
    yo: "",
    fr: ""
  }
},
181: {
  title: {
    en: "Oh Paradise, Oh Paradise",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      1 O Paradise, O Paradise,<br>
      Who doth not crave for rest?<br>
      Who would not seek the happy land<br>
      Where they that loved are blest:<br>
      Refrain:<br>
      Where loyal hearts and true<br>
      Stand ever in the light,<br>
      All rapture, through and through,<br>
      In God's most holy sight. A-men.<br><br>

      2 O Paradise, O Paradise,<br>
      The world is growing old;<br>
      Who would not be at rest and free<br>
      Where love is never cold? [Refrain]<br><br>

      3 O Paradise, O Paradise,<br>
      We long to sin no more;<br>
      We long to be as pure on earth<br>
      As on thy spotless shore: [Refrain]<br><br>

      4 O Paradise, O Paradise,<br>
      We shall not wait for long;<br>
      E’en now the loving ear may catch<br>
      Faint fragments of thy song: [Refrain]<br><br>

      5 Lord Jesus, King of Paradise,<br>
      O keep us in thy love,<br>
      And guide us to that happy land<br>
      Of perfect rest above: [Refrain]
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A longing and hopeful hymn about the peace, love, and joy that await believers in Paradise.",
    yo: "",
    fr: ""
  }
},
182: {
  title: {
    en: "I Am a Stranger Here",
    yo: "",
    fr: ""
  },
  lyrics: {
    en: `
      Verse 1<br>
      I am a stranger here,<br>
      Heaven is my Home;<br>
      Earth is a desert drear,<br>
      Heaven is my Home;<br>
      Danger and sorrow stand<br>
      Round me on every hand;<br>
      Heaven is my Fatherland<br>
      Heaven is my Home.<br><br>

      Verse 2<br>
      What though the tempest rage,<br>
      Heaven is my Home;<br>
      Short is my pilgrimage,<br>
      Heaven is my Home;<br>
      And time's wild wintry blast<br>
      Soon will be overpassed;<br>
      I shall reach Home at last;<br>
      Heaven is my Home<br><br>

      Verse 3<br>
      There at my Saviour's side -<br>
      Heaven is my Home -<br>
      I shall be glorified,<br>
      Heaven is my Home;<br>
      There are the good and blest,<br>
      Those I love most and best;<br>
      And there I too shall rest,<br>
      Heaven is my Home<br><br>

      Verse 4<br>
      Therefore I murmur not,<br>
      Heaven is my Home,<br>
      Whate'er my earthly lot,<br>
      Heaven is my Home;<br>
      And I shall surely stand<br>
      There at my Lord's right Hand<br>
      Heaven is my Fatherland,<br>
      Heaven is my Home
    `,
    yo: "",
    fr: ""
  },
  writeUp: {
    en: "A comforting hymn affirming our heavenly citizenship and hope beyond earthly trials.",
    yo: "",
    fr: ""
  }
},

  10: {
    title: {
      en: "Now Thank We All Our God",
      yo: "Bayii a dupẹ lọwọ Ọlọrun wa",
      fr: "Maintenant, nous rendons grâce à notre Dieu"
    },
    lyrics: {
      en: `
        1. Now thank we all our God,<br>
        With hearts and hands and voices,<br>
        Who wondrous things hath done,<br>
        In whom His world rejoices;<br>
        Who from our mother’s arms<br>
        Hath blessed us on our way<br>
        With countless gifts of love,<br>
        And still is ours today.<br><br>

        2. Oh, may this bounteous God<br>
        Through all our life be near us,<br>
        With ever joyful hearts<br>
        And blessed peace to cheers us;<br>
        And keep us in His grace;<br>
        And guide us when perplexed,<br>
        And free us from all ills<br>
        In this world and the next!<br><br>

        3. All praise and thanks to God<br>
        The Father now be given,<br>
        The Son, and Holy Ghost,<br>
        Supreme in highest heaven,<br>
        The one eternal God,<br>
        Whom earth and heaven adore;<br>
        For thus it was, is now,<br>
        And shall be evermore.<br><br>

        Amen.<br>
      `,
      yo: `...`,
      fr: `...`
    },
    writeUp: {
      en: "This hymn expresses gratitude and praise to God for His blessings and care, acknowledging the eternal nature of His love and presence.",
      yo: "Hymn yi n ṣe afihan ọpẹ ati iyin fun Ọlọrun fun awọn ibukun Rẹ ati abojuto, n jẹwọ isẹlẹ ailopin ti ifẹ ati wiwa Rẹ.",
      fr: "Ce cantique exprime la gratitude et la louange à Dieu pour ses bénédictions et sa protection, reconnaissant la nature éternelle de son amour et de sa présence."
    }
  },
  11: {  // Hymn 11
    title: {
      en: "Christ the Lord is Risen Today, Alleluia!", 
      yo: "Kristi Olúwa ni o jẹyọ loni, Alleluia!",
      fr: "Le Christ, le Seigneur, est ressuscité aujourd'hui, Alléluia!"
    },
    lyrics: {
      en: `
        1
Christ the Lord is risen today, Alleluia!<br>
Earth and heaven in chorus say, Alleluia!<br>
Raise your joys and triumphs high, Alleluia!<br>
Sing, ye heavens, and earth reply, Alleluia!<br><br>

        2
Love's redeeming work is done, Alleluia!<br>
Fought the fight, the battle won, Alleluia!<br>
Death in vain forbids him rise, Alleluia!<br>
Christ has opened paradise, Alleluia!<br><br>

        3
Lives again our glorious King, Alleluia!<br>
Where, O death, is now thy sting? Alleluia!<br>
Once he died our souls to save, Alleluia!<br>
Where's thy victory, boasting grave? Alleluia!<br><br>

        4
Soar we now where Christ has led, Alleluia!<br>
Following our exalted Head, Alleluia!<br>
Made like him, like him we rise, Alleluia!<br>
Ours the cross, the grave, the skies, Alleluia!<br><br>

        5
Hail the Lord of earth and heaven, Alleluia!<br>
Praise to thee by both be given, Alleluia!<br>
Thee we greet triumphant now, Alleluia!<br>
Hail the Resurrection, thou, Alleluia!<br><br>

        6
King of glory, soul of bliss, Alleluia!<br>
Everlasting life is this, Alleluia!<br>
Thee to know, thy power to prove, Alleluia!<br>
Thus to sing, and thus to love, Alleluia!<br>
      `,
      yo: `
        1
Kristi Olúwa ni o jẹyọ loni, Alleluia!<br>
Ilẹ ati ọrun n kọrin papọ, Alleluia!<br>
Gbe ayọ ati ijẹrisi rẹ ga, Alleluia!<br>
Kọrin, ẹyin ọrun, ki ilẹ si dahun, Alleluia!<br><br>

        2
Iṣẹ ifẹ ti a ti da, Alleluia!<br>
Ija naa ti ṣẹgun, Alleluia!<br>
Ikú kọja n pa a mọ, Alleluia!<br>
Kristi ti ṣii paraíso, Alleluia!<br><br>

        3
Olúwa wa ti yipada si Ọba wa, Alleluia!<br>
Nibo ni irora rẹ, ikú? Alleluia!<br>
Ni akoko ti o ku, o gba awọn ẹmi wa, Alleluia!<br>
Nibo ni ijaya rẹ, okú ti o n ṣere? Alleluia!<br><br>

        4
A dide ni ibi ti Kristi ti lọ, Alleluia!<br>
Tẹle ori ti o ga, Alleluia!<br>
A ṣe bi i, a dide bi i, Alleluia!<br>
Ti wa ni oke, funfun ati ọrun, Alleluia!<br><br>

        5
Ka Kristi Olúwa ti ilẹ ati ọrun, Alleluia!<br>
Ẹyọ ti wa, gbogbo wa ni a fi ẹbọ, Alleluia!<br>
A ti gbà ọ si ẹnu wọn, Alleluia!<br>
Ṣe ayẹyẹ ajinde rẹ, Alleluia!<br><br>

        6
Ọba ti ogo, ẹmi ti ayọ, Alleluia!<br>
Igbesi aye ainipẹkun niyi, Alleluia!<br>
O lati mọ, agbara rẹ lati fi han, Alleluia!<br>
Bayi lati kọrin, ati lati ni ifẹ, Alleluia!<br>
      `,
      fr: `
        1
Le Christ, le Seigneur, est ressuscité aujourd'hui, Alléluia !<br>
La terre et le ciel chantent en chœur, Alléluia !<br>
Élevez vos joies et vos triomphes, Alléluia !<br>
Chantez, vous cieux, et la terre répond, Alléluia !<br><br>

        2
L'œuvre rédemptrice de l'amour est accomplie, Alléluia !<br>
Il a combattu, la bataille est gagnée, Alléluia !<br>
La mort, en vain, lui interdit de se lever, Alléluia !<br>
Le Christ a ouvert le paradis, Alléluia !<br><br>

        3
Il vit de nouveau, notre glorieux Roi, Alléluia !<br>
Où est, ô mort, ta piqûre ? Alléluia !<br>
Il est mort pour sauver nos âmes, Alléluia !<br>
Où est ta victoire, tombeau qui se vante ? Alléluia !<br><br>

        4
Nous montons maintenant là où Christ a mené, Alléluia !<br>
Suivant notre Chef exalté, Alléluia !<br>
Faits comme Lui, comme Lui nous ressuscitons, Alléluia !<br>
A nous la croix, le tombeau, les cieux, Alléluia !<br><br>

        5
Salut au Seigneur de la terre et du ciel, Alléluia !<br>
Louez-le, vous deux, Alléluia !<br>
Nous te saluons triomphant maintenant, Alléluia !<br>
Salut à la Résurrection, toi, Alléluia !<br><br>

        6
Roi de gloire, âme de bonheur, Alléluia !<br>
La vie éternelle est celle-ci, Alléluia !<br>
Te connaître, prouver ton pouvoir, Alléluia !<br>
Ainsi chanter, et ainsi aimer, Alléluia !<br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the resurrection of Christ and the victory over death, proclaiming joy and triumph for all believers.",
      yo: "Hymn yii n ṣe ayẹyẹ ajinde Kristi ati ijaya lori iku, n sọ ẹrìn-ín ati ijẹrisi fun gbogbo awọn ol 믿lú.",
      fr: "Ce cantique célèbre la résurrection du Christ et la victoire sur la mort, proclamant la joie et le triomphe pour tous les croyants.",
      eg: "Hymn yi n ṣe ayẹyẹ ajinde Kristi ati ijaya lori iku, n sọ ẹrìn-ín ati ijẹrisi fun gbogbo awọn ol 믿lú."
    }
  },
  12: {  // Hymn 12 - To God Be the Glory
    title: {
      en: "To God Be the Glory", 
      yo: "Fun Ọlọrun ni Ọlá",
      fr: "À Dieu soit la gloire"
    },
    lyrics: {
      en: `
        1
To God be the glory! Great things He hath done!<br>
So loved He the world that He gave us His Son,<br>
Who yielded His life an atonement for sin,<br>
And opened the life-gate that all may go in.<br><br>

        CHORUS:<br>
Praise the Lord! Praise the Lord!<br>
Let the earth hear His voice!<br>
Praise the Lord! Praise the Lord!<br>
Let the people rejoice!<br>
Oh, come to the Father through Jesus the Son!<br>
And give Him the glory-great things He hath done!<br><br>

        2
Oh, perfect redemption, the purchase of blood!<br>
To ev’ry believer the promise of God,<br>
The vilest offender who truly believes<br>
That moment from Jesus a pardon receives<br><br>

        CHORUS:<br>
Praise the Lord! Praise the Lord!<br>
Let the earth hear His voice!<br>
Praise the Lord! Praise the Lord!<br>
Let the people rejoice!<br>
Oh, come to the Father through Jesus the Son!<br>
And give Him the glory-great things He hath done!<br><br>

        3
Great things He hath taught us, great things He hath done,<br>
And great our rejoicing through Jesus the Son:<br>
But purer and higher and greater will be<br>
Our wonder, our transport, when Jesus we see!<br><br>

        CHORUS:<br>
Praise the Lord! Praise the Lord!<br>
Let the earth hear His voice!<br>
Praise the Lord! Praise the Lord!<br>
Let the people rejoice!<br>
Oh, come to the Father through Jesus the Son!<br>
And give Him the glory-great things He hath done!<br>
      `,
      yo: `
        1
Fun Ọlọrun ni Ọlá! Awọn ohun nla ti O ti ṣe!<br>
Bẹẹni, O nifẹ agbaye bẹ, O fi ọmọ rẹ fun wa,<br>
Tí o fi ẹmi rẹ ranṣẹ lati ṣe ẹbọ fun ẹṣẹ,<br>
O ti ṣii ilẹkun igbesi aye ti gbogbo le wọ.<br><br>

        CHORUS:<br>
Ka Oluwa! Ka Oluwa!<br>
Ki ilẹ ṣe akiyesi ohun rẹ!<br>
Ka Oluwa! Ka Oluwa!<br>
Ki gbogbo eniyan fi ayọ ṣe idunnu!<br>
Ẹyin wa si Baba nipasẹ Jesu Ọmọ!<br>
Ki a fun un ni Ọlá—awọn ohun nla ti O ti ṣe!<br><br>

        2
O, igbala pipe, rira ẹjẹ!<br>
Fun gbogbo ol 믿lú, ẹlomiran ni ileri Ọlọrun,<br>
Ẹlẹṣẹ ti o buruju ti o ba gbagbọ gaan<br>
Ni akoko yẹn, o gba ẹlẹbọ lati ọdọ Jesu.<br><br>

        CHORUS:<br>
Ka Oluwa! Ka Oluwa!<br>
Ki ilẹ ṣe akiyesi ohun rẹ!<br>
Ka Oluwa! Ka Oluwa!<br>
Ki gbogbo eniyan fi ayọ ṣe idunnu!<br>
Ẹyin wa si Baba nipasẹ Jesu Ọmọ!<br>
Ki a fun un ni Ọlá—awọn ohun nla ti O ti ṣe!<br><br>

        3
Awọn ohun nla ti O kọ wa, awọn ohun nla ti O ṣe,<br>
Ati nla ayọ wa ni Jesu Ọmọ:<br>
Ṣugbọn o mọ, o ga ju, o pọ julọ ni<br>
Iyanu wa, irin-ajo wa, nigba ti a ba ri Jesu!<br><br>

        CHORUS:<br>
Ka Oluwa! Ka Oluwa!<br>
Ki ilẹ ṣe akiyesi ohun rẹ!<br>
Ka Oluwa! Ka Oluwa!<br>
Ki gbogbo eniyan fi ayọ ṣe idunnu!<br>
Ẹyin wa si Baba nipasẹ Jesu Ọmọ!<br>
Ki a fun un ni Ọlá—awọn ohun nla ti O ti ṣe!<br>
      `,
      fr: `
        1
À Dieu soit la gloire! Il a fait de grandes choses!<br>
Il a tellement aimé le monde qu'Il nous a donné Son Fils,<br>
Qui a donné Sa vie en expiation pour le péché,<br>
Et a ouvert la porte de la vie afin que tous puissent entrer.<br><br>

        CHORUS:<br>
Louez le Seigneur! Louez le Seigneur!<br>
Que la terre entende Sa voix!<br>
Louez le Seigneur! Louez le Seigneur!<br>
Que les peuples se réjouissent!<br>
Venez au Père par Jésus le Fils!<br>
Et donnez-Lui la gloire—les grandes choses qu'Il a faites!<br><br>

        2
Oh, rédemption parfaite, l'achat du sang!<br>
À chaque croyant la promesse de Dieu,<br>
Le pécheur le plus vil qui croit sincèrement<br>
À ce moment-là, de Jésus, il reçoit un pardon.<br><br>

        CHORUS:<br>
Louez le Seigneur! Louez le Seigneur!<br>
Que la terre entende Sa voix!<br>
Louez le Seigneur! Louez le Seigneur!<br>
Que les peuples se réjouissent!<br>
Venez au Père par Jésus le Fils!<br>
Et donnez-Lui la gloire—les grandes choses qu'Il a faites!<br><br>

        3
De grandes choses Il nous a enseignées, de grandes choses Il a faites,<br>
Et grande est notre joie en Jésus le Fils:<br>
Mais plus purs et plus hauts et plus grands seront<br>
Nos merveilles, notre transport, lorsque nous verrons Jésus!<br><br>

        CHORUS:<br>
Louez le Seigneur! Louez le Seigneur!<br>
Que la terre entende Sa voix!<br>
Louez le Seigneur! Louez le Seigneur!<br>
Que les peuples se réjouissent!<br>
Venez au Père par Jésus le Fils!<br>
Et donnez-Lui la gloire—les grandes choses qu'Il a faites!<br>
      `
    },
    writeUp: {
      en: "This hymn praises God for His great works, particularly the gift of His Son, Jesus Christ, and the salvation He brings to believers.",
      yo: "Hymn yii n dupẹ lọwọ Ọlọrun fun awọn iṣẹ nla rẹ, pataki fun ẹbun Ọmọ rẹ, Jesu Kristi, ati igbala ti O mu wa si awọn ol 믿lú.",
      fr: "Ce cantique loue Dieu pour Ses grandes œuvres, en particulier le don de Son Fils, Jésus-Christ, et le salut qu'Il apporte aux croyants.",
      eg: "Hymn yi n ṣe ayẹyẹ Ọlọrun fun awọn iṣẹ nla rẹ, pataki fun ẹbun Ọmọ rẹ, Jesu Kristi, ati igbala ti o mu wa si awọn ol 믿lú."
    }
  },  13: {  // Hymn 13 - Through All the Changing Scenes of Life
    title: {
      en: "Through All the Changing Scenes of Life", 
      yo: "Ní gbogbo àwọn ìyípadà nínú ìgbéyàrá ayé",
      fr: "À travers tous les changements de la vie"
    },
    lyrics: {
      en: `
        1
Through all the changing scenes of life,<br>
In troubles and in joy,<br>
The praises of my God shall still<br>
My heart and tongue employ.<br><br>

        2
Oh, magnify the Lord with me,<br>
With me exalt His name!<br>
When in distress to Him I called<br>
He to my rescue came.<br><br>

        3
The hosts of God encamp around,<br>
The dwellings of the just:<br>
Deliverance He affords to all,<br>
Who on His succour trust.<br><br>

        4
Oh! make but trial of His love!<br>
Experience will decide,<br>
How blest they are, and only they,<br>
Who in His truth confide.<br><br>

        5
Fear Him, ye saints, and you will then,<br>
Have nothing else to fear:<br>
Make you His service your delight,<br>
Your wants shall be His care.<br><br>
      `,
      yo: `
        1
Ní gbogbo àwọn ìyípadà nínú ìgbéyàrá ayé,<br>
Nínú ìṣòro àti ìyọrísí,<br>
Yóò jẹ pé àwọn ayẹyẹ Ọlọrun mi<br>
Yóò ṣiṣẹ́ fún ọkàn àti ẹnu mi.<br><br>

        2
Ṣe ìṣèwọ̀n Ẹlẹ́dàá pẹ̀lú mi,<br>
Pẹ̀lú mi ṣe ìtọ́jú orúkọ rẹ!<br>
Nígbà tí mo ba nira sí Ọ, mo pè,<br>
O sì wá ran mi lọwọ.<br><br>

        3
Ọmọ ogun Ọlọrun yí gbogbo wọn ká,<br>
Níbi ìdájọ̀ àwọn olóòótọ́;<br>
Ó ṣe iranlọwọ fun gbogbo ẹni tí<br>
Ó fi ìrànlọ́wọ́ Rẹ gbaradi.<br><br>

        4
Ṣe ìdánwò ifẹ rẹ!<br>
Ìrírí yóò sọ ìdáhùn,<br>
Báwo ni wọn ṣe dára, wọn nikan ni,<br>
Tí wọ́n ni ìgbàgbọ́ nínú òtítọ́ Rẹ.<br><br>

        5
Bíi Rẹ̀, ẹyin àwọn mimọ́, ẹ̀yin yóò ní,<br>
Kò si ohun míì tó yẹ kí ẹ bẹ̀rù;<br>
Ṣe iṣẹ́ Rẹ̀ ní ìfẹ́, yóò sì rū<br>
Ìbéèrè Rẹ àti àìlera Rẹ.<br><br>
      `,
      fr: `
        1
À travers tous les changements de la vie,<br>
Dans les troubles et la joie,<br>
Les louanges de mon Dieu seront toujours<br>
Employées par mon cœur et ma langue.<br><br>

        2
Magnifiez le Seigneur avec moi,<br>
Exaltez Son nom avec moi!<br>
Quand dans la détresse je L'ai appelé,<br>
Il est venu à mon secours.<br><br>

        3
Les armées de Dieu campent autour<br>
Des demeures des justes:<br>
Il accorde la délivrance à tous<br>
Ceux qui mettent leur confiance en Sa secourance.<br><br>

        4
Oh! Faites l'épreuve de Son amour!<br>
L'expérience en décidera,<br>
Ils sont bénis, et seuls ceux-là,<br>
Qui confient en Sa vérité.<br><br>

        5
Craignez-Le, ô saints, et alors,<br>
Vous n'aurez rien d'autre à craindre:<br>
Faites de Son service votre plaisir,<br>
Vos besoins seront Son souci.<br><br>
      `
    },
    writeUp: {
      en: "This hymn expresses trust in God's guidance through life's changing circumstances, emphasizing faith and reliance on His care and love.",
      yo: "Hymn yi n ṣalaye igbagbọ ninu itọnisọna Ọlọrun nipasẹ awọn ayipada ayé, ti o fi ọwọ́ si igbẹkẹle ati igbaniwọle lori ifẹ Ọlọrun.",
      fr: "Ce cantique exprime la confiance dans la direction de Dieu à travers les circonstances changeantes de la vie, mettant l'accent sur la foi et la dépendance de Ses soins et de Son amour.",
      eg: "Hymn yi n ṣalaye igbagbọ ninu itọnisọna Ọlọrun nipasẹ awọn ayipada ayé, ti o fi ọwọ́ si igbẹkẹle ati igbaniwọle lori ifẹ Ọlọrun."
    }
  },
  14: {  // Hymn 14 - O for a Heart to Praise My God
    title: {
      en: "O for a Heart to Praise My God", 
      yo: "Ẹ jẹ ki ọkan mi yọ fun Ọlọrun",
      fr: "Ô pour un cœur pour louer mon Dieu"
    },
    lyrics: {
      en: `
        1
O for a heart to praise my God,<br>
A heart from sin set free;<br>
A heart that's sprinkled with the blood<br>
So freely shed for me:<br><br>

        2
A heart resigned, submissive, meek,<br>
My great Redeemer's throne;<br>
Where only Christ is heard to speak,<br>
Where Jesus reigns alone:<br><br>

        3
A humble, lowly, contrite heart,<br>
Believing, true, and clean,<br>
Which neither life nor death can part<br>
From Him that dwells within:<br><br>

        4
A heart in every thought renewed,<br>
And full of love divine;<br>
Perfect and right and pure and good —<br>
A copy, Lord, of Thine.<br><br>

        5
Thy nature, gracious Lord, impart,<br>
Come quickly from above;<br>
Write Thy new name upon my heart,<br>
Thy new best name of Love.<br>
      `,
      yo: `
        1
Ẹ jẹ ki ọkan mi yọ fun Ọlọrun,<br>
Ọkan ti a ti yọkúrò nínú ẹṣẹ;<br>
Ọkan ti a fi ẹjẹ sọ, ti a dá silẹ fun mi:<br><br>

        2
Ọkan ti o faramọ, ti o dakẹ, ti o ṣe pataki,<br>
Ile-ọba Olugbala mi;<br>
Níbi tí Kristi nikan yoo ti sọ,<br>
Níbi tí Jesu yoo ṣe ijọba nikan:<br><br>

        3
Ọkan tí o tẹ̀síwájú, tó dákẹ́, tó ṣe ìfọkànsìn,<br>
Tó gbagbọ, tó dájú, tó mọ́,<br>
Tí kò sì ní jẹ́ pé ayé tàbí iku lè yapa<br>
Láti ọdọ ẹni tó ngbé inú rẹ:<br><br>

        4
Ọkan tí a ṣe imúlẹ̀ nínú gbogbo ero,<br>
Tó kún fún ìfẹ́ Ọlọrun;<br>
Pípé, tó tọ́, tó mọ́ àti tó dára —<br>
Afihan, Olúwa, ti tirẹ.<br><br>

        5
Nàtúrẹ rẹ, Olúwa olóòótọ́, fi sílẹ̀,<br>
Wá kíákíá láti òkè;<br>
Kọ orúkọ tuntun rẹ sí ọkàn mi,<br>
Orúkọ tuntun rẹ ti Ìfẹ́.<br>
      `,
      fr: `
        1
Ô pour un cœur pour louer mon Dieu,<br>
Un cœur libéré du péché;<br>
Un cœur qui a été saupoudré du sang,<br>
Si librement versé pour moi:<br><br>

        2
Un cœur résigné, soumis, doux,<br>
Le trône de mon grand Rédempteur;<br>
Là où seul Christ est entendu parler,<br>
Là où Jésus règne seul:<br><br>

        3
Un cœur humble, bas, contrit,<br>
Croyant, vrai et pur,<br>
Qui ni la vie ni la mort ne peuvent séparer<br>
De Celui qui habite en lui:<br><br>

        4
Un cœur renouvelé dans chaque pensée,<br>
Et plein d'amour divin;<br>
Parfait, juste, pur et bon —<br>
Une copie, Seigneur, de la Tienne.<br><br>

        5
Ta nature, Seigneur bienveillant, donne-la,<br>
Viens vite du ciel;<br>
Écris Ton nouveau nom sur mon cœur,<br>
Ton nouveau meilleur nom, l'Amour.<br>
      `
    },
    writeUp: {
      en: "This hymn expresses a longing for a pure heart, one that is fully dedicated to God, free from sin, and filled with His love and grace.",
      yo: "Hymn yii n ṣàfihàn ifẹ́ kan fun ọkan mimọ́, ọkan tí o jẹ́ gbogbo rẹ fún Ọlọrun, ti o ti yọkúrò nínú ẹṣẹ, tí o kún fún ìfẹ́ ati oore-ọfẹ Ọlọrun.",
      fr: "Ce cantique exprime un désir d'un cœur pur, un cœur entièrement dédié à Dieu, libéré du péché et rempli de Son amour et de Sa grâce.",
      eg: "Hymn yi n ṣàfihàn ifẹ́ kan fun ọkan mimọ́, ọkan tí o jẹ́ gbogbo rẹ fún Ọlọrun, ti o ti yọkúrò nínú ẹṣẹ, tí o kún fún ìfẹ́ ati oore-ọfẹ Ọlọrun."
    }
  },
  15: {  // Hymn 15 - When Upon Life's Billow You Are Tempest-Tossed
    title: {
      en: "When Upon Life’s Billow You Are Tempest-Tossed",
      yo: "Nígbà tí o wa lori àwọn ìkànsí ayé, o sì jẹ́ kó ṣeé ṣe kó yẹ",
      fr: "Lorsque sur les vagues de la vie, tu es secoué par la tempête"
    },
    lyrics: {
      en: `
        1. When upon life’s billow you are tempest-tossed,<br>
        When you are discouraged, thinking all is lost,<br>
        Count your many blessings, name them one by one;<br>
        And it will surprise you what the Lord has done.<br><br>

        CHORUS:<br>
        Count your blessings, name them one by one,<br>
        Count your blessings, see what God has done;<br>
        Count your blessings, name them one by one,<br>
        And it will surprise you what the Lord has done.<br><br>

        2. Are you ever burdened with a load of care?<br>
        Does the cross seem heavy you are called to bear?<br>
        Count your many blessings, every doubt will fly,<br>
        And you will be singing as the day go by.<br><br>

        CHORUS:<br>
        Count your blessings, name them one by one,<br>
        Count your blessings, see what God has done;<br>
        Count your blessings, name them one by one,<br>
        And it will surprise you what the Lord has done.<br><br>

        3. When you look at others with their lands and gold,<br>
        Think that Christ has promised you His wealth untold,<br>
        Count your many blessings money cannot buy,<br>
        Your reward in heaven, nor your home on high.<br><br>

        CHORUS:<br>
        Count your blessings, name them one by one,<br>
        Count your blessings, see what God has done;<br>
        Count your blessings, name them one by one,<br>
        And it will surprise you what the Lord has done.<br><br>

        4. So amid the conflict, whether great or small,<br>
        Do not be discouraged, God is over all,<br>
        Count your many blessings: angels will attend,<br>
        Help and comfort give you to your journey’s end.<br>
      `,
      yo: `
        1. Nígbà tí o wa lori àwọn ìkànsí ayé, o sì jẹ́ kó ṣeé ṣe kó yẹ,<br>
        Nígbà tí o ba ń bínú, n ronú pé gbogbo ohun ti lọ,<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Yóò sì jẹ́ kó dá ọ lójú ohun ti Olúwa ti ṣe.<br><br>

        CHORUS:<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, wo ohun ti Ọlọrun ti ṣe;<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Yóò sì jẹ́ kó dá ọ lójú ohun ti Olúwa ti ṣe.<br><br>

        2. Ṣé o kúkú ń jẹ̀bi ẹru? Ṣé o nímu ọjọ́ kan tó ṣòro?<br>
        Ṣé oríire rẹ ń bẹ ẹru to gbọdọ bear?<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, gbogbo ẹ̀sùn yóò ya,<br>
        Yóò sì jẹ́ kó ńkọ ẹyà rẹ bí ọjọ́ ṣe lọ.<br><br>

        CHORUS:<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, wo ohun ti Ọlọrun ti ṣe;<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Yóò sì jẹ́ kó dá ọ lójú ohun ti Olúwa ti ṣe.<br><br>

        3. Nígbà tí o bá wo àwọn alákóṣà rẹ pẹ̀lú ilẹ̀ wọn àti wúrà wọn,<br>
        Rò pé Kristi ti ṣe ileri pé yóò fún ọ ní ohun ìní to pọ̀,<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ tí owó kò lè rà,<br>
        Ìyè rẹ ni ọ̀run, àtàwọn ilé rẹ tó ga.<br><br>

        CHORUS:<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, wo ohun ti Ọlọrun ti ṣe;<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ, pe wọn lọ́ọ̀tẹ,<br>
        Yóò sì jẹ́ kó dá ọ lójú ohun ti Olúwa ti ṣe.<br><br>

        4. Nítorí náà, pẹ̀lú ìjà, bóyá tóbi tàbí kékeré,<br>
        Má ṣe jàre, Ọlọrun ń bọ́ lórí gbogbo,<br>
        Ṣe àkójọpọ̀ awọn ayọ rẹ: àwọn angẹli yóò ṣe ẹ̀bọrùn,<br>
        Ìrànlọ́wọ́ àti ìtùnú yóò fi sílẹ̀ fún ìrìn-àjò rẹ.<br>
      `,
      fr: `
        1. Lorsque sur les vagues de la vie, tu es secoué par la tempête,<br>
        Lorsque tu es découragé, pensant que tout est perdu,<br>
        Compte tes bénédictions, nomme-les une par une;<br>
        Et cela te surprendra de voir ce que le Seigneur a fait.<br><br>

        CHORUS:<br>
        Compte tes bénédictions, nomme-les une par une,<br>
        Compte tes bénédictions, vois ce que Dieu a fait;<br>
        Compte tes bénédictions, nomme-les une par une,<br>
        Et cela te surprendra de voir ce que le Seigneur a fait.<br><br>

        2. Es-tu jamais accablé d'un fardeau de souci?<br>
        La croix te semble-t-elle lourde que tu es appelé à porter?<br>
        Compte tes bénédictions, chaque doute s'envolera,<br>
        Et tu chanteras au fur et à mesure que les jours passent.<br><br>

        CHORUS:<br>
        Compte tes bénédictions, nomme-les une par une,<br>
        Compte tes bénédictions, vois ce que Dieu a fait;<br>
        Compte tes bénédictions, nomme-les une par une,<br>
        Et cela te surprendra de voir ce que le Seigneur a fait.<br><br>

        3. Lorsque tu regardes les autres avec leurs terres et leur or,<br>
        Pense que Christ t'a promis Sa richesse incommensurable,<br>
        Compte tes bénédictions que l'argent ne peut acheter,<br>
        Ta récompense au ciel, ni ta maison là-haut.<br><br>

        CHORUS:<br>
        Compte tes bénédictions, nomme-les une par une,<br>
        Compte tes bénédictions, vois ce que Dieu a fait;<br>
        Compte tes bénédictions, nomme-les une par une,<br>
        Et cela te surprendra de voir ce que le Seigneur a fait.<br><br>

        4. Ainsi, au milieu du conflit, qu'il soit grand ou petit,<br>
        Ne sois pas découragé, Dieu est au-dessus de tout,<br>
        Compte tes bénédictions: les anges t'accompagneront,<br>
        Aide et réconfort te seront donnés jusqu'à la fin de ton voyage.<br>
      `
    },
    writeUp: {
      en: "This hymn encourages us to count and reflect on the many blessings we have, especially when facing challenges, reminding us of God's faithfulness and love.",
      yo: "Hymn yi n tọ́ka si wa lati ṣe àkójọpọ̀ ati ronú lori awọn ayọ pupọ ti a ni, pataki nigbati a ba dojuko awọn ìṣòro, n jẹ́ kí a rántí ìgbọràn Ọlọrun ati ìfẹ́ Rẹ.",
      fr: "Ce cantique nous encourage à compter et à réfléchir sur les nombreuses bénédictions que nous avons, surtout face aux défis, nous rappelant la fidélité et l'amour de Dieu.",
      eg: "Hymn yi n tọ́ka si wa lati ṣe àkójọpọ̀ ati ronú lori awọn ayọ pupọ ti a ni, pataki nigbati a ba dojuko awọn ìṣòro, n jẹ́ kí a rántí ìgbọràn Ọlọrun ati ìfẹ́ Rẹ."
    }
  },
  16: {  // Hymn 16 - Praise, My Soul, the King of Heaven
    title: {
      en: "Praise, My Soul, the King of Heaven",
      yo: "Yìn, ẹmi mi, Ọba ọ̀run",
      fr: "Loue, mon âme, le Roi des cieux"
    },
    lyrics: {
      en: `
        1. Praise, my soul, the King of heaven;<br>
        To His feet thy tribute bring,<br>
        Ransomed, healed, restored, forgiven,<br>
        Who like thee His praise should sing?<br>
        Praise Him! Praise Him!<br>
        Praise Him! Praise Him!<br>
        Praise the everlasting King!<br><br>

        2. Praise Him for His grace and favour,<br>
        To our fathers in distress,<br>
        Praise Him, still the same as ever,<br>
        Slow to chide and swift to bless,<br>
        Praise Him! Praise Him!<br>
        Praise Him! Praise Him!<br>
        Glorious in His faithfulness.<br><br>

        3. Father-like, He tends and spares us;<br>
        Well our feeble frame He knows;<br>
        In His hands He gently bears us,<br>
        Rescues us from all our foes,<br>
        Praise Him! Praise Him!<br>
        Praise Him! Praise Him!<br>
        Widely as His mercy flows.<br><br>

        4. Angels, help us to adore Him;<br>
        Ye behold Him face to face;<br>
        Sun and moon, bow down before Him,<br>
        Dwellers all in time and space,<br>
        Praise Him! Praise Him!<br>
        Praise Him! Praise Him!<br>
        Praise with us the God of grace!<br><br>

        Amen.
      `,
      yo: `
        1. Yìn, ẹmi mi, Ọba ọ̀run;<br>
        Si ẹsẹ̀ Rẹ, ẹbọ rẹ mú wa,<br>
        Ti ra, ti wosan, ti tunṣe, ti dáàbò,<br>
        Ta ni bii rẹ ti yoo yìn?<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Yìn Ọba tó wa titi lailai!<br><br>

        2. Yìn Rẹ fún oore-ọfẹ ati ìfaramọ́,<br>
        Si àwọn baba wa nínú ìṣòro,<br>
        Yìn Rẹ, tó wa n'ìpò kanna bi tẹ́lẹ̀,<br>
        Tó pẹ̀ ní ìbínú, ṣùgbọ́n ń fi àánú hàn,<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Rẹ́rè nínú ìfaithfulness Rẹ.<br><br>

        3. Bí baba, ó ń tọ́jú wa ati ìdájọ́ wa;<br>
        Ó mọ́ ìyàwó wa tìkára wa;<br>
        Nínú ọwọ́ Rẹ, ó ń gbé wa lọ,<br>
        Ó sì gba wa lọwọ gbogbo ọ̀tá wa,<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Gbogbo ibi ni oore-ọfẹ Rẹ ń lọ.<br><br>

        4. Àwọn angẹli, ràn wa lọwọ lati tọrọ́ yìn Rẹ;<br>
        Ẹ wo Rẹ ni oju-si-oju;<br>
        Òrùn ati osùnmá, kọ́ ní ibèèrè lọ<br>
        Gbogbo awọn ẹni gbogbo ní ibi ati akoko,<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Yìn Rẹ! Yìn Rẹ!<br>
        Yìn pẹlu wa, Ọlọrun oore-ọfẹ!<br><br>

        Amin.
      `,
      fr: `
        1. Loue, mon âme, le Roi des cieux;<br>
        A ses pieds, apporte tes hommages,<br>
        Racheté, guéri, restauré, pardonné,<br>
        Qui, comme toi, chanterait sa louange?<br>
        Louez-le! Louez-le!<br>
        Louez-le! Louez-le!<br>
        Louez le Roi éternel!<br><br>

        2. Louez-le pour sa grâce et sa faveur,<br>
        A nos pères dans la détresse,<br>
        Louez-le, toujours le même,<br>
        Lent à la colère et prompt à bénir,<br>
        Louez-le! Louez-le!<br>
        Louez-le! Louez-le!<br>
        Glorieux dans sa fidélité.<br><br>

        3. Comme un père, il veille sur nous;<br>
        Il connaît bien notre faiblesse;<br>
        Dans ses mains, il nous porte doucement,<br>
        Nous sauve de tous nos ennemis,<br>
        Louez-le! Louez-le!<br>
        Louez-le! Louez-le!<br>
        Aussi large que coule sa miséricorde.<br><br>

        4. Anges, aidez-nous à l'adorer;<br>
        Vous qui le voyez face à face;<br>
        Soleil et lune, inclinez-vous devant lui,<br>
        Habitants de tous les temps et de tous les espaces,<br>
        Louez-le! Louez-le!<br>
        Louez-le! Louez-le!<br>
        Louez avec nous le Dieu de grâce!<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn calls us to praise the King of Heaven for His grace, love, and faithfulness, reminding us of God's care and mercy in all circumstances.",
      yo: "Hymn yi n pe wa lati yìn Ọba ọ̀run fún oore-ọfẹ Rẹ, ìfẹ́ Rẹ, àti ìfaithfulness Rẹ, n fi ọkan wa lẹ́kùn-ún pé Ọlọrun ń tọ́jú wa àti ìfarahan Rẹ ni gbogbo ayé.",
      fr: "Ce cantique nous appelle à louer le Roi des cieux pour sa grâce, son amour et sa fidélité, nous rappelant les soins et la miséricorde de Dieu dans toutes les circonstances.",
      eg: "Hymn yi n pe wa lati yìn Ọba ọ̀run fún oore-ọfẹ Rẹ, ìfẹ́ Rẹ, àti ìfaithfulness Rẹ, n fi ọkan wa lẹ́kùn-ún pé Ọlọrun ń tọ́jú wa àti ìfarahan Rẹ ni gbogbo ayé."
    }
  },
  17: {  // Hymn 17 - We are never, never, weary of the grand old song
    title: {
      en: "We are never, never, weary of the grand old song",
      yo: "A kò ní rẹ́ẹ̀, kò ní rẹ́ẹ̀, nínú orin atijọ́ nla",
      fr: "Nous ne sommes jamais, jamais fatigués de la grande chanson ancienne"
    },
    lyrics: {
      en: `
        1. We are never, never, weary of the grand old song;<br>
        Glory to God, halleluyah!<br>
        We can sing it loud as ever, with our faith more strong;<br>
        Glory to God, halleluyah!<br><br>

        CHORUS:<br>
        Oh, the children of the Lord, Have a right to shout and sing,<br>
        For the way is growing bright, and our souls are on the wing!<br>
        We are going by and by to the palace of the King!<br>
        Glory to God, halleluyah!<br><br>

        2. We are lost amid the rapture of redeeming love;<br>
        Glory to God, halleluyah!<br>
        We are rising on its pinion to the hill above,<br>
        Glory to God, halleluyah!<br><br>

        CHORUS:<br>
        Oh, the children of the Lord, Have a right to shout and sing,<br>
        For the way is growing bright, and our souls are on the wing!<br>
        We are going by and by to the palace of the King!<br>
        Glory to God, halleluyah!<br><br>

        3. We are going to a palace that is built of gold,<br>
        Glory to God, halleluyah!<br>
        Where the King in all His splendor we shall soon behold;<br>
        Glory to God, halleluyah!<br><br>

        CHORUS:<br>
        Oh, the children of the Lord, Have a right to shout and sing,<br>
        For the way is growing bright, and our souls are on the wing!<br>
        We are going by and by to the palace of the King!<br>
        Glory to God, halleluyah!<br><br>

        4. There we’ll shout redeeming mercy in a glad new song;<br>
        Glory to God, halleluyah!<br>
        There we’ll sing the praise of Jesus with the blood-washed throng;<br>
        Glory to God, halleluyah!<br><br>
      `,
      yo: `
        1. A kò ní rẹ́ẹ̀, kò ní rẹ́ẹ̀, nínú orin atijọ́ nla;<br>
        Ọlọrun ni yìn, halleluya!<br>
        A lè kọ́ ọ̀rọ̀ rẹ lẹ́gbẹ̀ẹ́, pẹ̀lú ìgbàgbọ́ wa tó lágbára;<br>
        Ọlọrun ni yìn, halleluya!<br><br>

        CHORUS:<br>
        Ẹ̀dá Ọlọrun, ní ẹ̀tọ́ láti kẹ́ àti kọrin,<br>
        Nítorí ọna náà ń tan imúnlẹ̀, àti ẹmi wa ń fò!<br>
        A máa lọ pẹ̀lú Ọba sí ilé rẹ!<br>
        Ọlọrun ni yìn, halleluya!<br><br>

        2. A ti sọnù nínú àyàrẹ ìfẹ́ ìtọ́rẹ,<br>
        Ọlọrun ni yìn, halleluya!<br>
        A ń gòkè soke ní pinion rẹ, sí òkè tó ga,<br>
        Ọlọrun ni yìn, halleluya!<br><br>

        CHORUS:<br>
        Ẹ̀dá Ọlọrun, ní ẹ̀tọ́ láti kẹ́ àti kọrin,<br>
        Nítorí ọna náà ń tan imúnlẹ̀, àti ẹmi wa ń fò!<br>
        A máa lọ pẹ̀lú Ọba sí ilé rẹ!<br>
        Ọlọrun ni yìn, halleluya!<br><br>

        3. A ń lọ sí ilé tí a kọ́ pẹ̀lú wúrà,<br>
        Ọlọrun ni yìn, halleluya!<br>
        Nibè, a ó ri Ọba nínú gbogbo ọlá Rẹ,<br>
        Ọlọrun ni yìn, halleluya!<br><br>

        CHORUS:<br>
        Ẹ̀dá Ọlọrun, ní ẹ̀tọ́ láti kẹ́ àti kọrin,<br>
        Nítorí ọna náà ń tan imúnlẹ̀, àti ẹmi wa ń fò!<br>
        A máa lọ pẹ̀lú Ọba sí ilé rẹ!<br>
        Ọlọrun ni yìn, halleluya!<br><br>

        4. Níbè, a ó ké ìkíni ìyìn ìtọ́rẹ pẹ̀lú orin tuntun;<br>
        Ọlọrun ni yìn, halleluya!<br>
        Níbè, a ó kọ́ yìn Jesu pẹ̀lú ẹgbẹ́ ti a fi ẹ̀jẹ̀ Rẹ mọ́,<br>
        Ọlọrun ni yìn, halleluya!<br><br>
      `,
      fr: `
        1. Nous ne sommes jamais, jamais fatigués de la grande chanson ancienne;<br>
        Gloire à Dieu, alléluia !<br>
        Nous pouvons la chanter aussi fort que jamais, avec une foi plus forte ;<br>
        Gloire à Dieu, alléluia !<br><br>

        CHORUS :<br>
        Oh, les enfants du Seigneur, ont le droit de crier et chanter,<br>
        Car le chemin devient de plus en plus lumineux, et nos âmes s'envolent !<br>
        Nous allons, peu à peu, au palais du Roi !<br>
        Gloire à Dieu, alléluia !<br><br>

        2. Nous sommes perdus dans l'extase de l'amour rédempteur ;<br>
        Gloire à Dieu, alléluia !<br>
        Nous nous élevons sur ses ailes vers la colline d'en haut,<br>
        Gloire à Dieu, alléluia !<br><br>

        CHORUS :<br>
        Oh, les enfants du Seigneur, ont le droit de crier et chanter,<br>
        Car le chemin devient de plus en plus lumineux, et nos âmes s'envolent !<br>
        Nous allons, peu à peu, au palais du Roi !<br>
        Gloire à Dieu, alléluia !<br><br>

        3. Nous allons dans un palais fait d'or,<br>
        Gloire à Dieu, alléluia !<br>
        Là, nous verrons bientôt le Roi dans toute sa splendeur ;<br>
        Gloire à Dieu, alléluia !<br><br>

        CHORUS :<br>
        Oh, les enfants du Seigneur, ont le droit de crier et chanter,<br>
        Car le chemin devient de plus en plus lumineux, et nos âmes s'envolent !<br>
        Nous allons, peu à peu, au palais du Roi !<br>
        Gloire à Dieu, alléluia !<br><br>

        4. Là, nous crierons miséricorde rédemptrice dans une nouvelle chanson joyeuse ;<br>
        Gloire à Dieu, alléluia !<br>
        Là, nous chanterons les louanges de Jésus avec la multitude lavée par son sang ;<br>
        Gloire à Dieu, alléluia !<br><br>
      `
    },
    writeUp: {
      en: "This hymn encourages the believers to keep singing and praising God for His redeeming love and the promise of eternal joy and salvation in His presence.",
      yo: "Hymn yi n gbá wa láti máa kọrin àti yìn Ọlọrun fún ìfẹ́ ìtọ́rẹ Rẹ ati ìlérí ayọ̀ àìnípẹ̀kun àti ìgbàlà nínú ìjọpọ̀ Rẹ.",
      fr: "Ce cantique encourage les croyants à continuer à chanter et à louer Dieu pour son amour rédempteur et la promesse de la joie éternelle et du salut dans sa présence.",
      eg: "Hymn yi n gbá wa láti máa kọrin àti yìn Ọlọrun fún ìfẹ́ ìtọ́rẹ Rẹ ati ìlérí ayọ̀ àìnípẹ̀kun àti ìgbàlà nínú ìjọpọ̀ Rẹ."
    }
  },
  18: {  // Hymn 18 - Praise the King of Glory, He is God Alone
    title: {
      en: "Praise the King of Glory, He is God Alone",
      yo: "Yìn Ọba Ọlá, Ó jẹ́ Ọlọrun nikan",
      fr: "Louez le Roi de la Gloire, Il est Dieu seul"
    },
    lyrics: {
      en: `
        1. Praise the king of Glory, He is God alone,<br>
        Praise Him for the wonders He to us hath shown;<br>
        For His promised presence, All the pilgrim way,<br>
        For the flaming pillar, And the cloud by day.<br><br>

        Chorus:<br>
        Praise... Him, shining angels,<br>
        Strike ... your harps of gold,<br>
        All ... His hosts adore Him,<br>
        Who ... His face behold;<br>
        Through ... His great dominion,<br>
        While ... the ages roll,<br>
        All His works shall praise Him (3ce)<br>
        Bless the Lord, my soul!<br><br>

        2. Praise Him for redemption, Free to every soul;<br>
        Praise Him for the Fountain That can make us whole;<br>
        For His gifts of kindness, And His loving care,<br>
        For the blest assurance, That He answers prayer.<br><br>

        Chorus:<br>
        Praise... Him, shining angels,<br>
        Strike ... your harps of gold,<br>
        All ... His hosts adore Him,<br>
        Who ... His face behold;<br>
        Through ... His great dominion,<br>
        While ... the ages roll,<br>
        All His works shall praise Him (3ce)<br>
        Bless the Lord, my soul!<br><br>

        3. Praise Him for the trials, Sent as chords of love,<br>
        Binding us more closely, To the things above;<br>
        For the faith that conquers, Hope, that naught can dim,<br>
        For the land where loved ones, Gather unto Him.<br><br>

        Chorus:<br>
        Praise... Him, shining angels,<br>
        Strike ... your harps of gold,<br>
        All ... His hosts adore Him,<br>
        Who ... His face behold;<br>
        Through ... His great dominion,<br>
        While ... the ages roll,<br>
        All His works shall praise Him (3ce)<br>
        Bless the Lord, my soul!<br>
      `,
      yo: `
        1. Yìn Ọba Ọlá, Ó jẹ́ Ọlọrun nikan,<br>
        Yìn fún àwọn ìyanu tí Ó ti fi hàn wa;<br>
        Fún ìbèèrè Rẹ ti ìbèèrè, gbogbo ìrìnàjò ọmọ ìlú,<br>
        Fún ọpa iná, àti awọsanma ní ọjọ́.<br><br>

        Chorus:<br>
        Yìn... Rẹ, àwọn angẹli tó ń tan imọlẹ̀,<br>
        Tẹ... àwọn harps rẹ̀ tó wúrà,<br>
        Gbogbo... àwọn ẹgbẹ́ rẹ ń yìn Rẹ,<br>
        Tí wọn ... ti ri oju Rẹ;<br>
        Nínú... ìjọba Rẹ tó ń tan,<br>
        Nígbà gbogbo ìpẹ̀yà yi,<br>
        Gbogbo iṣẹ́ Rẹ yóò yìn Rẹ (3ce)<br>
        Bùkún Ọlọrun, ẹmi mi!<br><br>

        2. Yìn fún ìtìlẹ́yìn, ọfẹ́ fún gbogbo ẹmi;<br>
        Yìn fún Odò tí ń mú kó dá wa lọ́kàn;<br>
        Fún àwọn ẹbùn ìbùkún Rẹ, àti ìfẹ́ tó ń tọ́jú wa,<br>
        Fún ìkìlọ̀ ibèèrè, pé Ó máa dáhùn àdúrà.<br><br>

        Chorus:<br>
        Yìn... Rẹ, àwọn angẹli tó ń tan imọlẹ̀,<br>
        Tẹ... àwọn harps rẹ̀ tó wúrà,<br>
        Gbogbo... àwọn ẹgbẹ́ rẹ ń yìn Rẹ,<br>
        Tí wọn ... ti ri oju Rẹ;<br>
        Nínú... ìjọba Rẹ tó ń tan,<br>
        Nígbà gbogbo ìpẹ̀yà yi,<br>
        Gbogbo iṣẹ́ Rẹ yóò yìn Rẹ (3ce)<br>
        Bùkún Ọlọrun, ẹmi mi!<br><br>

        3. Yìn fún ìdàgbàsókè, Kò tó ti ọrọ̀ ìfẹ́,<br>
        Tí ń so wa mọ́ra pẹ̀lú ohun tó wà lórí,<br>
        Fún ìgbàgbọ́ tó ṣẹgun, ìrètí tó kó gbogbo ohun,<br>
        Fún ilẹ̀ tí àwọn olólùfẹ́ wa, ti kọ̀ọ́mọ wa.<br><br>

        Chorus:<br>
        Yìn... Rẹ, àwọn angẹli tó ń tan imọlẹ̀,<br>
        Tẹ... àwọn harps rẹ̀ tó wúrà,<br>
        Gbogbo... àwọn ẹgbẹ́ rẹ ń yìn Rẹ,<br>
        Tí wọn ... ti ri oju Rẹ;<br>
        Nínú... ìjọba Rẹ tó ń tan,<br>
        Nígbà gbogbo ìpẹ̀yà yi,<br>
        Gbogbo iṣẹ́ Rẹ yóò yìn Rẹ (3ce)<br>
        Bùkún Ọlọrun, ẹmi mi!<br><br>
      `,
      fr: `
        1. Louez le Roi de la Gloire, Il est Dieu seul,<br>
        Louez-Le pour les merveilles qu'Il nous a montrées ;<br>
        Pour Sa présence promise, tout le chemin du pèlerin,<br>
        Pour la colonne de feu et le nuage de jour.<br><br>

        Chorus:<br>
        Louez... Le, anges brillants,<br>
        Frappez... vos harpes d'or,<br>
        Tous... Ses hôtes L'adorent,<br>
        Qui... contemplent Son visage ;<br>
        À travers... Sa grande domination,<br>
        Tandis... que les âges défilent,<br>
        Toutes Ses œuvres Le loueront (3 fois)<br>
        Bénis le Seigneur, mon âme !<br><br>

        2. Louez-Le pour la rédemption, libre pour chaque âme ;<br>
        Louez-Le pour la Fontaine qui peut nous rendre entiers ;<br>
        Pour Ses dons de bonté, et Sa tendre sollicitude,<br>
        Pour l'assurance bénie, qu'Il répond aux prières.<br><br>

        Chorus:<br>
        Louez... Le, anges brillants,<br>
        Frappez... vos harpes d'or,<br>
        Tous... Ses hôtes L'adorent,<br>
        Qui... contemplent Son visage ;<br>
        À travers... Sa grande domination,<br>
        Tandis... que les âges défilent,<br>
        Toutes Ses œuvres Le loueront (3 fois)<br>
        Bénis le Seigneur, mon âme !<br><br>

        3. Louez-Le pour les épreuves, envoyées comme des accords d'amour,<br>
        Nous liant plus étroitement aux choses d'en haut ;<br>
        Pour la foi qui triomphe, l'espérance que rien ne peut ternir,<br>
        Pour la terre où les êtres chers se rassemblent auprès de Lui.<br><br>

        Chorus:<br>
        Louez... Le, anges brillants,<br>
        Frappez... vos harpes d'or,<br>
        Tous... Ses hôtes L'adorent,<br>
        Qui... contemplent Son visage ;<br>
        À travers... Sa grande domination,<br>
        Tandis... que les âges défilent,<br>
        Toutes Ses œuvres Le loueront (3 fois)<br>
        Bénis le Seigneur, mon âme !<br><br>
      `
    },
    writeUp: {
      en: "This hymn praises God for His wonders, the redemption He offers, the trials that strengthen our faith, and the assurance of His care and presence in every aspect of our lives.",
      yo: "Hymn yi yìn Ọlọrun fún àwọn ìyanu Rẹ, ìtìlẹ́yìn tí Ó nfi fún wa, àwọn ìdàgbàsókè tó ń jẹ́ kó ṣeé ṣe fún wa, àti ìtẹ́lọ́run Rẹ pé Ó máa tọ́jú wa ní gbogbo ayé wa.",
      fr: "Ce cantique loue Dieu pour Ses merveilles, la rédemption qu'Il offre, les épreuves qui renforcent notre foi, et l'assurance de Sa sollicitude et de Sa présence dans tous les aspects de nos vies.",
      eg: "Hymn yi yìn Ọlọrun fún àwọn ìyanu Rẹ, ìtìlẹ́yìn tí Ó nfi fún wa, àwọn ìdàgbàsókè tó ń jẹ́ kó ṣeé ṣe fún wa, àti ìtẹ́lọ́run Rẹ pé Ó máa tọ́jú wa ní gbogbo ayé wa."
    }
  },
  
  19: {  // Hymn 19 - Awake, my soul and rise with joy
    title: {
      en: "Awake, my soul and rise with joy",
      yo: "Dide, ẹmi mi, ki o si goke pẹlu ayọ",
      fr: "Réveille-toi, mon âme, et lève-toi avec joie"
    },
    lyrics: {
      en: `
        1. Awake, my soul and rise with joy,<br>
        Oh, sing praises to thy Saviour!<br>
        His grace and glory open my song,<br>
        How great is His loving kindness!<br><br>

        2. He knows I am lost when I fall,<br>
        Yet His love to me is complete;<br>
        He has saved me from afflictions,<br>
        How great is His loving kindness!<br><br>

        3. Darts from my foes at me are hurled,<br>
        World and Satan stand in my way,<br>
        Gracious He has led me through;<br>
        How great is His loving kindness!<br><br>

        4. When trouble, like a gloomy cloud,<br>
        Has gather’d thick and thunder’d loud,<br>
        He near my soul has always stood,<br>
        His loving kindness, oh how good!<br><br>

        5. Often I feel my sinful heart,<br>
        Prone from my Jesus to depart,<br>
        And though I oft have Him forgot;<br>
        His loving kindness, changes not.<br><br>

        Amen.
      `,
      yo: `
        1. Dide, ẹmi mi, ki o si goke pẹlu ayọ,<br>
        Ẹ kọ orin ìyìn si Olugbala rẹ!<br>
        Oore-ọfẹ ati ọla Rẹ ni yoo ṣí orin mi,<br>
        Bawo ni ìfẹ́ Rẹ ṣe tóbi!<br><br>

        2. Ó mọ̀ pé mo sọnù nígbà tí mo bá ṣègbé,<br>
        Ṣùgbọ́n ìfẹ́ Rẹ sí mi péye;<br>
        Ó ti dá mi làti ọwọ́ ìdààmú,<br>
        Bawo ni ìfẹ́ Rẹ ṣe tóbi!<br><br>

        3. Awọn ìjìyà lati ọdọ awọn ọta mi ti n pa mi,<br>
        Ayé ati Satani dojú kọ mi,<br>
        Nífẹ̀ẹ́, Ó ti dari mi lọ,<br>
        Bawo ni ìfẹ́ Rẹ ṣe tóbi!<br><br>

        4. Nígbà tí ìṣòro, bí ìkòkò pẹlẹbẹ,<br>
        Ti kó gbogbo rẹ pọ̀ síi àti rẹ̀kẹ̀kẹ̀,</br>
        Ó ti wa lẹ́gbẹ̀ẹ́ ẹmi mi, àti pé ó kọ́ọ̀,</br>
        Ìfẹ́ Rẹ, ṣe ni o mọ́ ni!<br><br>

        5. Nígbà mìíràn, ìmọ̀ ọkàn mi tó ṣe ẹ̀sùn,<br>
        Ti fa mi kúrò ní ìfé Jesu mi,<br>
        Bí mo ṣe ṣe àṣìṣe pẹ̀lú Rẹ;<br>
        Ìfẹ́ Rẹ kò ṣeé fi ẹsùn mọ́.<br><br>

        Amin.
      `,
      fr: `
        1. Réveille-toi, mon âme, et lève-toi avec joie,<br>
        Ô, chante des louanges à ton Sauveur!<br>
        Sa grâce et Sa gloire ouvrent ma chanson,<br>
        Combien grande est Sa bonté!<br><br>

        2. Il sait que je suis perdu lorsque je tombe,<br>
        Pourtant Son amour pour moi est complet;<br>
        Il m'a sauvé des afflictions,<br>
        Combien grande est Sa bonté!<br><br>

        3. Les flèches de mes ennemis sont lancées vers moi,<br>
        Le monde et Satan se tiennent sur mon chemin,<br>
        Par Sa grâce, Il m'a conduit à travers;<br>
        Combien grande est Sa bonté!<br><br>

        4. Lorsque la douleur, telle un nuage sombre,<br>
        S'est rassemblée épaisse et a tonné fort,<br>
        Il s'est toujours tenu près de mon âme,<br>
        Sa bonté, oh combien bonne!<br><br>

        5. Souvent je sens mon cœur pécheur,<br>
        Enclin à m'éloigner de Jésus,<br>
        Et bien que je L'aie souvent oublié;<br>
        Sa bonté ne change pas.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn encourages the believer to rise with joy and praise for God's great loving-kindness, His unfailing love and care, even in times of trouble and distress.",
      yo: "Hymn yi jẹ́ ẹ̀kúnrẹ́rẹ́ fun olùgbọ́ pé kí wọn dide pẹlu ayọ ati yìn fún ìfẹ́ Ọlọrun tó gaju, ìfẹ́ tó jẹ́ pé kò ní parí àti ìtọọ́jú Rẹ, paapaa nígbà ìṣòro.",
      fr: "Ce cantique encourage le croyant à se lever avec joie et à louer la grande bonté de Dieu, Son amour inébranlable et Ses soins, même en temps de troubles et de détresse.",
      eg: "Hymn yi jẹ́ ẹ̀kúnrẹ́rẹ́ fun olùgbọ́ pé kí wọn dide pẹlu ayọ ati yìn fún ìfẹ́ Ọlọrun tó gaju, ìfẹ́ tó jẹ́ pé kò ní parí àti ìtọọ́jú Rẹ, paapaa nígbà ìṣòro."
    }
  },
  20: {  // Hymn 20 - O Lord of Heav'n and earth and sea
    title: {
      en: "O Lord of Heav’n and earth and sea",
      yo: "Olúwa ti Ọ̀run, ilẹ̀ àti òkun",
      fr: "Ô Seigneur des cieux, de la terre et de la mer"
    },
    lyrics: {
      en: `
        1. O Lord of Heav’n and earth and sea,<br>
        To Thee all praise and glory be;<br>
        How shall we show our love to Thee,<br>
        Giver of all?<br><br>

        2. The golden sunshine, vernal air,<br>
        Sweet flowers and fruits Thy love declare;<br>
        Where harvests ripen, Thou art there,<br>
        Giver of all!<br><br>

        3. For peaceful homes, and healthful days,<br>
        For all the blessings Earth displays,<br>
        We owe Thee thankfulness and praise,<br>
        Giver of all!<br><br>

        4. Thou didst not spare Thine only Son,<br>
        But gav’st Him for a world undone,<br>
        And e’en that gift Thou dost outrun,<br>
        And give us all.<br><br>

        5. Thou giv’st the Spirit’s blessed dower,<br>
        Spirit of life, and love, and power,<br>
        And dost His sevenfold graces shower<br>
        Upon us all.<br><br>

        6. For souls redeemed, for sins forgiven,<br>
        For means of grace and hopes of Heaven,<br>
        What can to Thee, O Lord, be given,<br>
        Who givest all?<br><br>

        7. We lose what on ourselves we spend;<br>
        We have as treasure without end<br>
        Whatever, Lord, to Thee we lend,<br>
        Who givest all.<br><br>

        8. Whatever, Lord, we lend to Thee,<br>
        Repaid a thousandfold will be;<br>
        Then gladly will we give to Thee,<br>
        Giver of all.<br><br>

        9. To Thee, from whom we all derive<br>
        Our life, our gifts, our power to give;<br>
        O may we ever with Thee live,<br>
        Giver of all!<br><br>
      `,
      yo: `
        1. Olúwa ti Ọ̀run, ilẹ̀ àti òkun,<br>
        Fún ọpẹ àti ọlá gbogbo jẹ́ ti Rẹ;<br>
        Báwo ni a ṣe fi ìfẹ́ wa hàn sí Ọ,<br>
        Olùfún gbogbo?<br><br>

        2. Òrò òrùn pẹ̀lú afẹ́fẹ́ tó rọrùn,<br>
        Awọn ododo ati eso, ìfẹ́ Rẹ̀ ni o ṣe àfihàn;<br>
        Níbi tí irẹpọ̀ ba ń ṣẹlẹ, Ọ wà níbẹ,<br>
        Olùfún gbogbo!<br><br>

        3. Fún ile tó dáa, àti ọjọ́ ìlera,<br>
        Fún gbogbo àánú tí Ilẹ̀ ń fi hàn,<br>
        A jẹ́wọ́ ìkíni àti ìyìn fún Ọ,<br>
        Olùfún gbogbo!<br><br>

        4. Kò pé Ọmọ rẹ nikan,<br>
        Ṣùgbọ́n Ọ fi í fún ayé tí kò pé,<br>
        Tí ó sì kún fún ìbùkún, àti fi ọ̀pọ̀ ẹ̀bùn Rẹ ranṣẹ,<br>
        Olùfún gbogbo!<br><br>

        5. O fi Ẹ̀mí Rẹ̀ tó wùlú, tó dáa,<br>
        Ẹ̀mí ìyè, ìfẹ́ àti agbára,<br>
        O fi iṣẹ́-ṣiwájú Rẹ̀ tó ṣoṣo ní gbogbo àwọn rẹ,<br>
        Olùfún gbogbo!<br><br>

        6. Fún ẹmi tí a ra, fún ẹ̀sùn tí a fi darí,<br>
        Fún àǹfààní ìbáṣepọ àti ìrètí Ọlọ́run,<br>
        Kí ló ṣeé fún Ọ, Olúwa, tí o fi gbogbo ẹ́?<br><br>

        7. A máa padà ohun tí a fi rànṣé; <br>
        A ní ìtọ́jú ti ko ni parí<br>
        Ohunkohun, Olúwa, tí a fi ránṣé sí Ọ<br>
        Olùfún gbogbo.<br><br>

        8. Ohunkohun, Olúwa, tí a fi ránṣé sí Ọ,<br>
        A tún gba a ni ọgọrun-un-ọkàn.<br>
        Nígbà náà a ó fi ọpẹ gbà Ọ,<br>
        Olùfún gbogbo.<br><br>

        9. Sí Ọ, láti inú Rẹ, gbogbo wa ni a ti ni<br>
        Iyè wa, awọn ẹ̀bùn wa, agbára wa lati fi ẹbọ;<br>
        Ẹ jẹ́ kí a máa gbe pẹlu Rẹ nigbagbogbo,<br>
        Olùfún gbogbo!<br><br>
      `,
      fr: `
        1. Ô Seigneur des cieux, de la terre et de la mer,<br>
        À Toi toute louange et gloire soient rendues ;<br>
        Comment montrerons-nous notre amour pour Toi,<br>
        Toi qui es le Donateur de tout ?<br><br>

        2. Le soleil doré, l'air printanier,<br>
        Les fleurs et les fruits proclament Ton amour ;<br>
        Là où les récoltes mûrissent, Tu es là,<br>
        Donateur de tout !<br><br>

        3. Pour les foyers paisibles et les journées saines,<br>
        Pour toutes les bénédictions que la Terre montre,<br>
        Nous Te devons reconnaissance et louange,<br>
        Donateur de tout !<br><br>

        4. Tu n’as pas épargné Ton Fils unique,<br>
        Mais Tu L’as donné pour un monde perdu,<br>
        Et même ce don Tu le surpasses,<br>
        Et nous donnes tout.<br><br>

        5. Tu donnes le bienheureux don de l’Esprit,<br>
        Esprit de vie, d'amour et de puissance,<br>
        Et Tu verses ses sept grâces<br>
        Sur nous tous.<br><br>

        6. Pour les âmes rachetées, pour les péchés pardonnés,<br>
        Pour les moyens de grâce et les espérances du Ciel,<br>
        Que pouvons-nous Te donner, ô Seigneur,<br>
        Toi qui donnes tout ?<br><br>

        7. Nous perdons ce que nous dépensons pour nous-mêmes ;<br>
        Nous avons un trésor sans fin<br>
        Tout ce que nous Te prêtons, Seigneur,<br>
        Toi qui donnes tout.<br><br>

        8. Tout ce que nous prêtons à Toi,<br>
        Serait multiplié mille fois ;<br>
        Alors nous Te donnerons avec joie,<br>
        Donateur de tout.<br><br>

        9. À Toi, de qui nous tirons tous<br>
        Notre vie, nos dons, notre pouvoir de donner ;<br>
        Puissions-nous toujours vivre avec Toi,<br>
        Donateur de tout !<br><br>
      `
    },
    writeUp: {
      en: "This hymn praises God as the Giver of all, recognizing His blessings in nature, His sacrifice of Jesus Christ, and the abundant grace and love He showers upon His people.",
      yo: "Hymn yi yìn Ọlọrun gẹgẹbi Olùfún gbogbo, n ṣakiyesi awọn ibùkún Rẹ ninu iseda, ìfẹ́ Ọlọrun nipasẹ Jesu Kristi, ati oore-ọfẹ tó pọ̀ tí Ọlọrun fi ṣòwò wa.",
      fr: "Ce cantique loue Dieu comme le Donateur de tout, reconnaissant Ses bénédictions dans la nature, Son sacrifice de Jésus-Christ, et la grâce abondante et l'amour qu'Il répand sur Son peuple.",
      eg: "Hymn yi yìn Ọlọrun gẹgẹbi Olùfún gbogbo, n ṣakiyesi awọn ibùkún Rẹ ninu iseda, ìfẹ́ Ọlọrun nipasẹ Jesu Kristi, ati oore-ọfẹ tó pọ̀ tí Ọlọrun fi ṣòwò wa."
    }
  },
  201: {
  title: {
    en: "Spirit Divine, Attend Our Prayer",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. Spirit divine, attend our prayer,<br>
      And make this house your home;<br>
      Descend with all your gracious pow'r;<br>
      O come, great Spirit, come!<br><br>

      2. Come as the light; to us reveal<br>
      Our emptiness and woe,<br>
      And lead us in those paths of life<br>
      Where all the righteous go.<br><br>

      3. Come as the fire and purge our hearts<br>
      Like sacrificial flame;<br>
      Let our whole soul an off'ring be<br>
      To our Redeemer's name.<br><br>

      4. Come as the dove, and spread your wings,<br>
      The wings of peaceful love;<br>
      And let your Church on earth become<br>
      Blest as the Church above.<br><br>

      5. Spirit divine, attend our prayer;<br>
      Make a lost world your home;<br>
      Descend with all your gracious pow'r;<br>
      O come, great Spirit, come!<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This hymn is a prayer for the Holy Spirit's presence, guidance, cleansing, and peace to dwell among believers, transforming the Church into a reflection of heaven on earth.",
    yo: "",
    fr: ""
  }
},

202: {
  title: {
    en: "O for a Closer Walk with God",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. O for a closer walk with God,<br>
      A calm and heav'nly frame,<br>
      A light to shine upon the road<br>
      That leads me to the Lamb!<br><br>

      2. Where is the blessedness I knew<br>
      When first I sought the Lord?<br>
      Where is the soul refreshing view<br>
      Of Jesus and His Word?<br><br>

      3. What peaceful hours I then enjoyed!<br>
      How sweet their mem'ry still!<br>
      But they have left an aching void<br>
      The world can never fill.<br><br>

      4. Return, O holy Dove, return,<br>
      Sweet messenger of rest;<br>
      I hate the sins that made Thee mourn,<br>
      And drove Thee from my breast.<br><br>

      5. The dearest idol I have known,<br>
      Whate'er that idol be,<br>
      Help me to tear it from Thy throne<br>
      And worship only Thee.<br><br>

      6. So shall my walk be close with God,<br>
      Calm and serene my frame;<br>
      So purer light shall mark the road<br>
      That leads me to the Lamb.<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "A heartfelt plea for deeper intimacy with God, this hymn reflects on the loss of early spiritual joy and expresses a longing for renewal, purity, and devotion.",
    yo: "",
    fr: ""
  }
},
203: {
  title: {
    en: "When the Power of God Descended",
    yo: "", // Add Yoruba title if available
    fr: ""  // Add French title if available
  },
  lyrics: {
    en: `
      1. When the power of God descended<br>
      On the day of Pentecost,<br>
      All the day of waiting ended,<br>
      They received the Holy Ghost<br><br>

      Chorus:<br>
      O Lord, send the power just now,<br>
      O Lord, send the power just now,<br>
      O Lord, send the power just now,<br>
      And baptize every one.<br><br>

      2. Tongues of flame came down upon them,<br>
      And they preached the word in power,<br>
      Listening multitudes awakened<br>
      Turned to God that very hour.<br><br>

      (Chorus)<br><br>

      3. We are waiting, Holy Spirit,<br>
      We are all of one accord,<br>
      Lord, fulfill just now the promise<br>
      That is given in Thy Word.<br><br>

      (Chorus)<br><br>

      4. Fill and thrill us with Thy presence,<br>
      Grant the blessing that we need,<br>
      Flood our souls with wondrous glory,<br>
      While the prayer of faith we plead.<br><br>

      (Chorus)<br><br>
    `,
    yo: "", // Yoruba lyrics can go here
    fr: ""  // French lyrics can go here
  },
  writeUp: {
    en: "This revival hymn celebrates the outpouring of the Holy Spirit on Pentecost and expresses a fervent prayer for that same power and spiritual baptism to fall afresh on today’s believers.",
    yo: "",
    fr: ""
  }
},


  21: {  // Hymn 21 - For thy mercy and thy grace
    title: {
      en: "For thy mercy and thy grace",
      yo: "Fún ọ̀fẹ́ rẹ àti ìyìn rẹ",
      fr: "Pour ta miséricorde et ta grâce"
    },
    lyrics: {
      en: `
        1. For thy mercy and thy grace,<br>
        faithful through another year,<br>
        hear our song of thankfulness;<br>
        Jesus, our Redeemer, hear.<br><br>

        2. In our weakness and distress,<br>
        rock of strength, be thou our stay;<br>
        in the pathless wilderness<br>
        be our true and living Way.<br><br>

        3. Who of us death's awful road<br>
        in the coming year shall tread?<br>
        With thy rod and staff, O God,<br>
        comfort thou his dying bed.<br><br>

        4. Make us faithful, keep us pure,<br>
        keep us evermore thine own,<br>
        help, O help us to endure,<br>
        fit us for thy promised crown.<br><br>

        5. So within thy palace gate<br>
        we shall praise, on golden strings,<br>
        thee the only Potentate,<br>
        Lord of lords, and King of kings.<br><br>
      `,
      yo: `
        1. Fún ọ̀fẹ́ rẹ àti ìyìn rẹ,<br>
        Tí o ní ìbámu ní gbogbo ọdún tó kọja,<br>
        Gbọ́ orin ìdúpẹ́ wa;<br>
        Jesu, Olùdáàbò, gbọ́.<br><br>

        2. Ní ìbànújẹ àti ìdààmú wa,<br>
        Òkè agbára, jọ̀wọ́ jẹ́ ìtọ́jú wa;<br>
        Ní agbègbè tó kéré,<br>
        Jẹ́ Ọ̀nà tó dájú àti alààyè wa.<br><br>

        3. Tani lára wa ni yóó rìn ọ̀nà ikú<br>
        Nínú ọdún tó ń bọ?<br>
        Pẹ̀lú àpá àti ikòkò Rẹ, Ọlọ́run,<br>
        Ròyìn fún ìbèjò wa.<br><br>

        4. Ṣé kí a ṣe ìmúṣẹ̀, jẹ́ kí a ní ìwà pẹ̀lú,<br>
        Jẹ́ kí a máa jẹ́ tìrẹ ní gbogbo àkókò,<br>
        Ràn wá lọwọ lati farada,<br>
        Ṣètò wa fún ìdánilójú tí o ṣe ìlérí.<br><br>

        5. Nílẹ̀ ìlú Rẹ, ní ilẹ̀ ọlọ́rọ,<br>
        A ó ma yìn, pẹ̀lú àgbáwọlé wa,<br>
        Ọ̀wọ́ Rẹ ní agbelebu,<br>
        Olúwa ti àwọn olúwa, àti Ọba àwọn ọba.<br><br>
      `,
      fr: `
        1. Pour ta miséricorde et ta grâce,<br>
        Fidèle à travers une autre année,<br>
        Écoute notre chant de reconnaissance ;<br>
        Jésus, notre Rédempteur, écoute.<br><br>

        2. Dans notre faiblesse et notre détresse,<br>
        Roc de force, sois notre soutien ;<br>
        Dans le désert sans chemin,<br>
        Sois notre Véritable et Vivant Chemin.<br><br>

        3. Qui parmi nous empruntera<br>
        La terrible route de la mort<br>
        Dans l'année à venir ?<br>
        Avec ta houle et ton bâton, ô Dieu,<br>
        Réconforte son lit de mort.<br><br>

        4. Fais-nous fidèles, garde-nous purs,<br>
        Garde-nous toujours à Toi,<br>
        Aide-nous, ô aide-nous à endurer,<br>
        Prépare-nous pour ta couronne promise.<br><br>

        5. Ainsi, dans les portes de ton palais,<br>
        Nous louerons, sur des cordes d'or,<br>
        Toi, l'unique Puissant,<br>
        Seigneur des seigneurs et Roi des rois.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a prayer of gratitude for God's mercy and grace, asking for His help and guidance through the coming year. It acknowledges His strength and the hope of eternal life with Him.",
      yo: "Hymn yi jẹ́ adúrà ìdúpẹ́ fún ọ̀fẹ́ àti ìyìn Ọlọrun, ní béèrè fún iranlọwọ Rẹ àti ìtọ́sọ́nà láti kọja ọdún tó ń bọ. O ṣàkíyèsí agbára Rẹ àti ireti ti ìyè t’ọ̀run pẹ̀lú Rẹ.",
      fr: "Ce cantique est une prière de reconnaissance pour la miséricorde et la grâce de Dieu, demandant Son aide et Sa direction pour l'année à venir. Il reconnaît Sa force et l'espérance de la vie éternelle avec Lui.",
      eg: "Hymn yi jẹ́ adúrà ìdúpẹ́ fún ọ̀fẹ́ àti ìyìn Ọlọrun, ní béèrè fún iranlọwọ Rẹ àti ìtọ́sọ́nà láti kọja ọdún tó ń bọ. O ṣàkíyèsí agbára Rẹ àti ireti ti ìyè t’ọ̀run pẹ̀lú Rẹ."
    }
  },
  22: {  // Hymn 22 - Alleluia! Song of gladness
    title: {
      en: "Alleluia! Song of gladness",
      yo: "Halleluya! Orin ìdùnnú",
      fr: "Alléluia ! Chanson de joie"
    },
    lyrics: {
      en: `
        1. Alleluia! Song of gladness,<br>
        Voice of everlasting joy!<br>
        Alleluia! Sound the sweetest,<br>
        Heard among the choirs on high;<br>
        Hymning in God’s blissful mansion<br>
        Day and night incessantly.<br><br>

        2. Alleluia! Church victorious;<br>
        Thou mayst lift the joyful strain,<br>
        Alleluia! song of triumph<br>
        Well befit the ransom of train;<br>
        While in exile we remain<br>
        Faint and feeble are our praise.<br><br>

        3. Alleluia! Song of gladness<br>
        Suit not always souls forlorn;<br>
        Alleluia! Sounds of sadness,<br>
        Midst our joyful strains are borne.<br>
        For in this dark world of sorrow,<br>
        We with tears our sins must mourn.<br><br>

        4. Praise with our prayers uniting,<br>
        Hear us, blessed Trinity!<br>
        Bring us to Thy blissful presence,<br>
        There the Paschal Lamb to see:<br>
        There to Thee our “Halleluia!”,<br>
        Singing everlastingly.<br><br>

        Amen.
      `,
      yo: `
        1. Halleluya! Orin ìdùnnú,<br>
        Ohùn ayọ̀ tító sílẹ̀,<br>
        Halleluya! Gbọ́ gbogbo ohun ti o dun,<br>
        Tó ń wá láàrin àwọn ẹgbẹ́ ọ̀run;<br>
        Yíyìn nínú ilé ìbùkún Ọlọ́run<br>
        Lákòókò ọjọ́ àti alẹ́ pẹ̀lú àkúnya.<br><br>

        2. Halleluya! Ìjọ́ tí ó ṣẹgun;<br>
        Iwọ yóò lè dákẹ́, fi ìyìn rẹ hàn,<br>
        Halleluya! Orin ayọ̀ tí ó ṣẹgun<br>
        Yóò dájú kí ìránṣé Rẹ rìn;<br>
        Níbi ti a ti ń bọ̀ nínú àjàkálẹ̀,<br>
        Kókó wa ní ìfé inú wa.<br><br>

        3. Halleluya! Orin ìdùnnú<br>
        Kò ṣẹ́ṣẹ̀ ni gbogbo ènìyàn;<br>
        Halleluya! Ahùn ìbànújẹ,<br>
        Lábè a àkọ́ọ̀kan àkúnya wa.<br>
        Níbi ayé yi tó kun fún ìbànújẹ,<br>
        A kó ìkúnà ati ẹ̀sùn wa.<br><br>

        4. Ẹ̀kúnrẹ́rẹ́ pẹ̀lú àdúrà wa,<br>
        Gbọ́ wa, Trinity aláyọ̀!<br>
        Gbé wa lọ sí ibè ẹ̀dá ayé rẹ,<br>
        Níbi ti Ọba Pasika wa yóó wà:<br>
        Níbi ti a ó fi “Halleluya!” wa ṣàríyàn,<br>
        Tí a ó fi kún àwọn ọ̀run ní àkúnya.<br><br>

        Amen.
      `,
      fr: `
        1. Alléluia ! Chanson de joie,<br>
        Voix de la joie éternelle !<br>
        Alléluia ! Son du plus doux,<br>
        Entendu parmi les chœurs d’en haut ;<br>
        Chantant dans la demeure bénie de Dieu,<br>
        Jour et nuit sans cesse.<br><br>

        2. Alléluia ! Église victorieuse ;<br>
        Tu peux élever le chant joyeux,<br>
        Alléluia ! Chant de triomphe,<br>
        Bien approprié au prix de la rédemption ;<br>
        Tandis que nous restons en exil,<br>
        Faible et fragile est notre louange.<br><br>

        3. Alléluia ! Chanson de joie,<br>
        Ne convient pas toujours aux âmes perdues ;<br>
        Alléluia ! Sons de tristesse,<br>
        Dans nos chants joyeux se mêlent.<br>
        Car dans ce monde sombre de douleur,<br>
        Nous pleurons nos péchés avec des larmes.<br><br>

        4. Loue avec nos prières unies,<br>
        Écoute-nous, Sainte Trinité !<br>
        Amène-nous dans ta présence béni,<br>
        Là, nous verrons l’Agneau Pascal :<br>
        Là, à Toi notre “Halleluya !”,<br>
        Chanté éternellement.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn celebrates the joy and triumph of the Christian faith, calling the faithful to sing songs of praise to God in every circumstance. It reflects on the eternal joy of God's presence, and the contrast between the suffering of the world and the ultimate victory of the redeemed.",
      yo: "Hymn yi yìn ayọ̀ àti ṣẹgun ìsìn Kristẹni, nǹkan tó ń pe gbogbo awọn alátìlẹyìn láti kọ orin ìyìn sí Ọlọ́run ni gbogbo ipo. O fi hàn pé ayọ̀ t’ọlọrun yóò tó pé, àti ìyípadà laarin ìdààmú ayé àti àṣeyọrí ti àwọn tó gba àdúrà.",
      fr: "Ce cantique célèbre la joie et le triomphe de la foi chrétienne, appelant les fidèles à chanter des chants de louange à Dieu dans toutes les circonstances. Il reflète la joie éternelle de la présence de Dieu, et le contraste entre la souffrance du monde et la victoire ultime des rachetés.",
      eg: "Hymn yi yìn ayọ̀ àti ṣẹgun ìsìn Kristẹni, nǹkan tó ń pe gbogbo awọn alátìlẹyìn láti kọ orin ìyìn sí Ọlọ́run ni gbogbo ipo. O fi hàn pé ayọ̀ t’ọlọrun yóò tó pé, àti ìyípadà laarin ìdààmú ayé àti àṣeyọrí ti àwọn tó gba àdúrà."
    }
  },
  23: {  // Hymn 23 - Let us with a gladsome mind
    title: {
      en: "Let us with a gladsome mind",
      yo: "Ẹ jẹ́ kí a pẹ̀lú ọkàn ayọ̀",
      fr: "Laissez-nous avec un esprit joyeux"
    },
    lyrics: {
      en: `
        1. Let us with a gladsome mind,<br>
        Praise the Lord for He is kind,<br>
        For His mercies aye endure,<br>
        Ever faithful, ever sure.<br><br>

        2. He with all-commanding might,<br>
        Filled the new-made world with light;<br>
        For His mercies aye endure,<br>
        Ever faithful, ever sure.<br><br>

        3. All things living He doth feed;<br>
        His full hand supplies their need:<br>
        For His mercies aye endure,<br>
        Ever faithful, ever sure.<br><br>

        4. He His chosen race did bless,<br>
        In the wasteful wilderness,<br>
        For His mercies aye endure,<br>
        Ever faithful, ever sure.<br><br>

        5. Let us, then with gladsome mind,<br>
        Praise the Lord, for He is kind:<br>
        For His mercies aye endure,<br>
        Ever faithful, ever sure.<br><br>

        Amen.
      `,
      yo: `
        1. Ẹ jẹ́ kí a pẹ̀lú ọkàn ayọ̀,<br>
        Yìn Ọlọ́run nítorí pé ó ṣeé ṣe,<br>
        Nítorí pé ìbùkún Rẹ̀ máa ń dúró,<br>
        Nípasẹ̀ ìfẹ́, nípasẹ̀ ìjọ̀ọ́rùn.<br><br>

        2. Ó pẹ̀lú agbára tó lágbára,<br>
        Tó fi ìmọ̀lẹ̀ kún ayé tuntun;<br>
        Nítorí pé ìbùkún Rẹ̀ máa ń dúró,<br>
        Nípasẹ̀ ìfẹ́, nípasẹ̀ ìjọ̀ọ́rùn.<br><br>

        3. Gbogbo ohun tí ń bẹ ló ń jẹ,<br>
        Ẹ̀dá rẹ̀ gbogbo ni ó ń fi ọwọ́ Rẹ̀ pa;<br>
        Nítorí pé ìbùkún Rẹ̀ máa ń dúró,<br>
        Nípasẹ̀ ìfẹ́, nípasẹ̀ ìjọ̀ọ́rùn.<br><br>

        4. Ó bùkún ìran Rẹ̀ tó yàn,<br>
        Ní ọ̀nà pẹ̀lú ikúfẹ̀dá,<br>
        Nítorí pé ìbùkún Rẹ̀ máa ń dúró,<br>
        Nípasẹ̀ ìfẹ́, nípasẹ̀ ìjọ̀ọ́rùn.<br><br>

        5. Nígbà náà, ẹ jẹ́ kí a pẹ̀lú ọkàn ayọ̀,<br>
        Yìn Ọlọ́run nítorí pé ó ṣeé ṣe:<br>
        Nítorí pé ìbùkún Rẹ̀ máa ń dúró,<br>
        Nípasẹ̀ ìfẹ́, nípasẹ̀ ìjọ̀ọ́rùn.<br><br>

        Amen.
      `,
      fr: `
        1. Laissez-nous avec un esprit joyeux,<br>
        Louer le Seigneur car Il est bon,<br>
        Car Ses miséricordes durent à jamais,<br>
        Toujours fidèle, toujours sûr.<br><br>

        2. Lui avec toute puissance,<br>
        A rempli le monde nouvellement fait de lumière ;<br>
        Car Ses miséricordes durent à jamais,<br>
        Toujours fidèle, toujours sûr.<br><br>

        3. Il nourrit toutes choses vivantes ;<br>
        Sa main pleine satisfait leurs besoins :<br>
        Car Ses miséricordes durent à jamais,<br>
        Toujours fidèle, toujours sûr.<br><br>

        4. Il bénit sa race choisie,<br>
        Dans le désert stérile,<br>
        Car Ses miséricordes durent à jamais,<br>
        Toujours fidèle, toujours sûr.<br><br>

        5. Louons donc le Seigneur avec un esprit joyeux,<br>
        Car Il est bon :<br>
        Car Ses miséricordes durent à jamais,<br>
        Toujours fidèle, toujours sûr.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn celebrates the unchanging faithfulness of God, calling all believers to praise Him for His eternal mercy, kindness, and provision. It invites us to reflect on God's provision in creation, His blessings for His chosen people, and His unfailing care for all.",
      yo: "Hymn yi yìn ìdánilójú aláìpẹ́lẹ́ Ọlọ́run, tó ń pe gbogbo àwọn olóòótọ́ láti yìn Ó nítorí ìbùkún Rẹ̀ tó pé, ìfẹ́, àti ìmúṣọ́rẹ́. O ń pe wa láti rántí ìmúṣọ́rẹ́ Ọlọ́run nínú ìdàgbàsókè, ìbùkún Rẹ̀ fún àwọn tó yàn, àti ìtọ́jú Rẹ̀ tó dájú fún gbogbo ẹ̀dá.",
      fr: "Ce cantique célèbre la fidélité inaltérable de Dieu, appelant tous les croyants à Le louer pour Sa miséricorde éternelle, Sa bonté et Sa provision. Il nous invite à réfléchir à la provision de Dieu dans la création, Ses bénédictions pour Son peuple choisi, et Son soin infaillible pour tous."
    }
  },
  24: {  // Hymn 24 - Since Christ my soul from sin set free
    title: {
      en: "Since Christ my soul from sin set free",
      yo: "Nígbà tí Kristi tọ́jú ẹ̀mí mi láti ìbànújẹ",
      fr: "Depuis que le Christ a libéré mon âme du péché"
    },
    lyrics: {
      en: `
        1. Since Christ my soul from sin set free,<br>
        This world has been heaven to me,<br>
        And mid earth’s sorrows and woe,<br>
        ‘Tis heaven my Jesus to know.<br><br>

        CHORUS:<br>
        Oh, halleluyah! yes, ’tis heaven,<br>
        ‘Tis heaven to know my sins forgiven,<br>
        On land or sea, what matters where?<br>
        Where Jesus is, it's heaven there.<br><br>

        2. Once heaven seemed a far off place,<br>
        Till Jesus showed His smiling face;<br>
        Now it’s begun within my soul,<br>
        ‘Twill last while endless ages roll.<br><br>

        CHORUS:<br>
        Oh, halleluyah! yes, ’tis heaven,<br>
        ‘Tis heaven to know my sins forgiven,<br>
        On land or sea, what matters where?<br>
        Where Jesus is, it's heaven there.<br><br>

        3. What matters where on earth we dwell?<br>
        On mountain top, or in the den?<br>
        In cottage, or a mansion fair;<br>
        Where Jesus is, ‘tis heaven there.<br><br>

        CHORUS:<br>
        Oh, halleluyah! yes, ’tis heaven,<br>
        ‘Tis heaven to know my sins forgiven,<br>
        On land or sea, what matters where?<br>
        Where Jesus is, it's heaven there.<br><br>

        Amen.
      `,
      yo: `
        1. Nígbà tí Kristi tọ́jú ẹ̀mí mi láti ìbànújẹ,<br>
        Ayé yìí ti di ọ̀run fún mi,<br>
        Ní àárín ìbànújẹ àti ìṣòro ilẹ̀ ayé,<br>
        Ọ̀run ni láti mọ̀ Jesu mi.<br><br>

        CHORUS:<br>
        Oh, halleluyah! béè ni, ọ̀run ni,<br>
        Ọ̀run ni láti mọ pé ẹ̀sùn mi ti jẹ́ mímọ́,<br>
        Lórílẹ̀-èdè tàbí okèèrè, kò ṣe pataki ibè?<br>
        Nibè Jesu wà, ọ̀run ni nibè.<br><br>

        2. Nígbà kan, ọ̀run dájú pé ó jìnà,<br>
        Títí Jesu fi fihan ojú rẹ̀ tí ń rẹ̀rìn-ín;<br>
        Ní báyìí, ó ti bẹ̀rẹ̀ nínú ọkàn mi,<br>
        Yóò tẹ̀síwájú ní gbogbo ìgbà.<br><br>

        CHORUS:<br>
        Oh, halleluyah! béè ni, ọ̀run ni,<br>
        Ọ̀run ni láti mọ pé ẹ̀sùn mi ti jẹ́ mímọ́,<br>
        Lórílẹ̀-èdè tàbí okèèrè, kò ṣe pataki ibè?<br>
        Nibè Jesu wà, ọ̀run ni nibè.<br><br>

        3. Kò ṣe pataki ibè ni ilẹ̀ ayé ti a n gbé?<br>
        Lori òkè, tàbí ní ibè a ṣe?<br>
        Nínú ilé, tàbí ìlú ọlá;<br>
        Nibè Jesu wà, ọ̀run ni nibè.<br><br>

        CHORUS:<br>
        Oh, halleluyah! béè ni, ọ̀run ni,<br>
        Ọ̀run ni láti mọ pé ẹ̀sùn mi ti jẹ́ mímọ́,<br>
        Lórílẹ̀-èdè tàbí okèèrè, kò ṣe pataki ibè?<br>
        Nibè Jesu wà, ọ̀run ni nibè.<br><br>

        Amen.
      `,
      fr: `
        1. Depuis que le Christ a libéré mon âme du péché,<br>
        Ce monde a été le ciel pour moi,<br>
        Et au milieu des peines et des malheurs de la terre,<br>
        C'est le ciel de connaître mon Jésus.<br><br>

        CHORUS:<br>
        Oh, halleluyah! oui, c'est le ciel,<br>
        C'est le ciel de savoir que mes péchés sont pardonnés,<br>
        Sur terre ou sur mer, peu importe où,<br>
        Là où Jésus est, c'est le ciel.<br><br>

        2. Autrefois, le ciel semblait un endroit lointain,<br>
        Jusqu'à ce que Jésus montre son visage souriant;<br>
        Maintenant, cela a commencé dans mon âme,<br>
        Cela durera tant que les âges sans fin rouleront.<br><br>

        CHORUS:<br>
        Oh, halleluyah! oui, c'est le ciel,<br>
        C'est le ciel de savoir que mes péchés sont pardonnés,<br>
        Sur terre ou sur mer, peu importe où,<br>
        Là où Jésus est, c'est le ciel.<br><br>

        3. Peu importe où nous vivons sur terre,<br>
        Sur le sommet de la montagne ou dans la tanière?<br>
        Dans une maison modeste ou un beau manoir;<br>
        Là où Jésus est, c'est le ciel.<br><br>

        CHORUS:<br>
        Oh, halleluyah! oui, c'est le ciel,<br>
        C'est le ciel de savoir que mes péchés sont pardonnés,<br>
        Sur terre ou sur mer, peu importe où,<br>
        Là où Jésus est, c'est le ciel.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn expresses the joy of knowing Jesus, and the peace that comes from the assurance that sins are forgiven. It emphasizes that heaven is not a distant place but can be experienced wherever Jesus is present in our hearts.",
      yo: "Hymn yi ṣe àfihàn ìyàlẹ́nu tó wà ní mọ̀ Jesu, àti ìkúnà tó ń bọ láti ìdánilójú pé ẹ̀sùn ti dákẹ̀. O ń fi hàn pé ọ̀run kì í ṣe ibi tó jìnà, ṣùgbọ́n a lè ní iriri rẹ̀ níbi gbogbo tí Jesu wà nínú ọkàn wa.",
      fr: "Ce cantique exprime la joie de connaître Jésus, et la paix qui découle de l'assurance que les péchés sont pardonnés. Il met l'accent sur le fait que le ciel n'est pas un endroit lointain, mais peut être vécu partout où Jésus est présent dans nos cœurs."
    }
  },
  25: {  // Hymn 25 - My soul is so happy in Jesus
    title: {
      en: "My soul is so happy in Jesus",
      yo: "Ẹ̀mí mi dùn púpọ̀ nínú Jesu",
      fr: "Mon âme est si heureuse en Jésus"
    },
    lyrics: {
      en: `
        1. My soul is so happy in Jesus,<br>
        For He is so precious to me,<br>
        His voice, it is music to hear it,<br>
        His face, it is heaven to see,<br><br>

        CHORUS:<br>
        I am happy in Him,<br>
        I am happy in Him,<br>
        My soul with delight He fill day and night,<br>
        For I am happy in Him.<br><br>

        2. He sought me so long and I knew Him,<br>
        When wandering afar from the fold,<br>
        Safe home in His arms He hath brought me,<br>
        To where there are pastures untold.<br><br>

        CHORUS:<br>
        I am happy in Him,<br>
        I am happy in Him,<br>
        My soul with delight He fill day and night,<br>
        For I am happy in Him.<br><br>

        3. His love and His mercy surround me,<br>
        His grace like river doth flow,<br>
        His Spirit, to guide and to comfort,<br>
        Is with me wherever I go,<br><br>

        CHORUS:<br>
        I am happy in Him,<br>
        I am happy in Him,<br>
        My soul with delight He fill day and night,<br>
        For I am happy in Him.<br><br>

        4. They say I shall some day be like Him,<br>
        My cross and my burden lay down,<br>
        Till then I will ever be faithful,<br>
        In gathering gems for His crown.<br><br>

        CHORUS:<br>
        I am happy in Him,<br>
        I am happy in Him,<br>
        My soul with delight He fill day and night,<br>
        For I am happy in Him.<br><br>

        Amen.
      `,
      yo: `
        1. Ẹ̀mí mi dùn púpọ̀ nínú Jesu,<br>
        Nítorí pé ó wulẹ̀ jẹ́ ọlọ́rọ̀ fún mi,<br>
        Ohùn rẹ, ó jẹ́ orin láti gbọ́,<br>
        Ojúlùmọ̀ rẹ, ó jẹ́ ọ̀run láti rí.<br><br>

        CHORUS:<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Ẹ̀mí mi ń kun fun ayọ̀, lọ́jọ́ àti alẹ́,<br>
        Nítorí pé mo ń yọ̀ nínú Rẹ.<br><br>

        2. Ó wá mi pẹ́lú ìfẹ́, mo sì mọ̀ Ó,<br>
        Nígbà tí mo ń rìn jìnà kúrò nípa,<br>
        Ní ọwọ́ Rẹ̀ mo ti lọ sí ilé mi ààbò,<br>
        Síbi tí agbègbè ń bẹ ti a kò le sọ.<br><br>

        CHORUS:<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Ẹ̀mí mi ń kun fun ayọ̀, lọ́jọ́ àti alẹ́,<br>
        Nítorí pé mo ń yọ̀ nínú Rẹ.<br><br>

        3. Ìfẹ́ Rẹ̀ àti aanu Rẹ̀ yí mi ká,<br>
        Òrò Rẹ̀ bí odò ń sẹlẹ,<br>
        Ẹ̀mí Rẹ̀, láti daríjì àti láti tọ́jú,<br>
        Wà pẹ̀lú mi níbi gbogbo tí mo bá lọ,<br><br>

        CHORUS:<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Ẹ̀mí mi ń kun fun ayọ̀, lọ́jọ́ àti alẹ́,<br>
        Nítorí pé mo ń yọ̀ nínú Rẹ.<br><br>

        4. Wọ́n sọ pé ọjọ́ kan, mo máa dàbí Rẹ,<br>
        Kí n tó ṣe àwọn ìrora àti ẹrù mi,<br>
        Títí di igba yẹn, emi yóò máa jẹ́ olóòótọ́,<br>
        Ní kó ẹ̀rù àwọn òkèèrè fun ẹ̀ṣọ́ Rẹ.<br><br>

        CHORUS:<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Mo ń yọ̀ nínú Rẹ,<br>
        Ẹ̀mí mi ń kun fun ayọ̀, lọ́jọ́ àti alẹ́,<br>
        Nítorí pé mo ń yọ̀ nínú Rẹ.<br><br>

        Amen.
      `,
      fr: `
        1. Mon âme est si heureuse en Jésus,<br>
        Car Il est si précieux pour moi,<br>
        Sa voix, c'est de la musique à entendre,<br>
        Son visage, c'est le ciel à voir.<br><br>

        CHORUS:<br>
        Je suis heureux en Lui,<br>
        Je suis heureux en Lui,<br>
        Mon âme, avec délice, Il la remplit jour et nuit,<br>
        Car je suis heureux en Lui.<br><br>

        2. Il m'a cherché si longtemps et je L'ai connu,<br>
        Lorsque je m'éloignais du troupeau,<br>
        Il m'a ramené en toute sécurité dans Ses bras,<br>
        Là où il y a des pâturages innombrables.<br><br>

        CHORUS:<br>
        Je suis heureux en Lui,<br>
        Je suis heureux en Lui,<br>
        Mon âme, avec délice, Il la remplit jour et nuit,<br>
        Car je suis heureux en Lui.<br><br>

        3. Son amour et Sa miséricorde m'entourent,<br>
        Sa grâce coule comme un fleuve,<br>
        Son Esprit, pour guider et réconforter,<br>
        Est avec moi partout où je vais.<br><br>

        CHORUS:<br>
        Je suis heureux en Lui,<br>
        Je suis heureux en Lui,<br>
        Mon âme, avec délice, Il la remplit jour et nuit,<br>
        Car je suis heureux en Lui.<br><br>

        4. Ils disent qu'un jour je serai comme Lui,<br>
        Mon croix et mon fardeau seront posés,<br>
        Jusque-là, je serai toujours fidèle,<br>
        En rassemblant des joyaux pour Sa couronne.<br><br>

        CHORUS:<br>
        Je suis heureux en Lui,<br>
        Je suis heureux en Lui,<br>
        Mon âme, avec délice, Il la remplit jour et nuit,<br>
        Car je suis heureux en Lui.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn expresses the joy and happiness found in a relationship with Jesus. The lyrics speak of the comfort, love, and guidance found in Him, and the anticipation of being made like Him in the future.",
      yo: "Hymn yi fi hàn ìyàlẹ́nu àti ayọ̀ tó wà nínú ìbáṣepọ̀ pẹ̀lú Jesu. Orin naa sọ nípa ìtùnú, ìfẹ́, àti ìtọ́sọ́nà tó wà nínú Rẹ̀, àti ìretí pé a máa dàbí Rẹ̀ ní ọjọ́ iwájú.",
      fr: "Ce cantique exprime la joie et le bonheur trouvés dans une relation avec Jésus. Les paroles parlent du confort, de l'amour et de la direction trouvés en Lui, ainsi que de l'anticipation de devenir semblable à Lui dans le futur."
    }
  },
  26: {  // Hymn 26 - Thank you for thy precious love
    title: {
      en: "Thank you for thy precious love",
      yo: "Ẹ ṣé fún ìfẹ́ Rẹ tó ṣeé ṣe",
      fr: "Merci pour ton amour précieux"
    },
    lyrics: {
      en: `
        1. There’s a great day coming,<br>
        A great day coming,<br>
        There’s a great day coming by and by!<br>
        When the saints and the sinners shall be parted right and left.<br>
        Are you ready for that day to come?<br><br>

        CHORUS:<br>
        Are you ready? Are you ready?<br>
        Are you ready for the judgement day<br>
        Are you ready? Are you ready?<br>
        For the judgement day.<br><br>

        2. There’s a bright day coming,<br>
        A bright day coming,<br>
        There’s a bright day coming by and by,<br>
        But its brightness shall only come to them that love the Lord,<br>
        Are you ready for that day to come?<br><br>

        CHORUS:<br>
        Are you ready? Are you ready?<br>
        Are you ready for the judgement day<br>
        Are you ready? Are you ready?<br>
        For the judgement day.<br><br>

        3. There’s a sad day coming,<br>
        A sad day coming,<br>
        There’s a sad day coming by and by,<br>
        When the sinner shall hear his doom: “Depart I know you not”<br>
        Are you ready for that day to come?<br><br>

        CHORUS:<br>
        Are you ready? Are you ready?<br>
        Are you ready for the judgement day<br>
        Are you ready? Are you ready?<br>
        For the judgement day.<br><br>

        Amen.
      `,
      yo: `
        1. Ọjọ́ ń bọ̀ tóbi,<br>
        Ọjọ́ ń bọ̀ tóbi,<br>
        Ọjọ́ ń bọ̀ tóbi ní ọjọ́ kan!<br>
        Níbi tí àwọn mímọ́ àti awọn ẹlẹ́sìn yóò yàtọ̀ ní ẹ̀tọ́ àti osi.<br>
        Ṣé o setán fún ọjọ́ yẹn?<br><br>

        CHORUS:<br>
        Ṣé o setán? Ṣé o setán?<br>
        Ṣé o setán fún ọjọ́ ìdájọ́<br>
        Ṣé o setán? Ṣé o setán?<br>
        Fún ọjọ́ ìdájọ́.<br><br>

        2. Ọjọ́ tó mọ́ni ń bọ̀,<br>
        Ọjọ́ tó mọ́ni ń bọ̀,<br>
        Ọjọ́ tó mọ́ni ń bọ̀ ní ọjọ́ kan,<br>
        Ṣùgbọ́n ìmọ̀lẹ̀ rẹ̀ yóò dé pẹ̀lú àwọn tó fẹ́ràn Olúwa,<br>
        Ṣé o setán fún ọjọ́ yẹn?<br><br>

        CHORUS:<br>
        Ṣé o setán? Ṣé o setán?<br>
        Ṣé o setán fún ọjọ́ ìdájọ́<br>
        Ṣé o setán? Ṣé o setán?<br>
        Fún ọjọ́ ìdájọ́.<br><br>

        3. Ọjọ́ ìbànújẹ ń bọ̀,<br>
        Ọjọ́ ìbànújẹ ń bọ̀,<br>
        Ọjọ́ ìbànújẹ ń bọ̀ ní ọjọ́ kan,<br>
        Níbi tí ẹlẹ́ṣẹ̀ yóò gbọ́ ìdájọ́ rẹ̀: "Kúrò, mi ò mọ̀ yín"<br>
        Ṣé o setán fún ọjọ́ yẹn?<br><br>

        CHORUS:<br>
        Ṣé o setán? Ṣé o setán?<br>
        Ṣé o setán fún ọjọ́ ìdájọ́<br>
        Ṣé o setán? Ṣé o setán?<br>
        Fún ọjọ́ ìdájọ́.<br><br>

        Amen.
      `,
      fr: `
        1. Il y a un grand jour qui arrive,<br>
        Un grand jour qui arrive,<br>
        Il y a un grand jour qui arrive bientôt !<br>
        Quand les saints et les pécheurs seront séparés à droite et à gauche.<br>
        Es-tu prêt pour ce jour qui arrive ?<br><br>

        CHORUS:<br>
        Es-tu prêt ? Es-tu prêt ?<br>
        Es-tu prêt pour le jour du jugement<br>
        Es-tu prêt ? Es-tu prêt ?<br>
        Pour le jour du jugement.<br><br>

        2. Il y a un jour lumineux qui arrive,<br>
        Un jour lumineux qui arrive,<br>
        Il y a un jour lumineux qui arrive bientôt,<br>
        Mais sa clarté ne viendra qu'à ceux qui aiment le Seigneur,<br>
        Es-tu prêt pour ce jour qui arrive ?<br><br>

        CHORUS:<br>
        Es-tu prêt ? Es-tu prêt ?<br>
        Es-tu prêt pour le jour du jugement<br>
        Es-tu prêt ? Es-tu prêt ?<br>
        Pour le jour du jugement.<br><br>

        3. Il y a un jour triste qui arrive,<br>
        Un jour triste qui arrive,<br>
        Il y a un jour triste qui arrive bientôt,<br>
        Quand le pécheur entendra son verdict : "Pars, je ne te connais pas"<br>
        Es-tu prêt pour ce jour qui arrive ?<br><br>

        CHORUS:<br>
        Es-tu prêt ? Es-tu prêt ?<br>
        Es-tu prêt pour le jour du jugement<br>
        Es-tu prêt ? Es-tu prêt ?<br>
        Pour le jour du jugement.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn speaks of the coming of the judgement day, urging listeners to prepare themselves spiritually. It poses a direct question: 'Are you ready for that day to come?' emphasizing the importance of being ready for Christ's return.",
      yo: "Hymn yi sọ̀rọ̀ nípa ọjọ́ ìdájọ́ tó ń bọ̀, tó ń pe àwọn olùgbọ́ láti mura sílẹ̀ ní ẹ̀mí. Ó fi ìbéèrè taara sílẹ̀: 'Ṣé o setán fún ọjọ́ yẹn?' tó fi hàn pé o ṣe pàtàkì láti mura sílẹ̀ fún ìpadà Jesu.",
      fr: "Ce cantique parle du jour du jugement à venir, encourageant les auditeurs à se préparer spirituellement. Il pose une question directe : 'Es-tu prêt pour ce jour qui arrive ?' en soulignant l'importance d'être prêt pour le retour du Christ."
    }
  },
  27: {  // Hymn 27 - Once my eyes were blind to the beauty of the Lord
    title: {
      en: "Once my eyes were blind to the beauty of the Lord",
      yo: "Nígbà tí ojú mi kò rí ìwòran Olúwa",
      fr: "Autrefois mes yeux étaient aveugles à la beauté du Seigneur"
    },
    lyrics: {
      en: `
        1. Once my eyes were blind to the beauty of the Lord,<br>
        Once my ears were close to the pleading of His word,<br>
        Once these hands of mine pressed the thorn crown on His brow,<br>
        But all this He has forgiven me and it’s alright now.<br><br>

        CHORUS:<br>
        Yes it’s all right now, yes it’s all right now,<br>
        He has heard my prayer, and it’s all right now,<br>
        Yes it’s all right now, yes it’s all right now,<br>
        All my sins are covered and it’s all right now.<br><br>

        2. Once I loved the world with it’s glitter and its show<br>
        I was captive held with the pleasure here below,<br>
        But one day He came, though I cannot tell you how,<br>
        With His blood my sins He covered, and it’s all right now.<br><br>

        CHORUS:<br>
        Yes it’s all right now, yes it’s all right now,<br>
        He has heard my prayer, and it’s all right now,<br>
        Yes it’s all right now, yes it’s all right now,<br>
        All my sins are covered and it’s all right now.<br><br>

        3. Oh, it is so precious to be alone with Him!<br>
        When the shadows fall and my eyes with tears are dim,<br>
        Just to feel His hands rest in love upon my brow,<br>
        And to hear Him gently whisper, ‘It is all right now.’<br><br>

        CHORUS:<br>
        Yes it’s all right now, yes it’s all right now,<br>
        He has heard my prayer, and it’s all right now,<br>
        Yes it’s all right now, yes it’s all right now,<br>
        All my sins are covered and it’s all right now.
      `,
      yo: `
        1. Nígbà tí ojú mi kò rí ìwòran Olúwa,<br>
        Nígbà tí etí mi kò gbọ́ ìkéde Ọ̀rọ̀ Rẹ,<br>
        Nígbà tí ọwọ́ mi tẹ́kùn àjàkálẹ̀ òkè lórí orí Rẹ,<br>
        Ṣùgbọ́n gbogbo èyí ni Ó dá mi lóhùn, ó sì dára báyìí.<br><br>

        CHORUS:<br>
        Béè ni, ó dára báyìí, béè ni, ó dára báyìí,<br>
        Ó gbọ́ adúrà mi, ó sì dára báyìí,<br>
        Béè ni, ó dára báyìí, béè ni, ó dára báyìí,<br>
        Gbogbo ẹ̀ṣẹ̀ mi ni a bo, ó sì dára báyìí.<br><br>

        2. Nígbà tí mo nífẹ̀ẹ́ ayé pẹ̀lú didan rẹ àti àfihàn rẹ<br>
        Mo wà lára ìdákẹ́jẹ́ pẹ̀lú ìfẹ̀ tó wà níhàlẹ̀ yìí,<br>
        Ṣùgbọ́n ọjọ́ kan, Ó wá, bí ó ti wù kí nìkan ò lè sọ báyìí,<br>
        Pẹ̀lú ẹ̀jẹ̀ Rẹ, ó bo ẹ̀ṣẹ̀ mi, ó sì dára báyìí.<br><br>

        CHORUS:<br>
        Béè ni, ó dára báyìí, béè ni, ó dára báyìí,<br>
        Ó gbọ́ adúrà mi, ó sì dára báyìí,<br>
        Béè ni, ó dára báyìí, béè ni, ó dára báyìí,<br>
        Gbogbo ẹ̀ṣẹ̀ mi ni a bo, ó sì dára báyìí.<br><br>

        3. Ó dára gan-an láti wà pẹ̀lú Rẹ nìkan!<br>
        Nígbà tí ojú-òjò bá ròyìn àti ojú mi tí ń bọ̀rọ̀ pẹ̀lú ẹ̀kún,<br>
        Káwọn ọwọ́ Rẹ sinmi pẹ̀lú ìfẹ̀ lórí orí mi,<br>
        Kó sì jẹ́ kí n gbọ́ àwọn ọrọ̀ Rẹ pẹ̀lú ìmọ̀lára pé, ‘Ó dára báyìí.’<br><br>

        CHORUS:<br>
        Béè ni, ó dára báyìí, béè ni, ó dára báyìí,<br>
        Ó gbọ́ adúrà mi, ó sì dára báyìí,<br>
        Béè ni, ó dára báyìí, béè ni, ó dára báyìí,<br>
        Gbogbo ẹ̀ṣẹ̀ mi ni a bo, ó sì dára báyìí.
      `,
      fr: `
        1. Autrefois mes yeux étaient aveugles à la beauté du Seigneur,<br>
        Autrefois mes oreilles étaient fermées aux supplications de Sa parole,<br>
        Autrefois mes mains pressaient la couronne d'épines sur Son front,<br>
        Mais tout cela Il m'a pardonné et tout va bien maintenant.<br><br>

        CHORUS:<br>
        Oui, tout va bien maintenant, oui, tout va bien maintenant,<br>
        Il a entendu ma prière, et tout va bien maintenant,<br>
        Oui, tout va bien maintenant, oui, tout va bien maintenant,<br>
        Tous mes péchés sont couverts et tout va bien maintenant.<br><br>

        2. Autrefois j'aimais le monde avec ses paillettes et ses spectacles<br>
        J'étais captif des plaisirs ici-bas,<br>
        Mais un jour Il est venu, bien que je ne puisse pas vous dire comment,<br>
        Avec Son sang, Il a couvert mes péchés, et tout va bien maintenant.<br><br>

        CHORUS:<br>
        Oui, tout va bien maintenant, oui, tout va bien maintenant,<br>
        Il a entendu ma prière, et tout va bien maintenant,<br>
        Oui, tout va bien maintenant, oui, tout va bien maintenant,<br>
        Tous mes péchés sont couverts et tout va bien maintenant.<br><br>

        3. Oh, il est si précieux d'être seul avec Lui !<br>
        Quand les ombres tombent et que mes yeux sont remplis de larmes,<br>
        Juste pour sentir Ses mains reposer amoureusement sur mon front,<br>
        Et pour L'entendre chuchoter doucement, ‘Tout va bien maintenant.’<br><br>

        CHORUS:<br>
        Oui, tout va bien maintenant, oui, tout va bien maintenant,<br>
        Il a entendu ma prière, et tout va bien maintenant,<br>
        Oui, tout va bien maintenant, oui, tout va bien maintenant,<br>
        Tous mes péchés sont couverts et tout va bien maintenant.
      `
    },
    writeUp: {
      en: "This hymn speaks of the transformative grace of Jesus Christ, emphasizing the forgiveness of sins and the peace found in His presence. It reflects on the journey from blindness to spiritual sight and from sin to redemption, with a constant refrain of 'It’s all right now.'",
      yo: "Hymn yi sọ̀rọ̀ nípa ìbágbépo ìyípadà tó wá láti ọwọ́ Jesu Kristi, tó ń fi ẹ̀jẹ̀ rẹ̀ hàn pé gbogbo ẹ̀ṣẹ̀ ti dariji, àti ìkànsí ìdùnnú tó wà nínú ìwàláàyè Rẹ. Ó fojú inú wọ̀lé láti àdánwò sí àdúrà, pẹ̀lú ẹsẹ̀ tó fi hàn pé 'Ó dára báyìí.'",
      fr: "Ce cantique parle de la grâce transformative de Jésus-Christ, soulignant le pardon des péchés et la paix trouvée dans Sa présence. Il reflète le passage de l'aveuglement à la vue spirituelle et du péché à la rédemption, avec un refrain constant : 'Tout va bien maintenant.'"
    }
  },
  28: {  // Hymn 28 - My heart was distressed ’neath Jehovah’s dread frown
    title: {
      en: "My heart was distressed ’neath Jehovah’s dread frown",
      yo: "Ọkàn mi ní ìbànújẹ́ lábé àfiyèsí Ọlọ́run",
      fr: "Mon cœur était bouleversé sous le regard terrible de Jéhovah"
    },
    lyrics: {
      en: `
        1. My heart was distressed ’neath Jehovah’s dread frown,<br>
        And low in the pit where my sins dragged me down;<br>
        I cried to the Lord from the deep miry clay,<br>
        Who tenderly brought me out to golden day.<br><br>

        Refrain:<br>
        He brought me out of the miry clay,<br>
        He set my feet on the Rock to stay;<br>
        He puts a song in my soul today,<br>
        A song of praise, hallelujah!<br><br>

        2. He placed me upon the strong Rock by His side,<br>
        My steps were established and here I’ll abide;<br>
        No danger of falling while here I remain,<br>
        But stand by His grace until the crown I gain.<br><br>

        3. He gave me a song, ’twas a new song of praise;<br>
        By day and by night its sweet notes I will raise;<br>
        My heart’s overflowing, I’m happy and free;<br>
        I’ll praise my Redeemer, Who has rescued me.<br><br>

        4. I’ll sing of His wonderful mercy to me,<br>
        I’ll praise Him till all men His goodness shall see;<br>
        I’ll sing of salvation at home and abroad,<br>
        Till many shall hear the truth and trust in God.<br><br>

        5. I’ll tell of the pit, with its gloom and despair,<br>
        I’ll praise the dear Father, who answered my prayer;<br>
        I’ll sing my new song, the glad story of love,<br>
        Then join in the chorus with the saints above.
      `,
      yo: `
        1. Ọkàn mi ní ìbànújẹ́ lábé àfiyèsí Ọlọ́run,<br>
        Tí mo sì wà ní ihò tí ẹ̀ṣẹ̀ mi ti fa mi sílẹ̀;<br>
        Mo ké sí Olúwa láti inú etí ìlàjù,<br>
        Tó nífẹẹ̀ ṣe ìrànlọ́wọ́, ó sì mú mi wá sí ọjọ́ ọlá.<br><br>

        Refrain:<br>
        Ó mú mi jáde lára etí ìlàjù,<br>
        Ó dá ọwọ́ mi lórí Apata, kí n má bà a;<br>
        Ó fi orin kan sínú ọkàn mi lónìí,<br>
        Orin ìyìn, halelúyà!<br><br>

        2. Ó fi mi sínú Apata tó lagbara lẹ́gbẹ̀ẹ́ Rẹ,<br>
        Ìgbésẹ̀ mi ni a fi dá, mo sì máa wà níbẹ̀;<br>
        Kò sí ewu ìsọ̀kalẹ̀ níbi tí mo wà,<br>
        Ṣùgbọ́n mo dúró ní ìrẹ̀lànà Rẹ titi di ìkànsí àyá mi.<br><br>

        3. Ó fún mi ní orin, ó sì jẹ́ orin tuntun ti ìyìn;<br>
        Ní ọ̀sán àti ní alẹ́, èyí ni mo máa kó;<br>
        Ọkàn mi ń bọ̀pọ̀, mo sì ní ayọ̀ àti ìfẹ̀;<br>
        Màa yìn Olùkórè mi, Tó ti gbà mí là.<br><br>

        4. Màa kọ orin Rẹ tó ṣòro fún mi,<br>
        Màa yìn Rẹ titi di gbogbo ènìyàn ṣeé ṣe ìmúlòlùú Rẹ;<br>
        Màa kọ orin ìgbàlà nílé àti níta,<br>
        Títí gbogbo ènìyàn yóò gbọ́ òtítọ́, kí wọ́n sì fi ìgbàgbọ́ sí Ọlọ́run.<br><br>

        5. Màa sọ ìtàn ihò náà, pẹ̀lú ìbànújẹ́ àti ìbànújẹ́,<br>
        Màa yìn Baba ìfẹ̀, Tó dáhùn adúrà mi;<br>
        Màa kọ orin tuntun mi, ìtàn ìfẹ̀ tó dùn,<br>
        Kí n sì darapọ̀ pẹ̀lú àwọn ọmọ-ọba nù kí a máa yìn.<br>
      `,
      fr: `
        1. Mon cœur était bouleversé sous le regard terrible de Jéhovah,<br>
        Et tout bas dans le puits où mes péchés m'ont entraîné ;<br>
        J'ai crié vers le Seigneur du fond de l'argile boueuse,<br>
        Qui m'a tendrement sorti pour m'amener au jour doré.<br><br>

        Refrain:<br>
        Il m'a tiré de la boue,<br>
        Il a posé mes pieds sur le Rocher pour que je tienne ;<br>
        Il met une chanson dans mon âme aujourd'hui,<br>
        Un chant de louange, alléluia !<br><br>

        2. Il m'a placé sur le Rocher fort à Ses côtés,<br>
        Mes pas ont été établis et ici je demeurerai ;<br>
        Aucun danger de chute tant que je demeure ici,<br>
        Mais je tiendrai par Sa grâce jusqu'à ce que je gagne ma couronne.<br><br>

        3. Il m'a donné un chant, c'était un nouveau chant de louange ;<br>
        Le jour et la nuit, je lèverai ses douces notes ;<br>
        Mon cœur déborde, je suis heureux et libre ;<br>
        Je louerai mon Rédempteur, Qui m'a sauvé.<br><br>

        4. Je chanterai Sa merveilleuse miséricorde envers moi,<br>
        Je Le louerai jusqu'à ce que tous les hommes voient Sa bonté ;<br>
        Je chanterai le salut à la maison et à l'étranger,<br>
        Jusqu'à ce que beaucoup entendent la vérité et mettent leur foi en Dieu.<br><br>

        5. Je parlerai du puits, avec sa noirceur et son désespoir,<br>
        Je louerai le cher Père, Qui a répondu à ma prière ;<br>
        Je chanterai mon nouveau chant, la joyeuse histoire d'amour,<br>
        Puis je me joindrai au chœur avec les saints du ciel.
      `
    },
    writeUp: {
      en: "This hymn speaks of the joy and gratitude for God’s deliverance. From a life weighed down by sin to standing on the solid rock of salvation, it reflects on the new song placed in the soul, filled with praise and worship. The hymn ends with a commitment to spread the message of salvation and joy in Christ.",
      yo: "Hymn yi sọ̀rọ̀ nípa ayọ̀ àti ìdùnnú fún ìgbàlà Ọlọ́run. Láti ìgbé ayé tí ẹ̀ṣẹ̀ ṣe ìdàrú, dé ibi tí a ti dá sílẹ̀ lórí apata ìgbàlà, ó fojú inú wọ̀lé sí orin tuntun tí a fi sínú ọkàn, tí o kun fún ìyìn àti ìbọ̀wọ̀. Hymn yi parí pẹ̀lú ìlérí láti tan ìtàn ìgbàlà àti ìyọrísí ninu Kristi.",
      fr: "Ce cantique parle de la joie et de la gratitude pour la délivrance de Dieu. D'une vie accablée par le péché à se tenir sur le Rocher solide du salut, il reflète le nouveau chant placé dans l'âme, rempli de louange et d'adoration. Le cantique se termine par un engagement à répandre le message du salut et la joie en Christ."
    }
  },
  29: {  // Hymn 29 - We praise thee, O God
    title: {
      en: "We praise thee, O God",
      yo: "A dúpẹ́ fún Rẹ, Ọlọ́run",
      fr: "Nous Te louons, Ô Dieu"
    },
    lyrics: {
      en: `
        1. We praise thee, O God, for the Son of thy love,<br>
        for Jesus who died, and is now gone above.<br><br>

        Refrain:<br>
        Hallelujah! Thine the glory, hallelujah! Amen!<br>
        Hallelujah! Thine the glory, revive us again.<br><br>

        2. We praise thee, O God, for thy Spirit of light<br>
        who has shown us our Savior and scattered our night. [Refrain]<br><br>

        3. We praise thee, O God, for the joy thou hast giv’n<br>
        to thy saints in communion, these foretastes of heav’n. [Refrain]<br><br>

        4. Revive us again, fill each heart with thy love.<br>
        May each soul be rekindled with fire from above. [Refrain]
      `,
      yo: `
        1. A dúpẹ́ fún Rẹ, Ọlọ́run, fún Ọmọ ìfẹ́ Rẹ,<br>
        fún Jesu tó kú, ó sì ti lọ sí ọ̀run.<br><br>

        Refrain:<br>
        Halelúyà! Tí ìyìn jẹ́ Tí Rẹ, halelúyà! Àmín!<br>
        Halelúyà! Tí ìyìn jẹ́ Tí Rẹ, tún wa níyìn lẹ́ẹ̀kansi.<br><br>

        2. A dúpẹ́ fún Rẹ, Ọlọ́run, fún Ẹ̀mí Rẹ ti ìmọ̀lára,<br>
        Tó fi hàn wa Olúgbàlà wa, ó sì tú ìròhìn wa.<br>[Refrain]<br><br>

        3. A dúpẹ́ fún Rẹ, Ọlọ́run, fún ayọ̀ tí o fi fún wa,<br>
        fún àwọn olú-ṣé Rẹ nínú ìjọṣepọ̀, àwọn ìrẹsìyà ti ọ̀run.<br>[Refrain]<br><br>

        4. Tun wa níyìn lẹ́ẹ̀kansi, kún ọkan kọọkan pẹ̀lú ìfẹ́ Rẹ.<br>
        Kí ẹ̀dá kọọkan máa ni ìtàn-ọkàn náà pẹ̀lú iná láti ọ̀run.<br>[Refrain]
      `,
      fr: `
        1. Nous Te louons, Ô Dieu, pour le Fils de Ton amour,<br>
        pour Jésus qui est mort, et qui est maintenant monté au ciel.<br><br>

        Refrain:<br>
        Alléluia! A Toi la gloire, alléluia! Amen!<br>
        Alléluia! A Toi la gloire, ravive-nous encore.<br><br>

        2. Nous Te louons, Ô Dieu, pour Ton Esprit de lumière<br>
        qui nous a montré notre Sauveur et a dissipé notre nuit. [Refrain]<br><br>

        3. Nous Te louons, Ô Dieu, pour la joie que Tu as donnée<br>
        à Tes saints en communion, ces avant-goûts du ciel. [Refrain]<br><br>

        4. Ravive-nous encore, remplis chaque cœur de Ton amour.<br>
        Que chaque âme soit enflammée du feu d'en haut. [Refrain]
      `
    },
    writeUp: {
      en: "This hymn is a song of praise and renewal. It acknowledges the sacrifice of Jesus, the gift of the Holy Spirit, and the joy of fellowship with God’s saints. It also calls for revival and renewal of hearts through the Holy Spirit's fire.",
      yo: "Hymn yi jẹ́ orin ìyìn àti ìmúrasílẹ̀. Ó fi ọwọ́ sẹ́yìn ẹbọ Jesu, ẹ̀bùn Ẹ̀mí Mímọ́, àti ayọ̀ ìjọpọ̀ pẹ̀lú àwọn olùṣé Ọlọ́run. Ó tún pe fún ìmúrasílẹ̀ àti ìtún-ṣe ti ọkàn nípasẹ̀ iná Ẹ̀mí Mímọ́.",
      fr: "Ce cantique est une chanson de louange et de renouveau. Il reconnaît le sacrifice de Jésus, le don du Saint-Esprit et la joie de la communion avec les saints de Dieu. Il appelle également au réveil et au renouveau des cœurs par le feu du Saint-Esprit."
    }
  },
  30: {  // Hymn 30 - I will praise the Lord
    title: {
      en: "I will praise the Lord",
      yo: "Emi yóò yìn Olúwa",
      fr: "Je louerai le Seigneur"
    },
    lyrics: {
      en: `
        1. I will praise the Lord for His love to me;<br>
        I am washed in the blood of my Redeemer,<br>
        In the fount that flows at the cross so free,<br>
        I am washed in the blood of my Redeemer.<br><br>

        CHORUS:<br>
        Glory, glory, glory to the Lamb!<br>
        I am saved from sin and He makes me what I am;<br>
        Oh, glory, glory, glory to the Lamb!<br>
        I am washed in the blood of my Redeemer.<br><br>

        2. I am saved by grace to Him brought near,<br>
        I am washed in the blood of my Redeemer;<br>
        I would sing aloud that the world might hear;<br>
        I am washed in the blood of my Redeemer.<br><br>

        CHORUS:<br>
        Glory, glory, glory to the Lamb!<br>
        I am saved from sin and He makes me what I am;<br>
        Oh, glory, glory, glory to the Lamb!<br>
        I am washed in the blood of my Redeemer.<br><br>

        3. What a constant peace in my heart I feel!<br>
        I am washed in the blood of my Redeemer;<br>
        There’s a holy joy I can ne’er reveal<br>
        I am washed in the blood of my Redeemer.<br><br>

        CHORUS:<br>
        Glory, glory, glory to the Lamb!<br>
        I am saved from sin and He makes me what I am;<br>
        Oh, glory, glory, glory to the Lamb!<br>
        I am washed in the blood of my Redeemer.<br><br>

        4. I will lift up my voice while on earth I stay;<br>
        I am washed in the blood of my Redeemer;<br>
        Then my soul shall sing in the realms of day;<br>
        I am washed in the blood of my Redeemer.<br><br>

        CHORUS:<br>
        Glory, glory, glory to the Lamb!<br>
        I am saved from sin and He makes me what I am;<br>
        Oh, glory, glory, glory to the Lamb!<br>
        I am washed in the blood of my Redeemer.
      `,
      yo: `
        1. Emi yóò yìn Olúwa fún ìfẹ́ Rẹ sí mi;<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi,<br>
        Nínú ọ̀fà tó ṣiṣàn ní agbelebu tófẹ́,<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        CHORUS:<br>
        Ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo ti pàdánù ẹ̀ṣẹ̀ àti Ó ń ṣe mi gẹ́gẹ́ bí ẹni tí mo ṣe;<br>
        Ọ̀, ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        2. Mo ti gba àṣẹ láti bá Ọlọ́run wà nítorí ẹ̀bọ Rẹ;<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi;<br>
        Mo fẹ́ kọrin ní kíkán pé kí gbogbo ayé gbọ́;<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        CHORUS:<br>
        Ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo ti pàdánù ẹ̀ṣẹ̀ àti Ó ń ṣe mi gẹ́gẹ́ bí ẹni tí mo ṣe;<br>
        Ọ̀, ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        3. Kí ló ṣe pẹ̀lú ìkànsí ìkànsí kan nínú ọkàn mi!<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi;<br>
        Ìyọ̀rísí onígbẹ̀yà túmọ̀ si mi àti máa ṣe,<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        CHORUS:<br>
        Ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo ti pàdánù ẹ̀ṣẹ̀ àti Ó ń ṣe mi gẹ́gẹ́ bí ẹni tí mo ṣe;<br>
        Ọ̀, ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        4. Emi yóò gbé ohùn mi lókè nígbà tó bá jẹ́ pé nínú ayé ń bẹ;<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi;<br>
        Nígbà náà, ẹmi mi yóò kọrin nínú ilé-ọnà ọjọ́;<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.<br><br>

        CHORUS:<br>
        Ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo ti pàdánù ẹ̀ṣẹ̀ àti Ó ń ṣe mi gẹ́gẹ́ bí ẹni tí mo ṣe;<br>
        Ọ̀, ìyìn, ìyìn, ìyìn fún Olórun!<br>
        Mo wẹ́ nínú ẹ̀jẹ̀ Olúgbàlà mi.
      `,
      fr: `
        1. Je louerai le Seigneur pour Son amour envers moi;<br>
        Je suis lavé dans le sang de mon Rédempteur,<br>
        Dans la fontaine qui coule à la croix si librement,<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        CHOEUR:<br>
        Gloire, gloire, gloire à l'Agneau !<br>
        Je suis sauvé du péché et Il fait de moi ce que je suis ;<br>
        Oh, gloire, gloire, gloire à l'Agneau !<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        2. Je suis sauvé par grâce, amené près de Lui,<br>
        Je suis lavé dans le sang de mon Rédempteur ;<br>
        Je chanterai fort afin que le monde entende ;<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        CHOEUR:<br>
        Gloire, gloire, gloire à l'Agneau !<br>
        Je suis sauvé du péché et Il fait de moi ce que je suis ;<br>
        Oh, gloire, gloire, gloire à l'Agneau !<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        3. Quelle paix constante dans mon cœur je ressens !<br>
        Je suis lavé dans le sang de mon Rédempteur ;<br>
        Il y a une joie sainte que je ne peux révéler<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        CHOEUR:<br>
        Gloire, gloire, gloire à l'Agneau !<br>
        Je suis sauvé du péché et Il fait de moi ce que je suis ;<br>
        Oh, gloire, gloire, gloire à l'Agneau !<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        4. Je lèverai ma voix tant que je resterai sur terre ;<br>
        Je suis lavé dans le sang de mon Rédempteur ;<br>
        Alors mon âme chantera dans les royaumes du jour ;<br>
        Je suis lavé dans le sang de mon Rédempteur.<br><br>

        CHOEUR:<br>
        Gloire, gloire, gloire à l'Agneau !<br>
        Je suis sauvé du péché et Il fait de moi ce que je suis ;<br>
        Oh, gloire, gloire, gloire à l'Agneau !<br>
        Je suis lavé dans le sang de mon Rédempteur.
      `
    },
    writeUp: {
      en: "This hymn expresses deep gratitude for the cleansing power of Jesus' blood, acknowledging salvation, peace, and joy that come from being washed in His blood. It is a declaration of praise for the Redeemer's work in transforming lives.",
      yo: "Hymn yi fi ìbànújẹ́ tó jinlẹ̀ hàn fún agbára ìmọ̀ọ́lára ẹ̀jẹ̀ Jesu, tó ń mọ̀ wa di mimọ́. Ó dájú pé àgbàláyé, ìkànsí, àti ayọ̀ wa nípasẹ̀ ẹ̀jẹ̀ rẹ̀. Òun ni ìkílọ̀ yìn fún iṣẹ́ Olúgbàlà nínú ìyípadà àwọn ayé.",
      fr: "Ce cantique exprime une profonde gratitude pour le pouvoir purificateur du sang de Jésus, reconnaissant le salut, la paix et la joie qui viennent d'être lavé dans Son sang. C'est une déclaration de louange pour l'œuvre du Rédempteur dans la transformation des vies."
    }
  },
  
  31: {  // Hymn 31 - Ere Another Sabbath's Close
    title: {
      en: "Ere Another Sabbath's Close",
      yo: "Ṣáájú Tí Sabátu Ọmọnìkà Á Ti Parí",
      fr: "Avant la Fin de ce Sabbat"
    },
    lyrics: {
      en: `
        1. Ere another Sabbath's close,<br>
        Ere again we seek repose,<br>
        Lord! our song ascends to thee;<br>
        At thy feet we bow the knee.<br><br>

        2. For the mercies of the day,<br>
        For this rest upon our day,<br>
        Thanks to thee alone be given,<br>
        Lord of earth, and King of heaven!<br><br>

        3. Whilst this thorny path we tread,<br>
        May thy love our footsteps lead,<br>
        When our journey here is past,<br>
        May we rest with thee at last.<br><br>

        4. Let these earthly Sabbaths prove<br>
        Foretastes of our joys above;<br>
        While their steps thy pilgrims bend<br>
        To the rest which knows no end.
      `,
      yo: `
        1. Ṣáájú tí sabátu ọmọnìkà á ti parí,<br>
        Ṣáájú pé a tún máa wá àrà,<br>
        Olúwa! orin wa ń lọ sí iwájú rẹ;<br>
        Ní ẹsẹ̀ rẹ ni a fi orí wa sún.<br><br>

        2. Fun ìbùkún ti ọjọ́,<br>
        Fun ìsinmi lórí ọjọ́ wa,<br>
        Ọpẹ́ ni fún ọ nikan,<br>
        Olúwa ilẹ̀ àti Ọba ọ̀run!<br><br>

        3. Nígbàtí a bá n rin ọ̀nà ìkẹ́yìn yìí,<br>
        Kí ìfẹ́ rẹ darí wa,<br>
        Nígbà tí ìrìn àjò wa bá ti parí,<br>
        Kí a sinmi pẹ̀lú rẹ ní ìkẹyìn.<br><br>

        4. Jẹ́ kí àwọn sabátu ilẹ̀ yìí fi hàn<br>
        Ohun ìjẹ́wọ́ àwọn ìyọ̀rísí wa ní ọ̀run;<br>
        Nígbà tí àwọn olùrìn rẹ bá n rin,<br>
        Láti sùn ní àlááfíà tí kò ní parí.
      `,
      fr: `
        1. Avant la fin de ce Sabbat,<br>
        Avant de chercher à nouveau le repos,<br>
        Seigneur! notre chant monte vers Toi;<br>
        À Tes pieds nous nous inclinons.<br><br>

        2. Pour les miséricordes de ce jour,<br>
        Pour ce repos dans notre jour,<br>
        Merci à Toi seul,<br>
        Seigneur de la terre et Roi des cieux!<br><br>

        3. Tandis que nous cheminons sur ce sentier épineux,<br>
        Que Ton amour guide nos pas,<br>
        Lorsque notre voyage ici-bas sera terminé,<br>
        Que nous reposions avec Toi à jamais.<br><br>

        4. Que ces Sabbats terrestres soient<br>
        Des avant-goûts de nos joies célestes;<br>
        Tandis que leurs pas mènent Tes pèlerins<br>
        Au repos qui ne connaît pas de fin.
      `
    },
    writeUp: {
      en: "This hymn expresses a deep sense of gratitude for the mercies of the day and the peace of the Sabbath, reflecting on the journey of life and the eternal rest that awaits in the presence of God.",
      yo: "Hymn yi fi ìbànújẹ́ tó jinlẹ̀ hàn fún ìbùkún ọjọ́ àti ìsinmi sabátu, tó ń rántí ìrìn àjò ayé àti ìsinmi àìníparí tí ó ń bẹ nínú ìwàláàyè Ọlọ́run.",
      fr: "Ce cantique exprime un profond sentiment de gratitude pour les miséricordes du jour et la paix du Sabbat, en réfléchissant sur le voyage de la vie et le repos éternel qui attend dans la présence de Dieu."
    }
  },
  32: {  // Hymn 32 - Jesus, We Assembled
    title: {
      en: "Jesus, We Assembled",
      yo: "Jesu, A dájọ́pọ̀ wa",
      fr: "Jésus, Nous Nous Sommes Assemblés"
    },
    lyrics: {
      en: `
        1. Jesus, we love to meet<br>
        On this, your holy day;<br>
        We worship round your seat<br>
        On this, your holy day.<br>
        O tender heav'nly friend,<br>
        To you our prayers ascend;<br>
        Over our spirits bend<br>
        On this, your holy day.<br><br>

        2. We dare not trifle now<br>
        On this, your holy day;<br>
        In silent awe we bow<br>
        On this, your holy day.<br>
        Check ev'ry wand'ring thought,<br>
        And let us all be taught<br>
        To serve you as we ought<br>
        On this, your holy day.<br><br>

        3. We listen to your word<br>
        On this, your holy day;<br>
        Bless all that we have heard<br>
        On this, your holy day.<br>
        Go with us when we part,<br>
        And to each longing heart<br>
        Your saving grace impart<br>
        On this, your holy day.
      `,
      yo: `
        1. Jesu, a nífẹ̀ẹ́ láti pàdé<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ;<br>
        A ń bọ́ àdúrà ni àjò rẹ<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ.<br>
        Ọrẹ́ ọ̀rẹ́ òrun,<br>
        A ń fi àdúrà wa sùn;<br>
        Gbogbo ẹmi wa ni a f'ọwọ́ rẹ<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ.<br><br>

        2. A kò ní ṣòro ní báyìí<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ;<br>
        Ní ìdákẹ́jẹ, a fi orí wa sún<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ.<br>
        Ṣayẹwo gbogbo ìmọ̀lára yìí,<br>
        Kí a lè kó ẹ̀kọ́ kó tọ́<br>
        Láti ṣe ìjọba rẹ gẹ́gẹ́ bí a ṣe yẹ<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ.<br><br>

        3. A ń tẹtí sí ọ̀rọ̀ rẹ<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ;<br>
        Ìbùkún fún gbogbo ohun tí a ti gbọ́<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ.<br>
        Lo pẹ̀lú wa nígbàtí a bá kúrò,<br>
        Kí o sì fi àánú rẹ fún gbogbo ọkan<br>
        Ní ọjọ́ yìí, ọjọ́ mímọ́ rẹ.
      `,
      fr: `
        1. Jésus, nous aimons nous rencontrer<br>
        En ce jour saint que Tu as fait;<br>
        Nous adorons autour de ton trône<br>
        En ce jour saint que Tu as fait.<br>
        Ô tendre ami céleste,<br>
        Nos prières montent vers Toi;<br>
        Incline-toi sur nos esprits<br>
        En ce jour saint que Tu as fait.<br><br>

        2. Nous n'osons pas jouer<br>
        En ce jour saint que Tu as fait;<br>
        Dans un respect silencieux, nous nous inclinons<br>
        En ce jour saint que Tu as fait.<br>
        Vérifie chaque pensée errante,<br>
        Et que nous soyons tous enseignés<br>
        À Te servir comme nous devons<br>
        En ce jour saint que Tu as fait.<br><br>

        3. Nous écoutons ta parole<br>
        En ce jour saint que Tu as fait;<br>
        Bénis tout ce que nous avons entendu<br>
        En ce jour saint que Tu as fait.<br>
        Va avec nous quand nous nous séparons,<br>
        Et à chaque cœur désirant,<br>
        Accorde ta grâce salvatrice<br>
        En ce jour saint que Tu as fait.
      `
    },
    writeUp: {
      en: "This hymn expresses reverence for the holiness of the Sabbath, encouraging believers to reflect, worship, and seek God's guidance and blessings on His holy day.",
      yo: "Hymn yi ń ṣàfihàn ìbàdíṣé fún mímọ́ sabátu, tí ó ń kọ́ àwọn olùgbọ́rọ̀ pé kí wọ́n rántí, kí wọ́n bẹ̀rẹ̀ ìjọsìn, kí wọ́n sì wá ìtọ́nisọ́nà àti ìbùkún Ọlọ́run ní ọjọ́ mímọ́ Rẹ.",
      fr: "Ce cantique exprime la révérence pour la sainteté du Sabbat, encourageant les croyants à réfléchir, adorer et chercher la direction et les bénédictions de Dieu en ce jour saint."
    }
  },
  33: {  // Hymn 33 - We All Love to See Thee
    title: {
      en: "We All Love to See Thee",
      yo: "A fẹ́ràn láti rí I",
      fr: "Nous Aimons Tous Te Voir"
    },
    lyrics: {
      en: `
        1. We all love to see Thee,<br>
        O thou, good sabbath day;<br>
        All the days of the week inquire,<br>
        How long wilt thou tarry?<br><br>

        2. Thou teacheth us to know,<br>
        That Christ rose from the dead;<br>
        All the days of the week inquire,<br>
        How long wilt thou tarry?<br><br>

        3. Thou telleth of Thy power,<br>
        As Jesus rose from dead;<br>
        All the days of the week inquire,<br>
        How long wilt thou tarry?<br><br>

        4. Thou speak of living rest,<br>
        In the city of peace;<br>
        For all blessed saints in Jesus,<br>
        How long wilt thou tarry?
      `,
      yo: `
        1. Gbogbo wa fẹ́ràn láti rí I,<br>
        O, ọjọ́ sabátu tó dáa;<br>
        Gbogbo ọjọ́ ọ̀sẹ̀ ń béèrè,<br>
        Bawo ni o ṣe fẹ́ pé?<br><br>

        2. O kọ́ wa láti mọ,<br>
        Pé Kristi jí láti inú kú;<br>
        Gbogbo ọjọ́ ọ̀sẹ̀ ń béèrè,<br>
        Bawo ni o ṣe fẹ́ pé?<br><br>

        3. O sọ fún wa nípa agbára Rẹ,<br>
        Bí Jesu ṣe jí láti inú kú;<br>
        Gbogbo ọjọ́ ọ̀sẹ̀ ń béèrè,<br>
        Bawo ni o ṣe fẹ́ pé?<br><br>

        4. O sọ nípa ìsinmi tí ń bẹ,<br>
        Nínú ìlú àlàáfíà;<br>
        Fún gbogbo àwọn ológo olùgbọ́ Rẹ ní Jesu,<br>
        Bawo ni o ṣe fẹ́ pé?
      `,
      fr: `
        1. Nous aimons tous te voir,<br>
        Ô toi, bon jour du sabbat;<br>
        Tous les jours de la semaine s'enquèrent,<br>
        Combien de temps tarderas-tu ?<br><br>

        2. Tu nous apprends à savoir,<br>
        Que Christ est ressuscité des morts;<br>
        Tous les jours de la semaine s'enquèrent,<br>
        Combien de temps tarderas-tu ?<br><br>

        3. Tu parles de ta puissance,<br>
        Comme Jésus est ressuscité des morts;<br>
        Tous les jours de la semaine s'enquèrent,<br>
        Combien de temps tarderas-tu ?<br><br>

        4. Tu parles du repos vivant,<br>
        Dans la ville de la paix;<br>
        Pour tous les saints bénis en Jésus,<br>
        Combien de temps tarderas-tu ?
      `
    },
    writeUp: {
      en: "This hymn expresses the longing for the Sabbath and the anticipation of Christ's resurrection, teaching believers about the power of His rising and the living rest that awaits them in the city of peace.",
      yo: "Hymn yi fi ìfẹ́ hàn fún sabátu àti ìrètí àdúróṣinṣin fun ìjiya Kristi, tó kọ́ àwọn olùgbọ́rọ̀ nípa agbára ìjíya Rẹ àti ìsinmi ìyè tí ń bẹ fún wọn ní ìlú àlàáfíà.",
      fr: "Ce cantique exprime le désir du Sabbat et l'attente de la résurrection du Christ, enseignant aux croyants le pouvoir de Sa résurrection et le repos vivant qui les attend dans la ville de la paix."
    }
  },
  34: {  // Hymn 34 - This is the Day of Light
    title: {
      en: "This is the Day of Light",
      yo: "Eyi ni Ọjọ́ Imọ́lẹ̀",
      fr: "C'est le Jour de la Lumière"
    },
    lyrics: {
      en: `
        1. This is the day of light:<br>
        Let there be light today;<br>
        O day-spring, rise upon our night<br>
        And chase its gloom away.<br><br>

        2. This is the day of rest:<br>
        Our failing strength renew;<br>
        On weary brain and troubled breast<br>
        Shed thou thy freshening dew.<br><br>

        3. This is the day of peace:<br>
        Thy peace our spirits fill;<br>
        Bid thou the blasts of discord cease,<br>
        The waves of strife be still.<br><br>

        4. This is the day of prayer:<br>
        Let earth to heaven draw near;<br>
        Lift up our hearts to seek thee there,<br>
        Come down to meet us here.<br><br>

        5. This is the first of days;<br>
        Send forth thy quickening breath,<br>
        And wake dead souls to love.
      `,
      yo: `
        1. Eyi ni Ọjọ́ Imọ́lẹ̀:<br>
        Jẹ́ kí ìmọ́lẹ̀ wa lónìí;<br>
        Ọjọ́ ìtàkùn, dákẹ̀ tí ó wọ̀yà lórí òru wa<br>
        Kó ẹ̀jẹ́ rẹ̀ kúrò nínú òru.<br><br>

        2. Eyi ni Ọjọ́ ìsinmi:<br>
        Tún gbogbo agbára wa,<br>
        Lórí ọpọlọ tí ó rẹ́rè àti ẹ̀dá tí ó ní ìṣòro<br>
        Sìn òjò tuntun tí ń pọn wa.<br><br>

        3. Eyi ni Ọjọ́ aláàáfíà:<br>
        Aláàáfíà Rẹ̀ kún ọkàn wa;<br>
        Paṣẹ fun ìfojúsùn gbogbo ìbáṣepọ̀ tí ń ṣẹlẹ̀,<br>
        Kó ìjà wọlé.<br><br>

        4. Eyi ni Ọjọ́ ìgbàdúrà:<br>
        Kí ilẹ̀ ayé bá òrun pọ̀;<br>
        Gbé ọkàn wa sókè láti wá Ọ nítòsí,<br>
        Wá wa nítòsí.<br><br>

        5. Eyi ni ọjọ́ àkọ́kọ́ ti gbogbo wọn;<br>
        Ran àfọ́kànsí Rẹ sẹ̀sìn,<br>
        Ki o sì jí àwọn ẹmi tó kú láti nífẹ̀ẹ́.
      `,
      fr: `
        1. C'est le jour de la lumière :<br>
        Que la lumière brille aujourd'hui ;<br>
        Ô aurore, lève-toi sur notre nuit<br>
        Et chasse son obscurité.<br><br>

        2. C'est le jour du repos :<br>
        Renouvelle notre force défaillante ;<br>
        Sur le cerveau fatigué et la poitrine troublée,<br>
        Verse ta rosée vivifiante.<br><br>

        3. C'est le jour de la paix :<br>
        Ta paix remplit nos esprits ;<br>
        Fais cesser les blasts de la discorde,<br>
        Que les vagues de la lutte se calment.<br><br>

        4. C'est le jour de la prière :<br>
        Que la terre se rapproche du ciel ;<br>
        Élévons nos cœurs pour te chercher là,<br>
        Descends pour nous rencontrer ici.<br><br>

        5. C'est le premier des jours ;<br>
        Envoie ton souffle vivifiant,<br>
        Et réveille les âmes mortes à l'amour.
      `
    },
    writeUp: {
      en: "This hymn celebrates the Sabbath as a day of light, rest, peace, prayer, and renewal. It calls for the power of God's presence to bring clarity, rest, and spiritual renewal to the hearts of His people.",
      yo: "Hymn yi yìn sabátu gẹ́gẹ́ bí ọjọ́ ìmọ́lẹ̀, ìsinmi, àlàáfíà, ìgbàdúrà, àti ìmúlòlùfẹ̀. Ó ń bẹbẹ fún agbára ìwọ̀n ọlọ́run láti mú ìmọ́lẹ̀, ìsinmi, àti ìmúlòlùfẹ̀ wa lórí ọkàn àwọn olùgbọ́rọ̀ Rẹ.",
      fr: "Ce cantique célèbre le sabbat comme un jour de lumière, de repos, de paix, de prière et de renouvellement. Il appelle la puissance de la présence de Dieu pour apporter la clarté, le repos et le renouvellement spirituel dans le cœur de Son peuple."
    }
  },
  35: {  // Hymn 35 - O Thou God of Heaven
    title: {
      en: "O Thou God of Heaven",
      yo: "O Ọlọrun Ọrun",
      fr: "Ô Toi Dieu du Ciel"
    },
    lyrics: {
      en: `
        1. Thou Bible, ever living book!<br>
        Thy start is never known,<br>
        Nobody knows thy origin,<br>
        No one will know thy end.<br><br>

        2. Thou art the Almighty’s secret,<br>
        Thou came from heavenly King,<br>
        Thou art the sword of kill death pains<br>
        The true picture of God.<br><br>

        3. Thou art the chief amongst all those<br>
        Books of the ancient times<br>
        Thou point the way of salvation<br>
        To all saints on the earth.<br><br>

        4. Thou treasure of the trinity!<br>
        Of great king on the throne<br>
        Please make thyself known unto me<br>
        So that I doubt no more.<br><br>

        5. I want to read thee and then pray,<br>
        I want to learn from thee;<br>
        Thou great book of the ancient times<br>
        Reveal me Jesus, Love.<br><br>

        Amen.
      `,
      yo: `
        1. Iwe Mímọ́, ìwé tó ń bẹ pẹ̀lú ayé!<br>
        Ìpilẹ̀ rẹ kò jẹ́ kó mọ,<br>
        Kò sí ẹni tí ó mọ ìpilẹ̀ rẹ,<br>
        Kò sì ní ní mọ ipari rẹ.<br><br>

        2. Iwọ ni aṣírí Ọlọ́run Olórí-ọba,<br>
        Iwọ ti wa láti ọba ọrun,<br>
        Iwọ ni idà tó pa ẹ̀dá, ẹ̀dá pàápàá<br>
        Ìwòyi fífi Ọlọrun han.<br><br>

        3. Iwọ ni olóòótọ́ jùlọ nínú gbogbo<br>
        Ìwé ẹ̀sìn tó wà nípẹ̀yà,<br>
        Iwọ fi ìhà-ọna ìgbàlà hàn<br>
        Sí gbogbo àwọn olóòótọ́ lórí ayé.<br><br>

        4. Iwọ ni ohun-ìtajà Ìjò Ọlọ́run!<br>
        Ọba ńlá ni ọba ìjọba,<br>
        Jòwó, fi ara rẹ han fún mi<br>
        Kí ìbànújẹ mi má ṣe jẹ́ mọ́.<br><br>

        5. Mo fẹ́ ka ẹ, kí n sì gbàdúrà,<br>
        Mo fẹ́ kọ́ ẹ̀kọ́ láti ọdọ rẹ;<br>
        Iwe tó ní agbára àwọn ìgbà àtijọ́<br>
        Ṣe àfihàn Jesu, Ìfẹ́.<br><br>

        Amin.
      `,
      fr: `
        1. Toi, la Bible, livre éternel !<br>
        Ton commencement n’est jamais connu,<br>
        Personne ne connaît ton origine,<br>
        Personne ne connaîtra ta fin.<br><br>

        2. Tu es le secret de l’Almighty,<br>
        Tu es venu du Roi céleste,<br>
        Tu es l’épée qui tue la douleur de la mort,<br>
        La vraie image de Dieu.<br><br>

        3. Tu es le chef parmi tous ceux<br>
        Les livres des temps anciens<br>
        Tu montres le chemin du salut<br>
        À tous les saints sur la terre.<br><br>

        4. Toi, trésor de la Trinité !<br>
        Du grand roi sur le trône<br>
        S’il te plaît, fais-toi connaître de moi<br>
        Pour que je ne doute plus.<br><br>

        5. Je veux te lire et prier après,<br>
        Je veux apprendre de toi ;<br>
        Toi, grand livre des temps anciens,<br>
        Révèle-moi Jésus, l’Amour.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn praises the Bible as the living book, revealing the mystery of God and the way of salvation. It expresses a desire to read, learn, and understand God's love through His Word.",
      yo: "Hymn yi n yìn Iwe Mímọ́ gẹ́gẹ́ bí ìwé tó ń bẹ pẹ̀lú ayé, tó fi aṣírí Ọlọ́run àti ọ̀nà ìgbàlà hàn. Ó ń ṣàfihàn ìfẹ́ láti ka, kọ́ ẹ̀kọ́, àti láti lóye ìfẹ́ Ọlọ́run nípasẹ̀ Ọ̀rọ̀ Rẹ.",
      fr: "Ce cantique loue la Bible comme le livre vivant, révélant le mystère de Dieu et le chemin du salut. Il exprime un désir de lire, d'apprendre et de comprendre l'amour de Dieu à travers Sa Parole."
    }
  },
  36: {  // Hymn 36 - Happy is the Sabbath Day for Me
    title: {
      en: "Happy is the Sabbath Day for Me",
      yo: "Ayọ̀ ni ọjọ́ Ìsinmi fún mi",
      fr: "Heureux est le jour du sabbat pour moi"
    },
    lyrics: {
      en: `
        1. Happy is sabbath day for me,<br>
        And all its bells and its sermon,<br>
        When deep in sorrow I am found,<br>
        They changed my sadness into joy.<br><br>

        2. Happy also are all the hours,<br>
        Which are spent in the house of God,<br>
        To learn the lessons of prayers,<br>
        To receive manna of Thy word.<br><br>

        3. Happy are the answers “Amen”,<br>
        That filled everywhere in the house,<br>
        Intermittently it soundeth,<br>
        And pass homeward bound to the Lord.<br><br>

        4. If world’s care should cause me delay,<br>
        And its six days great commitments,<br>
        O Lord I pray Thee break the chain,<br>
        And set my soul free to praise Thee.<br><br>

        Amen.
      `,
      yo: `
        1. Ayọ̀ ni ọjọ́ Ìsinmi fún mi,<br>
        Pẹ̀lú gbogbo ìkìlọ̀ rẹ̀ àti ìtàn rẹ̀,<br>
        Nígbà tó bá jẹ́ pé ìbànújẹ́ ni mo wà,<br>
        Wọ́n yí ìbànújẹ́ mi padà sí ayọ.<br><br>

        2. Ayọ̀ pẹ̀lú gbogbo wákàtí,<br>
        Tí a fi n’ìlú Ọlọ́run,<br>
        Láti kọ́ ẹ̀kọ́ adúrà,<br>
        Láti gba manna ọ̀rọ̀ Rẹ.<br><br>

        3. Ayọ̀ ni ìdáhùn “Àmín”,<br>
        Tí ó kun fún gbogbo ibi n’ílú,<br>
        Nígbà gbogbo ó ń dun,<br>
        Kó lọ sí ilé ẹ̀dá, tọ́ Ọlọ́run.<br><br>

        4. Bí ìdáhùn ìjọba ayé ba ṣe mi pẹ,<br>
        Pẹ̀lú ìdíwọ̀n ọjọ́ méfà àti àwọn ìdáhùn tó pọ̀,<br>
        Olúwa, jọwọ, ya ìdìtẹ̀ náà,<br>
        Kí o sì ṣe kí ẹmi mi dáa láti yìn Ọ.<br><br>

        Amin.
      `,
      fr: `
        1. Heureux est le jour du sabbat pour moi,<br>
        Et toutes ses cloches et son sermon,<br>
        Lorsque je suis trouvé dans une grande tristesse,<br>
        Ils changent ma tristesse en joie.<br><br>

        2. Heureux aussi sont toutes les heures,<br>
        Passées dans la maison de Dieu,<br>
        Pour apprendre les leçons de la prière,<br>
        Pour recevoir la manne de Ta parole.<br><br>

        3. Heureux sont les réponses "Amen",<br>
        Qui remplissent partout dans la maison,<br>
        Par intermittence, elles résonnent,<br>
        Et passent vers le Seigneur.<br><br>

        4. Si les soucis du monde me retardent,<br>
        Et ses six grands engagements,<br>
        Ô Seigneur, je Te prie de briser la chaîne,<br>
        Et libérer mon âme pour T'honorer.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn celebrates the joy and peace found in the Sabbath, recognizing its transformative power to turn sorrow into joy. It emphasizes the blessings of being in God's house, learning through prayer, and the answers 'Amen' that bind the believers in unity, with a prayer for freedom from worldly distractions.",
      yo: "Hymn yi ṣe ayẹyẹ ayọ̀ àti ìkànsí tí a rí nínú ọjọ́ Ìsinmi, tí ń fi agbára rẹ hàn láti yí ìbànújẹ́ padà sí ayọ. Ó fi kún ìbùkún tí a rí nínú ìlú Ọlọ́run, nípa ẹ̀kọ́ adúrà àti ìdáhùn 'Àmín' tí ó jẹ́ kó ṣọ̀kan àwọn olùgbọ́.",
      fr: "Ce cantique célèbre la joie et la paix trouvées dans le sabbat, reconnaissant son pouvoir transformateur de changer la tristesse en joie. Il souligne les bénédictions de se trouver dans la maison de Dieu, d'apprendre par la prière et les réponses 'Amen' qui unissent les croyants, avec une prière pour la liberté des distractions mondaines."
    }
  },
  
  37: {  // Hymn 37 - O Day of Rest and Gladness
    title: {
      en: "O Day of Rest and Gladness",
      yo: "Ọjọ́ ìsinmi àti ayọ",
      fr: "Ô jour de repos et de joie"
    },
    lyrics: {
      en: `
        1. O day of rest and gladness,<br>
        O day of joy and light,<br>
        O balm of care and sadness,<br>
        most beautiful, most bright;<br>
        on thee the high and lowly<br>
        through ages joined in tune,<br>
        sing "Holy, holy, holy"<br>
        to the great God Triune.<br><br>

        2. On thee, at the creation,<br>
        the light first had its birth;<br>
        on thee, for our salvation,<br>
        Christ rose from depths of earth;<br>
        on thee, our Lord victorious,<br>
        the Spirit sent from heav'n;<br>
        and thus on thee, most glorious,<br>
        a triple light was giv'n.<br><br>

        3. Today on weary nations<br>
        the heav'nly manna falls;<br>
        to holy convocations<br>
        the silver trumpet calls,<br>
        where gospel light is glowing<br>
        with pure and radiant beams,<br>
        and living water flowing<br>
        with soul refreshing streams.<br><br>

        4. New graces ever gaining<br>
        from this our day of rest,<br>
        we reach the rest remaining<br>
        to spirits of the blest.<br>
        To Holy Ghost be praises,<br>
        to Father, and to Son;<br>
        the church her voice upraises<br>
        to thee, blest Three in One.
      `,
      yo: `
        1. Ọjọ́ ìsinmi àti ayọ,<br>
        Ọjọ́ ayọ àti ìmọ́lẹ,<br>
        Ọ̀rọ̀ ìtọ́jú àti ìbànújẹ,<br>
        tó dára jùlọ, tó mọ́lẹ̀;<br>
        Lórí rẹ̀ àwọn ńlá àti kékeré<br>
        kọrin jọ nínú ìkànsí,<br>
        wí "Mímọ, mímọ, mímọ"<br>
        sí Ọlọ́run Giga Triune.<br><br>

        2. Lórí rẹ̀, ní ìpilẹ̀ṣẹ̀,<br>
        ìmọ́lẹ̀ ni o kó ìbí rẹ̀;<br>
        Lórí rẹ̀, fún ìgbàlà wa,<br>
        Kristi jókòó láti inú ilẹ̀;<br>
        Lórí rẹ̀, Olúwa wa, a ṣẹgun,<br>
        Ẹ̀mí tó rán ní ọ̀run;<br>
        àti pé lórí rẹ̀, tó ní ìyanu,<br>
        ìmọ́lẹ̀ mẹta ni a fi ránṣẹ́.<br><br>

        3. Loni, lórí àwọn orílẹ̀-èdè tí ó ti kún,<br>
        ìmanna ọ̀run ń ṣubú;<br>
        sí ìjọsìn àtàwọn àjọṣepọ̀,<br>
        bòrí elékèèrè ń pé,<br>
        níbi tí ìmọ́lẹ̀ ìhìn-ẹnìyàn ti ń tàn<br>
        pẹ̀lú ìmọ́lẹ̀ tó mọ́ àti tó mọ́,<br>
        àti omi ayé tó ń sàn<br>
        pẹ̀lú omi tó ń túbọ̀ ràn ẹmi lọ́rùn.<br><br>

        4. Irírí tuntun ti ń bọ́ láti<br>
        ọ̀dọ̀ ọjọ́ ìsinmi wa,<br>
        a dé ìsinmi tó kù<br>
        sí àwọn ẹmi aláyọ̀.<br>
        Fún Ẹ̀mí Mímọ́ kí a fi ọpẹ́ sí,<br>
        fún Baba, àti fún Ọmọ;<br>
        ìjọ náà ń yìn,<br>
        sí Ọ, Ìgbàlà Mẹta nínú Ọkan.
      `,
      fr: `
        1. Ô jour de repos et de joie,<br>
        Ô jour de lumière et de lumière,<br>
        Ô baume de souci et de tristesse,<br>
        le plus beau, le plus lumineux ;<br>
        sur toi les grands et les petits<br>
        à travers les âges se rejoignent en harmonie,<br>
        chantent "Saint, saint, saint"<br>
        au grand Dieu Triune.<br><br>

        2. Sur toi, à la création,<br>
        la lumière est née pour la première fois ;<br>
        sur toi, pour notre salut,<br>
        Christ est ressuscité des profondeurs de la terre ;<br>
        sur toi, notre Seigneur victorieux,<br>
        l'Esprit envoyé du ciel ;<br>
        et ainsi sur toi, le plus glorieux,<br>
        une lumière triple a été donnée.<br><br>

        3. Aujourd'hui, sur les nations fatiguées,<br>
        la manne céleste tombe ;<br>
        aux convocations saintes,<br>
        la trompette d'argent appelle,<br>
        là où la lumière de l'Évangile brille<br>
        avec des rayons purs et radieux,<br>
        et l'eau vivante coule<br>
        avec des ruisseaux rafraîchissants pour l'âme.<br><br>

        4. De nouvelles grâces toujours gagnées<br>
        de ce jour de repos,<br>
        nous atteignons le repos restant<br>
        pour les esprits des bienheureux.<br>
        À l'Esprit Saint, des louanges,<br>
        au Père et au Fils ;<br>
        l'Église élève sa voix<br>
        vers Toi, Bienheureuse Trinité.
      `
    },
    writeUp: {
      en: "This hymn celebrates the Sabbath as a day of rest, joy, and light, marking its role in creation, salvation, and the victory of Christ. It emphasizes the triple light of God revealed through the Father, Son, and Holy Spirit and calls on believers to praise and experience the blessings of the Sabbath.",
      yo: "Hymn yi ṣe ayẹyẹ ọjọ́ Ìsinmi gẹ́gẹ́ bí ọjọ́ ìsinmi, ayọ̀, àti ìmọ́lẹ, tí ń tọ́ka sí ipa rẹ̀ ní ìpilẹ̀ṣẹ̀, ìgbàlà, àti ìṣẹ́gun Kristi. Ó fi hàn ìmọ́lẹ̀ mẹta ti Ọlọ́run tí a fi hàn nipasẹ Baba, Ọmọ, àti Ẹ̀mí Mímọ́, tí ń pe àwọn olùgbọ́ sí yìn àti ní irírí àbùkù Ọlọ́run nínú ọjọ́ Ìsinmi.",
      fr: "Ce cantique célèbre le sabbat comme un jour de repos, de joie et de lumière, marquant son rôle dans la création, le salut et la victoire du Christ. Il met en avant la lumière triple de Dieu révélée à travers le Père, le Fils et le Saint-Esprit et appelle les croyants à louer et à expérimenter les bénédictions du sabbat."
    }
  },
  38: {  // Hymn 38 - Oh Mighty Lord of Sabbath Day
    title: {
      en: "Oh Mighty Lord of Sabbath Day",
      yo: "Ọlọ́run Giga ti Ọjọ́ Ìsinmi",
      fr: "Ô Seigneur Puissant du Jour du Sabbat"
    },
    lyrics: {
      en: `
        1. Yes, we trust the day is breaking;<br>
        Joyful times are near at hand:<br>
        God, the mighty God, is speaking<br>
        By his word in every land;<br>
        When he comes his lost ones seeking,<br>
        Darkness flees at his command.<br><br>

        2. Let us hail the joyful season,<br>
        Let us hail the rising ray;<br>
        When the Lord appears, there's reason<br>
        To expect a glorious day;<br>
        At the brightness of his coming<br>
        Gloom and darkness flee away.<br><br>

        3. While the foe becomes more daring,<br>
        While he enters like a flood,<br>
        God the Saviour is preparing<br>
        Means to spread his light abroad;<br>
        Every tongue and every language<br>
        Soon shall hear the truth of God.<br><br>

        4. O how pleasant, how reviving<br>
        To our hearts, to hear each day<br>
        Joyful news from far arriving,<br>
        That the message wins its way;<br>
        Those enlightening and enlivening<br>
        Who in death and darkness lay!<br><br>

        5. God of Israel, high and glorious,<br>
        Let thy people see thy hand;<br>
        Let the message be victorious<br>
        Through the world, in every land:<br>
        Come, Lord Jesus, O come quickly,<br>
        And thy blessing now command.
      `,
      yo: `
        1. Bẹ́ẹ̀ ni a ní ìrètí pé ọjọ́ ń bà a,<br>
        Àkókò ayọ̀ wa ti wọlé;<br>
        Ọlọ́run, Ọlọ́run Giga, ń sọ̀rọ̀,<br>
        Pẹ̀lú ọ̀rọ̀ rẹ̀ nínú gbogbo ilẹ̀;<br>
        Nígbà tí ó bá wá, ó máa wá àwọn tí kò rí àtọ́ka,<br>
        Òkùnkùn yóò sá kúrò nípa àṣẹ rẹ̀.<br><br>

        2. Ẹ jẹ́ ká kéde àkókò ayọ̀,<br>
        Ẹ jẹ́ ká kéde ìmọ́lẹ̀ tí ń sẹ̀sín;<br>
        Nígbà tí Olúwa bá dájú pé a ní ìdí<br>
        Láti retí ọjọ́ ìyanu;<br>
        Ní imọ́lẹ̀ ti ìbá rẹ̀,<br>
        Ìkórè àti òkùnkùn yóò sá kúrò.<br><br>

        3. Nígbà tí ọ̀tá náà ti di alágbára,<br>
        Nígbà tí ó bá wọlé gẹ́gẹ́ bí omi,<br>
        Ọlọ́run Olùgbàlà ń pèsè<br>
        Àmàlà fún títan ìmọ́lẹ̀ rẹ̀ káàkiri;<br>
        Ẹ̀dá gbogbo yóò gbọ́ ìtàn Ọlọ́run.<br><br>

        4. Bóyá bá ṣe pẹ̀lú ayọ̀, bí ó ṣe jẹ́ ẹni gidi<br>
        Ìròyìn ayọ̀ ti ń bọ láti ibi tòpinpin,<br>
        Pé ìtàn yóò gbà a, àti yíyí,<br>
        Tí ó ń tan ìmọ́lẹ̀, àfi ká fi ìmọ́lẹ̀ pẹ̀lú ẹmi.<br><br>

        5. Ọlọ́run Israẹli, Giga àti Ológo,<br>
        Jẹ́ kí àwọn ènìyàn rẹ̀ rí ọwọ́ rẹ̀;<br>
        Jẹ́ kí ìtàn jẹ́ olùṣàkóso<br>
        Ní gbogbo ilẹ̀, nínú gbogbo ilẹ̀;<br>
        Wá, Olúwa Jésù, wá kíákíá,<br>
        Kí o sì pèsè àánú rẹ̀ báyìí.
      `,
      fr: `
        1. Oui, nous croyons que le jour se lève;<br>
        Les temps joyeux sont proches ;<br>
        Dieu, le Dieu Tout-Puissant, parle<br>
        Par sa parole dans chaque terre ;<br>
        Lorsqu'il viendra chercher ses perdus,<br>
        Les ténèbres fuiront à son commandement.<br><br>

        2. Accueillons la saison joyeuse,<br>
        Accueillons le rayon montant ;<br>
        Quand le Seigneur apparaît, il y a une raison<br>
        D'attendre un jour glorieux ;<br>
        À la clarté de sa venue,<br>
        L'obscurité et la tristesse fuiront.<br><br>

        3. Tandis que l'ennemi devient plus audacieux,<br>
        Tandis qu'il entre comme un fleuve,<br>
        Dieu le Sauveur prépare<br>
        Les moyens de répandre sa lumière à travers le monde ;<br>
        Toute langue et tout langage<br>
        Bientôt entendront la vérité de Dieu.<br><br>

        4. Comme il est agréable et revigorant<br>
        Pour nos cœurs, d'entendre chaque jour<br>
        Des nouvelles joyeuses qui arrivent de loin,<br>
        Que le message gagne son chemin ;<br>
        Ceux qui étaient dans la mort et l'obscurité<br>
        Sont éclairés et vivifiés !<br><br>

        5. Dieu d'Israël, haut et glorieux,<br>
        Que ton peuple voie ta main ;<br>
        Que le message soit victorieux<br>
        À travers le monde, dans chaque pays :<br>
        Viens, Seigneur Jésus, viens vite,<br>
        Et donne maintenant ta bénédiction.
      `
    },
    writeUp: {
      en: "This hymn emphasizes the hope of Christ’s return, with joyful anticipation of a glorious day. It reflects on the spreading of God's light, the victory of the gospel, and the revival of the faithful, calling on believers to welcome God's work in every land and to rejoice in His coming.",
      yo: "Hymn yi ṣe àfihàn ìrètí ìpadà Kristi, pẹ̀lú ìrẹ́kọjá ayọ̀ fún ọjọ́ ìyanu. Ó fi hàn títà ìmọ́lẹ̀ Ọlọ́run, ìṣẹ́gun ìhìn-ẹnìyàn, àti ìmúrasílẹ̀ àwọn olùgbọ́, tí ń pe àwọn olùgbọ́ sí kíyè sí iṣẹ́ Ọlọ́run nínú gbogbo ilẹ̀ àti kó wọn máa yìn nípasẹ̀ àbójútó rẹ̀.",
      fr: "Ce cantique met l'accent sur l'espoir du retour du Christ, avec une joyeuse attente d'un jour glorieux. Il réfléchit à la diffusion de la lumière de Dieu, à la victoire de l'Évangile, et au réveil des fidèles, appelant les croyants à accueillir l'œuvre de Dieu dans chaque pays et à se réjouir de sa venue."
    }
  },
  
  39: {  // Hymn 39 - From all the dangers of the night
    title: {
      en: "From all the dangers of the night",
      yo: "Lati gbogbo awọn eewu ti alẹ",
      fr: "De tous les dangers de la nuit"
    },
    lyrics: {
      en: `
        1. From all the dangers of the night<br>
        Jesus my Lord protects;<br>
        I’m privileged to see this light,<br>
        I kneel to worship Thee.<br><br>

        2. Jesus, my Lord, keep me today,<br>
        Protect me in Thy hands;<br>
        It is only those Thou keepest<br>
        That are safe from danger.<br><br>

        3. Let my speech and my behaviour<br>
        Depict that I am Thine,<br>
        So much that Thy great light of truth<br>
        May shine throughout the earth.<br><br>

        4. Oh, let me not depart from Thee,<br>
        Thou, oh my Saviour dear!<br>
        Until I see with mine own eyes<br>
        Thy glorious face at last.<br><br>

        Amen.
      `,
      yo: `
        1. Lati gbogbo awọn eewu ti alẹ<br>
        Jesu Olúwa mi n dabobo;<br>
        Mo ni anfaani lati ri imọlẹ yi,<br>
        Mo fẹsẹ̀ tẹmọ́ ọ ni ìbèèrè.<br><br>

        2. Jesu, Olúwa mi, dabobo mi lónìí,<br>
        Daabo bo mi ní ọwọ́ Rẹ;<br>
        Kò sí ẹnikẹ́ni tí o dabobo<br>
        Ti yóò jẹ́ laáyá lati ìkọ̀lù.<br><br>

        3. Kí ọrọ̀ àti ìwà mi<br>
        Ṣàfihàn pé emi ni tirẹ,<br>
        Pẹ̀lú rẹ̀, kí ìmọ́lẹ̀ Rẹ ti ìtó<br>
        Tan ka gbogbo ilẹ̀ ayé.<br><br>

        4. Ẹ jọwọ, má ṣe jẹ́ kí n lọ kúrò nípẹ̀<Br>
        Iwọ, Olùgbàlà mi ẹlẹ́dùúró!<br>
        Títí di igba ti emi yóò rí<br>
        Ojú rẹ̀ aláyọ̀ nípẹ̀.<br><br>

        Amin.
      `,
      fr: `
        1. De tous les dangers de la nuit<br>
        Jésus, mon Seigneur, protège ;<br>
        J'ai le privilège de voir cette lumière,<br>
        Je m'incline pour t'adorer.<br><br>

        2. Jésus, mon Seigneur, garde-moi aujourd'hui,<br>
        Protège-moi dans tes mains ;<br>
        Ce sont seulement ceux que tu gardes<br>
        Qui sont à l'abri du danger.<br><br>

        3. Que ma parole et mon comportement<br>
        Dépeignent que je suis tien,<br>
        Tant que ta grande lumière de vérité<br>
        Brille à travers toute la terre.<br><br>

        4. Oh, ne me laisse pas m'éloigner de toi,<br>
        Toi, mon cher Sauveur !<br>
        Jusqu'à ce que je voie de mes propres yeux<br>
        Ton visage glorieux enfin.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn praises Jesus as the protector from all dangers and asks for His continual protection. It emphasizes living a life that reflects His truth and light, and longing for the day we meet Him face to face.",
      yo: "Hymn yi n yìn Jesu gẹ́gẹ́ bí Olùdáàbò bo lati gbogbo awọn eewu ati n bẹbẹ fun aabo Rẹ lọ́dọọdún. Ó sọ pé ká ṣe ìgbésí ayé tí ń ṣe àfihàn ìtó Rẹ ati imọlẹ, àti pé a ń retí ọjọ́ tí a ó rí i ní ojú ara wa.",
      fr: "Ce cantique loue Jésus en tant que protecteur de tous les dangers et demande Sa protection continue. Il souligne le fait de vivre une vie qui reflète Sa vérité et Sa lumière, et l'attente du jour où nous Le rencontrerons face à face."
    }
  },
  
  40: {  // Hymn 40 - Christ, whose glory fills the skies
    title: {
      en: "Christ, whose glory fills the skies",
      yo: "Kristi, ẹni tí ògo Rẹ̀ kún ọrun",
      fr: "Christ, dont la gloire remplit les cieux"
    },
    lyrics: {
      en: `
        1. Christ, whose glory fills the skies,<br>
        Christ, the true and only Light,<br>
        Sun of righteousness, arise,<br>
        Triumph o'er the shade of night;<br>
        Day-spring from on high, be near;<br>
        Day-star, in my heart appear.<br><br>

        2. Dark and cheerless is the morn<br>
        Unaccompanied by Thee;<br>
        Joyless is the day's return,<br>
        Till Thy mercy's beams I see,<br>
        Till they inward light impart,<br>
        Glad my eyes, and warm my heart.<br><br>

        3. Visit then this soul of mine,<br>
        Pierce the gloom of sin and grief;<br>
        Fill me, radiancy divine,<br>
        Scatter all my unbelief;<br>
        More and more Thyself display,<br>
        Shining to the perfect day.<br><br>
      `,
      yo: `
        1. Kristi, ẹni tí ògo Rẹ̀ kún ọrun,<br>
        Kristi, Imọ̀lẹ̀ otito àti nikan,<br>
        Oorun ti ìdárayá, dide,<br>
        Bori ojiji òru;<br>
        Ọjọ́-ìtàkùn láti oke, wá nítòsí;<br>
        Ọjọ́-irawọ̀, han nínú ọkàn mi.<br><br>

        2. Òru tó rọ̀rùn ati pé ko ni ìtẹ́lọ́run<br>
        Ko ba ẹnikan ti o wa pẹlu Rẹ;<br>
        Ayọ̀ kò sí ninu àtúnpadà ọjọ́<br>
        Títí di igba ti mo bá ri ìran ìrẹ̀lè Rẹ,<br>
        Títí wọn ó fi fún mi ní imọlẹ̀ inu,<br>
        Yóò fi ìbànújẹ mi rọ̀.<br><br>

        3. Ṣàbẹ̀wò sí ẹmi mi nísinsin yìí,<br>
        Gbọ́nà a kó ìtùnú sin àti ẹ̀dá;<br>
        Fún mi ní imọlẹ̀ tí ọ̀run ti fi ṣe,<br>
        Tẹ̀mí gbogbo ìkànsí àti aiyé,<br>
        Fi ara Rẹ hàn síi,<br>
        Títí di ọjọ́ tí ó pé.<br><br>
      `,
      fr: `
        1. Christ, dont la gloire remplit les cieux,<br>
        Christ, la vraie et seule lumière,<br>
        Soleil de justice, lève-toi,<br>
        Triomphe de l'ombre de la nuit ;<br>
        Aurore d'en haut, sois près ;<br>
        Etoile du matin, apparaît dans mon cœur.<br><br>

        2. Sombre et morose est le matin<br>
        Non accompagné par Toi ;<br>
        Sans joie est le retour du jour,<br>
        Jusqu'à ce que je voie les rayons de Ta miséricorde,<br>
        Jusqu'à ce qu'ils impartent leur lumière intérieure,<br>
        Rendant mes yeux joyeux et réchauffant mon cœur.<br><br>

        3. Visite donc cette âme qui est la mienne,<br>
        Perce la noirceur du péché et de la douleur ;<br>
        Remplis-moi, radiance divine,<br>
        Éparpille toute mon incrédulité ;<br>
        Plus en plus, révèle-Toi,<br>
        Brillant jusqu'à la perfection du jour.<br><br>
      `
    },
    writeUp: {
      en: "This hymn praises the radiant glory of Christ, the true Light that dispels darkness, and seeks His presence to fill the soul with joy, peace, and divine radiance.",
      yo: "Hymn yi n ṣe ìyìn fun ògo Rẹ̀ ti Kristi, Imọ̀lẹ̀ otito ti ń ṣàn ni òru, tí ń wá ìmọ̀lẹ̀ ati ìdárayá sinu ẹmi wa.",
      fr: "Ce cantique loue la gloire radieuse du Christ, la véritable lumière qui dissipe les ténèbres, et cherche Sa présence pour remplir l'âme de joie, de paix et de lumière divine."
    }
  },
  41: {  // Hymn 41 - The morning bright and with rosy light
    title: {
      en: "The morning bright and with rosy light",
      yo: "Ojo owurọ́ tó lọ́run, pẹ̀lú ìmọ́lẹ̀ róṣì",
      fr: "Le matin lumineux et éclatant"
    },
    lyrics: {
      en: `
        1. The morning bright, with rosy light,<br>
        Has waked me from my sleep;<br>
        Father, I own, thy love alone<br>
        Thy little one doth keep.<br><br>

        2. All through the day, I humbly pray,<br>
        Be Thou my Guard and Guide;<br>
        My sins forgive, and let me live,<br>
        Blest Jesus, near thy side.<br><br>

        3. O make thy rest within my breast,<br>
        Great Spirit of all grace;<br>
        Make me like thee, then shall I be<br>
        Prepared to see thy face.<br><br>
      `,
      yo: `
        1. Ọjọ́ owurọ́ tó lọ́run, pẹ̀lú ìmọ́lẹ̀ róṣì,<br>
        Ti jí mi kúrò ní ìdákẹ́jẹ mi;<br>
        Baba, mo mọ̀ pé, ìfẹ́ Rẹ nikan<br>
        Ni yóò dá ọmọdé Rẹ̀ dúró.<br><br>

        2. Ní gbogbo ọjọ́, mo ń bọ̀wá,<br>
        Jẹ́ kí o jẹ́ Olùdájọ́ àti Olùtọ́jú mi;<br>
        Gba ẹ̀sùn mi, ki o sì jẹ́ kí n lè yé,<br>
        Jesu aláyọ̀, níbè nitosi rẹ.<br><br>

        3. Jọwọ, ṣe ìsinmi Rẹ̀ nínú àyà mi,<br>
        Ẹmi Nla ti gbogbo ìfẹ́;<br>
        Ṣe mí bí i, nítorí náà, emi yóò wà<br>
        Dára, kí n lè rí ojú Rẹ.<br><br>
      `,
      fr: `
        1. Le matin lumineux, avec la lumière rose,<br>
        M'a réveillé de mon sommeil ;<br>
        Père, je reconnais que seul ton amour<br>
        Garde ton petit.<br><br>

        2. Tout au long de la journée, je prie humblement,<br>
        Sois mon Gardien et mon Guide ;<br>
        Pardonne mes péchés et laisse-moi vivre,<br>
        Béni Jésus, près de toi.<br><br>

        3. Fais de mon cœur ton repos,<br>
        Grand Esprit de toute grâce ;<br>
        Fais-moi comme toi, alors je serai<br>
        Préparé à voir ton visage.<br><br>
      `
    },
    writeUp: {
      en: "This hymn expresses a child’s devotion and trust in God, seeking His guidance, protection, and spiritual rest. It reflects the purity of heart and the longing to be in the presence of God.",
      yo: "Hymn yi n fi ifẹ́ ati ìgbọràn ọmọ kan hàn, tí ń béèrè fún ìtọnisọna Ọlọrun, aabo, ati ìsinmi ẹmi. Ó fi ìmọ́lẹ̀ ọkàn àti ìfẹ́ lati wà nínú ìjọsìn Ọlọrun hàn.",
      fr: "Ce cantique exprime la dévotion et la confiance d'un enfant en Dieu, recherchant Sa direction, Sa protection et le repos spirituel. Il reflète la pureté de cœur et le désir d’être en présence de Dieu."
    }
  },
  
  42: {  // Hymn 42 - Come to me, Lord when first I wake
    title: {
      en: "Come to me, Lord when first I wake",
      yo: "Wá sí mi, Olúwa, nígbà tí mo bá jí",
      fr: "Viens à moi, Seigneur, lorsque je me réveille"
    },
    lyrics: {
      en: `
        1. Come to me, Lord, when first I wake,<br>
        As the faint lights of morning break,<br>
        Bid purest thoughts within me rise,<br>
        Like crystal dew drops to the skies,<br><br>

        2. Come to me in the sultry noon,<br>
        Or earth’s low communings will soon<br>
        Of Thy dear face eclipse the light,<br>
        And change my fairest day to night.<br><br>

        3. Come to me in the evening shade,<br>
        And if my heart from Thee hath strayed,<br>
        Oh, bring it back, and from afar<br>
        Smile on me like thine evening star!<br><br>

        4. Come to me in the midnight hour,<br>
        When sleep withholds its balmy power,<br>
        Let my lone spirit find her rest,<br>
        Like John, upon my Saviour’s breast.<br><br>

        5. Come to me through life’s varied way,<br>
        And when its pulses cease to play,<br>
        Then, Saviour, bid me come to Thee,<br>
        That where Thou art Thy child may be.<br><br>
      `,
      yo: `
        1. Wá sí mi, Olúwa, nígbà tí mo bá jí,<br>
        Bí ìmọ́lẹ̀ owurọ̀ ṣe ń bọ lọ́wọ́ àwòrán;<br>
        Paṣẹ fún àwọn ìmọ̀lára mímọ́ láti dide nínú mi,<br>
        Bí omi òjò kíkún tó ń lọ sí ọ̀run,<br><br>

        2. Wá sí mi ní ọ̀sán tó gbona,<br>
        Tí ilẹ̀ ayé kò ní ní àsọyé rẹ,<br>
        Lórí ojú rẹ ni ìmọ́lẹ̀ yóò bọ,<br>
        Kó sì yí ọjọ́ mi tó lẹ́wa padà sí òru.<br><br>

        3. Wá sí mi ní ojú ọ̀sán tó lọ́ọrẹ,<br>
        Tí ẹ̀mi mi bá sì sọ̀rọ̀ rẹ,<br>
        Wá fún un padà, kó o sì fi ròyìn rẹ<br>
        Gẹ́gẹ́ bí ìràwọ̀ tó lọ́wọ́.<br><br>

        4. Wá sí mi ní àkókò àárọ̀, <br>
        Nígbà tí oorun ko ba gbà mi, <br>
        Jẹ́ kí ẹ̀mí mi ni ìsinmi rẹ,<br>
        Bí Johanu ṣe sun lórí ààrẹ Jesu.<br><br>

        5. Wá sí mi ní gbogbo ọ̀nà ìgbésí ayé,<br>
        Tí nígbà ti o ṣubu, Jesu, jẹ́ kí n lọ sókè,<br>
        Tí ibi ti ìwọ ba wa ọmọ Rẹ̀ yóò wà.<br><br>
      `,
      fr: `
        1. Viens à moi, Seigneur, lorsque je me réveille,<br>
        Comme les lumières faibles du matin se lèvent,<br>
        Fais monter en moi les pensées les plus pures,<br>
        Comme des gouttes de rosée cristalline vers le ciel,<br><br>

        2. Viens à moi à midi chaud,<br>
        Sinon les faibles communions de la terre<br>
        Berceront ton cher visage et éclipseront la lumière,<br>
        Et changeront mon plus beau jour en nuit.<br><br>

        3. Viens à moi dans l'ombre du soir,<br>
        Et si mon cœur s'éloigne de Toi,<br>
        Oh, ramène-le, et de loin<br>
        Souris-moi comme ton étoile du soir !<br><br>

        4. Viens à moi dans l'heure de minuit,<br>
        Lorsque le sommeil retient sa douce puissance,<br>
        Que mon esprit solitaire trouve son repos,<br>
        Comme Jean sur la poitrine de mon Sauveur.<br><br>

        5. Viens à moi à travers le chemin varié de la vie,<br>
        Et lorsque ses pulsations cesseront de jouer,<br>
        Alors, Sauveur, ordonne-moi de venir à Toi,<br>
        Afin que là où Tu es, Ton enfant puisse être.<br><br>
      `
    },
    writeUp: {
      en: "This hymn invites the Lord’s presence at every moment of the day, from the early morning to the late night, seeking divine guidance, peace, and communion with God in all circumstances.",
      yo: "Hymn yi ń pe Ọlọrun láti wà nínú ìgbẹ̀yà gbogbo ọjọ́, láti owurọ̀ títí de alẹ́, ń bẹbẹ fún ìtọnisọna Ọlọrun, àlàáfíà, àti ìbáṣepọ̀ pẹ̀lú Ọlọrun nínú gbogbo àyíká.",
      fr: "Ce cantique invite la présence du Seigneur à chaque moment de la journée, du matin au soir, recherchant la direction divine, la paix et la communion avec Dieu dans toutes les circonstances."
    }
  },
  43: {  // Hymn 43 - Forth in your name, O Lord, I go
    title: {
      en: "Forth in your name, O Lord, I go",
      yo: "Lọ́ sílẹ̀ ní orúkọ rẹ, Olúwa, mo lọ",
      fr: "En avant dans ton nom, Seigneur, je pars"
    },
    lyrics: {
      en: `
        1. Forth in your name, O Lord, I go,<br>
        My daily labor to pursue,<br>
        Determined only you to know<br>
        In all I think or speak or do.<br><br>

        2. The task your wisdom has assigned,<br>
        O let me cheerfully fulfill;<br>
        In all my works your presence find,<br>
        And prove your good and perfect will.<br><br>

        3. May I find you at my right hand;<br>
        Your eyes see truly what I do.<br>
        I labor on at your command<br>
        And offer all my works to you.<br><br>

        4. Give me to bear your easy yoke<br>
        And ev'ry moment watch and pray<br>
        And still to things eternal look,<br>
        And hasten to your glorious day.<br><br>

        5. For you I joyously employ<br>
        Whate’er you in grace have giv’n:<br>
        I run my daily course with joy<br>
        And closely walk with you to heav’n.<br><br>
      `,
      yo: `
        1. Lọ́ sílẹ̀ ní orúkọ rẹ, Olúwa, mo lọ,<br>
        Lati ṣe iṣẹ́ ojoojúmọ́ mi,<br>
        Ti pinnu láti mọ́ ìwọ nìkan<br>
        Ní gbogbo ohun tí mo rò tàbí sọ tàbí ṣe.<br><br>

        2. Ìṣẹ́ tí ọgbọ́n rẹ yàn fún mi,<br>
        Jọ̀wọ́ jẹ́ kí n ṣe ẹ̀dá rẹ pẹ̀lú ìfẹ,<br>
        Ní gbogbo iṣẹ́ mi, kí ìwọ jẹ́ kí ìmọ̀lára rẹ fi hàn,<br>
        Kí n sì fi ìfẹ́ rẹ ṣàpèjúwe gbogbo àwọn iṣẹ́ mi.<br><br>

        3. Jẹ́ kí n rí ìwọ ní ọwọ́ ọtún mi;<br>
        Ojú rẹ ní rí i ṣe tòótọ́ ohun tí mo ṣe.<br>
        Mo ṣiṣẹ́ pẹ̀lú ìtọ́sọ́nà rẹ<br>
        Kí n sì fi gbogbo iṣẹ́ mi fún ọ.<br><br>

        4. Fun mi ní agbara láti gba ẹru rẹ,<br>
        Kí n lè ma ṣiṣẹ́ ní gbogbo ìgbà,<br>
        Kí n sí tẹ̀síwájú ní ọ̀nà àyé àìnípẹ̀kun,<br>
        Kí n sì yara dé ọjọ́ ìdùnnú rẹ.<br><br>

        5. Fun ọ, mo ń ṣiṣẹ́ pẹ̀lú ayọ̀,<br>
        Gbogbo ohun tí o fi fún mi ní ìfẹ́:<br>
        Mo lọ nígbà gbogbo pẹ̀lú ayọ̀<br>
        Kí n sì bọ́gbọ̀rọ̀ pẹ̀lú rẹ lọ sí ọ̀run.<br><br>
      `,
      fr: `
        1. En avant dans ton nom, Seigneur, je pars,<br>
        Pour poursuivre mon travail quotidien,<br>
        Déterminé seulement à te connaître<br>
        Dans tout ce que je pense, dis ou fais.<br><br>

        2. La tâche que ta sagesse m’a assignée,<br>
        Ô permets-moi de la remplir joyeusement;<br>
        Dans toutes mes œuvres, trouve ta présence,<br>
        Et prouve ta volonté bonne et parfaite.<br><br>

        3. Puis-je te trouver à ma droite ;<br>
        Tes yeux voient réellement ce que je fais.<br>
        Je travaille selon ton commandement<br>
        Et t’offre toutes mes œuvres.<br><br>

        4. Donne-moi de porter ton fardeau léger<br>
        Et à chaque instant veille et prie<br>
        Et regarde toujours les choses éternelles,<br>
        Et hâte-toi de venir pour ton jour glorieux.<br><br>

        5. Pour toi, je travaille joyeusement<br>
        Tout ce que tu m’as donné par grâce :<br>
        Je cours mon parcours quotidien avec joie<br>
        Et marche de près avec toi jusqu’au ciel.<br><br>
      `
    },
    writeUp: {
      en: "This hymn calls for the believer to commit their work, thoughts, and actions to the Lord. It emphasizes joyful service to God, seeking His guidance in all that we do, and preparing for His glorious return.",
      yo: "Hymn yi ń pe olùgbọ́rọ̀ lati fi iṣẹ́ wọn, àwọn ìmọ̀lára, àti àwọn ìṣe wọn lé Ọlọrun lọ́wọ́. Ó fi hàn pé iṣẹ́ ìbànújẹ́ ni fún Ọlọrun, ń bẹbẹ fún ìtọ́sọ́nà Rẹ ní gbogbo ohun tí a ṣe, àti pẹ̀lú ìfẹ́ yíyan àwọn ọjọ́ ìdùnnú Rẹ.",
      fr: "Ce cantique appelle le croyant à confier son travail, ses pensées et ses actions au Seigneur. Il met l'accent sur le service joyeux envers Dieu, en recherchant sa direction dans tout ce que nous faisons, et en se préparant pour son retour glorieux."
    }
  },
  44: {  // Hymn 44 - Come to the Morning Prayer
    title: {
      en: "Come to the Morning Prayer",
      yo: "Wá sí àdúrà owurọ",
      fr: "Venez à la prière du matin"
    },
    lyrics: {
      en: `
        1. Come to the Morning Prayer,<br>
        Come let us kneel and pray;<br>
        Prayer is the Christian pilgrim's staff<br>
        To walk with God all day.<br><br>

        2. At noon, beneath the Rock<br>
        Of Ages, rest and pray;<br>
        Sweet is that shadow from the heat,<br>
        When the sun smites by day.<br><br>

        3. At eve, shut to the door,<br>
        Round the home-altar pray,<br>
        And finding there "the House of God,"<br>
        At "heaven's gate" close the day.<br><br>

        4. When midnight seals our eyes,<br>
        Let each in spirit say,<br>
        "I sleep, but my heart waketh, Lord,<br>
        With Thee to watch and pray." <br><br>
      `,
      yo: `
        1. Wá sí àdúrà owurọ,<br>
        Wá, jẹ́ kí a lọkàn sínú àdúrà;<br>
        Àdúrà ni irọ̀ ẹlẹ́rù Christian<br>
        Lati rìn pẹ̀lú Ọlọrun gbogbo ọjọ́.<br><br>

        2. Ní osan, níbèèrè Òkè,<br>
        Ti Àgà (Rock of Ages), sinmi, àti àdúrà;<br>
        Dúdú ni àṣíá rẹ lati oorun,<br>
        Nigbati oorun ba nkúró lọ́jọ́.<br><br>

        3. Ní alẹ́, ṣí ilẹ̀ àdúrà, <br>
        Ṣugbọn ṣàgbe mọ́ ẹ̀dá gbogbo;<br>
        Gba ohun Rẹ́ ti ile Ọlọrun.<br>
        Ní "ọkọ orúkọ ọrun" dákẹ̀ ohun.<br><br>

        4. Ní owurọ, ti oru ba kọ.<br>
        Rìn pẹ̀lú Ọlọrun<b><br>
      `,
      fr: `
        1. Venez à la prière du matin,<br>
        Venez, agenouillons-nous et prions;<br>
        La prière est le bâton du pèlerin chrétien,<br>
        Pour marcher avec Dieu toute la journée.<br><br>

        2. À midi, sous le Rocher<br>
        Des Âges, reposez-vous et priez ;<br>
        Douce est cette ombre contre la chaleur,<br>
        Quand le soleil frappe pendant la journée.<br><br>

        3. Au soir, fermez la porte,<br>
        Entourant l'autel de la maison, priez,<br>
        Et en trouvant là "la Maison de Dieu",<br>
        À la "porte du ciel", fermez la journée.<br><br>

        4. Quand minuit scelle nos yeux,<br>
        Que chacun en esprit dise,<br>
        "Je dors, mais mon cœur veille, Seigneur,<br>
        Avec Toi pour regarder et prier." <br><br>
      `
    },
    writeUp: {
      en: "This hymn emphasizes the importance of prayer at different times of the day—morning, noon, evening, and midnight. It encourages believers to stay connected with God through prayer and seek His presence throughout the day.",
      yo: "Hymn yi ṣe afihan pataki àdúrà ni àkókò oriṣiriṣi ọjọ́—owurọ, osan, alẹ́, ati oru. Ó ń kọ́ awọn olùgbọ́rọ̀ lati tẹsiwaju pẹ̀lú Ọlọrun nipasẹ àdúrà, kí wọn sì wá ìmọ̀lára Rẹ ní gbogbo ọjọ́.",
      fr: "Ce cantique souligne l'importance de la prière à différents moments de la journée : matin, midi, soir et minuit. Il encourage les croyants à rester connectés avec Dieu par la prière et à chercher Sa présence tout au long de la journée."
    }
  },
  45: {  // Hymn 45 - Lord Dismiss Us with Thy Blessing
    title: {
      en: "Lord Dismiss Us with Thy Blessing",
      yo: "Olúwa fi bénu kúrò pẹ̀lú àánú Rẹ",
      fr: "Seigneur, renvoie-nous avec Ta bénédiction"
    },
    lyrics: {
      en: `
        1. Lord, dismiss us with your blessing;<br>
        Fill our hearts with joy and peace.<br>
        Let us each, your love possessing,<br>
        Triumph in redeeming grace.<br>
        O refresh us, O refresh us,<br>
        Trav'ling through this wilderness.<br><br>

        2. Thanks we give and adoration<br>
        For the gospel's joyful sound:<br>
        May the fruits of your salvation<br>
        In our hearts and lives abound!<br>
        Ever faithful, ever faithful<br>
        To your truth may we be found.<br><br>

        3. So whene'er the signal's given<br>
        Us from earth to call away,<br>
        Borne on angels' wings to heaven,<br>
        Glad the summons to obey,<br>
        May we ever, may we ever<br>
        Reign with Christ in endless day.<br><br>
      `,
      yo: `
        1. Olúwa, fi bénu kúrò pẹ̀lú àánú Rẹ;<br>
        Kún ọkàn wa pẹ̀lú ayọ̀ àti aláfíà.<br>
        Jẹ́ kí ọkọọkan wa, pẹ̀lú ìfẹ́ Rẹ,<br>
        Níjúwe ni ìyìn àsègun irọ̀rọ̀.<br>
        Ẹ jọ̀wọ́ jẹ́ kí a ni ìgbéyàrá<br>
        Níkẹyìn sinmi pẹ̀lú àfiwé.<br><br>

        2. A dúpẹ́ àti orúkọ wa pẹ̀lú ìtàn-ádúrà<br>
        Lati fi ipa re jùlọ to sọ.<br>
        Ki èyàmọ̀ ọrùn si a mábo.<br>
        Bo, akúnpe wa fákúkúràn pé.<br><br>

        3. Nitorin, fi kutin days ending.
      `
    },
    writeUp: {
      en: "This hymn expresses gratitude for God's blessings, calling for His peace, grace, and presence as we journey through life. It is a prayer for guidance and protection as we follow His will.",
      yo: "Hymn yi ni ìdúpẹ́ fún àánú Ọlọrun, n pe fun ìmọ̀lára aláfíà, ọrẹ, ati ìmúlọrun Rẹ bí a ṣe ń rin àjò ayé. Ó jẹ́ àdúrà fún ìtùnú ati aabo níbi gbogbo wa.",
      fr: "Ce cantique exprime de la gratitude pour les bénédictions de Dieu, appelant à Sa paix, Sa grâce et Sa présence pendant que nous cheminons à travers la vie. C'est une prière pour la direction et la protection selon Sa volonté."
    }
  },
  46: {  // Hymn 46 - We Lift Our Eyes to Thee
    title: {
      en: "We Lift Our Eyes to Thee",
      yo: "A gbe oju wa si ọ",
      fr: "Nous levons nos yeux vers Toi"
    },
    lyrics: {
      en: `
        1. From Heav'n above to Earth I come<br>
        To bear good news to ev'ry home;<br>
        Glad tidings of great joy I bring,<br>
        Whereof I will now say and sing:<br><br>

        2. To you this night is born a child<br>
        Of Mary, chosen mother mild;<br>
        This little child of lowly birth<br>
        Shall be the joy of all the Earth.<br><br>

        3. ’Tis Christ our God, who far on high<br>
        Hath heard your sad and bitter cry;<br>
        Himself will your salvation be;<br>
        Himself from sin will make you free.<br><br>
      `,
      yo: `
        1. Lati ọ̀run wá sí ilẹ̀ ayé, mo wa<br>
        Lati ránṣẹ́ ìròyìn rere sí gbogbo ilé;<br>
        Ìkìlọ̀ ayọ̀ to lágbára ni mo mú,<br>
        Nípa rẹ̀ ni mo máa sọ àti kọ́.<br><br>

        2. Fun yín ní òru yìí ni ọmọ<br>
        Ti Mariamu, iya ti a yàn,<br>
        Ọmọ kékeré yìí tí a bí ní ipò kékèké<br>
        Yóò jẹ́ ayọ̀ gbogbo ilẹ̀ ayé.<br><br>

        3. Kristi Ọlọrun wa, tó wà ní ọ̀run,<br>
        Tó gbọ́ ẹjò ìbànújẹ́ àti ìkànsí yín;<br>
        Ara Rẹ yóò jẹ́ ìgbàlà fún yín;<br>
        Ara Rẹ yóò dá yín láàárín ẹ̀sìn.<br><br>
      `,
      fr: `
        1. Du ciel au-dessus, je viens sur Terre<br>
        Pour apporter de bonnes nouvelles à chaque maison;<br>
        Je vous annonce de grandes joies,<br>
        Que je vais maintenant dire et chanter:<br><br>

        2. À vous, ce soir, un enfant est né<br>
        De Marie, mère choisie et douce;<br>
        Ce petit enfant de naissance humble<br>
        Sera la joie de toute la Terre.<br><br>

        3. C'est Christ notre Dieu, qui là-haut<br>
        A entendu vos cris tristes et amers;<br>
        Lui-même sera votre salut;<br>
        Lui-même vous délivrera du péché.<br><br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the birth of Christ, bringing the good news of joy and salvation for all the earth. It emphasizes Christ’s role as the Savior who brings freedom from sin.",
      yo: "Hymn yi n ṣe ayẹyẹ ibimọ́ Kristi, n fi ìròyìn ayọ̀ ati ìgbàlà ranṣẹ́ sí gbogbo ilẹ̀ ayé. Ó sọ nípa ipa Kristi gẹ́gẹ́ bí Olùgbàlà tí ń mú ìmúlọkàn-àyé kúrò nínú ẹ̀sìn.",
      fr: "Ce cantique célèbre la naissance du Christ, apportant la bonne nouvelle de joie et de salut pour toute la Terre. Il met en évidence le rôle du Christ en tant que Sauveur qui apporte la liberté du péché."
    }
  },
  48: {  // Hymn 48 - Thy Love Has Spared Our Lives Today
    title: {
      en: "Thy Love Has Spared Our Lives Today",
      yo: "Ìfẹ́ Rẹ ti fipamọ́ ayé wa lónìí",
      fr: "Ton amour a épargné nos vies aujourd'hui"
    },
    lyrics: {
      en: `
        1. From Heav'n above to Earth I come<br>
        To bear good news to ev'ry home;<br>
        Glad tidings of great joy I bring,<br>
        Whereof I will now say and sing:<br><br>

        2. To you this night is born a child<br>
        Of Mary, chosen mother mild;<br>
        This little child of lowly birth<br>
        Shall be the joy of all the Earth.<br><br>
      `,
      yo: `
        1. Lati ọ̀run wá sí ilẹ̀ ayé, mo wa<br>
        Lati ránṣẹ́ ìròyìn rere sí gbogbo ilé;<br>
        Ìkìlọ̀ ayọ̀ to lágbára ni mo mú,<br>
        Nípa rẹ̀ ni mo máa sọ àti kọ́.<br><br>

        2. Fun yín ní òru yìí ni ọmọ<br>
        Ti Mariamu, iya ti a yàn,<br>
        Ọmọ kékeré yìí tí a bí ní ipò kékèké<br>
        Yóò jẹ́ ayọ̀ gbogbo ilẹ̀ ayé.<br><br>
      `,
      fr: `
        1. Du ciel au-dessus, je viens sur Terre<br>
        Pour apporter de bonnes nouvelles à chaque maison;<br>
        Je vous annonce de grandes joies,<br>
        Que je vais maintenant dire et chanter:<br><br>

        2. À vous, ce soir, un enfant est né<br>
        De Marie, mère choisie et douce;<br>
        Ce petit enfant de naissance humble<br>
        Sera la joie de toute la Terre.<br><br>
      `
    },
    writeUp: {
      en: "This hymn speaks of the great joy brought by the birth of a child, heralding the joy and salvation that Christ brings to the earth.",
      yo: "Hymn yi sọ̀rọ̀ nípa ayọ̀ tó tóbi tí ibimọ́ ọmọ kan mú, tí ń kede ayọ̀ àti ìgbàlà tí Kristi mú wa sí ilẹ̀ ayé.",
      fr: "Ce cantique parle de la grande joie apportée par la naissance d'un enfant, annonçant la joie et le salut que le Christ apporte sur Terre."
    }
  },
  48: {  // Hymn 48 - O Saviour, Bless Us Ere We Go
    title: {
      en: "O Saviour, Bless Us Ere We Go",
      yo: "O Olugbala, Bùkún wa kí a tó lọ",
      fr: "Ô Sauveur, Bénis-nous avant de partir"
    },
    lyrics: {
      en: `
        1. O Saviour, bless us ere we go;<br>
        Thy word into our minds instil,<br>
        And make our lukewarm hearts to glow<br>
        With lowly love and fervent will.<br>
        Through life's long day and death's dark night,<br>
        O gentle Jesus, be our Light.<br><br>

        2. The day is done, its hours have run,<br>
        And Thou hast taken count of all,<br>
        The scanty triumphs grace hath won,<br>
        The broken vow, the frequent fall.<br>
        Through life's long day and death's dark night,<br>
        O gentle Jesus, be our Light.<br><br>

        3. Grant us, dear Lord, from evil ways<br>
        True absolution and release;<br>
        And bless us, more than in past days,<br>
        With purity and inward peace.<br>
        Through life's long day and death's dark night,<br>
        O gentle Jesus, be our Light.<br><br>

        4. Do more than pardon; give us joy,<br>
        Sweet fear and sober liberty,<br>
        And simple hearts without alloy<br>
        That only long to be like Thee.<br>
        Through life's long day and death's dark night,<br>
        O gentle Jesus, be our Light.<br><br>

        5. For all we love, the poor, the sad,<br>
        The sinful, unto Thee we call;<br>
        O let Thy mercy make us glad:<br>
        Thou art our Jesus, and our All.<br>
        Through life's long day and death's dark night,<br>
        O gentle Jesus, be our Light.<br><br>
      `,
      yo: `
        1. O Olugbala, bùkún wa kí a tó lọ;<br>
        Ọ̀rọ̀ Rẹ fi ẹ̀kọ́ sí inú ọkàn wa,<br>
        Kí o sì jẹ́ kí ọkàn wa tí kò ní ìfẹ̀ tan<br>
        Nífẹ̀ẹ́ gidi àti ifẹ́ onífẹ̀ẹ́.<br>
        Lẹ́yìn ọjọ́ pẹ̀lú ìpẹ̀yà àti òru ikú,<br>
        O Jésù ìbànújẹ, jẹ́ kí ìmọ́lẹ̀ Rẹ wa.<br><br>

        2. Ọjọ́ ti pari, àkókò rẹ̀ ti lọ,<br>
        Ati pé O ti ṣe iṣiro gbogbo rẹ;<br>
        Títí àwọn ìtẹ̀sì ẹ̀mí tí o ṣe,<br>
        Ìforúkọpọ̀ tí a ti fọ̀kàn jù,<br>
        Lẹ́yìn ọjọ́ pẹ̀lú ìpẹ̀yà àti òru ikú,<br>
        O Jésù ìbànújẹ, jẹ́ kí ìmọ́lẹ̀ Rẹ wa.<br><br>

        3. Fun wa, Oluwa, ní ẹ̀tọ́ àìmọ̀,<br>
        Ìdárayá gidi àti ìyọkúrò;<br>
        Bùkún wa, ju bí ó ti ṣẹlẹ̀ lọ,<br>
        Pẹ̀lú ìmọ̀lára àti alàáfíà nínú wa.<br>
        Lẹ́yìn ọjọ́ pẹ̀lú ìpẹ̀yà àti òru ikú,<br>
        O Jésù ìbànújẹ, jẹ́ kí ìmọ́lẹ̀ Rẹ wa.<br><br>

        4. Ṣe jù ìdáríjì lọ; fún wa ní ayọ̀,<br>
        Ìbànújẹ àtàwọn àjọṣepọ̀ yóò ṣe tán,<br>
        Kí a lè jẹ́ kedere àti bí Rẹ.<br>
        Lẹ́yìn ọjọ́ pẹ̀lú ìpẹ̀yà àti òru ikú,<br>
        O Jésù ìbànújẹ, jẹ́ kí ìmọ́lẹ̀ Rẹ wa.<br><br>

        5. Fun gbogbo wa tí a nífẹ̀ẹ́, àwọn talaka, àwọn ẹni tí ń bàjẹ́,<br>
        Ẹ̀bi, pé àwọn ẹ̀dá, sí Rẹ ni a ń pe;<br>
        O jẹ́ kí mercy Rẹ jẹ́ kó yé wa:<br>
        Iwọ ni Olugbala wa, àti gbogbo wa.<br>
        Lẹ́yìn ọjọ́ pẹ̀lú ìpẹ̀yà àti òru ikú,<br>
        O Jésù ìbànújẹ, jẹ́ kí ìmọ́lẹ̀ Rẹ wa.<br><br>
      `,
      fr: `
        1. Ô Sauveur, bénis-nous avant de partir;<br>
        Insuffle ta parole dans nos esprits,<br>
        Et fais briller nos cœurs tièdes<br>
        De l'amour humble et de la volonté fervente.<br>
        À travers le long jour de la vie et la sombre nuit de la mort,<br>
        Ô doux Jésus, sois notre Lumière.<br><br>

        2. Le jour est fini, ses heures ont passé,<br>
        Et tu as pris en compte tout,<br>
        Les rares triomphes que la grâce a remportés,<br>
        Le vœu brisé, la chute fréquente.<br>
        À travers le long jour de la vie et la sombre nuit de la mort,<br>
        Ô doux Jésus, sois notre Lumière.<br><br>

        3. Accorde-nous, cher Seigneur, de véritables moyens<br>
        D'absolution et de libération des mauvaises voies ;<br>
        Et bénis-nous, plus que dans les jours passés,<br>
        De pureté et de paix intérieure.<br>
        À travers le long jour de la vie et la sombre nuit de la mort,<br>
        Ô doux Jésus, sois notre Lumière.<br><br>

        4. Fais plus que pardonner ; donne-nous la joie,<br>
        La douce crainte et la libre liberté,<br>
        Et des cœurs simples sans mélange,<br>
        Qui ne désirent qu'être comme Toi.<br>
        À travers le long jour de la vie et la sombre nuit de la mort,<br>
        Ô doux Jésus, sois notre Lumière.<br><br>

        5. Pour tous ceux que nous aimons, les pauvres, les tristes,<br>
        Les pécheurs, vers Toi nous appelons ;<br>
        Ô que Ta miséricorde nous réjouisse :<br>
        Tu es notre Jésus, et notre Tout.<br>
        À travers le long jour de la vie et la sombre nuit de la mort,<br>
        Ô doux Jésus, sois notre Lumière.<br><br>
      `
    },
    writeUp: {
      en: "This hymn calls for God's blessing and guidance throughout life. It prays for forgiveness, peace, joy, and the light of Christ to guide and protect through every moment, from dawn to night.",
      yo: "Hymn yi ń bẹbẹ fún ìbùkún Ọlọrun ati ìtọ́sọ́nà ní gbogbo ìgbéyàrá. Ó ń béèrè fún ìdáríjì, àlàáfíà, ayọ̀, àti ìmọ́lẹ̀ Kristi láti tọ́ka ati dáàbò bo wa ní gbogbo ìsẹ̀lẹ̀, láti ìmọ̀lára ọjọ́ dé òru.",
      fr: "Ce cantique demande la bénédiction et la direction de Dieu tout au long de la vie. Il prie pour le pardon, la paix, la joie et la lumière du Christ pour guider et protéger à chaque instant, du matin à la nuit."
    }
  },
  49: {  // Hymn 49 - Father in Jesus' Name We Meet
    title: {
      en: "Father in Jesus' Name We Meet",
      yo: "Baba, N'oruko Jesu a pade wa",
      fr: "Père, au nom de Jésus, nous nous rencontrons"
    },
    lyrics: {
      en: `
        1. Father, again in Jesus' name we meet,<br>
        And bow in penitence beneath thy feet;<br>
        Again to thee our feeble voices raise,<br>
        To sue for mercy and to sing thy praise.<br><br>

        2. O we would bless thee for thy ceaseless care,<br>
        And all thy works from day to day declare.<br>
        Is not our life with hourly mercies crowned?<br>
        Does not thine arm encircle us around?<br><br>

        3. Alas, unworthy of thy boundless love,<br>
        Too oft our feet from thee, our Father, rove;<br>
        But now, encouraged by thy voice, we come,<br>
        Returning sinners, to a Father's home.<br><br>

        4. O by that name in whom all fullness dwells,<br>
        O by that love which ev'ry love excels,<br>
        O by that blood so freely shed for sin,<br>
        Open blest mercy's gate and take us in.<br><br>
      `,
      yo: `
        1. Baba, ní orúkọ Jesu a padà wa,<br>
        A sì kòkó sẹsẹ̀ wa ní ìbèèrè lọ́wọ́ rẹ;<br>
        A sì tún fí awọn ohùn wa tí kò lagbara sùn,<br>
        Lati béèrè fún àánú àti lati kọrin ọlá Rẹ.<br><br>

        2. A fẹ́ bùkún Ọ́ fún ìtọ́jú Rẹ tí kò ní parí,<br>
        Ati gbogbo iṣẹ́ Rẹ lati ọjọ́ de ọjọ́.<br>
        Ṣé ẹ̀mí wa kò ni àánú títí ayé?<br>
        Ṣé ọwọ́ Rẹ kò yí wa ká? <br><br>

        3. Ẹsẹ̀ ni a jẹ́, a kò sì yẹ fún ìfẹ́ Rẹ<br>
        Ọ̀pọ̀ ìgbà, a fi ẹsẹ̀ wa yàtọ̀,<br>
        Ṣùgbọ́n báyìí, a fi ẹ̀mi Rẹ ṣe iwuri, a dé,<br>
        Aṣàmúlò pada, wa sì ilé Baba.<br><br>

        4. O, ní orúkọ Rẹ ti gbogbo ìtẹ̀sí wa ngbé,<br>
        O, ní ìfẹ́ ti gbogbo ìfẹ́ tó kọja,<br>
        O, ní ẹ̀jé Rẹ tó fẹ́rẹ̀fẹ́ níforúkọ,<br>
        Ṣí ilẹ̀ àánú tí a bùkún ati gba wa.<br><br>
      `,
      fr: `
        1. Père, à nouveau en Jésus' nom nous nous rencontrons,<br>
        Et nous nous inclinons dans la pénitence sous tes pieds;<br>
        Encore une fois, nous élevons nos voix faibles,<br>
        Pour demander miséricorde et chanter ta louange.<br><br>

        2. Ô nous voulons te bénir pour ton soin incessant,<br>
        Et tous tes œuvres du jour au jour déclarent.<br>
        N'est-ce pas que notre vie est couronnée de miséricordes à chaque heure?<br>
        Ta main ne nous entoure-t-elle pas autour?<br><br>

        3. Hélas, indignes de ton amour sans limite,<br>
        Trop souvent nos pieds se détournent de Toi, notre Père;<br>
        Mais maintenant, encouragés par ta voix, nous venons,<br>
        Retournant pécheurs, à la maison du Père.<br><br>

        4. Ô par ce nom dans lequel toute la plénitude habite,<br>
        Ô par cet amour qui surpasse tout amour,<br>
        Ô par ce sang si librement versé pour le péché,<br>
        Ouvre la porte de miséricorde bénie et prends-nous.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a prayer for God's mercy and forgiveness, acknowledging His constant care and love, and calling on His name to cleanse and accept the repentant heart.",
      yo: "Hymn yi jẹ́ àdúrà fún àánú Ọlọrun àti ìdáríjì, ìmúlẹ̀ ìtọ́jú àti ìfẹ́ Rẹ, tí ń pe orúkọ Rẹ láti dá wa kúrò nínú ẹ̀ṣẹ̀ àti láti gba ọkàn olùsìn padà.",
      fr: "Ce cantique est une prière pour la miséricorde et le pardon de Dieu, reconnaissant Son soin constant et Son amour, et invoquant Son nom pour purifier et accepter le cœur repentant."
    }
  },
  
  50: {  // Hymn 50 - Lead, Kindly Light, Amid Th' Encircling Gloom
    title: {
      en: "Lead, Kindly Light, Amid Th' Encircling Gloom",
      yo: "Tọ́ wa, ìmọ́lẹ̀ ọlá, láàrín òru tó yí ká wa",
      fr: "Guide, douce lumière, au milieu de l'obscurité environnante"
    },
    lyrics: {
      en: `
        1. Lead, kindly Light, amid th' encircling gloom;<br>
        O lead me on!<br>
        The night is dark, and I am far from home;<br>
        O lead me on!<br>
        Keep firm my feet; I do not ask to see<br>
        The distant scene, one step enough for me.<br><br>

        2. I was not ever thus, nor prayed that you<br>
        Should lead me on.<br>
        I loved to choose and see my path, but now,<br>
        Please lead me on!<br>
        I loved the garish day, and spite of fears,<br>
        Pride ruled my will; remember not past years.<br><br>

        3. So long your pow'r has blest me, sure it still<br>
        Will lead me on,<br>
        O'er moor and fen, o'er crag and torrent, till<br>
        The night is gone,<br>
        And with the morn those angel faces smile,<br>
        Which I have loved long since, and lost awhile.<br><br>
      `,
      yo: `
        1. Tọ́ wa, ìmọ́lẹ̀ ọlá, láàrín òru tó yí ká wa;<br>
        Jọwọ tọ́ wa!<br>
        Òru náà ń pọ̀, mo sì jìnà sí ilé mi;<br>
        Jọwọ tọ́ wa!<br>
        Pa ẹsẹ̀ mi mọ́; mi ò béèrè láti rí<br>
        Ohun tó wà nihin, ìkẹ̀yìn tó tó fún mi.<br><br>

        2. Kò rí bẹ́ẹ̀, kò sì bẹ̀rẹ̀ pé o<br>
        Yóò tọ́ wa.<br>
        Mo fẹ́ láti yan ọ̀nà mi, ṣùgbọ́n báyìí,<br>
        Jọwọ tọ́ wa!<br>
        Mo fẹ́ ọjọ́ ọ̀run, tó bẹ́ẹ̀ ti gbogbo ìbànújẹ,<br>
        Àyàfi ìbànújẹ, ìkórè rulẹ.<br><br>

        3. Ọpọ̀ àkókò ti agbára rẹ bùkún wa, ó dájú pé ó ṣi<br>
        Yóò tọ́ wa,<br>
        Káká àfi omi, gbogbo àfọ̀ dín ìkà, tí<br>
        Òru tí a kò ní kù,<br>
        Ati pẹlu owurọ àwọn anọ́jò tìkára rẹ kọrin.<br><br>
      `,
      fr: `
        1. Guide, douce lumière, au milieu de l'obscurité environnante ;<br>
        Ô guide-moi !<br>
        La nuit est sombre, et je suis loin de chez moi ;<br>
        Ô guide-moi !<br>
        Garde fermes mes pieds ; je ne demande pas à voir<br>
        Le paysage lointain, un seul pas suffit pour moi.<br><br>

        2. Je n'ai pas toujours été ainsi, ni prié que tu<br>
        Me guides.<br>
        J'aimais choisir et voir mon chemin, mais maintenant,<br>
        S'il te plaît guide-moi !<br>
        J'aimais le jour éclatant, malgré les peurs,<br>
        L'orgueil gouvernait ma volonté ; ne souviens-toi pas des années passées.<br><br>

        3. Aussi longtemps que ton pouvoir m'a béni, il me guidera sûrement,<br>
        À travers marais et tourbières, à travers rochers et torrents, jusqu'à<br>
        Ce que la nuit disparaisse,<br>
        Et avec le matin ces visages d'anges sourient,<br>
        Que j'ai aimés il y a longtemps, et que j'ai perdus pendant un moment.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a prayer asking for God's guidance through darkness and uncertainty. It expresses a trust in God's power and asks for His leading through life's challenges, no matter the distance or time.",
      yo: "Hymn yi jẹ́ àdúrà tí ń béèrè fún ìtọ́sọ́nà Ọlọrun nípasẹ̀ òru àti ìdààmú. Ó fi ìgbọràn sí agbára Ọlọrun àti béèrè fún ìtọ́sọ́nà rẹ ní gbogbo ìṣòro ayé, bí kò ṣe ibèèrè tó lórí àkókò tàbí àfẹnusọ.",
      fr: "Ce cantique est une prière demandant la direction de Dieu à travers les ténèbres et l'incertitude. Il exprime une confiance en la puissance de Dieu et demande Sa direction à travers les défis de la vie, peu importe la distance ou le temps."
    }
  },
  51: {  // Hymn 51 - At Even, Ere the Sun Was Set
    title: {
      en: "At Even, Ere the Sun Was Set",
      yo: "Ní ìsàlẹ̀ òru, ṣáájú pé oòrùn tó",
      fr: "Le soir, avant que le soleil se couche"
    },
    lyrics: {
      en: `
        1. At even, ere the sun was set,<br>
        the sick, O Lord, around thee lay;<br>
        O in what divers pains they met!<br>
        O with what joy they went away!<br><br>

        2. Once more 'tis eventide, and we<br>
        oppressed with various ills draw near;<br>
        what if thy form we cannot see?<br>
        we know and feel that thou art here.<br><br>

        3. O Saviour Christ, our woes dispel;<br>
        for some are sick, and some are sad,<br>
        and some have never loved thee well,<br>
        and some have lost the love they had;<br><br>

        4. And some have found the world is vain,<br>
        yet from the world they break not free;<br>
        and some have friends who give them pain,<br>
        yet have not sought a friend in thee;<br><br>

        5. And none, O Lord, have perfect rest,<br>
        for none are wholly free from sin;<br>
        and they who fain would serve thee best<br>
        are conscious most of wrong within.<br><br>

        6. O Saviour Christ, thou too art man;<br>
        thou hast been troubled, tempted, tried;<br>
        thy kind but searching glance can scan<br>
        the very wounds that shame would hide.<br><br>

        7. Thy touch has still its ancient power;<br>
        no word from thee can fruitless fall:<br>
        Hear, in this solemn evening hour,<br>
        and in thy mercy heal us all.<br><br>
      `,
      yo: `
        1. Ní ìsàlẹ̀ òru, ṣáájú pé oòrùn tó,<br>
        àwọn aláìsàn, Olúwa, yí ọ ká;<br>
        Ní ilé ìkórè tí wọn ti pàdé!<br>
        Ṣùgbọ́n pé àwọn rẹ fi ọ́ lójú!<br><br>

        2. Lẹ́ẹ̀kan síi, ó ti di irò alẹ́, a sì wà<br>
        pẹ̀lú ẹ̀sùn tó pọn àti ìbànújẹ;<br>
        Kí ni tí a kò rí ìṣàpẹẹrẹ rẹ?<br>
        Ṣùgbọ́n tí a mọ̀ pé o wà nibi.<br><br>

        3. Olúwa Kristi, pa gbogbo ìkórè wa;<br>
        ní àwọn kan ti ṣòro, àwọn kan ti sùn<br>
        àti àwọn kan kì í mọ̀ ọ rárá,<br>
        àti àwọn kan ló ti sọnù ní ìfẹ́ wọn.<br><br>

        4. Ní àwọn kan, ayé ti wa mọ́ ní inú;<br>
        ṣùgbọ́n wọn kò fi ayé pọ̀.<br>
        àwọn kan ní ọrẹ́ tó ń fi wọn kù;<br>
        ṣùgbọ́n wọn kò ráyè lọ si ọrẹ́ rẹ.<br><br>

        5. Kò sí ọkan tí, Olúwa, ní ìkànsí àlááfíà,<br>
        fún kò sí ẹni tí kò ni ẹ̀sùn lára.<br>
        Àti awọn tí o fẹ́ kó ṣiṣẹ́ rẹ,<br>
        ló mọ̀ọ́ ṣọ́nà tó ṣeé yẹ.<br><br>

        6. Olúwa Kristi, ìwọ náà ni ẹ̀dá ènìyàn;<br>
        ìwọ ti ní ìrònú, ìdánwò, ìdààmú;<br>
        ìran rẹ tẹ̀síwájú àṣeyọrí tó sọ;<br>
        wá mọ̀ àwọn ìtán níbi tó fi mọ̀.<br><br>

        7. Ìkànsí rẹ ní agbára rẹ yí,<br>
        kò sì sọ̀rọ̀ kankan lati lọ rárá;<br>
        Gbọ́, nínú àmúlò alẹ́, àti bí a ṣe wù<br>
        ó wù àti iyìn rẹ.<br><br>
      `,
      fr: `
        1. Le soir, avant que le soleil se couche,<br>
        les malades, Ô Seigneur, étaient autour de toi ;<br>
        Dans quelle grande souffrance étaient-ils !<br>
        Et avec quelle joie ils sont partis !<br><br>

        2. Une fois encore, c'est le soir, et nous<br>
        accablés de divers maux nous approchons ;<br>
        que si nous ne pouvons pas voir ta forme,<br>
        nous savons et ressentons que tu es ici.<br><br>

        3. Ô Sauveur Christ, chasse nos malheurs ;<br>
        car certains sont malades, et d'autres sont tristes,<br>
        certains ne t'ont jamais bien aimé,<br>
        et certains ont perdu l'amour qu'ils avaient ;<br><br>

        4. Et certains ont trouvé que le monde est vain,<br>
        mais ils ne se libèrent pas du monde ;<br>
        et certains ont des amis qui leur causent de la douleur,<br>
        mais n'ont pas cherché un ami en toi ;<br><br>

        5. Et personne, Ô Seigneur, n'a de repos parfait,<br>
        car personne n'est entièrement libre du péché ;<br>
        et ceux qui voudraient te servir de la meilleure manière<br>
        sont ceux qui ont le plus conscience du mal en eux.<br><br>

        6. Ô Sauveur Christ, toi aussi tu es un homme ;<br>
        tu as été troublé, tenté, éprouvé ;<br>
        ton regard bienveillant mais perçant peut scruter<br>
        les blessures mêmes que la honte voudrait cacher.<br><br>

        7. Ta touche a toujours son pouvoir ancien ;<br>
        aucune parole de toi ne peut être infructueuse :<br>
        Entends, en cette heure solennelle du soir,<br>
        et dans ta miséricorde, guéris-nous tous.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a prayer for healing and comfort, remembering the way Jesus healed the sick. It invites the Lord to heal both physical and spiritual ailments and reminds us that He is always with us, offering mercy and peace.",
      yo: "Hymn yi jẹ́ àdúrà fun ìtọju àti ìbáwọlé, tí ń rántí bí Jesu ṣe gbé ìtọ́jú fún àwọn aláìsàn. Ó pè fún Olúwa láti tọju gbogbo ìṣòro, èdá àti ayé wa, ní ríranti pé o wà nibi ní gbogbo ọjọ́ wa.",
      fr: "Ce cantique est une prière pour la guérison et le réconfort, se souvenant de la façon dont Jésus a guéri les malades. Il invite le Seigneur à guérir les maux physiques et spirituels et nous rappelle qu'il est toujours avec nous, offrant miséricorde et paix."
    }
  },
  52: {  // Hymn 52 - Abide with Me: Fast Falls the Eventide
    title: {
      en: "Abide with Me: Fast Falls the Eventide",
      yo: "Ẹ jọ̀ọ́, dá wa lórí, ni àkókò ìbẹ̀rù",
      fr: "Reste avec moi : L'événement du soir tombe vite"
    },
    lyrics: {
      en: `
        1. Abide with me: fast falls the eventide;<br>
        the darkness deepens; Lord, with me abide.<br>
        When other helpers fail and comforts flee,<br>
        Help of the helpless, O abide with me.<br><br>

        2. Swift to its close ebbs out life's little day;<br>
        earth's joys grow dim, its glories pass away.<br>
        Change and decay in all around I see.<br>
        O thou who changest not, abide with me.<br><br>

        3. I need thy presence every passing hour.<br>
        What but thy grace can foil the tempter's power?<br>
        Who like thyself my guide and strength can be?<br>
        Through cloud and sunshine, O abide with me.<br><br>

        4. I fear no foe with thee at hand to bless,<br>
        ills have no weight, and tears no bitterness.<br>
        Where is death's sting? Where, grave, thy victory?<br>
        I triumph still, if thou abide with me.<br><br>

        5. Hold thou thy cross before my closing eyes.<br>
        Shine through the gloom and point me to the skies.<br>
        Heaven's morning breaks and earth's vain shadows flee;<br>
        in life, in death, O Lord, abide with me.<br><br>
      `,
      yo: `
        1. Ẹ jọ̀ọ́, dá wa lórí, ni àkókò ìbẹ̀rù;<br>
        òkùnkùn ń gòkè, Olúwa, dá wa lórí.<br>
        Nígbà tí àwọn alábojútó bá ṣèṣè, àti ìmọ̀lára bá sá,<br>
        Olùrànlọ́wọ́ ti àìlera, jọwọ́ dá wa lórí.<br><br>

        2. Ràárá, ọjọ́ ìkúnlẹ̀ ayé kọjá; <br>
        ìdùnnú ayé ń pẹ̀lú, yíyè rẹ̀ ń lọ.<br>
        Ayíka àti ìyípadà ni gbogbo ibi tí mo rí.<br>
        Ẹlẹ́dàá tó kò yí, jọwọ́ dá wa lórí.<br><br>

        3. Mo nílò ìfarahan rẹ̀ ní gbogbo ìgbà.<br>
        Kí ni ẹ̀sìn tó lè di agbára ìdànwò?<br>
        Tani bí rẹ̀ yóò jẹ́ adákọ́kò àti agbára mi?<br>
        Ní gbogbo ọ̀run àti òru, jọwọ́ dá wa lórí.<br><br>

        4. Mi ò bẹ̀rù ohun tí ó lè ṣe, pẹ̀lú rẹ̀ láti fi ìbùkún ṣe,<br>
        ìbànújẹ kò ní ẹ̀rù, àti iró ìkú kò ní ìbànújẹ.<br>
        Níbo ni ẹ̀dá ìkú wa? Níbo, ibè, ni ìṣẹ́gun rẹ̀?<br>
        Mo máa bùkún tìkò tẹ̀síwájú, bí o bá dá wa lórí.<br><br>

        5. Fi kóṣí rẹ̀ rọ̀bìnà níbi tí ojú mi yóò ṣe kó.<br>
        Tan mọ́lè yí kí o sì fi mi sọ sí ọ̀run.<br>
        Ìmọ̀lára ọ̀sán ọ̀run ń ṣe bẹ̀rẹ̀, gbogbo ìmọ̀lára àgbà ti ayé ń sá;<br>
        nínú ayé, nínú ikú, jọwọ́ dá wa lórí.<br><br>
      `,
      fr: `
        1. Reste avec moi : L'événement du soir tombe vite;<br>
        l'obscurité s'intensifie ; Seigneur, reste avec moi.<br>
        Quand d'autres secours échouent et que les consolations s'enfuient,<br>
        Aide des sans secours, Ô demeure avec moi.<br><br>

        2. La petite journée de la vie se termine rapidement ;<br>
        les joies de la terre s'estompent, ses gloires disparaissent.<br>
        Le changement et la dégradation sont partout autour de moi.<br>
        Ô toi qui ne changes pas, demeure avec moi.<br><br>

        3. J'ai besoin de ta présence à chaque heure qui passe.<br>
        Quoi d'autre que ta grâce peut contrer le pouvoir du tentateur ?<br>
        Qui, comme toi, peut être mon guide et ma force ?<br>
        À travers les nuages et le soleil, Ô reste avec moi.<br><br>

        4. Je ne crains aucun ennemi avec toi près de moi pour bénir,<br>
        les maux n'ont aucun poids, et les larmes aucune amertume.<br>
        Où est la piqûre de la mort ? Où, tombe, ta victoire ?<br>
        Je triomphe toujours, si tu restes avec moi.<br><br>

        5. Tiens ta croix devant mes yeux qui se ferment.<br>
        Brille à travers les ténèbres et montre-moi les cieux.<br>
        Le matin du ciel se lève et les ombres futiles de la terre fuient ;<br>
        dans la vie, dans la mort, Seigneur, demeure avec moi.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a beautiful prayer for God's presence in times of darkness, trials, and uncertainty. It expresses the need for God's guidance, peace, and strength, and concludes with a trust that He will abide with us through life and death.",
      yo: "Hymn yi jẹ́ àdúrà lẹ́wa fún ìfarahan Ọlọ́run nígbà àwọn ìpẹ̀yà, ìdànwò, àti ìkànsí. Ó fi hàn pé a nílò ìtọ́sọ́nà Ọlọ́run, ìkànsí àti agbára, tó sì kù pé, Ó máa dá wa lórí ní gbogbo ayé àti ìkú.",
      fr: "Ce cantique est une belle prière pour la présence de Dieu dans les moments de ténèbres, d'épreuves et d'incertitude. Il exprime le besoin de la direction, de la paix et de la force de Dieu, et se termine par une confiance qu'Il demeurera avec nous à travers la vie et la mort."
    }
  },
  53: {  // Hymn 53 - Sun of My Soul, Thou Saviour Dear
    title: {
      en: "Sun of My Soul, Thou Saviour Dear",
      yo: "Ọṣọ́ Ọkàn mi, Olùgbàlà mi tọ́kànwá",
      fr: "Soleil de mon âme, Ô Sauveur cher"
    },
    lyrics: {
      en: `
        1. Hold Thou my hand!<br>
        So weak I am, and helpless;<br>
        I dare not take one step without Thy aid!<br>
        Hold Thou my hand!<br>
        For then, O loving Saviour,<br>
        No dread of ill shall make my soul afraid.<br><br>

        2. Hold Thou my hand!<br>
        And closer, closer draw me<br>
        To Thy dear self-my hope, my joy, my all;<br>
        Hold Thou my hand!<br>
        Lest happy I should wander,<br>
        And missing Thee,<br>
        My trembling feet should fall.<br><br>

        3. Hold Thou my hand!<br>
        The way is dark before me<br>
        Without the sunlight of Thy face divine;<br>
        But when by faith<br>
        I catch its radiant glory,<br>
        What heights of joy,<br>
        What rapturous songs are mine!<br><br>

        4. Hold Thou my hand!<br>
        That when I reach the margin<br>
        Of that lone river Thou didst cross for me,<br>
        A heavenly light may flash<br>
        Along its water,<br>
        And every wave like crystal bright<br>
        Shall be.<br><br>

        Amen.<br><br>
      `,
      yo: `
        1. Dà ọwọ́ mi!<br>
        Mo wà lọ́dọ̀ àìlera àti àìmọ̀tọ́,<br>
        Kò yẹ kí n gba ìgbésẹ̀ kan láì ní ìrànlọ́wọ́ rẹ.<br>
        Dà ọwọ́ mi!<br>
        Nígbà náà, Olùgbàlà tó fẹ́ràn, <br>
        Kò sí ìkànsí tó lè dá mi lẹ́rù.<br><br>

        2. Dà ọwọ́ mi!<br>
        Kó mi sunmọ́ Ọ,<br>
        Sí ìfẹ́ rẹ tó ṣe pataki-mi ìrètí mi, ayọ̀ mi, gbogbo ohun mi;<br>
        Dà ọwọ́ mi!<br>
        Kí n má ṣe lọ sí ẹ̀hìn,<br>
        Kí n má ṣe pàdánù Rẹ,<br>
        Ẹsẹ̀ mi tó ń fò, kò ní ṣubú.<br><br>

        3. Dà ọwọ́ mi!<br>
        Ọ̀nà ń rọ̀wọ̀ sí mi<br>
        Ní lọ́nà pẹlẹbẹ tí kò ní ìmọ̀lè rẹ;<br>
        Ṣùgbọ́n nígbà tí mo bá ní ìgbọ́kànlé<br>
        Ní aiyé rẹ tó kún fún imọ̀lè,<br>
        Kí loorekọsẹ̀ ayọ̀,<br>
        Kí ìkínnì fún ọlọ́run gbogbo mi!<br><br>

        4. Dà ọwọ́ mi!<br>
        Kí ìmọ̀lè Ọrun wa<br>
        Nígbà tí mo bá dé ipò ìkànsí<br>
        Ní okùn Ọrun tí o kọjá fún mi,<br>
        Kí ìmọ̀lè Ọrun sọ́wọ̀rọ̀ bọ́n.<br>
        Kí gbogbo igi rẹ̀ jẹ́ oníra ohun tó ní imọ̀lè.<br><br>

        Amen.<br><br>
      `,
      fr: `
        1. Tiens ma main!<br>
        Je suis si faible et sans aide,<br>
        Je n'ose faire un pas sans Ton secours!<br>
        Tiens ma main!<br>
        Car alors, Ô Sauveur aimant,<br>
        Aucun mal ne fera trembler mon âme.<br><br>

        2. Tiens ma main!<br>
        Et attire-moi plus près,<br>
        À Toi-même - mon espoir, ma joie, mon tout ;<br>
        Tiens ma main!<br>
        De peur que je ne m'égare,<br>
        Et Te manquant,<br>
        Que mes pieds tremblants ne tombent.<br><br>

        3. Tiens ma main!<br>
        Le chemin est sombre devant moi<br>
        Sans la lumière de Ta face divine ;<br>
        Mais quand par la foi<br>
        Je saisis sa gloire éclatante,<br>
        Quels sommets de joie,<br>
        Quels chants enivrés m'appartiennent !<br><br>

        4. Tiens ma main!<br>
        Que lorsque j'atteindrai le bord<br>
        De ce fleuve solitaire que Tu as traversé pour moi,<br>
        Une lumière céleste puisse briller<br>
        Sur ses eaux,<br>
        Et que chaque vague, comme du cristal, soit.<br><br>

        Amen.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a beautiful prayer of surrender, asking the Savior to hold our hand through life's challenges and to guide us to eternal joy. It expresses dependence on God's constant presence and protection.",
      yo: "Hymn yi jẹ́ àdúrà tó lẹ́wa ti ìyọnu, tó béèrè pé Olùgbàlà kó ọwọ́ wa láti fi ṣàkóso wa nípasẹ̀ ìpẹ̀yà àti àìlera ayé, kó sì dá wa lórí pẹ̀lú ìtọ́sọ́nà àti ààbò rẹ.",
      fr: "Ce cantique est une belle prière de soumission, demandant au Sauveur de tenir notre main à travers les défis de la vie et de nous guider vers la joie éternelle. Il exprime la dépendance à la présence et à la protection constantes de Dieu."
    }
  },
  54: {  // Hymn 54 - Now the Day is Over
    title: {
      en: "Now the Day is Over",
      yo: "Nígbà tó jẹ́ pé ọjọ́ ti parí",
      fr: "Maintenant que le jour est terminé"
    },
    lyrics: {
      en: `
        1. Now the day is over,<br>
        night is drawing nigh;<br>
        shadows of the evening<br>
        steal across the sky.<br><br>

        2. Jesus, give the weary<br>
        calm and sweet repose;<br>
        with your tend'rest blessing<br>
        may my eyelids close.<br><br>

        3. Comfort ev'ry suff'rer<br>
        watching late in pain;<br>
        those who plan some evil,<br>
        from their sin restrain.<br><br>

        4. Thro' the long night-watches<br>
        may your angels spread<br>
        their bright wings above me,<br>
        watching round my bed.<br><br>

        5. When the morning wakens,<br>
        then may I arise<br>
        pure and fresh and sinless<br>
        in your holy eyes.<br><br>

        Amen.<br><br>
      `,
      yo: `
        1. Nígbà tó jẹ́ pé ọjọ́ ti parí,<br>
        alẹ́ ń bọ̀.<br>
        àwọn ojiji ìrọ̀lẹ̀<br>
        ń wọ̀lé lójú ọ̀run.<br><br>

        2. Jésù, fi ìsinmi tó dáa àti ìtura tó yí,<br>
        fún àwọn tó rẹwà;<br>
        pẹ̀lú ìbáṣepọ̀ rẹ tó kún fún àánú<br>
        kí àwọn èjò rẹ mà ṣe ṣi.<br><br>

        3. Ràn àwọn olùbáàjé,<br>
        tó wà ní ìbànújẹ,<br>
        kí olùṣe gbogbo ẹ̀sùn dájọ wọn<br>
        kí o pa wọn mọ́.<br><br>

        4. Ní gbogbo ọ̀nà alẹ́<br>
        kó àwọn angẹli rẹ fi ẹ̀yà orí<br>
        pẹ̀lú ìmọ̀lè, òkè wa,<br>
        kí wọn dá ìwàrẹ àlàyé gbogbo.<br><br>

        5. Nígbà tí owurọ̀ bá wá,<br>
        kí n lè sùn ní itẹlọ́run,<br>
        mí sí mọ́ lẹ́yìn náà,<br>
        ní ojú rẹ sọ́kè.<br><br>

        Amen.<br><br>
      `,
      fr: `
        1. Maintenant que le jour est fini,<br>
        La nuit approche,<br>
        Les ombres du soir<br>
        S'étendent à travers le ciel.<br><br>

        2. Jésus, accorde au fatigué<br>
        Un calme et doux repos;<br>
        Avec ta bénédiction la plus tendre<br>
        Que mes paupières se ferment.<br><br>

        3. Conforte tous les souffrants<br>
        Qui veillent tard dans la douleur;<br>
        Ceux qui planifient quelque mal<br>
        Retiens-les de leur péché.<br><br>

        4. À travers les longues veilles de la nuit<br>
        Que tes anges répandent<br>
        Leurs ailes brillantes au-dessus de moi,<br>
        Veillant autour de mon lit.<br><br>

        5. Quand le matin se lèvera,<br>
        Que je me réveille<br>
        Pur, frais et sans péché<br>
        Dans tes yeux saints.<br><br>

        Amen.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a peaceful prayer for God's protection and blessing through the night. It seeks rest, comfort, and divine guidance for both the weary and those in need of His mercy.",
      yo: "Hymn yi jẹ́ àdúrà ìdákẹ́jé fún ìṣọ́ra Ọlọ́run àti ìbáṣepọ̀ rẹ nígbà alẹ́. Ó nífẹ̀ẹ́ sí ìsinmi, ìtura àti ìtọ́sọ́nà Ọlọ́run fún àwọn tó rẹwà àti gbogbo ẹni tí ó nílò àánú rẹ.",
      fr: "Ce cantique est une prière paisible pour la protection et la bénédiction de Dieu durant la nuit. Il cherche le repos, le confort et la direction divine pour les fatigués et ceux qui ont besoin de Sa miséricorde."
    }
  },
  55: {  // Hymn 55 - Glory to Thee, My God, This Night
    title: {
      en: "Glory to Thee, My God, This Night",
      yo: "Ọlá fún Ọlọ́run, Olúwa mi, lálẹ́ yìí",
      fr: "Gloire à Toi, Mon Dieu, Cette Nuit"
    },
    lyrics: {
      en: `
        1. Glory to Thee, my God, this night<br>
        For all the blessings of the light;<br>
        Keep me, O keep me, King of kings,<br>
        Beneath Thy own almighty wings.<br><br>
        
        2. Forgive me, Lord, for Thy dear Son,<br>
        The ill that I this day have done,<br>
        That with the world, myself, and Thee,<br>
        I, ere I sleep, at peace may be.<br><br>
        
        3. Teach me to live, that I may dread<br>
        The grave as little as my bed;<br>
        Teach me to die, that so I may<br>
        Rise glorious at the awful day.<br><br>
        
        4. O may my soul on Thee repose,<br>
        And with sweet sleep my eyelids close,<br>
        Sleep that may me more vigorous make<br>
        To serve my God when I awake.<br><br>
        
        5. When in the night I sleepless lie,<br>
        My soul with heavenly thoughts supply;<br>
        Let no ill dreams disturb my rest,<br>
        No powers of darkness me molest.<br><br>
        
        6. Praise God from whom all blessings flow,<br>
        Praise Him, all creatures here below,<br>
        Praise Him above, angelic host,<br>
        Praise Father, Son, and Holy Ghost.
      `,
      yo: `
        1. Ọlá fún Ọlọ́run, Olúwa mi, lálẹ́ yìí<br>
        Fún gbogbo ìbùkún ti ìmọ́lẹ̀;<br>
        Tọju mi, O tọju mi, Ọba ti awọn ọba,<br>
        Níbèré ìkọ̀lù agbára rẹ.<br><br>

        2. Dáríjì mi, Olúwa, fún Ọmọ Rẹ̀ tó fẹ́rẹ̀,<br>
        Iṣẹ́ ìbàjẹ́ tí mo ṣe lónìí,<br>
        Kí n lè ṣe àlàáfíà pẹ̀lú ayé, ara mi, àti Rẹ,<br>
        Ṣáájú kí n sun, kí n lè ní ìbáṣepọ̀ pẹ̀lú Rẹ.<br><br>

        3. Kọ́ mi láti gbe, kí n lè bẹ̀rù<br>
        Òjò bi bẹẹ kò ṣe bẹ̀rù ibèjì mi;<br>
        Kọ́ mi láti kú, kí n lè dide<br>
        Ní ìmọ̀lára atọdún lórí ọjọ́ ayé.<br><br>

        4. Oh, kí ẹ̀mí mi ṣe ìdákẹ́jẹ pẹ̀lú Rẹ,<br>
        Kí o si fi oorun pẹ̀lú ìbèjì mi,<br>
        Ìdákẹ́jẹ yẹn tí yóò fi mi dákẹ́<br>
        Láti ṣiṣẹ́ Ọlọ́run mi nígbà tí mo bá dide.<br><br>

        5. Nígbà tí mo bá ṣe éwì, ní oru,<br>
        Kí ẹ̀mí mi kún fún ìmọ̀lára ọ̀run;<br>
        Kí kò sí àlá ibi kó bà mi lọ́ọ,<br>
        Kó sì péṣé ọdún.<br><br>

        6. O ṣeun, Ọlọ́run, láti inú gbogbo ìbùkún<br>
        O ṣeun gbogbo ẹ̀dá ní ilẹ̀-ayé<br>
        O ṣeun fún ẹ̀mí, àngelí Rẹ<br>
        O ṣeun fun Baba, Ọmọ, àti Ẹ̀mí Mímọ́.
      `,
      fr: `
        1. Gloire à Toi, mon Dieu, cette nuit<br>
        Pour toutes les bénédictions de la lumière ;<br>
        Garde-moi, ô garde-moi, Roi des rois,<br>
        Sous tes ailes puissantes.<br><br>

        2. Pardonne-moi, Seigneur, pour ton cher Fils,<br>
        Le mal que j'ai fait ce jour ;<br>
        Que je puisse être en paix avec le monde, moi-même et Toi,<br>
        Avant que je dorme, en paix je sois.<br><br>

        3. Apprends-moi à vivre, afin que je puisse craindre<br>
        La tombe aussi peu que mon lit ;<br>
        Apprends-moi à mourir, afin que je puisse<br>
        Ressusciter glorieux au jour terrible.<br><br>

        4. Que mon âme repose en Toi,<br>
        Et avec un doux sommeil, que mes paupières se ferment,<br>
        Un sommeil qui me rendra plus vigoureux<br>
        Pour servir mon Dieu quand je me lèverai.<br><br>

        5. Lorsque je suis sans sommeil dans la nuit,<br>
        Que mon âme soit remplie de pensées célestes ;<br>
        Que aucun mauvais rêve ne trouble mon repos,<br>
        Que aucune puissance des ténèbres ne me tourmente.<br><br>

        6. Louez Dieu, d'où viennent toutes les bénédictions,<br>
        Louez-Le, toutes les créatures sous le ciel,<br>
        Louez-Le dans les cieux, hôtes angéliques,<br>
        Louez le Père, le Fils et le Saint-Esprit.
      `
    },
    writeUp: {
      en: "This hymn is a prayer of thanksgiving and request for protection and peace as one closes the day. It emphasizes the importance of God's watchful care and guidance, with a call for rest and spiritual renewal.",
      yo: "Hymn yìí jẹ́ adúrà fún ọpẹ́ àti ìbéèrè ìtọ́jú àti ìbáṣepọ̀ nígbà tí ẹnikan bá pa ọjọ́ rẹ̀. Ó ṣe àfihàn pataki àkóso Ọlọ́run ati àbójútó rẹ, pẹ̀lú ìbéèrè fun ìsinmi ati ìmúlòlùfẹ̀ ẹ̀mí.",
      fr: "Ce cantique est une prière de remerciement et de demande pour la protection et la paix à la fin de la journée. Il met en valeur l'importance des soins et de la guidance vigilants de Dieu, avec un appel au repos et au renouveau spirituel."
    }
  },
  
  56: {  // Hymn 56 - The Church Has Waited Long
    title: {
      en: "The Church Has Waited Long",
      yo: "Ẹ̀ka Àjọsọ́ Ẹ̀sìn Ti Pẹ́",
      fr: "L'Église a Attendu Longtemps"
    },
    lyrics: {
      en: `
        1. The Church has waited long<br>
        Her absent Lord to see,<br>
        And still in loneliness she waits,<br>
        A friendless stranger she.<br><br>

        2. The serpent’s brood increase,<br>
        The pow’rs of Hell grow bold,<br>
        The conflict thickens, faith is low,<br>
        And love is waxing cold.<br><br>

        3. We long to hear your voice,<br>
        To see you face to face,<br>
        To share your crown and glory then,<br>
        As now we share your grace.<br><br>

        4. Should not the loving bride<br>
        The absent bridegroom mourn?<br>
        Should not she wear the weeds of grief<br>
        Until her Lord’s return?<br><br>

        5. The whole creation groans<br>
        And waits to hear the voice<br>
        That shall restore her loveliness<br>
        And make her heart rejoice.<br><br>

        6. Come, Lord, and wipe away<br>
        The curse, the sin, the stain,<br>
        And make this blighted world of ours<br>
        Your own fair world again.
      `,
      yo: `
        1. Ẹ̀ka Àjọsọ́ Ẹ̀sìn ti pẹ́<br>
        Olúwa tí kò sí láti wo<br>
        Tó fi dáhùn pé, òun ṣeé fi pọ́n rẹ́,<br>
        Kí ẹnikẹ́ni lè kó àwọn ọrẹ rẹ.<br><br>

        2. Ẹ̀ka kò tán jùlọ...<br>
      `, // You can complete the Yoruba translation as needed
      fr: `
        1. L'Église a attendu longtemps<br>
        Son Seigneur absent à voir,<br>
        Et toujours dans la solitude elle attend,<br>
        Un étranger sans amis.<br><br>

        2. La progéniture du serpent augmente,<br>
        Les puissances de l'enfer deviennent audacieuses,<br>
        Le conflit s'intensifie, la foi est faible,<br>
        Et l'amour se refroidit.<br><br>

        3. Nous avons hâte d'entendre ta voix,<br>
        De te voir face à face,<br>
        De partager ta couronne et ta gloire alors,<br>
        Comme maintenant nous partageons ta grâce.<br><br>

        4. La fiancée amoureuse ne doit-elle pas pleurer<br>
        Le fiancé absent ?<br>
        Ne doit-elle pas porter les habits de la tristesse<br>
        Jusqu'au retour de son Seigneur ?<br><br>

        5. Toute la création gémit<br>
        Et attend d'entendre la voix<br>
        Qui restaurera sa beauté<br>
        Et remplira son cœur de joie.<br><br>

        6. Viens, Seigneur, et efface<br>
        La malédiction, le péché, la tache,<br>
        Et fais de ce monde défiguré le tien<br>
        Un monde splendide à nouveau.
      `
    },
    writeUp: {
      en: "This hymn expresses the longing and anticipation of the Church for the return of Christ. It highlights the suffering and turmoil in the world, and the hope for the restoration of all things when Christ returns.",
      yo: "Hymn yi ń sọ̀rọ̀ nípa ìfẹ́ àti ìsọ̀kan Èka Ìjọsìn fún ìpadàbọ̀ Olúwa. Ó fi hàn pé ayé ti n ṣiṣẹ́ àti pé ìrètí wa ni pé gbogbo nǹkan yóò tún pada di mimọ̀ nígbà tí Olúwa bá padà wá.",
      fr: "Ce cantique exprime le désir et l'attente de l'Église pour le retour du Christ. Il souligne la souffrance et le tourment dans le monde, et l'espoir de la restauration de toutes choses lorsque le Christ reviendra."
    }
  },
  57: {  // Hymn 57 - Lord, How Long Will Thou Tarry
    title: {
      en: "Lord, How Long Will Thou Tarry",
      yo: "Olúwa, Nígba Mélòó Ni Iwọ Yóò Tẹ̀síwájú?",
      fr: "Seigneur, Combien de Temps Vas-Tu Retarder?"
    },
    lyrics: {
      en: `
        1. Lord, how long will Thou tarry,<br>
        Till Thou will come again?<br>
        We all are almost fainting<br>
        As we watch Thy coming,<br>
        Lord, how long will Thou tarry,<br>
        To keep us waiting Thee?<br>
        Many do not have belief<br>
        That Thou will come again.<br><br>

        2. Lord, how long will Thou tarry,<br>
        Till Thou shall hail us?<br>
        Until we who expect Thee,<br>
        Shall see Thee rejoicing,<br>
        Awake thou sleeping virgin<br>
        Go proclaim His coming,<br>
        That they who’ve slept already<br>
        May wake to welcome Thee.<br><br>

        3. Arise take thy lamp light it,<br>
        Wear Thy holy garment,<br>
        Prepare thyself to meet Him,<br>
        For He shall soon arrive<br>
        Lord, how long will Thou tarry,<br>
        Till Thou cometh again?<br>
        That we may not get tired.<br>
        Till we shall meet with Thee.<br><br>

        Amen.
      `,
      yo: `
        1. Olúwa, nígba mélòó ni ìwọ yóò tẹ̀síwájú,<br>
        Títí tí iwọ yóò bá padà wá?<br>
        A gbogbo wa ti fẹrẹẹ rẹ̀,<br>
        Bí a ṣe ń wo ìbàdí rẹ,<br>
        Olúwa, nígba mélòó ni iwọ yóò tẹ̀síwájú,<br>
        Kí o tó fi wa jẹ́?<br>
        Ọ̀pọ̀ lọ kò ní ìgbàgbọ́<br>
        Pé iwọ yóò padà wá.<br><br>

        2. Olúwa, nígba mélòó ni ìwọ yóò tẹ̀síwájú,<br>
        Títí tí iwọ yóò fi pe wa?<br>
        Títí a ti ń retí rẹ,<br>
        A ó rí i pẹlu ayọ̀,<br>
        Dúró, o dúró yàrá,<br>
        Pẹ̀lú ọrọ̀ rẹ ti wá,<br>
        Kí wọn tí ó ti sùn<br>
        Máa jí lati ka ìbọ̀wọ̀ rẹ.<br><br>

        3. Dide, kó pọ̀n ìkòkò rẹ,<br>
        Wò o, wọ aṣọ mimọ rẹ,<br>
        Pẹ̀lú ìsọ̀kan rẹ, ṣe àgbéyẹ̀wò rẹ,<br>
        Nítorí pé Olúwa yóò pẹ̀rẹ́ dé,<br>
        Olúwa, nígba mélòó ni ìwọ yóò tẹ̀síwájú,<br>
        Títí tí iwọ yóò padà wá?<br>
        Kí a má bà á n'ipẹ̀yà.<br>
        Títí a fi pàdé rẹ.<br><br>

        Amin.
      `,
      fr: `
        1. Seigneur, combien de temps Vas-Tu Retarder,<br>
        Jusqu'à ce que Tu viennes à nouveau ?<br>
        Nous sommes tous presque épuisés<br>
        Tandis que nous attendons Ta venue,<br>
        Seigneur, combien de temps Vas-Tu Retarder,<br>
        Pour nous garder en attente ?<br>
        Beaucoup n'ont pas de croyance<br>
        Que Tu viendras encore.<br><br>

        2. Seigneur, combien de temps Vas-Tu Retarder,<br>
        Jusqu'à ce que Tu nous salues ?<br>
        Jusqu'à ce que nous, qui T'attendons,<br>
        Te voyons réjouis,<br>
        Réveille, toi, la vierge endormie<br>
        Va proclamer Sa venue,<br>
        Que ceux qui sont déjà endormis<br>
        Se réveillent pour t'accueillir.<br><br>

        3. Lève-toi, prends ta lampe et allume-la,<br>
        Porte Ton vêtement sacré,<br>
        Prépare-toi à Le rencontrer,<br>
        Car Il arrivera bientôt.<br>
        Seigneur, combien de temps Vas-Tu Retarder,<br>
        Jusqu'à ce que Tu viennes encore ?<br>
        Afin que nous ne nous fatiguions pas.<br>
        Jusqu'à ce que nous Te rencontrions.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn expresses the yearning of the Church for Christ's return. It emphasizes the waiting, the longing for His coming, and the readiness to meet Him when He comes. The hymn calls for spiritual vigilance and preparation in anticipation of His return.",
      yo: "Hymn yi ń sọ̀rọ̀ nípa ìfé àti ìrètí ti Èka Ìjọsìn fún ìpadàbọ̀ Olúwa. Ó fi hàn pé gbogbo wa ń retí ìpadàbọ̀ rẹ, kí a lè mura sílẹ̀ fún ìpẹ̀yà àti ìpamọ́ wa.",
      fr: "Ce cantique exprime l'aspiration de l'Église au retour du Christ. Il souligne l'attente, le désir de Sa venue, et la préparation à le rencontrer lorsqu'il reviendra. Le cantique appelle à une vigilance spirituelle en prévision de Son retour."
    }
  },
  58: {  // Hymn 58 - Awake, and in His Strength Renewed
    title: {
      en: "Awake, and in His Strength Renewed",
      yo: "Dide, Ki O Si Ninu Agbara Rẹ Tuntun",
      fr: "Réveillez-vous, et Dans Sa Force Renouvelée"
    },
    lyrics: {
      en: `
        1. Awake, and in His strength renewed,<br>
        The battle cry take up again;<br>
        All enemies shall be subdued,<br>
        And Christ the Lord shall reign.<br>
        <strong>Refrain:</strong><br>
        For Christ must reign!<br>
        For Christ must reign!<br>
        Our hope in Him is not in vain,<br>
        For Christ must reign!<br>
        For Christ must reign!<br>
        For Christ must reign!<br>
        Our hope in Him is not in vain,<br>
        For Christ must reign!<br><br>

        2. Too long His followers idly stood,<br>
        By selfish creed and doctrine rent;<br>
        Nor knew that for one Brotherhood<br>
        His own short life was spent.<br>
        <strong>Refrain:</strong><br>
        For Christ must reign!<br>
        For Christ must reign!<br>
        Our hope in Him is not in vain,<br>
        For Christ must reign!<br><br>

        3. Unite and in His strength go on,<br>
        Nor count a life as lost, but gain;<br>
        And soon the victory shall be won,<br>
        For Jesus Christ must reign.<br>
        <strong>Refrain:</strong><br>
        For Christ must reign!<br>
        For Christ must reign!<br>
        Our hope in Him is not in vain,<br>
        For Christ must reign!<br><br>

        4. To dare and do for Him is meet,<br>
        The struggle shall not be in vain;<br>
        The trumpets shall not call “Retreat,”<br>
        For Jesus Christ must reign.<br>
        <strong>Refrain:</strong><br>
        For Christ must reign!<br>
        For Christ must reign!<br>
        Our hope in Him is not in vain,<br>
        For Christ must reign!<br><br>
      `,
      yo: `
        1. Dide, kí o sì ní ìkànsí agbara rẹ tuntun,<br>
        Iparí ogun náà kò pé bẹ́ẹ̀,<br>
        Gbogbo àwọn ọta yóò jẹ̀ ìtẹ́wọ́gbà,<br>
        Àti pé Kristi Olúwa yóò bùkún.<br>
        <strong>Òréfà:</strong><br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Ireti wa nínú Rẹ kò jẹ́ àìdá,<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Ireti wa nínú Rẹ kò jẹ́ àìdá,<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br><br>

        2. Fojú kò sá fún àwọn olùtọ́ Rẹ<br>
        Bí ìmúlò ètò ìdánilójú àti ìlànà tí kì í wọ́n,<br>
        Kò sì mọ̀ pé fún ìkànsí ọjọ́ ìbágbépọ̀ kan,<br>
        Ìṣẹ́ náà jẹ́ ìparí ẹ̀mí Rẹ.<br>
        <strong>Òréfà:</strong><br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Ireti wa nínú Rẹ kò jẹ́ àìdá,<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br><br>

        3. Ṣe ẹ̀yàrun un ati ìkànsí ìkànsí rẹ,<br>
        Kò gbàgbọ́ ayé kó fawẹyẹ tó, ṣùgbọ́n gba wọn;<br>
        Ìkànsí náà jẹ́ àìmọ̀nù àṣẹ,<br>
        Nítorí Kristi Olúwa yóò bùkún.<br>
        <strong>Òréfà:</strong><br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Ireti wa nínú Rẹ kò jẹ́ àìdá,<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br><br>

        4. Lákọ̀ọ́kàn ṣíṣe àti pé wa fún Rẹ<br>
        Ìdánilójú náà kò ní ṣe, ìbànújẹ pé kò ní da a lọ.<br>
        Ìyìn yóò sọ pé “Jẹ́ kó padà wá,”<br>
        Nítorí Kristi Olúwa yóò bùkún.<br>
        <strong>Òréfà:</strong><br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br>
        Ireti wa nínú Rẹ kò jẹ́ àìdá,<br>
        Nítorí Kristi gbọdọ̀ bùkún!<br><br>
      `,
      fr: `
        1. Réveillez-vous, et dans Sa force renouvelée,<br>
        Prenez à nouveau le cri de bataille;<br>
        Tous les ennemis seront soumis,<br>
        Et Christ le Seigneur régnera.<br>
        <strong>Refrain :</strong><br>
        Car Christ doit régner !<br>
        Car Christ doit régner !<br>
        Notre espoir en Lui n'est pas vain,<br>
        Car Christ doit régner !<br>
        Car Christ doit régner !<br>
        Car Christ doit régner !<br>
        Notre espoir en Lui n'est pas vain,<br>
        Car Christ doit régner !<br><br>

        2. Trop longtemps, Ses suiveurs sont restés inactifs,<br>
        Par un credo égoïste et une doctrine déchirée;<br>
        Ils ne savaient pas qu'une fraternité<br>
        A été dépensée dans Sa propre vie.<br>
        <strong>Refrain :</strong><br>
        Car Christ doit régner !<br>
        Car Christ doit régner !<br>
        Notre espoir en Lui n'est pas vain,<br>
        Car Christ doit régner !<br><br>

        3. Unissez-vous et allez dans Sa force,<br>
        Ne comptez pas une vie comme perdue, mais gagnée;<br>
        Et bientôt la victoire sera remportée,<br>
        Car Jésus-Christ doit régner.<br>
        <strong>Refrain :</strong><br>
        Car Christ doit régner !<br>
        Car Christ doit régner !<br>
        Notre espoir en Lui n'est pas vain,<br>
        Car Christ doit régner !<br><br>

        4. Oser et faire pour Lui est approprié,<br>
        La lutte ne sera pas vaine;<br>
        Les trompettes ne crieront pas « Retraite »,<br>
        Car Jésus-Christ doit régner.<br>
        <strong>Refrain :</strong><br>
        Car Christ doit régner !<br>
        Car Christ doit régner !<br>
        Notre espoir en Lui n'est pas vain,<br>
        Car Christ doit régner !<br><br>
      `
    },
    writeUp: {
      en: "This hymn calls believers to rise up with renewed strength, to engage in spiritual battle, and to unite in Christ's name for victory. It emphasizes the certainty that Christ must reign, no matter the obstacles, and that hope in Him is never in vain.",
      yo: "Hymn yi pe awọn ol 믿-ọmọ Ẹda lati dide pẹlu agbara tuntun, lati kópa ninu ija ẹmí, àti lati darapọ̀ ni orukọ Kristi fun ṣẹgun. Ó fi hàn pé Kristi gbọdọ̀ bùkún, kó ṣọwọn ayé ṣaṣe.",
      fr: "Ce cantique appelle les croyants à se lever avec une force renouvelée, à s'engager dans une bataille spirituelle et à s'unir au nom du Christ pour la victoire. Il souligne la certitude que Christ doit régner, peu importe les obstacles, et que l'espoir en Lui n'est jamais vain."
    }
  },
  59: {  // Hymn 59 - Jesus is Coming! Sing the Glad Word
    title: {
      en: "Jesus is Coming! Sing the Glad Word",
      yo: "Jesu n bọ! Kọ Ọrọ Ayọ",
      fr: "Jésus revient! Chantez la Bonne Nouvelle"
    },
    lyrics: {
      en: `
        1. Jesus is coming! O sing the glad word!<br>
        Coming for those He redeemed by His blood,<br>
        Coming to reign as the glorified Lord!<br>
        Jesus is coming again!<br>
        <strong>Refrain:</strong><br>
        Jesus is coming, is coming again!<br>
        Jesus is coming again!<br>
        Shout the glad tidings o’er mountain and plain!<br>
        Jesus is coming again!<br><br>

        2. Jesus is coming! The dead shall arise,<br>
        Loved ones shall meet in a joyful surprise,<br>
        Caught up together to Him in the skies<br>
        Jesus is coming again!<br>
        <strong>Refrain:</strong><br>
        Jesus is coming, is coming again!<br>
        Jesus is coming again!<br>
        Shout the glad tidings o’er mountain and plain!<br>
        Jesus is coming again!<br><br>

        3. Jesus is coming! His saints to release;<br>
        Coming to give to the warring earth peace:<br>
        Sinning and sighing, and sorrow shall cease.<br>
        Jesus is coming again!<br>
        <strong>Refrain:</strong><br>
        Jesus is coming, is coming again!<br>
        Jesus is coming again!<br>
        Shout the glad tidings o’er mountain and plain!<br>
        Jesus is coming again!<br><br>

        4. Jesus is coming! The promise is true;<br>
        Who are the chosen, the faithful, the few,<br>
        Waiting and watching, prepared for review?<br>
        Jesus is coming again!<br>
        <strong>Refrain:</strong><br>
        Jesus is coming, is coming again!<br>
        Jesus is coming again!<br>
        Shout the glad tidings o’er mountain and plain!<br>
        Jesus is coming again!<br><br>
      `,
      yo: `
        1. Jesu n bọ! Kọ ìhìn ayọ́ yìí!<br>
        Bó ń bọ fún àwọn tí ó ra wọn ní ẹ̀jẹ̀ Rẹ,<br>
        Bó ń bọ láti ṣákóso gẹ́gẹ́ bí Olúwa tí a kọ́ ni ògo!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        <strong>Òréfà:</strong><br>
        Jesu n bọ, n bọ lẹ́ẹ̀kan síi!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        Kó gbogbo ìhìn ayọ́ lórí òkè àti pẹ̀lú ìtẹ́tí!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br><br>

        2. Jesu n bọ! Ọkú yóò dìde,<br>
        Àwọn olùfẹ́ yóò pàdé pẹ̀lú ìyàláyà,<br>
        A ó bà á pọ̀ síi, wọ́n yóò sọ wọ́n sì Him ní òrun<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        <strong>Òréfà:</strong><br>
        Jesu n bọ, n bọ lẹ́ẹ̀kan síi!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        Kó gbogbo ìhìn ayọ́ lórí òkè àti pẹ̀lú ìtẹ́tí!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br><br>

        3. Jesu n bọ! Láti tú àwọn olùṣèèṣọ́ Rẹ;<br>
        Bó ń bọ láti fún ilẹ̀ àjàkálẹ̀ ogun ní ìkànsí:<br>
        Ẹ̀sùn àti àtúnbí, àti ìbànújẹ yóò parí.<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        <strong>Òréfà:</strong><br>
        Jesu n bọ, n bọ lẹ́ẹ̀kan síi!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        Kó gbogbo ìhìn ayọ́ lórí òkè àti pẹ̀lú ìtẹ́tí!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br><br>

        4. Jesu n bọ! Ìlérí náà jẹ́ òtítọ́;<br>
        Ta ni àwọn ti a yàn, awọn olùgbọ̀n, awọn kekere,<br>
        Tí ń dúró àti ń wo, tí wọ́n ṣètò fún ìpẹ̀yà?<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        <strong>Òréfà:</strong><br>
        Jesu n bọ, n bọ lẹ́ẹ̀kan síi!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br>
        Kó gbogbo ìhìn ayọ́ lórí òkè àti pẹ̀lú ìtẹ́tí!<br>
        Jesu n bọ lẹ́ẹ̀kan síi!<br><br>
      `,
      fr: `
        1. Jésus revient! Chantez la bonne nouvelle!<br>
        Il revient pour ceux qu'Il a rachetés par Son sang,<br>
        Il revient pour régner comme le Seigneur glorifié!<br>
        Jésus revient encore!<br>
        <strong>Refrain :</strong><br>
        Jésus revient, revient encore!<br>
        Jésus revient encore!<br>
        Criez les bonnes nouvelles sur les montagnes et les plaines!<br>
        Jésus revient encore!<br><br>

        2. Jésus revient! Les morts ressusciteront,<br>
        Les bien-aimés se rencontreront dans une joyeuse surprise,<br>
        Prendrez ensemble pour aller à Lui dans le ciel.<br>
        Jésus revient encore!<br>
        <strong>Refrain :</strong><br>
        Jésus revient, revient encore!<br>
        Jésus revient encore!<br>
        Criez les bonnes nouvelles sur les montagnes et les plaines!<br>
        Jésus revient encore!<br><br>

        3. Jésus revient! Libérer Ses saints;<br>
        Il revient pour donner la paix à la terre en guerre :<br>
        Le péché et les soupirs, et la tristesse cesseront.<br>
        Jésus revient encore!<br>
        <strong>Refrain :</strong><br>
        Jésus revient, revient encore!<br>
        Jésus revient encore!<br>
        Criez les bonnes nouvelles sur les montagnes et les plaines!<br>
        Jésus revient encore!<br><br>

        4. Jésus revient! La promesse est vraie;<br>
        Qui sont les élus, les fidèles, les quelques-uns,<br>
        Attendant et veillant, prêts pour la révision?<br>
        Jésus revient encore!<br>
        <strong>Refrain :</strong><br>
        Jésus revient, revient encore!<br>
        Jésus revient encore!<br>
        Criez les bonnes nouvelles sur les montagnes et les plaines!<br>
        Jésus revient encore!<br><br>
      `
    },
    writeUp: {
      en: "This hymn announces the joyous return of Jesus Christ. It reminds the faithful of the promise that He will return to reign, raise the dead, bring peace, and fulfill the promise to those who are prepared and watching for Him.",
      yo: "Hymn yi kede ìpadà Jesu Kristi pẹ̀lú ayọ̀. Ó rántí àwọn olùgbọ̀n pé ìlérí pé Yóò padà láti ṣákóso, dìde awọn ọkú, mú ìkànsí wa, àti ṣẹ̀ṣé ìlérí rẹ fún àwọn tí ń dúró àti ń wo.",
      fr: "Ce cantique annonce le joyeux retour de Jésus-Christ. Il rappelle aux croyants la promesse qu'Il reviendra régner, ressusciter les morts, apporter la paix et accomplir la promesse pour ceux qui sont prêts et qui Le veillent."
    }
  },
  
  60: {  // Hymn 60 - The Lord is Coming, World Trembles
    title: {
      en: "The Lord is Coming, World Trembles",
      yo: "Olúwa n bọ, Ilẹ̀ yóò bàjẹ́",
      fr: "Le Seigneur revient, le monde tremble"
    },
    lyrics: {
      en: `
        1. The Lord is coming, world trembles,<br>
        All the hills shall shift where they stay;<br>
        And all the stars of the heavens<br>
        Shall cease from bringing forth their light.<br><br>

        2. The Lord is coming, not as 'fore,<br>
        When He came in humility;<br>
        The Lamb of God that was slaughtered,<br>
        The Great Sufferer who died to save.<br><br>

        3. The Lord is coming in wonder,<br>
        In fire and in full armour;<br>
        On the cherubim wings He flies,<br>
        To judge the dwellers of the world.<br><br>

        4. And this once was the Man who walked,<br>
        Like the people by the highways!<br>
        He was persecuted often,<br>
        Ah! this was crucified for us!<br><br>

        5. An act like this is wickedness,<br>
        Fit to be buried in the sand:<br>
        But the faith that succeeds at last,<br>
        Rejoicing shall sing, "Lord has come".<br><br>

        Amen.
      `,
      yo: `
        1. Olúwa n bọ, ilẹ̀ yóò bàjẹ́,<br>
        Gbogbo òkè yóò yí padà láti ibi tí wọn dúró;<br>
        Gbogbo irawọ̀ ọrun yóò parí,<br>
        Kò ní ṣe ìtànkálẹ̀ imọ́ wọn mọ́.<br><br>

        2. Olúwa n bọ, kì í ṣe gẹ́gẹ́ bíi ṣáájú,<br>
        Nígbà tó bọ̀ láti hùwà àlàáfíà;<br>
        Ọba-èèyàn tí a pa,<br>
        Olùtùúbọ̀ Tó ṣé èyí nítorí ìgbàlà.<br><br>

        3. Olúwa n bọ pẹ̀lú ìyanu,<br>
        Ní iná àti pẹ̀lú gbogbo ìdájọ́;<br>
        Lórí ẹyẹ cherubim, ó ń fò,<br>
        Láti dá àwọn ará ilé-ayé náà ìdájọ́.<br><br>

        4. Àti pé, ẹnì kan náà ni Ó rìn,<br>
        Bí àwọn ènìyàn nínú òpópónà!<br>
        Wọ́n ti fi í ẹ̀sùn wọ̀pọ̀,<br>
        Ah! ẹyí ni a kọ́ Kíni tó jẹ́ kó pa fún wa!<br><br>

        5. Iṣẹ́ tó rọrùn bẹ́ẹ̀ ni ìbàjẹ́,<br>
        Tó yẹ kí ó jẹ́ pé a fi rẹ̀ sí ilẹ̀ àrọ̀:<br>
        Ṣùgbọ́n ìgbàgbọ́ tó bá ní aṣeyọrí ní ìkẹyìn,<br>
        Pẹ̀lú ayọ̀ yóò kó orin, "Olúwa ti bọ́".<br><br>

        Amin.
      `,
      fr: `
        1. Le Seigneur revient, le monde tremble,<br>
        Toutes les collines se déplaceront là où elles se trouvent;<br>
        Et toutes les étoiles des cieux<br>
        Cesseront de briller.<br><br>

        2. Le Seigneur revient, pas comme auparavant,<br>
        Quand Il est venu dans l'humilité;<br>
        L'Agneau de Dieu qui a été sacrifié,<br>
        Le Grand Souffrant qui est mort pour sauver.<br><br>

        3. Le Seigneur revient avec merveille,<br>
        Dans le feu et dans toute l'armure;<br>
        Sur les ailes des chérubins, Il vole,<br>
        Pour juger les habitants du monde.<br><br>

        4. Et c'est celui qui marchait autrefois,<br>
        Comme les gens sur les routes!<br>
        Il a été persécuté souvent,<br>
        Ah! c'est celui qui a été crucifié pour nous!<br><br>

        5. Un acte comme celui-ci est de l'injustice,<br>
        Qui mérite d'être enterré dans le sable;<br>
        Mais la foi qui réussit à la fin,<br>
        En se réjouissant, chantera, "Le Seigneur est venu".<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn describes the second coming of the Lord in power and glory, contrasting His first humble arrival with His triumphant return to judge the world and bring justice. It serves as a reminder of His sacrifice and the ultimate victory of faith.",
      yo: "Hymn yi ṣe apejuwe ìpadà Kejì Olúwa pẹ̀lú agbára àti ògo, ní fifi hàn pé ó bọ ní ìwà pẹ̀lú ìwọ̀n ìbáṣepọ̀ rẹ̀ àti pẹ̀lú ìbáṣepọ̀ rẹ̀ pẹ̀lú àwọn ènìyàn. Ó ránṣẹ́ pé ṣùgbọ́n ìgbàgbọ́ jẹ́ ẹgbẹ́ aṣeyọrí ti ọjọ́ iwájú.",
      fr: "Ce cantique décrit le second avènement du Seigneur dans la puissance et la gloire, contrastant Sa première venue humble avec Son retour triomphal pour juger le monde et apporter la justice. Il rappelle Son sacrifice et la victoire ultime de la foi."
    }
  },
  61: {  // Hymn 61 - Jesus is Coming with Joy in the Sky
    title: {
      en: "Jesus is Coming with Joy in the Sky",
      yo: "Jesu ń bọ pẹ̀lú ayọ̀ ní ọ̀run",
      fr: "Jésus vient avec joie dans le ciel"
    },
    lyrics: {
      en: `
        1. Jesus is coming with joy in the sky,<br>
        Oh happy day! oh, happy day!<br>
        Then all who love Him shall heaven-ward fly:<br>
        Oh happy day! happy day!<br><br>

        Upward shall fly to the Lord in the air,<br>
        Together with Jesus we all shall be there,<br>
        Far from the earth and from sorrow and care:<br>
        Oh happy day! happy day!<br><br>

        2. Parents and children shall then again meet;<br>
        Oh happy day! oh happy day!<br>
        Sisters and brothers oh, it will be sweet!<br>
        Oh happy day! happy day!<br><br>

        We missed them on earth, to Jesus they went;<br>
        We love them as ever their absence lament<br>
        Soon we shall meet them and then be content,<br>
        Oh happy day! happy day!<br><br>

        3. Are we all ready, should Jesus now call?<br>
        Oh happy day! oh happy day!<br>
        Would each one answer, the great and the small?<br>
        Oh happy day! happy day!<br><br>

        We long to rise up and with thee to be,<br>
        Thy face, blessed Jesus Our Saviour to see<br>
        Would you then, dear children, sing sweetly with me?<br>
        Oh happy day! happy day!<br><br>

        4. Some would stay weeping unable to sing,<br>
        Oh happy day! oh happy day!<br>
        Yet all may rejoice and their glad praises bring;<br>
        Oh happy day! happy day!<br><br>

        For Jesus still waits, He tarries that we<br>
        May trust in His name, and thus ready may be,<br>
        When brightly beaming, His glory we see:<br>
        Oh happy day! happy day!<br>
      `,
      yo: `
        1. Jesu ń bọ pẹ̀lú ayọ̀ ní ọ̀run,<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br>
        Nígbà náà gbogbo tí ó nífẹ̀ẹ́ Sí i, yóò fò sí ọ̀run:<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        Yóò fò s'òkè lọ sí Olúwa nínú afẹ́fẹ́,<br>
        Pẹ̀lú Jesu, gbogbo wa yóò wà níbè,<br>
        Jìnà sí ilẹ̀ ayé àti ìbànújẹ àti ìbàjẹ́:<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        2. Àwọn òbí àti àwọn ọmọ yóò pàdé lẹ́kùn-ún-rẹ̀:<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br>
        Àwọn arákùnrin àti arabìnrin, ó yóò dùn pẹ̀lú!<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        A padà wọn ní ilẹ̀ ayé, wọ́n sì lọ sí Jesu;<br>
        A nífẹ̀ẹ́ wọn gẹ́gẹ́ bíi pé wọn kò sì n'ibè,<br>
        Láìpé a ó pàdé wọn, a ó sì yọ̀ pẹ̀lú wọn,<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        3. Ṣé a ti ṣetan, bí Jesu bá pe wa bayi?<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br>
        Ṣé kọọkan yóò dáhùn, ìwọ̀n ńlá àti kékè?<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        A ń fẹ́ láti dìde kí a sì wà pẹ̀lú rẹ,<br>
        Lati rí ojú rẹ, Olúwa Jesu Olùgbàlà wa,<br>
        Ṣé ẹ, ọmọde, ẹ fẹ́ kọ orin pẹ̀lú mi?<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        4. Diẹ̀ ninu wọn yóò wà ní ẹ̀kún, kò le kọ orin,<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br>
        Ṣùgbọ́n gbogbo wa lè yọ̀, kó orin ayọ̀ wọn:<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br><br>

        Nítorí Jesu ń dúró, Ó nífi ẹ̀sìn wa lọ́nà pé<br>
        A lè fi orúkọ rẹ̀ gbà, kí a lè ṣetan,<br>
        Nígbà tí ògo rẹ̀ yóò tan imọ́lẹ̀,<br>
        Ayọ̀ ọjọ́! ayọ̀ ọjọ́!<br>
      `,
      fr: `
        1. Jésus vient avec joie dans le ciel,<br>
        Oh jour heureux ! oh, jour heureux !<br>
        Alors tous ceux qui L'aiment s'envoleront vers le ciel :<br>
        Oh jour heureux ! jour heureux !<br><br>

        Ils s'envoleront vers le Seigneur dans l'air,<br>
        Ensemble avec Jésus, nous serons tous là,<br>
        Loin de la terre et de la souffrance et des soucis :<br>
        Oh jour heureux ! jour heureux !<br><br>

        2. Les parents et les enfants se retrouveront alors ;<br>
        Oh jour heureux ! oh, jour heureux !<br>
        Les sœurs et les frères, oh, ce sera doux !<br>
        Oh jour heureux ! jour heureux !<br><br>

        Nous les avons manqués sur terre, ils sont allés vers Jésus ;<br>
        Nous les aimons comme toujours, leur absence nous fait souffrir.<br>
        Bientôt nous les retrouverons et serons contents,<br>
        Oh jour heureux ! jour heureux !<br><br>

        3. Sommes-nous prêts, si Jésus nous appelle maintenant ?<br>
        Oh jour heureux ! oh, jour heureux !<br>
        Chacun répondra-t-il, les grands et les petits ?<br>
        Oh jour heureux ! jour heureux !<br><br>

        Nous désirons nous élever et être avec toi,<br>
        Voir ton visage, bienheureux Jésus, notre Sauveur,<br>
        Alors, chers enfants, chanterez-vous doucement avec moi ?<br>
        Oh jour heureux ! jour heureux !<br><br>

        4. Certains resteront en pleurant, incapables de chanter,<br>
        Oh jour heureux ! oh, jour heureux !<br>
        Pourtant, tous pourront se réjouir et apporter leurs louanges joyeuses ;<br>
        Oh jour heureux ! jour heureux !<br><br>

        Car Jésus attend toujours, Il tarde afin que nous<br>
        Puissions mettre notre confiance en Son nom, et être prêts,<br>
        Quand Sa gloire brille, nous la verrons :<br>
        Oh jour heureux ! jour heureux !<br>
      `
    },
    writeUp: {
      en: "This hymn expresses the joy and anticipation of Jesus' return. It emphasizes the reunion of loved ones, the readiness required for His call, and the happiness of being with Jesus in His glory, away from sorrow and care.",
      yo: "Hymn yi sọ ìròyìn ayọ̀ ati ìretí ìpadà Jesu. Ó fi hàn pé ìkànsí àwọn olólùfẹ́, ìmúrasílẹ̀ tó yẹ fun ìpè Rẹ, àti ayọ̀ tí ó wà nínú ìwà pẹ̀lú Jesu nínú ògo Rẹ, jìnà sí ìbànújẹ àti ìbàjẹ́.",
      fr: "Ce cantique exprime la joie et l'anticipation du retour de Jésus. Il souligne la réunion des êtres chers, la préparation nécessaire pour Son appel et la joie d'être avec Jésus dans Sa gloire, loin de la souffrance et des soucis."
    }
  },
  62: {  // Hymn 62 - Arm of the Lord, Awake, Awake
    title: {
      en: "Arm of the Lord, Awake, Awake",
      yo: "Ọwọ́ Olúwa, jí, jí",
      fr: "Bras du Seigneur, réveille-toi, réveille-toi"
    },
    lyrics: {
      en: `
        1. Arm of the Lord, awake, awake!<br>
        Put on thy strength, the nations shake,<br>
        And let the world, adoring, see<br>
        Triumphs of mercy wrought by thee.<br><br>

        2. Say to the heathen from thy throne:<br>
        "I am Jehovah, God alone."<br>
        Thy voice their idols shall confound,<br>
        And cast their altars to the ground.<br><br>

        3. Let Zion's time of favor come;<br>
        O bring the tribes of Israel home;<br>
        And let our wond'ring eyes behold<br>
        Gentile and Jews in Jesus' fold.<br><br>

        4. Almighty God, thy grace proclaim<br>
        In every clime of every name;<br>
        Let adverse pow'rs before thee fall,<br>
        And crown the Saviour Lord of all.<br><br>

        Amen.
      `,
      yo: `
        1. Ọwọ́ Olúwa, jí, jí!<br>
        Fi agbára rẹ̀ sílẹ̀, àwọn orílẹ̀-èdè ń ròyìn,<br>
        Kí gbogbo ayé, pẹ̀lú ìkíni, rí<br>
        Aṣeyọrí ìbáṣepọ̀ tí o ṣe fún wa.<br><br>

        2. So fún àwọn àjèjì láti orí ìtẹ́ rẹ:<br>
        "Ẹ jẹ́ kí n jẹ́ Jehova, Ọlọ́run nìkan."<br>
        Ohùn rẹ̀ yóò fi ìdọ̀tí àwọn ọ̀rọ̀ wọn,<br>
        Ó sì máa da àwọn àlùfáà wọn lórí ilẹ̀.<br><br>

        3. Kí àkókò ìfaramọ́ Zion wá;<br>
        Ẹ jẹ́ kí ẹ̀yà Israẹli padà sí ilé;<br>
        Kí a máa wo pẹ̀lú ìyanu awọn oju wa<br>
        Ẹlòmíràn àti àwọn Júù wà nínú ìkànsí Jesu.<br><br>

        4. Ọlọ́run Agbára, kéde ìfẹ́ rẹ<br>
        Ní gbogbo ilẹ̀ àti gbogbo orúkọ;<br>
        Kí gbogbo agbára tó jẹ́ lodi sí ẹ, dáhùn,<br>
        Kí a sì ṣe Krona Olúwa Olùgbàlà gbogbo.<br><br>

        Amin.
      `,
      fr: `
        1. Bras du Seigneur, réveille-toi, réveille-toi !<br>
        Mets ta force, les nations tremblent,<br>
        Et que le monde, en adoration, voie<br>
        Les triomphes de la miséricorde accomplis par toi.<br><br>

        2. Dis aux païens depuis ton trône :<br>
        "Je suis Jehovah, Dieu seul."<br>
        Ta voix confondra leurs idoles,<br>
        Et renversera leurs autels.<br><br>

        3. Que le temps de la faveur de Sion vienne ;<br>
        Ramène les tribus d'Israël à la maison ;<br>
        Et que nos yeux émerveillés voient<br>
        Les gentils et les juifs dans le troupeau de Jésus.<br><br>

        4. Dieu Tout-Puissant, proclame ta grâce<br>
        Dans chaque climat de chaque nom ;<br>
        Que les puissances adverses tombent devant toi,<br>
        Et couronne le Sauveur Seigneur de tout.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn calls on the mighty arm of God to awaken and act in strength to bring about His triumphs of mercy and justice. It emphasizes God's sovereignty over all nations and peoples, urging the proclamation of His grace to all the earth.",
      yo: "Hymn yi pe ọwọ́ agbára Olúwa láti jí kí ó ṣe ìṣe agbára rẹ̀, kí ó fi hàn ìbáṣepọ̀ àti ìdájọ́ rẹ. Ó fi hàn ìjọba Ọlọ́run lórí gbogbo orílẹ̀-èdè àti àwọn ènìyàn, kí ó léde ìfẹ́ Rẹ sí gbogbo ayé.",
      fr: "Ce cantique appelle le bras puissant de Dieu à se réveiller et à agir dans sa force pour accomplir ses triomphes de miséricorde et de justice. Il souligne la souveraineté de Dieu sur toutes les nations et peuples, en exhortant à la proclamation de sa grâce sur toute la terre."
    }
  },
  63: {  // Hymn 63 - He is Gone, A Cloud of Light
    title: {
      en: "He is Gone, A Cloud of Light",
      yo: "Ó Ti Lọ, Àwọ̀n Iná Ọjọ́",
      fr: "Il est parti, un nuage de lumière"
    },
    lyrics: {
      en: `
        1. He is gone—a cloud of light<br>
        Has received Him from our sight;<br>
        High in Heav’n, where eye of men<br>
        Follows not, nor angels’ ken;<br>
        Through the veils of time and space,<br>
        Passed into the holiest place;<br>
        All the toil, the sorrow done,<br>
        All the battle fought and won.<br><br>

        2. He is gone—and we remain<br>
        In this world of sin and pain:<br>
        In the void which He has left<br>
        On this earth, of Him bereft.<br>
        We have still His work to do,<br>
        We can still His path pursue;<br>
        Seek Him both in friend and foe,<br>
        In ourselves His image show.<br><br>

        3. He is gone—we heard Him say,<br>
        Good that I should go away,<br>
        Gone is that dear form and face,<br>
        But not gone His present grace;<br>
        Though Himself no more we see,<br>
        Comfortless we cannot be:<br>
        No, His Spirit still is ours,<br>
        Quickening, freshening all our powers.<br><br>

        4. He is gone—towards their goal<br>
        World and church must onward roll;<br>
        Far behind we leave the past;<br>
        Forward are our glances cast:<br>
        Still His words before us range<br>
        Through the ages as they change:<br>
        Wheresoe’er the truth shall lead,<br>
        He will give whate’er we need.<br><br>

        5. He is gone—but we once more<br>
        Shall behold Him as before;<br>
        In the heaven of heavens the same,<br>
        As on earth He went and came;<br>
        In the many mansions there,<br>
        Place for us He will prepare;<br>
        In that world unseen, unknown,<br>
        He and we shall yet be one.<br><br>

        6. He is gone—but not in vain,<br>
        Wait until He comes again:<br>
        He is risen, He is not here,<br>
        Far above this earthly sphere;<br>
        Evermore in heart and mind<br>
        There our peace in Him we find:<br>
        To our own eternal Friend,<br>
        Thitherward let us ascend.
      `,
      yo: `
        1. Ó ti lọ—àwọ̀n iná ọjọ́<br>
        Ti gba a kúrò lọ́wọ́ wa;<br>
        Lóòótọ́ nínú ọ̀run, ibi tí ojú ènìyàn<br>
        Kò lè rí, tàbí àwọn angẹli mọ́;<br>
        Nípasẹ̀ ìwọ̀n àkókò àti àyè,<br>
        Ó kọjá sí ilé àdúrà tó jùlọ;<br>
        Gbogbo ìrora, gbogbo ìṣòro ṣe,<br>
        Gbogbo ìjà tí a jà ti ṣẹgun.<br><br>

        2. Ó ti lọ—àmọ́ a ń wà<br>
        Nínú ayé yii ti ẹ̀sùn àti ìbànújẹ́:<br>
        Nínú àkọsílẹ̀ tí ó fi sílẹ̀<br>
        Lórí ilẹ̀, ti a kò sì rí i mọ́.<br>
        A ní iṣẹ́ rẹ̀ láti ṣe,<br>
        A lè tẹ̀síwájú lẹ́sẹ̀ rẹ̀;<br>
        Wa fún un nínú ọ̀rẹ́ àti ọ̀tá,<br>
        Nínú ara wa, àwòrán rẹ̀ fihan.<br><br>

        3. Ó ti lọ—àti pé a gbọ́ pé,<br>
        Dára fún mi láti lọ,<br>
        Ó lọ síta, fáàkànsí rẹ̀ àti fọọmu rẹ<br>
        Ṣùgbọ́n oṣùtú náà kò lọ;<br>
        Bó tilẹ̀ jẹ́ pé a kò mọ̀ ọ ní kedere,<br>
        Kò ṣòro fún wa;<br>
        Rárá, Ẹmi rẹ̀ sí wa,<br>
        Tó ń mú gbogbo agbára wa ṣẹ.<br><br>

        4. Ó ti lọ—ọjọ́ kàn náà,<br>
        Ayé àti ìjọ gbọdọ̀ lọ síwájú;<br>
        A fi ìsàlẹ̀ rẹ̀ sílẹ̀,<br>
        Ṣùgbọ́n gbogbo wa ń wo ọ níwaju:<br>
        Ọ̀rọ̀ rẹ̀ wa lórí wa,<br>
        Kó kọ́ gbogbo ayé bi wọn ṣe yí;<br>
        Níbi gbogbo ibi ti òtítọ́ yóò yí wa,<br>
        Yóò fún wa ní ohun tí a nilo.<br><br>

        5. Ó ti lọ—ṣùgbọ́n a ó tún ri i<br>
        Gẹ́gẹ́ bíi ti ṣáájú;<br>
        Ní ọ̀run ọ̀run, kò yàtò,<br>
        Bíi ti Ó lọ àti pé,<br>
        Ní ọ̀pọ̀lọpọ̀ ilé nínú ọ̀run,<br>
        A à ní ibi ti a ó fi mọ́ra wa;<br>
        Ní ayé tí a kò rí, tí a kò mọ́,<br>
        Ó àti wa, a ó jẹ́ ọkan.<br><br>

        6. Ó ti lọ—ṣùgbọ́n kò lọ ní àìlera,<br>
        Dúró de pé Ó ti bọ́;<br>
        Ó jí, kò sí níhìn-ín,<br>
        Gígùn jù láti inú ilẹ̀ yii;<br>
        Ní gbogbo ìkẹyìn ni ọkàn àti ọpọlọ wa<br>
        A ó rí ìdánilójú nínú Ẹmi rẹ̀:<br>
        Sí alábàájọ rẹ̀, jẹ́ kí a tọ̀ sí àlááfíà.
      `,
      fr: `
        1. Il est parti—un nuage de lumière<br>
        L'a reçu de notre vue ;<br>
        Haut dans les cieux, là où l'œil des hommes<br>
        Ne suit pas, ni la connaissance des anges ;<br>
        À travers les voiles du temps et de l'espace,<br>
        Il est passé dans le lieu très saint ;<br>
        Toute la peine, toute la douleur terminée,<br>
        Toute la bataille menée et gagnée.<br><br>

        2. Il est parti—et nous restons<br>
        Dans ce monde de péché et de douleur :<br>
        Dans le vide qu'il a laissé<br>
        Sur cette terre, sans Lui.<br>
        Nous avons encore Son travail à faire,<br>
        Nous pouvons encore poursuivre Son chemin ;<br>
        Le chercher tant chez l'ami que l'ennemi,<br>
        En nous, Son image montrer.<br><br>

        3. Il est parti—nous L'avons entendu dire,<br>
        Il est bon que je parte,<br>
        Parti cette forme chère et ce visage,<br>
        Mais Sa grâce présente n'est pas partie ;<br>
        Bien qu'Il-même ne soit plus visible,<br>
        Sans réconfort nous ne pouvons être :<br>
        Non, Son Esprit est encore à nous,<br>
        Vivifiant, rafraîchissant toutes nos forces.<br><br>

        4. Il est parti—vers leur but<br>
        Le monde et l'église doivent avancer ;<br>
        Loin derrière nous, nous laissons le passé ;<br>
        En avant, nos regards sont portés ;<br>
        Ses paroles toujours devant nous,<br>
        À travers les âges, elles changent ;<br>
        Où que la vérité nous mène,<br>
        Il nous donnera tout ce dont nous avons besoin.<br><br>

        5. Il est parti—mais nous Le reverrons<br>
        Comme auparavant ;<br>
        Dans le ciel des cieux, Il sera le même,<br>
        Comme sur terre Il allait et venait ;<br>
        Dans les nombreuses demeures là-bas,<br>
        Un endroit pour nous, Il préparera ;<br>
        Dans ce monde invisible, inconnu,<br>
        Lui et nous serons encore un.<br><br>

        6. Il est parti—mais pas en vain,<br>
        Attendez jusqu'à ce qu'Il revienne ;<br>
        Il est ressuscité, Il n'est pas ici,<br>
        Bien au-dessus de cette sphère terrestre ;<br>
        Toujours dans nos cœurs et nos esprits,<br>
        Là, notre paix en Lui nous trouvons :<br>
        À notre éternel Ami,<br>
        Que nous montions vers Lui.
      `
    },
    writeUp: {
      en: "This hymn reflects on the ascension of Jesus into heaven and the hope of His return. It describes the sorrow of His absence but also the comfort of His ongoing presence through the Holy Spirit, as well as the promise of His return and eternal fellowship.",
      yo: "Hymn yi ṣe ìtọ́ka si ìrìn àjò Olúwa sí ọ̀run àti ìrètí pé Yóò padà. Ó ṣàpẹẹrẹ ìbànújẹ́ tí a ní nípasẹ̀ ìkọ̀sílẹ̀ rẹ̀, ṣùgbọ́n ó tún fi hàn ìtẹ́lọ́run pé Ẹmi Rẹ̀ wa pẹ̀lú wa àti ìlérí ìpadà rẹ àti ìjọpọ̀ títí ayérayé.",
      fr: "Ce cantique reflète l'ascension de Jésus au ciel et l'espoir de Son retour. Il décrit la tristesse de Son absence mais aussi le réconfort de Sa présence continue à travers le Saint-Esprit, ainsi que la promesse de Son retour et de la communion éternelle."
    }
  },
  64: {  // Hymn 64 - We Pray the Lord Who Mounts
    title: {
      en: "We Pray the Lord Who Mounts",
      yo: "A Gbọ̀ Olúwa Tí Ó Dúró",
      fr: "Nous prions le Seigneur qui monte"
    },
    lyrics: {
      en: `
        1. Marvelous grace of our loving Lord,<br>
        Grace that exceeds our sin and our guilt!<br>
        Yonder on Calvary's mount out-poured–<br>
        There where the blood of the Lamb was spilt.<br>
        Refrain:<br>
        Grace, grace, God's grace,<br>
        Grace that will pardon and cleanse within;<br>
        Grace, grace, God's grace,<br>
        Grace that is greater than all our sin!<br><br>

        2. Sin and despair, like the sea-waves cold,<br>
        Threaten the soul with infinite loss;<br>
        Grace that is greater– yes, grace untold–<br>
        Points to the Refuge, the mighty Cross. [Refrain]<br><br>

        3. Marvelous, infinite, matchless grace,<br>
        Freely bestowed on all who believe!<br>
        All who are longing to see His face,<br>
        Will you this moment His grace receive? [Refrain]
      `,
      yo: `
        1. Ìbùkún àtọ́kànwá ti Olúwa aláìláàánú wa,<br>
        Ìbùkún tó ju ẹ̀sùn wa àti ẹ̀sùn wa lọ!<br>
        Níbẹ̀ lórí òkè Kálfárí, tí a kọ sẹ́yìn–<br>
        Níbi tí ẹ̀jẹ̀ Ọdá-èèyàn ti ṣàn.<br>
        Ìkànsí:<br>
        Ìbùkún, ìbùkún, ìbùkún Ọlọ́run,<br>
        Ìbùkún tó máa dáhùn àti tó máa mú inú wa dá;<br>
        Ìbùkún, ìbùkún, ìbùkún Ọlọ́run,<br>
        Ìbùkún tó tóbi ju gbogbo ẹ̀sùn wa lọ!<br><br>

        2. Ẹ̀sùn àti ìbànújẹ́, bíi ìdí omi títà,<br>
        Tó ń dá ọkàn sílẹ̀ pẹ̀lú ìparí ayé;<br>
        Ìbùkún tó tóbi—bẹ́ẹ̀, ìbùkún tó rọrùn–<br>
        Tó ń tọ́ka sí Abo, àtàárọ̀ ńlá. [Ìkànsí]<br><br>

        3. Ìbùkún àtọ́kànwá, tó gaju, tó kọjá gbogbo,<br>
        Tí a fi fún gbogbo àwọn tó bá gbagbọ́!<br>
        Gbogbo àwọn tó ń fẹ́ láti rí oju Rẹ,<br>
        Ṣé ìwọ yóò gba ìbùkún Rẹ ní àkókò yìí? [Ìkànsí]
      `,
      fr: `
        1. Grâce merveilleuse de notre Seigneur bien-aimé,<br>
        Grâce qui dépasse nos péchés et notre culpabilité !<br>
        Là-bas sur le mont du Calvaire versée –<br>
        Là où le sang de l'Agneau a été versé.<br>
        Refrain :<br>
        Grâce, grâce, la grâce de Dieu,<br>
        Grâce qui pardonne et purifie au-dedans ;<br>
        Grâce, grâce, la grâce de Dieu,<br>
        Grâce plus grande que tous nos péchés !<br><br>

        2. Le péché et le désespoir, comme les vagues froides de la mer,<br>
        Menacent l'âme de perte infinie ;<br>
        Grâce plus grande – oui, une grâce inexprimable –<br>
        Montre le Refuge, la Croix puissante. [Refrain]<br><br>

        3. Grâce merveilleuse, infinie, incomparable,<br>
        Gratuitement donnée à tous ceux qui croient !<br>
        Tous ceux qui aspirent à voir Son visage,<br>
        Recevront-ils en ce moment Sa grâce ? [Refrain]
      `
    },
    writeUp: {
      en: "This hymn celebrates the marvelous grace of God, poured out through the sacrifice of Jesus on Calvary. It speaks of grace that is greater than all sin and the refuge found in the mighty Cross. It calls all to receive God's grace and to trust in His saving power.",
      yo: "Hymn yi ń yèwù ìbùkún àtọ́kànwá Ọlọ́run, tó tú kọjá gbogbo ẹ̀sùn àti ẹ̀sùn wa, nípasẹ̀ ẹbọ Ọdá-èèyàn lórí òkè Kálfárí. Ó sọ̀rọ̀ nípa ìbùkún tó tóbi ju gbogbo ẹ̀sùn wa lọ àti ìtọ́kasi sí Abo tó ń bọ láti ọwọ́ Ẹ̀dá. Ó pé gbogbo ènìyàn láti gba ìbùkún Ọlọ́run àti gbàgbọ́ nínú agbára ìgbàlà Rẹ.",
      fr: "Ce cantique célèbre la grâce merveilleuse de Dieu, versée à travers le sacrifice de Jésus sur le mont du Calvaire. Il parle de la grâce plus grande que tous les péchés et du refuge trouvé dans la Croix puissante. Il appelle tous à recevoir la grâce de Dieu et à avoir confiance en Son pouvoir de salut."
    }
  },
  65: {  // Hymn 65 - In These, the Closing Days of Time
    title: {
      en: "In These, the Closing Days of Time",
      yo: "Ní Àwọn Ọjọ́ Ìkẹyìn Tí Akókò Yí",
      fr: "Dans ces derniers jours du temps"
    },
    lyrics: {
      en: `
        1. In these, the closing days of time,<br>
        What joy the glorious hope affords,<br>
        That soon, oh, wondrous truth sublime!<br>
        He shall reign, King of kings and Lord of lords.<br>
        Refrain:<br>
        He’s coming soon, he’s coming soon;<br>
        With joy we welcome his returning;<br>
        It may be morn, it may be night or noon;<br>
        We know he’s coming soon.<br><br>

        2. The signs around in earth and air,<br>
        Or painted on the starlit sky,<br>
        God’s faithful witnesses declare<br>
        That the coming of the Savior’s drawing nigh. [Refrain]<br><br>

        3. The dead in Christ who ’neath us lie,<br>
        In countless numbers, all shall rise,<br>
        When through the portals of the sky,<br>
        He shall come to prepare our paradise. [Refrain]<br><br>

        4. And we who, living, yet remain,<br>
        Caught up, shall meet our faithful Lord;<br>
        This hope we cherish not in vain,<br>
        But we comfort one another by this word. [Refrain]
      `,
      yo: `
        1. Ní àwọn ọjọ́ ìkẹyìn tí akoko yìí,<br>
        Ìdùnnú ń bẹ ninu ìrètí ìyanu yìí,<br>
        Pẹ̀lú iyanu, otító tó lágbára!<br>
        Ó máa jẹ́ Ọba, Ọba awọn ọba àti Olúwa awọn olúwa.<br>
        Ìkànsí:<br>
        Ó ń bọ laipẹ, ó ń bọ laipẹ;<br>
        Pẹ̀lú ayọ̀, a ń kí òun láti pada wá;<br>
        Ó le jẹ́ òwúrọ̀, ó le jẹ́ alẹ́ tàbí osan;<br>
        A mọ̀ pé ó ń bọ laipẹ.<br><br>

        2. Àwọn àmì ní ayé àti nínú afẹ́fẹ́,<br>
        Tó wulẹ̀ fi han lórí ọrun tí a kó mọ́;<br>
        Àwọn ẹlẹ́ri Ọlọ́run tó ní ìtẹ́lọ́run n ṣàfihàn<br>
        Pé ìbá padà Olùgbàlà ń bọ. [Ìkànsí]<br><br>

        3. Àwọn tó ti kú ní Kristi tí ń sọ̀kalẹ̀ lókè wa,<br>
        Ní ìwọ̀n àkọsílẹ̀ wọn, gbogbo wọn yóò jí,<br>
        Nígbà tí wọ́n bá kọjá ní àtọ̀runwá ọrun,<br>
        Ó máa bọ láti ṣètò àlàáfíà wa. [Ìkànsí]<br><br>

        4. Àti awa tí a ń bọ́, tí a sì ṣì wà nínú ààyè,<br>
        Yóò kó wa mọ́ra, a ó pàdé Olúwa wa,<br>
        Ìrètí yìí kò ní jẹ́ àìkà,<br>
        Ṣùgbọ́n a máa yèè-ràn fún ara wa pẹ̀lú òwe yìí. [Ìkànsí]
      `,
      fr: `
        1. Dans ces derniers jours du temps,<br>
        Quelle joie procure l'espoir glorieux,<br>
        Car bientôt, ô merveilleuse vérité sublime !<br>
        Il régnera, Roi des rois et Seigneur des seigneurs.<br>
        Refrain :<br>
        Il vient bientôt, il vient bientôt ;<br>
        Avec joie, nous accueillons son retour ;<br>
        Ce sera peut-être le matin, peut-être la nuit ou midi ;<br>
        Nous savons qu'il vient bientôt.<br><br>

        2. Les signes autour de nous sur la terre et dans l'air,<br>
        Ou peints sur le ciel étoilé,<br>
        Les témoins fidèles de Dieu déclarent<br>
        Que l'avènement du Sauveur approche. [Refrain]<br><br>

        3. Les morts en Christ qui reposent sous nous,<br>
        En innombrables foules, tous se lèveront,<br>
        Quand à travers les portails du ciel,<br>
        Il viendra préparer notre paradis. [Refrain]<br><br>

        4. Et nous qui vivons encore,<br>
        Enlevés, nous rencontrerons notre Seigneur fidèle ;<br>
        Cet espoir, nous ne le chérissons pas en vain,<br>
        Mais nous nous réconfortons les uns les autres par cette parole. [Refrain]
      `
    },
    writeUp: {
      en: "This hymn reflects the joy and anticipation of the second coming of Christ, celebrating the signs of His return and the resurrection of the dead in Christ. It encourages believers to remain hopeful, knowing that they will meet their faithful Lord soon, whether in the morning, noon, or night.",
      yo: "Hymn yi ń ṣe àfihàn ìdùnnú àti ìrètí ti ìpadà kejì Kristi, n ṣe ayẹyẹ àwọn àmì ìbá padà Rẹ àti ìjìnlẹ̀ ti àwọn tó ti kú ní Kristi. Ó ráyè kí àwọn ọmọ-ẹ̀yìn láti fi ìrètí wọn hàn, mọ̀ pé wọn yóò pàdé Olúwa wọn pẹ̀lú àyọ̀, bí ó ṣe lè jẹ́ òwúrọ̀, osan tàbí alẹ́.",
      fr: "Ce cantique exprime la joie et l'anticipation du second avènement du Christ, célébrant les signes de Son retour et la résurrection des morts en Christ. Il encourage les croyants à rester pleins d'espoir, sachant qu'ils rencontreront bientôt leur Seigneur fidèle, que ce soit le matin, à midi ou le soir."
    }
  },
  
  66: {  // Hymn 66 - Joy to the World, the Lord is Come
    title: {
      en: "Joy to the World, the Lord is Come",
      yo: "Ayọ̀ si Ilẹ̀, Olúwa ti Bọ",
      fr: "Joie pour le monde, le Seigneur est venu"
    },
    lyrics: {
      en: `
        1. Joy to the world; the Lord is come;<br>
        Let Earth receive her King;<br>
        Let ev'ry heart prepare him room,<br>
        And heav'n and nature sing.<br><br>

        2. Joy to the Earth, the Savior reigns;<br>
        Our mortal songs employ,<br>
        While fields and floods, rocks, hills and plains,<br>
        Repeat the sounding joy.<br><br>

        3. No more let sins and sorrows grow,<br>
        Nor thorns infest the ground;<br>
        He comes to make his blessings flow<br>
        Far as the curse is found.<br><br>

        4. He rules the world with truth and grace,<br>
        And makes the nations prove<br>
        The glories of his righteousness,<br>
        And wonders of his love.
      `,
      yo: `
        1. Ayọ̀ sí ilẹ̀; Olúwa ti bọ̀;<br>
        Kí Ilẹ̀ gba Ọba rẹ;<br>
        Kí gbogbo ọkàn pẹ̀lú ìkànsí ṣètò ibè,<br>
        Kí ọrun àti ẹ̀dá ayé ké.<br><br>

        2. Ayọ̀ sí ilẹ̀, Olùgbàlà ń ṣe ìjọba;<br>
        Aṣa wa àwọn ohun tó ní ẹ̀dá,<br>
        Nígbà tí àwọn pẹtẹ̀, àwọn omi, àwọn òkè àti ilẹ̀,<br>
        Yóò tún ìrètí ayọ̀ wọn ṣe.<br><br>

        3. Kò ní jẹ́ kí ẹ̀ṣẹ̀ àti ìbànújẹ̀ pọ si,<br>
        Kò sì ní jẹ́ kí thorns pa ilẹ̀ mọ́;<br>
        Ó ń bọ láti mú ìbùkún Rẹ̀ wa lọ,<br>
        Níbi gbogbo ilẹ̀ ti ìkórè wà.<br><br>

        4. Ó ń ṣakoso ayé pẹ̀lú òtítọ́ àti ìfé,<br>
        Yóò sì fi àwọn orílẹ̀-èdè hàn<br>
        Ọlá ìdájọ́ rẹ̀,<br>
        àti ìyanu ìfẹ́ Rẹ̀.
      `,
      fr: `
        1. Joie pour le monde, le Seigneur est venu;<br>
        Que la terre reçoive son Roi;<br>
        Que chaque cœur lui prépare une place,<br>
        Et que le ciel et la nature chantent.<br><br>

        2. Joie pour la terre, le Sauveur règne;<br>
        Nos chansons mortelles emploient,<br>
        Pendant que les champs, les inondations, les roches, les collines et les plaines,<br>
        Répètent la joie sonore.<br><br>

        3. Ne laissons plus les péchés et les chagrins croître,<br>
        Ni les épines envahir le sol;<br>
        Il vient pour faire couler ses bénédictions<br>
        Aussi loin que la malédiction se trouve.<br><br>

        4. Il gouverne le monde avec vérité et grâce,<br>
        Et fait prouver aux nations<br>
        La gloire de sa justice,<br>
        Et les merveilles de son amour.
      `
    },
    writeUp: {
      en: "This hymn celebrates the arrival of Jesus as the King of the world, bringing joy, salvation, and blessings to all. It highlights the hope of a world free from sin and sorrow, where God's truth and grace reign supreme.",
      yo: "Hymn yi ṣe ayẹyẹ ìbápadà Jesu gẹ́gẹ́ bíi Ọba gbogbo ayé, tó ń bọ̀ pẹ̀lú ayọ̀, ìgbàlà àti ìbùkún fún gbogbo ènìyàn. Ó ṣe afihan ireti ti ayé kan tí kò ní ìbànújẹ̀ tàbí ẹ̀ṣẹ̀, níbi tí òtítọ́ àti ìfé Ọlọ́run yóò ṣe ìjọba.",
      fr: "Ce cantique célèbre l'arrivée de Jésus en tant que Roi du monde, apportant joie, salut et bénédictions à tous. Il souligne l'espoir d'un monde libéré du péché et des douleurs, où la vérité et la grâce de Dieu règnent en maître."
    }
  },
  
  67: {  // Hymn 67 - Hark! The Herald Angels Sing
    title: {
      en: "Hark! The Herald Angels Sing",
      yo: "Ẹ jẹ́ kí a gbọ́! Àwọn angẹli ń kọrin",
      fr: "Écoutez! Les anges annoncent"
    },
    lyrics: {
      en: `
        1. Hark! the herald angels sing,<br>
        "Glory to the newborn King:<br>
        peace on earth, and mercy mild,<br>
        God and sinners reconciled!"<br>
        Joyful, all ye nations, rise,<br>
        join the triumph of the skies;<br>
        with th'angelic hosts proclaim,<br>
        "Christ is born in Bethlehem!"<br><br>

        Refrain:<br>
        Hark! the herald angels sing,<br>
        "Glory to the newborn King"<br><br>

        2. Christ, by highest heaven adored,<br>
        Christ, the everlasting Lord,<br>
        late in time behold him come,<br>
        offspring of the Virgin's womb:<br>
        veiled in flesh the Godhead see;<br>
        hail th'incarnate Deity,<br>
        pleased with us in flesh to dwell,<br>
        Jesus, our Immanuel.<br><br>

        [Refrain]<br><br>

        3. Hail the heaven-born Prince of Peace!<br>
        Hail the Sun of Righteousness!<br>
        Light and life to all he brings,<br>
        risen with healing in his wings.<br>
        Mild he lays his glory by,<br>
        born that we no more may die,<br>
        born to raise us from the earth,<br>
        born to give us second birth.<br><br>

        [Refrain]
      `,
      yo: `
        1. Ẹ jẹ́ kí a gbọ́! Àwọn angẹli ń kọrin,<br>
        "Ógo ni fún Ọba tuntun:<br>
        Aláàfíà ní ilẹ̀, àti ìbànújẹ̀ pẹ̀lú ọlá,<br>
        Ọlọ́run àti ẹ̀ṣẹ̀ ti di àjọṣe!"<br>
        Ayọ̀, gbogbo àwọn orílẹ̀-èdè, dìde,<br>
        darapọ̀ mọ́ àṣẹyẹ ọrun;<br>
        pẹ̀lú àwọn angẹli ń kéde,<br>
        "Kristi ti bí ní Bethlehem!"<br><br>

        Orin Àjèjì:<br>
        Ẹ jẹ́ kí a gbọ́! Àwọn angẹli ń kọrin,<br>
        "Ógo ni fún Ọba tuntun"<br><br>

        2. Kristi, níbi ọrun tó ga jù lọ ni a yìn,<br>
        Kristi, Ọba àìnípẹ̀kun,<br>
        Ní àkókò tí ó pé, kó ń bọ,<br>
        ọmọ ìyàwó Ìyá tòótọ́:<br>
        Nípasẹ̀ ara, kí a lè rí Ọlọ́run;<br>
        àdúrà wa ti ni ọkọ wa àti Ìyá ẹni,<br>
        Kó ṣàyẹ̀wò a fi ara wa dájú,<br>
        Jesu, Ọlọ́run pẹ̀lú wa.<br><br>

        [Orin Àjèjì]<br><br>

        3. Yìn Ọba ìṣèjìrè Òrùn!<br>
        Yìn Òrùn ti Ẹ̀tọ́!<br>
        Ìmọ̀lára àti ìyè tí ó mú wa,<br>
        tí ó ṣèṣàá lọ pẹ̀lú ìtọ́jú.<br>
        Ọmọ náà ń fi ògo rẹ̀ ṣáájú,<br>
        a bíi pé kò ní ku mọ́ wa,<br>
        a bíi pé yóò máa dìde ní ẹlẹ́kòó, <br>
        a bíi pé a yóò ní ìgbàgbọ́ tuntun.<br><br>

        [Orin Àjèjì]
      `,
      fr: `
        1. Écoutez! les anges annoncent,<br>
        "Gloire au Roi nouveau-né:<br>
        paix sur la terre, et miséricorde douce,<br>
        Dieu et pécheurs réconciliés!"<br>
        Joyeux, tous les peuples, levez-vous,<br>
        Joignez-vous au triomphe des cieux;<br>
        avec les hôtes angéliques, proclamez,<br>
        "Le Christ est né à Bethléem!"<br><br>

        Refrain:<br>
        Écoutez! les anges annoncent,<br>
        "Gloire au Roi nouveau-né"<br><br>

        2. Christ, adoré par les cieux les plus hauts,<br>
        Christ, le Seigneur éternel,<br>
        tard, dans le temps, regardez-le venir,<br>
        descendant du sein de la Vierge:<br>
        voilé dans la chair, voyez la divinité;<br>
        louez la divinité incarnée,<br>
        heureux avec nous en chair pour habiter,<br>
        Jésus, notre Emmanuel.<br><br>

        [Refrain]<br><br>

        3. Salut au Prince de la paix, né des cieux!<br>
        Salut au Soleil de la justice!<br>
        Lumière et vie, il apporte à tous,<br>
        ressuscité avec la guérison dans ses ailes.<br>
        Doucement, il dépose sa gloire,<br>
        né pour que nous ne mourions plus,<br>
        né pour nous élever de la terre,<br>
        né pour nous donner une seconde naissance.<br><br>

        [Refrain]
      `
    },
    writeUp: {
      en: "This hymn celebrates the birth of Christ, acknowledging His divine nature, peace, and the joy His arrival brings. It highlights His purpose to bring salvation, heal the world, and offer eternal life to all who believe.",
      yo: "Hymn yi ṣe ayẹyẹ bí Kristi ṣe bí, ní fifi hàn ìbáṣepọ̀ Rẹ̀ pẹ̀lú Ọlọ́run àti pé ayọ̀ tí ìbẹ̀rẹ̀ rẹ̀ mú wa. Ó fihan ìdí tí ó fi wá—láti mu ìgbàlà, tọju ayé, àti fún wa ní ìyè àìnípẹ̀kun.",
      fr: "Ce cantique célèbre la naissance du Christ, reconnaissant Sa nature divine, la paix, et la joie que Son arrivée apporte. Il met en lumière Son but de sauver, de guérir le monde et d'offrir la vie éternelle à tous ceux qui croient."
    }
  },
  68: {  // Hymn 68 - O Little Town of Bethlehem
    title: {
      en: "O Little Town of Bethlehem",
      yo: "Ilé Ìlú Kékèké ti Bethlehem",
      fr: "Ô petite ville de Bethléem"
    },
    lyrics: {
      en: `
        1. O little town of Bethlehem,<br>
        how still we see thee lie!<br>
        Above thy deep and dreamless sleep<br>
        the silent stars go by.<br>
        Yet in thy dark streets shineth<br>
        the everlasting light;<br>
        the hopes and fears of all the years<br>
        are met in thee tonight.<br><br>

        2. For Christ is born of Mary;<br>
        and, gathered all above,<br>
        while mortals sleep, the angels keep<br>
        their watch of wond'ring love.<br>
        O morning stars, together<br>
        proclaim the holy birth,<br>
        and praises sing to God the King,<br>
        and peace to men on earth.<br><br>

        3. How silently, how silently,<br>
        the wondrous gift is giv'n!<br>
        So God imparts to human hearts<br>
        the blessings of His heav'n.<br>
        No ear may hear His coming,<br>
        but in this world of sin,<br>
        where meek souls will receive Him still,<br>
        the dear Christ enters in.<br><br>

        4. O holy Child of Bethlehem,<br>
        descend to us, we pray;<br>
        cast out our sin and enter in;<br>
        be born in us today.<br>
        We hear the Christmas angels,<br>
        the great glad tidings tell;<br>
        O come to us, abide with us,<br>
        our Lord Emmanuel!
      `,
      yo: `
        1. Ilé ìlú kékèké ti Bethlehem,<br>
        bawo ni a ṣe ń ri ìdákẹ́jẹ rẹ!<br>
        Lórí ìrọ̀rùn àti ìdánú tí kò ní àlá,<br>
        àwọn irawọ̀ aláìmọ̀ ń lọ.<br>
        Ṣùgbọ́n nínú àwọn ọ̀nà òkùnkùn rẹ,<br>
        ìmọ̀lára àìnípẹ̀kun ń tan,<br>
        ìrètí àti ìbànújẹ̀ gbogbo ọdún<br>
        ti pàdé nínú rẹ̀ ní alẹ́ yìí.<br><br>

        2. Nítorí Kristi ti bí láti ọwọ́ Màríà;<br>
        àti pé gbogbo wọn ti kó jọ,<br>
        nígbà tí ènìyàn ń sùn, àwọn angẹli ń ṣe àkíyèsí<br>
        pẹ̀lú ìfẹ́ aláìlérò.<br>
        Ẹ̀sẹ̀rẹ̀ ọ̀run, jọ̀ọ́,<br>
        kéde bí a ṣe bí ọmọdé Rẹ,<br>
        kí ẹ ṣè yìn Ọlọ́run Ọba,<br>
        kí ẹ sì fi àlàáfíà bá àwọn ènìyàn lórí ilé ayé.<br><br>

        3. Báwo ni, báwo ni,<br>
        ìyebíye ẹ̀bùn yìí ṣe jẹ!<br>
        Nítorí Ọlọ́run ń fi ẹ̀bùn rẹ̀ fún ọkàn àwọn ènìyàn<br>
        láti fi ẹ̀bùn Rẹ̀ fún wa.<br>
        Kò sí etí tí yóò gbọ́ ìbẹ̀rẹ̀ Rẹ̀,<br>
        ṣùgbọ́n nínú ayé àìmọ̀ yìí,<br>
        níbi tí ọkàn alààyè ti máa ń gba Rẹ,<br>
        Kristi ń wọlé.<br><br>

        4. Ẹ̀dá mímọ́ ti Bethlehem,<br>
        ẹ bọ̀ wá sí wa, a gbàdúrà;<br>
        sá àwọn ẹ̀ṣẹ̀ wa, wá wọlé;<br>
        bí wa ní ojú-ọjọ́ yìí.<br>
        A gbọ́ àwọn angẹli Kérésìmesì,<br>
        pẹ̀lú àwọn ìrò ayọ̀ rere;<br>
        Ẹ bọ̀ wá sí wa, ṣọ́dá wa,<br>
        Ọlọ́run wa Emmanuel!
      `,
      fr: `
        1. Ô petite ville de Bethléem,<br>
        comment nous te voyons reposée!<br>
        Au-dessus de ton sommeil profond et sans rêve,<br>
        les étoiles silencieuses passent.<br>
        Pourtant dans tes rues sombres brille<br>
        la lumière éternelle;<br>
        les espoirs et les peurs de toutes les années<br>
        se rencontrent en toi ce soir.<br><br>

        2. Car le Christ est né de Marie;<br>
        et, tous rassemblés dans les cieux,<br>
        tandis que les mortels dorment, les anges gardent<br>
        leur veille d'amour émerveillé.<br>
        Ô étoiles du matin, ensemble,<br>
        proclamez la naissance sainte,<br>
        et chantez des louanges à Dieu le Roi,<br>
        et la paix aux hommes sur la terre.<br><br>

        3. Combien silencieusement, combien silencieusement,<br>
        le don merveilleux est donné!<br>
        Ainsi, Dieu accorde aux cœurs humains<br>
        les bénédictions de Son ciel.<br>
        Aucun oreille ne pourra entendre Sa venue,<br>
        mais dans ce monde de péché,<br>
        là où les âmes humbles Le recevront toujours,<br>
        le cher Christ entrera.<br><br>

        4. Ô Saint Enfant de Bethléem,<br>
        descends vers nous, nous te prions;<br>
        chasse nos péchés et entre en nous;<br>
        sois né en nous aujourd'hui.<br>
        Nous entendons les anges de Noël,<br>
        annoncer les grandes nouvelles joyeuses;<br>
        Ô viens à nous, demeure avec nous,<br>
        notre Seigneur Emmanuel!
      `
    },
    writeUp: {
      en: "This hymn reflects on the humble birth of Jesus in Bethlehem and the peace and salvation He brings to the world. It invites all believers to receive Christ into their hearts and cherish the joy and hope of His coming.",
      yo: "Hymn yi fi hàn bí bí Kristi ṣe bí ní Bethlehem pẹ̀lú ìwà aláyọ àti ìbáṣepọ̀ rẹ̀ pẹ̀lú wa. Ó ń pe gbogbo àwọn onígbàgbọ́ láti gba Kristi sí ọkàn wọn, kí wọ́n sì fọkàn tán ní ìrètí àti ayọ̀ tí ìbẹ̀rẹ̀ Rẹ̀ mú wa.",
      fr: "Ce cantique reflète la naissance humble de Jésus à Bethléem et la paix et le salut qu'Il apporte au monde. Il invite tous les croyants à recevoir le Christ dans leurs cœurs et à chérir la joie et l'espoir de Sa venue."
    }
  },
  69: {  // Hymn 69 - Lord, Thy Word Abideth
    title: {
      en: "Lord, Thy Word Abideth",
      yo: "Olúwa, Ọ̀rọ̀ Rẹ̀ Yíó Dúró",
      fr: "Seigneur, Ta Parole Demeure"
    },
    lyrics: {
      en: `
        1. Lord, Thy word abideth,<br>
        And our footsteps guideth;<br>
        Who is true believeth<br>
        Light and joy receiveth.<br><br>

        2. When our foes are near us,<br>
        Then Thy word doth cheer us;<br>
        Word of consolation,<br>
        Message of salvation.<br><br>

        3. When the storm are o’er us,<br>
        And dark clouds before us,<br>
        Then its light directeth,<br>
        And our way protecteth.<br><br>

        4. Who can tell the pleasure<br>
        Who recount the treasure<br>
        By Thy word imparted,<br>
        To the simple-hearted?<br><br>

        5. Word of mercy, giving<br>
        Succour to the living<br>
        Word of life, supplying<br>
        Comfort to the dying.<br><br>

        6. Oh, that we discerning<br>
        Its most holy learning,<br>
        Lord, may love and fear Thee,<br>
        Evermore be near Thee!<br><br>

        Amen.
      `,
      yo: `
        1. Olúwa, Ọ̀rọ̀ Rẹ̀ yíó dúró,<br>
        Ó sì máa tọ́jú igbesẹ̀ wa;<br>
        Tí ẹni tó bá ní ìgbàgbọ́ tòótọ́,<br>
        Yóò gba ìmọ̀lára àti ayọ̀.<br><br>

        2. Nígbà tí ọ̀tá bá wà nítòsí wa,<br>
        Ọ̀rọ̀ Rẹ̀ máa fi ìtẹ́wọ́gba hàn wa;<br>
        Ọ̀rọ̀ ìtùnú,<br>
        Ìhìn ìgbàlà.<br><br>

        3. Nígbà tí ìjìnlẹ̀ bá wà lórí wa,<br>
        Tí àwọn awọ̀n òjòkóba bá wà nínú wa,<br>
        Ọ̀rọ̀ Rẹ̀ máa fi ìmọ̀lára hàn wa,<br>
        Tí yóò sì dabobo ìgbésẹ̀ wa.<br><br>

        4. Ta ni yóò sọ ìdùnnú<br>
        Tàbí ka ohun tí a fi ọ̀rọ̀ Rẹ̀ fún wa,<br>
        Fun àwọn tó níkànsí?<br><br>

        5. Ọ̀rọ̀ mercy, tí ń fún wa<br>
        Àyọ̀ sí gbogbo wa<br>
        Ọ̀rọ̀ ìyè, tí ń fun wa<br>
        Irẹlẹ fun àwọn tó ku.<br><br>

        6. Oh, tí a bá gbàgbọn kọ ẹ̀kọ́ Rẹ̀,<br>
        Olúwa, kí a lè nífẹ̀ẹ́ àti bẹ́ẹ̀ ni Rẹ,<br>
        A dúró fún un.<br><br>

        Àmín.
      `,
      fr: `
        1. Seigneur, Ta parole demeure,<br>
        Et elle guide nos pas;<br>
        Qui croit en Toi, reçoit<br>
        La lumière et la joie.<br><br>

        2. Lorsque nos ennemis sont proches,<br>
        Ta parole nous réjouit;<br>
        Parole de consolation,<br>
        Message de salut.<br><br>

        3. Lorsque les tempêtes sont sur nous,<br>
        Et que des nuages sombres nous précèdent,<br>
        Ta lumière nous guide,<br>
        Et protège notre chemin.<br><br>

        4. Qui peut dire la joie,<br>
        Qui peut compter le trésor<br>
        Par Ta parole impartie,<br>
        Aux cœurs simples et purs?<br><br>

        5. Parole de miséricorde, donnant<br>
        Du secours aux vivants,<br>
        Parole de vie, offrant<br>
        Du confort aux mourants.<br><br>

        6. Oh, que nous discernions<br>
        Son enseignement saint,<br>
        Seigneur, que nous T'aimions et Te craignions,<br>
        Et que nous soyons toujours près de Toi!<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn emphasizes the enduring power and comfort of God's Word. It reminds us of how God's Word guides us, provides solace, and offers life to all believers in times of need.",
      yo: "Hymn yi ń sọ nípa agbára àti ìtẹ́lọ́run Ọ̀rọ̀ Ọlọ́run. Ó fi hàn bí Ọ̀rọ̀ Ọlọ́run ṣe ń tọ́jú wa, fún wa ní ìtùnú, àti pèsè ìyè fún gbogbo onígbàgbọ́ ní àkókò ìfẹ́lọ́run.",
      fr: "Ce cantique souligne le pouvoir durable et le réconfort de la Parole de Dieu. Il nous rappelle comment la Parole de Dieu nous guide, nous offre du réconfort et donne la vie à tous les croyants dans les moments de besoin."
    }
  },
  70: {  // Hymn 70 - Oh Come All Ye Faithful
    title: {
      en: "Oh Come All Ye Faithful",
      yo: "Ẹ̀ Wá Gbogbo Ẹni Tó Ní ìgbàgbọ́",
      fr: "Ô Venez, Tous Les Fidèles"
    },
    lyrics: {
      en: `
        1. Oh come, all ye faithful,<br>
        Joyful and triumphant!<br>
        Oh, come ye, Oh, come ye to Bethlehem!<br>
        Come and behold Him,<br>
        Born the King of angels:<br><br>

        CHORUS:<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Christ the Lord!<br><br>

        2. True God of true God,<br>
        Light of light, begotten,<br>
        Lo, He abhors not the virgin’s womb;<br>
        Son of the Father,<br>
        Begotten, not created.<br><br>

        CHORUS:<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Christ the Lord!<br><br>

        3. Sing, choirs of angels,<br>
        Sing in exultation,<br>
        Sing all ye citizens of heaven above,<br>
        Glory to God, all glory<br>
        In the highest.<br><br>

        CHORUS:<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Christ the Lord!<br><br>

        4. Yea, Lord, we greet Thee,<br>
        Born this happy morning,<br>
        Jesus, to Thee be glory given;<br>
        Word of the Father,<br>
        Now in flesh appearing.<br><br>

        CHORUS:<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Oh, come, let us adore Him,<br>
        Christ the Lord!<br><br>

        Amen.
      `,
      yo: `
        1. Ẹ̀ wá, gbogbo ènìyàn tó ní ìgbàgbọ́,<br>
        Pẹ̀lú ayọ̀ àti ìjọ́ríre!<br>
        Ẹ̀ wá, ẹ̀ wá, ẹ̀ wá sí Béthléhém!<br>
        Wá kíkọ̀ lóye, Ọmọ-ọba àwọn angẹli:<br><br>

        CHORUS:<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Kristi Oluwa!<br><br>

        2. Ọlọ́run tó dáa, Ọlọ́run tó dáa,<br>
        Ìmọ̀lára ìmọ̀lára, tó bí,<br>
        Kò sí ní ìjìnlẹ̀ ọmọnìyàn,<br>
        Ọmọ ti Baba,<br>
        Tó bí, kò sì dáa.<br><br>

        CHORUS:<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Kristi Oluwa!<br><br>

        3. Kòkòrò angẹli,<br>
        Kòkòrò yíò máa lọ́nà,<br>
        Ẹ wá gbogbo àwọn tó ń se àtọkànwá,<br>
        Ìyìn fún Ọlọ́run, gbogbo ìyìn<br>
        Ní àwọn orí-èdè.<br><br>

        CHORUS:<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Kristi Oluwa!<br><br>

        4. Bẹ́ẹ̀, Oluwa, a kí yín,<br>
        Bí a kó ìmọ̀lára wa, a sì fẹ́ràn yín;<br>
        Jésù, fún ọ ní ìyìn a fi hàn;<br>
        Ọ̀rọ̀ Baba,<br>
        Tí o ti fi orí ṣí ọ̀run.<br><br>

        CHORUS:<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Ẹ̀ wá, ẹ jẹ́ ká bọwọ fun un,<br>
        Kristi Oluwa!<br><br>

        Àmín.
      `,
      fr: `
        1. Ô venez, tous les fidèles,<br>
        Joyeux et triomphants !<br>
        Ô venez, venez à Bethléem !<br>
        Venez et contemplez-le,<br>
        Né le Roi des anges :<br><br>

        CHŒUR :<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Christ le Seigneur !<br><br>

        2. Vrai Dieu de vrai Dieu,<br>
        Lumière de lumière, engendré,<br>
        Il n'a pas dédaigné le sein de la Vierge ;<br>
        Fils du Père,<br>
        Engendré, non créé.<br><br>

        CHŒUR :<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Christ le Seigneur !<br><br>

        3. Chantez, chœurs d'anges,<br>
        Chantez dans l'exultation,<br>
        Chantez tous les citoyens du ciel,<br>
        Gloire à Dieu, toute gloire<br>
        Dans les hauteurs.<br><br>

        CHŒUR :<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Christ le Seigneur !<br><br>

        4. Oui, Seigneur, nous Te saluons,<br>
        Né ce matin heureux,<br>
        Jésus, à Toi soit la gloire donnée ;<br>
        Parole du Père,<br>
        Maintenant apparue en chair.<br><br>

        CHŒUR :<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Ô venez, adorons-le,<br>
        Christ le Seigneur !<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This beloved Christmas carol invites all to celebrate the birth of Jesus Christ, our King and Savior, born in Bethlehem. It emphasizes the joy and reverence due to the Lord, the incarnate Word, and the call for all creation to worship Him.",
      yo: "Akọ́rin Kérìsìmẹsì tó fẹ́ràn yìí n pe gbogbo ènìyàn láti ṣe ayẹyẹ ìbí Jésù Kristi, Ọmọ-ọba wa àti Olùgbàlà, tí a bí ní Béthléhém. Ó sọ ìyọrísí àti ìbọ̀wọ̀ tó yẹ fún Oluwa, Ọ̀rọ̀ tí a ṣe nínú ara, àti ìpè fún gbogbo ẹda láti bọwọ fun un.",
      fr: "Ce chant de Noël bien-aimé invite tous à célébrer la naissance de Jésus-Christ, notre Roi et Sauveur, né à Bethléem. Il met l'accent sur la joie et la révérence dues au Seigneur, la Parole incarnée, et l'appel à toute la création pour l'adorer."
    }
  },
  71: {  // Hymn 71 - Christians, Awake, Salute the Happy Morn
    title: {
      en: "Christians, Awake, Salute the Happy Morn",
      yo: "Kristẹni, Duro, Káyé Èrè Ọjọ́ ayọ̀",
      fr: "Chrétiens, Réveillez-vous, Saluez Le Jour Heureux"
    },
    lyrics: {
      en: `
        1. Christians, awake, salute the happy morn<br>
        Whereon the Saviour of the world was born!<br>
        Rise to adore the mystery of love,<br>
        Which hosts of angels chanted from above;<br>
        Which them the joyful tidings first begun<br>
        Of God incarnate and the virgin’s Son.<br><br>

        2. Then to the watchful shepherds it was told,<br>
        Who heard the angelic herald’s voice, “Behold,<br>
        I bring good tidings of a Saviour’s birth<br>
        To you and all the nations upon earth:<br>
        This day hath God fulfilled His promised word,<br>
        This day is born a Saviour, Christ the Lord”.<br><br>

        3. He spake; and straightway the celestial choir<br>
        In hymns of joy, unknown before, conspire;<br>
        The praises of redeeming love they sang,<br>
        And heaven’s whole orb with halleluyahs rangs;<br>
        God’s highest glory was their anthem still,<br>
        Peace upon earth, and unto men goodwill.<br><br>

        4. To Bethlehem straight the enlightened shepherd ran,<br>
        To see the wonder God had wrought for man:<br>
        Then to their flocks, still praising God, return,<br>
        And their glad hearts with holy rapture burn:<br>
        Amazed, the wondrous tidings they proclaim,<br>
        The first apostles of His infant fame.<br><br>

        5. Oh may we keep and ponder in our mind<br>
        God’s wondrous love in saving lost mankind;<br>
        Trace we the Babe, who hath retrieved our loss,<br>
        From His poor manger to His bitter cross;<br>
        Tread in His steps, assisted by His grace,<br>
        Till man’s first heavenly state again takes place.<br><br>

        6. Then may we hope, the angelic hosts among,<br>
        To sing, redeemed, a glad triumphal song;<br>
        He that was born upon this joyful day,<br>
        Around us all His glory shall display;<br>
        Saved by His love, incessant we shall sing<br>
        Eternal praise to heaven’s almighty King.<br><br>

        Amen.
      `,
      yo: `
        1. Kristẹni, duro, káyé èrè ọjọ́ ayọ̀,<br>
        Níbi tí Olùgbàlà ayé ti bí!<br>
        Dide láti bọwọ fun ìmọ̀lára ìfé,<br>
        Tó jẹ́ pé àwọn angẹli kọrin láti ọ̀run;<br>
        Kí wọ́n lè fi ìtàn ayọ̀ hàn<br>
        Nípa Ọlọ́run tó wọ inú ara àti Ọmọ-ọwọ́.<br><br>

        2. Nígbà tí wọ́n sọ fún àwọn olùṣọ́ ọ̀dọ̀ tó n ṣọ́ra,<br>
        Tí wọ́n sì gbọ́ ohùn angẹli náà pé, “Ẹ wo,<br>
        Mo mu ìhìn ayọ̀ ìbí Olùgbàlà<br>
        Sí yín àti gbogbo orílẹ̀-èdè lórí ayé:<br>
        Ọjọ́ yìí ni Ọlọ́run fi ìlérí rẹ̀ ṣe,<br>
        Ọjọ́ yìí ni Olùgbàlà, Kristi Oluwa, bí.”<br><br>

        3. Ó sọ pé; lẹ́sẹ̀kẹsẹ̀, àwọn angẹli ní ọ̀run,<br>
        Pẹ̀lú àwọn orin ayọ̀, tí a kò tíì gbọ́ ṣáájú, kópa;<br>
        Wọ́n kọrin ìyìn fún ìfé ìgbàlà,<br>
        Gbogbo àgbáyé ọ̀run sì dá pẹlu ìhìn Ọlọ́run;<br>
        Ìyìn tó ga jùlọ ni ìhìn wọn,<br>
        Aláàánú lórí ilẹ̀, àti ìbáṣepọ̀ pẹlu àwọn ènìyàn.<br><br>

        4. Sẹ́yìn, àwọn olùṣọ́ ọ̀dọ̀ tó ni ìmọ̀lára ń rẹ̀;<br>
        Wọ́n lọ láti rí ìyanu tí Ọlọ́run ti ṣe fún ènìyàn:<br>
        Lẹ́yìn náà, wọ́n lọ padà sí ọ̀dọ̀ wọn, pẹ̀lú ìyìn fún Ọlọ́run,<br>
        Òkèèrè ọkàn wọn sì n jo pẹ̀lú ìyàrá ọmọdé wọn:<br>
        Wọ́n kọ̀wé ìhìn yìí, wọ́n sì ń kede ìyanu,<br>
        Wọ́n jẹ́ àwọn aposteli akọkọ ti orúkọ rẹ̀.<br><br>

        5. Ṣé a lè jẹ́ kí a jẹ́ kí a rántí àti ìfọkànsìn ninu ọkàn wa,<br>
        Ìfé iyanu Ọlọ́run ní mímú ènìyàn tí ó padà?<br>
        Jẹ́ kí a tẹ̀lé ọmọ, tó ti gba padà ẹ̀sùn wa,<br>
        Láti ibi àjàrà rẹ, sí kọ̀sìn tó wọ̀n;<br>
        Kí a maa bọ́ nínú igbesẹ̀ rẹ, tí ìbá ṣe pẹ̀lú àánú rẹ,<br>
        Tí a sì le rí àtúnṣe ìsìn Ọlọ́run.<br><br>

        6. Nígbà tí a bá ní ìrètí, pẹ̀lú àwọn angẹli,<br>
        Lati kọrin, ti a gbà, orin ìjàgbéyà; <br>
        Òun tó bí ní ọjọ́ ayọ̀ yìí,<br>
        Kó gbogbo àlààyè rẹ̀ ká gbogbo wa;<br>
        A gbàdúrà pẹ̀lú ìfé rẹ, a kò ní kọrin mọ́<br>
        Ìyìn àìnípẹ̀kun fún Ọlọ́run alágbára ni ọ̀run.<br><br>

        Àmín.
      `,
      fr: `
        1. Chrétiens, réveillez-vous, saluez le jour heureux,<br>
        Où le Sauveur du monde est né !<br>
        Levez-vous pour adorer le mystère de l’amour,<br>
        Que les hôtes des anges ont chanté du ciel ;<br>
        Qui a commencé à annoncer aux anges<br>
        La naissance de Dieu incarné et du Fils de la Vierge.<br><br>

        2. Ensuite, aux bergers vigilants, il fut annoncé,<br>
        Qui entendirent la voix de l'ange annonçant, “Voici,<br>
        J'apporte de bonnes nouvelles de la naissance d'un Sauveur<br>
        Pour vous et pour toutes les nations sur la terre :<br>
        Ce jour-là, Dieu a accompli sa parole promise,<br>
        Ce jour-là, est né un Sauveur, le Christ le Seigneur”.<br><br>

        3. Il parla ; et immédiatement le chœur céleste<br>
        Se réunit pour chanter des hymnes de joie, inconnus auparavant ;<br>
        Ils chantèrent les louanges de l'amour rédempteur,<br>
        Et tout le ciel résonna de "hallelujahs";<br>
        La gloire suprême de Dieu était leur hymne,<br>
        Paix sur terre et aux hommes de bonne volonté.<br><br>

        4. À Bethléem, les bergers éclairés coururent droit,<br>
        Pour voir le miracle que Dieu avait accompli pour l'homme :<br>
        Puis, retournant à leurs troupeaux, toujours louant Dieu,<br>
        Et leurs cœurs joyeux brûlèrent de saintes délices :<br>
        Étonnés, ils proclamèrent les nouvelles merveilleuses,<br>
        Les premiers apôtres de sa gloire infantile.<br><br>

        5. Puissions-nous garder et méditer dans nos cœurs,<br>
        L'amour merveilleux de Dieu en sauvant l'humanité perdue ;<br>
        Suivons le Bébé, qui a racheté notre perte,<br>
        De sa crèche misérable à sa croix douloureuse ;<br>
        Suivons ses pas, aidés par sa grâce,<br>
        Jusqu'à ce que l'état céleste de l'homme soit de nouveau rétabli.<br><br>

        6. Puis, nous espérons, parmi les hôtes angéliques,<br>
        Chanter, rachetés, une chanson triomphante de joie ;<br>
        Lui qui est né en ce jour joyeux,<br>
        Autour de nous, toute sa gloire se manifestera ;<br>
        Sauvé par son amour, inlassablement nous chanterons<br>
        La louange éternelle au Roi tout-puissant des cieux.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn calls on all Christians to awake and praise the birth of Jesus Christ, the Savior of the world. It tells the story of the heavenly announcement to the shepherds and the joy of the first witnesses of Christ's birth, urging us to reflect on God's wondrous love and salvation.",
      yo: "Akọ́rin yìí n pe gbogbo Kristẹni láti dide kí wọ́n sì yìn ìbí Jésù Kristi, Olùgbàlà ayé. Ó sọ ìtàn ìkílọ̀ ọ̀run sí àwọn olùṣọ́ ọ̀dọ̀ àti ayọ̀ àwọn tó kọ́kọ́ jẹ́ ẹlẹ́ri ìbí Kristi, tó ń kó wa láti rántí ìfé Ọlọ́run àti ìgbàlà rẹ.",
      fr: "Ce cantique appelle tous les chrétiens à se réveiller et à louer la naissance de Jésus-Christ, le Sauveur du monde. Il raconte l'annonce céleste faite aux bergers et la joie des premiers témoins de la naissance du Christ, nous encourageant à réfléchir sur l'amour merveilleux de Dieu et sur le salut."
    }
  },
  72: {  // Hymn 72 - Silent Night, Holy Night
    title: {
      en: "Silent Night, Holy Night",
      yo: "Alẹ́ Tó Dákẹ́, Alẹ́ Mímọ́",
      fr: "Nuit Silencieuse, Nuit Sainte"
    },
    lyrics: {
      en: `
        1. Silent night, holy night;<br>
        All is calm, all is bright,<br>
        Round you Virgin Mother and child,<br>
        Holy Infant so tender and mild,<br>
        Sleep in heavenly peace.<br>
        Sleep in heavenly peace.<br><br>

        2. Silent night, holy night,<br>
        Darkness flies, all is light,<br>
        Shepherds hear the angels sing,<br>
        “Alleluia: hail the King!<br>
        Christ the Savior is born,<br>
        Christ the Savior is born.”<br><br>

        3. Silent night, holy night,<br>
        Guiding Star, lend thy light;<br>
        See the eastern wise men bring,<br>
        Gifts and homage to our King!<br>
        Christ the Savior is born,<br>
        Christ the Savior is born.<br><br>

        4. Silent night, holy night,<br>
        Wondrous Star, lend thy light;<br>
        With the angels let us sing,<br>
        Alleluia to our King!<br>
        Christ the Savior is born,<br>
        Christ the Savior is born.<br><br>

        Amen.
      `,
      yo: `
        1. Alẹ́ tó dákẹ́, alẹ́ mímọ́;<br>
        Gbogbo ohun tó wà, ṣìkà, gbogbo ohun náà ni ìmọ́,<br>
        Ní àyíká rẹ Kristi Ọmọ-ọwọ́ àti ìyá rẹ Virgin,<br>
        Ọmọ aláyò̩, tó jẹ́ pẹ̀lú àánú àti ìyọ̀ràn,<br>
        Sun nínú ìkànsí aláàyè.<br>
        Sun nínú ìkànsí aláàyè.<br><br>

        2. Alẹ́ tó dákẹ́, alẹ́ mímọ́,<br>
        Okunkun ń lọ, gbogbo ohun tó wà ni ìmọ́,<br>
        Àwọn olùṣọ́ ń gbọ́ ìrò angẹli náà pé,<br>
        "Alèlúyà: kí Ọba ní ayọ̀!<br>
        Kristi Olùgbàlà ni bí,<br>
        Kristi Olùgbàlà ni bí." <br><br>

        3. Alẹ́ tó dákẹ́, alẹ́ mímọ́,<br>
        Iṣọ̀kan irawọ, ṣe àtọkànwá rẹ;<br>
        Wo àwọn ọkùnrin alágbà, tí ń bọ́,<br>
        Pẹ̀lú ẹ̀bẹ̀ àti ìbùkún sí Ọba wa!<br>
        Kristi Olùgbàlà ni bí,<br>
        Kristi Olùgbàlà ni bí.<br><br>

        4. Alẹ́ tó dákẹ́, alẹ́ mímọ́,<br>
        Irọ̀ irawọ́, ṣe àtọkànwá rẹ;<br>
        Pẹ̀lú awọn angẹli káti kọrin,<br>
        Alèlúyà sí Ọba wa!<br>
        Kristi Olùgbàlà ni bí,<br>
        Kristi Olùgbàlà ni bí.<br><br>

        Àmín.
      `,
      fr: `
        1. Nuit silencieuse, nuit sainte;<br>
        Tout est calme, tout est lumineux,<br>
        Autour de toi, la Vierge Mère et l'Enfant,<br>
        Saint Enfant, si tendre et doux,<br>
        Dors dans la paix céleste.<br>
        Dors dans la paix céleste.<br><br>

        2. Nuit silencieuse, nuit sainte,<br>
        Les ténèbres fuient, tout est lumière,<br>
        Les bergers entendent les anges chanter,<br>
        “Alléluia : salut au Roi!<br>
        Christ le Sauveur est né,<br>
        Christ le Sauveur est né.”<br><br>

        3. Nuit silencieuse, nuit sainte,<br>
        Étoile du Guidage, prête ta lumière;<br>
        Vois les sages venus de l'orient,<br>
        Apporter des dons et des hommages à notre Roi!<br>
        Christ le Sauveur est né,<br>
        Christ le Sauveur est né.<br><br>

        4. Nuit silencieuse, nuit sainte,<br>
        Étoile merveilleuse, prête ta lumière;<br>
        Avec les anges, chantons,<br>
        Alléluia à notre Roi!<br>
        Christ le Sauveur est né,<br>
        Christ le Sauveur est né.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This beautiful Christmas hymn reflects on the peaceful night of Jesus' birth. It speaks of the calmness and serenity of the holy night, the heavenly announcement to the shepherds, the visit of the wise men, and the angelic praise for the birth of the Savior.",
      yo: "Akọ́rin kẹta yìí sọ ìtàn ìbí Jésù Kristi ní alẹ́ mímọ́, tí ó ṣàfihàn ìmọ̀lára ìbànújẹ́ àti ìtùnú ti alẹ́ ìbí rẹ, ìkílọ̀ ọ̀run sí àwọn olùṣọ́ ọ̀dọ̀, ìbèjì àwọn ọkùnrin alágbà, àti ìyìn angẹli fún ìbí Olùgbàlà.",
      fr: "Ce magnifique cantique de Noël évoque la nuit paisible de la naissance de Jésus. Il parle de la tranquillité et de la sérénité de la nuit sainte, de l'annonce céleste faite aux bergers, de la visite des sages et des louanges angéliques pour la naissance du Sauveur."
    }
  },
  73: {  // Hymn 73 - Joy Fills Our Inmost Heart Today
    title: {
      en: "Joy Fills Our Inmost Heart Today",
      yo: "Ayọ̀ Kún Ọkàn Wa Lónìí",
      fr: "La Joie Remplit Notre Cœur Aujourd'hui"
    },
    lyrics: {
      en: `
        1. Joy fills our inmost hearts today!<br>
        The royal Child is born;<br>
        And angel hosts in glad array<br>
        His Advent keep this morn.<br>
        Rejoice, rejoice! Th'incarnate Word<br>
        Has come on earth to dwell;<br>
        No sweeter sound than this is heard,<br>
        Emmanuel!<br><br>

        2. Low at the cradle throne we bend,<br>
        We wonder and adore;<br>
        And feel no bliss can ours transcend,<br>
        No joy was sweet before.<br>
        Rejoice, rejoice! Th'incarnate Word<br>
        Has come on earth to dwell;<br>
        No sweeter sound than this is heard,<br>
        Emmanuel!<br><br>

        3. For us the world must lose its charms<br>
        Before the manger shrine,<br>
        When, folded in Thy mother's arms,<br>
        We see Thee, Babe divine.<br>
        Rejoice, rejoice! Th'incarnate Word<br>
        Has come on earth to dwell;<br>
        No sweeter sound than this is heard,<br>
        Emmanuel!<br><br>

        4. Thou Light of uncreated Light,<br>
        Shine on us, Holy Child;<br>
        That we may keep Thy birthday bright,<br>
        With service undefiled.<br>
        Rejoice, rejoice! Th'incarnate Word<br>
        Has come on earth to dwell;<br>
        No sweeter sound than this is heard,<br>
        Emmanuel!<br><br>
      `,
      yo: `
        1. Ayọ̀ kún ọkàn wa lónìí!<br>
        Ọmọ Ọba ti bí;<br>
        Àti àwọn angẹli ní ayọ̀ pẹ̀lú kópa<br>
        Ìbẹ̀rẹ̀ rẹ ṣé é ṣe àfihàn lónìí.<br>
        Yìn, yìn! Ọ̀rọ̀ tó wọ inú ara<br>
        Ti wá sí ilẹ̀ ayé láti gbe;<br>
        Kò sí ohun tó dun ju eyi lọ,<br>
        Ẹmanueli!<br><br>

        2. Ní pẹ̀lú àdúrà sí ilẹ̀ àjàrà<br>
        A dáhùn, a sì fi ọwọ́ hàn;<br>
        A sì rí i pé kò sí ayọ̀ tó ga ju tiwa lọ,<br>
        Kò sí ayọ̀ tí ó ṣèdájọ́ rí.<br>
        Yìn, yìn! Ọ̀rọ̀ tó wọ inú ara<br>
        Ti wá sí ilẹ̀ ayé láti gbe;<br>
        Kò sí ohun tó dun ju eyi lọ,<br>
        Ẹmanueli!<br><br>

        3. Fun wa, ayé gbọdọ̀ sọnù nínú ìwà,<br>
        Kí ó má bà a lọ àjàrà,<br>
        Níbi tí a fi ọwọ́ mẹta mẹta<br>
        Tí a lè rí, Ọmọ aládùúgbò.<br>
        Yìn, yìn! Ọ̀rọ̀ tó wọ inú ara<br>
        Ti wá sí ilẹ̀ ayé láti gbe;<br>
        Kò sí ohun tó dun ju eyi lọ,<br>
        Ẹmanueli!<br><br>

        4. Ìwọ, Ìmọ̀lára aláìdá,<br>
        Tàn mọ́ wa, Ọmọ Mímọ́;<br>
        Kí a lè ṣe àfihàn ìbí rẹ<br>
        Pẹ̀lú iṣẹ́ rẹ tó mọ.<br>
        Yìn, yìn! Ọ̀rọ̀ tó wọ inú ara<br>
        Ti wá sí ilẹ̀ ayé láti gbe;<br>
        Kò sí ohun tó dun ju eyi lọ,<br>
        Ẹmanueli!<br><br>
      `,
      fr: `
        1. La joie remplit notre cœur aujourd'hui !<br>
        L'Enfant royal est né ;<br>
        Et les anges en joyeuse procession<br>
        Célèbrent son Avènement ce matin.<br>
        Réjouissez-vous, réjouissez-vous ! Le Verbe incarné<br>
        Est venu sur terre pour demeurer ;<br>
        Aucun son plus doux n'est entendu,<br>
        Emmanuel !<br><br>

        2. Bénis devant le trône du berceau,<br>
        Nous nous émerveillons et adorons ;<br>
        Et nous ressentons qu'aucune félicité ne peut surpasser la nôtre,<br>
        Aucune joie n'était douce avant.<br>
        Réjouissez-vous, réjouissez-vous ! Le Verbe incarné<br>
        Est venu sur terre pour demeurer ;<br>
        Aucun son plus doux n'est entendu,<br>
        Emmanuel !<br><br>

        3. Pour nous, le monde doit perdre ses charmes<br>
        Devant le sanctuaire de la crèche,<br>
        Lorsque, serré dans les bras de Ta mère,<br>
        Nous Te voyons, Bébé divin.<br>
        Réjouissez-vous, réjouissez-vous ! Le Verbe incarné<br>
        Est venu sur terre pour demeurer ;<br>
        Aucun son plus doux n'est entendu,<br>
        Emmanuel !<br><br>

        4. Toi, Lumière de la lumière incréée,<br>
        Brille sur nous, Saint Enfant ;<br>
        Afin que nous puissions garder Ton anniversaire lumineux,<br>
        Avec un service purifié.<br>
        Réjouissez-vous, réjouissez-vous ! Le Verbe incarné<br>
        Est venu sur terre pour demeurer ;<br>
        Aucun son plus doux n'est entendu,<br>
        Emmanuel !<br><br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the birth of Jesus Christ, the Incarnate Word, with joy and reverence. It calls on all to rejoice in His presence, recognizing Him as the divine Child born for the salvation of humanity. The hymn also reflects on the joy of His birth and the light He brings into the world.",
      yo: "Akọ́rin yìí ń yìn ìbí Jésù Kristi, Ọ̀rọ̀ tó wọ inú ara, pẹ̀lú ayọ̀ àti ìbòjú-ọnà. Ó pe gbogbo wa láti yìn irú ẹni tó wá, nítorí pé Ọmọ aládùúgbò tó bí láti gba ìgbàlà fún ènìyàn. Akọ́rin náà tún ń rántí ayọ̀ ìbí rẹ àti ìmọ̀lára tó múlẹ̀ sí ayé.",
      fr: "Ce cantique célèbre la naissance de Jésus-Christ, le Verbe incarné, avec joie et révérence. Il appelle tous à se réjouir de Sa présence, en Le reconnaissant comme l'Enfant divin né pour le salut de l'humanité. Le cantique reflète aussi la joie de Sa naissance et la lumière qu'Il apporte dans le monde."
    }
  },
  74: {  // Hymn 74 - O God, Our Help in Ages Past
    title: {
      en: "O God, Our Help in Ages Past",
      yo: "Ọlọ́run, Ìrànlọ́wọ́ Wa Nígbàtí Ó ti Pẹ́",
      fr: "Ô Dieu, Notre Secours Dans Les Âges Passés"
    },
    lyrics: {
      en: `
        1. Our God, our help in ages past,<br>
        Our hope for years to come,<br>
        Our shelter from the stormy blast,<br>
        And our eternal home:<br><br>

        2. Under the shadow of Your throne<br>
        Your saints have dwelt secure;<br>
        Sufficient is Your arm alone,<br>
        And our defense is sure.<br><br>

        3. Before the hills in order stood<br>
        Or Earth received her frame,<br>
        From everlasting You are God,<br>
        To endless years the same.<br><br>

        4. A thousand ages in Your sight<br>
        Are like an evening gone,<br>
        Short as the watch that ends the night<br>
        Before the rising sun.<br><br>

        5. Time, like an ever-rolling stream,<br>
        Bears all its sons away;<br>
        They fly, forgotten, as a dream<br>
        Dies at the opening day.<br><br>

        6. Like flow'ry fields the nations stand,<br>
        Pleased with the morning light;<br>
        The flow'rs beneath the mower's hand<br>
        Lie withering ere 'tis night.<br><br>

        7. Our God, our help in ages past,<br>
        Our hope for years to come,<br>
        Be Thou our guard while troubles last<br>
        And our eternal home.<br><br>
      `,
      yo: `
        1. Ọlọ́run wa, ìrànlọ́wọ́ wa nígbàtí ó ti pẹ́,<br>
        Ìrètí wa fún ọdún tó ń bọ,<br>
        Àbójútó wa kúrò nínú ìyà tó burú,<br>
        Àti ilé wa àìnípẹ̀kun:<br><br>

        2. Ní ìkànsí ojiji ìtẹ́ rẹ,<br>
        Àwọn àjùmọ̀ṣe rẹ ti gbé ní ìlààyè;<br>
        Ìkànsí ọwọ́ rẹ nikan tó tó,<br>
        Àti ìdájọ́ wa dájú.<br><br>

        3. Ṣáájú pé àwọn òkè bẹrẹ sí kọ,<br>
        Tí ilẹ̀ bá gba ẹ̀dá rẹ,<br>
        Láti ìbẹ̀rẹ̀, ìwọ ni Ọlọ́run,<br>
        Tí ó péye lẹ́yìn gbogbo ọdún.<br><br>

        4. Ọdún ẹgbẹ̀rún kan ní ojú rẹ<br>
        Dá bí ìrọ̀lẹ́ tó ti kọja,<br>
        Kú bí iwatch tí ń parí òru<br>
        Ṣáájú ìmọ̀lẹ̀ oṣù òrùn.<br><br>

        5. Àkókò, bí omi tí ń ṣàn lọ,<br>
        Gbè gbogbo ọmọ rẹ lọ;<br>
        Wọ́n fò, tí a kò rántí wọn, gẹ́gẹ́ bí àlá<br>
        Tó ń kú ní ọjọ́ tí ọ̀run ṣẹ́.<br><br>

        6. Bí ọ̀dọ̀-ìtàn ẹlẹ́wọ̀n, àwọn orílẹ̀-èdè dúró,<br>
        Pẹ̀lú ìmọ̀lára ọjọ́ àtàárọ̀;<br>
        Àwọn ẹfọ́ náà ní ọwọ́ ológbò<br>
        Dúró kí wọ́n bà tán ṣáájú ìròyìn.<br><br>

        7. Ọlọ́run wa, ìrànlọ́wọ́ wa nígbàtí ó ti pẹ́,<br>
        Ìrètí wa fún ọdún tó ń bọ,<br>
        Jẹ́ kí o jẹ́ àbójútó wa nínú ìṣòro<br>
        Àti ilé wa àìnípẹ̀kun.<br><br>
      `,
      fr: `
        1. Ô notre Dieu, notre secours dans les âges passés,<br>
        Notre espérance pour les années à venir,<br>
        Notre abri contre la tempête<br>
        Et notre demeure éternelle :<br><br>

        2. À l'ombre de ton trône,<br>
        Tes saints ont vécu en sécurité ;<br>
        Ta main seule suffit,<br>
        Et notre défense est assurée.<br><br>

        3. Avant que les collines aient été établies<br>
        Ou que la Terre ait reçu sa forme,<br>
        Tu es Dieu depuis l'éternité,<br>
        Pour des années sans fin, toujours le même.<br><br>

        4. Mille âges à tes yeux<br>
        Sont comme un soir passé,<br>
        Aussi courts que la veille qui termine la nuit<br>
        Avant que le soleil ne se lève.<br><br>

        5. Le temps, comme un fleuve sans fin,<br>
        Emporte tous ses fils ;<br>
        Ils s'envolent, oubliés, comme un rêve<br>
        Qui meurt au lever du jour.<br><br>

        6. Comme des champs fleuris, les nations se tiennent,<br>
        Heureuses avec la lumière du matin ;<br>
        Les fleurs sous la main du faucheur<br>
        S'éteignent avant la nuit.<br><br>

        7. Ô notre Dieu, notre secours dans les âges passés,<br>
        Notre espérance pour les années à venir,<br>
        Sois notre gardien pendant que les épreuves durent,<br>
        Et notre demeure éternelle.<br><br>
      `
    },
    writeUp: {
      en: "This timeless hymn reflects on God’s eternal presence and unchanging nature. It acknowledges God's help through the ages, His shelter from life's storms, and the eternal hope found in Him. The hymn calls us to recognize God’s eternal protection and to trust in His guidance through time.",
      yo: "Akọ́rin yìí jẹ́ àfihàn ìmọ̀lára Ọlọ́run pẹ̀lú ìtọ́jú rẹ nínú gbogbo àwọn ìran. Ó sọ pé Ọlọ́run ti jẹ́ ìrànlọ́wọ́ láti ìgbà pẹ́ àti pé ó wà láti dáàbò bo wa kúrò nínú ìṣòro ayé. Akọ́rin náà ń pe wa láti rántí ìtọ́jú Ọlọ́run àti ìbáṣiṣẹ́ rẹ pẹ̀lú gbogbo ìgbà.",
      fr: "Ce cantique intemporel reflète la présence éternelle de Dieu et sa nature immuable. Il reconnaît l'aide de Dieu à travers les âges, Son abri contre les tempêtes de la vie, et l'espérance éternelle en Lui. Le cantique nous invite à reconnaître la protection éternelle de Dieu et à Lui faire confiance à travers le temps."
    }
  },
  75: {  // Hymn 75 - O God of Bethel, by Whose Hand
    title: {
      en: "O God of Bethel, by Whose Hand",
      yo: "Ọlọ́run Betẹlì, Nípa Ẹ̀wọ̀n Rẹ",
      fr: "Ô Dieu de Béthel, Par Ta Main"
    },
    lyrics: {
      en: `
        1. O God of Bethel! by whose hand<br>
        Thy people still are fed;<br>
        Who through this weary pilgrimage<br>
        Hast all our fathers led:<br><br>

        2. Our vows, our prayers, we now present<br>
        Before Thy throne of grace;<br>
        God of our fathers, be the God<br>
        Of their succeeding race!<br><br>

        3. Through each perplexing path of life<br>
        Our wandering footsteps guide;<br>
        Give us each day our daily bread,<br>
        And raiment fit provide.<br><br>

        4. Oh, spread Thy covering wings around,<br>
        Till all our wanderings cease,<br>
        And at our Father’s loved abode<br>
        Our souls arrive in peace!<br><br>

        5. Such blessings from Thy gracious hand<br>
        Our humble prayers implore;<br>
        And Thou shalt be our chosen God<br>
        And portion evermore.<br><br>

        Amen.
      `,
      yo: `
        1. Ọlọ́run Betẹlì! Nípa ọwọ́ rẹ,<br>
        Àwọn ènìyàn rẹ ń jẹun títí lọ;<br>
        Tí o sì ti dari gbogbo àwọn baba wa<br>
        Lọ́pọ̀ yàrá ọdún wa:<br><br>

        2. Aṣe wa, àdúrà wa, a fẹ́ fi hàn<br>
        Níwájú ìtẹ́ rẹ̀ ti ọ̀rẹ́; <br>
        Ọlọ́run àwọn baba wa, jẹ́ kí o jẹ́ Ọlọ́run<br>
        Fun àwọn tó ń bọ́ lẹ́yìn wọn!<br><br>

        3. Ní gbogbo òpópónà ti ìdíje ayé<br>
        Jọwọ tọ́jú ẹsẹ̀ wa tó n rìn;<br>
        Fún wa lọ́jọ́ kọọkan oúnjẹ wa, <br>
        Pẹ̀lú aṣọ tó yẹ.<br><br>

        4. Ẹ̀kúnrẹ́rẹ́ ni ṣe ìwọ ògo rẹ,<br>
        Títí gbogbo ìrìnàjò wa yóò parí,<br>
        Níbi àgọ́ baba wa, ọkàn wa yóò bọ.<br><br>

        5. Irẹ̀lẹ̀ àwọn ìbùkún nínú ọwọ́ rẹ,<br>
        A fi ẹ̀bẹ̀ wa bọwọ̀ fún;<br>
        Kí o sì jẹ́ Ọlọ́run wa tí a yàn<br>
        Ati apá wa pẹ̀lú àkókò pẹ̀lú.<br><br>

        Àmín.
      `,
      fr: `
        1. Ô Dieu de Béthel! Par Ta main,<br>
        Ton peuple est toujours nourri;<br>
        Qui, à travers ce pèlerinage pénible,<br>
        A mené tous nos pères :<br><br>

        2. Nos vœux, nos prières, nous les présentons<br>
        Devant Ton trône de grâce ;<br>
        Dieu de nos pères, sois le Dieu<br>
        De leur descendance !<br><br>

        3. À travers chaque chemin complexe de la vie<br>
        Guide nos pas errants ;<br>
        Donne-nous chaque jour notre pain quotidien,<br>
        Et pourvoir à notre vêtement.<br><br>

        4. Oh, étends Tes ailes protectrices autour,<br>
        Jusqu'à ce que toutes nos errances cessent,<br>
        Et que dans la demeure aimée de notre Père,<br>
        Nos âmes arrivent en paix !<br><br>

        5. De telles bénédictions de Ta main pleine de grâce,<br>
        Nos prières humbles implorent ;<br>
        Et Tu seras notre Dieu choisi<br>
        Et notre portion pour toujours.<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn calls on God, the provider and protector, to continue leading His people as He has done for generations. It asks for God's blessings, guidance through life's challenges, and peace in the eternal home He prepares for His followers.",
      yo: "Akọ́rin yìí ń pe Ọlọ́run, alájọsọpọ̀ ati alákóso, láti bá àwọn ènìyàn rẹ lọ gẹ́gẹ́ bí ó ṣe ṣe fún wọn láti ìran sí ìran. Ó bẹ̀ Ọlọ́run fún ìbùkún, ìtọ́sọ́nà nínú ìdíje ayé, àti ìkẹ́kọ̀ọ́ nílé ayé tó dájú.",
      fr: "Ce cantique appelle Dieu, le pourvoyeur et le protecteur, à continuer de guider Son peuple comme Il l’a fait à travers les générations. Il demande les bénédictions de Dieu, Sa direction à travers les défis de la vie, et la paix dans la demeure éternelle qu’Il prépare pour Ses disciples."
    }
  },
  76: {  // Hymn 76 - The Heaven Controller
    title: {
      en: "The Heaven Controller",
      yo: "Olùdarí Ọ̀run",
      fr: "Le Contrôleur des Cieux"
    },
    lyrics: {
      en: `
        1. Lord, Thy word abideth,<br>
        And our footsteps guideth;<br>
        Who is true believeth<br>
        Light and joy receiveth.<br><br>

        2. When our foes are near us,<br>
        Then Thy word doth cheer us;<br>
        Word of consolation,<br>
        Message of salvation.<br><br>

        3. When the storms are o'er us,<br>
        And dark clouds before us,<br>
        Then its light directeth,<br>
        And our way protecteth.<br><br>

        4. Who can tell the pleasure<br>
        Who recount the treasure<br>
        By Thy word imparted,<br>
        To the simple-hearted?<br><br>

        5. Word of mercy, giving<br>
        Succour to the living<br>
        Word of life, supplying<br>
        Comfort to the dying.<br><br>

        6. Oh, that we discerning<br>
        Its most holy learning,<br>
        Lord, may love and fear Thee,<br>
        Evermore be near Thee!<br><br>

        Amen.
      `,
      yo: `
        1. Olúwa, Ọrọ rẹ wà nídé,<br>
        Tí ó sì ń tọ́jú ìsẹ̀lẹ̀ wa;<br>
        Ẹni tó bá gbagbọ́ gidi<br>
        Yóò rí ìmọ̀lára àti ayọ̀.<br><br>

        2. Nígbà tí àwọn ọ̀tá wa bá wà nítòsí,<br>
        Ọrọ rẹ ń yọ wa nínú ìbànújẹ;<br>
        Ọrọ ìtùnú,<br>
        Ìhìn ìgbàlà.<br><br>

        3. Nígbà tí ìjòkòó bá wa n'ibè,<br>
        Ati àwọn àwọ̀n dudu tó wà níwájú wa,<br>
        Ọrọ rẹ ń tọ́ wa lọ,<br>
        Kó sì dáàbò bo ọ̀nà wa.<br><br>

        4. Tani ó lè sọ ìdùnnú<br>
        Tani ó lè sọ àtọ́kànwá<br>
        Tí Ọrọ rẹ ń fi kún,<br>
        Sí àwọn ẹni-ìkànsí?<br><br>

        5. Ọrọ ti àánú, tó ń fi<br>
        Ìrànlọ́wọ́ sí àwọn alààyè<br>
        Ọrọ ìyè, tó ń fi<br>
        Ìtùnú sí àwọn tó ń kú.<br><br>

        6. Oh, kí a lè mọ̀ ọrẹ rẹ<br>
        Ní kíkà àkópọ̀ àwọn ìmọ̀ rẹ,<br>
        Olúwa, jẹ́ kí a fẹ́ràn àti bẹ̀rù Rẹ,<br>
        Kí a lè wà pẹ̀lú Rẹ láéláé!<br><br>

        Àmín.
      `,
      fr: `
        1. Seigneur, Ta parole demeure,<br>
        Et nos pas guide.<br>
        Celui qui croit véritablement<br>
        Reçoit lumière et joie.<br><br>

        2. Lorsque nos ennemis sont près de nous,<br>
        Alors Ta parole nous réconforte;<br>
        Parole de consolation,<br>
        Message de salut.<br><br>

        3. Lorsque les tempêtes sont sur nous,<br>
        Et que des nuages sombres sont devant nous,<br>
        Alors sa lumière nous dirige,<br>
        Et protège notre chemin.<br><br>

        4. Qui peut dire le plaisir,<br>
        Qui peut raconter le trésor<br>
        Que Ta parole donne,<br>
        Aux simples de cœur?<br><br>

        5. Parole de miséricorde, apportant<br>
        Du secours aux vivants,<br>
        Parole de vie, apportant<br>
        Du réconfort aux mourants.<br><br>

        6. Oh, que nous discernions<br>
        Sa sagesse la plus sainte,<br>
        Seigneur, que nous puissions T’aimer et Te craindre,<br>
        Et être toujours près de Toi!<br><br>

        Amen.
      `
    },
    writeUp: {
      en: "This hymn celebrates the enduring power of God's Word, which provides guidance, comfort, and protection in times of trouble. It reflects on the blessings of salvation, mercy, and life through God's Word, calling on believers to love and fear Him, and to remain near Him always.",
      yo: "Akọ́rin yìí ń ṣe ayẹyẹ agbára títí-àyé Ọrọ Ọlọ́run, tó ń fún ni ìtọọ́sọ́nà, ìtùnú, àti ìdáàbò bo nígbà ìṣòro. Ó sọ̀rọ̀ nípa àwọn ìbùkún ìgbàlà, àánú, àti ìyè nínú Ọrọ Ọlọ́run, tó ń pè àwọn onígbàgbọ́ láti fẹ́ràn àti bẹ̀rù Rẹ, àti láti wà pẹ̀lú Rẹ ní gbogbo àkókò.",
      fr: "Ce cantique célèbre le pouvoir éternel de la parole de Dieu, qui offre guidance, réconfort et protection en temps de trouble. Il réfléchit sur les bénédictions du salut, de la miséricorde et de la vie à travers la parole de Dieu, appelant les croyants à L’aimer et Le craindre, et à rester près de Lui toujours."
    }
  },
  
  77: {  // Hymn 77 - My Times Are in Your Hand
    title: {
      en: "My Times Are in Your Hand",
      yo: "Àkókò Mi Wà Nínú Ọ́wọ́ Rẹ",
      fr: "Mon Temps Est Dans Ta Main"
    },
    lyrics: {
      en: `
        1. My times are in Your hand;<br>
        my God, I wish them there!<br>
        My life, my friends, my soul, I leave<br>
        entirely to Your care.<br><br>

        2. My times are in Your hand,<br>
        whatever they may be,<br>
        pleasing or painful, dark or bright,<br>
        as You know best for me.<br><br>

        3. My times are in Your hand;<br>
        why should I doubt or fear?<br>
        My Father's hand will never cause<br>
        His child a needless tear.<br><br>

        4. My times are in Your hand;<br>
        Jesus, the Crucified;<br>
        those hands my cruel sins had pierced<br>
        are now my guard and guide.<br><br>

        5. My times are in Your hand;<br>
        such faith You give to me<br>
        that after death, at Your right hand<br>
        I shall for ever be.<br><br>
      `,
      yo: `
        1. Àkókò mi wà nínú ọwọ́ Rẹ;<br>
        Ọlọ́run mi, mo fẹ́ kí wọ́n wà níbẹ!<br>
        Ayé mi, ọ̀rẹ́ mi, ọkàn mi, mo fi<br>
        Ní gbogbo ìtìlẹ́yìn Rẹ.<br><br>

        2. Àkókò mi wà nínú ọwọ́ Rẹ;<br>
        bí wọ́n ṣe rí, kó sí ìdí kankan,<br>
        inúrẹ̀ tàbí ìbànújẹ,<br>
        dudu tàbí ìmọ̀lára, bí Ọlọ́run ṣe mọ̀ pé ẹ̀mi.<br><br>

        3. Àkókò mi wà nínú ọwọ́ Rẹ;<br>
        kìlọ̀rọ̀, kìlọ̀rọ̀ tó yẹ? <br>
        Ọpẹ mi ni ẹ̀sẹ̀ tẹ̀mí àdúrà.<br><br>

        4. Àkókò mi wà nínú ọwọ́ Rẹ.<br>
        Ẹ̀sìn Jesu. Wonyi.<br><br>
      `,
      fr: `
        1. Mon temps est dans Ta main;<br>
        Mon Dieu, je souhaite qu'il y demeure!<br>
        Ma vie, mes amis, mon âme, je laisse<br>
        Entièrement entre Tes mains.<br><br>

        2. Mon temps est dans Ta main,<br>
        Quoi qu'il en soit,<br>
        Agréable ou douloureux, sombre ou lumineux,<br>
        Comme Tu sais ce qui est meilleur pour moi.<br><br>

        3. Mon temps est dans Ta main;<br>
        Pourquoi devrais-je douter ou avoir peur?<br>
        La main de mon Père ne causera jamais<br>
        Une larme inutile à Son enfant.<br><br>

        4. Mon temps est dans Ta main;<br>
        Jésus, le Crucifié;<br>
        Ces mains qui ont percé mes péchés cruels<br>
        Sont maintenant ma garde et mon guide.<br><br>

        5. Mon temps est dans Ta main;<br>
        Une telle foi Tu me donnes<br>
        Que, après la mort, à Ta droite<br>
        Je serai pour toujours.<br><br>
      `
    },
    writeUp: {
      en: "This hymn expresses trust and surrender to God’s will, acknowledging that all of life, with its joys and trials, is in His hands. It focuses on the comfort and assurance of God's providence and eternal care, particularly in the life, death, and resurrection of Jesus Christ.",
      yo: "Akọ́rin yìí fi ìgbàgbọ́ àti ìfarahàn ọkàn sí Ọlọ́run, ní pé gbogbo ìgbé ayé, pẹ̀lú ayọ̀ àti ìdààmú rẹ, wà nínú ọwọ́ Rẹ. Ó da lórí ìtùnú àti ìmúrasílẹ̀ Ọlọ́run, pẹ̀lú ìtọ́jú àtàwọn àdúrà tí ó fi mọ̀ ni ẹ̀dá ayé àti ikú Jésù Kristi.",
      fr: "Ce cantique exprime la confiance et l'abandon à la volonté de Dieu, reconnaissant que toute la vie, avec ses joies et ses épreuves, est dans Ses mains. Il met l'accent sur le confort et l'assurance de la providence divine et des soins éternels, en particulier dans la vie, la mort et la résurrection de Jésus-Christ."
    }
  },
  78: {  // Hymn 78 - Jesus Shall Reign Where'er the Sun
    title: {
      en: "Jesus Shall Reign Where'er the Sun",
      yo: "Jésù Yóò Jàre Nibikíbi tí Oorun Ba Wa",
      fr: "Jésus Règne Là Où Le Soleil Brille"
    },
    lyrics: {
      en: `
        1. Jesus shall reign where'er the sun<br>
        does its successive journeys run,<br>
        his kingdom stretch from shore to shore,<br>
        till moons shall wax and wane no more.<br><br>

        2. To him shall endless prayer be made,<br>
        and praises throng to crown his head.<br>
        His name like sweet perfume shall rise<br>
        with every morning sacrifice.<br><br>

        3. People and realms of every tongue<br>
        dwell on his love with sweetest song,<br>
        and infant voices shall proclaim<br>
        their early blessings on his name.<br><br>

        4. Blessings abound where'er he reigns:<br>
        the prisoners leap to lose their chains,<br>
        the weary find eternal rest,<br>
        and all who suffer want are blest.<br><br>

        5. Let every creature rise and bring<br>
        the highest honors to our King,<br>
        angels descend with songs again,<br>
        and earth repeat the loud amen.<br><br>
      `,
      yo: `
        1. Jésù yóò jàre níbi gbogbo tí oorun ba wa,<br>
        nínú gbogbo irin-ajo rẹ,<br>
        ìjọba rẹ yóò tan láti etíkun sí etíkun,<br>
        títí di pé oṣù àtàwọn osù yóò parí.<br><br>

        2. Fún un ni àdúrà àìnípẹ̀kun,<br>
        àti ìyìn púpọ̀ láti fi àyà rẹ kún.<br>
        Orúkọ rẹ yóò ṣe bí adùn ẹ̀fọ́rẹ̀ tí ó túnbọ̀,<br>
        pẹ̀lú gbogbo ẹbọ ìsìn ní gbogbo owurọ̀.<br><br>

        3. Àwọn ènìyàn àti àwọn orílẹ̀-èdè tí ó ní èdè gbogbo<br>
        yóò máa gbé ìfé rẹ ga pẹ̀lú orin tó dùn,<br>
        àwọn ọmọ kékeré yóò sọ ìbùkún wọn<br>
        lórí orúkọ rẹ.<br><br>

        4. Ìbùkún yóò jẹ́ lọ́pọ̀ nínú gbogbo ibi tí ó rè;<br>
        àwọn èrú yóò sáré láti yọ àwọn ẹ̀sùn wọn,<br>
        àwọn tí ó rẹwà yóò rí ìsinmi àìnípẹ̀kun,<br>
        àti gbogbo àwọn tí ń bẹ̀rù ìpadà jẹ́ bùkún.<br><br>

        5. Kí gbogbo ẹda yóò dide kí wọ́n sì kó<br>
        ògo tó ga jùlọ sí Ọba wa,<br>
        àwọn angẹli yóò ṣubú pẹ̀lú àwọn orin lẹ́ẹ̀kan sì i,<br>
        àti ilẹ̀ yóò tún sọ "àmín" ní agbára.<br><br>
      `,
      fr: `
        1. Jésus régnera là où le soleil<br>
        suit son parcours successif,<br>
        son royaume s'étendra d'une rive à l'autre,<br>
        jusqu'à ce que les lunes croissent et décroissent plus.<br><br>

        2. À lui, on fera des prières sans fin,<br>
        et des louanges viendront couronner sa tête.<br>
        Son nom, comme un parfum doux, s'élèvera<br>
        avec chaque sacrifice matinal.<br><br>

        3. Les peuples et les royaumes de toutes les langues<br>
        vivront dans son amour avec le plus doux des chants,<br>
        et les voix des enfants proclameront<br>
        leurs bénédictions sur son nom.<br><br>

        4. Les bénédictions abondent là où il règne :<br>
        les prisonniers sautent pour se libérer de leurs chaînes,<br>
        les fatigués trouvent le repos éternel,<br>
        et tous ceux qui souffrent de privations sont bénis.<br><br>

        5. Que chaque créature se lève et apporte<br>
        les plus grands honneurs à notre Roi,<br>
        que les anges descendent à nouveau avec des chants,<br>
        et que la terre répète l'amen fort.<br><br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the reign of Jesus Christ, whose kingdom will endure for all time, bringing blessings, freedom, and peace to the earth. It speaks of the universal worship of Christ and the joy of His eternal rule.",
      yo: "Akọ́rin yìí ń yìn ìjọba Jésù Kristi, tó máa péye títí láéláé, tó máa mu ìbùkún, ìdárayá àti aláàánú bá ilẹ̀ ayé. Ó sọ̀rọ̀ nípa ìjọṣepọ̀ gbogbo ènìyàn pẹ̀lú Kristi àti ayọ̀ ìjọba rẹ̀ tó péye.",
      fr: "Ce cantique célèbre le règne de Jésus-Christ, dont le royaume durera pour toujours, apportant bénédictions, liberté et paix sur la terre. Il parle de l'adoration universelle du Christ et de la joie de son règne éternel."
    }
  },
  79: {  // Hymn 79 - Rescue the Perishing, Care for the Dying
    title: {
      en: "Rescue the Perishing, Care for the Dying",
      yo: "Gbé àwọn tí ń ṣànà, Tọju àwọn tí ń kú",
      fr: "Sauvez les Périssants, Prenez Soin des Mourants"
    },
    lyrics: {
      en: `
        1. Rescue the perishing, Care for the dying,<br>
        Snatch them in pity from sin and the grave;<br>
        Weep o’er the erring one, Lift up the fallen,<br>
        Tell them of Jesus the mighty to save.<br><br>

        CHORUS:<br>
        Rescue the perishing, Care for the dying:<br>
        Jesus is merciful, Jesus will save.<br><br>

        2. Though they are slighting Him, still He is waiting,<br>
        Waiting the penitent child to receive;<br>
        Plead with them earnestly, Plead with them gently:<br>
        He will forgive if they only believe.<br><br>

        CHORUS:<br>
        Rescue the perishing, Care for the dying:<br>
        Jesus is merciful, Jesus will save.<br><br>

        3. Down in the human heart, Crush’d by the tempter,<br>
        Feelings lie buried that grace can restore;<br>
        Touch’d by a loving hand, Waken’d by kindness,<br>
        Chords that were broken will vibrate once more.<br><br>

        CHORUS:<br>
        Rescue the perishing, Care for the dying:<br>
        Jesus is merciful, Jesus will save.<br><br>

        4. Rescue the perishing, Duty demands it;<br>
        Strength for thy labour the Lord will provide;<br>
        Back to the narrow way patiently win them;<br>
        Tell the poor wand’rer a Saviour had died.<br><br>

        CHORUS:<br>
        Rescue the perishing, Care for the dying:<br>
        Jesus is merciful, Jesus will save.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Gbé àwọn tí ń ṣànà, Tọju àwọn tí ń kú,<br>
        Fa wọn lórùn lọ́dọ̀ ẹ̀sùn àti ìkú;<br>
        Sọra fun ẹni tó sọnù, Gbé ẹni tí ó ṣubú,<br>
        Sọ fún wọn nípa Jésù tó lágbára láti salọ.<br><br>

        CHORUS:<br>
        Gbé àwọn tí ń ṣànà, Tọju àwọn tí ń kú:<br>
        Jésù ni ìbànújẹ, Jésù yóò dá wọn là.<br><br>

        2. Bí wọ́n ṣe ń fi Hàn silẹ, ó ṣi ń dúró,<br>
        Dúró pé ọmọ aláìrè ní yóò gba;<br>
        Bínú pẹ̀lú wọn gan-an, Bínú pẹ̀lú wọn pẹ̀lú àánú:<br>
        Yóò dáwọ́n dúró tí wọn bá ní ìgbọ́kànlé.<br><br>

        CHORUS:<br>
        Gbé àwọn tí ń ṣànà, Tọju àwọn tí ń kú:<br>
        Jésù ni ìbànújẹ, Jésù yóò dá wọn là.<br><br>

        3. Ní inú ọkàn ènìyàn, Ti ń bọ́ sẹ́yìn lọ́dọ̀ afurasi,<br>
        Ìmọ̀ràn tí kò sẹ́yìn wà tí ìyìn á tẹ̀síwájú;<br>
        Gbọ́rọ̀ pẹ̀lú ọwọ́ ọkàn, Ròyìn nípẹ̀lú ìfẹ́,<br>
        Àwọn èyà tí ó yà yóò sọ̀rọ̀ padà lẹ́ẹ̀kan.<br><br>

        CHORUS:<br>
        Gbé àwọn tí ń ṣànà, Tọju àwọn tí ń kú:<br>
        Jésù ni ìbànújẹ, Jésù yóò dá wọn là.<br><br>

        4. Gbé àwọn tí ń ṣànà, Ìdáhùn níbé;<br>
        Agbara fún iṣẹ́ rẹ yóò jẹ́ pé Ọlọ́run yóò fún;<br>
        Pada sí ọna tó kùrọ̀, ṣiṣẹ́ pẹ̀lú wọn ní ìyìn;<br>
        Sọ fún olèjò pé Olùgbàlà ti kú.<br><br>

        CHORUS:<br>
        Gbé àwọn tí ń ṣànà, Tọju àwọn tí ń kú:<br>
        Jésù ni ìbànújẹ, Jésù yóò dá wọn là.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Sauvez les périssants, Prenez soin des mourants,<br>
        Arrachons-les de la pitié du péché et de la tombe;<br>
        Pleurez sur l'égaré, Levez le tombé,<br>
        Parlez-leur de Jésus, le puissant pour sauver.<br><br>

        CHORUS:<br>
        Sauvez les périssants, Prenez soin des mourants:<br>
        Jésus est miséricordieux, Jésus sauvera.<br><br>

        2. Bien qu'ils le dédaignent, il attend toujours,<br>
        Attendant de recevoir l'enfant pénitent;<br>
        Plaidez avec eux sincèrement, Plaidez avec eux doucement:<br>
        Il pardonnera s'ils croient.<br><br>

        CHORUS:<br>
        Sauvez les périssants, Prenez soin des mourants:<br>
        Jésus est miséricordieux, Jésus sauvera.<br><br>

        3. Dans le cœur humain, Écrasé par le tentateur,<br>
        Les sentiments sont enfouis que la grâce peut restaurer;<br>
        Touchés par une main aimante, Réveillés par la bonté,<br>
        Les cordes brisées vibreront à nouveau.<br><br>

        CHORUS:<br>
        Sauvez les périssants, Prenez soin des mourants:<br>
        Jésus est miséricordieux, Jésus sauvera.<br><br>

        4. Sauvez les périssants, Le devoir l'exige;<br>
        La force pour ton travail, le Seigneur la fournira;<br>
        Ramène-les sur le chemin étroit avec patience;<br>
        Dis au pauvre errant qu'un Sauveur est mort.<br><br>

        CHORUS:<br>
        Sauvez les périssants, Prenez soin des mourants:<br>
        Jésus est miséricordieux, Jésus sauvera.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn calls us to reach out to the lost and dying, sharing the message of Jesus’ mercy and salvation. It emphasizes our duty to care for others and to bring them to Christ, trusting in His power to save.",
      yo: "Akọ́rin yìí ń pè wa láti dé àṣẹ ẹlẹ́yà àti àwọn tí ń ṣèṣu, láti sọ ìhìn Jésù àti ìyìn rẹ fún wọn. Ó ṣe pàtàkì láti tọju àwọn ènìyàn àti kí a fi wọn ránṣẹ́ sí Kristi, ní ìbáwọ́rẹ̀ rẹ láti dá wọn là.",
      fr: "Ce cantique nous appelle à tendre la main aux perdus et aux mourants, en partageant le message de la miséricorde et du salut de Jésus. Il souligne notre devoir de prendre soin des autres et de les amener à Christ, en faisant confiance à son pouvoir de sauver."
    }
  },
  
  80: {  // Hymn 80 - Take Up Your Cross, the Savior Said
    title: {
      en: "Take Up Your Cross, the Savior Said",
      yo: "Gbé àkàrà rẹ, Olúwa wí",
      fr: "Prenez votre croix, dit le Sauveur"
    },
    lyrics: {
      en: `
        1. Take up your cross, the Savior said,<br>
        If you would my disciple be;<br>
        Deny yourself, the world forsake,<br>
        And humbly follow after me.<br><br>

        2. Take up your cross, be not ashamed!<br>
        Let not disgrace your spirit fill!<br>
        For God himself endured to die<br>
        Upon a cross, on Calvary's hill.<br><br>

        3. Take up your cross, which gives you strength,<br>
        Which makes your trembling spirit brave:<br>
        'Twill guide you to a better home<br>
        And lead to vict'ry o'er the grave.<br><br>

        4. Take up your cross, and follow Christ,<br>
        Nor think till death to lay it down;<br>
        For only they who bear the cross<br>
        May hope to wear the glorious crown.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Gbé àkàrà rẹ, Olúwa wí,<br>
        Bí o bá fẹ́ jẹ́ ọmọ-ẹ̀yìn mi;<br>
        Kó ara rẹ kúrò, kó ayé yé,<br>
        Kó tẹ̀lé mi ní ìkànsí.<br><br>

        2. Gbé àkàrà rẹ, má ṣe bẹru!<br>
        Má jẹ́ kí ìbèjì kó inú rẹ;<br>
        Nítorí Ọlọ́run fúnra rẹ ti jìyà<br>
        Lórí àkàrà, lórí òkè Kalifà.<br><br>

        3. Gbé àkàrà rẹ, yóò fún ọ ní agbára,<br>
        Yóò mú ẹ̀mí rẹ tó n'ibèjì dúró:<br>
        Yóò tọ́ ọ sí ilé tó dára ju,<br>
        Yóò sì dá ọ ní ìgbàlà lórí ìkú.<br><br>

        4. Gbé àkàrà rẹ, tẹ̀lé Kristi,<br>
        Má ṣe rò pé ìkú yóò dá a dúró;<br>
        Nítorí àwọn tí wọ́n bá gbe àkàrà<br>
        Ní wọ́n nikan lè ní ìrètí láti wọ ọṣọ àṣẹ́.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Prenez votre croix, dit le Sauveur,<br>
        Si tu veux être mon disciple;<br>
        Renie-toi, abandonne le monde,<br>
        Et suis-moi humblement.<br><br>

        2. Prenez votre croix, ne soyez pas honteux!<br>
        Que l'ignominie ne remplisse pas ton âme!<br>
        Car Dieu lui-même a souffert de mourir<br>
        Sur une croix, sur la colline de Golgotha.<br><br>

        3. Prenez votre croix, elle vous donnera de la force,<br>
        Elle rendra votre esprit tremblant courageux;<br>
        Elle vous guidera vers une maison meilleure<br>
        Et vous mènera à la victoire sur la tombe.<br><br>

        4. Prenez votre croix, et suivez Christ,<br>
        Ne pensez pas à l'abandonner jusqu'à la mort;<br>
        Car seuls ceux qui portent la croix<br>
        Peuvent espérer porter la couronne glorieuse.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn encourages believers to take up their cross and follow Christ, even in times of suffering and sacrifice. It emphasizes the strength and reward found in following Jesus' example of selfless devotion.",
      yo: "Akọ́rin yìí ń ṣe ìkìlọ̀ fún àwọn olùgbọ̀rò láti gbe àkàrà wọn àti tẹ̀lé Kristi, kódà nígbà ìrora àti ìbànújẹ. Ó fi hàn pé agbára àti ìyìn wà nínú tẹ̀lé àpẹẹrẹ Kristi ti ìfaramọ́ ẹni tó fi ara rẹ hàn.",
      fr: "Ce cantique encourage les croyants à prendre leur croix et à suivre le Christ, même dans les moments de souffrance et de sacrifice. Il souligne la force et la récompense trouvées dans le fait de suivre l'exemple d'amour sacrificiel de Jésus."
    }
  },
  81: {  // Hymn 81 - Once More, My Soul
    title: {
      en: "Once More, My Soul",
      yo: "Lẹ́ẹ̀kan síi, ẹmi mi",
      fr: "Une fois de plus, mon âme"
    },
    lyrics: {
      en: `
        1. Once more, my soul, thy Saviour, thro’ the Word,<br>
        Is offered full and free;<br>
        And now, O Lord, I must, I must decide:<br>
        Shall I accept of Thee?<br><br>

        Refrain:<br>
        I will! I will! I will!<br>
        God helping me, I will,<br>
        O Lord, be Thine!<br>
        Thy precious blood was shed to purchase me—<br>
        I will be wholly Thine!<br><br>

        2. By grace I will Thy mercy now receive,<br>
        Thy love my heart hath won:<br>
        On Thee, O Christ, I will, I will believe,<br>
        And trust in Thee alone!<br><br>

        [Refrain]<br><br>

        3. Thou knowest, Lord, how very weak I am,<br>
        And how I fear to stray;<br>
        For strength to serve I look to Thee alone—<br>
        The strength Thou must supply.<br><br>

        [Refrain]<br><br>

        4. And now, O Lord, give all with us to-day<br>
        The grace to join our song;<br>
        And from the heart to gladly with us say:<br>
        “I will to Christ belong!”<br><br>

        [Refrain]<br><br>

        5. To all who came, when Thou wast here below<br>
        And said, “O Lord, wilt Thou?”<br>
        To them, “I will!” was ever Thy reply:<br>
        We rest upon it now.<br><br>

        [Refrain]<br><br>

        Amen.<br>
      `,
      yo: `
        1. Lẹ́ẹ̀kan síi, ẹmi mi, Olúwa rẹ, nínú Ọ̀rọ̀,<br>
        Ti fi ara rẹ hàn ní kíkún àti lọ́ọ́tẹ́;<br>
        Ní báyìí, Olúwa, mo gbọdọ̀ pinnu,<br>
        Ṣé máa gba Ẹ? <br><br>

        Ìtẹ́lọ́run:<br>
        Màa gba! Màa gba! Màa gba!<br>
        Ọlọ́run yóò ràn mí lọ́wọ́, màa gba,<br>
        Olúwa, máa jẹ́ ti Rẹ!<br>
        Ẹ̀jẹ̀ Rẹ̀ tó ṣàdédé ni a fipamọ́ mi—<br>
        Màa jẹ́ gbogbo ti Rẹ!<br><br>

        2. Ní ọ̀pọ̀ àánú, máa gba ọ̀pẹ̀ Rẹ̀ nísinsin yìí,<br>
        Ìfẹ́ Rẹ̀ ti gba ọkàn mi;<br>
        Lórí Rẹ, Kristi, màa gba, màa gba,<br>
        Mà ṣe dákẹ́ ni Rẹ ṣùgbọ́n. <br><br>

        [Ìtẹ́lọ́run]<br><br>

        3. O mọ̀, Olúwa, bí mo ṣe jẹ́ aláìlera,<br>
        Bó ṣe jẹ́ pé mo bẹ̀rù láti yípadà;<br>
        Ìdájọ́-ọwọ́ wa lati Rẹ nikan—<br>
        Àgọ́ ti Rẹ̀ gbọdọ̀ jẹ́ kí ó wà.<br><br>

        [Ìtẹ́lọ́run]<br><br>

        4. Ní báyìí, Olúwa, fi gbogbo wa ní ìkànsí lónìí<br>
        Ẹ̀bùn láti darapọ̀ mọ́ orin wa;<br>
        Kí wọn fi ọkàn wọn dáríyá pè:<br>
        "Màá jẹ́ ti Kristi!"<br><br>

        [Ìtẹ́lọ́run]<br><br>

        5. Sí gbogbo àwọn tó wá, nígbà tí Iwọ wà lórí ilẹ̀ yìí,<br>
        Tí wọ́n sì ní, "Olúwa, ṣe Iwọ á fẹ́?"<br>
        Sí wọn, "Màá gba!" ni ìdáhùn Rẹ̀ gbogbo.<br>
        A dájú pé a fi ẹ̀sìn yìí lé lori.<br><br>

        [Ìtẹ́lọ́run]<br><br>

        Amen.<br>
      `,
      fr: `
        1. Une fois de plus, mon âme, ton Sauveur, à travers la Parole,<br>
        Est offert pleinement et gratuitement;<br>
        Et maintenant, Seigneur, je dois, je dois décider :<br>
        Accepterai-je de Toi ?<br><br>

        Refrain :<br>
        Je veux ! Je veux ! Je veux !<br>
        Dieu m'aidant, je veux,<br>
        Ô Seigneur, sois à moi !<br>
        Ton précieux sang a été versé pour me racheter—<br>
        Je serai entièrement à Toi !<br><br>

        2. Par grâce, je recevrai maintenant Ta miséricorde,<br>
        Ton amour a conquis mon cœur :<br>
        Sur Toi, ô Christ, je veux, je veux croire,<br>
        Et avoir confiance uniquement en Toi !<br><br>

        [Refrain]<br><br>

        3. Tu sais, Seigneur, combien je suis faible,<br>
        Et combien j'ai peur de m'égarer;<br>
        Pour la force de servir, je regarde uniquement vers Toi—<br>
        La force que Tu dois fournir.<br><br>

        [Refrain]<br><br>

        4. Et maintenant, Seigneur, donne à tous ceux qui sont ici aujourd'hui<br>
        La grâce de se joindre à notre chant;<br>
        Et de dire de tout cœur avec nous :<br>
        "Je veux appartenir à Christ !"<br><br>

        [Refrain]<br><br>

        5. À tous ceux qui sont venus, quand Tu étais ici-bas<br>
        Et ont dit : "Ô Seigneur, veux-Tu ?"<br>
        À eux, "Je veux !" était toujours Ta réponse :<br>
        Nous reposons sur cela maintenant.<br><br>

        [Refrain]<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn calls for a personal decision to follow Christ, embracing His mercy and strength. It emphasizes the act of committing to Christ's love and accepting His help to live out this faith.",
      yo: "Akọ́rin yìí ń pè fún ìpinnu ẹni kọọkan láti tẹ̀lé Kristi, ní gbigba ọ̀pẹ̀ Rẹ̀ àti agbára Rẹ̀. Ó fi hàn pé ìdájọ́ ẹ̀sìn ati gbigba ìrànlọ́wọ́ Kristi ni yóò ràn wa lọwọ lati gbe ìgbàgbọ́ wa lọ.",
      fr: "Ce cantique appelle à une décision personnelle de suivre le Christ, en embrassant Sa miséricorde et Sa force. Il souligne l'acte de se consacrer à l'amour du Christ et d'accepter Son aide pour vivre cette foi."
    }
  },
  82: {  // Hymn 82 -Rejoice Jesus Reigneth
    title: {
      en: "Rejoice Jesus Reigneth",
      yo: "Lẹ́ẹ̀kan síi, ẹmi mi",
      fr: "Une fois de plus, mon âme"
    },
    lyrics: {
      en: `
        1. Once more, my soul, thy Saviour, thro’ the Word,<br>
        Is offered full and free;<br>
        And now, O Lord, I must, I must decide:<br>
        Shall I accept of Thee?<br><br>

        Refrain:<br>
        I will! I will! I will!<br>
        God helping me, I will,<br>
        O Lord, be Thine!<br>
        Thy precious blood was shed to purchase me—<br>
        I will be wholly Thine!<br><br>

        2. By grace I will Thy mercy now receive,<br>
        Thy love my heart hath won:<br>
        On Thee, O Christ, I will, I will believe,<br>
        And trust in Thee alone!<br><br>

        [Refrain]<br><br>

        3. Thou knowest, Lord, how very weak I am,<br>
        And how I fear to stray;<br>
        For strength to serve I look to Thee alone—<br>
        The strength Thou must supply.<br><br>

        [Refrain]<br><br>

        4. And now, O Lord, give all with us to-day<br>
        The grace to join our song;<br>
        And from the heart to gladly with us say:<br>
        “I will to Christ belong!”<br><br>

        [Refrain]<br><br>

        5. To all who came, when Thou wast here below<br>
        And said, “O Lord, wilt Thou?”<br>
        To them, “I will!” was ever Thy reply:<br>
        We rest upon it now.<br><br>

        [Refrain]<br><br>

        Amen.<br>
      `,
      yo: `
        1. Lẹ́ẹ̀kan síi, ẹmi mi, Olúwa rẹ, nínú Ọ̀rọ̀,<br>
        Ti fi ara rẹ hàn ní kíkún àti lọ́ọ́tẹ́;<br>
        Ní báyìí, Olúwa, mo gbọdọ̀ pinnu,<br>
        Ṣé máa gba Ẹ? <br><br>

        Ìtẹ́lọ́run:<br>
        Màa gba! Màa gba! Màa gba!<br>
        Ọlọ́run yóò ràn mí lọ́wọ́, màa gba,<br>
        Olúwa, máa jẹ́ ti Rẹ!<br>
        Ẹ̀jẹ̀ Rẹ̀ tó ṣàdédé ni a fipamọ́ mi—<br>
        Màa jẹ́ gbogbo ti Rẹ!<br><br>

        2. Ní ọ̀pọ̀ àánú, máa gba ọ̀pẹ̀ Rẹ̀ nísinsin yìí,<br>
        Ìfẹ́ Rẹ̀ ti gba ọkàn mi;<br>
        Lórí Rẹ, Kristi, màa gba, màa gba,<br>
        Mà ṣe dákẹ́ ni Rẹ ṣùgbọ́n. <br><br>

        [Ìtẹ́lọ́run]<br><br>

        3. O mọ̀, Olúwa, bí mo ṣe jẹ́ aláìlera,<br>
        Bó ṣe jẹ́ pé mo bẹ̀rù láti yípadà;<br>
        Ìdájọ́-ọwọ́ wa lati Rẹ nikan—<br>
        Àgọ́ ti Rẹ̀ gbọdọ̀ jẹ́ kí ó wà.<br><br>

        [Ìtẹ́lọ́run]<br><br>

        4. Ní báyìí, Olúwa, fi gbogbo wa ní ìkànsí lónìí<br>
        Ẹ̀bùn láti darapọ̀ mọ́ orin wa;<br>
        Kí wọn fi ọkàn wọn dáríyá pè:<br>
        "Màá jẹ́ ti Kristi!"<br><br>

        [Ìtẹ́lọ́run]<br><br>

        5. Sí gbogbo àwọn tó wá, nígbà tí Iwọ wà lórí ilẹ̀ yìí,<br>
        Tí wọ́n sì ní, "Olúwa, ṣe Iwọ á fẹ́?"<br>
        Sí wọn, "Màá gba!" ni ìdáhùn Rẹ̀ gbogbo.<br>
        A dájú pé a fi ẹ̀sìn yìí lé lori.<br><br>

        [Ìtẹ́lọ́run]<br><br>

        Amen.<br>
      `,
      fr: `
        1. Une fois de plus, mon âme, ton Sauveur, à travers la Parole,<br>
        Est offert pleinement et gratuitement;<br>
        Et maintenant, Seigneur, je dois, je dois décider :<br>
        Accepterai-je de Toi ?<br><br>

        Refrain :<br>
        Je veux ! Je veux ! Je veux !<br>
        Dieu m'aidant, je veux,<br>
        Ô Seigneur, sois à moi !<br>
        Ton précieux sang a été versé pour me racheter—<br>
        Je serai entièrement à Toi !<br><br>

        2. Par grâce, je recevrai maintenant Ta miséricorde,<br>
        Ton amour a conquis mon cœur :<br>
        Sur Toi, ô Christ, je veux, je veux croire,<br>
        Et avoir confiance uniquement en Toi !<br><br>

        [Refrain]<br><br>

        3. Tu sais, Seigneur, combien je suis faible,<br>
        Et combien j'ai peur de m'égarer;<br>
        Pour la force de servir, je regarde uniquement vers Toi—<br>
        La force que Tu dois fournir.<br><br>

        [Refrain]<br><br>

        4. Et maintenant, Seigneur, donne à tous ceux qui sont ici aujourd'hui<br>
        La grâce de se joindre à notre chant;<br>
        Et de dire de tout cœur avec nous :<br>
        "Je veux appartenir à Christ !"<br><br>

        [Refrain]<br><br>

        5. À tous ceux qui sont venus, quand Tu étais ici-bas<br>
        Et ont dit : "Ô Seigneur, veux-Tu ?"<br>
        À eux, "Je veux !" était toujours Ta réponse :<br>
        Nous reposons sur cela maintenant.<br><br>

        [Refrain]<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn calls for a personal decision to follow Christ, embracing His mercy and strength. It emphasizes the act of committing to Christ's love and accepting His help to live out this faith.",
      yo: "Akọ́rin yìí ń pè fún ìpinnu ẹni kọọkan láti tẹ̀lé Kristi, ní gbigba ọ̀pẹ̀ Rẹ̀ àti agbára Rẹ̀. Ó fi hàn pé ìdájọ́ ẹ̀sìn ati gbigba ìrànlọ́wọ́ Kristi ni yóò ràn wa lọwọ lati gbe ìgbàgbọ́ wa lọ.",
      fr: "Ce cantique appelle à une décision personnelle de suivre le Christ, en embrassant Sa miséricorde et Sa force. Il souligne l'acte de se consacrer à l'amour du Christ et d'accepter Son aide pour vivre cette foi."
    }
  },
  83: {  // Hymn 83 - Jesus, and Shall It Ever Be
    title: {
      en: "Jesus, and Shall It Ever Be",
      yo: "Jesu, ṣé èyí á jẹ́ lọ́dọ̀ mí?",
      fr: "Jésus, et cela sera-t-il jamais"
    },
    lyrics: {
      en: `
        1. Jesus! and shall it ever be,<br>
        A mortal man ashamed of Thee?<br>
        Ashamed of Thee, Whom angels praise;<br>
        Whose glories shine through endless days?<br><br>

        2. Ashamed of Jesus! sooner far,<br>
        Let evening blush to own a star;<br>
        He sheds the beams of light divine;<br>
        O’er this benighted soul of mine.<br><br>

        3. Ashamed of Jesus! that dear Friend,<br>
        On whom my hopes of heaven depend!<br>
        No! when I blush, be this my shame,<br>
        That I no more revere His name.<br><br>

        4. Ashamed of Jesus yes, I may,<br>
        When I’ve no guilt to wash away,<br>
        No tears to wipe, no good to crave,<br>
        No fears to quell, no soul to save.<br><br>

        5. Till then, nor is my boasting vain,<br>
        Till then I boast a Saviour slain,<br>
        And O may this my glory be,<br>
        That Christ is not ashamed of me.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Jesu! ṣé èyí á jẹ́ lọ́dọ̀ mí,<br>
        Ọkùnrin aláyé nílẹ̀ ní kọ́ ẹ̀sùn Rẹ?<br>
        Kọ́ ẹ̀sùn Rẹ, Ẹni tí áńjẹ́lì ń yìn;<br>
        Ẹni tí ìyìn Rẹ ń tan káàkiri ọjọ́ ayé.<br><br>

        2. Kọ́ ẹ̀sùn Rẹ, Jesu! Kó kùlọ́gbẹ̀,<br>
        Kí alẹ́ kó sọ pé ìdílé rẹ̀ ni<br>
        Òun ṣèdá, ó fi ìmọ́lẹ̀ Rẹ̀ pọn.<br>
        Láti fi ṣàlàyé ọkàn mi ti kò ròyìn.<br><br>

        3. Kọ́ ẹ̀sùn Rẹ, Jesu! Ọrẹ tó ṣòro,<br>
        Lóru àlàáfíà ti n pé ni?<br>
        Rárá! Nígbà tí mo fi gbéjú, yóò jẹ́ àníyàn mi,<br>
        Pé ní ń bọ́ pé kí n fi ọwọ́ mọ́ Ọ.<br><br>

        4. Kọ́ ẹ̀sùn Rẹ Jesu; nígbà tí n kò ní<br>
        Ẹ̀sùn tó jẹ́ pé kó dáwọ́-ṣe,<br>
        Kò ní kọ̀tọ̀, kò ní ṣe agbára pọ́n,<br>
        Kò ni fura, kò ni ìmọ́lẹ̀.<br><br>

        5. Títí di ibè, kò yá mí gba rárá,<br>
        Títí ni mo fi fi iṣé mi kún,<br>
        A ní inú mi tó ń fiyé padà.<br>
        Kí Kristi má ṣe bẹ̀rù mi.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Jésus ! et cela sera-t-il jamais,<br>
        Un homme mortel honteux de Toi ?<br>
        Honteux de Toi, Toi que les anges louent,<br>
        Dont la gloire brille à travers les âges sans fin ?<br><br>

        2. Honteux de Jésus ! Plutôt, que le soir rougisse<br>
        Pour revendiquer une étoile ;<br>
        Il répand les rayons de la lumière divine,<br>
        Sur mon âme plongée dans les ténèbres.<br><br>

        3. Honteux de Jésus ! Ce cher Ami,<br>
        Sur qui mes espoirs du ciel reposent !<br>
        Non ! Lorsque je rougis, que cela soit ma honte,<br>
        Que je ne révère plus Son nom.<br><br>

        4. Honteux de Jésus, oui, je peux l’être,<br>
        Lorsque je n’ai plus de culpabilité à laver,<br>
        Aucune larme à essuyer, aucun bien à rechercher,<br>
        Aucune crainte à dissiper, aucune âme à sauver.<br><br>

        5. Jusqu'à ce moment-là, mon orgueil n'est pas vain,<br>
        Jusqu'à ce moment-là, je me vante d'un Sauveur crucifié,<br>
        Et oh, que ma gloire soit celle-ci,<br>
        Que Christ n’ait pas honte de moi.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn explores the shame and honor associated with following Jesus. It reflects the speaker's firm decision to never be ashamed of Christ and expresses the hope that Christ will not be ashamed of them, even in the face of challenges.",
      yo: "Akọ́rin yìí ń ṣe àfihàn ìkànsí àti ìyìn tó wà nínú tẹ̀lé Kristi. Ó ṣe afihan ìpinnu tí olúkálùkù fi nìkan tó láti kó ẹ̀sùn sí Kristi àti ìrètí pé Kristi kì yóò bẹ̀rù wọn, pàápàá nígbà ìṣòro.",
      fr: "Ce cantique explore la honte et l'honneur associés au fait de suivre Jésus. Il reflète la décision ferme du chanteur de ne jamais avoir honte du Christ et exprime l'espoir que Christ n'aura pas honte de lui, même face aux défis."
    }
  },
  84: {  // Hymn 84 - Wonderful God the only way 
    title: {
      en: "Wonderful God the only way ",
      yo: "Jesu, ṣé èyí á jẹ́ lọ́dọ̀ mí?",
      fr: "Jésus, et cela sera-t-il jamais"
    },
    lyrics: {
      en: `
        1. Jesus! and shall it ever be,<br>
        A mortal man ashamed of Thee?<br>
        Ashamed of Thee, Whom angels praise;<br>
        Whose glories shine through endless days?<br><br>

        2. Ashamed of Jesus! sooner far,<br>
        Let evening blush to own a star;<br>
        He sheds the beams of light divine;<br>
        O’er this benighted soul of mine.<br><br>

        3. Ashamed of Jesus! that dear Friend,<br>
        On whom my hopes of heaven depend!<br>
        No! when I blush, be this my shame,<br>
        That I no more revere His name.<br><br>

        4. Ashamed of Jesus yes, I may,<br>
        When I’ve no guilt to wash away,<br>
        No tears to wipe, no good to crave,<br>
        No fears to quell, no soul to save.<br><br>

        5. Till then, nor is my boasting vain,<br>
        Till then I boast a Saviour slain,<br>
        And O may this my glory be,<br>
        That Christ is not ashamed of me.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Jesu! ṣé èyí á jẹ́ lọ́dọ̀ mí,<br>
        Ọkùnrin aláyé nílẹ̀ ní kọ́ ẹ̀sùn Rẹ?<br>
        Kọ́ ẹ̀sùn Rẹ, Ẹni tí áńjẹ́lì ń yìn;<br>
        Ẹni tí ìyìn Rẹ ń tan káàkiri ọjọ́ ayé.<br><br>

        2. Kọ́ ẹ̀sùn Rẹ, Jesu! Kó kùlọ́gbẹ̀,<br>
        Kí alẹ́ kó sọ pé ìdílé rẹ̀ ni<br>
        Òun ṣèdá, ó fi ìmọ́lẹ̀ Rẹ̀ pọn.<br>
        Láti fi ṣàlàyé ọkàn mi ti kò ròyìn.<br><br>

        3. Kọ́ ẹ̀sùn Rẹ, Jesu! Ọrẹ tó ṣòro,<br>
        Lóru àlàáfíà ti n pé ni?<br>
        Rárá! Nígbà tí mo fi gbéjú, yóò jẹ́ àníyàn mi,<br>
        Pé ní ń bọ́ pé kí n fi ọwọ́ mọ́ Ọ.<br><br>

        4. Kọ́ ẹ̀sùn Rẹ Jesu; nígbà tí n kò ní<br>
        Ẹ̀sùn tó jẹ́ pé kó dáwọ́-ṣe,<br>
        Kò ní kọ̀tọ̀, kò ní ṣe agbára pọ́n,<br>
        Kò ni fura, kò ni ìmọ́lẹ̀.<br><br>

        5. Títí di ibè, kò yá mí gba rárá,<br>
        Títí ni mo fi fi iṣé mi kún,<br>
        A ní inú mi tó ń fiyé padà.<br>
        Kí Kristi má ṣe bẹ̀rù mi.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Jésus ! et cela sera-t-il jamais,<br>
        Un homme mortel honteux de Toi ?<br>
        Honteux de Toi, Toi que les anges louent,<br>
        Dont la gloire brille à travers les âges sans fin ?<br><br>

        2. Honteux de Jésus ! Plutôt, que le soir rougisse<br>
        Pour revendiquer une étoile ;<br>
        Il répand les rayons de la lumière divine,<br>
        Sur mon âme plongée dans les ténèbres.<br><br>

        3. Honteux de Jésus ! Ce cher Ami,<br>
        Sur qui mes espoirs du ciel reposent !<br>
        Non ! Lorsque je rougis, que cela soit ma honte,<br>
        Que je ne révère plus Son nom.<br><br>

        4. Honteux de Jésus, oui, je peux l’être,<br>
        Lorsque je n’ai plus de culpabilité à laver,<br>
        Aucune larme à essuyer, aucun bien à rechercher,<br>
        Aucune crainte à dissiper, aucune âme à sauver.<br><br>

        5. Jusqu'à ce moment-là, mon orgueil n'est pas vain,<br>
        Jusqu'à ce moment-là, je me vante d'un Sauveur crucifié,<br>
        Et oh, que ma gloire soit celle-ci,<br>
        Que Christ n’ait pas honte de moi.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn explores the shame and honor associated with following Jesus. It reflects the speaker's firm decision to never be ashamed of Christ and expresses the hope that Christ will not be ashamed of them, even in the face of challenges.",
      yo: "Akọ́rin yìí ń ṣe àfihàn ìkànsí àti ìyìn tó wà nínú tẹ̀lé Kristi. Ó ṣe afihan ìpinnu tí olúkálùkù fi nìkan tó láti kó ẹ̀sùn sí Kristi àti ìrètí pé Kristi kì yóò bẹ̀rù wọn, pàápàá nígbà ìṣòro.",
      fr: "Ce cantique explore la honte et l'honneur associés au fait de suivre Jésus. Il reflète la décision ferme du chanteur de ne jamais avoir honte du Christ et exprime l'espoir que Christ n'aura pas honte de lui, même face aux défis."
    }
  },  85: {  // Hymn 85 - I Lay My Sins on Jesus
    title: {
      en: "I Lay My Sins on Jesus",
      yo: "Mo fi ẹ̀sùn mi lẹ́gbẹ̀ẹ́ Jesu",
      fr: "Je dépose mes péchés sur Jésus"
    },
    lyrics: {
      en: `
        1. I lay my sins on Jesus,<br>
        the spotless Lamb of God;<br>
        He bears them all, and frees us<br>
        from the accursed load;<br>
        I bring my guilt to Jesus,<br>
        to wash my crimson stains<br>
        white in His blood most precious,<br>
        till not a spot remains.<br><br>

        2. I lay my wants on Jesus;<br>
        all fullness dwells in Him;<br>
        He heals all my diseases,<br>
        He doth my soul redeem;<br>
        I lay my griefs on Jesus,<br>
        my burdens and my cares;<br>
        He from them all releases,<br>
        He all my sorrow shares.<br><br>

        3. I rest my soul on Jesus,<br>
        this weary soul of mine;<br>
        His right hand me embraces,<br>
        I on His breast recline.<br>
        I love the Name of Jesus,<br>
        Immanuel, Christ, the Lord;<br>
        like fragrance on the breezes<br>
        His Name abroad is poured.<br><br>

        4. I long to be like Jesus,<br>
        meek, loving, lowly, mild;<br>
        I long to be like Jesus,<br>
        the Father's holy Child;<br>
        I long to be with Jesus<br>
        amid the heav'nly throng,<br>
        to sing with saints His praises,<br>
        to learn the angels' song.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Mo fi ẹ̀sùn mi lẹ́gbẹ̀ẹ́ Jesu,<br>
        Agnus Dei, Ẹni tó mọ́lẹ̀ tí kò ní ẹ̀sùn;<br>
        Ó n’íko gbogbo wọn, ó si ń yọ wa<br>
        kúrò ní ẹ̀rù tó wà lórí wa;<br>
        Mo mu ẹ̀sùn mi lọ sí Jesu,<br>
        láti wẹ ẹ̀dá pupa mi<br>
        fun wọn ní ẹ̀jé Rẹ, tó jẹ́ kókó yẹn,<br>
        Tí kò si ṣe ìtọ́jú kankan.<br><br>

        2. Mo fi ìfẹ́ mi ṣàfihàn sí Jesu;<br>
        gbogbo ohun tí kò pé wà nínú Rẹ;<br>
        Ó wò gbogbo àwọn àìlera mi,<br>
        Ó sì ra ọkàn mi padà;<br>
        Mo fi ìbànújẹ mi sí Jesu,<br>
        ẹrù mi àti ìṣòro mi;<br>
        Ó ṣílẹ̀ wọn, ó sí pin gbogbo ìkànsí.<br><br>

        3. Mo fi ọkàn mi lórí Jesu,<br>
        ọkàn mí tì torí ìrònú;<br>
        ọwọ́ òtítọ́ Rẹ jẹ́ ọwọ́ tó mú mi nípẹ̀,<br>
        Mo n’ipò rẹ níbi ọkàn Rẹ.<br>
        Mo nífẹ̀ẹ́ orúkọ Jesu,<br>
        Immanuel, Kristi, Olúwa;<br>
        gẹ́gẹ́ bí ìdán, tí ń yipo<br>
        orúkọ Rẹ ni a yá kiri.<br><br>

        4. Mo nífẹ̀ẹ́ láti jẹ́ bí Jesu,<br>
        adúróṣinṣin, òtító, àti ọmọnìyàn;<br>
        Mo nífẹ̀ẹ́ láti jẹ́ bí Jesu,<br>
        ọmọ Bàbá tó mọlẹ̀;<br>
        Mo nífẹ̀ẹ́ láti jẹ́ pẹ̀lú Jesu<br>
        nínú ẹgbẹ́ àwọn angẹli,<br>
        láti kó ìyìn wọn pẹlu àwọn olóòótọ́,<br>
        láti kọ́ orin angẹli.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Je dépose mes péchés sur Jésus,<br>
        l'Agneau sans tache de Dieu ;<br>
        Il les porte tous, et nous libère<br>
        du fardeau maudit ;<br>
        Je porte ma culpabilité à Jésus,<br>
        pour laver mes taches écarlates<br>
        en Son sang précieux,<br>
        jusqu'à ce qu'aucune tache ne reste.<br><br>

        2. Je dépose mes besoins sur Jésus ;<br>
        toute la plénitude demeure en Lui ;<br>
        Il guérit toutes mes maladies,<br>
        Il rachète mon âme ;<br>
        Je dépose mes chagrins sur Jésus,<br>
        mes fardeaux et mes soucis ;<br>
        Il me libère de tout,<br>
        Il partage toute ma tristesse.<br><br>

        3. Je repose mon âme sur Jésus,<br>
        cette âme fatiguée qui est la mienne ;<br>
        Sa main droite m'étreint,<br>
        je repose sur Sa poitrine.<br>
        J'aime le nom de Jésus,<br>
        Emmanuel, Christ, le Seigneur ;<br>
        comme un parfum porté par la brise,<br>
        Son nom se répand dans le monde.<br><br>

        4. Je désire être comme Jésus,<br>
        doux, aimant, humble, modeste ;<br>
        Je désire être comme Jésus,<br>
        l'enfant saint du Père ;<br>
        Je désire être avec Jésus<br>
        au milieu de l'assemblée céleste,<br>
        chanter avec les saints Ses louanges,<br>
        apprendre le chant des anges.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn is a beautiful reflection on the sufficiency of Jesus in bearing our sins, fulfilling our needs, and providing rest. It expresses the believer's longing to be more like Jesus and to find peace in His love and sacrifice.",
      yo: "Akọ́rin yìí ṣe àfihàn ìrònú ẹlẹ́dàá lori ìfẹ́ Jesu àti ìmúlò Rẹ̀ nínú gígba ẹ̀sùn wa, pèsè àlááfíà fún wa, àti ṣíṣe wa kó ní ìfẹ́ tó pọ̀ si. Ó fi àfiṣe olùgbọ́ràn hàn pẹ̀lú ìfẹ́ láti jẹ́ bí Jesu àti láti ní ìdákẹ́jẹ nínú ìfẹ́ Rẹ.",
      fr: "Ce cantique est une belle réflexion sur la suffisance de Jésus pour porter nos péchés, satisfaire nos besoins et nous offrir du repos. Il exprime le désir du croyant de devenir plus semblable à Jésus et de trouver la paix dans Son amour et Son sacrifice."
    }
  },
  86: {  // Hymn 86 - Revive Thy Work, O Lord
    title: {
      en: "Revive Thy Work, O Lord",
      yo: "Ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, Olúwa",
      fr: "Ravive Ton Œuvre, Ô Seigneur"
    },
    lyrics: {
      en: `
        1. Revive thy work, O Lord,<br>
        thy mighty arm make bare;<br>
        speak with the voice that wakes the dead,<br>
        and make thy people hear.<br><br>

        2. Revive thy work, O Lord,<br>
        disturb this sleep of death;<br>
        quicken the smould'ring embers now<br>
        by thine almighty breath.<br><br>

        3. Revive thy work, O Lord,<br>
        create soul-thirst for thee;<br>
        and hung'ring for the Bread of Life<br>
        O may our spirits be.<br><br>

        4. Revive thy work, O Lord,<br>
        exalt thy precious name;<br>
        and, by the Holy Ghost, our love<br>
        for thee and thine inflame.<br><br>

        5. Revive thy work, O Lord,<br>
        give Pentecostal show'rs;<br>
        the glory shall be all thine own,<br>
        the blessing, Lord, be ours.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, Olúwa,<br>
        fi ọwọ́ aláṣẹ Rẹ hàn;<br>
        sọ̀rọ̀ tó ń jí àwọn tó ku,<br>
        kí ó sì jẹ́ kí àwọn ènìyàn Rẹ gbọ́.<br><br>

        2. Ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, Olúwa,<br>
        yípadà ìsunú òjò yìí;<br>
        kí ó tu àtẹ́gun tó ń jo lọ́dọ̀ wa<br>
        nípa ẹmi aláṣẹ Rẹ.<br><br>

        3. Ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, Olúwa,<br>
        ṣe irẹ̀lẹ̀ nípa Rẹ fún wa;<br>
        kí àwọn ọkàn wa fẹ́ ẹ,<br>
        kí ó sì jẹ́ pé a fẹ́ oúnje Ẹ̀mí.<br><br>

        4. Ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, Olúwa,<br>
        gbé orúkọ Rẹ ga;<br>
        kí ìfẹ́ wa fún Rẹ àti Rẹ<br>
        jẹ́ àfiyèsí nípa Ẹmí Mímọ́.<br><br>

        5. Ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, Olúwa,<br>
        fún wa ìkó àṣẹ Pentecosté;<br>
        ògo náà yóò jẹ́ ti tirẹ,<br>
        ìbùkún náà yóò jẹ́ tiwa.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Ravive Ton œuvre, ô Seigneur,<br>
        montre Ta puissante main ;<br>
        parle de la voix qui réveille les morts,<br>
        et fais entendre Ta parole à Ton peuple.<br><br>

        2. Ravive Ton œuvre, ô Seigneur,<br>
        trouble ce sommeil de mort ;<br>
        ranime les braises qui fument<br>
        par Ton souffle tout-puissant.<br><br>

        3. Ravive Ton œuvre, ô Seigneur,<br>
        crée en nous la soif de Ton âme ;<br>
        et fais en sorte que nous ayons faim<br>
        du Pain de Vie.<br><br>

        4. Ravive Ton œuvre, ô Seigneur,<br>
        élève Ton précieux nom ;<br>
        et, par le Saint-Esprit, enflamme notre amour<br>
        pour Toi et pour les Tiens.<br><br>

        5. Ravive Ton œuvre, ô Seigneur,<br>
        envoie des pluies pentecôtistes ;<br>
        la gloire Te reviendra entièrement,<br>
        la bénédiction, Seigneur, sera la nôtre.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn is a passionate plea for God to revive His work, stir the hearts of His people, and pour out His Holy Spirit for renewal and empowerment. It calls for a fresh awakening of the soul's thirst for God and the desire to serve Him more fervently.",
      yo: "Akọ́rin yìí jẹ́ ìbéèrè pẹ̀lú ìfẹ́ tí ń bẹ fún Ọlọ́run láti ṣe ìmúrasílẹ̀ iṣẹ́ Rẹ, kí ó túmọ̀ ìrètí sí ọkàn àwọn ènìyàn Rẹ, kí ó sì fi Ẹmi Rẹ silẹ́ fún ìmúrasílẹ̀ ati agbára tuntun. Ó n pe fún ìmúrasílẹ̀ ìfẹ́ ọkàn wa sí Ọlọ́run.",
      fr: "Ce cantique est une supplication passionnée demandant à Dieu de raviver Son œuvre, d'éveiller les cœurs de Son peuple, et de répandre Son Saint-Esprit pour renouveler et fortifier les croyants. Il appelle à un éveil frais de la soif de l'âme pour Dieu et du désir de Le servir plus ardemment."
    }
  },
  87: {  // Hymn 87 - Thy Kingdom Come, O God
    title: {
      en: "Thy Kingdom Come, O God",
      yo: "Ìjọba Rẹ, Olúwa, Wá",
      fr: "Que Ton Règne Vienne, Ô Dieu"
    },
    lyrics: {
      en: `
        1. Thy kingdom come, O God,<br>
        thy rule, O Christ, begin;<br>
        break with thine iron rod<br>
        the tyrannies of sin.<br><br>

        2. Where is thy reign of peace<br>
        and purity and love?<br>
        When shall all hatred cease,<br>
        as in the realms above?<br><br>

        3. When comes the promised time<br>
        that war shall be no more,<br>
        and lust, oppression, crime<br>
        shall flee thy face before?<br><br>

        4. We pray thee, Lord, arise,<br>
        and come in thy great might;<br>
        revive our longing eyes,<br>
        which languish for thy sight.<br><br>

        5. Men scorn thy sacred name,<br>
        and wolves devour thy fold;<br>
        by many deeds of shame<br>
        we learn that love grows cold.<br><br>

        6. O'er lands both near and far<br>
        thick darkness broodeth yet:<br>
        arise, O Morning Star,<br>
        arise, and never set!<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ìjọba Rẹ, Olúwa, wá,<br>
        ìṣàkóso Rẹ, Kristi, bẹ̀rẹ̀;<br>
        fọ́ àkúnya rẹ̀ pẹ̀lú ìfá àyà rẹ,<br>
        kí o má bà á fi ìkànsí ẹ̀sùn.<br><br>

        2. Níbo ni ìjọba Rẹ ti ìkànsí,<br>
        àti ìkànsí ìfaramọ́ àti ìfẹ́?<br>
        Nígbà wo ni ìkànsí gbogbo àkúnya yóó dá?<br>
        Gẹ́gẹ́ bí ni ọ̀run ẹ̀dá.<br><br>

        3. Nígbà wo ni àkúnya ìlérí ti yóó wá?<br>
        Ìja kò ní sí mọ́,<br>
        àti ìfipá, ìtàkùn, ẹ̀sùn<br>
        yóó sá ìwọ̀n Rẹ.<br><br>

        4. A ń bọ̀ pé Ọlọ́run, dákẹ́lẹ́<br>
        kí o si wa ní agbára Rẹ;<br>
        tún ẹ̀kúnrẹ́rẹ́ wa,<br>
        tí ń fi ọ̀nà Rẹ ṣe iwẹ̀.<br><br>

        5. Èdá yóó tẹ̀síwájú,<br>
        àti ewìtì tó fi ilẹ̀ Rẹ fi Ọ fi jẹ́ ka tó wá;<br>
        Pẹ̀lú ẹ̀yà tí kò ní padà.<br><br>
      `,
      fr: `
        1. Que Ton règne vienne, ô Dieu,<br>
        que Ton pouvoir, ô Christ, commence;<br>
        brise avec Ta verge de fer<br>
        les tyrannies du péché.<br><br>

        2. Où est Ton règne de paix<br>
        de pureté et d'amour ?<br>
        Quand la haine cessera-t-elle,<br>
        comme dans les royaumes célestes ?<br><br>

        3. Quand viendra le temps promis<br>
        où la guerre sera finie,<br>
        où la luxure, l'oppression, et le crime<br>
        fuiront Ta face ?<br><br>

        4. Nous prions, Seigneur, lève-toi,<br>
        viens avec Ta grande puissance ;<br>
        réveille nos yeux impatients,<br>
        qui languissent pour Te voir.<br><br>

        5. Les hommes méprisent Ton nom sacré,<br>
        et les loups dévorent Ton troupeau;<br>
        par de nombreuses actions honteuses<br>
        nous apprenons que l'amour se refroidit.<br><br>

        6. Sur des terres proches et lointaines<br>
        l'obscurité épaissit encore ;<br>
        lève-toi, Ô Étoile du matin,<br>
        lève-toi et ne t'éteins jamais !<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn is a passionate cry for the coming of God's kingdom on earth. It calls for the end of sin, the reign of peace, and the ultimate victory of Christ over all darkness and evil. It is a prayer for the establishment of God's rule, where His justice, love, and righteousness will reign supreme.",
      yo: "Akọ́rin yìí jẹ́ ìhìn rere fún ìwọ̀n ìjọba Ọlọ́run láti dé sí ilé ayé. Ó ń bọ̀ pé a dúró de ìparí ẹ̀sùn àti ijọba àlàáfíà, àti ikú àwọn òfo pẹ̀lú igbàgbọ́ pé Kristi ni olùṣakoso. Ó n rọ̀ọ̀rọ̀ ki iṣàkóso Ọlọ́run láti bọ̀ ọ̀run àti ilé ayé.",
      fr: "Ce cantique est un cri passionné pour l'avènement du royaume de Dieu sur terre. Il appelle à la fin du péché, au règne de la paix, et à la victoire ultime du Christ sur toute obscurité et toute forme de mal. C'est une prière pour l'établissement de la règle de Dieu, où Sa justice, Son amour et Sa droiture régneront en maître."
    }
  },
  88: {  // Hymn 88 - Lord, I Hear of Showers of Blessing
    title: {
      en: "Lord, I Hear of Showers of Blessing",
      yo: "Olúwa, Mo Gbọ́ Nípa Ìpẹ̀yà Ọ̀rọ̀ Ìbùkún",
      fr: "Seigneur, J'entends des Averses de Bénédictions"
    },
    lyrics: {
      en: `
        1. Lord, I hear of show'rs of blessing<br>
        Thou art scatt'ring full and free,<br>
        Show'rs the thirsty land refreshing;<br>
        Let some drops now fall on me.<br><br>

        CHORUS:<br>
        Even me, even me,<br>
        Let some drops now fall on me.<br><br>

        2. Pass me not, O gracious Father!<br>
        Sinful though my heart may be;<br>
        Thou might'st leave me, but the rather<br>
        Let Thy mercy fall on me.<br><br>

        CHORUS:<br>
        Even me, even me,<br>
        Let some drops now fall on me.<br><br>

        3. Pass me not, O tender Savior!<br>
        Let me love and cling to Thee;<br>
        I am longing for Thy favor;<br>
        While Thou'rt calling, call for me.<br><br>

        CHORUS:<br>
        Even me, even me,<br>
        Let some drops now fall on me.<br><br>

        4. Pass me not, O Lord, the Spirit!<br>
        Thou canst make the blind to see;<br>
        By the Witness of Thy merit,<br>
        Speak the word of power to me.<br><br>

        CHORUS:<br>
        Even me, even me,<br>
        Let some drops now fall on me.<br><br>

        5. Love of God, so pure and changeless!<br>
        Blood of Christ, so rich and free!<br>
        Grace of God, so strong and boundless!<br>
        Magnify them all in me.<br><br>

        CHORUS:<br>
        Even me, even me,<br>
        Let some drops now fall on me.<br><br>

        6. Pass me not! Thy lost one bringing,<br>
        Bind my heart, O Lord, to Thee;<br>
        While the streams of life are springing,<br>
        Blessing others, oh, bless me.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Olúwa, Mo Gbọ́ Nípa Ìpẹ̀yà Ọ̀rọ̀ Ìbùkún<br>
        Iwọ ń ṣàn ní gbogbo agbára, kí o má fi wa lọ́rùn<br>
        Ìpẹ̀yà Rẹ n bọ̀ kí àwọn aṣé n gba agbára Rẹ.<br>
        Jọwọ́ kó ní mọ̀ ọn yẹ̀ mí.<br><br>

        CHORUS:<br>
        Pẹ̀lú mi, pẹ̀lú mi,<br>
        Jọwọ́ kó ní mọ̀ ọn yẹ̀ mí.<br><br>

        2. Má ṣe fi mí sílẹ̀, Olúwa Olódùmarè!<br>
        Pẹlu ìjẹ̀pàtàkì mi, ọkàn mi ń bọ̀ kọju mọ́; <br>
        Afi dáa, ṣùgbọ́n fi ìfẹ́ Rẹ sódọ̀ mi.<br><br>

        CHORUS:<br>
        Pẹ̀lú mi, pẹ̀lú mi,<br>
        Jọwọ́ kó ní mọ̀ ọn yẹ̀ mí.<br><br>

        3. Má ṣe fi mí sílẹ̀, Ọmọ náà ti fẹ́ mí!<br>
        Èmi ṣọ́ra pé Ọlọ́run, jọwọ́ kọ́ ẹ̀kúnrọ̀ àti kọ́ ẹ̀jìkú.<br><br>

        CHORUS:<br>
        Pẹ̀lú mi, pẹ̀lú mi,<br>
        Jọwọ́ kó ní mọ̀ ọn yẹ̀ mí.<br><br>

        4. Ọlọ́run, tó jẹ́ Ọpọlọ, kó ní mọ̀ mi<br> 
        Ní gbogbo ìmúṣẹlẹ rẹ.<br>
        N kò mọ̀ Ọkàn.<br>
        Kò ni' ròń ọ.<br><br>

        CHORUS:<br>
        Pẹ̀lú mi, pẹ̀lú mi,<br>
        Jọwọ́ kó ní mọ̀ ọn yẹ̀ mí.<br><br>
      `,
      fr: `
        1. Seigneur, j'entends des averses de bénédictions<br>
        Que Tu répands de manière pleine et libre,<br>
        Des averses rafraîchissant la terre assoiffée;<br>
        Que quelques gouttes tombent sur moi.<br><br>

        CHORUS:<br>
        Même moi, même moi,<br>
        Que quelques gouttes tombent sur moi.<br><br>

        2. Ne me passe pas, Père plein de grâce !<br>
        Bien que mon cœur soit pécheur,<br>
        Tu pourrais me laisser, mais plutôt<br>
        Que Ta miséricorde tombe sur moi.<br><br>

        CHORUS:<br>
        Même moi, même moi,<br>
        Que quelques gouttes tombent sur moi.<br><br>

        3. Ne me passe pas, tendre Sauveur !<br>
        Permets-moi de T'aimer et de M'attacher à Toi ;<br>
        Je désire Ton favori ;<br>
        Tandis que Tu appelles, appelle-moi.<br><br>

        CHORUS:<br>
        Même moi, même moi,<br>
        Que quelques gouttes tombent sur moi.<br><br>

        4. Ne me passe pas, Seigneur, l'Esprit !<br>
        Tu peux faire voir aux aveugles ;<br>
        Par le témoignage de Ta vertu,<br>
        Dis le mot de puissance à moi.<br><br>

        CHORUS:<br>
        Même moi, même moi,<br>
        Que quelques gouttes tombent sur moi.<br><br>

        5. L'amour de Dieu, si pur et inaltérable !<br>
        Le sang du Christ, si riche et libre !<br>
        La grâce de Dieu, si forte et sans limite !<br>
        Magnifie-les tous en moi.<br><br>

        CHORUS:<br>
        Même moi, même moi,<br>
        Que quelques gouttes tombent sur moi.<br><br>

        6. Ne me passe pas ! Amen.<br><br>
      `
    },
    writeUp: {
      en: "This hymn is a heartfelt prayer asking for God's mercy and blessings to fall upon the believer. It expresses a deep longing for God's grace, love, and guidance, and calls for a personal encounter with the Savior, acknowledging His mercy and pleading for His constant presence.",
      yo: "Akọ́rin yìí jẹ́ ẹ̀bẹ́ tó ń sọ pé kí ìfẹ́ Ọlọ́run àti ìbùkún Rẹ́ kó ṣàn ní gbogbo agbára. Ó ń fi ọkàn rẹ hàn, pé kí Ọlọ́run ṣàánú fún un, kí o si fi ìtọrọ Rẹ́ mú àjọyọ̀ rẹ.","fr":"Ce cantique est une prière profondément ressentie demandant à Dieu de faire pleuvoir Sa miséricorde et Ses bénédictions sur le croyant. Il exprime un profond désir pour la grâce, l'amour et la direction de Dieu, et appelle à une rencontre personnelle avec le Sauveur, en reconnaissant Sa miséricorde et en plaidant pour Sa présence constante."
    }
  },
  89: {  // Hymn 89 - Jesus Calls Us O'er the Tumult
    title: {
      en: "Jesus Calls Us O'er the Tumult",
      yo: "Jesu ń Pe Wa Lórí Ìjàngbọ̀n",
      fr: "Jésus Nous Appelle Par-dessus le Tumulte"
    },
    lyrics: {
      en: `
        1. Jesus calls us o'er the tumult<br>
        Of our life's wild, restless sea;<br>
        Day by day His sweet voice sounding,<br>
        Saying, "Christian, follow me."<br><br>

        2. Brothers Simon, Andrew heard it<br>
        By the Galilean lake,<br>
        Turned from home, and toil, and kindred,<br>
        Leaving all for His dear sake.<br><br>

        3. Jesus calls us from the worship<br>
        Of the vain world’s golden store,<br>
        From each idol that would keep us,<br>
        Saying, “Christian, love me more.”<br><br>

        4. In our joys and in our sorrows,<br>
        Days of toil and hours of ease,<br>
        Still He calls, in cares and pleasures,<br>
        “Christian, love me more than these.”<br><br>

        5. Jesus calls us—By Your mercies,<br>
        Savior, may we hear Your call,<br>
        Give our hearts to Your obedience,<br>
        Serve and love You best of all.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Jesu ń Pe Wa Lórí Ìjàngbọ̀n<br>
        Lórí òkun ìyè wa tó ní ìrètí;<br>
        Lóòótọ́ òun ń pe wa pẹ̀lú ìpẹ̀yà Rẹ́,<br>
        Kí a fi ẹ̀mi wa tẹ̀síwájú àtàwọn rẹ̀.<br><br>

        2. Sìmọn àti Áńdírẹ́wù gbọ́ rẹ̀,<br>
        Nínú adágún Galílí,<br>
        Wọn yí padà, tó fi ẹ̀bi wọn sẹ́yìn,<br>
        Kí wọn fi gbogbo ẹ̀ṣọ́ wọn fi hàn.<br><br>

        3. Jesu ń pe wa, kó fi gbogbo ìpẹ̀yà ṣe àkọsílẹ̀,<br>
        Ó ń fi ẹ̀dá kan mi pẹ̀lú àsopọ̀ dáradára.<br><br>

        4. Nínú àìlera àti ayé tí kò dájú,<br>
        Ọkàn yóò yé e nípa iṣàn lọwọ.<br><br>

        5. Jesu ń Pe Wa—Kí Ọlọ́run náà mu wa fi si rẹ́.<br>
        Aṣẹṣe kúrò, agbára ọjọ kan.<br>
      `,
      fr: `
        1. Jésus nous appelle par-dessus le tumulte<br>
        De la mer agitée de notre vie;<br>
        Jour après jour, Sa douce voix résonne,<br>
        Disant: "Chrétien, suis-moi."<br><br>

        2. Les frères Simon et André l'entendirent<br>
        Au bord du lac de Galilée,<br>
        Ils quittèrent leur maison, leur travail, leurs proches,<br>
        Abandonnant tout pour Son cher nom.<br><br>

        3. Jésus nous appelle à abandonner<br>
        L'adoration des idoles du monde<br>
        Et à répondre à Son appel,<br>
        Disant: "Chrétien, aime-moi davantage."<br><br>

        4. Dans nos joies et nos peines,<br>
        Pendant les journées de labeur et de repos,<br>
        Il appelle, dans nos soucis et nos plaisirs,<br>
        "Chrétien, aime-moi plus que tout cela."<br><br>

        5. Jésus nous appelle - Par Ta miséricorde,<br>
        Seigneur, fais que nous entendions ton appel,<br>
        Donne-nous de suivre Ta volonté,<br>
        Servez et aimez-Toi avant tout.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn calls believers to follow Jesus amidst the tumult and chaos of life. It emphasizes the importance of responding to Jesus' call, leaving behind worldly attachments, and loving Him more than anything else, whether in joy or sorrow.",
      yo: "Akọ́rin yìí ń pe awọn olùgbọ́ lati tẹ̀le Jesu lẹ́yìn gbogbo ìjàngbọ̀n tí ń ṣẹlẹ̀ nínú ayé wọn. Ó fi hàn pé a gbọdọ́ dáhùn ìpè Jesu àti fi gbogbo ohun tí a ní sílẹ̀ kí a sì nífẹ̀ẹ́ Rẹ ju gbogbo ohun miran lọ, nítorí gbogbo ìfé ayé àti àìlera wa.",
      fr: "Ce cantique appelle les croyants à suivre Jésus au milieu du tumulte et du chaos de la vie. Il met l'accent sur l'importance de répondre à l'appel de Jésus, de laisser derrière soi les attachements mondains et de L'aimer plus que tout, que ce soit dans la joie ou dans la souffrance."
    }
  },
  90: {  // Hymn 90 - O Holy Savior, Friend Unseen
    title: {
      en: "O Holy Savior, Friend Unseen",
      yo: "O Olùdámọ̀ran Mímọ́, Ọ̀rẹ́ Tí A Kò Rí",
      fr: "Ô Saint Sauveur, Ami Invisible"
    },
    lyrics: {
      en: `
        1. O holy Savior, friend unseen,<br>
        The faint, the weak on Thee may lean,<br>
        Help me, throughout life’s varying scene,<br>
        By faith to cling to Thee.<br><br>

        2. Blessed with communion so divine,<br>
        Take what Thou wilt, shall I repine;<br>
        When, as the branches to the vine,<br>
        My soul may cling to Thee?<br><br>

        3. Far from her home, fatigued, oppressed,<br>
        Here she has found her place of rest<br>
        An exile still, yet not unblessed,<br>
        While she can cling to Thee.<br><br>

        4. What though the world deceitful prove,<br>
        And earthly friends and joys remove,<br>
        With patient, uncomplaining love<br>
        Still would I cling to Thee.<br><br>

        5. Oft when I seem to read alone<br>
        Some barren waste, with thorns o'ergrown,<br>
        A voice of love, in gentlest tone,<br>
        Whispers, Still cling to Me.<br><br>

        6. Though faith and hope may long be tried,<br>
        I ask not, need not aught beside;<br>
        How safe, how calm, how satisfied,<br>
        The souls that cling to Thee!<br><br>

        7. They fear not life’s rough storms to brave,<br>
        Since Thou art near, and strong to save;<br>
        Nor shudder e'en at death's dark wave,<br>
        Because they cling to Thee.<br><br>

        8. Blessed is my lot, whate’er befall;<br>
        What can disturb me, who appall,<br>
        While as my strength, my rock, my all,<br>
        All, Savior, I cling to Thee!<br><br>

        Amen.<br>
      `,
      yo: `
        1. O Olùdámọ̀ran Mímọ́, Ọ̀rẹ́ Tí A Kò Rí,<br>
        Awọn aláìlera, àwọn àìlera ni wọn lè gbà péjọ,<br>
        Ràn mí lọ́wọ́, kọ́ja iròyìn ìyípadà ayé,<br>
        Pẹ̀lú ìgbàgbọ́ láti fara mọ́ Ọ.<br><br>

        2. Ìbùkún ni pẹ̀lú ìkànsí tí ó jẹ́ ìyanu,<br>
        Gba ohun tí ìwọ yóò fẹ́, ṣé ẹ̀rù mi,<br>
        Nígbà tí ẹ̀ka pọ̀ mọ́ igi,<br>
        Ọkàn mi lè fara mọ́ Ọ?<br><br>

        3. Jìnà sí ilé rẹ, àrùn, ìbànújẹ,<br>
        Nibi ti o ti rí ibi ìsinmi rẹ,<br>
        Olùkúlùkù àfi àfíà, ṣùgbọ́n kò ní ìfẹ́rẹ̀,<br>
        Nígbà tí ó bá le fara mọ́ Ọ.<br><br>

        4. Kí ni gbogbo agbára tí ó ti wa,<br>
        Ati gbogbo awọn ọrẹ àti ayọ ti ẹlẹ́rù, <br>
        Pẹ̀lú ìfẹ́ àìníkan, àìyẹrú,<br>
        Mo lè fara mọ́ Ọ.<br><br>

        5. Nígbà tí mo rò pé Mo ń kà lójú ẹlẹ́rọ̀,<br>
        Nínú ìpẹ̀yà ti a kó àwọn ọ̀fọ́ tó wúlò,<br>
        Ohùn ìfẹ́, nínú àdúrà pẹ̀lú ọ̀rọ̀ ẹwà,<br>
        Ìyẹn nìyí fún àwọn tí wọ́n fẹ́ kí wọn fara mọ́.<br><br>

        6. Bí ìgbàgbọ́ àti ìreti ṣe kún ti ọwọ́,<br>
        Èmi ò fẹ́, kì í ṣe ohun ti nîgbà fún ọ.<br>
        Báwo ni ìdírun, báwo ni íkànsí, báwo ni ìpèjú,<br>
        Bí àwọn ẹni tí ń fara mọ́.<br><br>

        7. Wọn kò ní bẹ̀rù ìpẹ̀yà àwọn àgbàlagbà,<br>
        Bí o ṣe wa níbè, àti pé o wà lára ayé,<br>
        Kò sì ní ṣàníyàn ní gbogbo ẹ̀sìn.<br><br>

        8. Ìbùkún ni ìpinnu mi, ohùn bí ẹni tó mọ́:<br>
        Kí ni gbogbo àwọn ọkọ-òfọ́ ti ń dànù, áyé ni kò mọ.<br><br>

        Àmín.<br>
      `,
      fr: `
        1. Ô saint Sauveur, ami invisible,<br>
        Les faibles et les timides peuvent s'appuyer sur Toi,<br>
        Aide-moi, tout au long de la scène changeante de la vie,<br>
        Par la foi à m'attacher à Toi.<br><br>

        2. Béni avec une communion si divine,<br>
        Prends ce que Tu veux, et je ne me plaindrai pas;<br>
        Quand, comme les branches à la vigne,<br>
        Mon âme peut s'attacher à Toi ?<br><br>

        3. Loin de chez elle, fatiguée, oppressée,<br>
        Elle a trouvé ici son lieu de repos,<br>
        Une exilée, mais pas sans bénédiction,<br>
        Tant qu'elle peut s'attacher à Toi.<br><br>

        4. Quoique le monde prouve être trompeur,<br>
        Et que les amis et les joies terrestres disparaissent,<br>
        Avec une amour patiente et sans plainte,<br>
        Je m'attacherai toujours à Toi.<br><br>

        5. Souvent, lorsque je semble lire seule<br>
        Un terrain stérile, envahi d'épines,<br>
        Une voix d'amour, dans un ton doux,<br>
        Chuchote : "Reste attaché à Moi."<br><br>

        6. Bien que la foi et l'espérance soient souvent mises à l'épreuve,<br>
        Je ne demande rien, je n'ai besoin de rien d'autre;<br>
        Comme il est sûr, calme et satisfait<br>
        Ceux qui s'attachent à Toi !<br><br>

        7. Ils ne craignent pas d'affronter les tempêtes de la vie,<br>
        Puisque Tu es proche, et fort pour sauver;<br>
        Ils ne frémissent même pas à l'onde sombre de la mort,<br>
        Parce qu'ils s'attachent à Toi.<br><br>

        8. Béni soit mon sort, quoi qu'il arrive;<br>
        Qu'est-ce qui pourrait me troubler, moi qui suis effrayé,<br>
        Puisque comme ma force, mon rocher, tout ce que j'ai,<br>
        Tout, Sauveur, je m'attache à Toi !<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn expresses a believer's reliance on Christ, the unseen Savior. It calls on the faithful to trust and cling to Jesus, regardless of life's difficulties, trusting His strength and love in times of trial and in the face of death.",
      yo: "Akọ́rin yìí ń fi hàn ìbáṣepọ̀ aláìfẹ́bọ̀n nípa ọna Jesu, Olùdámọ̀ran. Ó ń pè awọn olùgbọ́ láti gbà péjọ àti kóra mọ́ Rẹ, láìka gbogbo ìṣòro ayé, pẹ̀lú ìtọ́sọ́nà àti ìfẹ́ Rẹ ní àkókò ìdánwò àti ní oju-ìgbẹ̀yà.",
      fr: "Ce cantique exprime la dépendance d'un croyant à Christ, le Sauveur invisible. Il appelle les fidèles à faire confiance et à s'attacher à Jésus, quels que soient les défis de la vie, en s'appuyant sur Sa force et Son amour dans les épreuves et face à la mort."
    }
  },
  91: {  // Hymn 91 - Blessed Are They in Jesus
    title: {
      en: "Blessed Are They in Jesus",
      yo: "Ẹ̀bùn Wọ́n Ní Nínú Jesu",
      fr: "Béni Soient Ceux en Jésus"
    },
    lyrics: {
      en: `
        1. Blessed are they in Jesus<br>
        Who are all children of God,<br>
        Redeemed by His precious blood<br>
        From death to life evermore.<br><br>

        CHORUS:<br>
        How happy if I am one?<br>
        In this world and in heaven.<br><br>

        2. All of them are forgiven<br>
        Through His ever bounteous grace,<br>
        They are rid of all their sins<br>
        All are free on judgement’s day.<br><br>

        CHORUS:<br>
        How happy if I am one?<br>
        In this world and in heaven.<br><br>

        3. There they shall bear gracious fruits<br>
        Since they work in righteousness,<br>
        Enemies of sins they are,<br>
        The word of God lives in them.<br><br>

        CHORUS:<br>
        How happy if I am one?<br>
        In this world and in heaven.<br><br>

        4. And by the Blood of the Lamb<br>
        They with God all keep company,<br>
        With Jesus great Majesty<br>
        They are clad in glorious robes.<br><br>

        CHORUS:<br>
        How happy if I am one?<br>
        In this world and in heaven.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ẹ̀bùn ni wọn ní nínú Jesu<br>
        Tí gbogbo wọn jẹ́ ọmọ Ọlọ́run,<br>
        Tí a yọ wọn pẹ̀lú ẹ̀jẹ̀ Rẹ́<br>
        Látì ìkú sí ìyè títí láé.<br><br>

        CHORUS:<br>
        Báwo ni ìyàrá mi ti jẹ́ ọkan?<br>
        Ní ayé yìí àti ní ọ̀run.<br><br>

        2. Gbogbo wọn ni a dáwọ̀n sílẹ̀<br>
        Nípasẹ̀ ìfẹ́ àìníkan Rẹ́,<br>
        Wọ́n yọ gbogbo ẹ̀sùn wọn<br>
        Gbogbo wọn ni ìwọ̀n ìdájọ́.<br><br>

        CHORUS:<br>
        Báwo ni ìyàrá mi ti jẹ́ ọkan?<br>
        Ní ayé yìí àti ní ọ̀run.<br><br>

        3. Níbi yẹn, wọn yóò jẹ́ ẹ̀dá rere<br>
        Níwọn tí wọn ṣe iṣẹ́ ìdárayá,<br>
        Wọ́n jẹ́ ọ̀tá fún gbogbo ẹ̀sùn,<br>
        Ọ̀rọ̀ Ọlọ́run wà nínú wọn.<br><br>

        CHORUS:<br>
        Báwo ni ìyàrá mi ti jẹ́ ọkan?<br>
        Ní ayé yìí àti ní ọ̀run.<br><br>

        4. Pẹ̀lú Ẹ̀jẹ̀ Olamiká<br>
        Wọ́n pàdé Ọlọ́run ni gbogbo wọn,<br>
        Pẹ̀lú Majẹ̀mú Jesu Rẹ,<br>
        Wọ́n yípo wọ̀n ní aṣọ ìyanu.<br><br>

        CHORUS:<br>
        Báwo ni ìyàrá mi ti jẹ́ ọkan?<br>
        Ní ayé yìí àti ní ọ̀run.<br><br>

        Àmín.<br>
      `,
      fr: `
        1. Béni soient ceux en Jésus<br>
        Qui sont tous enfants de Dieu,<br>
        Rachetés par Son précieux sang<br>
        Du trépas à la vie éternelle.<br><br>

        CHORUS:<br>
        Quel bonheur si je suis l'un d'eux ?<br>
        Dans ce monde et dans le ciel.<br><br>

        2. Tous sont pardonnés<br>
        Par Sa grâce toujours abondante,<br>
        Ils sont débarrassés de leurs péchés<br>
        Tous sont libres le jour du jugement.<br><br>

        CHORUS:<br>
        Quel bonheur si je suis l'un d'eux ?<br>
        Dans ce monde et dans le ciel.<br><br>

        3. Là, ils porteront de gracieux fruits<br>
        Puisqu'ils travaillent dans la justice,<br>
        Ils sont ennemis des péchés,<br>
        La parole de Dieu vit en eux.<br><br>

        CHORUS:<br>
        Quel bonheur si je suis l'un d'eux ?<br>
        Dans ce monde et dans le ciel.<br><br>

        4. Et par le Sang de l'Agneau<br>
        Ils sont en compagnie de Dieu,<br>
        Avec la grande Majesté de Jésus<br>
        Ils sont vêtus de robes glorieuses.<br><br>

        CHORUS:<br>
        Quel bonheur si je suis l'un d'eux ?<br>
        Dans ce monde et dans le ciel.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the blessings of those who are redeemed by Jesus Christ. It highlights the joy, freedom, and grace they experience through His sacrifice, and their ultimate reward of eternal life with Him in heaven.",
      yo: "Akọ́rin yìí ń yìn àwọn tí a dá pada pẹ̀lú Jesu Kristi. Ó fi hàn ayọ, ìdárayá àti ìbùkún tí wọn rí nípa ìyàwòrán Rẹ, àti ìyípadà wọn sí ìyè àìníyàn pẹlu Rẹ ní ọ̀run.",
      fr: "Ce cantique célèbre les bénédictions de ceux qui sont rachetés par Jésus-Christ. Il met en lumière la joie, la liberté et la grâce qu'ils expérimentent grâce à Son sacrifice, et leur récompense ultime de la vie éternelle avec Lui au ciel."
    }
  },

  92: {  // Hymn 92 - Lord, to Whom Except to Thee
    title: {
      en: "Lord, to Whom Except to Thee",
      yo: "Olúwa, Tó Bá A Ṣe Lọ́wọ́ Tí Ọ̀rọ̀ Yìí",
      fr: "Seigneur, À Qui D'autre Excepté Toi"
    },
    lyrics: {
      en: `
        1. Lord, to whom, except to Thee,<br>
        Shall our wandering spirits go?<br>
        Thee whom it is light to see,<br>
        And eternal life to know?<br>
        Awful is that life of Thine,<br>
        Which the Spirit’s breath inspires,<br>
        And the food must be divine,<br>
        Which each new-born soul desires.<br><br>

        2. Israel on the heavenly seed,<br>
        Fed and died in days of yore:<br>
        But the souls that on Thee feed:<br>
        Never thirst nor hunger more.<br><br>
        Lord, to whom, except to Thee,<br>
        Shall we go when ills betide?<br>
        Who except Thyself can be,<br>
        Hope and help and strength and guide?<br><br>

        3. Who can cleanse the soul from sin,<br>
        Hear the prayer, and seal the vow?<br>
        Who can fill the void within,<br>
        Blessed Saviour, who but Thou?<br><br>
        Therefore, evermore I’ll give,<br>
        Laud and praise, my God, to Thee.<br>
        Evermore in Thee I live;<br>
        Evermore live Thou in me.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Olúwa, Tó Bá A Ṣe Lọ́wọ́ Tí Ọ̀rọ̀ Yìí,<br>
        Ibi tí ẹmi wa, ti ò fi lọ?<br>
        Tí ẹ̀mí mi lè ri àti mọ nífẹ́,<br>
        Nítorí ayé t’òun?<br>
        Wùúrò ní ìdírun yìí,<br>
        Ọlọ́run fún gbogbo ẹ̀mi wọn,<br>
        Èyí tó fi wọn fi àìfẹ́ fi ọwọ́ sọ.<br><br>

        2. Ísírẹ́ẹ̀lì yóò sin mi ni pàdé Ọlọ́run,<br>
        Wọn fọ́ wọn ni ọjọ́ ní rìn.<br>
        Àwọn tó ti kọ Ẹ̀kọ Rẹ́,<br>
        Kò ní fi ẹ̀sùn wọpọ.<br><br>

        3. Tó fi ẹ̀mí mi kúrò nínú,<br>
        Gbọ́ ẹbẹ yóò ṣẹ̀lẹ̀.<br>
        Olùtọ́run yóò mú wa fi ẹdá.<br><br>
    `,
      fr: `
        1. Seigneur, à qui d'autre excepté Toi<br>
        Nos esprits errants pourraient-ils aller ?<br>
        Toi qu'il est léger de voir,<br>
        Et la vie éternelle de connaître ?<br>
        Redoutable est Ta vie,<br>
        Dont le souffle de l'Esprit inspire,<br>
        Et le pain doit être divin,<br>
        Celui que chaque âme nouvellement née désire.<br><br>

        2. Israël s'est nourri de la semence céleste,<br>
        Ils ont mangé et sont morts dans les jours anciens :<br>
        Mais les âmes qui se nourrissent de Toi<br>
        Ne souffriront plus jamais de la soif ni de la faim.<br><br>

        3. Qui peut purifier l'âme du péché,<br>
        Entendre la prière et sceller le vœu ?<br>
        Qui peut remplir le vide intérieur,<br>
        Béni Sauveur, qui sinon Toi ?<br><br>
        C'est pourquoi, éternellement, je donnerai<br>
        Louange et adoration à Toi, mon Dieu.<br>
        Éternellement en Toi je vis;<br>
        Que Tu vives éternellement en moi.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn acknowledges the need for God’s presence in our lives. It emphasizes the importance of seeking God in times of need, and how He is the only true source of hope, strength, and redemption.",
      yo: "Akọ́rin yìí fihan ìmọ̀ràn fún Ìtọ́sọ́nà Ọlọ́run nínú ayé wa. Ó ṣàpèjúwe bíbá Ọlọ́run ní àkókò ìpinnu, àti bí kò ṣeé ṣe láì jẹ́ pé òun nikan ni àǹfààní àwọn olùgbàlà àti olùtọ́jú.",
      fr: "Ce cantique reconnaît le besoin de la présence de Dieu dans nos vies. Il met l'accent sur l'importance de chercher Dieu dans les moments de besoin, et comment Il est la seule véritable source d'espoir, de force et de rédemption."
    }
  },
  93: {  // Hymn 93 - Watchful Shepherd Our
    title: {
      en: "Watchful Shepherd Our",
      yo: "Olùkọ́mọ́ Ẹran Wa Tó ń Wo Lójú",
      fr: "Notre Pasteur Vigilant"
    },
    lyrics: {
      en: `
        1. Watchful Shepherd, our Almighty Saviour is:<br>
        Should our solace be Him, we shall never fear,<br>
        To where He directs us, there all we must go:<br>
        Whether to the deserts or the green meadow.<br><br>

        2. Watchful Shepherd, Saviour, we all know Thy voice:<br>
        Watch how Thy whispers to us make all rejoice;<br>
        When Thou dost rebuke, mellow is Thy voice:<br>
        Without Thee for support, we shall all perish.<br><br>

        3. Watchful Shepherd had died to redeem the flock:<br>
        He sprinkles His blood to protect all the lambs;<br>
        His marks He left on them to distinguish them,<br>
        He said they are His who partake of His life.<br><br>

        4. Watchful Shepherd protects the lambs in His care:<br>
        If the wolves make attempts they will not prevail,<br>
        Although we walk in the shadow of death,<br>
        We shall never fear, but we shall all prevail.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Olùkọ́mọ́, Olúwa wa Tó ń Wo Lójú:<br>
        Bí ìtùnú wa bá jẹ́ Rẹ, a kì yóò bẹ̀rù,<br>
        Níbi tí ó bá tọ́ wa lọ, níbẹ̀ ni gbogbo wa ni lọ:<br>
        Bí a bá lọ sí odò tàbí ọgbà aláwọ̀.<br><br>

        2. Olùkọ́mọ́, Olúwa, a mọ ìhùwàsí Rẹ:<br>
        Wò ó, bí àwọn ìtàn Rẹ ṣe ń mú wa inú rẹ̀,<br>
        Nígbà tí ó bá túbọ̀, ìhùwàsí Rẹ ní í yọ̀dá.<br>
        Láì Rẹ, gbogbo wa yóò pin.<br><br>

        3. Olùkọ́mọ́ Tó ti kú láti pa ẹran:<br>
        Ó fi ẹ̀jẹ̀ Rẹ́ ṣípo lati ṣètọ́rẹ rẹ̀,<br>
        Tí ó fi ami Rẹ́ silẹ̀, kó jẹ́ àpẹẹrẹ wọn,<br>
        Ó sọ pé wọn jẹ́ ti Rẹ̀ nífẹ̀ẹ́.<br><br>

        4. Olùkọ́mọ́ Tó ń pa ẹran pọ̀ láti ṣetọ́.<br>
        Bí wọ́n bá fẹ̀ dájú rẹ, kò ní fi gbọ́n.<br>
        Bí a ṣe nlọ́ ní ibi tó mọ̀.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Pasteur vigilant, notre Sauveur Tout-Puissant est :<br>
        Si notre consolation est en Lui, nous ne craindrons jamais,<br>
        Où Il nous dirige, là nous devons aller :<br>
        Que ce soit dans le désert ou dans le pré verdoyant.<br><br>

        2. Pasteur vigilant, Sauveur, nous connaissons Ta voix :<br>
        Regarde comment Tes murmures à nous rendent joyeux ;<br>
        Quand Tu reprends, douce est Ta voix :<br>
        Sans Toi pour soutien, nous péririons tous.<br><br>

        3. Le Pasteur vigilant est mort pour racheter le troupeau :<br>
        Il répand Son sang pour protéger tous les agneaux ;<br>
        Il a laissé Ses marques sur eux pour les distinguer,<br>
        Il a dit qu’ils sont les Siens, ceux qui partagent Sa vie.<br><br>

        4. Pasteur vigilant protège les agneaux sous Sa garde :<br>
        Si les loups essaient, ils ne prévaudront pas,<br>
        Bien que nous marchions dans l’ombre de la mort,<br>
        Nous ne craindrons jamais, mais nous triompherons tous.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn praises the protective care of Jesus as the watchful shepherd. It emphasizes His sacrifice, His constant protection, and how, with Him, believers will never fear, even in the shadow of death.",
      yo: "Akọ́rin yìí yìn ìtọ́jú olùkọ́mọ́ Jesu gẹ́gẹ́ bí olùtọ́jú ẹran. Ó fi hàn pé ó ti ṣe ìyàwòrán àti bí ó ṣe n ṣààbò bo àwọn olùgbọ́ Rẹ, pẹ̀lú Rẹ, a kì yóò bẹ̀rù, bí a bá lọ nínú òjò àìlera.",
      fr: "Ce cantique loue les soins protecteurs de Jésus en tant que pasteur vigilant. Il met en lumière Son sacrifice, Sa protection constante, et comment, avec Lui, les croyants ne craindront jamais, même dans l'ombre de la mort."
    }
  },
  94: {  // Hymn 94 - I Want to Be Like Jesus
    title: {
      en: "I Want to Be Like Jesus",
      yo: "Mo Fé Dáa Bí Jesu",
      fr: "Je Veux Être Comme Jésus"
    },
    lyrics: {
      en: `
        1. I want to be like Jesus,<br>
        So lowly and so meek;<br>
        For no one marked an angry word,<br>
        That ever heard Him speak.<br><br>

        2. I want to be like Jesus,<br>
        So frequently in prayer:<br>
        Alone upon the mountain top,<br>
        He met His Father there.<br><br>

        3. I want to be like Jesus:<br>
        I never, never find<br>
        That He, though persecuted, was<br>
        To anyone unkind.<br><br>

        4. I want to be like Jesus.<br>
        Engaged in doing good,<br>
        So that of me it may be said,<br>
        “She hath done what she could.”<br><br>

        5. I want to be like Jesus,<br>
        Who sweetly said to all,<br>
        “Let little children come to Me”<br>
        I will obey the call.<br><br>

        6. But oh, I’m not like Jesus,<br>
        As anyone may see!<br>
        O gentle Saviour, send Thy grace,<br>
        And make me like to Thee.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Mo fé dáa bí Jesu,<br>
        Tí kò fi ọwọ́ tẹ̀, àti àìlera;<br>
        Bí kò ṣe kó gbogbo àsopọ̀ jẹ̀.<br><br>

        2. Mo fé dáa bí Jesu.<br>
        Tí ọkọ a fọkàn.<br><br>
        
      `,
      fr: `
        1. Je veux être comme Jésus,<br>
        Si humble et si doux ;<br>
        Car personne n’a jamais entendu<br>
        De Sa part un mot de colère.<br><br>

        2. Je veux être comme Jésus,<br>
        Si souvent dans la prière :<br>
        Seul sur la montagne, là-bas,<br>
        Il rencontra Son Père.<br><br>

        3. Je veux être comme Jésus,<br>
        Je ne trouve jamais<br>
        Que Lui, bien qu’étant persécuté,<br>
        Aie été cruel envers quiconque.<br><br>

        4. Je veux être comme Jésus,<br>
        Occupé à faire le bien,<br>
        Ainsi, on pourra dire de moi,<br>
        « Elle a fait ce qu’elle pouvait ». <br><br>

        5. Je veux être comme Jésus,<br>
        Qui dit tendrement à tous,<br>
        « Laissez venir à Moi les petits enfants »,<br>
        Je répondrai à cet appel.<br><br>

        6. Mais oh, je ne suis pas comme Jésus,<br>
        Comme tout le monde peut le voir !<br>
        Ô doux Sauveur, envoie Ta grâce,<br>
        Et fais-moi être comme Toi.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn expresses a heartfelt desire to emulate the humility, kindness, and goodness of Jesus in every aspect of life. It serves as a prayer for divine help to become more like Jesus.",
      yo: "Akọ́rin yìí ṣàfihàn ìfé gidi láti fi ẹ̀dá àti ìwà Jesu hàn nínú gbogbo ìgbésí ayé. Ó fi hàn pé a ní ìbẹ̀rù pé a nílò àánú Ọlọ́run láti di bí Jesu.",
      fr: "Ce cantique exprime un désir sincère d’imiter l’humilité, la douceur et la bonté de Jésus dans tous les aspects de la vie. C'est une prière pour obtenir de l'aide divine pour devenir plus comme Jésus."
    }
  },

  95: {  // Hymn 95 - One There Is Above All Others
    title: {
      en: "One There Is Above All Others",
      yo: "Ọkan Wa Ní Àwọn Tó Ga Ju Gbogbo Lókè",
      fr: "Il Y En A Un Qui Surpasse Tous Les Autres"
    },
    lyrics: {
      en: `
        1. One there is above all others,<br>
        Oh, how He loves!<br>
        His is love beyond a brother’s,<br>
        Oh, how He loves!<br>
        Earthly friends may fail or leave us,<br>
        One day soothe the next day grieve us;<br>
        But this friend will ne’er deceive us,<br>
        Oh, how He loves!<br><br>

        2. ‘Tis eternal life to know Him,<br>
        Oh, how He loves!<br>
        Think, oh, think, how much we owe Him!<br>
        Oh, how He loves!<br>
        With His precious blood He bought us,<br>
        In the wilderness He sought us,<br>
        To His fold He safely brought us,<br>
        Oh, how He loves!<br><br>

        3. We have found a friend in Jesus,<br>
        Oh, how He loves!<br>
        ‘Tis His great delight to bless us,<br>
        Oh, how He loves!<br>
        Bid us dwell in safety near Him,<br>
        How our hearts delight to hear Him!<br>
        Why should we distrust or fear Him?<br>
        Oh, how He loves!<br><br>

        4. Through His name we are forgiven,<br>
        Oh, how He loves!<br>
        Backward shall our foes be driven,<br>
        Oh, how He loves!<br>
        Best of blessings He’ll provide us,<br>
        Naught but good shall e’er betide us,<br>
        Safe to glory He will guide us,<br>
        Oh, how He loves!<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ọkan wa ní àwọn tó ga ju gbogbo lóké,<br>
        Kí ni kó dáa fi?<br>
        Ẹ̀dá rẹ̀ jẹ́ tó láfiwe ẹ̀bi àtàwọn.<br><br>

        2.<br>
        Eré-tí-fààrú fi wípé o vef-bid.<br>

        Amen.<br>
      `,
      fr: `
        1. Il y en a un au-dessus de tous les autres,<br>
        Oh, combien Il aime !<br>
        Son amour est au-delà de celui d’un frère,<br>
        Oh, combien Il aime !<br>
        Les amis terrestres peuvent nous laisser,<br>
        Un jour nous consoler, un autre jour nous attrister ;<br>
        Mais cet ami ne nous trompera jamais,<br>
        Oh, combien Il aime !<br><br>

        2. C’est la vie éternelle de Le connaître,<br>
        Oh, combien Il aime !<br>
        Pensez, oh, pensez, combien nous Lui devons !<br>
        Oh, combien Il aime !<br>
        Avec Son précieux sang, Il nous a rachetés,<br>
        Dans le désert, Il nous a recherchés,<br>
        Dans Son troupeau, Il nous a amenés en toute sécurité,<br>
        Oh, combien Il aime !<br><br>

        3. Nous avons trouvé un ami en Jésus,<br>
        Oh, combien Il aime !<br>
        C’est un grand plaisir pour Lui de nous bénir,<br>
        Oh, combien Il aime !<br>
        Il nous invite à demeurer près de Lui en sécurité,<br>
        Comme nos cœurs se réjouissent de L’entendre !<br>
        Pourquoi devrions-nous Le douter ou Le craindre ?<br>
        Oh, combien Il aime !<br><br>

        4. Par Son nom, nous sommes pardonnés,<br>
        Oh, combien Il aime !<br>
        Nos ennemis seront repoussés,<br>
        Oh, combien Il aime !<br>
        Il nous fournira les meilleures bénédictions,<br>
        Rien que du bien ne nous arrivera,<br>
        Il nous guidera sûrement vers la gloire,<br>
        Oh, combien Il aime !<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn speaks about the unmatched love of Jesus, highlighting His sacrifice, His eternal love, and the safety believers find in Him. It calls us to reflect on the immeasurable love of Christ for us.",
      yo: "Akọ́rin yìí sọ nípa ìfẹ́ tó lágbára jùlọ ti Jesu, ní fífi ẹ̀dá Rẹ, ìfẹ́ Rẹ́ àìmọ̀ọ́mọ̀ àti ìdánilójú ti wa nínú Rẹ́. Ó ń pe wa láti rántí ìfẹ́ tí kò sí afiwe Jesu fún wa.",
      fr: "Ce cantique parle de l'amour incomparable de Jésus, mettant en lumière Son sacrifice, Son amour éternel et la sécurité que les croyants trouvent en Lui. Il nous invite à réfléchir à l’amour immense du Christ pour nous."
    }
  },
  96: {  // Hymn 96 - There Is a Fountain Filled with Blood
    title: {
      en: "There Is a Fountain Filled with Blood",
      yo: "Eyi ni omi tí ó kun fún ẹ̀jẹ̀",
      fr: "Il y a une fontaine remplie de sang"
    },
    lyrics: {
      en: `
        1. There is a fountain filled with blood,<br>
        Drawn from Emmanuel’s veins;<br>
        And sinners plunged beneath that flood,<br>
        Loose all their guilty stains.<br><br>

        CHORUS:<br>
        He was wounded for our transgressions,<br>
        He was bruised for our iniquities;<br>
        The chastisement of our peace was upon Him,<br>
        And with His stripes we are healed;<br>
        He was wounded for our transgressions,<br>
        He was wounded for our transgressions,<br>
        And with His stripes we are healed,<br>
        With His stripes we are healed.<br><br>

        2. The dying thief rejoiced to see,<br>
        That fountain in his day,<br>
        And there may I, though vile as he,<br>
        Wash all my sins away.<br><br>

        CHORUS:<br>
        He was wounded for our transgressions,<br>
        He was bruised for our iniquities;<br>
        The chastisement of our peace was upon Him,<br>
        And with His stripes we are healed;<br>
        He was wounded for our transgressions,<br>
        He was wounded for our transgressions,<br>
        And with His stripes we are healed,<br>
        With His stripes we are healed.<br><br>

        3. Thou dying Lamb. Thy precious blood<br>
        Shall never lose its power,<br>
        Till all the ransomed Church of God,<br>
        Be saved, to sin no more.<br><br>

        CHORUS:<br>
        He was wounded for our transgressions,<br>
        He was bruised for our iniquities;<br>
        The chastisement of our peace was upon Him,<br>
        And with His stripes we are healed;<br>
        He was wounded for our transgressions,<br>
        He was wounded for our transgressions,<br>
        And with His stripes we are healed,<br>
        With His stripes we are healed.<br><br>

        4. Then in a nobler, sweeter song,<br>
        I’ll sing Thy power to save,<br>
        When this poor, lisping, stammering,<br>
        Tongue lies silent in the grave.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ẹ̀dá yìí ń fi omi tó kun fún ẹ̀jẹ̀,<br>
        Tí a fi sáyé látinú ẹ̀jẹ̀ Emmanuel;<br>
        Kí a rí àwọn ẹlẹ́ṣin t’ó wọ̀ láti fi wọn,<br>
        Kó gbogbo ẹ̀sùn wọn sílẹ̀.<br><br>

        CHORUS:<br>
        A kún fun wéwé fún ìdáhùn gbogbo,<br>
        A kún fun àfiwé ati awọn iṣègun,<br>
        Nítorí akúnya àwọn.<br><br>

      `,
      fr: `
        1. Il y a une fontaine remplie de sang,<br>
        Puisée des veines d’Emmanuel ;<br>
        Et les pécheurs plongés dans ce flot,<br>
        Perdent toutes leurs coupables souillures.<br><br>

        CHORUS:<br>
        Il a été blessé pour nos transgressions,<br>
        Il a été meurtri pour nos iniquités ;<br>
        Le châtiment de notre paix était sur Lui,<br>
        Et par Ses meurtrissures nous sommes guéris ;<br>
        Il a été blessé pour nos transgressions,<br>
        Il a été blessé pour nos transgressions,<br>
        Et par Ses meurtrissures nous sommes guéris,<br>
        Par Ses meurtrissures nous sommes guéris.<br><br>

        2. Le brigand mourant se réjouit de voir,<br>
        Cette fontaine de sang, à son époque ;<br>
        Et là, même moi, bien que vil comme lui,<br>
        Je laverai tous mes péchés.<br><br>

        CHORUS:<br>
        Il a été blessé pour nos transgressions,<br>
        Il a été meurtri pour nos iniquités ;<br>
        Le châtiment de notre paix était sur Lui,<br>
        Et par Ses meurtrissures nous sommes guéris ;<br>
        Il a été blessé pour nos transgressions,<br>
        Il a été blessé pour nos transgressions,<br>
        Et par Ses meurtrissures nous sommes guéris,<br>
        Par Ses meurtrissures nous sommes guéris.<br><br>

        3. Toi, Agneau mourant, Ton précieux sang<br>
        Ne perdra jamais sa puissance,<br>
        Jusqu’à ce que toute l’Église rachetée de Dieu,<br>
        Soit sauvée, pour ne plus pécher.<br><br>

        CHORUS:<br>
        Il a été blessé pour nos transgressions,<br>
        Il a été meurtri pour nos iniquités ;<br>
        Le châtiment de notre paix était sur Lui,<br>
        Et par Ses meurtrissures nous sommes guéris ;<br>
        Il a été blessé pour nos transgressions,<br>
        Il a été blessé pour nos transgressions,<br>
        Et par Ses meurtrissures nous sommes guéris,<br>
        Par Ses meurtrissures nous sommes guéris.<br><br>

        4. Alors, dans une chanson plus noble et plus douce,<br>
        Je chanterai Sa puissance à sauver,<br>
        Quand cette langue qui balbutie et peine,<br>
        Sera silencieuse dans la tombe.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This powerful hymn reminds us of the redemptive power of the blood of Jesus. It speaks of salvation and healing through His sacrifice on the cross, and the eternal strength of His blood.",
      yo: "Akọ́rin yìí rántí wa nípa agbára ìdàájọ́ tó wa ninu ẹ̀jẹ̀ Jesu. Ó sọ nípa ìgbàlà àti ìwòsàn tó wá láti ẹ̀sìn Rẹ̀ lórí agbelebu, àti agbára ẹ̀jẹ̀ Rẹ tó láìpin.",
      fr: "Ce cantique puissant nous rappelle le pouvoir rédempteur du sang de Jésus. Il parle du salut et de la guérison par Son sacrifice sur la croix, et de la puissance éternelle de Son sang."
    }
  },

  97: {  // Hymn 97 - There's One Above All Earthly Friends
    title: {
      en: "There's One Above All Earthly Friends",
      yo: "Ọkan Wa Lókè Gbogbo Àwọn Ọ̀rẹ́ Ayé",
      fr: "Il y en a un au-dessus de tous les amis terrestres"
    },
    lyrics: {
      en: `
        1. There’s One above all earthly friends,<br>
        Whose love all earthly love transcends;<br>
        It is my Lord and Christ divine,<br>
        My Lord, because I know He’s mine.<br><br>

        CHORUS:<br>
        I know He’s mine, this Friend so dear,<br>
        He lives with me, He’s ever near,<br>
        Ten thousand charms around Him shine,<br>
        And, best of all, I know He’s mine.<br><br>

        2. He’s mine because He died for me,<br>
        He saved my soul, He set me free;<br>
        With joy I worship at His shrine;<br>
        And cry, “Praise God, I know He’s mine”<br><br>

        CHORUS:<br>
        I know He’s mine, this Friend so dear,<br>
        He lives with me, He’s ever near,<br>
        Ten thousand charms around Him shine,<br>
        And, best of all, I know He’s mine.<br><br>

        3. He’s mine because He’s in my heart,<br>
        And never, never will we part;<br>
        Just as the branch is to the vine,<br>
        I’m joined to Christ; I know He’s mine.<br><br>

        CHORUS:<br>
        I know He’s mine, this Friend so dear,<br>
        He lives with me, He’s ever near,<br>
        Ten thousand charms around Him shine,<br>
        And, best of all, I know He’s mine.<br><br>

        4. Some day upon the streets of gold,<br>
        Mine eyes His glory shall behold,<br>
        Then while His arms around me twine,<br>
        I’ll cry for joy,”I know He’s mine.”<br><br>

        CHORUS:<br>
        I know He’s mine, this Friend so dear,<br>
        He lives with me, He’s ever near,<br>
        Ten thousand charms around Him shine,<br>
        And, best of all, I know He’s mine.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ọkan wa lókè gbogbo àwón ọ̀rẹ́ ayé,<br>
        Tí ìfẹ́ Rẹ̀ jẹ́ kí gbogbo àwón ìfẹ́ ayé tó lọ;<br>
        Ẹ̀dá Ọlọ́run àti Kristi yìí jẹ́,<br>
        Kristi, níkán kò já.<br><br>
      `,
      fr: `
        1. Il y en a un au-dessus de tous les amis terrestres,<br>
        Dont l’amour surpasse tout amour terrestre ;<br>
        C’est mon Seigneur et Christ divin,<br>
        Mon Seigneur, car je sais qu’Il est à moi.<br><br>

        CHORUS:<br>
        Je sais qu’Il est à moi, cet ami si cher,<br>
        Il vit avec moi, Il est toujours proche,<br>
        Dix mille charmes autour de Lui brillent,<br>
        Et, ce qui est encore mieux, je sais qu’Il est à moi.<br><br>

        2. Il est à moi parce qu’Il est mort pour moi,<br>
        Il a sauvé mon âme, Il m’a libéré ;<br>
        Avec joie je L’adore dans Son sanctuaire ;<br>
        Et je crie, “Loué soit Dieu, je sais qu’Il est à moi”<br><br>

        CHORUS:<br>
        Je sais qu’Il est à moi, cet ami si cher,<br>
        Il vit avec moi, Il est toujours proche,<br>
        Dix mille charmes autour de Lui brillent,<br>
        Et, ce qui est encore mieux, je sais qu’Il est à moi.<br><br>

        3. Il est à moi parce qu’Il est dans mon cœur,<br>
        Et jamais, jamais nous ne nous séparerons ;<br>
        Tout comme la branche est unie à la vigne,<br>
        Je suis uni à Christ ; je sais qu’Il est à moi.<br><br>

        CHORUS:<br>
        Je sais qu’Il est à moi, cet ami si cher,<br>
        Il vit avec moi, Il est toujours proche,<br>
        Dix mille charmes autour de Lui brillent,<br>
        Et, ce qui est encore mieux, je sais qu’Il est à moi.<br><br>

        4. Un jour, sur les rues d’or,<br>
        Mes yeux verront Sa gloire,<br>
        Puis tandis que Ses bras m’enlacent,<br>
        Je crierai de joie, “Je sais qu’Il est à moi.”<br><br>

        CHORUS:<br>
        Je sais qu’Il est à moi, cet ami si cher,<br>
        Il vit avec moi, Il est toujours proche,<br>
        Dix mille charmes autour de Lui brillent,<br>
        Et, ce qui est encore mieux, je sais qu’Il est à moi.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the deep and eternal connection with Jesus Christ. It highlights His sacrificial love and the joy and confidence we experience in knowing that He is always with us and has saved us.",
      yo: "Akọ́rin yìí ṣàfihàn ìbáṣepọ̀ pẹ̀lú Jesu Kristi. Ó fi hàn ìfẹ́ Rẹ tó fani mọ́ra àti ayọ̀ àti ìgbàgbọ́ tí a ní ní mọ̀ pé Ọlọ́run wa pẹ̀lú wa, àti pé Ó ti yọ wa kúrò nínú ẹ̀sùn.",
      fr: "Ce cantique célèbre la connexion profonde et éternelle avec Jésus-Christ. Il met en lumière Son amour sacrificiel et la joie et la confiance que nous éprouvons en sachant qu’Il est toujours avec nous et nous a sauvés."
    }
  },
  
  98: {  // Hymn 98 - Hear the Footsteps of Jesus
    title: {
      en: "Hear the Footsteps of Jesus",
      yo: "Tẹ́gbọ́n Ẹsẹ̀ Jesu",
      fr: "Entends les pas de Jésus"
    },
    lyrics: {
      en: `
        1. Hear the footsteps of Jesus, He is now passing by:<br>
        Bearing balm for the wounded, Healing all who apply;<br>
        As He spoke to the sufferer Who lay at the pool,<br>
        He is saying this moment, “Wilt thou be made whole”?<br><br>

        CHORUS:<br>
        Wilt thou be made whole?<br>
        Wilt thou be made whole?<br>
        Oh, come, weary sufferer,<br>
        Oh, come sin-sick soul!<br>
        See the life stream is flowing,<br>
        See the cleansing waves roll;<br>
        Step into the current and thou<br>
        Shalt be made whole.<br><br>

        2. ‘Tis the voice of that Saviour, Whose merciful call<br>
        Freely offers salvation to one and to all;<br>
        He is now beck’ning to Him, Each sin-stained soul,<br>
        And lovingly asking, ‘Wilt thou be made whole?’<br><br>

        CHORUS:<br>
        Wilt thou be made whole?<br>
        Wilt thou be made whole?<br>
        Oh, come, weary sufferer,<br>
        Oh, come sin-sick soul!<br>
        See the life stream is flowing,<br>
        See the cleansing waves roll;<br>
        Step into the current and thou<br>
        Shalt be made whole.<br><br>

        3. Are you halting and struggling, O’erpowered by your sin?<br>
        While the waters are troubled, Can you not enter in?<br>
        Lo, the Saviour stands waiting to strengthen your soul;<br>
        He is earnestly pleading, ‘Wilt thou be made whole?’<br><br>

        CHORUS:<br>
        Wilt thou be made whole?<br>
        Wilt thou be made whole?<br>
        Oh, come, weary sufferer,<br>
        Oh, come sin-sick soul!<br>
        See the life stream is flowing,<br>
        See the cleansing waves roll;<br>
        Step into the current and thou<br>
        Shalt be made whole.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Tẹ́gbọ́n ẹsẹ̀ Jesu, Ó ń kọjá nísinsin yìí:<br>
        Ó mu epo ìtọ́jú fún àwọn tó ní ìfarapa,<br>
        Ó ń wòkànsí àwọn tó ń bẹ̀rẹ̀ fún ìwòsàn;<br>
        Bí ó ṣe sọ fún ẹni tó ń jà rẹ, tó sì ń sọ ni púlù,<br>
        Ó ń sọ pé “Ṣé iwọ yóò wá ni ilera?”<br><br>

        CHORUS:<br>
        Ṣé iwọ yóò wá ni ilera?<br>
        Ṣé iwọ yóò wá ni ilera?<br>
        Ẹ̀ wá, ẹ̀wẹ̀ ẹlẹ́sẹ̀,<br>
        Ẹ̀ wá, ẹ̀wọ̀n ìsin.<br>
        Wo omi ìye tí ń sáré,<br>
        Wo àwọn omi ìwòsàn tí ń lọ;<br>
        Tẹ̀síwájú sinu omi yìí, ó sì ni ilera.<br><br>

        2. Èyí ni ohùn ti Olùdáàbò fún wa,<br>
        Ti a fi ìfẹ́ rẹ yí gbogbo wa,<br>
        Ó ń pe wa, kó sì sí ẹ̀sùn fún wa,<br>
        Ó nfi ìfẹ́ pé kó tẹ́lé, “Ṣé iwọ yóò wá ni ilera?”<br><br>

        CHORUS:<br>
        Ṣé iwọ yóò wá ni ilera?<br>
        Ṣé iwọ yóò wá ni ilera?<br>
        Ẹ̀ wá, ẹ̀wẹ̀ ẹlẹ́sẹ̀,<br>
        Ẹ̀ wá, ẹ̀wọ̀n ìsin.<br>
        Wo omi ìye tí ń sáré,<br>
        Wo àwọn omi ìwòsàn tí ń lọ;<br>
        Tẹ̀síwájú sinu omi yìí, ó sì ni ilera.<br><br>

        3. Ṣé ẹ̀wọ̀n ni o, Ìsin ìbànújẹ rẹ ń kọlu,<br>
        Níbi ti omi bá sùn, Ṣé ìwọ kò lè wọ?<br>
        Wo Olùdáàbò tó dúró de ọ, láti ràn ọ lọwọ;<br>
        Ó ń ròyìn pé: “Ṣé iwọ yóò wá ni ilera?”<br><br>

        CHORUS:<br>
        Ṣé iwọ yóò wá ni ilera?<br>
        Ṣé iwọ yóò wá ni ilera?<br>
        Ẹ̀ wá, ẹ̀wẹ̀ ẹlẹ́sẹ̀,<br>
        Ẹ̀ wá, ẹ̀wọ̀n ìsin.<br>
        Wo omi ìye tí ń sáré,<br>
        Wo àwọn omi ìwòsàn tí ń lọ;<br>
        Tẹ̀síwájú sinu omi yìí, ó sì ni ilera.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Entends les pas de Jésus, Il passe maintenant;<br>
        Apportant un baume pour les blessés,<br>
        Guérissant tous ceux qui viennent vers Lui;<br>
        Comme Il parla à celui qui souffrait, Celui qui gisait près de la piscine,<br>
        Il dit ce moment, “Veux-tu être guéri ?”<br><br>

        CHORUS:<br>
        Veux-tu être guéri ?<br>
        Veux-tu être guéri ?<br>
        Oh, viens, souffrant fatigué,<br>
        Oh, viens âme malade de péché !<br>
        Vois le courant de la vie qui coule,<br>
        Vois les vagues purifiantes rouler;<br>
        Entre dans le courant et tu<br>
        Seras guéri.<br><br>

        2. C’est la voix de ce Sauveur,<br>
        Dont l’appel miséricordieux<br>
        Offre librement le salut à tous ;<br>
        Il appelle maintenant chaque âme marquée par le péché,<br>
        Et Lui demandant amoureusement, “Veux-tu être guéri ?”<br><br>

        CHORUS:<br>
        Veux-tu être guéri ?<br>
        Veux-tu être guéri ?<br>
        Oh, viens, souffrant fatigué,<br>
        Oh, viens âme malade de péché !<br>
        Vois le courant de la vie qui coule,<br>
        Vois les vagues purifiantes rouler;<br>
        Entre dans le courant et tu<br>
        Seras guéri.<br><br>

        3. Es-tu en lutte et faible, oppressé par ton péché ?<br>
        Pendant que les eaux sont agitées, ne peux-tu pas entrer ?<br>
        Voici, le Sauveur attend pour fortifier ton âme ;<br>
        Il plaide sincèrement, “Veux-tu être guéri ?”<br><br>

        CHORUS:<br>
        Veux-tu être guéri ?<br>
        Veux-tu être guéri ?<br>
        Oh, viens, souffrant fatigué,<br>
        Oh, viens âme malade de péché !<br>
        Vois le courant de la vie qui coule,<br>
        Vois les vagues purifiantes rouler;<br>
        Entre dans le courant et tu<br>
        Seras guéri.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn invites all to come to Jesus for healing and restoration, reflecting His love and mercy. It emphasizes the grace and power available for those who choose to step into the healing waters of Christ’s redemptive work.",
      yo: "Akọ́rin yìí ń pe gbogbo ènìyàn láti wá sí Jesu fún ìwòsàn àti ìmúlò, ó ń ṣàfihàn ìfẹ́ àti ìbágbépọ̀ Rẹ. Ó fi hàn ìbàrànsí ati agbára tó wà fún àwọn tó yan láti wọ omi ìwòsàn iṣẹ́ ìdájọ́ Jesu.",
      fr: "Ce cantique invite tous à venir à Jésus pour la guérison et la restauration, reflétant Son amour et Sa miséricorde. Il met en évidence la grâce et le pouvoir disponibles pour ceux qui choisissent d’entrer dans les eaux purifiantes de l’œuvre rédemptrice du Christ."
    }
  },

  99: {  // Hymn 99 - What Can Wash Away My Sin
    title: {
      en: "What Can Wash Away My Sin",
      yo: "Kíni Tó Le Wẹ́ Ẹ̀sùn Mi?",
      fr: "Qu'est-ce qui peut laver mon péché"
    },
    lyrics: {
      en: `
        1. What can wash away my sin?<br>
        Nothing but the blood of Jesus,<br>
        What can make me whole again?<br>
        Nothing but the blood of Jesus.<br><br>

        CHORUS:<br>
        Oh, precious is the flow,<br>
        That makes me white as snow!<br>
        No other fount I know.<br>
        Nothing but the blood of Jesus.<br><br>

        2. For my pardon this I see:<br>
        Nothing but the blood of Jesus:<br>
        For my cleansing this my plea:<br>
        Nothing but the blood of Jesus.<br><br>

        CHORUS:<br>
        Oh, precious is the flow,<br>
        That makes me white as snow!<br>
        No other fount I know.<br>
        Nothing but the blood of Jesus.<br><br>

        3. Nothing can for sin atone,<br>
        Nothing but the blood of Jesus;<br>
        Naught of good that I have done,<br>
        Nothing but the blood of Jesus.<br><br>

        CHORUS:<br>
        Oh, precious is the flow,<br>
        That makes me white as snow!<br>
        No other fount I know.<br>
        Nothing but the blood of Jesus.<br><br>

        4. This is all my hope and peace,<br>
        Nothing but the blood of Jesus,<br>
        This is all my righteousness,<br>
        Nothing but the blood of Jesus.<br><br>

        CHORUS:<br>
        Oh, precious is the flow,<br>
        That makes me white as snow!<br>
        No other fount I know.<br>
        Nothing but the blood of Jesus.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Kíni tó le wẹ́ ẹ̀sùn mi?<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu,<br>
        Kíni tó lè mú mi dájú?<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        CHORUS:<br>
        Oh, ohun ìdílé ni ẹ̀jẹ̀,<br>
        Tó n'fi mi ṣe funfun bí egungun!<br>
        Kò sí ibèèrè mi mọ́.<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        2. Fun ìdáròyìn mi, eyi ni mo rí:<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br>
        Fun ìmúlò mi, eyi ni mo beere:<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        CHORUS:<br>
        Oh, ohun ìdílé ni ẹ̀jẹ̀,<br>
        Tó n'fi mi ṣe funfun bí egungun!<br>
        Kò sí ibèèrè mi mọ́.<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        3. Kò sí ohun tó lè ṣètò fún ẹ̀sùn,<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu;<br>
        Kò sí ohun rere tí mo ti ṣe,<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        CHORUS:<br>
        Oh, ohun ìdílé ni ẹ̀jẹ̀,<br>
        Tó n'fi mi ṣe funfun bí egungun!<br>
        Kò sí ibèèrè mi mọ́.<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        4. Eyi ni gbogbo ireti ati alafia mi,<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu,<br>
        Eyi ni gbogbo ìtọ́jú mi,<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        CHORUS:<br>
        Oh, ohun ìdílé ni ẹ̀jẹ̀,<br>
        Tó n'fi mi ṣe funfun bí egungun!<br>
        Kò sí ibèèrè mi mọ́.<br>
        Kò sí ohun tí kò jẹ́ ẹ̀jẹ̀ Jesu.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Qu'est-ce qui peut laver mon péché ?<br>
        Rien que le sang de Jésus,<br>
        Qu'est-ce qui peut me rendre pur à nouveau ?<br>
        Rien que le sang de Jésus.<br><br>

        CHORUS:<br>
        Oh, précieux est le flot,<br>
        Qui me rend blanc comme neige !<br>
        Aucune autre source je connais.<br>
        Rien que le sang de Jésus.<br><br>

        2. Pour mon pardon, voici ce que je vois :<br>
        Rien que le sang de Jésus ;<br>
        Pour ma purification, voici ma prière :<br>
        Rien que le sang de Jésus.<br><br>

        CHORUS:<br>
        Oh, précieux est le flot,<br>
        Qui me rend blanc comme neige !<br>
        Aucune autre source je connais.<br>
        Rien que le sang de Jésus.<br><br>

        3. Rien ne peut expier le péché,<br>
        Rien que le sang de Jésus ;<br>
        Rien de bien que j'ai fait,<br>
        Rien que le sang de Jésus.<br><br>

        CHORUS:<br>
        Oh, précieux est le flot,<br>
        Qui me rend blanc comme neige !<br>
        Aucune autre source je connais.<br>
        Rien que le sang de Jésus.<br><br>

        4. Voici tout mon espoir et ma paix,<br>
        Rien que le sang de Jésus,<br>
        Voici toute ma justice,<br>
        Rien que le sang de Jésus.<br><br>

        CHORUS:<br>
        Oh, précieux est le flot,<br>
        Qui me rend blanc comme neige !<br>
        Aucune autre source je connais.<br>
        Rien que le sang de Jésus.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn emphasizes the power of Jesus' blood to wash away sin, offering complete restoration and righteousness to believers. The repeated chorus reminds us of the purity and power of Jesus' sacrifice.",
      yo: "Akọ́rin yìí ṣàfihàn agbára ẹ̀jẹ̀ Jesu láti wẹ́ ẹ̀sùn, ní ìpè àti ìtọ́jú pipe fún àwọn tó bá gbagbọ́. Chorus tí a tún sọ pé kí wọ̀n rántí ìtọ́jú àti agbára ìdájọ́ iṣẹ́ ẹ̀jẹ̀ Jesu.",
      fr: "Ce cantique souligne le pouvoir du sang de Jésus pour laver le péché, offrant une restauration et une justice complètes aux croyants. Le refrain répété nous rappelle la pureté et le pouvoir du sacrifice de Jésus."
    }
  },
  100: {  // Hymn 100 - All That Drew Me I Have Left Behind
    title: {
      en: "All That Drew Me I Have Left Behind",
      yo: "Gbogbo Ohun Tó Fa Mi Ni Mo Ti Fi Sẹ́yìn",
      fr: "Tout Ce Qui M'attirait, Je L'ai Lâché"
    },
    lyrics: {
      en: `
        1. All that drew me I have left behind,<br>
        Here in Canaan better joys I find,<br>
        Peace abiding, blessings unconfined,<br>
        For I’m living in Canaan now.<br><br>

        CHORUS:<br>
        I am living in Canaan now,<br>
        Where the showers of blessing abound,<br>
        Where the riches of grace in plenty abound,<br>
        I am living in Canaan now.<br><br>

        2. Safe abiding, I will never fear,<br>
        For my Saviour ever will be near;<br>
        When I call Him He will always hear<br>
        For I’m living in Canaan now.<br><br>

        CHORUS:<br>
        I am living in Canaan now,<br>
        Where the showers of blessing abound,<br>
        Where the riches of grace in plenty abound,<br>
        I am living in Canaan now.<br><br>

        3. I am drinking from a ceaseless well,<br>
        Here in Canaan where I love to dwell,<br>
        So to others I am glad to tell,<br>
        That I’m living in Canaan now.<br><br>

        CHORUS:<br>
        I am living in Canaan now,<br>
        Where the showers of blessing abound,<br>
        Where the riches of grace in plenty abound,<br>
        I am living in Canaan now.<br><br>

        4. Praise ever I am glad to bring<br>
        Unto Jesus, my Redeemer King,<br>
        For His mercies I will shout and sing,<br>
        For I’m living in Canaan now.<br><br>

        CHORUS:<br>
        I am living in Canaan now,<br>
        Where the showers of blessing abound,<br>
        Where the riches of grace in plenty abound,<br>
        I am living in Canaan now.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Gbogbo ohun tó fa mi ni mo ti fi sẹ́yìn,<br>
        Níbè Canaan ni mo ti ń rí ayọ̀ tó dára jùlọ,<br>
        Alafia tó lágbára, àánú tí kò ní ìpín,<br>
        Nítorí mo ń gbé ni Canaan nísinsin yìí.<br><br>

        CHORUS:<br>
        Mo ń gbé ni Canaan nísinsin yìí,<br>
        Níbi tí ìkọ̀rọ̀ ayọ̀ pọ̀,<br>
        Níbi tí ìkòkò ọ̀pọ̀ ọrọ ìfẹ́ rẹ kún,<br>
        Mo ń gbé ni Canaan nísinsin yìí.<br><br>

        2. Pẹ̀lú ìtẹ̀wọ̀gbà tó dájú, mi ò ní bẹ̀rù,<br>
        Nítorí Olùdáàbò mi yóò wà nítorí,<br>
        Nígbà tí mo ba pe, ó máa gbọ́ mi ní gbogbo<br>
        Nítorí mo ń gbé ni Canaan nísinsin yìí.<br><br>

        CHORUS:<br>
        Mo ń gbé ni Canaan nísinsin yìí,<br>
        Níbi tí ìkọ̀rọ̀ ayọ̀ pọ̀,<br>
        Níbi tí ìkòkò ọ̀pọ̀ ọrọ ìfẹ́ rẹ kún,<br>
        Mo ń gbé ni Canaan nísinsin yìí.<br><br>

        3. Mo ń mu omi láti ipò ayé àìní,<br>
        Níbi Canaan nibi tí mo fẹ́ gbé,<br>
        Nítorí náà, mo fẹ́ sọ fún àwọn míì,<br>
        Pé mo ń gbé ni Canaan nísinsin yìí.<br><br>

        CHORUS:<br>
        Mo ń gbé ni Canaan nísinsin yìí,<br>
        Níbi tí ìkọ̀rọ̀ ayọ̀ pọ̀,<br>
        Níbi tí ìkòkò ọ̀pọ̀ ọrọ ìfẹ́ rẹ kún,<br>
        Mo ń gbé ni Canaan nísinsin yìí.<br><br>

        4. Ìyìn gbogbo, mo fẹ́ kí n mú,<br>
        Tó Olúwa, Ọba Olùdáàbò mi,<br>
        Nítorí àánú Rẹ, mo máa kílòó àti kó,<br>
        Nítorí mo ń gbé ni Canaan nísinsin yìí.<br><br>

        CHORUS:<br>
        Mo ń gbé ni Canaan nísinsin yìí,<br>
        Níbi tí ìkọ̀rọ̀ ayọ̀ pọ̀,<br>
        Níbi tí ìkòkò ọ̀pọ̀ ọrọ ìfẹ́ rẹ kún,<br>
        Mo ń gbé ni Canaan nísinsin yìí.<br><br>

        Amen.<br>
      `,
      fr: `
        1. Tout ce qui m'attirait, je l'ai laissé derrière moi,<br>
        Ici à Canaan, je trouve de meilleures joies,<br>
        La paix qui demeure, des bénédictions sans limites,<br>
        Car je vis à Canaan maintenant.<br><br>

        CHORUS:<br>
        Je vis à Canaan maintenant,<br>
        Là où les averses de bénédictions abondent,<br>
        Là où les richesses de la grâce abondent en abondance,<br>
        Je vis à Canaan maintenant.<br><br>

        2. En sécurité, je ne craindrai jamais,<br>
        Car mon Sauveur sera toujours près de moi;<br>
        Lorsque je L'appelle, Il m'entendra toujours<br>
        Car je vis à Canaan maintenant.<br><br>

        CHORUS:<br>
        Je vis à Canaan maintenant,<br>
        Là où les averses de bénédictions abondent,<br>
        Là où les richesses de la grâce abondent en abondance,<br>
        Je vis à Canaan maintenant.<br><br>

        3. Je bois d'un puits incessant,<br>
        Ici à Canaan, où j'aime demeurer,<br>
        Je suis heureux de dire aux autres,<br>
        Que je vis à Canaan maintenant.<br><br>

        CHORUS:<br>
        Je vis à Canaan maintenant,<br>
        Là où les averses de bénédictions abondent,<br>
        Là où les richesses de la grâce abondent en abondance,<br>
        Je vis à Canaan maintenant.<br><br>

        4. Louange pour toujours, je suis heureux de porter<br>
        À Jésus, mon Roi Rédempteur,<br>
        Pour Sa miséricorde, je crierai et chanterai,<br>
        Car je vis à Canaan maintenant.<br><br>

        CHORUS:<br>
        Je vis à Canaan maintenant,<br>
        Là où les averses de bénédictions abondent,<br>
        Là où les richesses de la grâce abondent en abondance,<br>
        Je vis à Canaan maintenant.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the joy of living in the blessings of God's promised land, symbolized as Canaan. The lyrics emphasize peace, safety, and the abundant grace found in the presence of God.",
      yo: "Akọ́rin yìí ń ṣe ayẹyẹ ayọ̀ ìgbé ayé nínú ìbùkún ilẹ̀ ìlérí Ọlọ́run, tó jẹ́ aami Canaan. Orin náà sọ ìdílé, ààbò, àti ìkúnrẹ́rẹ́ ìfẹ́ tí a rí nínú àjọṣe pẹlu Ọlọ́run.",
      fr: "Ce cantique célèbre la joie de vivre dans les bénédictions de la terre promise de Dieu, symbolisée par Canaan. Les paroles soulignent la paix, la sécurité et la grâce abondante trouvée dans la présence de Dieu."
    }
  },
  101: {  // Hymn 101 - At the Name of Jesus
    title: {
      en: "At the Name of Jesus",
      yo: "Ní Orúkọ Jesu",
      fr: "Au Nom de Jésus"
    },
    lyrics: {
      en: `
        1. At the name of Jesus<br>
        Ev'ry knee shall bow,<br>
        Ev'ry tongue confess him<br>
        King of glory now;<br>
        'Tis the Father's pleasure<br>
        We should call him Lord,<br>
        Who from the beginning<br>
        Was the mighty Word.<br><br>

        2. Humbled for a season<br>
        To receive a name<br>
        From the lips of sinners,<br>
        Amongst whom he came.<br>
        Faithfully he bore it,<br>
        Spotless to the last,<br>
        Brought it back victorious<br>
        When from death he passed.<br><br>

        3. In your hearts enthrone him!<br>
        There let him subdue<br>
        All that is not holy,<br>
        All that is not true.<br>
        Crown him as your Captain,<br>
        In temptation's hour;<br>
        Let his will enfold you<br>
        In its light and pow'r.<br><br>

        4. Kindred, this Lord Jesus<br>
        Shall return again<br>
        With his Father's glory,<br>
        With his angel train,<br>
        For all wreaths of empire<br>
        Meet upon his brow,<br>
        And our hearts confess him<br>
        King of glory now.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Ní orúkọ Jesu,<br>
        Gbogbo ẹsẹ̀ yóò tọwọ́,<br>
        Gbogbo ẹnu yóò jẹ́ kó jẹ́ Ọba ìrọ́rùn,<br>
        Ẹ̀dá Baba ni ṣe, gbogbo wa yóò pè é ni Ọba,<br>
        Tó fi bẹ̀rẹ̀ ni,<br>
        Ọ̀rọ̀ ológo.<br><br>

        2. A ní ìyẹ̀wu fún àkókò kan<br>
        Láti gba orúkọ kan,<br>
        Láti ọ̀nu àwọn oníṣòro,<br>
        Níbi tí ó wà.<br>
        Ó fi ìtẹ́lọ́run tó ga julọ<br>
        Bí kò ní àṣẹ,<br>
        Ó fi da wọn wọlé nítorí,<br>
        Tí ó bọ lára ọn.<br><br>

        3. Nínú ọkàn yín, fi Ọ́ mọ́lẹ̀!<br>
        Ìwọ kí yóò fi ọwọ́ rẹ yọ ara rẹ,<br>
        Gbogbo àwọn tí kò mọ́lẹ̀,<br>
        Tí ó ti jẹ́ àìmọ̀.<br>
        Ọ̀dà àwọn àwọn ọmọ yóò gbà.<br><br>

        4. Òhun ti fi da wọn.<br><br>

      `,
      fr: `
        1. Au nom de Jésus,<br>
        Tout genou fléchira,<br>
        Toute langue le confessera<br>
        Roi de gloire maintenant;<br>
        C'est le plaisir du Père<br>
        Que nous l'appelions Seigneur,<br>
        Lui qui, dès le commencement,<br>
        Était le Verbe puissant.<br><br>

        2. Humilié pour un temps<br>
        Afin de recevoir un nom<br>
        De la bouche des pécheurs,<br>
        Parmi ceux qu'il est venu sauver.<br>
        Fidèlement il le porta,<br>
        Pur jusqu'à la fin,<br>
        Il le ramena victorieux<br>
        Quand il sortit de la mort.<br><br>

        3. Dans vos cœurs, mettez-le sur le trône !<br>
        Là, laissez-le vaincre<br>
        Tout ce qui n'est pas saint,<br>
        Tout ce qui n'est pas vrai.<br>
        Couronnez-le comme votre Capitaine,<br>
        Dans l'heure de la tentation ;<br>
        Laissez sa volonté vous entourer<br>
        De sa lumière et de sa puissance.<br><br>

        4. Frères, ce Seigneur Jésus<br>
        Revient à nouveau<br>
        Avec la gloire de son Père,<br>
        Avec son cortège d'anges,<br>
        Car toutes les couronnes de l'empire<br>
        Seront sur son front,<br>
        Et nos cœurs le confesseront<br>
        Roi de gloire maintenant.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn praises the power of Jesus' name, His humility in coming to earth, and His eventual return as the glorious King of glory. It calls us to enthrone Him in our hearts and honor Him as the eternal Lord.",
      yo: "Akọ́rin yìí ń yìn agbára orúkọ Jesu, ìtẹ̀ríba Rẹ̀ ní bí ó ṣe dé ilẹ̀ ayé, àti ìpadà Rẹ̀ gẹ́gẹ́ bí Ọba Olúwa tó wà lórí gbogbo rẹ. Ó pe wa láti fi Ọ́ mọ́lẹ̀ nínú ọkàn wa, ká sì fi ògo Rẹ̀ hàn gẹ́gẹ́ bí Olúwa àìnípẹ̀kun.",
      fr: "Ce cantique loue la puissance du nom de Jésus, son humilité en venant sur terre, et son retour glorieux en tant que Roi de gloire. Il nous appelle à le mettre sur le trône dans nos cœurs et à l'honorer en tant que Seigneur éternel."
    }
  },
  102: {  // Hymn 102 - When We Walk with the Lord
    title: {
      en: "When We Walk with the Lord",
      yo: "Nígbà tí a bá rìn pẹ̀lú Olúwa",
      fr: "Quand Nous Marchons Avec le Seigneur"
    },
    lyrics: {
      en: `
        1. When we walk with the Lord<br>
        In the light of His word,<br>
        What a glory he sheds on our way!<br>
        While we do His good will<br>
        He abides with us still,<br>
        And with all who will trust and obey.<br><br>

        CHORUS:<br>
        Trust and obey,<br>
        For there’s no other way<br>
        To be happy in Jesus,<br>
        But to trust and obey.<br><br>

        2. Not a shadow can rise,<br>
        Not a cloud in the skies,<br>
        But His smile quickly drives it away;<br>
        Not a doubt nor a fear,<br>
        Not a sigh nor a tear,<br>
        Can abide when we trust and obey.<br><br>

        CHORUS:<br>
        Trust and obey,<br>
        For there’s no other way<br>
        To be happy in Jesus,<br>
        But to trust and obey.<br><br>

        3. Not a burden we bear,<br>
        Not a sorrow we share,<br>
        But our toil He doth richly repay;<br>
        Not a grief nor a loss,<br>
        Not a frown nor a cross;<br>
        But is blest if we trust and obey.<br><br>

        CHORUS:<br>
        Trust and obey,<br>
        For there’s no other way<br>
        To be happy in Jesus,<br>
        But to trust and obey.<br><br>

        4. But we never can prove,<br>
        The delights of His love,<br>
        Until all on the altar we lay;<br>
        For the favour He shows!<br>
        And the joy He bestows,<br>
        Are for them who will trust and obey.<br><br>

        CHORUS:<br>
        Trust and obey,<br>
        For there’s no other way<br>
        To be happy in Jesus,<br>
        But to trust and obey.<br><br>

        5. Then in fellowship sweet,<br>
        We will sit at His feet,<br>
        Or we’ll walk by His side in the way;<br>
        What He says we will do,<br>
        Where He sends we will go,<br>
        Never fear, only trust and obey.<br><br>

        Amen.<br>
      `,
      yo: `
        1. Nígbà tí a bá rìn pẹ̀lú Olúwa<br>
        Nínú ìmọ̀ ìtàn Rẹ,<br>
        Iru ìyanu tó dá lórí ìrìn wa!<br>
        Nígbà tí a bá ṣe ìfẹ́ Rẹ<br>
        Ó wà pẹ̀lú wa láéláé,<br>
        Pẹ̀lú gbogbo àwọn tí yóò gbàgbọ́ àti tẹ̀síwájú.<br><br>

        CHORUS:<br>
        Gba tẹ̀síwájú,<br>
        Nítorí kò sí ọ̀nà mìíràn<br>
        Látàrí pé a máa ní ìyàláyà ní Jesu,<br>
        Ṣugbọn lati gba tẹ̀síwájú.<br><br>

        2. Kò sí ẹ̀rù tí yóò dide,<br>
        Kò sí awọ̀ tí ò ṣòro,<br>
        Ṣugbọn ẹ́rù rẹ̀ yóò dájú<br>
        Kò sí ẹ̀rù kankan nítorí àwọn ti o ba.<br><br>

        CHORUS:<br>
        Gba gbà àti tẹ̀síwájú.<br>
      `,
      fr: `
        1. Quand nous marchons avec le Seigneur<br>
        Dans la lumière de sa parole,<br>
        Quelle gloire il répand sur notre chemin !<br>
        Tandis que nous accomplissons sa volonté,<br>
        Il demeure avec nous,<br>
        Et avec tous ceux qui lui feront confiance et obéiront.<br><br>

        CHORUS:<br>
        Faites confiance et obéissez,<br>
        Car il n'y a pas d'autre moyen<br>
        D'être heureux en Jésus,<br>
        Que de lui faire confiance et d'obéir.<br><br>

        2. Aucune ombre ne peut surgir,<br>
        Aucun nuage dans le ciel,<br>
        Mais son sourire l'éloigne rapidement;<br>
        Aucun doute ni peur,<br>
        Aucun soupir ni larme,<br>
        Ne peut demeurer quand nous lui faisons confiance et obéissons.<br><br>

        CHORUS:<br>
        Faites confiance et obéissez,<br>
        Car il n'y a pas d'autre moyen<br>
        D'être heureux en Jésus,<br>
        Que de lui faire confiance et d'obéir.<br><br>

        3. Aucune charge que nous portons,<br>
        Aucune douleur que nous partageons,<br>
        Mais notre travail sera richement payé par Lui;<br>
        Aucune tristesse ni perte,<br>
        Aucun froncement de sourcils ni croix;<br>
        Mais tout est béni si nous lui faisons confiance et obéissons.<br><br>

        CHORUS:<br>
        Faites confiance et obéissez,<br>
        Car il n'y a pas d'autre moyen<br>
        D'être heureux en Jésus,<br>
        Que de lui faire confiance et d'obéir.<br><br>

        4. Mais nous ne pourrons jamais prouver,<br>
        Les délices de son amour,<br>
        Jusqu'à ce que tout soit déposé sur l'autel;<br>
        Car la faveur qu'Il montre !<br>
        Et la joie qu'Il accorde,<br>
        Sont pour ceux qui lui font confiance et obéissent.<br><br>

        CHORUS:<br>
        Faites confiance et obéissez,<br>
        Car il n'y a pas d'autre moyen<br>
        D'être heureux en Jésus,<br>
        Que de lui faire confiance et d'obéir.<br><br>

        5. Ensuite, dans une douce communion,<br>
        Nous nous assiérons à ses pieds,<br>
        Ou nous marcherons à ses côtés dans le chemin;<br>
        Ce qu'Il dit, nous le ferons,<br>
        Où Il envoie, nous irons,<br>
        N'ayez pas peur, faites confiance et obéissez.<br><br>

        Amen.<br>
      `
    },
    writeUp: {
      en: "This hymn emphasizes the importance of trusting and obeying God’s will. It reminds us that true happiness and peace in Jesus come only through trust and obedience to His word. The hymn encourages believers to remain faithful to God’s guidance and to walk with Him daily, knowing that His favor and joy are bestowed upon those who follow Him faithfully.",
      yo: "Akọ́rin yìí ń fi hàn pé pataki ni fífẹ́ àti tẹ̀síwájú sí ìfẹ́ Ọlọ́run. Ó rántí wa pé ayọ̀ tó pé àti ìkànsí nínú Jesu wá láti inú ìgbàgbọ́ àti ìgbàgbọ́ sí Ọ̀rọ̀ Rẹ. Akọ́rin náà ń kílọ̀ wa pé ká ṣàdúrà láti ní ìmọ̀lára tó dájú pé a ní yíyànjú Ẹni tó fẹ́ kí a fi ọkàn wa sílẹ̀, ká sì rìn pẹ̀lú Rẹ̀ láti ọwọ́ ààyè.",
      fr: "Ce cantique met en évidence l'importance de faire confiance et d'obéir à la volonté de Dieu. Il nous rappelle que le vrai bonheur et la paix en Jésus viennent uniquement par la confiance et l'obéissance à sa parole. Le cantique encourage les croyants à rester fidèles à la direction de Dieu et à marcher avec Lui chaque jour, sachant que sa faveur et sa joie sont accordées à ceux qui Le suivent fidèlement."
    }
  },
  103: {  // Hymn 103 entry
    title: {
      en: "When you start for the land of heavenly rest", 
      yo: "Nigbati o ba bẹrẹ irin-ajo si ilẹ̀ ìsinmi ọ̀run", 
      fr: "Quand vous partez pour la terre du repos céleste"
    },
    lyrics: {
      en: `
        1. When you start for the land of heavenly rest,<br>
        Keep close to Jesus all the way;<br>
        For He is the guide, and He knows the way best,<br>
        Keep close to Jesus all the way.<br><br>

        CHORUS:<br>
        Keep close to Jesus, keep close to Jesus,<br>
        Keep close to Jesus all the way;<br>
        By day or night, never turn from the right,<br>
        Keep close to Jesus all the way.<br><br>

        2. Never mind the storm or trials as you go,<br>
        Keep close to Jesus all the way;<br>
        ‘Tis a comfort and joy His favour to know,<br>
        Keep close to Jesus all the way.<br><br>

        CHORUS:<br>
        Keep close to Jesus, keep close to Jesus,<br>
        Keep close to Jesus all the way;<br>
        By day or night, never turn from the right,<br>
        Keep close to Jesus all the way.<br><br>

        3. To be safe from the darts of the evil one,<br>
        Keep close to Jesus all the way;<br>
        Take the shield of faith till the victory is won,<br>
        Keep close to Jesus all the way.<br><br>

        CHORUS:<br>
        Keep close to Jesus, keep close to Jesus,<br>
        Keep close to Jesus all the way;<br>
        By day or night, never turn from the right,<br>
        Keep close to Jesus all the way.<br><br>

        4. We shall reach our home in heaven by and by,<br>
        Keep close to Jesus all the way;<br>
        Where to those we love we’ll never say goodbye,<br>
        Keep close to Jesus all the way.<br>
      `,
      yo: `
        1. Nigbati o ba bẹrẹ irin-ajo si ilẹ̀ ìsinmi ọ̀run,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Nítorí pé Ó ni olùkọ́, Ó sì mọ ọ̀nà tó dára jùlọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        CHORUS:<br>
        Maṣe fi Jesu silẹ, maṣe fi Jesu silẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ní ọjọ́ tàbí alẹ́, má ṣe yípadà láti ọ̀nà tó tọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        2. Má ṣe aniyan nípa iji tàbí ìdènà tó bá ṣẹlẹ̀,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ó jẹ ìtùnú àti ayọ̀ mọ ìfẹ́ Rẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        CHORUS:<br>
        Maṣe fi Jesu silẹ, maṣe fi Jesu silẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ní ọjọ́ tàbí alẹ́, má ṣe yípadà láti ọ̀nà tó tọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        3. Lati wa ààbò kuro nínú ìfarapa ẹ̀sìn ọ̀tá,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Gba ìjòkòó igbagbọ́ titi di ìjẹ́rẹ́ àṣeyọrí,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        CHORUS:<br>
        Maṣe fi Jesu silẹ, maṣe fi Jesu silẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ní ọjọ́ tàbí alẹ́, má ṣe yípadà láti ọ̀nà tó tọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        4. A ó dé ìlú wa ní ọ̀run lọ́jọ́ kan,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Níbi tí a ò ni sọ fún awọn tó wa nìkan, “Kàárọ̀,”<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br>
      `,
      fr: `
        1. Quand vous partez pour la terre du repos céleste,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        Car Il est le guide, et Il connaît le meilleur chemin,<br>
        Restez proche de Jésus tout le long du chemin.<br><br>

        CHORUS:<br>
        Restez proche de Jésus, restez proche de Jésus,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        De jour comme de nuit, ne vous écartez jamais de la droite,<br>
        Restez proche de Jésus tout le long du chemin.<br><br>

        2. Ne vous souciez pas de la tempête ou des épreuves pendant votre voyage,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        C'est un réconfort et une joie de connaître Sa faveur,<br>
        Restez proche de Jésus tout le long du chemin.<br><br>

        CHORUS:<br>
        Restez proche de Jésus, restez proche de Jésus,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        De jour comme de nuit, ne vous écartez jamais de la droite,<br>
        Restez proche de Jésus tout le long du chemin.<br><br>

        3. Pour être à l'abri des flèches du mauvais,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        Prenez le bouclier de la foi jusqu'à la victoire,<br>
        Restez proche de Jésus tout le long du chemin.<br><br>

        CHORUS:<br>
        Restez proche de Jésus, restez proche de Jésus,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        De jour comme de nuit, ne vous écartez jamais de la droite,<br>
        Restez proche de Jésus tout le long du chemin.<br><br>

        4. Nous atteindrons notre maison au ciel un jour,<br>
        Restez proche de Jésus tout le long du chemin;<br>
        Là où, à ceux que nous aimons, nous ne dirons jamais adieu,<br>
        Restez proche de Jésus tout le long du chemin.<br>
      `,
      eg: `
        1. Nigbati o ba bẹrẹ irin-ajo si ilẹ̀ ìsinmi ọ̀run,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Nítorí pé Ó ni olùkọ́, Ó sì mọ ọ̀nà tó dára jùlọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        CHORUS:<br>
        Maṣe fi Jesu silẹ, maṣe fi Jesu silẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ní ọjọ́ tàbí alẹ́, má ṣe yípadà láti ọ̀nà tó tọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        2. Má ṣe aniyan nípa iji tàbí ìdènà tó bá ṣẹlẹ̀,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ó jẹ ìtùnú àti ayọ̀ mọ ìfẹ́ Rẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        CHORUS:<br>
        Maṣe fi Jesu silẹ, maṣe fi Jesu silẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ní ọjọ́ tàbí alẹ́, má ṣe yípadà láti ọ̀nà tó tọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        3. Lati wa ààbò kuro nínú ìfarapa ẹ̀sìn ọ̀tá,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Gba ìjòkòó igbagbọ́ titi di ìjẹ́rẹ́ àṣeyọrí,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        CHORUS:<br>
        Maṣe fi Jesu silẹ, maṣe fi Jesu silẹ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Ní ọjọ́ tàbí alẹ́, má ṣe yípadà láti ọ̀nà tó tọ,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br><br>

        4. A ó dé ìlú wa ní ọ̀run lọ́jọ́ kan,<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna;<br>
        Níbi tí a ò ni sọ fún awọn tó wa nìkan, “Kàárọ̀,”<br>
        Maṣe fi Jesu silẹ ni gbogbo ọna.<br>
      `
    },
    writeUp: {
      en: "This hymn encourages believers to stay close to Jesus, regardless of trials, storms, or challenges, as they journey towards the heavenly rest.",
      yo: "Hymn yi n gba awọn onigbagbọ lati wa pẹ̀lú Jesu, laibikita awọn ìdènà, iji, tàbí awọn iṣoro, gẹgẹ bi wọn ṣe n lọ si ilẹ̀ ìsinmi ọ̀run.",
      fr: "Ce cantique encourage les croyants à rester proches de Jésus, quelles que soient les épreuves, les tempêtes ou les défis, lors de leur voyage vers le repos céleste.",
      eg: "Afaŋka yi n gba awọn onigbagbọ lati wa pẹ̀lú Jesu, laibikita awọn ìdènà, iji, tàbí awọn iṣoro, gẹgẹ bi wọn ṣe n lọ si ilẹ̀ ìsinmi ọ̀run."
    }
  },
  104: {  // Hymn 104 entry
    title: {
      en: "Rise, ye children of salvation",
      yo: "Dide, ẹyin ọmọ ti ìsalẹ",
      fr: "Levez-vous, enfants du salut"
    },
    lyrics: {
      en: `
        1. Rise, ye children of salvation,<br>
        All who cleave to Christ the head;<br>
        Wake, arise, O mighty nation,<br>
        Ere the foe on Zion tread.<br><br>

        CHORUS:<br>
        Pour it forth a mighty anthem,<br>
        Pour it forth a mighty anthem,<br>
        Like the thunders of the sea;<br>
        Through the blood of Christ our ransom,<br>
        More than conquerors are we,<br>
        More than conquerors are we,<br>
        More than conquerors are we,<br>
        Through the blood of Christ our ransom;<br>
        More than conquerors are we.<br><br>

        2. Saint and heroes long before us<br>
        Firmly on this ground have stood;<br>
        See their banners waving o’er us,<br>
        Conquerors through Jesus’ blood.<br><br>

        CHORUS:<br>
        Pour it forth a mighty anthem,<br>
        Pour it forth a mighty anthem,<br>
        Like the thunders of the sea;<br>
        Through the blood of Christ our ransom,<br>
        More than conquerors are we,<br>
        More than conquerors are we,<br>
        More than conquerors are we,<br>
        Through the blood of Christ our ransom;<br>
        More than conquerors are we.<br><br>

        3. Deathless are we, all unfearing,<br>
        Life laid up with Christ in God;<br>
        In the morn of His appearing,<br>
        Floweth forth a glory flood.<br><br>

        CHORUS:<br>
        Pour it forth a mighty anthem,<br>
        Pour it forth a mighty anthem,<br>
        Like the thunders of the sea;<br>
        Through the blood of Christ our ransom,<br>
        More than conquerors are we,<br>
        More than conquerors are we,<br>
        More than conquerors are we,<br>
        Through the blood of Christ our ransom;<br>
        More than conquerors are we.<br><br>

        4. Soon we all shall stand before Him,<br>
        See and know our glorious Lord,<br>
        Soon in joy and light adore Him,<br>
        Each receiving His reward.<br>
      `,
      yo: `
        1. Dide, ẹyin ọmọ ti ìsalẹ,<br>
        Gbogbo ẹniti o so mọ́ Kristi Olori;<br>
        Wákè, dide, O orilẹ-ede agbára,<br>
        Ṣaaju ki ọta to tẹ́rọ ni Zion.<br><br>

        CHORUS:<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Gẹ́gẹ́ bí ìfọnọ́sìn omi òkun;<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa;<br>
        Ju alágbára lọ ni wa.<br><br>

        2. Àwọn mimọ́ àti akọni tẹlẹ wa,<br>
        Ti o ṣeto lori ilẹ yìí;<br>
        Wò ó, awọn ibọn wọn n fo lórí wa,<br>
        Alágbára nipasẹ ẹ̀jẹ̀ Jesu.<br><br>

        CHORUS:<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Gẹ́gẹ́ bí ìfọnọ́sìn omi òkun;<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa;<br>
        Ju alágbára lọ ni wa.<br><br>

        3. A kò ní kú, gbogbo wa kò ní bẹru,<br>
        Ìyè wa ti wa ní ọwọ́ Kristi ní Ọlọrun;<br>
        Ní owurọ́ ìfarahan Rẹ,<br>
        Irin-ajo ọlá yo.<br><br>

        CHORUS:<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Gẹ́gẹ́ bí ìfọnọ́sìn omi òkun;<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa;<br>
        Ju alágbára lọ ni wa.<br><br>

        4. Lẹhinna, gbogbo wa yoo dide niwaju Rẹ,<br>
        Wò ó àti mọ̀ Olúwa wa aláyọ̀,<br>
        Ní inú ayọ̀, a ó bọwọ́ fun un,<br>
        Kọọkan yoo gba ẹ̀bun Rẹ.<br>
      `,
      fr: `
        1. Levez-vous, enfants du salut,<br>
        Vous qui vous attachez à Christ, le chef;<br>
        Réveillez-vous, levez-vous, ô nation puissante,<br>
        Avant que l'ennemi ne foule le sol de Sion.<br><br>

        CHORUS:<br>
        Exaltez-le dans un hymne puissant,<br>
        Exaltez-le dans un hymne puissant,<br>
        Comme les tonnerres de la mer;<br>
        Par le sang du Christ notre rançon,<br>
        Plus que vainqueurs nous sommes,<br>
        Plus que vainqueurs nous sommes,<br>
        Plus que vainqueurs nous sommes,<br>
        Par le sang du Christ notre rançon;<br>
        Plus que vainqueurs nous sommes.<br><br>

        2. Les saints et les héros qui nous ont précédés<br>
        Se sont fermement tenus sur cette terre;<br>
        Voyez leurs bannières flotter au-dessus de nous,<br>
        Vainqueurs par le sang de Jésus.<br><br>

        CHORUS:<br>
        Exaltez-le dans un hymne puissant,<br>
        Exaltez-le dans un hymne puissant,<br>
        Comme les tonnerres de la mer;<br>
        Par le sang du Christ notre rançon,<br>
        Plus que vainqueurs nous sommes,<br>
        Plus que vainqueurs nous sommes,<br>
        Plus que vainqueurs nous sommes,<br>
        Par le sang du Christ notre rançon;<br>
        Plus que vainqueurs nous sommes.<br><br>

        3. Nous sommes immortels, sans crainte,<br>
        La vie est cachée avec Christ en Dieu;<br>
        Au matin de Sa venue,<br>
        Un flot de gloire jaillira.<br><br>

        CHORUS:<br>
        Exaltez-le dans un hymne puissant,<br>
        Exaltez-le dans un hymne puissant,<br>
        Comme les tonnerres de la mer;<br>
        Par le sang du Christ notre rançon,<br>
        Plus que vainqueurs nous sommes,<br>
        Plus que vainqueurs nous sommes,<br>
        Plus que vainqueurs nous sommes,<br>
        Par le sang du Christ notre rançon;<br>
        Plus que vainqueurs nous sommes.<br><br>

        4. Bientôt nous serons tous devant Lui,<br>
        Voyant et connaissant notre Seigneur glorieux,<br>
        Bientôt dans la joie et la lumière, nous L'adorerons,<br>
        Chacun recevant sa récompense.<br>
      `,
      eg: `
        1. Dide, ẹyin ọmọ ti ìsalẹ,<br>
        Gbogbo ẹniti o so mọ́ Kristi Olori;<br>
        Wákè, dide, O orilẹ-ede agbára,<br>
        Ṣaaju ki ọta to tẹ́rọ ni Zion.<br><br>

        CHORUS:<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Gẹ́gẹ́ bí ìfọnọ́sìn omi òkun;<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa;<br>
        Ju alágbára lọ ni wa.<br><br>

        2. Àwọn mimọ́ àti akọni tẹlẹ wa,<br>
        Ti o ṣeto lori ilẹ yìí;<br>
        Wò ó, awọn ibọn wọn n fo lórí wa,<br>
        Alágbára nipasẹ ẹ̀jẹ̀ Jesu.<br><br>

        CHORUS:<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Gẹ́gẹ́ bí ìfọnọ́sìn omi òkun;<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa;<br>
        Ju alágbára lọ ni wa.<br><br>

        3. A kò ní kú, gbogbo wa kò ní bẹru,<br>
        Ìyè wa ti wa ní ọwọ́ Kristi ní Ọlọrun;<br>
        Ní owurọ́ ìfarahan Rẹ,<br>
        Irin-ajo ọlá yo.<br><br>

        CHORUS:<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Tàn an jade gẹgẹ bi ọkàn ikọlu,<br>
        Gẹ́gẹ́ bí ìfọnọ́sìn omi òkun;<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Ju alágbára lọ ni wa,<br>
        Nípa ẹ̀jẹ̀ Kristi, ìdàgbàsókè wa;<br>
        Ju alágbára lọ ni wa.<br><br>

        4. Lẹhinna, gbogbo wa yoo dide niwaju Rẹ,<br>
        Wò ó àti mọ̀ Olúwa wa aláyọ̀,<br>
        Ní inú ayọ̀, a ó bọwọ́ fun un,<br>
        Kọọkan yoo gba ẹ̀bun Rẹ.<br>
      `
    },
    writeUp: {
      en: "A hymn celebrating the victory and salvation through Christ, encouraging believers to stand strong as conquerors.",
      yo: "Hymn yi n ṣe ayẹyẹ ìṣẹ́gun àti ìsalẹ nípa Kristi, n kọ gbogbo olùgbọ́láà to duro gẹgẹbi awọn alágbára.",
      fr: "Un cantique célébrant la victoire et le salut par Christ, encourageant les croyants à rester forts en tant que vainqueurs.",
      eg: "Afaŋka Ọlọrun n ṣe ayẹyẹ ìṣẹ́gun àti ìsalẹ nípa Kristi, n kọ gbogbo olùgbọ́láà to duro gẹgẹbi awọn alágbára."
    }
  },
  105: {  // Hymn 105 entry
    title: {
      en: "There is sunshine in the valley",
      yo: "Sunshine wà nínú àfonífojì",
      fr: "Il y a du soleil dans la vallée"
    },
    lyrics: {
      en: `
        1. There is sunshine in the valley,<br>
        There is sunshine on the hill;<br>
        Jesus brought it to this darkened world below,<br>
        There is sunshine in the flowers,<br>
        Blooming by the rippling rill,<br>
        There is blessed sunshine everywhere I go.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, of His Love divine,<br>
        Sunshine, sunshine, beams so brightly shine,<br>
        Sunshine, sunshine, in the world below,<br>
        Sunshine, sunshine, everywhere I go.<br><br>

        2. There is Sunshine on the meadow,<br>
        And upon the mossy lane,<br>
        Where the birds are warbling notes of joy and praise;<br>
        There is sunshine on the mountain,<br>
        There is sunshine on the plain,<br>
        Let all nature now the happy chorus praise.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, of His Love divine,<br>
        Sunshine, sunshine, beams so brightly shine,<br>
        Sunshine, sunshine, in the world below,<br>
        Sunshine, sunshine, everywhere I go.<br><br>

        3. Though the world is full of Sunshine,<br>
        Brightly beaming every day,<br>
        There are souls who live in darkness all the while,<br>
        They have never heard of Jesus,<br>
        Nor His tender loving care;<br>
        Let us help and share them with a sunny smile.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, of His Love divine,<br>
        Sunshine, sunshine, beams so brightly shine,<br>
        Sunshine, sunshine, in the world below,<br>
        Sunshine, sunshine, everywhere I go.<br><br>
        Amen.
      `,
      yo: `
        1. Sunshine wà nínú àfonífojì,<br>
        Sunshine wà ní òkè;<br>
        Jesu mu u wá si ayé ọ̀run yii,<br>
        Sunshine wà nínú awọn ododo,<br>
        Tí ń bímọ lẹ́gbẹ́ àwọn orisun omi,<br>
        Sunshine yíó lo gbogbo ibi tí mo bá lọ.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, ti ìfẹ́ Rẹ́ divine,<br>
        Sunshine, sunshine, ń tan irawọ̀ fẹlẹ́fẹlẹ́,<br>
        Sunshine, sunshine, nínú ayé tó wa nísalẹ,<br>
        Sunshine, sunshine, ní gbogbo ibi tí mo bá lọ.<br><br>

        2. Sunshine wà lórí ọgba,<br>
        Ati lórí ilẹ̀ ẹsẹ̀,<br>
        Níbi tí àwọn ẹyẹ ṣe ń ṣa ọmọ ní ayọ̀ àti ìyìn;<br>
        Sunshine wà lórí òkè,<br>
        Sunshine wà ní gbogbo ilẹ̀,<br>
        Jẹ́ ká jẹ́ ká fi gbogbo isẹ̀ ọ̀run náà yìn.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, ti ìfẹ́ Rẹ́ divine,<br>
        Sunshine, sunshine, ń tan irawọ̀ fẹlẹ́fẹ́.<br>
        Sunshine, sunshine, nínú ayé tó wa nísalẹ,<br>
        Sunshine, sunshine, ní gbogbo ibi tí mo bá lọ.<br><br>

        3. Bó tilẹ̀ jẹ́ pé ayé kún fún Sunshine,<br>
        Tó ń tàn lojo gbogbo ọjọ́,<br>
        Àwọn ọkàn kan wà tí ń gbe nínú òkùnkùn títí,<br>
        Wọn kò tíì gbọ́ nípa Jesu,<br>
        Tí kò sì mọ ìfẹ́ Rẹ́ títóbi;<br>
        Ẹ jọ̀ọ́, jẹ́ ká ṣe iranlọwọ wọn pẹ̀lú ẹ̀rù Sunshine kan.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, ti ìfẹ́ Rẹ́ divine,<br>
        Sunshine, sunshine, ń tan irawọ̀ fẹlẹ́fẹ́,<br>
        Sunshine, sunshine, nínú ayé tó wa nísalẹ,<br>
        Sunshine, sunshine, ní gbogbo ibi tí mo bá lọ.<br><br>
        Amin.
      `,
      fr: `
        1. Il y a du soleil dans la vallée,<br>
        Il y a du soleil sur la colline;<br>
        Jésus l'a apporté dans ce monde assombri,<br>
        Il y a du soleil dans les fleurs,<br>
        Fleurissant près du ruisseau,<br>
        Il y a du soleil béni partout où je vais.<br><br>

        CHORUS:<br>
        Soleil, soleil, de Son amour divin,<br>
        Soleil, soleil, les rayons brillent vivement,<br>
        Soleil, soleil, dans le monde ci-dessous,<br>
        Soleil, soleil, partout où je vais.<br><br>

        2. Il y a du soleil sur la prairie,<br>
        Et sur le sentier moussu,<br>
        Où les oiseaux chantent des notes de joie et de louange;<br>
        Il y a du soleil sur la montagne,<br>
        Il y a du soleil sur la plaine,<br>
        Que toute la nature maintenant loue ce chœur joyeux.<br><br>

        CHORUS:<br>
        Soleil, soleil, de Son amour divin,<br>
        Soleil, soleil, les rayons brillent vivement,<br>
        Soleil, soleil, dans le monde ci-dessous,<br>
        Soleil, soleil, partout où je vais.<br><br>

        3. Bien que le monde soit plein de soleil,<br>
        Brillant tous les jours,<br>
        Il y a des âmes qui vivent dans les ténèbres tout le temps,<br>
        Elles n'ont jamais entendu parler de Jésus,<br>
        Ni de Son tendre soin d'amour;<br>
        Aidons-les et partageons-leur un sourire radieux.<br><br>

        CHORUS:<br>
        Soleil, soleil, de Son amour divin,<br>
        Soleil, soleil, les rayons brillent vivement,<br>
        Soleil, soleil, dans le monde ci-dessous,<br>
        Soleil, soleil, partout où je vais.<br><br>
        Amen.
      `,
      eg: `
        1. Sunshine wà nínú àfonífojì,<br>
        Sunshine wà ní òkè;<br>
        Jesu mu u wá si ayé ọ̀run yii,<br>
        Sunshine wà nínú awọn ododo,<br>
        Tí ń bímọ lẹ́gbẹ́ àwọn orisun omi,<br>
        Sunshine yíó lo gbogbo ibi tí mo bá lọ.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, ti ìfẹ́ Rẹ́ divine,<br>
        Sunshine, sunshine, ń tan irawọ̀ fẹlẹ́fẹ́,<br>
        Sunshine, sunshine, nínú ayé tó wa nísalẹ,<br>
        Sunshine, sunshine, ní gbogbo ibi tí mo bá lọ.<br><br>

        2. Sunshine wà lórí ọgba,<br>
        Ati lórí ilẹ̀ ẹsẹ̀,<br>
        Níbi tí àwọn ẹyẹ ṣe ń ṣa ọmọ ní ayọ̀ àti ìyìn;<br>
        Sunshine wà lórí òkè,<br>
        Sunshine wà ní gbogbo ilẹ̀,<br>
        Jẹ́ ká jẹ́ ká fi gbogbo isẹ̀ ọ̀run náà yìn.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, ti ìfẹ́ Rẹ́ divine,<br>
        Sunshine, sunshine, ń tan irawọ̀ fẹlẹ́fẹ́.<br>
        Sunshine, sunshine, nínú ayé tó wa nísalẹ,<br>
        Sunshine, sunshine, ní gbogbo ibi tí mo bá lọ.<br><br>

        3. Bó tilẹ̀ jẹ́ pé ayé kún fún Sunshine,<br>
        Tó ń tàn lojo gbogbo ọjọ́,<br>
        Àwọn ọkàn kan wà tí ń gbe nínú òkùnkùn títí,<br>
        Wọn kò tíì gbọ́ nípa Jesu,<br>
        Tí kò sì mọ ìfẹ́ Rẹ́ títóbi;<br>
        Ẹ jọ̀ọ́, jẹ́ ká ṣe iranlọwọ wọn pẹ̀lú ẹ̀rù Sunshine kan.<br><br>

        CHORUS:<br>
        Sunshine, sunshine, ti ìfẹ́ Rẹ́ divine,<br>
        Sunshine, sunshine, ń tan irawọ̀ fẹlẹ́fẹ́,<br>
        Sunshine, sunshine, nínú ayé tó wa nísalẹ,<br>
        Sunshine, sunshine, ní gbogbo ibi tí mo bá lọ.<br><br>
        Amin.
      `
    },
    writeUp: {
      en: "A joyful hymn celebrating the presence of divine sunshine, representing God's love and light in our lives.",
      yo: "Hymn yi n ṣe ayẹyẹ ìgbẹ́kẹ̀lé ìmọ̀lára Sunshine, tí ń ṣe aṣoju ìfẹ́ Ọlọ́run àti imọ́lẹ̀ nínú ìye wa.",
      fr: "Un cantique joyeux célébrant la présence du soleil divin, représentant l'amour et la lumière de Dieu dans nos vies.",
      eg: "Afaŋka Ọlọrun yi n ṣe ayẹyẹ ìgbẹ́kẹ̀lé ìmọ̀lára Sunshine, tí ń ṣe aṣoju ìfẹ́ Ọlọ́run àti imọ́lẹ̀ nínú ìye wa."
    }
  },
  106: {
    title: {
      en: "I Know There is Power in Jesus' Blood",
      yo: "Mo mọ pe Agbara wa ninu Ẹjẹ Jesu",
      fr: "Je sais qu'il y a de la puissance dans le sang de Jésus",
      eg: "Mo mọ pe agbara wa ninu ẹjẹ Jesu"
    },
    lyrics: {
      en: `
1. I know there’s power in Jesus’ blood,<br>
For He washed my sins away;<br>
And I know there is joy in serving Him,<br>
For He turned my night to day.<br><br>

CHORUS:<br>
There is power, power, wonder-working power<br>
There is power, power, purifying power,<br>
There is power in Jesus’ blood.<br><br>

2. I know there is power in Jesus’ blood<br>
From my guilt He set me free,<br>
When I came unto Him with all my sins,<br>
And His blood availed for me.<br><br>

CHORUS:<br>
There is power, power, wonder-working power<br>
There is power, power, purifying power,<br>
There is power in Jesus’ blood.<br><br>

3. I know there is power in Jesus’ blood,<br>
For all things have been made new,<br>
Since His own precious blood had been applied,<br>
And has cleansed me through and through.<br><br>

CHORUS:<br>
There is power, power, wonder-working power<br>
There is power, power, purifying power,<br>
There is power in Jesus’ blood.<br><br>

Amen.<br>
      `,
      yo: `
1. Mo mọ pe agbara wa ninu ẹjẹ Jesu,
Nítorí o wẹ ẹ̀ṣẹ̀ mi kuro;
Ati mo mọ pe ayọ wa ninu iṣẹ́ Rẹ,
Nítorí o yipada òru mi sí ọjọ́.<br><br>

CHORUS:<br>
Agbara wa, agbara, agbara ti n ṣiṣẹ́ iyalẹnu<br>
Agbara wa, agbara, agbara ti n sọ di mimọ,<br>
Agbara wa ninu ẹjẹ Jesu.<br><br>

2. Mo mọ pe agbara wa ninu ẹjẹ Jesu,
Lati ẹ̀ṣẹ̀ mi, o yọ mi lọ́ọ́rẹ́,
Nígbà tí mo de ọdọ Rẹ pẹlu gbogbo ẹ̀ṣẹ̀ mi,
Ati ẹjẹ Rẹ kọja fún mi.<br><br>

CHORUS:<br>
Agbara wa, agbara, agbara ti n ṣiṣẹ́ iyalẹnu<br>
Agbara wa, agbara, agbara ti n sọ di mimọ,<br>
Agbara wa ninu ẹjẹ Jesu.<br><br>

3. Mo mọ pe agbara wa ninu ẹjẹ Jesu,
Nítorí gbogbo nkan ti ṣẹda tuntun,
Látàrí ẹjẹ Rẹ tó ṣe pataki ti a lo,
Ati ti o nu mi lapapọ.<br><br>

CHORUS:<br>
Agbara wa, agbara, agbara ti n ṣiṣẹ́ iyalẹnu<br>
Agbara wa, agbara, agbara ti n sọ di mimọ,<br>
Agbara wa ninu ẹjẹ Jesu.<br><br>

Amin.<br>
      `,
      fr: `
1. Je sais qu'il y a de la puissance dans le sang de Jésus,
Car il a lavé mes péchés;
Et je sais qu'il y a de la joie à le servir,
Car il a transformé ma nuit en jour.<br><br>

CHORUS:<br>
Il y a de la puissance, de la puissance, de la puissance qui fait des merveilles<br>
Il y a de la puissance, de la puissance, de la puissance purificatrice,<br>
Il y a de la puissance dans le sang de Jésus.<br><br>

2. Je sais qu'il y a de la puissance dans le sang de Jésus,
De ma culpabilité, il m'a libéré,
Quand je suis venu à lui avec tous mes péchés,
Et son sang a suffi pour moi.<br><br>

CHORUS:<br>
Il y a de la puissance, de la puissance, de la puissance qui fait des merveilles<br>
Il y a de la puissance, de la puissance, de la puissance purificatrice,<br>
Il y a de la puissance dans le sang de Jésus.<br><br>

3. Je sais qu'il y a de la puissance dans le sang de Jésus,
Car toutes choses ont été rendues nouvelles,
Depuis que son précieux sang a été appliqué,
Et m'a purifié entièrement.<br><br>

CHORUS:<br>
Il y a de la puissance, de la puissance, de la puissance qui fait des merveilles<br>
Il y a de la puissance, de la puissance, de la puissance purificatrice,<br>
Il y a de la puissance dans le sang de Jésus.<br><br>

Amen.<br>
      `,
      eg: `
1. Mo mọ pe agbara wa ninu ẹjẹ Jesu,
Nítorí o wẹ ẹ̀ṣẹ̀ mi kuro;
Ati mo mọ pe ayọ wa ninu iṣẹ́ Rẹ,
Nítorí o yipada òru mi sí ọjọ́.<br><br>

CHORUS:<br>
Agbara wa, agbara, agbara ti n ṣiṣẹ́ iyalẹnu<br>
Agbara wa, agbara, agbara ti n sọ di mimọ,<br>
Agbara wa ninu ẹjẹ Jesu.<br><br>

2. Mo mọ pe agbara wa ninu ẹjẹ Jesu,
Lati ẹ̀ṣẹ̀ mi, o yọ mi lọ́ọ́rẹ́,
Nígbà tí mo de ọdọ Rẹ pẹlu gbogbo ẹ̀ṣẹ̀ mi,
Ati ẹjẹ Rẹ kọja fún mi.<br><br>

CHORUS:<br>
Agbara wa, agbara, agbara ti n ṣiṣẹ́ iyalẹnu<br>
Agbara wa, agbara, agbara ti n sọ di mimọ,<br>
Agbara wa ninu ẹjẹ Jesu.<br><br>

3. Mo mọ pe agbara wa ninu ẹjẹ Jesu,
Nítorí gbogbo nkan ti ṣẹda tuntun,
Látàrí ẹjẹ Rẹ tó ṣe pataki ti a lo,
Ati ti o nu mi lapapọ.<br><br>

CHORUS:<br>
Agbara wa, agbara, agbara ti n ṣiṣẹ́ iyalẹnu<br>
Agbara wa, agbara, agbara ti n sọ di mimọ,<br>
Agbara wa ninu ẹjẹ Jesu.<br><br>

Amin.<br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the powerful and purifying nature of the blood of Jesus, which brings redemption, healing, and freedom.",
      yo: "Hymn yi n ṣe ayẹyẹ agbara ati mimọ ti ẹjẹ Jesu, eyi ti o mu itusilẹ, iwosan, ati ominira wa.",
      fr: "Ce cantique célèbre la puissance purificatrice du sang de Jésus, qui apporte la rédemption, la guérison et la liberté.",
      eg: "Hymn yi n ṣe ayẹyẹ agbara ati mimọ ti ẹjẹ Jesu, eyi ti o mu itusilẹ, iwosan, ati ominira wa."
    }
  },
  107: {
    title: {
      en: "Oh, the Best Friend to Have is Jesus",
      yo: "O, ọrẹ ti o dara ju lati ni ni Jesu",
      fr: "Oh, le meilleur ami à avoir est Jésus",
      eg: "O, ọrẹ ti o dara ju lati ni ni Jesu"
    },
    lyrics: {
      en: `
1. Oh, the best friend to have is Jesus!<br>
When the cares of life upon you roll,<br>
He will heal the wounded heart,<br>
He will strength and grace impart;<br>
Oh, the best friend to have is Jesus!<br><br>

CHORUS:<br>
The best friend to have is Jesus,<br>
The best friend to have is Jesus;<br>
He will help you when you fall;<br>
He will hear you when you call;<br>
Oh, the best friend to have is Jesus!<br><br>

2. What a friend I have found in Jesus!<br>
Peace and comfort to my soul He brings;<br>
Leaning on His mighty arm,<br>
I will fear no ill nor harm;<br>
Oh, the best friend to have is Jesus!<br><br>

CHORUS:<br>
The best friend to have is Jesus,<br>
The best friend to have is Jesus;<br>
He will help you when you fall;<br>
He will hear you when you call;<br>
Oh, the best friend to have is Jesus!<br><br>

3. Though I pass through the night of sorrow,<br>
And the chilly waves of Jordan roll,<br>
Never need I shrink nor fear,<br>
For my Saviour is so near;<br>
Oh, the best friend to have is Jesus!<br><br>

CHORUS:<br>
The best friend to have is Jesus,<br>
The best friend to have is Jesus;<br>
He will help you when you fall;<br>
He will hear you when you call;<br>
Oh, the best friend to have is Jesus!<br><br>

4. When at last to our home we gather,<br>
With the loved ones who have gone before,<br>
We will sing upon the shore,<br>
Praising Him for evermore;<br>
Oh, the best friend to have is Jesus!<br><br>
      `,
      yo: `
1. O, ọrẹ ti o dara ju lati ni ni Jesu!<br>
Nigba ti awọn ìṣòro aye ba kó gbogbo rẹ,<br>
Yóò wẹ ọkan tí ó fara pa,<br>
Yóò fi agbara ati ọlá fún ọ;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

CHORUS:<br>
Ọrẹ ti o dara ju lati ni ni Jesu,<br>
Ọrẹ ti o dara ju lati ni ni Jesu;<br>
Yóò ràn ọ lọwọ nigba ti o ba ṣubu;<br>
Yóò gbọ́ ọ nigbati o ba pe;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

2. Kí lo ṣe, ọrẹ ti mo ti ri ninu Jesu!<br>
Aduroṣinṣin ati itunu fun ọkàn mi, o mu wá;<br>
Ní gbé lori ọwọ́ alágbára Rẹ,<br>
Emi kì yóò bẹ̀rù ohunkóhun tabi ibi;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

CHORUS:<br>
Ọrẹ ti o dara ju lati ni ni Jesu,<br>
Ọrẹ ti o dara ju lati ni ni Jesu;<br>
Yóò ràn ọ lọwọ nigba ti o ba ṣubu;<br>
Yóò gbọ́ ọ nigbati o ba pe;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

3. Bí mo ṣe n lọ láti inú òru ẹ̀dá,<br>
Ati àwọn omi tó tutu ti Jordan n rò,<br>
Mi ò ní bẹ̀rù tàbí yà,<br>
Nítorí Olúwa mi wà lẹ́gbẹẹ mi;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

CHORUS:<br>
Ọrẹ ti o dara ju lati ni ni Jesu,<br>
Ọrẹ ti o dara ju lati ni ni Jesu;<br>
Yóò ràn ọ lọwọ nigba ti o ba ṣubu;<br>
Yóò gbọ́ ọ nigbati o ba pe;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

4. Nígbà tí a bá kópa nílé wa nikẹhin,<br>
Pẹ̀lú àwọn ìbáṣepọ tó ti kọja tẹlẹ,<br>
A ó kọrin lẹ́gbẹẹ etí omi,<br>
Pẹ̀lú ẹ̀yìn Rẹ́, ká dúpẹ́ lọwọ Rẹ, nítorí kò pin; <br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>
      `,
      fr: `
1. Oh, le meilleur ami à avoir est Jésus !<br>
Quand les soucis de la vie se roulent sur toi,<br>
Il guérira le cœur blessé,<br>
Il apportera force et grâce ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>

CHORUS:<br>
Le meilleur ami à avoir est Jésus,<br>
Le meilleur ami à avoir est Jésus;<br>
Il t’aidera quand tu tombes;<br>
Il t’entendra quand tu appelles ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>

2. Quel ami j’ai trouvé en Jésus !<br>
La paix et le confort pour mon âme Il apporte ;<br>
Appuyé sur son bras puissant,<br>
Je ne craindrai ni mal ni tort ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>

CHORUS:<br>
Le meilleur ami à avoir est Jésus,<br>
Le meilleur ami à avoir est Jésus;<br>
Il t’aidera quand tu tombes;<br>
Il t’entendra quand tu appelles ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>

3. Bien que je passe par la nuit du chagrin,<br>
Et que les vagues glacées du Jourdain roulent,<br>
Je n’aurai jamais à reculer ni à avoir peur,<br>
Car mon Sauveur est si près ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>

CHORUS:<br>
Le meilleur ami à avoir est Jésus,<br>
Le meilleur ami à avoir est Jésus;<br>
Il t’aidera quand tu tombes;<br>
Il t’entendra quand tu appelles ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>

4. Quand enfin nous nous rassemblons à notre maison,<br>
Avec les proches qui nous ont précédés,<br>
Nous chanterons sur le rivage,<br>
Le louant pour toujours ;<br>
Oh, le meilleur ami à avoir est Jésus !<br><br>
      `,
      eg: `
1. O, ọrẹ ti o dara ju lati ni ni Jesu!<br>
Nigba ti awọn ìṣòro aye ba kó gbogbo rẹ,<br>
Yóò wẹ ọkan tí ó fara pa,<br>
Yóò fi agbara ati ọlá fún ọ;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

CHORUS:<br>
Ọrẹ ti o dara ju lati ni ni Jesu,<br>
Ọrẹ ti o dara ju lati ni ni Jesu;<br>
Yóò ràn ọ lọwọ nigba ti o ba ṣubu;<br>
Yóò gbọ́ ọ nigbati o ba pe;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

2. Kí lo ṣe, ọrẹ ti mo ti ri ninu Jesu!<br>
Aduroṣinṣin ati itunu fun ọkàn mi, o mu wá;<br>
Ní gbé lori ọwọ́ alágbára Rẹ,<br>
Emi kì yóò bẹ̀rù ohunkóhun tabi ibi;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

CHORUS:<br>
Ọrẹ ti o dara ju lati ni ni Jesu,<br>
Ọrẹ ti o dara ju lati ni ni Jesu;<br>
Yóò ràn ọ lọwọ nigba ti o ba ṣubu;<br>
Yóò gbọ́ ọ nigbati o ba pe;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

3. Bí mo ṣe n lọ láti inú òru ẹ̀dá,<br>
Ati àwọn omi tó tutu ti Jordan n rò,<br>
Mi ò ní bẹ̀rù tàbí yà,<br>
Nítorí Olúwa mi wà lẹ́gbẹẹ mi;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

CHORUS:<br>
Ọrẹ ti o dara ju lati ni ni Jesu,<br>
Ọrẹ ti o dara ju lati ni ni Jesu;<br>
Yóò ràn ọ lọwọ nigba ti o ba ṣubu;<br>
Yóò gbọ́ ọ nigbati o ba pe;<br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>

4. Nígbà tí a bá kópa nílé wa nikẹhin,<br>
Pẹ̀lú àwọn ìbáṣepọ tó ti kọja tẹlẹ,<br>
A ó kọrin lẹ́gbẹẹ etí omi,<br>
Pẹ̀lú ẹ̀yìn Rẹ́, ká dúpẹ́ lọwọ Rẹ, nítorí kò pin; <br>
O, ọrẹ ti o dara ju lati ni ni Jesu!<br><br>
      `,
    },
    writeUp: {
      en: "This hymn celebrates the eternal friendship and support that Jesus offers, providing comfort and strength through life's challenges.",
      yo: "Hymn yi ṣe ayẹyẹ ìbáṣepọ aláàánú tí Jesu n fun wa, n pese itunu ati agbara ninu ìṣòro aye.",
      fr: "Ce cantique célèbre l’amitié éternelle et le soutien que Jésus offre, apportant réconfort et force à travers les défis de la vie.",
      eg: "Hymn yi ṣe ayẹyẹ ìbáṣepọ aláàánú tí Jesu n fun wa, n pese itunu ati agbara ninu ìṣòro aye."
    }
  },
  108: {
    title: {
      en: "Work for the Night is Coming",
      yo: "Ṣe iṣẹ fun Alẹ ti n bọ",
      fr: "Travaille car la nuit arrive",
      eg: "Ṣe iṣẹ fun Alẹ ti n bọ"
    },
    lyrics: {
      en: `
1. Work, for the night is coming:<br>
Work through the morning hours,<br>
Work while the dew is sparkling,<br>
Work ‘mid springing flowers;<br>
Work when the day grows brighter,<br>
Work in the glowing sun;<br>
Work, for the night is coming,<br>
When man’s work is done.<br><br>

2. Work, for the night is coming:<br>
Work through the sunny noon,<br>
Fill brightest hours with labour;<br>
Rest comes sure and soon;<br>
Give every flying minute<br>
Something to keep in store;<br>
Work, for the night is coming,<br>
When man works no more.<br><br>

3. Work, for the night is coming:<br>
Under the sunset skies,<br>
While their bright tints are glowing,<br>
Work, for daylight flies;<br>
Work till the last beam fadeth,<br>
Fadeth to shine no more;<br>
Work while the night is darkening:<br>
When man’s work is o’er.<br><br>

Amen.<br>
      `,
      yo: `
1. Ṣe iṣẹ́, nitori alẹ́ ti n bọ:<br>
Ṣe iṣẹ́ ní ìkèdè owurọ,<br>
Ṣe iṣẹ́ nígbà tí omi àmọ̀ ẹ̀sẹ̀ ṣèdá,<br>
Ṣe iṣẹ́ láàrín awọn ododo ti o n tàn;<br>
Ṣe iṣẹ́ nígbà tí ọjọ́ bá ń tan,<br>
Ṣe iṣẹ́ ní oorun tó ń gbóná;<br>
Ṣe iṣẹ́, nitori alẹ́ ti n bọ,<br>
Nígbà tí iṣẹ́ ènìyàn bá parí.<br><br>

2. Ṣe iṣẹ́, nitori alẹ́ ti n bọ:<br>
Ṣe iṣẹ́ ní ìkèdè ọ̀sán,<br>
Fi gbogbo wakati ti o dun ṣinṣin pẹlu iṣẹ́;<br>
Sinmi yoo wá ní àìpé;<br>
Fi gbogbo ìsẹ̀kù iṣẹ́ pọ̀, kí o fi silẹ ni ipamọ́;<br>
Ṣe iṣẹ́, nitori alẹ́ ti n bọ,<br>
Nígbà tí iṣẹ́ ènìyàn kò ni lọ.<br><br>

3. Ṣe iṣẹ́, nitori alẹ́ ti n bọ:<br>
Ní ilẹ̀ ẹ̀wẹ̀ ìrọ̀lẹ̀,<br>
Nígbà tí wọn ti n tan awọ́ tí o lẹ́wà,<br>
Ṣe iṣẹ́, nitori ọjọ́ yóó fọ́;<br>
Ṣe iṣẹ́ títí di ìkànsí tí o kù,<br>
Nígbà tí alẹ́ ba ṣẹ̀rẹ̀:<br>
Ṣe iṣẹ́ nígbà tí alẹ́ ba di òkùnkùn:<br>
Nígbà tí iṣẹ́ ènìyàn ba dá.<br><br>

Amin.<br>
      `,
      fr: `
1. Travaillez, car la nuit vient:<br>
Travaillez pendant les heures du matin,<br>
Travaillez pendant que la rosée scintille,<br>
Travaillez parmi les fleurs de printemps;<br>
Travaillez lorsque le jour devient plus lumineux,<br>
Travaillez sous le soleil brillant;<br>
Travaillez, car la nuit vient,<br>
Lorsque le travail de l'homme est terminé.<br><br>

2. Travaillez, car la nuit vient:<br>
Travaillez pendant le midi ensoleillé,<br>
Remplissez les heures les plus brillantes de travail;<br>
Le repos viendra bientôt;<br>
Donnez à chaque minute qui passe<br>
Quelque chose à garder en réserve;<br>
Travaillez, car la nuit vient,<br>
Lorsque l'homme ne travaille plus.<br><br>

3. Travaillez, car la nuit vient:<br>
Sous le ciel du coucher du soleil,<br>
Pendant que leurs teintes brillantes rayonnent,<br>
Travaillez, car la lumière du jour s'envole;<br>
Travaillez jusqu'à ce que le dernier rayon s'éteigne,<br>
S'éteigne pour ne plus briller;<br>
Travaillez pendant que la nuit sombre:<br>
Lorsque le travail de l'homme est terminé.<br><br>

Amen.<br>
      `,
      eg: `
1. Ṣe iṣẹ́, nitori alẹ́ ti n bọ:<br>
Ṣe iṣẹ́ ní ìkèdè owurọ,<br>
Ṣe iṣẹ́ nígbà tí omi àmọ̀ ẹ̀sẹ̀ ṣèdá,<br>
Ṣe iṣẹ́ láàrín awọn ododo ti o n tàn;<br>
Ṣe iṣẹ́ nígbà tí ọjọ́ bá ń tan,<br>
Ṣe iṣẹ́ ní oorun tó ń gbóná;<br>
Ṣe iṣẹ́, nitori alẹ́ ti n bọ,<br>
Nígbà tí iṣẹ́ ènìyàn bá parí.<br><br>

2. Ṣe iṣẹ́, nitori alẹ́ ti n bọ:<br>
Ṣe iṣẹ́ ní ìkèdè ọ̀sán,<br>
Fi gbogbo wakati ti o dun ṣinṣin pẹlu iṣẹ́;<br>
Sinmi yoo wá ní àìpé;<br>
Fi gbogbo ìsẹ̀kù iṣẹ́ pọ̀, kí o fi silẹ ni ipamọ́;<br>
Ṣe iṣẹ́, nitori alẹ́ ti n bọ,<br>
Nígbà tí iṣẹ́ ènìyàn kò ni lọ.<br><br>

3. Ṣe iṣẹ́, nitori alẹ́ ti n bọ:<br>
Ní ilẹ̀ ẹ̀wẹ̀ ìrọ̀lẹ̀,<br>
Nígbà tí wọn ti n tan awọ́ tí o lẹ́wà,<br>
Ṣe iṣẹ́, nitori ọjọ́ yóó fọ́;<br>
Ṣe iṣẹ́ títí di ìkànsí tí o kù,<br>
Nígbà tí alẹ́ ba ṣẹ̀rẹ̀:<br>
Ṣe iṣẹ́ nígbà tí alẹ́ ba di òkùnkùn:<br>
Nígbà tí iṣẹ́ ènìyàn ba dá.<br><br>

Amin.<br>
      `
    },
    writeUp: {
      en: "This hymn encourages believers to work diligently, as the time to rest will eventually come, symbolized by the coming night.",
      yo: "Hymn yi n tọka si awọn olùgbọ́lẹ̀ lati ṣiṣẹ́ takuntakun, nitori akoko lati sinmi yoo de, ti a ṣe aṣoju nipasẹ ale ti n bọ.",
      fr: "Ce cantique encourage les croyants à travailler assidûment, car le moment de se reposer viendra, symbolisé par la nuit qui approche.",
      eg: "Hymn yi n tọka si awọn olùgbọ́lẹ̀ lati ṣiṣẹ́ takuntakun, nitori akoko lati sinmi yoo de, ti a ṣe aṣoju nipasẹ ale ti n bọ."
    }
  },
    
  109: {
    title: {
      en: "Jesus Only!",
      yo: "Jesu nikan!",
      fr: "Jésus seulement !",
      eg: "Jesu nikan!"
    },
    lyrics: {
      en: `
1. "Jesus only!" this the watchword,<br>
Guiding, like a star my way;<br>
He the friend that walks beside me,<br>
Cheering ev'ry passing day.<br><br>

Refrain:<br>
"Jesus only!" "Jesus only!"<br>
He the dearest friend, and best;<br>
Having Him to walk beside me,<br>
Oh, my soul is truly blest.<br><br>

2. "Jesus only!" when the sunshine<br>
Floods with gold the way I go;<br>
Then He is to me the dearer,<br>
For the joy He doth bestow. [Refrain]<br><br>

3. "Jesus only!" when the shadows<br>
Darkly o'er my pathway fall,<br>
He the light that shines in darkness,<br>
He my Saviour and my all. [Refrain]<br><br>

4. "Jesus only!" when I'm sinking<br>
Into the embrace of death;<br>
He, my Saviour, will be with me<br>
To my last expiring breath. [Refrain]<br><br>
      `,
      yo: `
1. "Jesu nikan!" eyi ni ọrọ̀ ìkìlọ́,<br>
Tó ń tọ́ mi, gẹ́gẹ́ bí irawọ ní ojú-ọ̀nà mi;<br>
Ó ni ọ̀rẹ́ tó ń rin lẹ́gbẹ́ mi,<br>
Tó ń fún mi ní ìdùnnú ọjọ́ kọọkan.<br><br>

Refrain:<br>
"Jesu nikan!" "Jesu nikan!"<br>
Ó ni ọ̀rẹ́ tó dára jùlọ, àti tó dára julọ;<br>
Níwọn tí mo ní í lati rin lẹ́gbẹ́ mi,<br>
Oh, ẹ̀mí mi ní àṣẹ̀dá pẹ̀lú Rẹ.<br><br>

2. "Jesu nikan!" nígbà tí oorun<br>
Tó kún fun wúrà bá ń kún ojú-ọ̀nà mi;<br>
Nígbà náà, ó jẹ́ ẹni to ṣe pataki jùlọ fún mi,<br>
Nítorí ìdùnnú tí ó ń fún mi. [Refrain]<br><br>

3. "Jesu nikan!" nígbà tí ẹ̀dá<br>
Dúró ní ọ̀nà mi ní òkùnkùn,<br>
Ó ni imọlẹ tó ń tan ninu òkùnkùn,<br>
Ó ni Olúwa mi àti gbogbo rẹ̀. [Refrain]<br><br>

4. "Jesu nikan!" nígbà tí mo ń bọ́ sínú<br>
Ìdùnnú ikú;<br>
Ó, Olùgbàlà mi, yóò wà pẹ̀lú mi<br>
Títí de ìparí ẹ̀mí mi. [Refrain]<br><br>
      `,
      fr: `
1. "Jésus seulement !" voici le mot d'ordre,<br>
Guidant, comme une étoile mon chemin;<br>
Il est l'ami qui marche à mes côtés,<br>
Encourageant chaque jour qui passe.<br><br>

Refrain :<br>
"Jésus seulement !" "Jésus seulement !"<br>
Il est l'ami le plus cher et le meilleur ;<br>
Avoir Jésus à mes côtés,<br>
Oh, mon âme est vraiment bénie.<br><br>

2. "Jésus seulement !" quand le soleil<br>
Inonde d'or le chemin que je suis ;<br>
Alors Il m'est encore plus cher,<br>
Pour la joie qu'Il donne.<br>[Refrain]<br><br>

3. "Jésus seulement !" quand les ombres<br>
Sombrement tombent sur mon chemin,<br>
Il est la lumière qui brille dans les ténèbres,<br>
Il est mon Sauveur et mon tout. [Refrain]<br><br>

4. "Jésus seulement !" quand je sombre<br>
Dans l'étreinte de la mort ;<br>
Il, mon Sauveur, sera avec moi<br>
Jusqu'à mon dernier souffle expirant. [Refrain]<br><br>
      `,
      eg: `
1. "Jesu nikan!" eyi ni ọrọ̀ ìkìlọ́,<br>
Tó ń tọ́ mi, gẹ́gẹ́ bí irawọ ní ojú-ọ̀nà mi;<br>
Ó ni ọ̀rẹ́ tó ń rin lẹ́gbẹ́ mi,<br>
Tó ń fún mi ní ìdùnnú ọjọ́ kọọkan.<br><br>

Refrain:<br>
"Jesu nikan!" "Jesu nikan!"<br>
Ó ni ọ̀rẹ́ tó dára jùlọ, àti tó dára julọ;<br>
Níwọn tí mo ní í lati rin lẹ́gbẹ́ mi,<br>
Oh, ẹ̀mí mi ní àṣẹ̀dá pẹ̀lú Rẹ.<br><br>

2. "Jesu nikan!" nígbà tí oorun<br>
Tó kún fun wúrà bá ń kún ojú-ọ̀nà mi;<br>
Nígbà náà, ó jẹ́ ẹni to ṣe pataki jùlọ fún mi,<br>
Nítorí ìdùnnú tí ó ń fún mi. [Refrain]<br><br>

3. "Jesu nikan!" nígbà tí ẹ̀dá<br>
Dúró ní ọ̀nà mi ní òkùnkùn,<br>
Ó ni imọlẹ tó ń tan ninu òkùnkùn,<br>
Ó ni Olúwa mi àti gbogbo rẹ̀. [Refrain]<br><br>

4. "Jesu nikan!" nígbà tí mo ń bọ́ sínú<br>
Ìdùnnú ikú;<br>
Ó, Olùgbàlà mi, yóò wà pẹ̀lú mi<br>
Títí de ìparí ẹ̀mí mi. [Refrain]<br><br>
      `
    },
    writeUp: {
      en: "This hymn emphasizes the importance of Jesus as the constant companion through all of life's joys and trials, from sunshine to death's embrace.",
      yo: "Hymn yi nfihan pataki Jesu gẹgẹ bi alabaṣiṣẹpọ ti o wa ni gbogbo ẹ̀dá, lati oorun titi di ikú.",
      fr: "Ce cantique met en avant l'importance de Jésus en tant que compagnon constant à travers toutes les joies et épreuves de la vie, du soleil à l'étreinte de la mort.",
      eg: "Hymn yi nfihan pataki Jesu gẹgẹ bi alabaṣiṣẹpọ ti o wa ni gbogbo ẹ̀dá, lati oorun titi di ikú."
    }
  },
  110: {
    title: {
      en: "The Great Physician Now Is Near",
      yo: "Dọkita Tó Ga Jẹ́ Nísinsin Yi",
      fr: "Le Grand Médecin Est Près",
      eg: "Dọkita Tó Ga Jẹ́ Nísinsin Yi"
    },
    lyrics: {
      en: `
1. The great Physician now is near,<br>
The sympathising Jesus;<br>
He speaks the drooping heart to cheer.<br>
Oh, hear the voice of Jesus!<br><br>

CHORUS:<br>
Sweetest note in seraph song,<br>
Sweetest name on mortal tongue<br>
Sweetest carol ever sung,<br>
Jesus, blessed Jesus!<br><br>

2. His name dispels my guilt and fear,<br>
No other name but Jesus;<br>
Oh, now my soul delights to hear<br>
The precious name of Jesus!<br><br>

CHORUS:<br>
Sweetest note in seraph song,<br>
Sweetest name on mortal tongue<br>
Sweetest carol ever sung,<br>
Jesus, blessed Jesus!<br><br>

3. The children too, both great and small,<br>
Who love the name of Jesus,<br>
Who now accept the gracious call?<br>
To work and live for Jesus.<br><br>

CHORUS:<br>
Sweetest note in seraph song,<br>
Sweetest name on mortal tongue<br>
Sweetest carol ever sung,<br>
Jesus, blessed Jesus!<br><br>

4. And when to the bright world above<br>
We rise to see our Jesus,<br>
We’ll sing around the throne of love<br>
His name, the name of Jesus.<br><br>

CHORUS:<br>
Sweetest note in seraph song,<br>
Sweetest name on mortal tongue<br>
Sweetest carol ever sung,<br>
Jesus, blessed Jesus!<br><br>

Amen.<br>
      `,
      yo: `
1. Dọkita tó ga jẹ́ nísinsin yìí,<br>
Jesu tó ń ṣàánú;<br>
Ó sọ ọkàn tó ń sọ̀kalẹ̀ di ìdùnnú.<br>
Ẹ jọ̀wọ́, gbọ́ ohùn Jesu!<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

2. Orukọ Rẹ̀ ń pa ẹ̀sùn àti ìbànújẹ mi,<br>
Kò sí orukọ míràn ṣùgbọ́n Jesu;<br>
Oh, ní báyìí ẹ̀mí mi ń bọ́ fúnrarẹ̀ ní ìdùnnú<br>
Nípa orukọ tó wúlò Jesu!<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

3. Àwọn ọmọ náà, àwọn tóbi àti kékeré,<br>
Tí wọn fẹ́ràn orukọ Jesu,<br>
Tí wọn ti gba ìpè àánú náà?<br>
Lati ṣiṣẹ́ ati láyé fún Jesu.<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

4. Nígbà tí a bá dé ayé tó mọ́,<br>
A ó jáde láti rí Jesu wa,<br>
A ó kọ orin níta àjàrà ọ̀rẹ́<br>
Orukọ Rẹ̀, orukọ Jesu.<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

Amin.<br>
      `,
      fr: `
1. Le grand Médecin est maintenant près,<br>
Le Jésus compatissant ;<br>
Il parle au cœur abattu pour le réconforter.<br>
Oh, écoutez la voix de Jésus !<br><br>

CHORUS :<br>
La note la plus douce dans le chant des séraphins,<br>
Le nom le plus doux sur la langue des mortels<br>
Le plus doux cantique jamais chanté,<br>
Jésus, Jésus béni !<br><br>

2. Son nom dissipe ma culpabilité et ma crainte,<br>
Aucun autre nom que Jésus ;<br>
Oh, maintenant mon âme se réjouit d'entendre<br>
Le précieux nom de Jésus !<br><br>

CHORUS :<br>
La note la plus douce dans le chant des séraphins,<br>
Le nom le plus doux sur la langue des mortels<br>
Le plus doux cantique jamais chanté,<br>
Jésus, Jésus béni !<br><br>

3. Les enfants aussi, grands et petits,<br>
Qui aiment le nom de Jésus,<br>
Qui acceptent maintenant l'appel gracieux ?<br>
Pour travailler et vivre pour Jésus.<br><br>

CHORUS :<br>
La note la plus douce dans le chant des séraphins,<br>
Le nom le plus doux sur la langue des mortels<br>
Le plus doux cantique jamais chanté,<br>
Jésus, Jésus béni !<br><br>

4. Et quand nous monterons dans le monde lumineux ci-dessus,<br>
Nous verrons notre Jésus,<br>
Nous chanterons autour du trône de l'amour<br>
Son nom, le nom de Jésus.<br><br>

CHORUS :<br>
La note la plus douce dans le chant des séraphins,<br>
Le nom le plus doux sur la langue des mortels<br>
Le plus doux cantique jamais chanté,<br>
Jésus, Jésus béni !<br><br>

Amen.<br>
      `,
      eg: `
1. Dọkita tó ga jẹ́ nísinsin yìí,<br>
Jesu tó ń ṣàánú;<br>
Ó sọ ọkàn tó ń sọ̀kalẹ̀ di ìdùnnú.<br>
Ẹ jọ̀wọ́, gbọ́ ohùn Jesu!<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

2. Orukọ Rẹ̀ ń pa ẹ̀sùn àti ìbànújẹ mi,<br>
Kò sí orukọ míràn ṣùgbọ́n Jesu;<br>
Oh, ní báyìí ẹ̀mí mi ń bọ́ fúnrarẹ̀ ní ìdùnnú<br>
Nípa orukọ tó wúlò Jesu!<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

3. Àwọn ọmọ náà, àwọn tóbi àti kékeré,<br>
Tí wọn fẹ́ràn orukọ Jesu,<br>
Tí wọn ti gba ìpè àánú náà?<br>
Lati ṣiṣẹ́ ati láyé fún Jesu.<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

4. Nígbà tí a bá dé ayé tó mọ́,<br>
A ó jáde láti rí Jesu wa,<br>
A ó kọ orin níta àjàrà ọ̀rẹ́<br>
Orukọ Rẹ̀, orukọ Jesu.<br><br>

CHORUS:<br>
Ohùn tó dára jùlọ nínú orin angẹli,<br>
Orukọ tó dára jùlọ lori ẹnu ènìyàn,<br>
Orin tó dára jùlọ tí a kọ,<br>
Jesu, Jesu olúwadàá.<br><br>

Amin.<br>
      `
    },
    writeUp: {
      en: "This hymn emphasizes the healing power of Jesus, calling everyone to find comfort and strength in His presence and name.",
      yo: "Hymn yi nfihan agbara iwosan Jesu, pe gbogbo eniyan lati ri itunu ati agbara ninu wiwa Rẹ ati orukọ Rẹ.",
      fr: "Ce cantique met en avant le pouvoir de guérison de Jésus, appelant tout le monde à trouver du réconfort et de la force dans Sa présence et Son nom.",
      eg: "Hymn yi nfihan agbara iwosan Jesu, pe gbogbo eniyan lati ri itunu ati agbara ninu wiwa Rẹ ati orukọ Rẹ."
    }
  },
  111: {
    title: {
      en: "Blow Ye the Trumpet, Blow",
      yo: "Fọ́kàn Ayé, Fọ́kàn!",
      fr: "Soufflez dans la trompette, soufflez",
      eg: "Fọ́kàn Ayé, Fọ́kàn!"
    },
    lyrics: {
      en: `
1. Blow ye the trumpet, blow!<br>
The gladly solemn sound<br>
Let all the nations know,<br>
To earth's remotest bound:<br><br>

CHORUS:<br>
The year of jubilee is come;<br>
Return, ye ransomed sinners, home;<br>
Return, ye ransomed sinners, home.<br><br>

2. Jesus, our great High Priest,<br>
Has full atonement made;<br>
Ye weary spirits, rest;<br>
Ye mournful souls, be glad:<br><br>

CHORUS:<br>
The year of jubilee is come;<br>
Return, ye ransomed sinners, home;<br>
Return, ye ransomed sinners, home.<br><br>

3. Extol the Lamb of God,<br>
The sacrificial Lamb;<br>
Redemption thro' His blood<br>
Throughout the world proclaim:<br><br>

CHORUS:<br>
The year of jubilee is come;<br>
Return, ye ransomed sinners, home;<br>
Return, ye ransomed sinners, home.<br><br>

4. Ye slaves of sin and hell,<br>
Your liberty receive;<br>
And safe in Jesus dwell,<br>
And blest in Jesus live:<br><br>

CHORUS:<br>
The year of jubilee is come;<br>
Return, ye ransomed sinners, home;<br>
Return, ye ransomed sinners, home.<br><br>

5. Ye who have sold for naught<br>
Your heritage above,<br>
Receive it back unbought,<br>
The gift of Jesus' love:<br><br>

CHORUS:<br>
The year of jubilee is come;<br>
Return, ye ransomed sinners, home;<br>
Return, ye ransomed sinners, home.<br><br>

6. The gospel trumpet hear,<br>
The news of heav'nly grace;<br>
And, saved from earth, appear<br>
Before your Savior's face:<br><br>

CHORUS:<br>
The year of jubilee is come;<br>
Return, ye ransomed sinners, home;<br>
Return, ye ransomed sinners, home.<br><br>

Amen.<br>
      `,
      yo: `
1. Fọ́kàn ayé, fọ́kàn!<br>
Ohùn ayé tó ní ìyàlẹ́nu<br>
Jẹ́ kí gbogbo awọn orílẹ̀-èdè mọ,<br>
Títí di ìpínlẹ̀ tó jìnnà.<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

2. Jesu, àgùntàn Olúwa wa,<br>
Ti ṣe ìtẹ́wọ́gba gbogbo ẹ̀sùn;<br>
Ẹ̀mí tí a rẹwẹsi, sinmi;<br>
Ẹ̀mí tí ó tán, yáàra náà:<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

3. Gba Àgùntàn Ọlọ́run gídígbò,<br>
Àgùntàn tó ń ṣiṣẹ́ ìgbàlà;<br>
Ìkànsí títí lọ́dọ̀ ẹ̀jẹ̀ Rẹ,<br>
Ka gbogbo agbègbè ni íkànsí:<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

4. Ẹ̀yin èrè ẹ̀sìn àti ìjè,<br>
Gba ìyàsímímọ̀ yín;<br>
Ki ẹ sì ṣe ààbò ninu Jesu,<br>
Ki ẹ sì dára ninu Jesu.<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

5. Ẹ̀yin tí wọ́n ta ohun tí kò ṣeé rìn,<br>
Òmìnira yín ti wa;<br>
Gbà á padà lailéṣe,<br>
Ẹbun ìfẹ́ Jesu.<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

6. Gbọ́ ohùn ìhìn Rẹ̀,<br>
Ìhìn àánú òrun;<br>
Nígbà tí ẹ gba ìgbàlà, hàn<br>
Níwaju Olùgbàlà rẹ:<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

Amin.<br>
      `,
      fr: `
1. Soufflez dans la trompette, soufflez !<br>
Le son solennel et joyeux,<br>
Que toutes les nations sachent,<br>
Jusqu'aux limites les plus lointaines de la terre :<br><br>

CHORUS :<br>
L'année du jubilé est venue ;<br>
Retournez, pécheurs rachetés, chez vous ;<br>
Retournez, pécheurs rachetés, chez vous.<br><br>

2. Jésus, notre grand Souverain Sacrificateur,<br>
A fait l'expiation complète ;<br>
Vous, esprits fatigués, reposez-vous ;<br>
Vous, âmes attristées, soyez joyeuses :<br><br>

CHORUS :<br>
L'année du jubilé est venue ;<br>
Retournez, pécheurs rachetés, chez vous ;<br>
Retournez, pécheurs rachetés, chez vous.<br><br>

3. Exaltez l'Agneau de Dieu,<br>
L'Agneau sacrificiel ;<br>
La rédemption par Son sang<br>
À travers le monde, proclamez :<br><br>

CHORUS :<br>
L'année du jubilé est venue ;<br>
Retournez, pécheurs rachetés, chez vous ;<br>
Retournez, pécheurs rachetés, chez vous.<br><br>

4. Vous, esclaves du péché et de l'enfer,<br>
Recevez votre liberté ;<br>
Et demeurez en sécurité en Jésus,<br>
Et vivez bénis en Jésus :<br><br>

CHORUS :<br>
L'année du jubilé est venue ;<br>
Retournez, pécheurs rachetés, chez vous ;<br>
Retournez, pécheurs rachetés, chez vous.<br><br>

5. Vous qui avez vendu sans rien obtenir<br>
Votre héritage céleste,<br>
Recevez-le de nouveau gratuitement,<br>
Le don de l'amour de Jésus :<br><br>

CHORUS :<br>
L'année du jubilé est venue ;<br>
Retournez, pécheurs rachetés, chez vous ;<br>
Retournez, pécheurs rachetés, chez vous.<br><br>

6. Écoutez la trompette de l'Évangile,<br>
Les nouvelles de la grâce céleste ;<br>
Et, sauvés de la terre, apparaissez<br>
Devant la face de votre Sauveur :<br><br>

CHORUS :<br>
L'année du jubilé est venue ;<br>
Retournez, pécheurs rachetés, chez vous ;<br>
Retournez, pécheurs rachetés, chez vous.<br><br>

Amen.<br>
      `,
      eg: `
1. Fọ́kàn ayé, fọ́kàn!<br>
Ohùn ayé tó ní ìyàlẹ́nu<br>
Jẹ́ kí gbogbo awọn orílẹ̀-èdè mọ,<br>
Títí di ìpínlẹ̀ tó jìnnà.<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

2. Jesu, àgùntàn Olúwa wa,<br>
Ti ṣe ìtẹ́wọ́gba gbogbo ẹ̀sùn;<br>
Ẹ̀mí tí a rẹwẹsi, sinmi;<br>
Ẹ̀mí tí ó tán, yáàra náà:<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

3. Gba Àgùntàn Ọlọ́run gídígbò,<br>
Àgùntàn tó ń ṣiṣẹ́ ìgbàlà;<br>
Ìkànsí títí lọ́dọ̀ ẹ̀jẹ̀ Rẹ,<br>
Ka gbogbo agbègbè ni íkànsí:<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

4. Ẹ̀yin èrè ẹ̀sìn àti ìjè,<br>
Gba ìyàsímímọ̀ yín;<br>
Ki ẹ sì ṣe ààbò ninu Jesu,<br>
Ki ẹ sì dára ninu Jesu.<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

5. Ẹ̀yin tí wọ́n ta ohun tí kò ṣeé rìn,<br>
Òmìnira yín ti wa;<br>
Gbà á padà lailéṣe,<br>
Ẹbun ìfẹ́ Jesu.<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

6. Gbọ́ ohùn ìhìn Rẹ̀,<br>
Ìhìn àánú òrun;<br>
Nígbà tí ẹ gba ìgbàlà, hàn<br>
Níwaju Olùgbàlà rẹ:<br><br>

CHORUS:<br>
Ọdún ìyí jubilee ti dé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé;<br>
Pade, ẹlẹ́ṣin ti a ra pada, lọ sí ilé.<br><br>

Amin.<br>
      `
    },
    writeUp: {
      en: "This hymn calls on all to rejoice in the jubilee, proclaiming the coming of freedom through Jesus Christ's sacrifice.",
      yo: "Hymn yi pe gbogbo eniyan lati yọ ninu iyì jubilee, ti n sọ nipa ìbáṣepọ ìyàsímímọ̀ ti Jesu Kristi.",
      fr: "Ce cantique appelle tous à se réjouir dans le jubilé, proclamant la venue de la liberté par le sacrifice de Jésus-Christ.",
      eg: "Hymn yi pe gbogbo eniyan lati yọ ninu iyì jubilee, ti n sọ nipa ìbáṣepọ ìyàsímímọ̀ ti Jesu Kristi."
    }
  },
  112: {
    title: {
      en: "Go Forth and Preach All My Gospel",
      yo: "Lọ́ síwájú, ki o kẹ́kọ̀ọ́ gbogbo Ìhìn Rẹ",
      fr: "Allez et prêchez tout Mon Évangile",
      eg: "Lọ́ síwájú, ki o kẹ́kọ̀ọ́ gbogbo Ìhìn Rẹ"
    },
    lyrics: {
      en: `
1. When first the risen Lord of pow’r<br>
His chosen ones sent forth,<br>
A charge He gave, that solemn hour,<br>
To preach His saving worth<br>
“Go ye” said He, “to all mankind;<br>
Declare My Word, and ye shall find:<br>
These signs shall surely follow them<br>
Who on My Name believe.”<br><br>

2. “No demons shall before them stand,<br>
No poison do them harm:<br>
Nor subtle serpent in their hand<br>
Cause pain or dread alarm.”<br>
For Satan’s kingdom He o’ercame<br>
To give His people right to claim:<br>
These signs shall surely follow them<br>
Who on My Name believe.<br><br>

3. “They shall with other tongues declare<br>
The wonders of their God;<br>
The sick beneath their hands by prayer,<br>
Shall rise, to prove My Word.”<br>
So let it be! Firm as His Throne,<br>
Stands this clear promise to His own:<br>
These signs shall surely follow them<br>
Who on My Name believe.<br><br>

4. Crowned with the flame of Pentecost<br>
A faithful, fearless band<br>
Proclaimed His Name a ransomed host<br>
Arose from every land.<br>
The Lord worked with them from on High,<br>
His proven Word could none deny:<br>
These signs shall surely follow them<br>
Who on My Name believe.<br><br>

Amen.<br>
      `,
      yo: `
1. Nígbà tí Olúwa tí a jí n’ọ́run<br>
Rán àwọn ẹlẹ́ṣin Rẹ síwájú,<br>
Ó fi iṣẹ́ àṣẹ tó ṣeé gbà á,<br>
Kí wọn kẹ́kọ̀ọ́ nípa ìgbàlà Rẹ.<br>
"Ẹ lọ!" ni Ó sọ, "Sí gbogbo ènìyàn;<br>
Kọ ìhìn Mi, ẹ sì máa rí:<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi." <br><br>

2. "Kò sí ẹ̀dá búburú tí yóò duro níwájú wọn,<br>
Kò sí iròyìn tó máa ṣàkànsí wọn;<br>
Kò sì ẹ̀dá tàbí èyí tó le fa ìṣoro<br>
Ní ọwọ́ wọn, tí yóò jẹ́ kí wọn ní ìbànújẹ." <br>
Nítorí pé Ó ṣẹgun ìjọba Satan<br>
Láti fún àwọn ènìyàn Rẹ ní ẹ̀tọ́ láti gba:<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi." <br><br>

3. "Wọn máa sọ ìyìn Rẹ̀ ní èdè mìíràn<br>
Nípa àwọn ìyanu Ọlọ́run Rẹ;<br>
Wọn máa gbà àwọn aláìsàn nísẹ́ ọwọ́ wọn,<br>
Tí wọ́n á dá, láti fi hàn Òtítọ́ Mi." <br>
Ní báyìí, jẹ́ kí ó rí! Bíi ti Ọba Rẹ<br>
Igbẹ́kẹ̀lé Rẹ ni gbogbo ẹ̀bùn Rẹ.<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi." <br><br>

4. Wọ́n ṣíṣe àtẹ́lẹ̀fẹ́lẹ̀ Ìyẹ̀sẹ̀ ọ̀run<br>
Tó jẹ́ iṣẹ́ olùgbàlà pẹ̀lú ìbàdàn,<br>
Ó fi Orúkọ Rẹ hàn pẹ̀lú ìyàlèéru.<br>
Olúwa ṣiṣẹ́ pẹ̀lú wọn láti orí ọ̀run,<br>
Kò sì àṣàkóso láti túmọ̀ Ọrọ Rẹ.<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi.<br><br>

Amin.<br>
      `,
      fr: `
1. Lorsque le Seigneur ressuscité de puissance<br>
Envoya ses élus,<br>
Il leur donna un ordre solennel<br>
De prêcher la valeur de son salut<br>
"Allez", dit-il, "vers tous les hommes ;<br>
Déclarez Ma Parole, et vous trouverez :<br>
Ces signes suivront sûrement ceux<br>
Qui croient en Mon Nom." <br><br>

2. "Aucun démon ne se tiendra devant eux,<br>
Aucun poison ne leur fera de mal :<br>
Ni serpent rusé dans leur main<br>
Ne causera douleur ou alarme." <br>
Car le royaume de Satan Il a vaincu<br>
Pour donner à Son peuple le droit de revendiquer :<br>
Ces signes suivront sûrement ceux<br>
Qui croient en Mon Nom." <br><br>

3. "Ils annonceront les merveilles de leur Dieu<br>
Dans d'autres langues ;<br>
Les malades, sous leurs mains par la prière,<br>
Se lèveront pour prouver Ma Parole." <br>
Que cela soit ! Fermement comme Son Trône,<br>
Cette promesse claire demeure pour les Siens :<br>
Ces signes suivront sûrement ceux<br>
Qui croient en Mon Nom." <br><br>

4. Couronnés de la flamme de la Pentecôte,<br>
Un groupe fidèle et sans crainte<br>
Proclama Son Nom, une hôte rachetée<br>
Se leva de chaque terre.<br>
Le Seigneur travailla avec eux du Haut des Cieux,<br>
Sa Parole prouvée ne pouvait être niée :<br>
Ces signes suivront sûrement ceux<br>
Qui croient en Mon Nom." <br><br>

Amen.<br>
      `,
      eg: `
1. Nígbà tí Olúwa tí a jí n’ọ́run<br>
Rán àwọn ẹlẹ́ṣin Rẹ síwájú,<br>
Ó fi iṣẹ́ àṣẹ tó ṣeé gbà á,<br>
Kí wọn kẹ́kọ̀ọ́ nípa ìgbàlà Rẹ.<br>
"Ẹ lọ!" ni Ó sọ, "Sí gbogbo ènìyàn;<br>
Kọ ìhìn Mi, ẹ sì máa rí:<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi." <br><br>

2. "Kò sí ẹ̀dá búburú tí yóò duro níwájú wọn,<br>
Kò sí iròyìn tó máa ṣàkànsí wọn;<br>
Kò sì ẹ̀dá tàbí èyí tó le fa ìṣoro<br>
Ní ọwọ́ wọn, tí yóò jẹ́ kí wọn ní ìbànújẹ." <br>
Nítorí pé Ó ṣẹgun ìjọba Satan<br>
Láti fún àwọn ènìyàn Rẹ ní ẹ̀tọ́ láti gba:<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi." <br><br>

3. "Wọn máa sọ ìyìn Rẹ̀ ní èdè mìíràn<br>
Nípa àwọn ìyanu Ọlọ́run Rẹ;<br>
Wọn máa gbà àwọn aláìsàn nísẹ́ ọwọ́ wọn,<br>
Tí wọ́n á dá, láti fi hàn Òtítọ́ Mi." <br>
Ní báyìí, jẹ́ kí ó rí! Bíi ti Ọba Rẹ<br>
Igbẹ́kẹ̀lé Rẹ ni gbogbo ẹ̀bùn Rẹ.<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi." <br><br>

4. Wọ́n ṣíṣe àtẹ́lẹ̀fẹ́lẹ̀ Ìyẹ̀sẹ̀ ọ̀run<br>
Tó jẹ́ iṣẹ́ olùgbàlà pẹ̀lú ìbàdàn,<br>
Ó fi Orúkọ Rẹ hàn pẹ̀lú ìyàlèéru.<br>
Olúwa ṣiṣẹ́ pẹ̀lú wọn láti orí ọ̀run,<br>
Kò sì àṣàkóso láti túmọ̀ Ọrọ Rẹ.<br>
Àwọn àkọsílẹ̀ yìí máa tẹ̀lé wọn<br>
Tí wọ́n bá gba Orúkọ Mi.<br><br>

Amin.<br>
      `
    },
    writeUp: {
      en: "This hymn calls Christians to go forth and preach the gospel with signs following them. It echoes the Great Commission of Christ to His disciples to spread the message of salvation.",
      yo: "Hymn yi pe Kristẹni lati lọ síwájú kí wọn kẹ́kọ̀ọ́ ìhìn Rẹ, pẹ̀lú awọn aami tí yóò tẹ̀lé wọn. Ó sọ nipa Àṣẹ Nla ti Kristi fún àwọn ọmọ Ẹ̀yìn Rẹ láti tan ìhìn ìgbàlà.",
      fr: "Ce cantique appelle les chrétiens à aller et prêcher l'Évangile avec des signes qui les suivront. Il fait écho à la Grande Commission du Christ à Ses disciples pour répandre le message du salut.",
      eg: "Hymn yi pe Kristẹni lati lọ síwájú kí wọn kẹ́kọ̀ọ́ ìhìn Rẹ, pẹ̀lú awọn aami tí yóò tẹ̀lé wọn. Ó sọ nipa Àṣẹ Nla ti Kristi fún àwọn ọmọ Ẹ̀yìn Rẹ láti tan ìhìn ìgbàlà."
    }
  },
  113: {
    title: {
      en: "We Have Heard the Joyful Sound",
      yo: "A ti gbọ́ ohùn ayọ̀",
      fr: "Nous avons entendu le son joyeux",
      eg: "A ti gbọ́ ohùn ayọ̀"
    },
    lyrics: {
      en: `
1. We have heard the joyful sound:<br>
Jesus saves! Jesus saves!<br>
Spread the tidings all around:<br>
Jesus saves! Jesus saves!<br>
Bear the news to ev'ry land,<br>
Climb the steeps and cross the waves;<br>
Onward! 'tis our Lord's command;<br>
Jesus saves! Jesus saves!<br><br>

2. Waft it on the rolling tide:<br>
Jesus saves! Jesus saves!<br>
Tell to sinners far and wide:<br>
Jesus saves! Jesus saves!<br>
Sing, ye islands of the sea;<br>
Echo back, ye ocean caves;<br>
Earth shall keep her jubilee:<br>
Jesus saves! Jesus saves!<br><br>

3. Sing above the battle strife:<br>
Jesus saves! Jesus saves!<br>
By His death and endless life:<br>
Jesus saves! Jesus saves!<br>
Sing it softly through the gloom,<br>
When the heart for mercy craves;<br>
Sing in triumph o'er the tomb:<br>
Jesus saves! Jesus saves!<br><br>

4. Give the winds a mighty voice:<br>
Jesus saves! Jesus saves!<br>
Let the nations now rejoice:<br>
Jesus saves! Jesus saves!<br>
Shout salvation full and free,<br>
Highest hills and deepest caves;<br>
This our song of victory:<br>
Jesus saves! Jesus saves!<br>
      `,
      yo: `1. A ti gbọ́ ohùn ayọ̀:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Tẹ̀síwájú ìhìn gbogbo:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Tú ìhìn náà kalẹ̀ sí gbogbo ilẹ̀,<br>
Gùn àgọ́ àti kọja omi;<br>
Tẹ̀síwájú! Àṣẹ Olúwa wa ni;<br>
Jésù yóò gbà! Jésù yóò gbà!<br><br>

2. Fà á lori ìtàn-omi:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Sọ fún àwọn sinners pẹ̀lú àìmọ̀:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Kí ẹ ṣíkọ̀ọ́, àwọn ẹ̀dá ti okè;<br>
Dáhùn àtẹ̀sẹ̀, àwọn ẹ̀ṣọ̀ omi;<br>
Ilẹ̀ yóò ṣe ìkópa ayọ̀:<br>
Jésù yóò gbà! Jésù yóò gbà!<br><br>

3. Kí ẹ sọ nípa idà tí ogun:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Nípasẹ̀ ikú Rẹ àti ìyè aláìnípin,<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Sọ ní ìdákẹ́jẹ̀ kọjá ìbànújẹ,<br>
Nígbà tí ọkan fẹ́ ìbáṣepọ̀;<br>
Sọ ni ìṣẹ́gun nípa ibè:<br>
Jésù yóò gbà! Jésù yóò gbà!<br><br>

4. Fun afẹ́fẹ́ ni ohùn alágbára:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Kí orílẹ̀-èdè ní inú-dídùn:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Kí ẹ kọ ìgbàlà tí o kún fun ìfẹ́ àti ọ̀fẹ́,<br>
Òkè tó ga jùlọ àti awọn ibi tó jinlẹ̀;<br>
Ẹyin ni orin wa ti ìṣẹ́gun:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
      `,
      fr: `
1. Nous avons entendu le son joyeux :<br>
Jésus sauve ! Jésus sauve !<br>
Répandez la nouvelle partout :<br>
Jésus sauve ! Jésus sauve !<br>
Apportez la nouvelle dans tous les pays,<br>
Grimpez les collines et traversez les vagues ;<br>
En avant ! C'est l'ordre de notre Seigneur ;<br>
Jésus sauve ! Jésus sauve !<br><br>

2. Portez-le sur la mer roulante :<br>
Jésus sauve ! Jésus sauve !<br>
Dites-le aux pécheurs loin et large :<br>
Jésus sauve ! Jésus sauve !<br>
Chantez, ô îles de la mer ;<br>
Répétez, ô cavernes des océans ;<br>
La terre gardera son jubilaire :<br>
Jésus sauve ! Jésus sauve !<br><br>

3. Chantez au-dessus des luttes de bataille :<br>
Jésus sauve ! Jésus sauve !<br>
Par Sa mort et Sa vie éternelle :<br>
Jésus sauve ! Jésus sauve !<br>
Chantez-le doucement à travers l'obscurité,<br>
Quand le cœur implore la miséricorde ;<br>
Chantez dans la victoire sur le tombeau :<br>
Jésus sauve ! Jésus sauve !<br><br>

4. Donnez à l'air une voix puissante :<br>
Jésus sauve ! Jésus sauve !<br>
Laissez les nations maintenant se réjouir :<br>
Jésus sauve ! Jésus sauve !<br>
Criez le salut plein et gratuit,<br>
Les collines les plus élevées et les grottes les plus profondes ;<br>
C'est notre chant de victoire :<br>
Jésus sauve ! Jésus sauve !<br>
      `,
      eg: `1. A ti gbọ́ ohùn ayọ̀:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Tẹ̀síwájú ìhìn gbogbo:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Tú ìhìn náà kalẹ̀ sí gbogbo ilẹ̀,<br>
Gùn àgọ́ àti kọja omi;<br>
Tẹ̀síwájú! Àṣẹ Olúwa wa ni;<br>
Jésù yóò gbà! Jésù yóò gbà!<br><br>

2. Fà á lori ìtàn-omi:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Sọ fún àwọn sinners pẹ̀lú àìmọ̀:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Kí ẹ ṣíkọ̀ọ́, àwọn ẹ̀dá ti okè;<br>
Dáhùn àtẹ̀sẹ̀, àwọn ẹ̀ṣọ̀ omi;<br>
Ilẹ̀ yóò ṣe ìkópa ayọ̀:<br>
Jésù yóò gbà! Jésù yóò gbà!<br><br>

3. Kí ẹ sọ nípa idà tí ogun:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Nípasẹ̀ ikú Rẹ àti ìyè aláìnípin,<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Sọ ní ìdákẹ́jẹ̀ kọjá ìbànújẹ,<br>
Nígbà tí ọkan fẹ́ ìbáṣepọ̀;<br>
Sọ ni ìṣẹ́gun nípa ibè:<br>
Jésù yóò gbà! Jésù yóò gbà!<br><br>

4. Fun afẹ́fẹ́ ni ohùn alágbára:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Kí orílẹ̀-èdè ní inú-dídùn:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
Kí ẹ kọ ìgbàlà tí o kún fun ìfẹ́ àti ọ̀fẹ́,<br>
Òkè tó ga jùlọ àti awọn ibi tó jinlẹ̀;<br>
Ẹyin ni orin wa ti ìṣẹ́gun:<br>
Jésù yóò gbà! Jésù yóò gbà!<br>
      `
    },
    writeUp: {
      en: "This hymn celebrates the message of salvation, proclaiming that Jesus saves and calling all to spread the good news throughout the world.",
      yo: "Hymn yi n ṣe ayẹyẹ ìhìn ìgbàlà, tí ó ń kede pé Jésù yóò gbà, tí ó sì ń pe gbogbo ènìyàn láti tan ìhìn ayọ̀ káàkiri ayé.",
      fr: "Ce cantique célèbre le message du salut, proclamant que Jésus sauve et appelant tous à répandre la bonne nouvelle dans le monde entier.",
      eg: "Hymn yi n ṣe ayẹyẹ ìhìn ìgbàlà, tí ó ń kede pé Jésù yóò gbà, tí ó sì ń pe gbogbo ènìyàn láti tan ìhìn ayọ̀ káàkiri ayé."
    }
  },
  114: {
    title: {
      en: "Sinners Jesus will receive",
      yo: "Ẹlẹṣẹ, Jesu yóó gbà yín",
      fr: "Pécheurs, Jésus vous recevra"
    },
    lyrics: {
      en: `
1 Sinners Jesus will receive:<br>
Sound this word of grace to all<br>
Who the heav'nly pathway leave,<br>
All who linger, all who fall.<br><br>

Chorus:<br>
Sing it o'er (Sing it o'er again)<br>
and o'er again:(Sing it o'er again:)<br>
Christ receiveth (Christ receiveth sinful men)<br>
sinful men. (Christ receiveth sinful men)<br>
Make the message (Make the message clear and plain)<br>
clear and plain: (Make the message clear and plain)<br>
Christ receiveth sinful men.<br><br>

2 Come, and He will give you rest;<br>
Trust Him, for His word is plain;<br>
He will take the sinfulest;<br>
Christ receiveth sinful men. [Chorus]<br><br>

3 Now my heart condemns me not,<br>
Pure before the law I stand;<br>
He who cleansed me from all spot<br>
Satisfied its last demand. [Chorus]<br><br>

4 Christ receiveth sinful men,<br>
Even me with all my sin;<br>
Purged from ev’ry spot and stain,<br>
Heav’n with Him I enter in. [Chorus]<br><br>
      `,
      yo: `
1 Ẹlẹṣẹ, Jesu yóó gbà yín:<br>
Kede ifẹ-ọfẹ Rẹ sí gbogbo eniyan,<br>
Awon ti o fi ọna ọrun silẹ,<br>
Ati gbogbo awọn ti o bajẹ.<br><br>

Korosi:<br>
Ma kọ sọdọ rẹ lẹẹkansii,<br>
Kristi yóó gbà gbogbo ẹlẹṣẹ,<br>
Fi ifiranṣẹ han kedere:<br>
Kristi yóó gbà gbogbo ẹlẹṣẹ.<br><br>

2 Wá, On yóó fun ọ ní isimi;<br>
Gbekele Re, Oro Rẹ kedere;<br>
On yóó gbà ẹlẹṣẹ ti o buruju julo;<br>
Kristi yóó gbà gbogbo ẹlẹṣẹ. [Korosi]<br><br>

3 Bayi okan mi ko fi mi lẹbi mọ,<br>
Mo duro ni mimọ labe ofin;<br>
Ẹni ti o sọ mi di mimọ<br>
Ti fọwọ ofin dun. [Korosi]<br><br>

4 Kristi yóó gbà gbogbo ẹlẹṣẹ,<br>
Paapọ mọ mi pelu gbogbo ẹṣẹ mi;<br>
Ti a sọ di mimọ kuro ninu gbogbo abawọn,<br>
Mo wọ ọrun pelu Re. [Korosi]<br><br>
      `,
      fr: `
1 Pécheurs, Jésus vous recevra:<br>
Annoncez cette parole de grâce à tous,<br>
Ceux qui quittent le chemin du ciel,<br>
Tous ceux qui hésitent, tous ceux qui tombent.<br><br>

Refrain:<br>
Chantez-le encore et encore,<br>
Christ reçoit les pécheurs.<br>
Rendez le message clair et simple:<br>
Christ reçoit les pécheurs.<br><br>

2 Venez, et Il vous donnera du repos;<br>
Faites-lui confiance, car Sa parole est claire;<br>
Il acceptera même le plus pécheur;<br>
Christ reçoit les pécheurs. [Refrain]<br><br>

3 Maintenant mon cœur ne me condamne plus,<br>
Pur devant la loi je me tiens;<br>
Celui qui m’a purifié de toute tache<br>
A satisfait à sa dernière exigence. [Refrain]<br><br>

4 Christ reçoit les pécheurs,<br>
Même moi avec tous mes péchés;<br>
Purifié de toute tache et souillure,<br>
Avec Lui j’entre au ciel. [Refrain]<br><br>
      `
    },
    writeUp: {
      en: "This hymn assures sinners of Jesus' willingness to receive them, emphasizing grace and redemption.",
      yo: "Orin yi fi idaniloju fun awon ẹlẹṣẹ pe Jesu yóó gbà wọn, nfihan ifẹ-ọfẹ ati igbala.",
      fr: "Ce cantique assure aux pécheurs que Jésus les recevra, mettant l'accent sur la grâce et la rédemption."
    }
  },
  115: {
    title: {
      en: "Once a sinner far from Jesus",
      yo: "Ẹlẹṣẹ kan ti o jina si Jesu",
      fr: "Autrefois un pécheur loin de Jésus"
    },
    lyrics: {
      en: `
1 Once a sinner far from Jesus,<br>
I was perishing with cold;<br>
But the blessed Savior heard me<br>
When I cried in faith, behold.<br><br>

Chorus:<br>
He is able, He is able,<br>
I know my Lord is able<br>
To carry me through.<br>
He is able, He is able,<br>
I know my Lord is able<br>
To carry me through.<br><br>

2 He healed the brokenhearted,<br>
And He set the captive free;<br>
He made the lame to walk again,<br>
And He caused the blind to see. [Chorus]<br><br>

3 He forgave my every sin,<br>
And He washed me white as snow;<br>
Now His grace so rich and free,<br>
Makes my heart within me glow. [Chorus]<br><br>
      `,
      yo: `
1 Ẹlẹṣẹ kan ti o jina si Jesu,<br>
Mo n banujẹ ninu egbon;<br>
Sugbon Olugbala ti gbọ mi<br>
Nigbati mo kigbe ninu igbagbo.<br><br>

Korosi:<br>
O lagbara, O lagbara,<br>
Mo mọ pe Oluwa mi lagbara<br>
Lati gbe mi kọja.<br>
O lagbara, O lagbara,<br>
Mo mọ pe Oluwa mi lagbara<br>
Lati gbe mi kọja.<br><br>

2 O mu ọkan ti o fọ larada,<br>
O si sọ ẹlẹwọn di ominira;<br>
O mu arọ lati rin pada,<br>
O si fun òfọfo ni iran. [Korosi]<br><br>

3 O dariji gbogbo ẹṣẹ mi,<br>
O si sọ mi di funfun bi egbon;<br>
Bayi ore-ọfẹ Rẹ ti o pọ<br>
Mu ọkan mi nmọlẹ. [Korosi]<br><br>
      `,
      fr: `
1 Autrefois un pécheur loin de Jésus,<br>
Je périssais dans le froid;<br>
Mais le Sauveur bien-aimé m'a entendu<br>
Quand j'ai crié dans la foi, voici.<br><br>

Refrain:<br>
Il est capable, Il est capable,<br>
Je sais que mon Seigneur est capable<br>
De me porter à travers.<br>
Il est capable, Il est capable,<br>
Je sais que mon Seigneur est capable<br>
De me porter à travers.<br><br>

2 Il guérit les cœurs brisés,<br>
Et Il a libéré les captifs;<br>
Il a fait marcher les boiteux,<br>
Et Il a rendu la vue aux aveugles. [Refrain]<br><br>

3 Il a pardonné tous mes péchés,<br>
Et Il m’a rendu blanc comme neige;<br>
Maintenant Sa grâce si riche et libre,<br>
Fait briller mon cœur en moi. [Refrain]<br><br>
      `
    },
    writeUp: {
      en: "This hymn tells the story of a sinner saved by Jesus' love and power, emphasizing His ability to transform lives.",
      yo: "Orin yi sọ itan ti ẹlẹṣẹ ti Jesu gba, nfihan agbara ati ifẹ Rẹ lati yi aye pada.",
      fr: "Ce cantique raconte l'histoire d'un pécheur sauvé par l'amour et la puissance de Jésus, soulignant Sa capacité à transformer des vies."
    }
  },
   116: {
    title: {
      en: "I Hear Thy Welcome Voice", 
      yo: "Gbogbo aye, gbe Jesu ga.",
      fr: "Grâce étonnante"
    },
    lyrics: {
      en: `
1
I hear Thy welcome voice<br>
that calls me by Your will,<br>  
for cleansing in Your precious blood<br>  
that flowed on Calvary's hill.  
<br><br>
Refrain  
I am coming, Lord,<br>  
coming by Your will:<br>  
wash me, cleanse me, by the blood<br>  
that flowed on Calvary's hill.<br>  
<br><br>
2  
’Tis Jesus calls me on<br>  
to perfect faith and love,<br>  
to perfect hope, and peace, and trust,<br>  
for earth and heaven above. [Refrain]  
<br><br>
3  
’Tis Jesus who confirms<br>  
the blessèd work within,<br>  
by adding grace to welcomed grace,<br>  
where reigned the power of sin. [Refrain]  
<br><br>
4  
All hail, atoning blood!<>br  
All hail, redeeming grace!<br>  
All hail, the gift of Christ our Lord,<br>   
our strength and righteousness! [Refrain]<br><br>  
      `,
      yo: `...`, // original or updated Yoruba lyrics go here
      fr: `...`, // original or updated French lyrics go here
      eg: `...`  // original or updated 'eg' lyrics go here
    },
    writeUp: {
      en: "This hymn expresses the believer’s response to Jesus’ invitation to come and be cleansed by His blood, emphasizing grace, faith, and redemption.",
      yo: "Hymn yi n sọ idahun onigbagbọ si ipe Jesu lati wa ki a si sọ di mimọ nipase eje Rẹ, ni idojukọ ore-ọfẹ, igbagbọ ati irapada.",
      fr: "Ce cantique exprime la réponse du croyant à l'appel de Jésus à venir et à être purifié par Son sang, mettant en avant la grâce, la foi et la rédemption.",
      eg: "Afaŋka yi n sọ idahun si ipe Jesu lati wa fun isọdọmọ nipase eje Rẹ, pẹlu idojukọ lori ore-ọfẹ, igbagbọ ati irapada."
    }
  },
  117: {
    title: {
      en: "I Am Coming to Jesus for Rest",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
I am coming to Jesus for rest;<br>   
Rest, such as the purified know;<br>   
My soul is athirst to be blest,<br>   
To be washed and made whiter than snow.  
<br><br>
CHORUS:  
I believe Jesus saves,<br>   
And His blood washes whiter than snow,<br>   
I believe Jesus saves,<br>   
And His blood washes whiter than snow.  
<br><br>
2.  
In coming, my sin I deplore,<br>   
My weakness and poverty show;<br>   
I long to be saved ever more,<br>   
To be washed and made whiter than snow.<br>   
<br><br>
CHORUS  
I believe Jesus saves,<br>   
And His blood washes whiter than snow,<br>   
I believe Jesus saves,<br>   
And His blood washes whiter than snow.<br>   
<br><br>
3.  
To Jesus I give up all,<br>   
Ev’ry treasure and idol I know;<br>   
For His fullness of blessing I call,<br>   
Till His blood washes whiter than snow.  
<br><br>
CHORUS  
I believe Jesus saves,<br>   
And His blood washes whiter than snow,<br>   
I believe Jesus saves,<br>   
And His blood washes whiter than snow.<br>   
<br><br>
4.  
I am trusting in Jesus alone;<br>   
Trusting now His salvation to know,<br>   
And His blood doth so fully atone,<br>   
I am washed and made whiter than snow.  
<br><br>
CHORUS  
I believe Jesus saves,<br>   
And His blood washes whiter than snow,<br>   
I believe Jesus saves,<br>   
And His blood washes whiter than snow. 
<br><br>
5.  
My heart is in raptures of love,<br>    
Love, such as the ransomed ones know:<br>    
I am strengthened with might from above!<br>    
I am washed and made white than snow.  
<br><br>
CHORUS  
I believe Jesus saves,<br>    
And His blood washes whiter than snow,<br>    
I believe Jesus saves,<br>    
And His blood washes whiter than snow.    
<br><br>
Amen.
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn is a heartfelt declaration of a sinner’s trust in Jesus for cleansing and rest, emphasizing surrender, faith, and the power of Christ's atoning blood.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
   118: {
    title: {
      en: "I Hear the Saviour Say",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
I hear the Saviour say,<br>  
“Thy strength indeed is small<br>  
Child of weakness, watch and pray,<br>  
Find in Me thine all in all.”
<br><br>
CHORUS:  
Jesus paid it all;<br>    
All to Him I owe,<br>    
Sin has left a crimson stain,<br>    
He washed it white as snow.  
<br><br>
2.  
Lord, now indeed I find,<br>    
Thy power, and Thine alone,<br>    
Can change the leper’s spots,<br>    
And melt the heart of stone.   
<br><br>
CHORUS:  
Jesus paid it all;<br>   
All to Him I owe,<br>   
Sin has left a crimson stain,<br>   
He washed it white as snow.  
<br><br>
3.  
For nothing good have I,<br>   
Whereby Thy grace to claim,<br>  
I’ll wash my garments white,<br>   
In the blood of Calvary’s Lamb.  
<br><br>
CHORUS:  
Jesus paid it all;<br>   
All to Him I owe,<br>   
Sin has left a crimson stain,<br>   
He washed it white as snow.  
<br><br>
4.  
And when before the throne,<br>   
I stand in Him complete,<br>   
“Jesus died my soul to save,”<br>   
My lips shall still repeat.  
<br><br>
CHORUS:  
Jesus paid it all;<br>   
All to Him I owe,<br>   
Sin has left a crimson stain,<br>   
He washed it white as snow.  
<br><br>
Amen.
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn reflects on the atoning sacrifice of Jesus Christ and emphasizes the believer’s gratitude for the cleansing power of His blood.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
    119: {
    title: {
      en: "I Have Found His Grace Is All Complete",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
I have found His grace is all complete;<br>   
He supplieth every need.<br>   
While I sit and learn at Jesus’ feet,<br>   
I am free, yes, free indeed.  
<br><br>
Refrain:  
It is joy unspeakable and full of glory,<br>   
Full of glory, full of glory.<br>   
It is joy unspeakable and full of glory;<br>   
O the half has never yet been told!  
<br><br>
2.  
I have found the pleasure I once craved;<br>   
It is joy and peace within.<br>   
What a wondrous blessing! I am saved<br>   
From the awful gulf of sin. [Refrain]  
<br><br>
3.  
I have found that hope so bright and clear,<br>   
Living in the realm of grace.<br>   
O the Savior’s presence is so near;<br>   
I can see His smiling face. [Refrain]  
<br><br>
4.  
I have found the joy no tongue can tell,<br>   
How its waves of glory roll!<br>   
It is like a great o’erflowing well,<br>   
Springing up within my soul. [Refrain]<br><br>    
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn celebrates the abundant joy, peace, and grace that come from knowing Christ, highlighting the transformative power of His presence.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
  120: {
    title: {
      en: "As I Journey Through the Land",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
As I journey through the land; singing as I go,<br>   
Pointing souls to Calvary, to the crimson flow,<br>   
Many arrows pierce my soul, from without, within,<br>   
But my Lord leads me on; through Him I must win.  
<br><br>
CHORUS:  
Oh, I want to see Him, look upon His face,<br>  
There to sing forever of His saving grace!<br>   
On the streets of glory, let me lift my voice,<br>   
Cares all past; home at last, ever to rejoice.  
<br><br>
2.  
When in service for my Lord, dark may be the night,<br>   
But I’ll cling more close to Him; He will give me light;<br>   
Satan’s snares may vex my soul, turn my thoughts aside,<br>   
But my Lord goes ahead, leads what e’er betide.  
<br><br>
CHORUS:  
Oh, I want to see Him, look upon His face,<br>   
There to sing forever of His saving grace!<br>   
On the streets of glory, let me lift my voice,<br>   
Cares all past; home at last, ever to rejoice.  
<br><br>
3.  
When in valleys low, I look towards the mountain height,<br>   
And behold my Saviour there, leading in the fight,<br>   
With a tender hand outstretched towards the valleys low,<br>   
Guiding me, I can see, as I onward go.  
<br><br>
CHORUS:  
Oh, I want to see Him, look upon His face,<br>   
There to sing forever of His saving grace!<br>   
On the streets of glory, let me lift my voice,<br>   
Cares all past; home at last, ever to rejoice.  
<br><br>
4.  
When before me billows rise from the mighty deep,<br>   
Then my Lord directs my back; He doth safely keep,<br>   
And He leads me gently on through this world below,<br>   
He’s a real Friend to me; oh, I love Him so!<br><br>    
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn expresses the believer's journey of faith, joy in seeing Jesus, and trust in His guidance and protection through life's struggles.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
   121: {
    title: {
      en: "Would You Be Free from Your Burden of Sin?",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
Would you be free from your burden of sin?<br>   
There’s pow’r in the blood, Power in the blood,<br>    
Would you o’er evil a victory win?<br>    
There’s pow’r in the blood.  
<br><br>
CHORUS:  
There’s pow’r, pow’r<br>    
Wonder-working pow’r<br>    
In the blood of the Lamb<br>   
There’s pow’r, pow’r<br>    
Wonder-working pow’r <br>   
In the blood of the Lamb.  
<br><br>
2.  
Would you be free from your passion and pride;<br>    
There’s pow’r in the blood, Pow’r in the blood;<br>    
Come for a cleansing to Calvary tide; <br>   
There’s wonderful pow’r in the blood.   
<br><br>
CHORUS:  
There’s pow’r, pow’r<br>   
Wonder-working pow’r<br>   
In the blood of the Lamb<br>   
There’s pow’r, pow’r<br>   
Wonder-working pow’r <br>  
In the blood of the Lamb.  
<br><br>
3.  
Would you be whit-er, much than snow;<br>   
There’s power in the blood, pow’r in the blood;<br>   
Sins stains are lost in its life-giving flow;<br>   
There’s wonderful power in the blood.  
<br><br>
CHORUS:  
There’s pow’r, pow’r<br>   
Wonder-working pow’r  
In the blood of the Lamb<br>   
There’s pow’r, pow’r<br>   
Wonder-working pow’r<br>   
In the blood of the Lamb.  
<br><br>
4.  
Would you do service for Jesus your King?<br>   
There’s pow’r in the blood, pow’r in the blood; <br>  
Would you live daily His praise to sing?<br>   
There’s wonderful power in the blood.  
<br><br>
CHORUS:  
There’s pow’r, pow’r<br>   
Wonder-working pow’r<br>   
In the blood of the Lamb<br>   
There’s pow’r, pow’r <br>  
Wonder-working pow’r<br>   
In the blood of the Lamb.  
<br><br>
Amen.  
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn celebrates the power of the blood of Jesus, offering freedom, cleansing, and victory over sin and evil.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
  122: {
    title: {
      en: "Have You Been to Jesus for the Cleansing Power?",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
Have you been to Jesus for the cleansing power? <br>  
Are you washed in the blood of the Lamb?<br>   
Are you fully trusting in His grace this hour?<br>   
Are you washed in the blood of the Lamb?  
<br><br>
Chorus:  
Are you washed in the blood,<br>   
In the soul-cleansing blood of the Lamb?<br>   
Are your garments spotless?<br>   
Are they white as snow?<br>   
Are you washed in the blood of the Lamb?  
<br><br>
2.  
Are you walking daily by the Savior's side?<br>   
Are you washed in the blood of the Lamb?<br>   
Do you rest each moment in the Crucified?<br>   
Are you washed in the blood of the Lamb?  
<br><br>
[Chorus]  
<br><br>
3.  
When the Bridegroom cometh will your robes be white? <br> 
Are you washed in the blood of the Lamb? <br> 
Will your soul be ready for the mansions bright,<br>  
And be washed in the blood of the Lamb?<br>  
<br><br>
[Chorus]  
<br><br>
4.  
Lay aside the garments that are stained with sin,<br>  
And be washed in the blood of the Lamb;<br>  
There's a fountain flowing for the soul unclean,<br>  
O be washed in the blood of the Lamb!  
<br><br>
[Chorus]  
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn invites believers to experience the cleansing power of Jesus' blood, offering purity and readiness for His return.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
    123: {
    title: {
      en: "Sing the Wondrous Love of Jesus",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
Sing the wondrous love of Jesus,<br>  
Sing His mercy and His grace;<br>  
In the mansions bright and blessed<br>  
He'll prepare for us a place.  
<br><br>
Refrain:  
When we all get to heaven,<br>  
what a day of rejoicing that will be!<br>  
When we all see Jesus,<br>  
we'll sing and shout the victory!  
<br><br>
2.  
While we walk the pilgrim pathway <br> 
Clouds will overspread the sky;<br>  
But when trav'ling days are over <br> 
Not a shadow, not a sigh.  
[Refrain]  
<br><br>
3.  
Let us then be true and faithful,<br>  
Trusting, serving ev'ry day; <br> 
Just one glimpse of Him in glory <br> 
Will the toils of life repay.  
[Refrain]  
<br><br>
4.  
Onward to the prize before us!<br>  
Soon His beauty we'll behold;<br>  
Soon the pearly gates will open–<br>  
We shall tread the streets of gold.<br>  
[Refrain]  
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn celebrates the hope and joy of heaven, reminding believers of the eternal victory and glory that awaits in Jesus.",
      yo: "",
      fr: "",
      eg: ""
    }
  },
    124: {
    title: {
      en: "I Need Thee, Precious Jesus",
      yo: "",
      fr: "",
      eg: ""
    },
    lyrics: {
      en: `
1.  
I need Thee, precious Jesus,<br>  
For I am full of sin;<br>  
My soul is dark and guilty,<br>  
My heart is dead within, <br> 
I need the cleansing fountain;<br>  
Where I can always flee,<br>  
The blood of Christ most precious,<br>  
The sinner’s perfect plea.  
<br><br>
2.  
I need Thee, precious Jesus,<br>  
For I am very poor,<br>  
A stranger and a pilgrim,<br>  
I have no earthly store:<br> 
I need the love of Jesus <br> 
To cheer me on my way,<br>  
To guide my doubting footsteps,<br>  
To be my strength and stay. <br> 
<br><br>
3.  
I need Thee, precious Jesus,<br>  
I need a friend like Thee,<br>  
A friend to soothe and pity,<br> 
A friend to care for me,<br>  
I need the heart of Jesus, <br> 
To feel each anxious care, <br> 
To tell my every trouble <br> 
And all my sorrows share.  
<br><br>
4.  
I need Thee, precious Jesus,<br>  
I need Thee, day by day,<br>  
To fill me with thy fullness,<br>  
To lead my on my way,  <br>
I need the Holy Spirit, <br> 
To teach me what I am, <br> 
To show me more of Jesus,<br>  
To point me to the Lamb.<br><br>  
      `,
      yo: "",
      fr: "",
      eg: ""
    },
    writeUp: {
      en: "This hymn expresses the deep spiritual longing for Jesus’ presence and guidance, calling on His love, cleansing power, and friendship.",
      yo: "",
      fr: "",
      eg: ""
    }
  },  
};

const languageData = {
  en: {
    enterNumber: "Enter Hymn Number",
    selectLanguage: "Select Language",
    findHymn: "Find Hymn"
  },
  yo: {
    enterNumber: "Tẹ nọmba hymn",
    selectLanguage: "Yan Ede",
    findHymn: "Wa Hymn"
  },
  eg: {
    enterNumber: "Yete Numoro Hymn",
    selectLanguage: "Ayan Ede",
    findHymn: "Wa Hymn"
  },
  fr: {
    enterNumber: "Entrez le numéro de l'hymne",
    selectLanguage: "Choisir la langue",
    findHymn: "Trouver l'hymne"
  }
};
