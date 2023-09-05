//   functtion to show time with only hour and munite
    
  function secToHour(sec){

    const munite =sec /  60
    const hour = sec / 3600
    const day = sec / 86400

    let remaningSec = Math.floor(sec -  (Math.floor(munite) * 60))
    let remainingMunite = Math.floor(munite -  (Math.floor(hour) * 60))
    let remainingHour = Math.floor(hour)

       
    if (remainingHour == 0 && remainingMunite == 0){
    
        return(`${sec} sec `)
    }
    
    else if (remainingHour == 0){
        
        return(`${remainingMunite} min ${remaningSec} sec `)
    }
    
    else {
    
        return(`${remainingHour} hrs ${remainingMunite} min `)
    }

   
    
  }

//   functtion to show time with year

  
// function secToHour(sec){

//     const munite =sec /  60
//     const hour = sec / 3600
//     const day = sec / 86400
//     const month = day / 30
//     const year = month /12
    
//     let remaningSec = Math.floor(sec -  (Math.floor(munite) * 60))
//     let remainingMunite = Math.floor(munite -  (Math.floor(hour) * 60))
//     let remainingHour = Math.floor(hour -  (Math.floor(day) * 24))
//     let remainingDay = Math.floor(day - (Math.floor(month) * 30))
//     let remainingMonth = Math.floor( month -  (Math.floor(year) * 12))
//     let remainingYear = Math.floor( year)
       
    
//     if (remainingYear == 0 && remainingMonth == 0 && remainingDay == 0 && remainingHour == 0 && remainingMunite == 0){
    
//         return(`${sec} sec `)
//     }
    
//     else if (remainingYear == 0 && remainingMonth == 0 && remainingDay == 0 && remainingHour == 0){
        
//         return(`${remainingMunite} min ${remaningSec} sec `)
//     }
    
//     else if (remainingYear == 0 && remainingMonth == 0 &&  remainingDay == 0){
    
//         return(`${remainingHour} hrs ${remainingMunite} min `)
//     }

//     else if (remainingYear == 0 && remainingMonth == 0 ){

//         return(`${remainingDay} day ${remainingHour} hrs`)
        
//     }
    
//     else if(remainingYear == 0 ){
//         return(`${remainingMonth} month ${remainingDay} days`)

//     }
    
//     else {
//         return(`${remainingYear} yrs ${remainingMonth} month  `)
        
//     }
    
    
//     }
    