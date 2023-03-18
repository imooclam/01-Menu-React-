

// 3rd step we display menu

const Menu = ({items}) => {
  return (
    <article className="grid grid__2__cols">
      {items.map(menuItem=>{
        const{id,title,category,desc,img,price}=menuItem
        return(
          <article key={id} className=" menu grid grid__2__cols">
           <img src={img} alt={title} className="menu__img" /> 
           <section className="menu__info">
            <div className="menu__header flex flex__sp">
              <h3 className="category">{category}</h3>
              <strong className="price">{price}</strong>

            </div>
            <h5>{desc}</h5>
           </section>
          </article>
        )


      })}
    </article>
    
  )
}
export default Menu