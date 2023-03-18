import { useState } from "react"
import Menu from "./Menu";
import Categories from "./Catagories";
import  data  from "./data";
function App() {

  // const allCategories= ["all",...new Set(data.map(item=>item.category))]
  const allCategories = ['all', ...new Set(data.map((item) => item.category))];

 console.log(allCategories);
 // So menu here I assign it as item and  categories where I but btn i make it empty arr
   ///////////////////////////////////////////
  // .. first step
  //////////////////////////////////////////
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  // console.log(...menuItems, menuItems[2].id);

  ///////////////////////////////////////////
  // .. forth step
  //////////////////////////////////////////
//  this is 4th step we said So i want to said if the item.categories === categories I pass in  so if it is return  new array with this  categories
//  I just filter original list and get anew list 

  const filterCategories=(categories)=>{
    // we display All btn
    if(categories==="all"){
      setMenuItems(data)
      return
    }
    // we create function and we pass string in it
    const newCategory= data.filter(item=>item.category===categories)
    setMenuItems(newCategory)
    
   }
     ///////////////////////////////////////////
  // .. second step
  //////////////////////////////////////////
  //  secondStep we are going to return
  return( 
    <article className="Menu__container">
      <article className="header__section">
        <section className="title">

          <h1>our Menu</h1>

        </section>
        <section className="title__underline"> </section>


      </article>

      <Categories categories={categories} filterCategories={filterCategories}/>
      <Menu items={menuItems}/>
    </article>
    
 )
  
}

export default App
