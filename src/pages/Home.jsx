import React from 'react'
import Head from '../components/common/header/Head'
import CardComponent from './CardComponent'
import AspiringWomen1 from './AspiringWomen1'
import ArticleList from './ArticleCard'
import Slider from '../components/carousel/Slider'

const Home = () => {
    return (
        <div className='container'>
        
           <Head />
           {/* <Slider/> */}
         <CardComponent />
           <AspiringWomen1/> 
           <ArticleList/>
           
    
        </div>
      )
    }


export default Home


