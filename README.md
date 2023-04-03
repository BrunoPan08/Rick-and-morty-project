Documento sobre o Projeto Rick and Morty

    O Projeto consiste no desenvolvimento do front end, resgatando os dados da API rick and Morty.
As library que foram baixados para projeto são:
    axios
    react-dom
    react-paginate
    react-router-dom
    react-scripts
    sass
    web-vitals
    eslintrc
 O Primeiro passo para criação foi do projeto pelo comando npx create-react-app Projeto-rick-and-morty.
 Etapa seguinte foi a instalação das bibliotecas.
 Após criado o projeto foi feito a limpeza dos arquivos que não iria usar.
 No arquivo App.js foi chamado a URL onde possui a API. FOi criado a pasta componentes com os arquivos cards, filter, search, navbar e pages.
 Cards são aonde paFssa as informações e a imagem do personagem.
 Filter são buscas especifica de caracteristica do usuario.
 Search é a procura do nome do usuario.
 Pages possui a funcionalidade da troca de pagina para buscar mais personagens.
 Navbar possui a funcionalidade para alterar a pagina entre os personagens e favoritos.


 Utilização da webpage

    A homepage vai iniciar com um campo de navegação com botões para a pagina principal e os favoritos. Abaixo tera um campo para digitar o nome do personagem
 e os personagem com o nome e a informação da ultima localizaçFão. No canto esquerdo tera um filtro em que o usuario pode buscar persoangens pelo estado,
 genero e especie. No final da pagina tera dois botões de próximo e anterior, para acessar mais personagens.
    Ao clicar em um personagem ira direcionar para uma pagina com mais informações sobre o personagem escolhido com os seguintes items: genero, especie,
tipo, nascimento e estado, alem do nome  e a imagem.

Itens em pendencia e bugs

Criar a pagina de favoritos e a logica que sera adiciona o personagem quando o usuario clicar no botão de coração, no canto inferior a direita na imagem do personagem.
Corrigir problema do botão de favoritar o personagem, pois ao clicar no icone é redirecionado para a pagina do personagem.
Trabalha na responsividade da pagina, device mobile e tablet.
Adicionar o axios para requisição da API.

Itens extra

Criado o arquivo eslintrc para caso de erro na identação ou alguma falha no codigo.
Utilização do scss para design na pagina.


 
 