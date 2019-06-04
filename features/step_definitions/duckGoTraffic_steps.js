const { Given, When, Then } = require('cucumber');

const Trafficpage = require('../pages/duckGoTraffic_page.js');

const ClientFunction = require('testcafe').ClientFunction;
const {Selector} = require('testcafe');


Given('I am on the traffic page', async function (){
	await testController
	.navigateTo(Trafficpage.trafficpageurl)

});
When('I click on the 2018 Traffic section', async function() {
	await testController
     .click(Trafficpage.SiteTraffic.trafficYearSelector().withText('2018 Traffic'))
});

Then('I should see all the months listed in the order from Dec to Jan', async function() {

	var expectedMonths = [ 'December 2018',
	'November 2018',
	'October 2018',
	'September 2018',
	'August 2018',
	'July 2018',
	'June 2018',
	'May 2018',
	'April 2018',
	'March 2018',
	'February 2018',
	'January 2018' ];

await testController	 
	 .expect(await Trafficpage.SiteTraffic.trafficMonths()).eql(expectedMonths)
});

Then('The Total Direct Queries should be equal to the sum of all the total directs from each month', async function() {


await testController
	 .expect(await Trafficpage.SiteTraffic.totalDirectsPerMonth()).eql(await Trafficpage.SiteTraffic.totalDirectQueries())
});