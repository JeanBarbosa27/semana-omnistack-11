# Semana Omnistack 11

O projeto dessa semana que aconteceu entre os dias 23 a 29 de março de 2020, se baseia em um projeto onde ongs podem se cadastrar na aplicação, para submeter casos em que precise de ajuda financeira, para dar andamento em seus projetos sociais. Como se fosse um kick start, de modo que pessoas interessadas possam entrar na aplicação e se comunicar com as ongs que tiver interesse de ajudar.

A ideia principal do evento que é ministrado pela Rocketseat é abranger toda a stack da aplicação usando somente o JavaScript desde o Back-End com NodeJS, passando pelo Front-End Web com ReactJS e até o Mobile com React Native.

Minha intenção com esse projeto é além de aplicar os conhecimentos adquiridos na semana, agregar também no projeto com o que eu já sei a fim de aprender ainda mais das stacks e desenvolver uma aplicação se seja interessante para ser realmente usada.

## Instalação do projeto
Como dito acima, esse projeto apesar de ser todo baseado em JavaScript, utiliza três formas diferentes de build e de rodar o ambiente localmente, sendo assim, para conseguir iniciar qualquer alteração nesse projeto, é necessário ter instalado na sua máquina:
  - [Editor de texto (sugiro o VS Code)](https://code.visualstudio.com/download);
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git);
  - [Node](https://nodejs.org/en/download/);
  - [NPM](https://www.npmjs.com/package/npm);
  - [Expo (usado no desenvolvimento do app com o React Native)](https://docs.expo.io/versions/latest/get-started/installation/#installing-expo-cli);
  - **Essas opções abaixo na verdade não são obrigatórias, mas seriam interessante ter na máquina, para testar a API sem precisar ficar inspecionando pelo front**
    - [Insomnia](https://support.insomnia.rest/article/23-installation) 
    ou
    - [Postman](https://learning.postman.com/docs/postman/launching-postman/installation-and-updates/).

 ## Rodando o projeto localmente
 Para encontrar os conteúdos de toda a aplicação facilmente, optei por hospedar todas as stacks em um único repositório, sendo assim, para rodar localmente será necessário acessar cada uma das pastas via terminal (sugiro já abrir logo uma aba para cada pasta), instalar as dependêcias delas com `npm install` ou `yarn install` e em seguida rodar o comando `npm start` ou `yarn start`.

 ## Build para produção
 Para colocar esse projeto no ar, será necessário: 
  - **Back-End**: Hospedar a aplicação em uma hospedagem que tenha o servidor com Node instalado;
  - **Front-End**: Rodar o comando `npm run build` ou `yarn build` e hospedar em algum serviço de hospedagem;
  - **App mobile**: [Será necessário publicar nas lojas de aplicativos (do Google e da Apple)](https://docs.expo.io/versions/v36.0.0/workflow/publishing/#how-to-publish)

  ## Observações
  Como eu ainda estou usando esse projeto apenas para estudo e rodando localmente, os endpoints estão todos setados para os da minha máquina. Uma ideia que tenho é criar variáveis de ambiente, para não ter esses valores setados na mão, de forma que possa ter um endpoint para desenvolvimento, um para staging e um para produção. E no caso específico do Expo, precisaria pegar também o ip da máquina, para que toda vez que baixar o projeto em uma máquina diferente, não precisar ficar alterando essa informação, pois não seria nada útil em um projeto com mais de um desenvolvedor.