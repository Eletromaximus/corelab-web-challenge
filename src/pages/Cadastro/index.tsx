import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from '../../lib/api'

type Inputs = {
  name: string
  description: string
  isFavorite: boolean
  year: number
  color: string
  price: number
}
export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Omit<Inputs, 'isFavorite'>> = async (data) => {
    await api
      .post('/vehicle', {
        name: data.name,
        description: data.description,
        isFavorite: false,
        year: data.year,
        color: data.color,
        price: data.price,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nome</label>
      <input type="text" {...register('name', { required: true })} />
      {errors.name?.message && <span>Digite um nome válido</span>}

      <label htmlFor="year">Ano</label>
      <input
        type="number"
        {...register('year', {
          required: true,
          maxLength: 4,
          minLength: 4,
        })}
      />
      {errors.year?.message && <span>Digite um ano válido</span>}

      <label htmlFor="color">Cor</label>
      <input
        type="text"
        {...register('color', {
          required: true,
          maxLength: 20,
        })}
      />
      {errors.color?.message && <span>{errors.color.message}</span>}

      <label htmlFor="price">Preço</label>
      <input
        type="number"
        {...register('price', {
          required: true,
          maxLength: 7,
        })}
      />
      {errors.price && <span>Preencha corretamente o preço</span>}

      <label htmlFor="description">Descrição</label>
      <textarea
        cols={30}
        rows={10}
        {...register('description', {
          required: true,
          maxLength: 250,
        })}
      />
      {errors.description?.message && <span>Escreva uma descrição do veiculo</span>}

      <input type="submit" value="Confirmar" />
    </form>
  )
}
