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
                sh 'npm --version'
                sh 'echo "abcd">>demo.txt'
                sh 'chmod 777 demo.txt'
                sh 'pwd'
                 sh 'ls'
                sh 'scp -o StrictHostKeyChecking=no /home/ubuntu/Ideabytesubuntu22.pem demo.txt ec2-3-223-178-242.compute-1.amazonaws.com:/home/ubuntu'
            }
        }
    }
    post {
        always {
            // Send email notification
            emailext(
                subject: "Jenkins Pipeline Notification",
                body: "Your Jenkins build has completed.",
                to: "balde.gopi@gmail.com",  // Add recipient email address here
                from: "jenkins@example.com"   // Add sender email address here
            )
        }
    }
}
