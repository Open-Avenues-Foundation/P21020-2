const customers = [
    {
      "A": "Email",
      "B": "First Name",
      "C": "Last Name",
      "D": "Phone number",
      "E": "City",
      "F": "State",
      "G": "Last Order Price",
      "H": "Last Order Date"
    },
    {
      "A": "spa,dkins@att.net",
      "B": "Giovanny",
      "C": "Atkinson",
      "D": "(401)433-3114",
      "E": "Warner",
      "F": "NH",
      "G": "35",
      "H": "44420"
    },
    {
      "A": "zilla@optonline.net",
      "B": "Olive",
      "C": "Lang",
      "D": "(618)472-3603",
      "E": "East Natchitoches",
      "F": "",
      "G": "120",
      "H": "44424"
    },
    {
      "A": "harryh@icloud.com",
      "B": "Santiago",
      "C": "Riddle",
      "D": "(425)423-4138",
      "E": "Lyon",
      "F": "WV",
      "G": "12",
      "H": "44434"
    },
    {
      "A": "marslo@aol.co",
      "B": "Marcel",
      "C": "Sloan",
      "D": "(616)889-7721",
      "E": "Willow Run",
      "F": "IL",
      "G": "89.99",
      "H": "44448"
    },
    {
      "A": "wkrebs@sbcglobal.net",
      "B": "Drake",
      "C": "Rebs",
      "D": "(219)683-8767",
      "E": "Conyersville",
      "F": "AZ",
      "G": "44",
      "H": "44456"
    },
    {
      "A": "sopwith@aol.com",
      "B": "James",
      "C": "Randolph",
      "D": "(507)623-3577",
      "E": "Mount Baker",
      "F": "NY",
      "G": "45",
      "H": "44462"
    },
    {
      "A": "gavinls@sbcglobal.net",
      "B": "Gavin",
      "C": "Obrien",
      "D": "(786)441-2729",
      "E": "Farmington Lake",
      "F": "OK",
      "G": "95",
      "H": "44469"
    },
    {
      "A": "lstein@a  ol.com",
      "B": "Owen",
      "C": "Stein",
      "D": "(769)355-5422",
      "E": "Martins Corner",
      "F": "TX",
      "G": "32",
      "H": "44475"
    },
    {
      "A": "dgatwood@optonline.net",
      "B": "Nelson",
      "C": "Silva",
      "D": "(303)961-5760",
      "E": "Pickerel Narrows",
      "F": "MT",
      "G": "13.99",
      "H": "44484"
    },
    {
      "A": "danzigis,m@icloud.com",
      "B": "Dan",
      "C": "Zigi",
      "D": "(256)931-9696",
      "E": "Willaha",
      "F": "OH",
      "G": "12",
      "H": "44490"
    },
    {
      "A": "bcevc@icloud.com",
      "B": "Rodrigo",
      "C": "Cuevas",
      "D": "(308)204-9038",
      "E": "Center",
      "F": "MA",
      "G": "11",
      "H": "44495"
    },
    {
      "A": "frederic@sbcglobal.net",
      "B": "Frederic",
      "C": "Lee",
      "D": "(205)365-8292",
      "E": "Spring City",
      "F": "MS",
      "G": "87",
      "H": "44496"
    },
    {
      "A": "bockelboy  @me.com",
      "B": "Joyce",
      "C": "Frank",
      "D": "(319)635-4374",
      "E": "Mittenlane",
      "F": "TX",
      "G": "49.99",
      "H": "44497"
    },
    {
      "A": "pereinar@sbcglobal.net",
      "B": "Korbin",
      "C": "Pereinar",
      "D": "(415)572-8494",
      "E": "East Waterford",
      "F": "ME",
      "G": "22",
      "H": "44498"
    },
    {
      "A": "rddesign@live.com",
      "B": "Howard",
      "C": "Carrillo",
      "D": "(289)672-8870",
      "E": "Coltman",
      "F": "WV",
      "G": "12",
      "H": "44503"
    },
    {
      "A": "naoya@msn.co,",
      "B": "Nayomi",
      "C": "Dawson",
      "D": "(276)335-6240",
      "E": "Scottsville",
      "F": "",
      "G": "12",
      "H": "44509"
    },
    {
      "A": "jesse@sbcglobal.net",
      "B": "Jesse",
      "C": "Hahn",
      "D": "(231)823-9734",
      "E": "Hebron",
      "F": "AZ",
      "G": "49.99",
      "H": "44510"
    },
    {
      "A": "syrinx@optonline.net",
      "B": "Meadow",
      "C": "Berger",
      "D": "(670)233-6224",
      "E": "Longview",
      "F": "MA",
      "G": "85",
      "H": "44522"
    },
    {
      "A": "presoff@ms'n.com",
      "B": "Whitney",
      "C": "Shelton",
      "D": "(334)201-6824",
      "E": "Emerson",
      "F": "MT",
      "G": "116",
      "H": "44531"
    },
    {
      "A": "bachmann@hotmail.com",
      "B": "Paris",
      "C": "Mann",
      "D": "(336)283-4614",
      "E": "North Knoxville",
      "F": "AL",
      "G": "16",
      "H": "44533"
    },
    {
      "A": "joelw@yahoo.ca",
      "B": "Joel",
      "C": "Schaefer",
      "D": "(336)877-9176",
      "E": "Ipswich",
      "F": "IA",
      "G": "11",
      "H": "44537"
    },
    {
      "A": "joelw@yahoo.ca",
      "B": "Joel",
      "C": "Schaefer",
      "D": "(336)877-9176",
      "E": "Ipswich",
      "F": "IA",
      "G": "76.99",
      "H": "44543"
    },
    {
      "A": "fviegas@mac.com",
      "B": "Rafael",
      "C": "Viegas",
      "D": "(214)969-3080",
      "E": "Storms",
      "F": "TX",
      "G": "39",
      "H": "44552"
    },
    {
      "A": "trieuvan@aol.com",
      "B": "Santino",
      "C": "Cabrera",
      "D": "(747)900-6516",
      "E": "Kalauao",
      "F": "SD",
      "G": "87",
      "H": "44554"
    },
    {
      "A": "storerm@sbcglobal.net",
      "B": "Nayeli",
      "C": "Juarez",
      "D": "(657)378-3335",
      "E": "Farwell",
      "F": "FL",
      "G": "33",
      "H": "44560"
    },
    {
      "A": "cderoove@gmail.com",
      "B": "Zaiden",
      "C": "Duran",
      "D": "(618)231-7450",
      "E": "Brentwood Village",
      "F": "MT",
      "G": "45",
      "H": "44418"
    },
    {
      "A": "intlprog@hotmail.com",
      "B": "Jamie",
      "C": "Martinez",
      "D": "(617)889-8674",
      "E": "Wilhelm Park",
      "F": "MT",
      "G": "54",
      "H": "44420"
    },
    {
      "A": "jaffe...@verizon.net",
      "B": "Charlize",
      "C": "Perez",
      "D": "(289)572-1200",
      "E": "Bannister Acres",
      "F": "MC",
      "G": "89.99",
      "H": "44432"
    },
    {
      "A": "lpalmer@icloud.com",
      "B": "Sara",
      "C": "Palmer",
      "D": "(217)657-9901",
      "E": "Bent Pine",
      "F": "VA",
      "G": "23",
      "H": "44433"
    },
    {
      "A": "ahwon@icloud.com",
      "B": "Alan",
      "C": "Won",
      "D": "(516)992-9423",
      "E": "Mitchell",
      "F": "AZ",
      "G": "33",
      "H": "44438"
    },
    {
      "A": "mrobshaw@outlook.com",
      "B": "Rob",
      "C": "Shaw",
      "D": "(615)221-5554",
      "E": "Social Circle",
      "F": "MO",
      "G": "54",
      "H": "44447"
    },
    {
      "A": "a~dhere@aol.com",
      "B": "Fisher",
      "C": "Here",
      "D": "(434)299-8652",
      "E": "Kreutzberg",
      "F": "NY",
      "G": "76.99",
      "H": "44456"
    },
    {
      "A": "malattia@yahoo.ca",
      "B": "Lucille",
      "C": "Malattia",
      "D": "(608)380-4822",
      "E": "Cimarron",
      "F": "WA",
      "G": "15",
      "H": "44462"
    },
    {
      "A": "jesse@sbcglobal.net",
      "B": "Jesse",
      "C": "Hahn",
      "D": "(231)823-9734",
      "E": "Brookhaven",
      "F": "",
      "G": "11",
      "H": "44463"
    },
    {
      "A": "errxn@sbcglobal.net",
      "B": "Jordyn",
      "C": "Mullen",
      "D": "(385)207-5077",
      "E": "Montverde Junction",
      "F": "NJ",
      "G": "28",
      "H": "44468"
    },
    {
      "A": "reziac@gmail.com",
      "B": "Marshall",
      "C": "Landry",
      "D": "(551)587-7297",
      "E": "Midland City",
      "F": "AK",
      "G": "28.45",
      "H": "44469"
    },
    {
      "A": "bonmots@comcast.net",
      "B": "Jaslene",
      "C": "Whitaker",
      "D": "(352)434-1651",
      "E": "Sacramento",
      "F": "ME",
      "G": "79.99",
      "H": "44477"
    },
    {
      "A": "munson@live.com",
      "B": "Arturo",
      "C": "Cisneros",
      "D": "(347)563-4789",
      "E": "Del Rey Oaks",
      "F": "RI",
      "G": "120",
      "H": "44480"
    },
    {
      "A": "rogerspl@mac.com",
      "B": "Roger",
      "C": "Brown",
      "D": "(323)298-3567",
      "E": "Coal Creek",
      "F": "OK",
      "G": "13.99",
      "H": "44489"
    },
    {
      "A": "mbrown@live.com",
      "B": "Shaniya",
      "C": "Brown",
      "D": "(208)255-2382",
      "E": "Rabbitown",
      "F": "TN",
      "G": "26",
      "H": "44510"
    },
    {
      "A": "wojciech@o..utlook.com",
      "B": "Rhianna",
      "C": "Armstrong",
      "D": "(575)628-5858",
      "E": "Fairland",
      "F": "GA",
      "G": "89.99",
      "H": "44511"
    },
    {
      "A": "meinkej@yahoo.com",
      "B": "Amelie",
      "C": "Mosley",
      "D": "(667)303-9303",
      "E": "Gaskil",
      "F": "DE",
      "G": "26",
      "H": "44517"
    },
    {
      "A": "pgottsch@mac.com",
      "B": "Esperanza",
      "C": "Knapp",
      "D": "(810)234-9251",
      "E": "Morgan Mill",
      "F": "OK",
      "G": "120",
      "H": "44518"
    },
    {
      "A": "murdocj@optonline.net",
      "B": "Murdoc",
      "C": "Wilkinson",
      "D": "(806)774-7884",
      "E": "Merrimac South",
      "F": "AL",
      "G": "76.99",
      "H": "44524"
    },
    {
      "A": "miyop@verizon.net",
      "B": "Reagan",
      "C": "Sweeney",
      "D": "(216)271-8398",
      "E": "Stanardsville",
      "F": "NH",
      "G": "13.99",
      "H": "44526"
    },
    {
      "A": "jtorkbob@comcast.net",
      "B": "Dahlia",
      "C": "Arellano",
      "D": "(618)691-4399",
      "E": "Two Brooks",
      "F": "WI",
      "G": "26",
      "H": "44530"
    },
    {
      "A": "louise'@me.com",
      "B": "Louise",
      "C": "Barber",
      "D": "(336)929-8671",
      "E": "Curriers",
      "F": "NM",
      "G": "89.99",
      "H": "44533"
    },
    {
      "A": "fukuchi@gmail.com",
      "B": "Jayden",
      "C": "Chi",
      "D": "(305)674-4548",
      "E": "Skookumchuck",
      "F": "VA",
      "G": "26",
      "H": "44537"
    },
    {
      "A": "andale@icloud.com",
      "B": "Andres",
      "C": "Ramon",
      "D": "(413)785-5626",
      "E": "Edgerton",
      "F": "RI",
      "G": "76.99",
      "H": "44550"
    },
    {
      "A": "webteam@msn.com",
      "B": "Kyan",
      "C": "Harper",
      "D": "(209)828-3279",
      "E": "Slater",
      "F": "MO",
      "G": "13.99",
      "H": "44553"
    }
   ]

   module.exports = customers