pipeline {
    agent any
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
    }
}
