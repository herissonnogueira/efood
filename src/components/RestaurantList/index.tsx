import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Lista } from './styles'

type Props = {
  restaurantes: Restaurant[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getTagRestaurante = (restaurante: Restaurant) => {
    const tags = []
    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }
    return tags
  }
  return (
    <div className="container">
      <Lista>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <RestaurantCard
              id={restaurante.id}
              titulo={restaurante.titulo}
              descricao={restaurante.descricao}
              avaliacao={restaurante.avaliacao}
              capa={restaurante.capa}
              infos={getTagRestaurante(restaurante)}
            />
          </li>
        ))}
      </Lista>
    </div>
  )
}

export default RestaurantList
