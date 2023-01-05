const Recipe = ({title,calories,mealtype,image,ingredients})=>{

    return(
        <div>
            <h2>{title}</h2>
            <h3>{calories} Calories</h3>
            <ul>{ingredients.map((ingredient,index)=><li key={index}>{ingredient.text}</li>)}</ul>
            <p>{mealtype}</p>
            <img src={image} alt={title}/>
        
        </div>
    )
}

export default Recipe;