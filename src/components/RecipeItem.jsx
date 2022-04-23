const RecipeItem = ({ recipe }) => {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = recipe[0];
  return (
    <div className="recipe">
      <img src={strMealThumb} alt={strMeal} />
      <h1>{strMeal}</h1>
      <h6>Category: {strCategory}</h6>
      {strArea ? <h6>Area: {strArea}</h6> : null}
      <table className="centered">
        <thead>
          <tr>
            <th>Ingrdient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe[0]).map(key => {
            if (key.includes('Ingredient') && recipe[0][key]) {
              return (
                <tr key={key}>
                  <td>{recipe[0][key]}</td>
                  <td>{recipe[0][`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {strYoutube ? (
        <div className="row">
          <iframe
            src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
            title={strMeal}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
      <p>{strInstructions}</p>
    </div>
  );
};

export default RecipeItem;
