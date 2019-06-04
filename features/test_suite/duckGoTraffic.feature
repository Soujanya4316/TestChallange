@runall @test
Feature: Duck Go Traffic
	As a Customer
	Duck Go Traffic serach


Scenario: Site Traffic
   Given I am on the traffic page
   When I click on the 2018 Traffic section
   Then I should see all the months listed in the order from Dec to Jan
   And The Total Direct Queries should be equal to the sum of all the total directs from each month