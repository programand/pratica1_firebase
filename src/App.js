import { useState, useEffect } from 'react';
import { firestore } from './firebase';

function App() {
    const [tarefas, setTarefas] = useState([])

    function loadItems() {
        firestore.collection("tarefas").get().then((querySnaphot) => {
            const items = [ ]
            querySnaphot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    texto: doc.data() [ 'texto' ],
                    completada: doc.data() ['completada']
                })
            })
            setTarefas(items)
        })
    }
    useEffect(() => {
        loadItems()
    })

  return (
      <div
          className="App-link">
              <ul>
                  {tarefas.map((t) => (
                      <li>{t.texto}</li>
                  ))}
              </ul>                  
    </div>
  );
}
export default App;
