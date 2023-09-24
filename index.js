import _ from 'lodash'
export default function solution(content){
    ///1
    const rows = content.split('\n');
    const data = rows.slice(2).map((row) => 
    row.split('|').slice(1, -1).map(el => el.trim()))
    
    //console.log(data)
   
  console.log(`Count: ${data.length}`); 

  //2
  const galaxy = data.map(row => (row[1]))
  const sortGalaxy = galaxy.sort()
  const setGalaxy = [...new Set(sortGalaxy)]
  console.log(`Galaxies: ${setGalaxy.join(', ')}`)

  //console.log(setGalaxy)
  //3
  const distance = data.map(row => (row[4]))
  console.log(distance)
  const maxDistance = Math.max(...distance)
  const minDistance = Math.min(...distance)
  console.log(`Farest from Earth: ${maxDistance} light years, closest to Earth: ${minDistance} light years`)
//4

}
