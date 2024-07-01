Feature: Checkout a product
    @checkout
    Scenario: Add to cart and checkout a product
        Given I am on the home page
        When I click add to cart from product
        And I click on cart menu
        And I click checkout button
        And I fill the information
        And I click continue button
        And I click finish button
        Then I should see Thank you for your order!