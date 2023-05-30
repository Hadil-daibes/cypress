Feature: Login

  # I want to Log into Conduit


  Scenario: Conduit Login
    Given I open the Conduit login page
    When I type the email and password
    And I click on the Sign in button
    Then "Your Feed" should be show