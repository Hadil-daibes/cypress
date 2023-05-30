Feature: Login

  I want to Log into Conduit


  # Scenario: Conduit Login
  #   Given I open the Conduit login page
  # When I type the email and password
  # And I click on the Sign in button
  # Then "Your Feed" should be show

  Scenario: open editer page
    Given Conduit login page
    When I Click on the new post
    Then Open the Edit page