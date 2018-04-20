import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText : '',
            likesKids : false,
            checked : true
        };
    }

    handleInputSeachBar = (event) => {


        this.setState({
           filterText : event.target.value,
        });
    };

    handleCheckboxSearchBar = (event) =>{
        this.setState({
            likesKids : event.target.checked, //event.target.value
            checked: !this.state.checked
        });
        console.log('checked');

    };

    render() {
        return <div className='container'>
            <WorkInProgress/>
            <Menu />
            <Welcome />
            <AdoptCat />
            <div className='adopt-cat'>
                <div className='adopt-img'>
            <AdoptImage />
                </div>
                <div className='adopt-options'>
            <SearchBar filterText={this.state.filterText} inputHandleMethod={this.handleInputSeachBar} likesKids={this.state.likesKids} checkboxHandleMethod={this.handleCheckboxSearchBar}/>
            <CatTable kitties={this.props.kitties} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
                </div>
            </div>
            <Gallery />
            <Footer />
        </div>;
    }
}

class WorkInProgress extends React.Component{
    render(){
        return <div className='work-progress'>
            <p>Work in Progress</p>
        </div>
    }
}

class Menu extends React.Component{
    render(){
        return <div className='menu'>
            <div className='logo'>
                <img src={'images/paw.png'}></img>
                <a className='logo-link'>Cat's Shelter</a>
            </div>
            <ul>

                <li><a>Home</a></li>
                <li><a>Adopt a Cat</a></li>
                <li><a>Way to Help</a></li>
                <li><a>Gallery</a></li>
                <li><a>About Us</a></li>
            </ul>
        </div>
    }
}

class Welcome extends React.Component{
    render(){
        return <div className='header'>
            <div className='header-info'>
            <h1>Welcome to Cat's Shelter</h1>
            <span></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dignissimos distinctio dolor doloremque laborum necessitatibus neque nesciunt sint vero? Corporis error expedita ipsam necessitatibus perferendis quaerat, quia repellendus sapiente!</p>
            </div>
        </div>;
    }
}



class AdoptImage extends React.Component{
    render(){
        return <img src={'images/catcat.png'}/>;
    }
}
class SearchBar extends React.Component {

    handleInputChange = (event) => {
        if (typeof this.props.inputHandleMethod === 'function'){
            this.props.inputHandleMethod(event);
        }
    };

    handleCheckboxChange = (event) => {
        if (typeof this.props.checkboxHandleMethod === 'function'){
            this.props.checkboxHandleMethod(event);
        }
    };

    render() {

        return <div className='search-section'>

            <h2>Adopt a kitty</h2>
            <form>
            <input type='text' placeholder='Search...' value={this.props.filterText} onChange={this.handleInputChange}></input>
            <br/>
            <label><input type='checkbox' value={this.props.likesKids}  onChange={this.handleCheckboxChange} checked={this.props.likesKids}></input>Only show cats that like kids</label>
        </form>
            </div>;
    }
}

class CatTable extends React.Component{

    render(){
        var rows = [];
        var lastCategory = null;

        this.props.kitties.forEach((kitty) => {


            if ((kitty.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1 || this.props.filterText === "") && ((kitty.likesKids === this.props.likesKids)|| (this.props.likesKids === false))) {

                if (kitty.category !== lastCategory) {
                    rows.push(<CatCategoryRow category= { kitty.category }  key= { kitty.category } />);
                    lastCategory = kitty.category;
                }

                rows.push(<CatRow kitty={kitty} key={kitty.name}/>);

            }

        });

        return <div className='search-table'>
            <table width="300">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
        </div>;

    }
}

class CatCategoryRow extends React.Component{
    render(){
        return <tr>
            <th colSpan={2} className='category-heading'>{this.props.category}</th>
        </tr>

    }
}

class CatRow extends React.Component{

    render(){
        var name = this.props.kitty.likesKids ? this.props.kitty.name : <span style={{color: 'red'}}>{this.props.kitty.name}</span>
        return <tr>
            <td>{name}</td>
            <td>{this.props.kitty.age}</td>
        </tr>;
    }
}


class AdoptCat extends React.Component{
    render(){
        return <div className='adopt-info'>
            <div className='adopt-heading'>
                <h2>Planning to Adopt a Cat?</h2>
            </div>
            <div className='adopt-info-section'>
                <img src={'images/book-open.png'}/>
                <h3>Checklist for New Adopters</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a className='btn-learn-more'>Learn More</a>
            </div>
            <div className='adopt-info-section'>
                <img src={'images/search.png'}/>
                <h3>Checklist for New Adopters</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a className='btn-learn-more'>Learn More</a>
            </div>
            <div className='adopt-info-section'>
                <img src={'images/github.png'}/>
                <h3>Checklist for New Adopters</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a className='btn-learn-more'>Learn More</a>
            </div>
        </div>;
    }
}

class Gallery extends React.Component{
    render(){
        return <div className='gallery'>
            <div className='adopt-heading'>
                <h2>Our Gallery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
            <div className='gallery-img-section'>
                <div className='gallery-img'>
                    <img src={'images/cat.jpeg'}/>
                </div>
                <div className='gallery-img'>
                    <img src={'images/cat-two.jpeg'}/>
                </div>
                <div className='gallery-img'>
                    <img src={'images/cat-three.jpeg'}/>
                </div>
            </div>
            <div className='gallery-img-section'>
                <div className='gallery-img'>
                    <img src={'images/cat-four.jpeg'}/>
                </div>
                <div className='gallery-img'>
                    <img src={'images/cat-six.jpeg'}/>
                </div>
                <div className='gallery-img'>
                    <img src={'images/cat-seven.jpeg'}/>
                </div>
            </div>
        </div>
    }
}

class Footer extends React.Component{
    render(){
        return <footer>
            <div className='footer-container'>
                <div className='footer-section'>
                    <img src={'images/paw.png'}></img>
                    <a className='logo-link'>Cat's Shelter</a>
                    <p className='footer-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Excepteur sint occaecat cupidatat non proident.
                    </p>

                </div>
                <div className='footer-section'>
                    <h3>Support Links</h3>
                    <ul>
                        <li><a>Kitten Food</a></li>
                        <li><a>Pet Vaccinations</a></li>
                        <li><a>Pet Nutrition</a></li>
                        <li><a>Cat Advice</a></li>
                        <li><a>Pet Surgery</a></li>
                        <li><a>Internal Medicine</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h3>Contact Us</h3>
                    <div className='contact-info'>
                        <h4>
                            Address:
                        </h4>
                        <p>Gorzsewska 200C, Warsaw, 01-460</p>
                        <h4>
                            Email:
                        </h4>
                        <p>catshelter@gmail.com</p>
                        <h4>Phone Number:</h4>
                        <p>Office: +48 000 000 000</p>
                        <p>Cell: +48 000 000 000</p>
                    </div>
                </div>

            </div>
            <div className='secondary-footer'>
                <div className='copyright'>
                    <p>Copyright ©, 2017, All Rights Reserved</p>
                </div>
                <div className='footer-menu'>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Adopt a Cat</a></li>
                            <li><a href="#">Way to Help</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li id="last-border"><a href="#">About Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </footer>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var kitties = [
        {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
        {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
        {category: "male", age: "2", likesKids: false, name: "Grumpy"},
        {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
        {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
        {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
    ];

    ReactDOM.render(
        <App kitties={kitties}/>,
        document.querySelector('#app')
    );
});