/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
// import image from "./"

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{
        const{id,name,category,image,description} = curElem;
        return(
        <>
            <div className='card-container' key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className='card-number card-circle subtile'>{id}</span>
                        <span className="card-author subtile">{name}</span>
                        <h2 className="card-title">{category}</h2>
                        <span className="Card-description subtile">{description}</span>
                        <div className="card-read">Read</div>
                    </div>
                    <div className='image-conatiner'>
                    <img src={image} alt="image" />
                    </div>
                    <span className="card-tag subtile">Order Now</span>
                </div>
            </div>
        </>
            
        )
    })};
    </section>
    </>
  )
}

export default MenuCard
