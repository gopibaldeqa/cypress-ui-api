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
