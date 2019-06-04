# Test_Challenge_All_ACs
Test Challenge with all AC's

# Integration of TestCafe and CucumberJS

This is a demonstration of integration [TestCafé](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe and Cucumber.

Big thank you to [helen-dikareva](https://github.com/helen-dikareva/) for your help in starting the integration with your [repo](https://github.com/helen-dikareva/testcafe-cucumber-demo). This is a fork of all of the hard work you've put in. 

Also, thanks to the team at [TestCafé](https://github.com/DevExpress/testcafe) for allowing testers to break away from Selenium.

**Depreciation Notice** - [There are talks to officially support the Gherkin syntax in TestCafé](https://github.com/DevExpress/testcafe/issues/1373#issuecomment-291526857). Once those changes are in place I will no longer support this repo. Please voice your support of these changes becoming native to TestCafé.

## Versions
<table>
<tr>
    <td>TestCafé</td>
    <td>1.1.0</td>
</tr>
<tr>
    <td>CucumberJS</td>
    <td>5.1.0</td>
</tr>
</table>

## Installation 

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Navigate to the root of the repo
3. Use the `npm install` command to istall node modules.
4. Use npm `npm install -g testcafe` to install testcafe
5. Install Cucumber(Gherkin) full support and Powershell extension on VS code

## Running tests

Use command `cd scripts` to get into the scripts folder before running the scripts
Use `./run_test.ps1` to run the script

### Windows
You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `./run_test.ps1` commands in command prompt

## Documentation
* [Initial Setup](https://github.com/rquellh/testcafe-cucumber/wiki/Initial-Setup)
  * [Debuging in VSCode](https://github.com/rquellh/testcafe-cucumber/wiki/Debugging-in-VSCode)
* [Using TestCafé](https://github.com/rquellh/testcafe-cucumber/wiki/Using-TestCafe)
  * [Creating your first test](https://github.com/rquellh/testcafe-cucumber/wiki/Creating-your-first-test)
  * [Selectors](https://github.com/rquellh/testcafe-cucumber/wiki/Selectors)
  * [Actions](https://github.com/rquellh/testcafe-cucumber/wiki/Actions)
  * [Assertions](https://github.com/rquellh/testcafe-cucumber/wiki/Assertions)
* [TestCafé & CucumberJS](https://github.com/rquellh/testcafe-cucumber/wiki/TestCafe-&-CucumberJS)
  * [Helpful VSCode Setup](https://github.com/rquellh/testcafe-cucumber/wiki/Helpful-VSCode-Setup)
  * [Creating Features](https://github.com/rquellh/testcafe-cucumber/wiki/Creating-Features)
  * [Creating Step Definitions](https://github.com/rquellh/testcafe-cucumber/wiki/Creating-Step-Definitions)
  * [Adding TestCafé Functionality to Cucumber steps](https://github.com/rquellh/testcafe-cucumber/wiki/Adding-TestCafe-Functionality-to-Cucumber-steps)
  * [Harnessing Cucumber's Power](https://github.com/rquellh/testcafe-cucumber/wiki/Harnessing-Cucumber's-Power)
  * [Page Object](https://github.com/rquellh/testcafe-cucumber/wiki/Page-Object)
  * [Running Tests](https://github.com/rquellh/testcafe-cucumber/wiki/Running-Tests)
  * [Reporting and Taking Screenshots](https://github.com/rquellh/testcafe-cucumber/wiki/Reporting-and-Taking-Screenshots)

## Notes

* As i have already defined @test tag in scripts file and package.json file. Can use @test tag at the top of feature file and run ./run_test.ps1.

* Go to the workspace and give the command 'cd scripts' first before running the scripts.

* Have completed all the AC's. AC 1-6 in duckGo.feature and AC7 in duckGoTraffic.feature.

* My solution closes the TestCafé browser between each scenario. I tried to keep it open between scenarios but had trouble with handling failures. If you find a solution, I'd like to know.

* With TestCafé version 0.19.0, you no longer have to manually update stack-chain. Thank you to the TestCafé crew for making the integration much easier.

## Contributors 
Thanks to everyone who has contributed to this project over the last few years.

[<img alt="cmasekar" src="https://avatars0.githubusercontent.com/u/6192576?s=460&v=4" width="115">](https://github.com/cmasekar) |[<img alt="benkirbyten10" src="https://avatars0.githubusercontent.com/u/29120362?s=460&v=4" width="115">](https://github.com/benkirbyten10) |[<img alt="vvedachalam" src="https://avatars1.githubusercontent.com/u/7630355?s=460&v=4" width="115">](https://github.com/vvedachalam) |[<img alt="azzra" src="https://avatars3.githubusercontent.com/u/9268494?s=460&v=4" width="115">](https://github.com/azzra) |
:---: |:---: |:---: |:---: |
