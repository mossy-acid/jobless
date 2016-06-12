// const jobs = require('github-jobs');
// const Promise = require('bluebird');

// // jobs.find({
// //     term : 'Node.js'
// // }, function(err, results){
// //     if(err){
// //       return console.log('Error: ', err);
// //     }

// //     console.log('Found ' + results.length + ' jobs.');
// //     var positions = [];
// //     results.forEach(function(job){
// //       jobs.findById(job.id, function(err, result){
// //           if(err){
// //             return console.log('Error: ', err);
// //           }
// //           positions.push({
// //             company: result.company,
// //             jobTitle: result.title

// //           })
// //           //console.log(positions);
// //           if (results.length === positions.length) {
// //             console.log(positions);
// //           }
// //       });
// //     });
// // });


// jobs.find({
//   term : 'Node.js'
// })
// .then(function(results) {
//   console.log('Found ' + results.length + ' jobs.');
//   var positions = [];
//   results.forEach(function(job){
//     jobs.findById(job.id)
//       .then(function(result) {
//         positions.push({
//           company: result.company,
//           jobTitle: result.title
//         });
//         //console.log(positions);
//         if (results.length === positions.length) {
//           console.log(positions);
//         }
//       })
//       .catch(function(err) {
//         return console.log('Error: ', err);
//       });
//   });
// })
// .catch(function(err) {
//   return console.log('Error: ', err);
// });




// // jobs.find({
// //     term : 'Node.js'
// // }).then(function(results){
// //   // console.log('========',results);
// //   console.log('Found ' + results.length + ' jobs.');
// //   results.forEach(function(job){
// //     // console.log('jobs are ---', jobs.findById(job));
// //     console.log('you there?', job.id);
// //     jobs.findById(job.id).then(function(result){
// //         console.log('Job : ', result);
// //     }).catch(function(err){
// //       console.log('Error: ', err);
// //     });
// //   });
// // }).catch(function(err){
// //     console.log('Error: ', err);
// //   });