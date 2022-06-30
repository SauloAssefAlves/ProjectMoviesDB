import Carousel from '../../../Components/Carosuel'

export function MovieCarosuel({ title, imgs }) {
  return (
    <>
      <div className="flex items-center justify-start pt-10">
        <p className="font-title text-2xl text-text  font-medium pl-12">
          {title}
        </p>
      </div>
      <div className="max-w-full ">
        <Carousel imgs={imgs} />
      </div>
    </>
  )
}

MovieCarosuel.defaultProps = {
  title: '',
}

export function getGenre(genreIds) {
  const genres = genreIds.map((id) => {
    switch (id) {
      case 28:
        return 'Ação'
      case 12:
        return 'Aventura'
      case 16:
        return 'Animação'
      case 35:
        return 'Comédia'
      case 80:
        return 'Crime'
      case 99:
        return 'Documentário'
      case 18:
        return 'Drama'
      case 10751:
        return 'Família'
      case 14:
        return 'Fantasia'
      case 36:
        return 'História'
      case 27:
        return 'Terror'
      case 10402:
        return 'Música'
      case 9648:
        return 'Mistério'
      case 10749:
        return 'Romance'
      case 878:
        return 'Ficção científica'
      case 10770:
        return 'Cinema TV'
      case 53:
        return 'Thriller'
      case 10752:
        return 'Guerra'
      case 37:
        return 'Faroeste'
      default:
        return 'Not Found'
    }
  })
  return genres
}
