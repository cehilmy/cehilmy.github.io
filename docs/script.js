const revela = documento.consultaSelectorAll('.revelar');

const observador = novo Observador de Intersecção(
  entradas => {
    entradas.parágrafo cada hum(entrada => {
      se (entrada.está se cruzando) {
        entrada.alto.lista de aulas.adicionário('visível');
      }
    });
  },
  { limite: 0,2 }
);

revelação.parágrafo cada hum(r => observador.observar(r));
