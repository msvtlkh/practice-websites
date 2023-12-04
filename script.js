//check two or not

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt('How many films have you alraedy watched?', '')

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you alraedy watched?', '')
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const filmName = prompt('What was your last film?', '').trim(),
                  rateOfMovie = +prompt('What do you think about this film? How many points do you give from 1 to 10?', '')
        
            if (filmName != 0 && rateOfMovie != 0 && filmName != '' && rateOfMovie != '' && filmName.length < 50) {
                personalMovieDB.movies[filmName] = rateOfMovie
            } else {
                console.log('Введите название фильма не менее 50 символов')
                i--
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман")
        } else {
            console.log("Произошла ошибка")
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`)

            if (genre === '' || genre === 0) {
                console.log('It is nor correct')
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre
            }
        }

        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${element}`)
        })
    },
    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        } else {
            console.log('It is private')
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }
}

personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
personalMovieDB.writeYourGenres()
personalMovieDB.showMyDB()
personalMovieDB.toggleVisibleMyDB()

//C # Trim () является строковым методом. 
//Этот метод используется для удаления всех начальных и конечных пробельных символов из текущего объекта String. 


