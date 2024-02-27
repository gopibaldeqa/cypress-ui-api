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
            }
        }
    }
}
