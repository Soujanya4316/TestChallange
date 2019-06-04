const {Selector} = require('testcafe');

module.exports = {

    trafficpageurl: 'https://start.duckduckgo.com/traffic',
    
    SiteTraffic: {

         trafficYearSelector: function(){
             return Selector('.traffic__year__left > h2').with({ boundTestRun: testController});
         },

         trafficYearExpandedSelector: function(){
            return Selector('.blk--content > .blk__text:nth-child(3)').with({ boundTestRun: testController});
         },

         trafficMonths: async function(){
             var allTrafficMonthsSelector = [];
             var months = [];
             
             allTrafficMonthsSelector =  Selector('.blk--content > .blk__text:nth-child(3) > .traffic__year.expanded > .traffic__month').with({ boundTestRun: testController});
             var trafficMonthsCount = await allTrafficMonthsSelector.count;             
             console.log('Total months count is : ' + trafficMonthsCount);

             for(let i=0; i<trafficMonthsCount; i++){
                 months.push(await allTrafficMonthsSelector.nth(i).find('h3').innerText);
                 
             }
             console.log('All months in 2018 are as below : ' + months);
             return months;  

        },

        totalDirectsPerMonth: async function(){
            var monthlyDirects = [];
            var directs = [];
            
            monthlyDirects =  Selector('.blk--content > .blk__text:nth-child(3) > .traffic__year.expanded > .traffic__month  .traffic__month__right h2').with({ boundTestRun: testController});
            var monthlyDirectsCount = await monthlyDirects.count;             
            console.log('Monthly directs count is : ' + monthlyDirectsCount);

            for(let i=0; i<monthlyDirectsCount; i++){
                directs.push(await monthlyDirects.nth(i).innerText);
            }
            console.log(directs);

            var sum = 0;
               for( let i = 0; i < directs.length; i++ ){
                   var directsInNumber = Number(directs[i].replace(/[^0-9.-]+/g,""));
                   //sum += convertToNumber;
                   sum = sum + directsInNumber;
               }
               console.log('Sum of all months directs : ' + sum);
               return sum;  

       },

       totalDirectQueries: async function(){
    
       var  totalDirectsSelector =  Selector('.blk--content > .blk__text:nth-child(3) > .traffic__year.expanded .traffic__year__right > h2').with({ boundTestRun: testController});
       var totalQueries = await totalDirectsSelector.innerText;
       var totalQueriesInNumber = Number(totalQueries.replace(/[^0-9.-]+/g,""));
       console.log('Total direct queries : ' + totalQueriesInNumber);
       return totalQueriesInNumber;

       }

    }

}
