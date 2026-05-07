import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
                categories: [
                    {
                        key: 'all',
                        name: 'All'
                    },
                    {
                        key: 'tshirt',
                        name: 'T-shirt'
                    },
                    {
                        key: 'trousers',
                        name: 'Trousers'
                    },
                
                    {
                        key: 'accessory',
                        name: 'Accessory'
                    }
                ]
        }
    }
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories