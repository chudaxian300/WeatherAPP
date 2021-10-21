pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                sh 'npm install -unsafe-perm'
            }
        }
        stage('Deploy') {
            steps {
                sh 'sh ./scripts/start-app.sh' 
            }
        }
    } 
}
