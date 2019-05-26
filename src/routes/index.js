const express = require('express');
const router = express.Router();
const Task = require('../app/models/task');
const Task2 = require('../app/models/task2.js');

router.get('/profile2', async (req, res) => {
  const tasks = await Task.find();
  const tasks2 = await Task2.find();
  res.render('profile2', {
    tasks,
    tasks2
  });
});


router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/profile2#crear');
});



router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect('/profile2#crear');
});



router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/profile2#crear');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({_id: id});
  res.redirect('/profile2#crear');
});


router.post('/add2', async (req, res, next) => {
  const task2 = new Task2(req.body);
  await task2.save();
  res.redirect('/profile2#conductores');
});

router.get('/turn2/:id', async (req, res, next) => {
  let { id } = req.params;
  const task2 = await Task2.findById(id);
  task2.status = !task2.status;
  await task2.save();
  res.redirect('/profile2#conductores');
});



router.get('/edit2/:id', async (req, res, next) => {
  const task2 = await Task2.findById(req.params.id);
  console.log(task2)
  res.render('edit2', { task2 });
});

router.post('/edit2/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task2.update({_id: id}, req.body);
  res.redirect('/profile2#conductores');
});

router.get('/delete2/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task2.remove({_id: id});
  res.redirect('/profile2#conductores');
});

module.exports = router;
