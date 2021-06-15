
function hashStringToInt(s, tableSize) {
    let hash = 17;

    for(let i = 0; i< s.length; i++){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }
    return hash
}

class HashTable {

    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        if(this.table[idx]) {
            this.table[idx].push([key, value])
        } else {
            this.table[idx] = [[key, value]]
        }
    }

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length)
        
        if(!this.table[idx]) return null;
        else return this.table[idx].find(x => x[0] === key)[1]
    }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.setItem('lastName', 'timey');
myTable.setItem('age', '6');
myTable.setItem('dob', '1/23/45');
// myTable.getItem('firstName');

console.log(myTable.getItem('firstName')); 
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('dob'));