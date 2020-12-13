import React, { Component } from 'react';
import './directory.styles.scss';
import Menuitem from '../menu-item/Menuitem.component'
class Directory extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             section:[
                 {
                     title:'Hats',
                     imageurl:"https://uploads-ssl.webflow.com/5b36a2c9df51e7d9e3f9291f/5c06f2d7561d9faf5454c857_laurent-wide-brim-hat.jpg",
                     id:1,
                     linkUrl:"hats"
                 },
                 {
                    title:'T-Shirts',
                    imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9MuFPNBJPvqeRLa89Ol2UVKol0Gy47mPfQ&usqp=CAU",
                    id:2,
                    linkUrl:""
                },
                {
                    title:'Shirts',
                    imageurl:"https://asset20.ckassets.com/thegoodlookbook/wp-content/uploads/sites/2/2018/08/fift-1.png",
                    id:3,
                    linkUrl:""
                },
                {
                    title:'Shoes',
                    imageurl:"https://www.globalbrandsmagazine.com/wp-content/uploads/2020/07/feet-1840619_640-1.jpg",
                    size:"large",
                    id:4,
                    linkUrl:""
                },
                {
                    title:'Pant',
                    imageurl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-691910437-1-1551118905.jpg?crop=0.502xw:1.00xh;0.234xw,0&resize=640:*",
                    size:"large",
                    id:5,
                    linkUrl:""
                }
             ]
        }
    }
    

    render() {
        return (
            <div className="directory-menu">
              {
                  this.state.section.map(({id,...otherSectionprops})=>(
                    <Menuitem key={id} {...otherSectionprops}></Menuitem>
                  ))
              }
             </div>
        );
    }
}

export default Directory;
