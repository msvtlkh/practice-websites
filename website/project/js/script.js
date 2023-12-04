document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertisment = document.querySelectorAll('.promo__adv img')
    const genre = document.querySelector('.promo__genre')
    const background = document.querySelector('.promo__bg')
    const listOfFilms = document.querySelector('.promo__interactive-list')
    const input = document.querySelector('.adding__input')
    const form = document.querySelector('form.add')
    const addButton = document.querySelector('.button')
    const checkbox = form.querySelector('[type="checkbox"]')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let newFilm = input.value
        const favourite = checkbox.checked

        if (newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`
            }
        }

        if (favourite) {
            console.log("Добавляем любимый фильм")
        }

        movieDB.movies.push(newFilm)
        sortArray(movieDB.movies)
        createMovieList(movieDB.movies, listOfFilms) 
    
        event.target.reset()
    })

    const sortArray = (arr) => {
        arr.sort()
    }

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove()
        })
    }

    const makeChanges = () => {
        genre.textContent = 'ДРАМА'
    
        background.style.backgroundImage = "url('img/bg.jpg')"
    }
    

    function createMovieList(films, parent) {
        parent.innerHTML = ''
        sortArray(films)
    
        films.forEach((element, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${element}
                     <div class="delete"></div>
                </li>
            `
        })

        document.querySelectorAll('.delete').forEach((button, i) => {
            button.addEventListener('click', () => {
                button.parentElement.remove()
                movieDB.movies.splice(i,1)

                createMovieList(films, parent)
            })
        })
    }

    deleteAdv(advertisment)
    createMovieList(movieDB.movies, listOfFilms)
    makeChanges()
})
