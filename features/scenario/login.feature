Feature: Login to Swag Labs
    @login
    Scenario: Login to Swag Labs with valid username and password
        Given I am on the login page
        When I enter a valid username and password
        And I click on the login button
        Then I should be in home page
