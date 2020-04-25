pipeline {
    agent any
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