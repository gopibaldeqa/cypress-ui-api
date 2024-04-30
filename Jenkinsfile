
pipeline {
    environment {
        IMAGE_NAME = 'nothing'
    }

    agent { label "${NODE_LABEL}" }

    options {
        skipDefaultCheckout(true)
    }

    tools {
        maven 'jenkins-maven'
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
                git branch: "${Branch}", credentialsId: '', url: ''
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
                  subject: "Regression Test results for . Job '${env.JOB_NAME} . Build No ${env.BUILD_NUMBER}'",
                  body: """Please see the below link  for regression test result
                  ${env.BUILD_URL}/execution/node/3/ws/cypress/reports/""",
                   to: '',
                  from: '',
                  mimeType: 'text/plain'

            )
        }
    }
}
