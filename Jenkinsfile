pipeline {
    agent any
    stages {
        stage('Install') { 
            steps {
                sh 'npm install -g yarn && yarn install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'yarn test' 
            }
        }
        stage('Build') { 
            steps {
                sh 'yarn build' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'yarn deploy' 
            }
        }
    }
}