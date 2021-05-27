const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


console.log("baslatildi")
yargs.command({
    command:'enstrumanara',
    description:'konu araştırılıyor',
    builder:{
        enstruman:{
            describe: 'enstruman Title',
            demandOption:true, 
            type:'string'
        }
       
    },
    handler: function(argv){
        notes.enstruman(argv.enstruman);

    }
})
yargs.command({
    command:'stillara',
    description:'stil ara',
    builder:{
        still:{
            describe: 'still Title',
            demandOption:true, 
            type:'string'
       
            }
    },
    handler: function(argv){
        
        notes.still(argv.still)

    }
}

)
yargs.command({
    command:'bestekarara',
    description:'bestekar ara',
    builder:{
        bestekar:{
            describe: 'bestekar Title',
            demandOption:true, 
            type:'string'
        }

    },
    handler: function(argv){
        notes.bestekar(argv.bestekar)
       

    }
})

yargs.command({
    command: 'all',
    describe: 'All Search',
    handler() {
        notes.all()
    }
}
)

yargs.parse()