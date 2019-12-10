// Input data from 
// https://adventofcode.com/2019/day/1/input
// Fetch Data from api ???

const masses = document.querySelector('pre').innerText.split(/\r?\n/);

// console.log(masses);


// const calcuateFuel  =  (mass) => {
//   return Math.floor(mass / 3) - 2 > 0 ? Math.floor(mass / 3) - 2 : 0;
// }

// const calcuateTotalFuel = (masses) => { 
//   return masses.map(mass => calcuateFuel(mass)).reduce((total, fuel) => 
//           total + fuel );
// }

//console.log(`Total Fuel: ${calcuateTotalFuel(masses)}`);


// PART TWO 
const calculateMoreFuel = (input) => {
    const calculateUntilNegativeFuelRequired = (moduleMass) => {
      const calculateFuel = (input) => {
        return (Math.floor(parseInt(input) / 3)) - 2;
      }; 
  
      let temp = calculateFuel(moduleMass);
      
      let totalTempFuel = 0;
  
      while (temp > 0) {
        totalTempFuel += temp;
        temp = calculateFuel(temp);
      }
  
      return totalTempFuel;
    }
  
    let fuel = masses.map(x => {
        return calculateUntilNegativeFuelRequired(x);
      })
      .reduce((totalFuel, currentCalculatedFuel) => {
        return totalFuel += currentCalculatedFuel;
      }, 0);
    
    return fuel;
  }
  


//   const calcuateTotalFuel = (masses) => { 
//     return masses.map(mass => calcuateFuel(mass)).reduce((total, fuel) => 
//             total + fuel );
//   }

console.log(calculateMoreFuel())