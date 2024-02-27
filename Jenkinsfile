
pipeline {
    environment {
        IMAGE_NAME = 'nothing'
    }

    agent { label "" }
    
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

        stage('clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git branch: "${Branch}", credentialsId: 'gopibaldeqa', url: 'https://github.com/gopibaldeqa/cypress-ui-api'
            }
        }

        stage('Test Setup') {
            steps {
                
                echo '[INFO] Executing npm install'
                sh '''
               pwd
               ls
                npm install
                
                '''
            }
        }

            
            stage('batch1') {

                steps {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        echo '[INFO] Executing Regression Test'
                        sh """
                    npx cypress run --env grepTags=@${Tag},ENV="${Environment_Name}" --browser ${Browser}
                   """
                    }
                }
            }

    }

    post {
        always {
            emailext(
                  subject: "Regression Test results for itops . Job '${env.JOB_NAME} . Build No ${env.BUILD_NUMBER}'",
                  body: """Please see the below link  for regression test result
                  ${env.BUILD_URL}/execution/node/3/ws/cypress/reports/""",
                   to: 'balde.gopi@gmail.com',
                  from: 'balde.gopi@gmail.com',
                  mimeType: 'text/plain'

            )
        }
    }
}
