import express from 'express';
import cors from 'cors';
import { sample_food, sample_tags } from './data';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost/4200'],
  })
);

app.get('/api/foods', (req, res) => {
  res.send(sample_food);
});

app.get('/api/foods/search/:searchTerm', (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = sample_food.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(foods);
});

app.get('/api/foods/tags', (req, res) => {
  res.send(sample_tags);
});

app.get('/api/foods/tag/:tagName', (req, res) => {
  const tagName = req.params.tagName;
  const foods = sample_food.filter((food) => food.tags?.includes(tagName));
  res.send(foods);
});

app.get('/api/foods/:foodId', (req, res) => {
  const foodId = req.params.foodId;
  const food = sample_food.find((food) => food.id == foodId);
  res.send(food);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
