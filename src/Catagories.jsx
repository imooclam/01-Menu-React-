  ///////////////////////////////////////////
  // .. fifth step
  //////////////////////////////////////////
const Catagories = ({filterCategories ,categories}) => {

  console.log(categories);
  return (
    <div className="btn-container">

      {categories.map((category, i) => {
            return ( 
              <button
              type="button"
              className="filter-btn"
              key={i}
              onClick={() => filterCategories(category)}
            >
              {/* here we setup category */}
              {/* So iwant to said if the item.categories === catogories I pass in  so if it is return  new array with this  catogories
              I just filter orginal list and get anew list  */}
    {/* const newCategory= data.filter(item=>item.category===categories)
    setMenuItems(newCategory) */}
              {category}
            </button>
          
         
        );
      })}
    </div>
    // <section className="btn-container">
    //   {categories.map((category,index)=>{
    //     // array not destructed
    //     return  <button type="button" className="filter-btn" onClick={()=>filterCategories(category)}  key={index}>
    //         {category}
    //    </button> 


    //   })}

    // </section>
    
  )
}
export default Catagories
     
      // <button type="button" className="filter-btn" onClick={()=>filterCategories("breakfast")}>
      //   breakfast
      // </button>

// const Categories = ({ categories, filterItems }) => {
  // return (
  //   <div className="btn-container">
  //     {categories.map((category, index) => {
  //       return (
  //         <button
  //           type="button"
  //           className="filter-btn"
  //           key={index}
  //           onClick={() => filterItems(category)}
  //         >
  //           {category}
  //         </button>
  //       );
  //     })}
  //   </div>
  // );
// };

// export default Categories;
