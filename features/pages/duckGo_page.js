const {Selector} = require('testcafe');

module.exports = {

    homepageurl: 'https://start.duckduckgo.com/',
    
    logoanchor : {
        ducklogo: function() {
            return Selector('.logo_homepage').with({ boundTestRun: testController })
        }
        
     },

    search: {

        searchinputfield: function() {
            return Selector('#search_form_input_homepage').with({ boundTestRun: testController })
         },

         searchicon: function() {
            return Selector('#search_button_homepage').with({ boundTestRun: testController })
         },

        searchsuggession: async function() {
            var elementSelected = Selector('#search_form_homepage > .search__autocomplete > .acp-wrap > .acp').with({ boundTestRun: testController });
            var suggesionsCount = await elementSelected.count;          
            return suggesionsCount;
         },

         firstsearchsuggession: async function() {
            var elementSelected1 = Selector('#search_form_homepage > .search__autocomplete > .acp-wrap > .acp').with({ boundTestRun: testController });
            var firstSuggesion =  await elementSelected1.nth(0).innerText;
            console.log(firstSuggesion);
            return firstSuggesion;
         },

         firstsearchresult: async function() {
            var firstSearchSelector = Selector('.js-results > #r1-0 .result__a').with({ boundTestRun: testController })
            var searchresult = await firstSearchSelector.innerText
            console.log('First search result is : ' + searchresult);
            return searchresult;
         },
         
         searchResultCount: async function() {
            var searchResultsSelector = Selector('.js-results > .results_links_deep').with({ boundTestRun: testController })
            var searchResultTotalCount = await searchResultsSelector.count
            console.log('Total count of search results is : ' + searchResultTotalCount);
            return searchResultTotalCount;
         }            
     
     },

     MenuItems : {

        HamMenu: function() {
            return Selector('.header__button--menu').with({ boundTestRun: testController })
        },

        ThemeLink: function() {
            return Selector('.clear > a').with({ boundTestRun: testController })
        },        

        ThemeLinkText: async function() {           

            var ThemeSelector = Selector('.clear > a').with({ boundTestRun: testController })
            var ThemeLinkText = await ThemeSelector.innerText
            console.log('Fisrtlink item is : ' + ThemeLinkText);
            return ThemeLinkText;
        },

        darkThemeSelector: function() {
            return Selector('.set-theme__label').with({ boundTestRun: testController });
        },

        pageBackgroundSelector: function() {
            return Selector('#pg-settings').with({ boundTestRun: testController });
        }

    }

}

   
        
     
     