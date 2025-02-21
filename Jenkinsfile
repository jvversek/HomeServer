pipeline {
    agent any
    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yaml'
    }
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning Repository...'
                checkout scm
            }
        }
        stage('Build Docker Images') {
            steps {
                echo 'Building Docker Images...'
                sh 'docker-compose -f ${DOCKER_COMPOSE_FILE} build'
            }
        }
        stage('Run Docker Containers') {
            steps {
                echo 'Starting Docker Containers...'
                sh 'docker-compose -f ${DOCKER_COMPOSE_FILE} up -d'
            }
        }
        stage('Post Actions') {
            steps {
                echo 'Post Actions...'
                sh 'docker-compose ps'
            }
        }
    }
    post {
        always {
            echo 'Cleaning up...'
            sh 'docker-compose -f ${DOCKER_COMPOSE_FILE} down'
        }
        success {
            echo 'Build and Deploy Successful!'
        }
        failure {
            echo 'Build or Deploy Failed.'
        }
    }
}
