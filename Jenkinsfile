pipeline{

    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/productTests/e2e", description: "Enter the scripts path that you want to execute")
        choise(name: "BROWSER", choices: ["chrome", "edge"], description: "Choise the browser where you want to execute your scripts")
    }

    options{
        ansiColor("xtrem")
    }

    stages{
        stage("Building"){
            steps{
                echo "Building the application"
            }
        }
        stage("Testing"){
            steps{
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage{"Deploying"}{
            steps{
                echo "Deploy the application"
            }
        }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

}