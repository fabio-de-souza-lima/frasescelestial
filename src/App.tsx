import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        '⁠Deus não tem nenhum compromisso com nossas loucuras.Hernandes Dias Lopes',
        'Precisamos entender que mesmo que as coisas fujam ao nosso controle, elas continuam rigorosamente sob o controle de Deus. Cremos no cuidado amoroso de Deus. Ele trabalha para aqueles que nEle esperam. Ele governa os céus e a terra, e também, os destinos da nossa vida!Hernandes Dias Lopes',
        'A morte da morte na morte de Jesus tem efeitos que são experimentados hoje por aqueles que têm um pouquinho o pavor da morte e agora podem morrer tranquilos sabendo que a morte morreu na morte de Jesus.Augustus Nicodemus',
        'O grande desafio da Espiritualidade é você continuar crente, sem sentir, sem ver, sem experimentar e ainda dando tudo errado.Augustus Nicodemus',
        'O meu maior fracasso é ter sucesso em algo que me afasta de Deus.João Chaves',
        'Quando Deus diz alguma coisa, a discussão acabou!R.C. Sproul',
        'Tudo o que dissermos será inútil, se não for confirmado pelo que vivemos.Jonathan Edwards',
        'O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei? Salmo 27:1',
        'Em Deus louvarei a sua palavra, em Deus pus a minha confiança; não temerei o que me possa fazer a carne. Todos os dias torcem as minhas palavras; todos os seus pensamentos são contra mim para o mal. Salmos 56:4,5.',
        'Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. Josué 1:9.', 
        'Ainda que a minha mente e o meu corpo enfraqueçam, Deus é a minha força, Ele é tudo o que eu sempre preciso.Salmos 73:26',
        'Não te deixes vencer pelo mal, mas vence o mal com o bem.Romanos 12:21',
        'Se te mostrares fraco no dia da angústia, é que a tua força é pequena. Provérbios 24:10',
        'Bem-aventurado o homem a quem o Senhor não atribui pecado, e em cujo espírito não há engano.Salmo 32.2',
        'O que é impossível para os homens é possível para Deus. 🙌 Lucas 18:27',
        'Se alguém me ama, obedecerá à minha palavra. 📖 Meu Pai o amará, nós viremos a ele e faremos morada nele. ❤️-João 14:23',
        'Pois, que adiantará ao homem ganhar o mundo inteiro e perder a sua alma? "🤔- Mateus 16:26a',
        'Não são os que têm saúde que precisam de médico, mas sim os doentes. Eu não vim para chamar justos, mas pecadores".- Marcos 2:17',
        'Como o Pai me amou, assim eu os amei; permaneçam no meu amor." ❤️- João 15:9',
        'Eu lhes deixo um presente, a minha plena paz. E essa paz que eu lhes dou é um presente que o mundo não pode dar. Portanto, não se aflijam nem tenham medo.João 14:27',
        'Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. Pois todo o que pede recebe; o que busca encontra; e àquele que bate, a porta será aberta."- Mateus 7:7-8',
      ]
    },
    {
      id: 2,
      nome: "Bom dia ",
      frases: [
        'Só Glória ? Fabio de Souza.',
      'Por mais que as coisas fujam ao nosso controle, elas continuam rigorosamente sob o controle de Deus.Hernandes Dias Lopes',
      'Sempre que Deus quer fazer um homem grande, Ele o quebra em pedaços primeiroMax Lucado',
      'Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo". 💪😊- João 16:33 b', 
      'Jesus lhe disse: "Eu irei curá-lo". (Mateus 8:7)', 
      'O segredo da vitória contra a sedução não é resistir, mas fugir. Dialogar com o tentador já é o primeiro degrau da queda." Hernandes Dias LopesHernandes Dias Lopes',
      'A oração não é para determinar nada pra Deus. A oração é para receber a determinação de Deus pra nossa vida.Hernandes Dias Lopes',
      'Se Deus fizer, Ele é Deus. Se não fizer, Ele é Deus. Se a porta abrir, Ele é Deus. Mas se fechar, continua sendo Deus... 🙌(Delino Marçal)',
      'Pode o silêncio até gritar que Deus me abandonou... Eu vivo pela fé e tenho um Deus que estende a mão pra me levantar!(Aline Barros)',
      'É meu, somente meu todo o trabalho. E o teu trabalho é descansar em Mim... 😊(Paulo César Baruk)',
      '⁠A Idolatria Cega o Entendimento.Hernandes Dias Lopes',
      'Ansiedade é ser crucificado entre dois ladrões: o ladrão do remorso em relação ao passado e o ladrão da preocupação em relação ao futuro".Hernandes Dias Lopes',
      '❤️ Um quebrantado coração move o coração de Deus. Um quebrantado coração traz o céu para nós...(Fernanda Brum)',
      'Que sejas meu universo, que sejas tudo o que sinto e o que penso.(PG)',
      'Pois o que chora aos pés da cruz, clamando em nome de Jesus alcançará de Ti, Senhor, misericórdia, graça e luz...(Kleber Lucas)',
      'Se a luta é muito grande, ela te fez perder a fé,O meu Deus entra na guerra peleja por você! 🙌(Marquinhos Gomes)',
      'Há muitos suspiros, gemidos, sussurros, lagrimas, olhos fechados e mãos levantadas ao alto; mas pouco arrependimento, quebrantamento e convicção de pecado, mudança de vida e santidade."Augustus Nicodemus',
      '⁠HOJE É TEMPO DE BUSCAR A DEUS um novo dia está começando. Lembre-se: "As misericórdias do Senhor renovam-se a cada manhã". Comece seu dia, agradecendo a Deus pela vida, pela família, pela igreja, pelo trabalho, e sobretudo, pela salvação em Cristo!Hernandes Dias LopesHernandes Dias Lopes',

      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite durma bem',
        'O diabo promete alegria, dá pesar; promete felicidade, dá culpa; promete liberdade, escraviza; promete vida e mata. O diabo é um mentirosoHernandes Dias Lopes',
        '⁠A remissão e o perdão dos pecados, a salvação e a vida eterna não são alcançados pelas obras nem pela religião, mas pela fé em Cristo.Hernandes Dias Lopes',
        'Paulo precisou ser jogado ao chão e ficar cego para se converter. Nabucodonosor precisou ir para o campo comer capim com os animais para se dobrar. Até quando você resistirá à voz do Espírito de Deus?Hernandes Dias Lopes',
        'Arrependimento não é o quanto você chora, mas o quanto você muda!Augustus Nicodemus',
        'Se formos fracos em nossa comunhão com Deus, seremos fracos em tudo.Charles Spurgeon',
        'Escolho viver para Ti. Mesmo se o mundo quiser me parar, sei que em ti quebrarei todas as barreiras! 💪😊.',
        'Creia, ore, receba, agradeça e louve!',
        'Caminhamos não para um entardecer sombrio, mas para uma manhã gloriosa.Hernandes Dias Lopes',
        'Pecar não alivia a dor, só aumenta o tormento. 😫',
        'Você serve a um Deus que é maior do que qualquer inimigo que você possa enfrentarJohn Hagee',
        'Concentre-se nos gigantes - e você cairá.Concentre-se em Deus - e gigantes cairãoMax Lucado',
        'Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?Bíblia Sagrada, Romanos 8:31',
        'O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei?Bíblia Sagrada, Salmos 27:1',
        'A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.Bíblia Sagrada, Hebreus 11:1',
        'Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor.Bíblia Sagrada, 1 Coríntios 13:13',
        'Cristo, o bom pastor, nunca perde de vista as suas ovelhasJ.I. Packer',
        'Não podemos controlar o que os outros dizem a nosso respeito ou fazem conosco, mas podemos controlar o que dizemos a respeito deles e fazemos com eles. Devemos pensar em fazer por eles, em vez de fazer com e contra eles.Hernandes Dias Lopes',
      ]
    }
  ]


  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className="category-button"
          style={{ 
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0,
            borderColor: "#ff0000"
           }}

          onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ) )}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p> }


      <h6>Copyright © 2024 | Fabio S Lima </h6>
      
     
    </div>
    
  )
}

export default App
