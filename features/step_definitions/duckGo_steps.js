const { Given, When, Then } = require('cucumber');

const duckpage = require('../pages/duckGo_page.js');

const ClientFunction = require('testcafe').ClientFunction;
const {Selector} = require('testcafe');


Given('I navigate to DuckDuckGo Home Page', async function () {
	await testController
		.navigateTo(duckpage.homepageurl)
});

Then('i should see duckduckgo logo on home page', async function () {
	await testController
		.expect(duckpage.logoanchor.ducklogo().getStyleProperty('background-image')).contains('logo_homepage.normal.v108.svg')
});


When('I type super text into the search box', async function () {
	await testController
	.typeText((duckpage.search.searchinputfield()),'super')
});

Then('I expect to see exactly 10 suggestions in the typeahead dropdown', async function () {
	await testController
		// .expect(duckpage.logoanchor.ducklogo().getStyleProperty('background-image')).contains('logo_homepage.normal.v108.svg')
		.expect(await duckpage.search.searchsuggession()).eql(10)

});

When('I type supercalafragalistic into the search box', async function () {
	await testController
	.typeText((await duckpage.search.searchinputfield()),'supercalafragalistic')
	
});


Then('I expect the first result in the suggessions to be supercalafragalisticexpialadoshus', async function () {
	await testController
		.expect(await duckpage.search.firstsearchsuggession()).contains('supercalafragalisticexpialadoshus')
});


When('I click on the hamburger menu in the top right', async function () {
	await testController	
	.click(duckpage.MenuItems.HamMenu())	
});


Then('I expect to see a themes link', async function () {
	await testController
	.expect(await duckpage.MenuItems.ThemeLinkText()).eql('Themes')
});

When('I click on the themes link', async function () {
	await testController	
	.click(duckpage.MenuItems.HamMenu())
	.click(duckpage.MenuItems.ThemeLink())	
});

Then('I click on the dark mode theme button', async function () {
	await testController
	.click(duckpage.MenuItems.darkThemeSelector().withText('Dark'))
});

Then('My page background should change colour', async function () {
	await testController
		.expect(duckpage.MenuItems.pageBackgroundSelector().getStyleProperty('background-color')).eql('rgb(51, 51, 51)')
});


When('I type {string} into the search box and click on magnifier glass', async function (searchText) {
	await testController
	.typeText((await duckpage.search.searchinputfield()),searchText)
	.click(duckpage.search.searchicon())
});

Then('I should get 10 results on the results page', async function () {
	await testController
		.expect(await duckpage.search.searchResultCount()).eql(10)
});


