pipeline {
    agent any
    
    tools {
        // Define the Node.js installation named 'nodejs'
        nodejs 'nodejs14'
    }

    stages {
        stage('Node Js Installation') {
            steps {
                // Use Node.js commands within this stage
                sh 'node --version'
                sh 'npm --version '
                sh 'echo "abcd">>demo.txt'
                sh 'chmod 777 demo.txt'
                sh 'pwd'
                sh 'ls'
            }
        }
          stage('SSH Publish') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'Diff pem Key ',
                                transfers: [
                                    sshTransfer(
                                        cleanRemote: false,
                                        excludes: '',
                                        execCommand: '#!/bin/bash\nsleep 10\nls',
                                        execTimeout: 120000,
                                        flatten: false,
                                        makeEmptyDirs: false,
                                        noDefaultExcludes: false,
                                        patternSeparator: '[, ]+',
                                        remoteDirectory: '',
                                        remoteDirectorySDF: false,
                                        removePrefix: '',
                                        sourceFiles: 'demo.txt'
                                    )
                                ],
                                usePromotionTimestamp: false,
                                useWorkspaceInPromotion: false,
                                verbose: false
                            )
                        ]
                    )
                }
            }
        }
    }
    post {
        always {
             mail bcc: '', 
                 body: "Please see the link below for the build logs ${env.BUILD_URL}", 
                 cc: '', 
                 from: 'jenkins@ideabytes.com', 
                 replyTo: '', 
                 subject: "${env.JOB_NAME} Code Deployment Successfully Completed: Build Status: ${currentBuild.result} Build No: ${env.BUILD_NUMBER}", 
                 to: 'gopi.balde@ideabytes.com,harikrishna.sirigiri@ideabytes.com'
             // emailext body: 'test mail', subject: 'sample  test', to: 'gopi.balde@ideabytes.com'
                 // mail bcc: '', 
                 // body: 'test automation body', 
                 // cc: '', from: 'jenkins@ideabytes.com', 
                 // replyTo: '', 
                 // subject: 'test automation subject', 
                 // to: 'gopi.balde@ideabytes.com'

        }
    }
}
