Feature: Login in wesbite Swag Labs

    Scenario: Login with sucess of username "standard_user"
        Given the user need to login
        When i put the username 'standard_user'
        And put password 'secret_sauce'
        And click in login button
        Then the user should login