var temp = [];

function salvarImagens(     cara_nome, 
                            cara_email, 
                            cara_cidade, 
                            cara_fone,  
                            cara_cpf, 
                            animal_nome )
{

  // Tenta carregar o array de imagens do Local Storage
  let db_animais = localStorage.getItem('adotados');
  if (db_animais) {//se ele conseguir, então ele ja pegar os dados existentes,
    temp = JSON.parse(db_animais);
  }//se não o array ja vai começar vazio mesmo 

  // Insere a imagem no array

   var novoAnimal = new NovoUser({

    nome: cara_nome,
    email: cara_email,
    cidade: cara_cidade,
    phone: cara_fone,
    cpf: cara_cpf,

    nome_dog: animal_nome

   });


  temp.push(novoAnimal);

  // Salvar o array de imagens no localStorage
  localStorage.setItem('adotados', JSON.stringify(temp));

}



let exclusao = (i) => {
  temp.splice(i, 1);
  renderiza();
}







class NovoUser {

  constructor(
    nome,
    email,
    cidade,
    fone,
    cpf,
    animal_nome) 
    { //construir o sistema do favorito

        this.nome = nome;
        this.email = email;
        this.cidade = cidade;
        this.phone = fone;
        this.cpf = cpf
        this.nome_dog = animal_nome;

        this.exclusao = exclusao;


    }

  construir() {
    var contador = document.createElement(''); //criar um elemento p na pagina

    contador.innerHTML = `<b>
                        <div class="card">
                            <img src="${this.imagem_dog} " class="card-img-top border-bottom" alt="">
                            <div class="card-body">
                                <h5 class="card-title">CRIOULA</h5>
                                <div class="card-text">
                                    <h6>Adotada por:</h6>
                                    <p>Nome: ${this.nome}</p>
      
      
                                    <p>Email: ${this.email}</p>
                                    <p>Cidade: ${this.cidade}</p>
                                    <p>Celular: ${this.phone}</p>
                                    <p>CPF: ${this.cpf}</p>

                                </div>
                                
                                    <button class="exclusao"> excluir
       <i class="fas fa-trash"></ asdf i>
     </button>
                            </div>
                        </div>
                            `;

    contador.querySelector('.exclusao').onclick = () => this.exclusao(this.nome);//excluir o favorito baseando-se no id
    return contador;
  }
}


