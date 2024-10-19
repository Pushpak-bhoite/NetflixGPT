const data = [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "rating": 9.3,
      "poster": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=6hB3S9bIaco",
      "genre": ["Drama"],
      "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "director": "Frank Darabont"
    },
    {
      "id": 2,
      "title": "The Godfather",
      "year": 1972,
      "rating": 9.2,
      "poster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc4uN2CjNiSV0Qq6Fnqw-M0weC832QQQ5ZzP0KhINYbvNbfmuK",
      "trailer": "https://www.youtube.com/watch?v=sY1S34973zA",
      "genre": ["Crime", "Drama"],
      "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
      "director": "Francis Ford Coppola"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "year": 2008,
      "rating": 9.0,
      "poster": "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
      "trailer": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      "genre": ["Action", "Crime", "Drama"],
      "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "director": "Christopher Nolan"
    },
    {
      "id": 4,
      "title": "Pulp Fiction",
      "year": 1994,
      "rating": 8.9,
      "poster": "https://m.media-amazon.com/images/I/81d2CoIjg-L._AC_UF1000,1000_QL80_.jpg",
      "trailer": "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      "genre": ["Crime", "Drama"],
      "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "director": "Quentin Tarantino"
    },
    {
      "id": 5,
      "title": "Inception",
      "year": 2010,
      "rating": 8.8,
      "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      "trailer": "https://www.youtube.com/watch?v=8hP9D6kZseM",
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "director": "Christopher Nolan"
    },
    {
      "id": 6,
      "title": "Fight Club",
      "year": 1999,
      "rating": 8.8,
      "poster": "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=SUXWAEX2jlg",
      "genre": ["Drama"],
      "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      "director": "David Fincher"
    },
    {
      "id": 7,
      "title": "Forrest Gump",
      "year": 1994,
      "rating": 8.8,
      "poster": "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
      "trailer": "https://www.youtube.com/watch?v=bLvqoHBptjg",
      "genre": ["Drama", "Romance"],
      "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      "director": "Robert Zemeckis"
    },
    {
      "id": 8,
      "title": "The Matrix",
      "year": 1999,
      "rating": 8.7,
      "poster": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      "genre": ["Action", "Sci-Fi"],
      "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "director": "The Wachowskis"
    },
    {
      "id": 9,
      "title": "Goodfellas",
      "year": 1990,
      "rating": 8.7,
      "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
      "trailer": "https://www.youtube.com/watch?v=qo5V3s5bI8k",
      "genre": ["Crime", "Drama"],
      "cast": ["Ray Liotta", "Robert De Niro", "Joe Pesci"],
      "director": "Martin Scorsese"
    },
    {
      "id": 10,
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year": 2001,
      "rating": 8.8,
      "poster": "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=V75dMMIW2B4",
      "genre": ["Adventure", "Drama", "Fantasy"],
      "cast": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      "director": "Peter Jackson"
    },
    {
      "id": 11,
      "title": "The Godfather Part II",
      "year": 1974,
      "rating": 9.0,
      "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY281_CR4,0,190,281_.jpg",
      "trailer": "https ://www.youtube.com/watch?v=qJr92K_h9sI",
      "genre": ["Crime", "Drama"],
      "cast": ["Al Pacino", "Robert De Niro", "Diane Keaton"],
      "director": "Francis Ford Coppola"
    },
    {
      "id": 12,
      "title": "The Empire Strikes Back",
      "year": 1980,
      "rating": 8.7,
      "poster": "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg",
      "trailer": "https://www.youtube.com/watch?v=JNwNXF9Y6kY",
      "genre": ["Action", "Adventure", "Fantasy"],
      "cast": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      "director": "Irvin Kershner"
    },
    {
      "id": 13,
      "title": "The Lord of the Rings: The Two Towers",
      "year": 2002,
      "rating": 8.7,
      "poster": "https://images.moviesanywhere.com/e08bdd760138ad2b7fcb992943536bfa/d1935091-487e-44a8-a66f-97f892a621f9.jpg",
      "trailer": "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      "genre": ["Adventure", "Drama", "Fantasy"],
      "cast": ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
      "director": "Peter Jackson"
    },
    {
      "id": 14,
      "title": "The Lord of the Rings: The Return of the King",
      "year": 2003,
      "rating": 8.9,
      "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      "trailer": "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
      "genre": ["Adventure", "Drama", "Fantasy"],
      "cast": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      "director": "Peter Jackson"
    },
    {
      "id": 15,
      "title": "Gladiator",
      "year": 2000,
      "rating": 8.5,
      "poster": "https://m.media-amazon.com/images/I/81v8WQ-eF-L._AC_UF1000,1000_QL80_.jpg",
      "trailer": "https://www.youtube.com/watch?v=owK1qxDselE",
      "genre": ["Action", "Adventure", "Drama"],
      "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      "director": "Ridley Scott"
    },
    {
      "id": 16,
      "title": "The Departed",
      "year": 2006,
      "rating": 8.5,
      "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg",
      "trailer": "https://www.youtube.com/watch?v=ri6fPEpTrU8",
      "genre": ["Crime", "Drama", "Thriller"],
      "cast": ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
      "director": "Martin Scorsese"
    },
    {
      "id": 17,
      "title": "Whiplash",
      "year": 2014,
      "rating": 8.5,
      "poster": "https://miro.medium.com/v2/resize:fit:1200/1*HygtAUSg3MqQjimu0MQy3Q.jpeg",
      "trailer": "https://www.youtube.com/watch?v=7d_jQycdQGo",
      "genre": ["Drama", "Music"],
      "cast": ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
      "director": "Damien Chazelle"
    },
    {
      "id": 18,
      "title": "Interstellar",
      "year": 2014,
      "rating": 8.6,
      "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      "trailer": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      "genre": ["Adventure", "Drama", "Sci-Fi"],
      "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "director": "Christopher Nolan"
    },
    {
      "id": 19,
      "title": "The Silence of the Lambs",
      "year": 1991,
      "rating": 8.6,
      "poster": "https://m.media-amazon.com/images/I/51Ds0kX7LaL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=RuXcFSmPfyM",
      "genre": ["Crime", "Drama", "Thriller"],
      "cast": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
      "director": "Jonathan Demme"
    },
    {
      "id": 20,
      "title": "Se7en",
      "year": 1995,
      "rating": 8.6,
      "poster": "https://m.media-amazon.com/images/I/51JdoUlXP3L._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=znmZoVkCjpI",
      "genre": ["Crime", "Drama", "Thriller"],
      "cast": ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"],
      "director": "David Fincher"
    },
    {
      "id": 21,
      "title": "The Prestige",
      "year": 2006,
      "rating": 8.5,
      "poster": "https://m.media-amazon.com/images/I/51RzQElzTUL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=o4gHCmTQDVI",
      "genre": ["Drama", "Mystery", "Sci-Fi"],
      "cast": ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
      "director": "Christopher Nolan"
    },
    {
      "id": 22,
      "title": "Django Unchained",
      "year": 2012,
      "rating": 8.4,
      "poster": "https://m.media-amazon.com/images/I/51SNoFnhS9L._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=eUdM9vrCbow",
      "genre": ["Action", "Drama", "Western"],
      "cast": ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
      "director": "Quentin Tarantino"
    },
    {
      "id": 23,
      "title": "Joker",
      "year": 2019,
      "rating": 8.4,
      "poster": "https://m.media-amazon.com/images/I/71pKaORnh4L._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      "genre": ["Crime", "Drama", "Thriller"],
      "cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
      "director": "Todd Phillips"
    },
    {
      "id": 24,
      "title": "Psycho",
      "year": 1960,
      "rating": 8.5,
      "poster": "https://m.media-amazon.com/images/I/51yHf0A86bL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=Ng47vpp2Y7E",
      "genre": ["Horror", "Mystery", "Thriller"],
      "cast": ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
      "director": "Alfred Hitchcock"
    },
    {
      "id": 25,
      "title": "The Big Lebowski",
      "year": 1998,
      "rating": 8.1,
      "poster": "https://m.media-amazon.com/images/I/51tpTY7JxQL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=cwqiW7qxw_0",
      "genre": ["Comedy", "Crime"],
      "cast": ["Jeff Bridges", "John Goodman", "Julianne Moore"],
      "director": "Joel Coen, Ethan Coen"
    },
    {
      "id": 26,
      "title": "Reservoir Dogs",
      "year": 1992,
      "rating": 8.3,
      "poster": "https://m.media-amazon.com/images/I/51eayjN7O8L._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=d3A3-Z4z8DE",
      "genre": ["Crime", "Drama"],
      "cast": ["Harvey Keitel", "Tim Roth", "Michael Madsen"],
      "director": "Quentin Tarantino"
    },
    {
      "id": 27,
      "title": "Memento",
      "year": 2000,
      "rating": 8.4,
      "poster": "https://m.media-amazon.com/images/I/51lV8TYuRXL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=0vS0E9bBSL0",
      "genre": ["Mystery", "Thriller"],
      "cast": ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
      "director": "Christopher Nolan"
    },
    {
      "id": 28,
      "title": "Oldboy",
      "year": 2003,
      "rating": 8.4,
      "poster": "https://m.media-amazon.com/images/I/51mGs2hrW6L._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=RPpEz0rm5H0",
      "genre": ["Action", "Drama", "Mystery"],
      "cast": ["Choi Min-sik", "Yoon Jin-seo", "Kang Hye-jung"],
      "director": "Park Chan-wook"
    },
    {
      "id": 29,
      "title": "The Revenant",
      "year": 2015,
      "rating": 8.0,
      "poster": "https://m.media-amazon.com/images/I/71cXvN8wRaL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=LoebZZ8K5nY",
      "genre": ["Action", "Adventure", "Drama"],
      "cast": ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"],
      "director": "Alejandro G. Iñárritu"
    },
    {
      "id": 30,
      "title": "Blade Runner 2049",
      "year": 2017,
      "rating": 8.0,
      "poster": "https://m.media-amazon.com/images/I/71SnlvYhbGL._AC_.jpg",
      "trailer": "https://www.youtube.com/watch?v=gCcx85zbxz4",
      "genre": ["Action", "Drama", "Sci-Fi"],
      "cast": ["Ryan Gosling", "Harrison Ford", "Jared Leto"],
      "director": "Denis Villeneuve"
    }
  ]
  
  export default data;