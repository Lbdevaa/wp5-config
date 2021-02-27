import './styles/main.sass';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenGauntletsRecipe,
  leather: 1,
  refinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log('elvenGauntletsRecipe: ', elvenGauntletsRecipe);