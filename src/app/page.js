// import components
import Pizza from './components/Pizza';
import Banner from './components/Banner';

// tutorial data
const pizzas = [
  {
    id: 1,
    name: 'Guia como Vender',
    description:
      'Todas essas informações estarão disponíveis em um vídeo tutorial.',
    image: '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Guia como Utilizar Cardápio',
    description:
      'Para usar o cardápio, selecione os itens desejados no menu..',
    image: '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Guia como Utilizar Relatórios',
    description:
      'Para usar o relatório, acesse a seção correspondente e escolha o período desejado para visualizar os dados..',
    image: '/hawaii.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Guia como Cadastrar Clientes',
    description:
      'Para cadastrar um cliente, vá até a opção Cadastrar Cliente, preencha os campos necessários e salve as informações.',
    image: '/italian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section>
      <Banner/>
      <div className='container mx-auto'>
        {/* logo grid */}
        <div className='grid grid-cols-2 gap-[15px] md:grid-cols -3 xl:grid-cols-4 xl:gap-[30px] py-12'>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza}/>;
          })}

        </div>
      </div>
    </section>
  );
}
