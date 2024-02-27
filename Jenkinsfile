
pipeline {
    environment {
        IMAGE_NAME = 'node:latest'
    }

    agent any
    environment {
        PATH = "$PATH:/path/to/npm" // Update this with the actual path to npm
    }
    
    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Initialize') {
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                '''
            }
        }

        stage('Test Setup') {
            steps {
                
                echo '[INFO] Executing npm install'
                sh '''
               pwd
               ls
                npm i
                '''
            }
        }

            
            stage('batch1') {

                steps {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        echo '[INFO] Executing Regression Test'
                        sh """
                    npx cypress run
                   """
                    }
                }
            }

    }

    post {
        always {
            emailext(
                  subject: "Regression Test results",
                  body: """Please see the below link  for regression test result""",
                   to: 'balde.gopi@gmail.com',
                  from: 'balde.gopi@gmail.com',
                  mimeType: 'text/plain'

            )
        }
    }
}
