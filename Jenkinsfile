pipeline {
    agent any
    
    tools {
        // Define the Node.js installation named 'nodejs'
        nodejs 'nodejs14'
    }

    stages {
        stage('Hello') {
            steps {
                // Use Node.js commands within this stage
                sh 'node --version'
                sh 'npm --version '
                sh 'echo "abcd">>demo.txt'
                sh 'chmod 777 demo.txt'
                sh 'pwd'
                sh 'ls'
                sh 'scp -i /home/ubuntu/Ideabytesubuntu22.pem demo.txt ec2-3-223-178-242.compute-1.amazonaws.com:/home/ubuntu'
            }
        }
    }
    post {
        always {
             mail bcc: '', body: 'automation body ', cc: '', from: '', replyTo: '', subject: 'automation test mail', to: 'balde.gopi@gmail.com'
        }
    }
}
