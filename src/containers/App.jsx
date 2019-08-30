import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {

    let { mylist, trends, originals } = useInitialState(API)
    
    return (
        <div className="App">
            <Header />
            <Search />
            {
                mylist &&
                <Categories title="Mi Lista">
                    {
                        mylist.length > 0 ?
                            mylist.map(item => <CarouselItem key={item.id} {...item} />)
                            :
                            <h3 className="empty_list">Sin nada que mostrar :(</h3>
                    }
                </Categories>
            }

            {
                trends &&
                <Categories title="Tendencias">
                    <Carousel>
                        {
                            trends.length > 0 ?
                                trends.map(item => <CarouselItem key={item.id} {...item} />)
                                :
                                <h3 className="empty_list">Sin nada que mostrar :(</h3>
                        }
                    </Carousel>
                </Categories>
            }

            {
                originals &&
                <Categories title="Originales de Platzi">
                    <Carousel>
                        {
                            originals.length > 0 ?
                                originals.map(item => <CarouselItem key={item.id} {...item} />)
                                :
                                <h3 className="empty_list">Sin nada que mostrar :(</h3>
                        }
                    </Carousel>
                </Categories>
            }
            <Footer />
        </div>
    )
}
export default App