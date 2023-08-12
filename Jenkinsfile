pipeline{

    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/productTests/e2e", description: "Enter the scripts path that you want to execute")
        choice(name: "BROWSER", choices: ["chrome", "edge", "electron"], description: "Choise the browser where you want to execute your scripts")
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
                sh "apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
                sh "npm install"
                sh "./node_modules/.bin/cypress install --force"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                sh "pkill Xvfb"
            }
        }
        stage("Deploying"){
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