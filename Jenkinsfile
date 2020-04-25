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
                slackSend color: '#BADA55', message: 'Test Success'
            }
        }
        stage('Build') { 
            steps {
                sh 'sudo yarn build' 
                slackSend color: '#BADA55', message: 'Build Success'
            }
        }
        stage('Deploy') { 
            steps {
                sh "printenv"
                sh "env"
                sh 'sudo yarn deploy'
                slackSend color: '#BADA55', message: 'Deploy Success'
            }
        }
    }
}