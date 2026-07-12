// ============================================================
//  KUDOS · WALL OF KINDNESS — RECIPIENT DATA
// ============================================================
//  This is the ONLY file you need to edit to add or change people.
//  The wall page reads from this list and builds a card for each.
//
//  All 25 RecognizeGood recipients are pre-filled below, with their
//  photos (in the images/ folder), descriptions, and real story links.
//
//  TO DO after sending each Kudos: paste that person's transaction
//  signature into their  tx: ""  field, and their card will show a
//  "Verify this recognition on Solana" link to the exact transaction.
//
//  FIELDS:
//    kudos_number  → their Kudos number (1–500). Must be unique.
//    name          → recipient's name as it should show.
//    description   → the 1–2 sentence "why" (what they did).
//    photo         → path to their photo, or "" to show initials.
//    program       → optional tag shown as a small label.
//    date          → optional, shows small on the card.
//    story_url     → link to their full story (already filled in).
//    tx            → Solana transaction signature (paste after you send).
// ============================================================

const RECIPIENTS = [

  {
    kudos_number: 1,
    name: "Mike Rogan",
    description: "Pitched in more than 1,500 volunteer hours — and counting — helping Ecology Action of Texas transform a closed municipal landfill into a robust nature preserve.",
    photo: "images/person 1.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/mike-rogan/",
    tx: "fYrRd2GJLKont4SNBc5HkNwJqybusiAfC9vjjeKACja2NhXcBAbW9RZATqqFAo78NXkrHeeASYd8Mg4u7bLbPCs"
  },

  {
    kudos_number: 2,
    name: "Gay Goforth",
    description: "After nearly 20 years serving unhoused neighbors often overlooked, Gay's volunteer impact through Open Door Ministry has helped feed, clothe and love those neighbors thousands of times.",
    photo: "images/person 2.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/gay-goforth/",
    tx: "55LLoyXMc6WZLuASAhNkqQ8TsYBXA6LPr6Tz5diaWsWv5kbAy1aBNwbN2EEvF8xEaY5FeQBPFTfPoCZTzbRExTE8"
  },

  {
    kudos_number: 3,
    name: "William Kerbey",
    description: "Every Saturday for the past 10 years, William has distributed hundreds of thousands of pounds of clothing and life's essentials to those experiencing homelessness through Kerbey's Clothing Ministry.",
    photo: "images/person 3.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/william-kerby/",
    tx: "3MPZe5xguMqQwWFCSd77nHSoHSbJLbL3YHT4E2VQbqjdMiP76J7wuibqYNUyhvrFJyD2iceFxN7xfeS3bgJ7zR5U"
  },

  {
    kudos_number: 4,
    name: "Laurie Loew",
    description: "Founded Give Realty, which donates 25% of broker commissions to the nonprofit of the client's choice — over $83,000 to Austin nonprofits in under three years.",
    photo: "images/person 4.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/laurie-loew/",
    tx: "53BzRWvU6bwPzXyMS7aDATEW6CFgAxGp7fQibe23hFsjDb9FNrYnXQnKSaWjrGyeeGsNmxAnSAb9ziZLsmFz7Y7L"
  },

  {
    kudos_number: 5,
    name: "Karen Clayton",
    description: "Karen's legacy of giving lives on in her grandchildren, who learned about service as she volunteered for years serving children in the foster system through Carrying Hope.",
    photo: "images/person 5.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/karen-clayton/",
    tx: "2DphYXng91Q2PsD1GfWmLjEne7K5sVvXmG3KXzdT7p9WYw9BCgcuW23B2VgS7a6Qz42jfNHLT2czzRS1tV2WxD"
  },

  {
    kudos_number: 6,
    name: "Danny Martin",
    description: "With nearly 170 volunteer hours, Danny has supported Capital Area Master Naturalists through restoration projects, research, clean-ups and training other volunteers.",
    photo: "images/person 6.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/danny-martin/",
    tx: "QkNvgAV7RbvXrNM23ktFx3J62HWwcRR1VkMqUwGDkyDm5WUUNtgccU4RzAuCNijBoXGj5QiZjYizgFtuwMgCPN8"
  },

  {
    kudos_number: 7,
    name: "Ann Barlow",
    description: "Ann has served the unhoused in Austin through The Charlie Center every Wednesday for several years, serving hot meals to nearly 16,000 clients.",
    photo: "images/person 7.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/ann-barlow/",
    tx: "65x1C2RD3QGgMD2rmPANkVvw79GhqTWNkyaTecnpPKD2Aztibi8tuxHRK4G2EncoDFJPuCXSZr5cfqac4MauDUTQ"
  },

  {
    kudos_number: 8,
    name: "Mike Metschan",
    description: "For over 25 years, Mike has devoted himself to children who have an incarcerated parent — as mentor and advocate he has helped raise more than $500,000 for Seedling.",
    photo: "images/person 8.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/mike-metschan/",
    tx: "3Gs3j6jp4ryS8RjjoCvy6RcEph6yacc2y4y8fxuB7gqb4wmam1rp5wRAoW42r5ZztxDn9sbwejFCBTccfzuKt8rS"
  },

  {
    kudos_number: 9,
    name: "Andy Harris & Matt Price",
    description: "For 15 years, Andy and Matt have served Austin's youth through baseball and mentorship, building 91 total teams throughout underprivileged communities in Austin.",
    photo: "images/person 9.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/andy-harris-and-matt-price/",
    tx: "5MC4ttdNuQC9uyeRbhro5NsTUmvwqek7DQSfRrTRtdjQaBDPQfoN6KGdqUSRggPKPLLzEKeeehPLQ3kDR59mUgW1"
  },

  {
    kudos_number: 10,
    name: "Peggy Wilson",
    description: "For several years, Peggy has volunteered with Foundation Communities — implementing new student programs, mentoring, tutoring, and recruiting her own colleagues to volunteer.",
    photo: "images/person 10.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/peggy-wilson/",
    tx: "3LR5xG4uMgN4dfvMaxQFyM57Xh8G5z8HgkQf9y78FU7WezYd6kMdYmXqbWQyVLBd2WJuDHqRCgJY5vcAYz1W4EPs"
  },

  {
    kudos_number: 11,
    name: "Tiffany Huerta",
    description: "For several years, Tiffany has volunteered with B.I.G. Love Cancer Care, dedicating hundreds of hours to help over 1,000 children and families cope with a child's cancer diagnosis.",
    photo: "images/person 11.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/tiffany-huerta/",
    tx: "3fZv2otZUAmmuctbafU2269C6ULYyP7XouSP5Phy6CBk6Dqc8LGmAmEMXC9DBcFiiZGTpNS3iVXhcLaXgtTEn18P"
  },

  {
    kudos_number: 12,
    name: "Gerard Van de Werken",
    description: "For 25 years, Gerard has volunteered with Austin Habitat for Humanity and helped build 50 houses to date, while empowering others to give back as well.",
    photo: "images/person 12.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/gerard-van-de-werken/",
    tx: "K1c7t51EuqiSXddamR7X4C1K1QY3yc9hC7tHSzDKHUNbYr5Hhyw7wgbMzqHjaHbX2DXXN4f9yodWqBuinsD8x32"
  },

  {
    kudos_number: 13,
    name: "Remmer Machamer",
    description: "Teenager Remmer has raised over $130,000 for Wreaths Across America, sponsoring thousands of wreaths to adorn the graves of veterans at the Texas State Cemetery and across the state.",
    photo: "images/person 13.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/remmer-machamer/",
    tx: "3pRWzFBA4GJc98MKVQX92shJFGZm3WBqfj8QYr3FJpEoxVWdX4XG1x9bVbAjoFLUQu5NbYoBpRAh19robLRNppJk"
  },

  {
    kudos_number: 14,
    name: "Ricardo Zavala",
    description: "From scholarships to community-building, Ricardo has served his east Austin neighborhood tirelessly for over 11 years through the nonprofit Dove Springs Proud.",
    photo: "images/person 14.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/ricardo-zavala/",
    tx: "k7r6Znhn65Q7FE7hwZcszdyrnJGKACiy79hDbgwj1uNd7shATZH78s8Fz7HkhVhfwhRow4spWQ23EM9gCCZAksZ"
  },

  {
    kudos_number: 15,
    name: "Kevin Hines",
    description: "For several years, Kevin has been a tireless advocate for Wonders & Worries, dedicating countless hours and raising funds to support children through a parent's serious illness.",
    photo: "images/person 15.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/kevin-hines/",
    tx: "41gQZm3CPGygv3XFccKWt7XxDRBun8EDgNaAEUpJo5Ac7vmVgzHH12rUz28hYsRrJzQomqFpGmdYmaB2LX48UJYT"
  },

  {
    kudos_number: 16,
    name: "Diana Lindsey",
    description: "Diana has faithfully served Backpack Friends since 2018, growing from an initial 12 food-stuffed backpacks for kids in need to more than 165,000 backpacks donated.",
    photo: "images/person 16.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/diana-lindsey/",
    tx: "5TWd9kQKfycBWPYBxXgovoCQDbDuRoAaqwhFYzrPADrA3UNJ7f9HrMnCudizWZ6DoXKeRWbzMYb4v5KgS51CtjzM"
  },

  {
    kudos_number: 17,
    name: "Aline Garcia Weinheimer",
    description: "For 18 years, Aline has helped countless children and families in the foster system receive much-needed love and personal items during the most difficult times in their lives.",
    photo: "images/person 17.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/aline-weinheimer/",
    tx: "2zHB7M1DyLPe573m5Q8mkjrrmXBmiuLsYDQZxGKjU6BaV27UwWrU9bPuSUJk8n27cWTNKN8Q8grbt7cfcaApA5bK"
  },

  {
    kudos_number: 18,
    name: "Ebonie Trice",
    description: "Ebonie founded Mission Accomplished seven years ago in response to rising homelessness in Austin, and has now served thousands of neighbors in need.",
    photo: "images/person 18.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/ebonie-trice/",
    tx: "27MUhWM1CwgohGinhJk9j5hYgy9DV6HrKQVm7xEdQdDUF6Q1PuhzrUaopLod6Q7Tpoz7vK8SdB9SDbNMNQRH255k"
  },

  {
    kudos_number: 19,
    name: "Monica von Waaden",
    description: "Raised on giving back, Monica found ways to push through and keep serving her community during a global pandemic.",
    photo: "images/person 19.jpg",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/monica-von-waaden/",
    tx: "2Sr8KjdcZvyyBw6LNMkz1tgd5ueCBgbh5PQwN5sZPCyRLE3TqGN3efUKpqGeBxcQ9Rpd2ZrbCm65CYAQhJ3Fk9fz"
  },

  {
    kudos_number: 20,
    name: "Karen Faulkner",
    description: "After noticing Leander ISD students eating little on weekends, Karen launched Student Charities — since 2009, it has sent over 22,000 backpacks of food home with students in need.",
    photo: "images/person 20.png",
    program: "Legend",
    date: "2026",
    story_url: "https://recognizegood.org/legends/karen-faulkner/",
    tx: "4oQxTKdUz6tgXKhfdrA3M6b5imA14SEVUqpNQnZhEQg5XkJanxiBSvfkmis9VD1htWvxgGGUeCczyo6sPaHrTj4H"
  },

  {
    kudos_number: 21,
    name: "Round Rock Sertoma",
    description: "Recipient of the first RecognizeGood Lighthouse Award — an amazing group of individuals who join together to give back to the community.",
    photo: "images/person 21.png",
    program: "Lighthouse",
    date: "2026",
    story_url: "https://recognizegood.org/recognizegood-launches-new-lighthouse-award-program/",
    tx: "3721aN4iFK21yH3vxJ78NkzuaNZrVn7zio1HWEM4NRKBmu8kkfCHU345UEft3iZiwRZsqsBB3zPe71zii3k984mi"
  },

  {
    kudos_number: 22,
    name: "Rotary Club of Austin",
    description: "Supporting the Austin community since 1913, with ~225 business and community leaders raising $130,000–$180,000 annually for numerous youth-oriented programs.",
    photo: "images/person 22.jpg",
    program: "Lighthouse",
    date: "2026",
    story_url: "https://recognizegood.org/rotary-club-of-austin-honored-with-17th-recognizegood-lighthouse-award/",
    tx: "4ETbsCUdEr8K1qtaNTgoN5cyijBuRkW3ADMYh1sZjJbRqH9sUkNiG6tj2rq9q1A67ndLrH3tbkMUTUmpE464tN3K"
  },

  {
    kudos_number: 23,
    name: "100 Black Men of Austin",
    description: "Supporting the Austin community and continually evolving with new efforts to improve quality of life for African Americans and other minorities — over 40 members, $10,000 raised so far.",
    photo: "images/person 23.jpg",
    program: "Lighthouse",
    date: "2026",
    story_url: "https://recognizegood.org/100-black-men-of-austin-honored-with-18th-recognizegood-lighthouse-award/",
    tx: "5FucdqD7B4x1jRSuE1V7iaAoSD9fCKwHAeBC2yYoGSHyVAJTvEmmr5UjLK6qnojsvLt2hektJXb7RGEs7mZyfesC"
  },

  {
    kudos_number: 24,
    name: "Austin Texas Musicians",
    description: "Organizing service efforts from the start of the pandemic, they helped bring $5M in aid to Austin music venues, $1.5M to musicians, and $3M to creative workers — and haven't slowed.",
    photo: "images/person 24.jpg",
    program: "Lighthouse",
    date: "2026",
    story_url: "https://recognizegood.org/austin-texas-musicians-building-bridges-and-bringing-people-together/",
    tx: "3vV9xc3LWLzzmiygPQbNQbVV8oApCyioNTXZpXAWkAhphyVe3s4goBLxFrVcVc3UEE8HummtimxQigmThw1iKXkz"
  },

  {
    kudos_number: 25,
    name: "Georgetown Beard Club",
    description: "Launched in 2015 to create a positive image of bearded people while doing good, they've found creative ways to donate brains, brawn, and bucks to many different causes.",
    photo: "images/person 25.jpg",
    program: "Lighthouse",
    date: "2026",
    story_url: "https://recognizegood.org/georgetown-beard-club-recognizegoods-most-unique-lighthouse/",
    tx: "26MrzHb3WAmCLifivD9HfAn2QNJGMJGyzSpem38LqhLsHbdg8xytF7HTzvFuRQ9YBYEEV1isQEBnAMhEjbWv5rey"
  }

];
