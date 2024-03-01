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
                 body: 'Please see the link below for the build logs', 
                 cc: '', 
                 from: '', 
                 replyTo: '', 
                 subject: "${env.JOB_NAME} Code Deployment Successfully Completed: Build Status: ${currentBuild.result} Build No: ${env.BUILD_NUMBER}", 
                 to: 'balde.gopi@gmail.com'
        }
    }
}
