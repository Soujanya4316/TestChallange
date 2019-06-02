@test
Feature: Duck Go home page test
	As a Customer on duckduckgo home page
	I would see search functionality as expected

Background:
	Given I navigate to DuckDuckGo Home Page

Scenario: Check duckduckgo logo
    Then i should see duckduckgo logo on home page

Scenario: Search Suggestion count in dropdown
    When I type super text into the search box
	Then I expect to see exactly 10 suggestions in the typeahead dropdown

Scenario: First search suggestion in dropdown 
	When I type supercalafragalistic into the search box
	Then I expect the first result in the suggessions to be supercalafragalisticexpialadoshus

Scenario: Themes Link in Hamburger Menu
    When I click on the hamburger menu in the top right
	Then I expect to see a themes link

Scenario: Page background on Theme Change
    When I click on the themes link
	Then I click on the dark mode theme button
	Then My page background should change colour

Scenario: Number of results on Search Result Page
	When I type "Back to Future" into the search box and click on magnifier glass
	Then I should get 10 results on the results page
	And I navigate to DuckDuckGo Home Page
	When I type "BMX Bandits" into the search box and click on magnifier glass
	Then I should get 10 results on the results page
	And I navigate to DuckDuckGo Home Page
	When I type "Rocky IV" into the search box and click on magnifier glass
	Then I should get 10 results on the results page
	And I navigate to DuckDuckGo Home Page
	When I type "Short Circuit" into the search box and click on magnifier glass
	Then I should get 10 results on the results page
	And I navigate to DuckDuckGo Home Page
	When I type "The Terminator" into the search box and click on magnifier glass
	Then I should get 10 results on the results page
	And I navigate to DuckDuckGo Home Page
	When I type "Ferris Bueller's day off" into the search box and click on magnifier glass
	Then I should get 10 results on the results page
