import {Typography} from "antd";



const category = {

'vehicles' :['Vehicles',
'Bicycles','Automotive Hand Tools',
 'Boats','Other Vehicles & Trailers',
 'Automotive Part & Accessories'],

 'fashion' : ['Womens Clothing',
 'Womens Accessories',
  'Mens Clothing',
  'Mens Accessories',
  'Shoes',
  'Jewelry', 'Watches',
  'Parts & Accessories',
  'Kids Clothing,Shoes & Accessories',

], 'software' : [
'Domain',
  'Web Application',
  'Mobile Application',
  'Desktop Application',
  'Other Application',],

  'booksmovmus' : [
'Musical Instruments & Gear',
'DVD & Movies',
'Books',
'Musics', 
],

'electronics' :  [
     'Computers, Tablets & Network Hardware',
     'Computers Parts & Accessories',
     'Cell Phones, Smart Watches & Accessories',
      'Video Games & Console',
      'Cameras & Photo',
      'TV, Video & Home Audio Electronics',
      'Portable Audio & Headphones',
      'Vehicle Electronics & GPS',
      'Multipurpose Power & Batteries',
       'Surveillance & Smart Home Electronics',
       'Old/Vintage Electronics',
       'Radio Communication Electronics',
        'Virtual Reality Headsets, Parts & Accessories',
  ],

   'realestate' : [
     'Land',
     'Residential',
     'Apartment',
     'Commercial',
     'Shops',
     'Room',
      'Other Real Estate',
],
 'collectart' : [
    'Art',
    'Collectibles',
    'Sports Card',
    'Paper Art & Craft Supplies',
    'Antiques',
    'Dolls & Teddy Bears',
    'Pottery & Glass',
    'Entertainment Memorabilia',
    'Stamps',
    
  ],

'homegarden':[
    'Yard, Garden & Outdoor Items',
     'Tools & Workshop Equipment',
     'Kitchen, Dinning & Bar Supples',
     'Home Improvement',
      'Household & Cleaning Supplies',
      'Camps, Lighting & Ceiling Fans',
       'Home Decor',
       'Home & Garden Furnitures',
       'Food & Beverages',
       'Major Appliances, Parts & Accessories',
        'Bedding',
        'Greeting Cards & Party Supplies',
        'Bathroom Supplies & Accessories',
        'Rugs & Carpets',
        'Window Treatments & Hardware',
        'Holiday & Seasonal Decor',
        'Wedding Supplies',
],
'sportgoods':[
     'Outdoor Sports Equipment',
      'Hunting Equipment',
      'Fitness, Running & Yoga Equipment',
       'Cycling Equipment',
       'Golf Equipment',
       'Fishing Equipment & Supplies',
       'Tennis & Racquel Sports',
       'Water Sports Equipment',
       'Indoor Games',
       'Team Sports Equipment',
  ],

 'toyHobbies':[
  'Action Figures',
  'RC Model Vehicles, Toys & Control Line',
  'Games',
  'Diecast & Toy Vehicles',
  'Collectible Card Games & Accessories',
  'Building Toys',
  'Model Railroads & Trains',
  'Toy Models & Kits',
  'Preschool Toys & Pretend Play',
  'Vintage & Antique Toys',
  'Outdoor Toys & Structures',
  'Slot Cars',
  'Puzzles',
  'Robot, Monster & Space Toys'
  ],
  
   'bussIndustry': [
  'Electrical Equipment & Supplies'  ,
  'Health Care, Lab & Dental',
  'Wire & Metal Manufacturing',
  'Test, Measurement & Inspection Equipment',
  'Office Equipment & Supplies',
  'Industrial Automation & Motion Control',
  'Heavy Equipment, Parts & Attachments',
  'Material Handling',
  'Facility Maintenance & Safety Equipment',
  'Restaurant & Food Services',
  'Light Industrial Equipment & Tools',
  'Hydraulics, Pheumatics, Pumps & Plumbing',
  'Retail & Services',
  'Printing & Graphic Arts',
  'Industrial Fasteners(Screw), Bolts & Hardware',
  'HVAC & Refrigeration',
  'Building Materials & Supplies',
  'Agriculture Forestry Equipment'
  ],

  'healthBeauty' : [
    'Skin Care Products',
    'Vitamins & Dietary SUpplements',
    'Haircare & Styling Products',
    'Fragrances',
    'Makeup Products',
    'Health Care Products',
    'Medical & Mobility',
    'Shaving & Hair Removal Products',
    'Manicure, Pedicure & Nail Products',
    'Natural & Alternative Remedies',
    'Vision Care Products',
    'Oral Care Products',
    'Oral Cone Products',
    'Bath & Body Products',
    'Massage Equipment & Supplier' ,
    'Sun Protection & Tanning Equipment',
    'Tattoos & Body Art Products'
  ],
  
  'otherItem':[
    'Tickets & Travels',
    'Gift Cards & Coupons',
    'Everything Else'
  ],

  'supermarket' : [
"Grains & Rice",
'Pasta',
"Noodles",
'Breakfast Foods',
"Herbs, Spices & Seasoning",
'Flours & Meals',
'Malt Drinks',
'Coffee',
'Water',
'Cooking Oil',
'Juices',
'Soft Drinks',
'Canned & Packaged Foods',
'Candy & Chocolate',
'Syrups, Sugars & Sweeteners',
'Disposable Diapers',
'Bottle Feeding',
'Wipes & Refills',
'Laundry',
'Air Fresheners',
'Toilet Paper & Wipes',
'Bathroom Cleaners',
'Dishwashing',
'Disinfectant Wipes',
'Beers',
'Vodka',
'Red Wine',
'Champagne & Sparkling Wine',
'White Wine',
'Whiskey',
'Liquors',
]

}

const motorsItem = ['Vehicles',
'Bicycles','Automotive Hand Tools',
 'Boats','Other Vehicles & Trailers',
 'Automotive Part & Accessories']

 const fashionItem = ['Womens Clothing',
 'Womens Accessories',
  'Mens Clothing',
  'Mens Accessories',
  'Shoes',
  'Jewelry', 'Watches',
  'Parts & Accessories',
  'Kids Clothing,Shoes & Accessories',

]
const software = [
'Domain',
  'Web Application',
  'Mobile Application',
  'Desktop Application',
  'Other Application',]

const booksmovmus = [
'Musical Instruments & Gear',
'DVD & Movies',
'Books',
'Musics', 
]

const elect =  [
     'Computers, Tablets & Network Hardware',
     'Computers Parts & Accessories',
     'Cell Phones, Smart Watches & Accessories',
      'Video Games & Console',
      'Cameras & Photo',
      'TV, Video & Home Audio Electronics',
      'Portable Audio & Headphones',
      'Vehicle Electronics & GPS',
      'Multipurpose Power & Batteries',
       'Surveillance & Smart Home Electronics',
       'Old/Vintage Electronics',
       'Radio Communication Electronics',
        'Virtual Reality Headsets, Parts & Accessories',
  ]

  const realest = [
     'Land',
     'Residential',
     'Apartment',
     'Commercial',
     'Shops',
     'Room',
      'Other Real Estate',
]
const collectart = [
    'Art',
    'Collectibles',
    'Sports Card',
    'Paper Art & Craft Supplies',
    'Antiques',
    'Dolls & Teddy Bears',
    'Pottery & Glass',
    'Entertainment Memorabilia',
    'Stamps',
    
  ]

const homgarden=[
    'Yard, Garden & Outdoor Items',
     'Tools & Workshop Equipment',
     'Kitchen, Dinning & Bar Supples',
     'Home Improvement',
      'Household & Cleaning Supplies',
      'Camps, Lighting & Ceiling Fans',
       'Home Decor',
       'Home & Garden Furnitures',
       'Food & Beverages',
       'Major Appliances, Parts & Accessories',
        'Bedding',
        'Greeting Cards & Party Supplies',
        'Bathroom Supplies & Accessories',
        'Rugs & Carpets',
        'Window Treatments & Hardware',
        'Holiday & Seasonal Decor',
        'Wedding Supplies',
]
const sportgoods=[
     'Outdoor Sports Equipment',
      'Hunting Equipment',
      'Fitness, Running & Yoga Equipment',
       'Cycling Equipment',
       'Golf Equipment',
       'Fishing Equipment & Supplies',
       'Tennis & Racquel Sports',
       'Water Sports Equipment',
       'Indoor Games',
       'Team Sports Equipment',
  ]

const toyHobbies=[
  'Action Figures',
  'RC Model Vehicles, Toys & Control Line',
  'Games',
  'Diecast & Toy Vehicles',
  'Collectible Card Games & Accessories',
  'Building Toys',
  'Model Railroads & Trains',
  'Toy Models & Kits',
  'Preschool Toys & Pretend Play',
  'Vintage & Antique Toys',
  'Outdoor Toys & Structures',
  'Slot Cars',
  'Puzzles',
  'Robot, Monster & Space Toys'
  ]
  
  
  const bussIndustry= [
  'Electrical Equipment & Supplies'  ,
  'Health Care, Lab & Dental',
  'Wire & Metal Manufacturing',
  'Test, Measurement & Inspection Equipment',
  'Office Equipment & Supplies',
  'Industrial Automation & Motion Control',
  'Heavy Equipment, Parts & Attachments',
  'Material Handling',
  'Facility Maintenance & Safety Equipment',
  'Restaurant & Food Services',
  'Light Industrial Equipment & Tools',
  'Hydraulics, Pheumatics, Pumps & Plumbing',
  'Retail & Services',
  'Printing & Graphic Arts',
  'Industrial Fasteners(Screw), Bolts & Hardware',
  'HVAC & Refrigeration',
  'Building Materials & Supplies',
  'Agriculture Forestry Equipment'
  ]
  
  
  const healthBeauty = [
    'Skin Care Products',
    'Vitamins & Dietary SUpplements',
    'Haircare & Styling Products',
    'Fragrances',
    'Makeup Products',
    'Health Care Products',
    'Medical & Mobility',
    'Shaving & Hair Removal Products',
    'Manicure, Pedicure & Nail Products',
    'Natural & Alternative Remedies',
    'Vision Care Products',
    'Oral Care Products',
    'Oral Cone Products',
    'Bath & Body Products',
    'Massage Equipment & Supplier' ,
    'Sun Protection & Tanning Equipment',
    'Tattoos & Body Art Products'
  ]
  const otherItem=[
    'Tickets & Travels',
    'Gift Cards & Coupons',
    'Everything Else'
  ]


  const supermarket = [
"Grains & Rice",
'Pasta',
"Noodles",
'Breakfast Foods',
"Herbs, Spices & Seasoning",
'Flours & Meals',
'Malt Drinks',
'Coffee',
'Water',
'Cooking Oil',
'Juices',
'Soft Drinks',
'Canned & Packaged Foods',
'Candy & Chocolate',
'Syrups, Sugars & Sweeteners',
'Disposable Diapers',
'Bottle Feeding',
'Wipes & Refills',
'Laundry',
'Air Fresheners',
'Toilet Paper & Wipes',
'Bathroom Cleaners',
'Dishwashing',
'Disinfectant Wipes',
'Beers',
'Vodka',
'Red Wine',
'Champagne & Sparkling Wine',
'White Wine',
'Whiskey',
'Liquors',
]

  const foodCupboard=[
"Grains & Rice",
'Pasta',
"Noodles",
'Breakfast Foods',
"Herbs, Spices & Seasoning",
'Flours & Meals',
'Malt Drinks',
'Coffee',
'Water',
'Cooking Oil',
'Juices',
'Soft Drinks',
'Canned & Packaged Foods',
'Candy & Chocolate',
'Syrups, Sugars & Sweeteners']

const babyProduct=[
'Disposable Diapers',
'Bottle Feeding',
'Wipes & Refills']

const housecleaning=[
'Laundry',
'Air Fresheners',
'Toilet Paper & Wipes',
'Bathroom Cleaners',
'Dishwashing',
'Disinfectant Wipes',
]

const bearWine =[
'Beers',
'Vodka',
'Red Wine',
'Champagne & Sparkling Wine',
'White Wine',
'Whiskey',
'Liquors',

]
  

   export const getcategory =(value)=>{

return category[value]

   }


   
  function getChildren(data=[]){
    
    const result=[];
  for (var x in data){
  
  result.push({
    value: data[x],
    label: <Typography.Text>{data[x]}</Typography.Text>,
    disabled: false,
  
  })
  }
  
  return result;
  
  }
  
  
  
  
const Options = [
  {
      value: 'Motors',
      label: <Typography.Text>Motors-</Typography.Text>,
      disabled: false,
      children: [...getChildren(motorsItem)],
    },
    {
        value: 'Fashion',
        label: <Typography.Text>Fashion-</Typography.Text>,
        disabled: false,
        children: [...getChildren(fashionItem) ],
      },


    {
      value: 'Books, Movies & Musics',
      label: <Typography.Text>Books, Movies & Musics-</Typography.Text>,
      disabled: false,
      children: [...getChildren(booksmovmus) ],
    },

  

     {
      value: 'Electronics',
      label: <Typography.Text>Electronics-</Typography.Text>,
      disabled: false,
      children: [...getChildren(elect)],
    },
    {
        value: 'Real Estate',
        label: <Typography.Text>Real Estate-</Typography.Text>,
        disabled: false,
        children: [...getChildren(realest) ],
      },
       {
        value: 'Software',
        label: <Typography.Text>Software-</Typography.Text>,
        disabled: false,
        children: [...getChildren(software) ],
      },{
        value: 'Supermarket',
        label: <Typography.Text>Supermarket-</Typography.Text>,
        disabled: false,
        children: [...getChildren(supermarket) ],
      },

    {
      value: 'Collectibles & Arts',
      label: <Typography.Text>Collectibles & Arts-</Typography.Text>,
      disabled: false,
      children: [...getChildren(collectart) ],
    },
    
    {
        value: 'Home & Garden',
        label: <Typography.Text>Home & Garden-</Typography.Text>,
        disabled: false,
        children: [...getChildren(homgarden) ],
      },

      {
        value: 'Sporting Goods',
        label: <Typography.Text>Sporting Goods-</Typography.Text>,
        disabled: false,
        children: [...getChildren(sportgoods)],
      },

      {
        value: 'Toys & Hobbies',
        label: <Typography.Text>Toys & Hobbies-</Typography.Text>,
        disabled: false,
        children: [...getChildren(toyHobbies)],
      },

      {
        value: 'Business & Industrial',
        label: <Typography.Text>Business & Industrial-</Typography.Text>,
        disabled: false,
        children: [...getChildren(bussIndustry)],
      },

      {
        value: 'Health & Beauty',
        label: <Typography.Text>Health & Beauty-</Typography.Text>,
        disabled: false,
        children: [...getChildren(healthBeauty)],
      },

      {
        value: 'Others',
        label: <Typography.Text>Others-</Typography.Text>,
        disabled: false,
        children: [...getChildren(otherItem)],
      },


   ] 




export const filterOptions= ['Vehicles',
'Bicycles','Automotive Hand Tools',
 'Boats','Other Vehicles & Trailers',
 'Automotive Part & Accessories',
 'Womens Clothing',
 'Womens Accessories',
  'Mens Clothing',
  'Mens Accessories',
  'Shoes',
  'Jewelry', 'Watches',
  'Parts & Accessories',
  'Kids Clothing,Shoes & Accessories',
  'Domain',
  'Web Application',
  'Mobile Application',
  'Desktop Application',
  'Other Application',
'Musical Instruments & Gear',
'DVD & Movies',
'Books',
'Musics', 
     'Computers, Tablets & Network Hardware',
     'Computers Parts & Accessories',
     'Cell Phones, Smart Watches & Accessories',
      'Video Games & Console',
      'Cameras & Photo',
      'TV, Video & Home Audio Electronics',
      'Portable Audio & Headphones',
      'Vehicle Electronics & GPS',
      'Multipurpose Power & Batteries',
       'Surveillance & Smart Home Electronics',
       'Old/Vintage Electronics',
       'Radio Communication Electronics',
        'Virtual Reality Headsets, Parts & Accessories',
     'Land',
     'Residential',
     'Commercial',
     'Shops',
     'Room',
      'Other Real Estate',
    'Art',
    'Collectibles',
    'Sports Card',
    'Paper Art & Craft Supplies',
    'Antiques',
    'Dolls & Teddy Bears',
    'Pottery & Glass',
    'Entertainment Memorabilia',
    'Stamps',
    'Yard, Garden & Outdoor Items',
     'Tools & Workshop Equipment',
     'Kitchen, Dinning & Bar Supples',
     'Home Improvement',
      'Household & Cleaning Supplies',
      'Camps, Lighting & Ceiling Fans',
       'Home Decor',
       'Home & Garden Furnitures',
       'Food & Beverages',
       'Major Appliances, Parts & Accessories',
        'Bedding',
        'Greeting Cards & Party Supplies',
        'Bathroom Supplies & Accessories',
        'Rugs & Carpets',
        'Window Treatments & Hardware',
        'Holiday & Seasonal Decor',
        'Wedding Supplies',
     'Outdoor Sports Equipment',
      'Hunting Equipment',
      'Fitness, Running & Yoga Equipment',
       'Cycling Equipment',
       'Golf Equipment',
       'Fishing Equipment & Supplies',
       'Tennis & Racquel Sports',
       'Water Sports Equipment',
       'Indoor Games',
       'Team Sports Equipment',
  'Action Figures',
  'RC Model Vehicles, Toys & Control Line',
  'Games',
  'Diecast & Toy Vehicles',
  'Collectible Card Games & Accessories',
  'Building Toys',
  'Model Railroads & Trains',
  'Toy Models & Kits',
  'Preschool Toys & Pretend Play',
  'Vintage & Antique Toys',
  'Outdoor Toys & Structures',
  'Slot Cars',
  'Puzzles',
  'Robot, Monster & Space Toys',
  'Electrical Equipment & Supplies'  ,
  'Health Care, Lab & Dental',
  'Wire & Metal Manufacturing',
  'Test, Measurement & Inspection Equipment',
  'Office Equipment & Supplies',
  'Industrial Automation & Motion Control',
  'Heavy Equipment, Parts & Attachments',
  'Material Handling',
  'Facility Maintenance & Safety Equipment',
  'Restaurant & Food Services',
  'Light Industrial Equipment & Tools',
  'Hydraulics, Pheumatics, Pumps & Plumbing',
  'Retail & Services',
  'Printing & Graphic Arts',
  'Industrial Fasteners(Screw), Bolts & Hardware',
  'HVAC & Refrigeration',
  'Building Materials & Supplies',
  'Agriculture Forestry Equipment',
    'Skin Care Products',
    'Vitamins & Dietary SUpplements',
    'Haircare & Styling Products',
    'Fragrances',
    'Makeup Products',
    'Health Care Products',
    'Medical & Mobility',
    'Shaving & Hair Removal Products',
    'Manicure, Pedicure & Nail Products',
    'Natural & Alternative Remedies',
    'Vision Care Products',
    'Oral Care Products',
    'Oral Cone Products',
    'Bath & Body Products',
    'Massage Equipment & Supplier' ,
    'Sun Protection & Tanning Equipment',
    'Tattoos & Body Art Products',
    'Tickets & Travels',
    'Gift Cards & Coupons',
    'Everything Else'
  ]





export default Options