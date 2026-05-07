import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
        id: 1,
        title: 'Pink Bunny',
        img: '1.jpg',
        desc: 'Kawaii bunny girl in pastel colors',
        category: 'tshirt',
        price: '19.99'
        },
        {
        id: 2,
        title: 'Pink Bunny Dreams',
        img: '2.jpg',
        desc: 'Kawaii bunny girl in pastel colors',
        category: 'tshirt',
        price: '21.99'
        },
        {
        id: 3,
        title: 'Digital Angel',
        img: '3.jpg',
        desc: 'Soft anime angel with cyber glow',
        category: 'tshirt',
        price: '22.99'
        },
        {
        id: 4,
        title: 'Game Over Love',
        img: '4.jpg',
        desc: 'Cute gamer anime girl aesthetic',
        category: 'tshirt',
        price: '20.99'
        },
        {
        id: 5,
        title: 'Cyber Twins',
        img: '5.jpg',
        desc: 'Twin kawaii girls in cyber love style',
        category: 'tshirt',
        price: '23.99'
        },
        {
        id: 6,
        title: 'Cyber Kawaii Girl',
        img: '6.jpg',
        desc: 'Cute anime girl with cyber aesthetic',
        category: 'tshirt',
        price: '19.99'
        },
        {
        id: 7,
        title: 'Cyber Cargo Pants',
        img: '7.jpg',
        desc: 'Relaxed fit cargo pants with futuristic streetwear style.',
        category: 'trousers',
        price: '29.99'
        },
        {
        id: 8,
        title: 'Kawaii Pink Joggers',
        img: '8.jpg',
        desc: 'Soft pastel joggers with cute kawaii aesthetic.',
        category: 'trousers',
        price: '29.99'
        },
        {
        id: 9,
        title: 'Black Tech Street Pants',
        img: '9.jpg',
        desc: 'Techwear inspired pants with modern cyber look.',
        category: 'trousers',
        price: '29.99'
        },
        {
        id: 10,
        title: 'Anime Skater Pants',
        img: '10.jpg',
        desc: 'Loose skater pants with youth street fashion vibe.',
        category: 'trousers',
        price: '21.99'
        },
        {
        id: 11,
        title: 'Neon Stripe Pants',
        img: '11.jpg',
        desc: 'Stylish pants with neon accents for bold outfits.',
        category: 'trousers',
        price: '23.99'
        },
        {
        id: 12,
        title: 'Digital Love Sweatpants',
        img: '12.jpg',
        desc: 'Comfortable sweatpants with cyber anime mood.',
        category: 'trousers',
        price: '24.99'
        },
        {
        id: 13,
        title: 'Devil Bunny Keychain',
        img: '13.jpg',
        desc: 'Soft plush bunny keychain with cute devil heart details.',
        category: 'accessory',
        price: '4.99'
        },
        {
        id: 14,
        title: 'Love Lock Bracelets Set',
        img: '14.jpg',
        desc: 'Pastel charm bracelets with love lock and key design.',
        category: 'accessory',
        price: '2.99'
        },
        {
        id: 15,
        title: 'Heart Necklaces',
        img: '15.jpg',
        desc: 'Matching cyber heart necklaces with digital love symbols.',
        category: 'accessory',
        price: '7.99'
        },
        {
        id: 16,
        title: 'Time Bunny Keychain',
        img: '16.jpg',
        desc: 'Holographic bunny keychain with gaming cyber aesthetic.',
        category: 'accessory',
        price: '9.99'
        },
        {
        id: 17,
        title: 'Pastel Bunny Charm',
        img: '17.jpg',
        desc: 'Cute pastel bunny charm with hearts and cyber icons.',
        category: 'accessory',
        price: '6.99'
        },
        {
        id: 18,
        title: 'Anime Cyber Girl Pins',
        img: '18.jpg',
        desc: 'Kawaii enamel pins featuring cyber anime girls.',
        category: 'accessory',
        price: '5.99'
        },
        {
        id: 19,
        title: 'Yin Yang Heart Bracelets',
        img: '19.jpg',
        desc: 'Braided heart bracelets with yin yang cyber love charms.',
        category: 'accessory',
        price: '3.99'
        },
        {
        id: 20,
        title: 'Plush Heart Bag',
        img: '20.jpg',
        desc: 'Soft pastel heart-shaped mini bag with fluffy texture.',
        category: 'accessory',
        price: '12.99'
        },
        {
        id: 21,
        title: 'Cyber Bunny Plush Toy',
        img: '21.jpg',
        desc: 'Futuristic bunny plush with pixel sword and cyber armor.',
        category: 'accessory',
        price: '14.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items 
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

      <Footer />
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
      
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }

}
export default App;
