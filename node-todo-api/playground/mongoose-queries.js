const {ObjectID} = require('mongodb');


const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// let id = '5b2d1702e5605d337c0eb393';
//
// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid')
// }
//
//
//
// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos)
// });
//
// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo', todo)
// });
//
// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo)
// }).catch(e => console.log(e));

User.findById('5b2d1b3b6b119132c8a6389d')
    .then(user => {
        if (!user) {
            return console.log("Unable to find User");
        }

        console.log(JSON.stringify(user, undefined, 2));
    })
    .catch(e => console.log(e));