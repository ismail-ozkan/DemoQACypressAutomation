This is a QA automation fremawork built using Cypress and Javascript.
It's just a practice fremawork while I'm trying to learn this tool.
I write here all steps from beginning while I'm  creating the project and its folder structure.

### Steps To Create The Project From Scratch
#### 1. Open new folder under the folder that store all projects

#### 2. Open folder in VSC

#### 3. Write "npm init" in terminal

#### 4. Write "npm install cypress" in terminal

#### 5. Write "npx cypress open" in terminal

#### 6. Choose "E2E Testing". Then we can see cypress folder in the folder structure(in cypress there are two folder -> fixtures and support)

#### 7. We start the project with Chrome browser

#### 8. We choose "Scaffold example specs" option and it automatically create e2e folder under cypress folder. It's a folder where we store our test cases

#### 9. We can delete unnecessary folder like getting-started and advance-example under e2e folder

#### 10. We create git repo in our local then push it in github
        1. git init
        2. git add .
        3. git commit -am "initial commit"
            - .gitignore file adding
        4. git branch -M main
        5. git remote add origin https://github.com/ismail-ozkan/DemoQACypressAutomation.git
        
#### 11. Add to project "ReamMe.md" file to store the story of the project

#### 12. Add some configuration in cypress.config file

#### 13. Create new file under e2e folder to create a new and first Test Case