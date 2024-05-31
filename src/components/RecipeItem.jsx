import { Link } from "react-router-dom";
import Button from "./elements/Button";

function RecipeItem({ details, view, itemIndex, onViewSelectedRecipe }) {
  const isRtl = view ? true : itemIndex % 2 === 0;
  const imagePath = details?.images?.full;

  const onPreviewModal = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    onViewSelectedRecipe(details);
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div
        className={`flex max-md:flex-col w-full rounded overflow-hidden ${
          !isRtl ? "flex-row-reverse" : ""
        }`}
      >
        <img className="w-full md:w-1/3" src={imagePath} alt={details.title} />
        <div className="flex flex-1 flex-col items-stretch">
          <div className="flex flex-col px-2 md:px-6 py-2 md:py-4">
            <div className="font-bold text-3xl">
              <Link to={`/recipe/${details.uuid}`}>{details.title}</Link>
            </div>
            <p className="text-gray-700 text-base mb-2">
              {details.description}
            </p>
            {view && (
              <div className="flex gap-8 align-bottom mt-8">
                <p className="text-gray-700 text-sm">
                  <span className="text-gray-400 font-bold">Cooking Time:</span>{" "}
                  {details.cookTime}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="text-gray-400 font-bold">Prep Time:</span>{" "}
                  {details.prepTime}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="text-gray-400 font-bold">Servings:</span>{" "}
                  {details.servings}
                </p>
              </div>
            )}
          </div>
          {!view ? (
            <div
              className={`px-2 py-2 md:px-6 md:py-4 flex ${
                !isRtl ? "justify-start" : "justify-start md:justify-end"
              }`}
            >
              <Button label="View Recipe" onClick={onPreviewModal} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {view && (
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-1/2  rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Ingredients: </h2>
              <ul className="list-disc ml-4">
                {details.ingredients &&
                  details.ingredients.map((ingredient, ingIndex) => (
                    <li key={ingIndex} className="capitalize">
                      ({ingredient.amount} {ingredient.measurement}){" "}
                      {ingredient.name}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Directions: </h2>
              <ol className="list-disc ml-4">
                {details.directions &&
                  details.directions.map((direction, dirIndex) => (
                    <li key={dirIndex}>
                      {direction.optional && (
                        <span className="text-gray-400">(Optional) </span>
                      )}
                      {direction.instructions}
                    </li>
                  ))}
              </ol>
            </div>
          </div>

          <div className="flex gap-8 justify-end">
            <p className="text-gray-700 text-sm">
              <span className="text-gray-400 font-bold">Post Date:</span>{" "}
              {details.postDate}
            </p>
            <p className="text-gray-700 text-sm">
              <span className="text-gray-400 font-bold">Edit Date:</span>{" "}
              {details.editDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeItem;
