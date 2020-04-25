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
                script {
                    try {
                        sh 'sudo yarn test'
                        slackSend color: '#BADA55', message: 'Test Success'
                    }catch(e) {
                        slackSend color: '#BADA55', message: 'Test Failed'
                        error(e)
                    }
                }
            }
        }
        stage('Build') { 
            steps {
                script {
                    try {
                        sh 'sudo yarn build'
                        slackSend color: '#BADA55', message: 'Build Success'
                    }catch(e) {
                        slackSend color: '#BADA55', message: 'Build Failed'
                        error(e)
                    }
                }
            }
        }
        stage('Deploy') { 
            steps {
                script {
                    try {
                        sh "printenv"
                        sh 'sudo yarn deploy'
                        slackSend color: '#BADA55', message: 'Deploy Success'
                    }catch(e) {
                        slackSend color: '#BADA55', message: 'Deploy Failed'
                        error(e)
                    }
                }
            }
        }
    }
}