Feature: PetStore API

    PetStore API testing with cypress

Scenario: GET method should retrieve all available pets
When we do a 'GET' call to '/pet/findByStatus?status=available'
Then the status code is 200
And the response should have the property "body"

Scenario: POST method should add a new pet
Given that we use the file "request" as the request
When we do a "POST" call to "/pet"
Then the status code is 200
And the response body should have the property "id" with the value "10"
And the response body should have the property "name" with the value "doggie"
And the response body should have the property "status" with the value "available"

Scenario: PUT method should modify the pet to status sold
Given that we use the file "modify" as the request
When we do a "PUT" call to "/pet"
Then the status code is 200
And the response body should have the property "status" with the value "sold"

Scenario: DELETE method should delete a pet
When we do a "DELETE" call to "/pet/10"
Then the status code is 200
And the response should have the property "body"