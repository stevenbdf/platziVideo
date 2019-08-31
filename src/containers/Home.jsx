import React from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/containers/App.scss'

const API = 'http://localhost:3000/initalState'

const Home = () => {

    let { mylist, trends, originals } = useInitialState(API)

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default Home