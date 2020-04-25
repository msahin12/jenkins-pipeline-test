pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID = "AKIAZH3RJURS5ZVRVIND"
        AWS_SECRET_ACCESS_KEY = "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"
    }
    stages {
        stage('Install') { 
            steps {
                sh 'sudo npm install -g yarn && yarn install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'sudo yarn test' 
            }
        }
        stage('Build') { 
            steps {
                sh 'sudo yarn build' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'sudo yarn deploy'
                slackSend color: '#BADA55', message: 'Deploy Success'
            }
        }
    }
}