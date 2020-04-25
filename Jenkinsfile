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
                sh 'sudo yarn test' &&
                slackSend color: '#BADA55', message: 'Test Success' ||
                slackSend color: '#BADA55', message: 'Test Failed'
            }
        }
        stage('Build') { 
            steps {
                sh 'sudo yarn build' &&
                slackSend color: '#BADA55', message: 'Build Success' ||
                slackSend color: '#BADA55', message: 'Build Failed'

            }
        }
        stage('Deploy') { 
            steps {
                sh "printenv"
                sh 'sudo yarn deploy' &&
                slackSend color: '#BADA55', message: 'Deploy Success' ||
                slackSend color: '#BADA55', message: 'Deploy Failed'
            }
        }
    }
}