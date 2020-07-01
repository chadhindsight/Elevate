// Check to see how many pastries you can bake given an object of ingredients
const cakes = (recipe, has) => Math.min(
    //Spread out the array of keys first and do stuff
  ...Object.keys(recipe).map(key => Math.floor(has[key] / recipe[key] || 0))
)