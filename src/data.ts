import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 15,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Meatball',
    price: 25,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 7,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 5,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 4.4,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 13,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'7',
    name: 'Spicy Cheese Burger',
    price: 18,
    cookTime: '20-30',
    favorite: false,
    origins: ['Indian'],
    stars: 4.0,
    imageUrl: 'assets/food-7.jpg',
    tags: ['FastFood', 'Burger', 'Lunch'],
  },
  {
    id:'8',
    name: 'Vegetables Magento Pizza',
    price: 16,
    cookTime: '45-50',
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/food-8.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 8 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 3 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 2 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]
