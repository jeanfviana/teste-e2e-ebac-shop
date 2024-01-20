pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/jeanfviana/teste-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execultar testes') {
            steps {
                ansiColor('xterm') {
                   bat 'npm run cy:run'
                }
                
            }
        }
    }
}
