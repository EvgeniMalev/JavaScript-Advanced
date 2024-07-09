function solarsystem(planet) {
    const planets = {
        'Mercury': 1,
        'Venus': 2,
        'Earth': 3,
        'Mars': 4,
        'Jupiter': 5,
        'Saturn': 6,
        'Uranus': 7,
        'Neptune': 8,
        'Pluto': 9,
    };

    let planetNum = planets[planet];
    console.log(planetNum ? planetNum : 'error');
}

solarsystem('Venus');
solarsystem('Pluto');
solarsystem('Invalid');
