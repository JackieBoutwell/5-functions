// Morning Exercise (Easy):
// Access the value 5 and console it:

    // let easyObj = {
//     level1: {
//         prop1: "value1",
//         level2: {
//             prop2: "value2",
//             level3: {
//                 prop3: "value3",
//                 level4: {
//                     prop4: "value4",
//                     level5: {
//                         prop5: "value5"
//                     }
//                 }
//             }
//         }
//     }
// };

// console.log(easyObj.level1.level2.level3.level4.level5.prop5);


// Morning Problem 2 access value "you made it" (Medium)

// const mediumObject = {
//   level1: {
//     level2: {
//       level3: {
//         level4: {
//           level5: {
//             level6: {
//               level7: {
//                 level8: [
//                   {
//                     level9: {
//                       level10: [
//                         {
//                           level11: {
//                             level12: [
//                               [],
//                               {
//                                 level13: [
//                                   {
//                                     level14: {
//                                       level15: [
//                                         [],
//                                         [],
//                                         {
//                                           level16: {
//                                             level17: [
//                                               {
//                                                 level18: {
//                                                   level19: {
//                                                     level20: "You made it!"
//                                                   }
//                                                 }
//                                               }
//                                             ]
//                                           }
//                                         }
//                                       ]
//                                     }
//                                   }
//                                 ]
//                               }
//                             ]
//                           }
//                         }
//                       ]
//                     }
//                   }
//                 ]
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };

// console.log(mediumObject.level1.level2.level3.level4.level5.level6.level7.level8[0].level9. level10[0].level11.level12[1].level13[0].level14.level15[2].level16.level17[0].level18.level19.level20,);

// Morning Exercise (Hard):
// const hardObj = {
//     level1: {
//       level2: [
//         { level3: [] },
//         {
//           level3: {
//             level4: [
//               [],
//               {
//                 level5: [
//                   {
//                     level6: {
//                       level7: [
//                         [],
//                         [],
//                         {
//                           level8: [
//                             { level9: [] },
//                             {
//                               level9: [
//                                 {},
//                                 {
//                                   level10: [
//                                     [],
//                                     {
//                                       level11: {
//                                         level12: [
//                                           { level13: [] },
//                                           { level13: { level14: [[], [], { level15: { level16: [{ level17: { level18: [{ level19: [{ level20: "You made it on hard object!" }] }] } }] } }] }  },
//                                           { level13: [] }]
//                                     }}
//                                         ]
//                                       }
//                            ] },
//                                     []
//                                   ]
//                                 },
//                                 {}
//                               ]
//                             }
//                             },
//                           ]
//                         }
//                       ]
//                     }
//                   },
//                   { level6: [] }
//                 ]
//               },
//   };


//   console.log(hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1].level9[1].level10[1].level11.level12[1].level13.level14[2].level15.level16[0].level17.level18[0].level19[0].level20);


// Practice Activity 1

// function computeArea( width, height) {
//   const area = width * height;
//   console.log('The area of a retangle with a width of ' + width + ' '+ 'and a height of' + ' '+ height + 'is' + area + 'square units.');
// }

// computeArea(3,4)

// Activity 2
// Write a function named planetHasWater using the function expression syntax.

// It will have one parameter: planet.
// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!

// const planet = "mars";
// const planetsHasWater = (planet) => {
//   planet = planet.toLowerCase();
//   if (planet === "earth" || planet === "mars") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(planet + " is " + planetHasWater(planet));