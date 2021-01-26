import React from 'react';
import { CardList } from './Card-list/cardList';
import { SearchBox } from './SearchBox/searchBox';

class ListItem extends React.Component {
constructor(props) {
    super(props);
this.state = {
    product:[],
    searchField:'',
}
// this.handleChange = this.handleChange.bind(this);
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({product: users}));
}

handleChange=(e) =>{
    this.setState({searchField:e.target.value});
}
    render() {

        //destructuring 
        const { product, searchField } = this.state;
        const filteredProduct = product.filter(product => product.name.toLowerCase().includes(searchField.toLowerCase()) )

        return (
            <div>
            <h1> Monster Rolodex</h1>
            <SearchBox placeholder="search product" handleChange={this.handleChange }/>
            <CardList product={filteredProduct}>
            
            </CardList>
             
            </div>
        )
    }
}
export default ListItem;