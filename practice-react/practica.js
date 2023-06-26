export function filterByTerm(array, term) {
    let wordTerm = array.map( word => word.indexOf(term) != -1 ) 
    // if(wordTerm != -1){
    //     console.log(array);
    // }else{
    //     console.log([]);
    // }
    
//    console.log(wordTerm);
    // Tu código aquí 👈
    console.log(wordTerm);
  }



  filterByTerm(["ana", "santi", "nico", "anastasia"], "ana")