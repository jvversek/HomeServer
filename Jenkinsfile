pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                git(
                    url: 'git@github.com:jvversek/HomeServer.git',
                    branch: 'main',
                    credentialsId: 'github-ssh-key'
                )
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.backend.yaml build --no-cache'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.frontend.yaml build --no-cache'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.backend.yaml up -d'
                    sh 'docker-compose -f docker-compose.frontend.yaml up -d'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up temporary files...'
            sh 'docker-compose -f docker-compose.backend.yaml down'
            sh 'docker-compose -f docker-compose.frontend.yaml down'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or Deploy failed.'
        }
    }
}
