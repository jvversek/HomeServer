pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yaml' // Ha más a neve, módosítsd
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

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker Images...'
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} build --no-cache"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker Containers...'
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down"
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --force-recreate"
            }
        }

        stage('Clean Up') {
            steps {
                echo 'Cleaning up unused Docker images...'
                sh 'docker image prune -f'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up temporary files...'
            sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down"
        }
        success {
            echo 'Build and Deploy succeeded!'
        }
        failure {
            echo 'Build or Deploy failed.'
        }
    }
}
