import React from 'react'
import { connect } from 'react-redux'
import { pathRequest } from '../actions/index'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import '../assets/styles/containers/App.scss'

//Destructure from props
const Home = props => {
    const { search, mylist, trends, originals, location } = props

    props.pathRequest(location.pathname)

    return (
        <React.Fragment>
            <Search isHome />
            {
                search &&
                <Categories title="Busquedas">
                    {
                        search.length > 0 ?
                            (
                                <Carousel>
                                    {search.map(item => <CarouselItem key={item.id} {...item} />)}
                                </Carousel>
                            )
                            :
                            <h3 className="empty_list">Sin nada que mostrar :(</h3>
                    }
                </Categories>
            }
            {
                mylist &&
                <Categories title="Mi Lista">
                    {
                        mylist.length > 0 ?
                            (
                                <Carousel>
                                    {mylist.map(item => <CarouselItem key={item.id} isList {...item} />)}
                                </Carousel>
                            )
                            :
                            <h3 className="empty_list">Sin nada que mostrar :(</h3>
                    }
                </Categories>
            }

            {
                trends &&
                <Categories title="Tendencias">
                    {
                        trends.length > 0 ?
                            (
                                <Carousel>
                                    {trends.map(item => <CarouselItem key={item.id} {...item} />)}
                                </Carousel>
                            )
                            :
                            <h3 className="empty_list">Sin nada que mostrar :(</h3>
                    }
                </Categories>
            }

            {
                originals &&
                <Categories title="Originales de Platzi">
                    {
                        originals.length > 0 ?
                            (
                                <Carousel>
                                    {originals.map(item => <CarouselItem key={item.id} {...item} />)}
                                </Carousel>
                            )
                            :
                            <h3 className="empty_list">Sin nada que mostrar :(</h3>
                    }
                </Categories>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        search: state.search,
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals
    }
}

const mapDispatchToProps = {
    pathRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)