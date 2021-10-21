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
                sh 'sh ./script/start-app.sh' 
            }
        }
    } 
}
