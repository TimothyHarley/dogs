import axios from 'axios';
// long way if you want to manipulate data first
// const getDogs = () => {
//     return new Promise((resolve, reject) => {
//         axios.get('https://random-dogs-api.herokuapp.com/dogs/23')
//         .then((data) => {
//             const cleanData = data.data.dogs;
//             resolve(data)
//         })
//         .catch((err) => {
//             reject(err);
//         })
//     })
// }

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');


export default { getDogs };
