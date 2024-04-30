# cypress-ui-api
cypress with combination of ui and api framework
read
ad
npx cypress run --env grepTags=@acknowledgementPolicy,ENV=QA --browser chrome

npx cypress run --spec "cypress/e2e/hooks.js"


npx cypress run --env ENV="QA" --spec cypress\e2e\hooks.cy.js --browser chrome --headed



npx cypress run --spec cypress\e2e\hooks.cy.js --headed --env ENV="QA"