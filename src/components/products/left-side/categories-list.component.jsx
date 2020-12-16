


const CategoriesList = (props) => {

    const handleCategoryClick = (event) => {
        props.handleCategoryClick(event.target.dataset.id);
    }
    
    return (
        <ul className="search-options__categories">
            {
                props.categories.map(el => {
                    return(
                        <li data-id={el._id} onClick={handleCategoryClick} key={el._id} className="search-options__items">
                            {el.categoryName.toUpperCase()}
                        </li>
                    )
                })
            }
            
        </ul>
    )
}

export default CategoriesList;