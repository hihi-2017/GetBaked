exports.seed = function (knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipe_id: 1, category_name:'Cakes and Tortes', category_id: 2201, recipe_name: 'Chocolate Layer Cake', chef_name: 'Ina Garten aka The Barefoot Contessa', recipe_image_url: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/3/22/0/ig0807_cake.jpg.rend.hgtvcom.616.462.jpeg', recipe_ingredients: '1 3/4 cups flour, plus more for dusting cake pans, 2 cups sugar, 3/4 cups cocoa powder, 2 teaspoons baking soda, 1 teaspoon baking powder, 1 teaspoon kosher salt, 1/2 cup oil, 2 large eggs, 1 teaspoon vanilla extract, 1 cup hot, strong coffee', recipe_method:
        'Directions: Preheat oven to 350°F. Butter two 8-in cake pans and dust with flour. Combine all dry ingredients in the bowl of a stand mixer and mix until combined. In a small bowl, combine buttermilk, oil, eggs, and vanilla. Pour buttermilk mixture into dry ingredients and beat just until smooth. Add coffee and mix just until incorporated. Divide batter, which will be incredibly runny, evenly between the two pans. Bake for 35 to 40 minutes until a toothpick stuck in the center of each cake comes out clean. Remove from oven and allow to cool in the pans for 10-15 minutes before turning out onto a wire rack to cool completely. Frost cakes as desired.', recipe_comments: "Don't even think about disgracing Ina by using average vanilla or cocoa in this recipe."},

        {recipe_id: 2, category_name:'Bread', category_id: 2206, recipe_name: 'Chocolate Babka', chef_name: 'Yotam Ottolenghi', recipe_image_url: 'https://s-media-cache-ak0.pinimg.com/736x/b7/72/40/b77240543b30f884bf75e11539915c77.jpg', recipe_ingredients: 'For the dough: 4 cups flour, plus extra for dusting, 1/2 cup superfine sugar, 2 teaspoons fast-rising active dry yeast, grated zest of 1 small lemon, 3 free-range eggs, 1/2 cup water, rounded 1/4 tsp salt, 150 g unsalted butter, at room temperature, cut into 3/4-inch / 2cm cubes, sunflower oil, for greasing, For the chocolate filling: Scant 1/2 cup confectioners’ sugar, 1/3 cup cocoa powder, 130 g good-quality dark chocolate, melted, 120 g unsalted butter, melted, 1 cup pecans, coarsely chopped, 2 tbsp superfine sugar, For the sugar syrup: 2/3 cup water, 1 1/4 cups superfine sugar', recipe_method: "",
        recipe_comments: "It's heaven."},

        {recipe_id: 3, category_name:'Pies, Crumbles, and Tarts', category_id: 2202, recipe_name: 'Crack Pie', chef_name: 'Christina Tosi', recipe_image_url: 'http://milkbarstore.com/main/wp-content/uploads/2015/04/Staged_Pie_Crack_High_04.jpg', recipe_ingredients: 'Crack and pie', recipe_method: 'It is long.', recipe_comments: "You will quickly learn where this pie got its name." },

        {recipe_id: 4, category_name:'Candy and Confectioneries', category_id: 2205, recipe_name: 'English Toffee', chef_name: 'Alyssa', recipe_image_url: 'http://cf.therecipecritic.com/wp-content/uploads/2014/11/toffee-3.jpg', recipe_ingredients: "1 cup toasted almonds, 1 cup butter, cut into 1-inch cubes, 1 cup sugar, 1/4 teaspoon salt, 1 teaspoon vanilla, 2 cups milk chocolate chips, 1/4 cup finely chopped pecans", recipe_method:
        "Line a baking sheet with foil and place the almonds in a single layer on the foil - space them out as best you can. Add sugar, butter, vanilla, and salt to a large sauce pan (at least 2-quarts and it needs to have a thick bottom - not a thin metal one or your toffee will burn!) and melt over medium heat, stirring throughout. When ingredients are completely melted, continuously stir and gradually increase heat to medium-high. Keep stirring, stirring, stirring for 9-15 minutes until the toffee is a golden brown color. As soon as it reaches that color, quickly pour over almonds in your prepared pan. Allow to cool for about 2-3 minutes, then sprinkle with chocolate chips. Allow to sit for another couple of minutes so the chocolate chips will melt, then spread over the toffee. Sprinkle with chopped pecans and allow to cool completely. After toffee and chocolate and completely cooled, use a butter knife to break apart the toffee. Store in an airtight container at room temperature.", recipe_comments: "Toffee. It's everyone's favourite holiday treat." },

        {recipe_id: 5, category_name:'Candy and Confectioneries', category_id: 2205, recipe_name: 'Hokey Pokey', chef_name: 'Rachel', recipe_image_url: 'http://www.madefromscratch.co.nz/wp-content/uploads/2013/10/18.jpg', recipe_ingredients: '5 tablespoons white sugar, 2 tablespoons golden syrup, 1 teaspoon baking soda', recipe_method: 'Line a baking tray with baking paper and set aside. Add the sugar and golden syrup to a medium sauce pan and place over a low heat - stir constantly until the sugar dissolves. Increase the heat and bring to the boil for around two minutes - stir if needed to stop it from burning. Remove from heat and add the baking soda, stir quickly until the mixture froths up and all of the ingredients are combined. Pour onto the baking tray lined with paper - you don’t want to spread it too thin. Allow to cool until hard before breaking into pieces.', recipe_comments: "New Zealand's favourite!"},

        {recipe_id: 6, category_name:'Bread', category_id: 2206, recipe_name: 'Chocolate Babka', chef_name: 'Yotam Ottolenghi', recipe_image_url: 'https://s-media-cache-ak0.pinimg.com/736x/b7/72/40/b77240543b30f884bf75e11539915c77.jpg', recipe_ingredients: 'For the dough: 4 cups flour, plus extra for dusting, 1/2 cup superfine sugar, 2 teaspoons fast-rising active dry yeast, grated zest of 1 small lemon, 3 free-range eggs, 1/2 cup water, rounded 1/4 tsp salt, 150 g unsalted butter, at room temperature, cut into 3/4-inch / 2cm cubes, sunflower oil, for greasing, For the chocolate filling: Scant 1/2 cup confectioners’ sugar, 1/3 cup cocoa powder, 130 g good-quality dark chocolate, melted, 120 g unsalted butter, melted, 1 cup pecans, coarsely chopped, 2 tbsp superfine sugar, For the sugar syrup: 2/3 cup water, 1 1/4 cups superfine sugar', recipe_method: "",
        recipe_comments: "It's heaven."},

        { recipe_id: 7, category_name: 'Bread', category_id: 2206, recipe_name: 'Traditional Baguettes', chef_name: "Dr. Bread", recipe_image_url: "https://s-media-cache-ak0.pinimg.com/736x/f5/95/aa/f595aafe443c1a43ec23a7167daff149.jpg", recipe_ingredients: "Bread", recipe_method: "Make bread", recipe_comments: "it's bread" },

        { recipe_id: 8, category_name: 'Pies, Crumbles, and Tarts',
          category_id: 2202, recipe_name: 'Raspberry Pie', chef_name: "Mrs. Pie Lady", recipe_image_url: "http://clv.h-cdn.co/assets/15/12/640x640/square-1426610944-138638408.jpg", recipe_ingredients: "Pie", recipe_method: "Make pie", recipe_comments: "it's pie" },

        { recipe_id: 9, category_name: 'Cookies and Bars', category_id: 2203, recipe_name: 'Cookies', chef_name: "Mr.Cookerson", recipe_image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGdPLQMjOo0AHKJbJ4q1Gaqm8Q6SVqLlAr6Qu0zjFLRj6MEMCfw",
          recipe_ingredients: "Cookies", recipe_method: "Make cookies", recipe_comments: "it's cookies" },

        { recipe_id: 10, category_name: 'Custard, Mousse, and Pudding', category_id: 2204, recipe_name: 'Chocolate Mousse', chef_name: "Bullwinkle", recipe_image_url: "http://img.taste.com.au/I3x-cteh/taste/2010/01/chocolate_mousse_in_minutes_1980x1320-117905-1.jpg", recipe_ingredients: "Chocolate and mooses", recipe_method: "Make the mousse", recipe_comments: "it's moussey"},

        { recipe_id: 11, category_name: 'Muffins and Breakfast Pastries', category_id: 2207, recipe_name: 'Breakfast Pastry', chef_name: "Patty Pastry",
          recipe_image_url: "http://i.huffpost.com/gen/1060168/images/o-BREAKFAST-PASTRIES-facebook.jpg",
          recipe_ingredients: "Pastry",
          recipe_method: "Make pastry",
          recipe_comments: "it's pastry"
        },
        { recipe_id: 99908,
          category_name: 'Ice Cream and Frozen Desserts',
          category_id: 2208,
          recipe_name: 'Ice Cream',
          chef_name: "Ben and or Jerry",
          recipe_image_url: "http://www.theprairiehomestead.com/wp-content/uploads/2015/08/blueberry-cheesecake-ice-cream-recipe.jpg",
          recipe_ingredients: "Ice cream",
          recipe_method: "Make ice cream",
          recipe_comments: "it's creamy"
        },
        { recipe_id: 99909,
          category_name: 'Frosting, Glazes, and Sauces',
          category_id: 2209,
          recipe_name: 'Chocolate Sauce',
          chef_name: "Saucy McSaucerson",
          recipe_image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5rJXo52G1TQeewDXOXA-myaV-3BUtfGVO8LNDK7mK1k3wztp",
          recipe_ingredients: "Chocolate",
          recipe_method: "Make sauce",
          recipe_comments: "it's saucy"
        },
        { recipe_id: 99910,
          category_name: 'Ice Cream and Frozen Desserts',
          category_id: 2208,
          recipe_name: 'Ice Cream Sandwiches',
          chef_name: "Ice Cream Man",
          recipe_image_url: "https://www.turkeyhill.com/images/ice-cream-recipes.jpg",
          recipe_ingredients: "Ice cream",
          recipe_method: "Make ice cream",
          recipe_comments: "it's creamy and sandwich-y"
        },
        { recipe_id: 99911,
          category_name: 'Cookies and Bars',
          category_id: 2204,
          recipe_name: 'Peanutbutter Cookies',
          chef_name: 'Mr. Peanut',
          recipe_image_url: "http://relish.com/wp-content/uploads/2011/07/24894_peanut_butter_cookie-670x405.jpg",
          recipe_ingredients: "Cookies",
          recipe_method: "Make cookies",
          recipe_comments: "it's cookies"
        },
        { recipe_id: 99912,
          category_name: 'Cookies and Bars',
          category_id: 2204,
          recipe_name: 'Raspberry Crumble Bars',
          chef_name: 'Mr. Raspberry',
          recipe_image_url: "http://assets.epicurious.com/photos/55ac4e7398d8666b6dcdac5a/master/pass/EP_15072015_BARCOOKIE_strawberrybuckweatbars_6x4.jpg",
          recipe_ingredients: "Cookies",
          recipe_method: "Make cookies",
          recipe_comments: "it's cookies"
        },
        { recipe_id: 99913,
          category_name: 'Cookies and Bars',
          category_id: 2204,
          recipe_name: 'Raspberry Champagne Macarons',
          chef_name: 'Frenchy McFrenchface',
          recipe_image_url: "https://static1.squarespace.com/static/56315ccee4b068a9afd70559/t/56b94c4eb09f955797c21fef/1454984283286/Raspberry+Macarons",
          recipe_ingredients: "Cookies",
          recipe_method: "Make cookies",
          recipe_comments: "it's cookies"
        },
        { recipe_id: 99914,
          category_name: 'Bread',
          category_id: 2202,
          recipe_name: 'Classic Brioche',
          chef_name: "Dr. Bread",
          recipe_image_url: "http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/brioches__ttes_39328_16x9.jpg",
          recipe_ingredients: "Bread",
          recipe_method: "Make bread",
          recipe_comments: "it's bread"
        },
        { recipe_id: 99915,
          category_name: 'Bread',
          category_id: 2202,
          recipe_name: 'Farmhouse Bread',
          chef_name: "Dr. Bread",
          recipe_image_url: "https://s-media-cache-ak0.pinimg.com/736x/35/f5/4a/35f54a72b2d52285299c70f4a3ed5708.jpg",
          recipe_ingredients: "Bread",
          recipe_method: "Make bread",
          recipe_comments: "it's bread"
        },
        { recipe_id: 99916,
          category_name: 'Bread',
          category_id: 2202,
          recipe_name: 'Bread',
          chef_name: "Dr. Bread",
          recipe_image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUDAzKLRLbzB1zeiZk2LPgIBuIwrI_zcIWuvip_5YZY-I9ypq",
          recipe_ingredients: "Bread",
          recipe_method: "Make bread",
          recipe_comments: "it's bread"
        }
      ]);
    });
};
