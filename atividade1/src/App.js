import { useState } from 'react';
import "./App.css";


  function App() {

  const [id, setId] = useState()
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [lista, setLista] = useState([]);

  function adicionar() {
    
    if (id) {
      const index = lista.findIndex(n => n.id === id);
      lista[index].nome = nome;
      lista[index].nota1 = parseFloat(nota1);
      lista[index].nota2 = parseFloat(nota2);
      lista[index].nota3 = parseFloat(nota3);
      lista[index].media = ((lista[index].nota1 + lista[index].nota2 + lista[index].nota3) / 3).toFixed(2);

      setLista([...lista]);
    } else {
      let nota = {
        id: Math.random().toString(36),
        nome: nome,
        nota1: parseFloat(nota1),
        nota2: parseFloat(nota2),
        nota3: parseFloat(nota3),
        media: 0
      };

      nota.media = ((nota.nota1 + nota.nota2 + nota.nota3)/3).toFixed(2);

      lista.push(nota);
      setLista([...lista]);

    }

    setId('');
    setNome('');
    setNota1('');
    setNota2('');
    setNota3('');
  }

    
  function excluir(id) {
    const index = lista.findIndex(n => n.id === id)
    lista.splice(index, 1)
    setLista([...lista])
  }

  function editar(id) {
    const nota = lista.find(n => n.id === id)
    setId(nota.id);
    setNome(nota.nome);
    setNota1(nota.nota1);
    setNota2(nota.nota2);
    setNota3(nota.nota3);
  }

  return (

    <div className="container">
      <h1>Aluno - Notas</h1>
      <form className="row">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>

        <div className="mb-4">
          <label className="form-label">Nota1</label>
          <input type="number" className="form-control" value={nota1} onChange={(event) => setNota1(event.target.value)} />
        </div>

        <div className="mb-4">
          <label className="form-label">Nota2</label>
          <input type="number" className="form-control" value={nota2} onChange={(event) => setNota2(event.target.value)} />
        </div>

        <div className="mb-4">
          <label className="form-label">Nota3</label>
          <input type="number" className="form-control" value={nota3} onChange={(event) => setNota3(event.target.value)} />
        </div>

        <div className='col-md-12'>
        <button type="button" className="btn btn-primary " onClick={adicionar}>Adicionar</button>
        </div>
         
        <footer>
        <h1>Alexandre, Juan, Pablo, Vitor B</h1>
        </footer>
      </form>


  <table className="table">
  <thead>
    <tr >
      <th scope="col">Nome</th>
      <th scope="col">Nota 1</th>
      <th scope="col">Nota 2</th>
      <th scope="col">Nota 3</th>
      <th scope="col">Media</th>
    </tr>
  </thead>
  <tbody>

      {
          lista.map((n, index) => {
            return (
              <tr key={index}>
                <td>{n.nome}</td>
                <td>{n.nota1}</td>
                <td>{n.nota2}</td>
                <td>{n.nota3}</td>
                <td>{n.media < 7 ? <b className='red'>{n.media}</b> : <b>{n.media}</b>}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => editar(n.id)}>Editar</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => excluir(n.id)}>Excluir</button>
                </td>
              </tr>
            )
          })
        }
       
  </tbody>
</table>

    </div>
    
  );
  }
 
  
  
  export default App;
