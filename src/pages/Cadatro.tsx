export function Cadastro () {
  return <div>
    <form>
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" />

      <label htmlFor="marca">Marca</label>
      <input type="text" name="marca" />

      <label htmlFor="model">Modelo</label>
      <input type="text" name="model" />

      <label htmlFor="year">Ano</label>
      <input type="number" name="year" />

      <label htmlFor="description">Descrição</label>
      <textarea name="description" cols={30} rows={10}></textarea>

    </form>
  </div>
}
