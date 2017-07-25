let locations = {'North America': {'USA': ['Mountain View']}}

locations['North America']['USA'].push('Atlanta')
locations['Asia'] = {'India': ['Bangalore']}
locations['Asia']['China'] = ['Shanghai']
locations['Africa'] = {'Egypt': ['Cario']}

console.log(1)
let usaSorted = locations['North America']['USA'].sort()
console.log(usaSorted)
console.log(locations)
