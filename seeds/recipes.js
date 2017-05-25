exports.seed = function (knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipe_id: 1, category_name:'Cakes and Tortes', category_id: 2201, recipe_name: 'Chocolate Layer Cake', chef_name: 'Ina Garten aka The Barefoot Contessa', recipe_image_url: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/3/22/0/ig0807_cake.jpg.rend.hgtvcom.616.462.jpeg', recipe_ingredients: '1 3/4 cups flour, plus more for dusting cake pans, 2 cups sugar, 3/4 cups cocoa powder, 2 teaspoons baking soda, 1 teaspoon baking powder, 1 teaspoon kosher salt, 1/2 cup oil, 2 large eggs, 1 teaspoon vanilla extract, 1 cup hot, strong coffee', recipe_method:
        'Directions: Preheat oven to 350°F. Butter two 8-in cake pans and dust with flour. Combine all dry ingredients in the bowl of a stand mixer and mix until combined. In a small bowl, combine buttermilk, oil, eggs, and vanilla. Pour buttermilk mixture into dry ingredients and beat just until smooth. Add coffee and mix just until incorporated. Divide batter, which will be incredibly runny, evenly between the two pans. Bake for 35 to 40 minutes until a toothpick stuck in the center of each cake comes out clean. Remove from oven and allow to cool in the pans for 10-15 minutes before turning out onto a wire rack to cool completely. Frost cakes as desired.', recipe_comments: "Don't even think about disgracing Ina by using average vanilla or cocoa in this recipe."},

        {recipe_id: 2, category_name:'Bread', category_id: 2202, recipe_name: 'Bread', chef_name: 'Dr. Bread', recipe_image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUDAzKLRLbzB1zeiZk2LPgIBuIwrI_zcIWuvip_5YZY-I9ypq', recipe_ingredients: 'bread', recipe_method:
        'Make the bread', recipe_comments: "It's bready."},

        {recipe_id: 3, category_name:'Pies, Crumbles, and Tarts', category_id: 2203, recipe_name: 'Raspberry Pie', chef_name: 'Pie Lady', recipe_image_url: 'http://clv.h-cdn.co/assets/15/12/640x640/square-1426610944-138638408.jpg', recipe_ingredients: 'Pie', recipe_method:
        'Pie', recipe_comments: "Pie"}
      ]);
    });
};
