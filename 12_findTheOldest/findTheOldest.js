const findTheOldest = function(args) {    

    const oldest = args.sort(function(a, b) {
        let aEnd = 0;
        let bEnd = 0;
        if (!('yearOfDeath' in a)){
            aEnd = new Date().getFullYear();
        }
        else{
            aEnd = a.yearOfDeath;
        }

        if (!('yearOfDeath' in b)){
            bEnd = new Date().getFullYear();
        }
        else{
            bEnd = b.yearOfDeath;
        }
        return aEnd - a.yearOfBirth > bEnd - b.yearOfBirth ? -1: 1;
        
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
