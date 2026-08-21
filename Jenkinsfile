pipeline {
    agent any

    stages {

        stage('SCM Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Suvidha25/Calculator.git'
            }
        }

        stage('Hello') {
            steps {
                echo "Hello"
            }
        }

        stage('Tests') {
            steps {
                echo 'Running EasyCalc tests...'
                bat '"C:\\Program Files\\Git\\usr\\bin\\bash.exe" test.sh'
            }
        }

        stage('Docker Check') {
            steps {
               bat '"C:\\Users\\hsuvi\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" version'
            }
        }

        stage('Docker Build') {
            steps {
               echo 'Building EasyCalc Docker image'
               bat '"C:\\Users\\hsuvi\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t easycalc:1.0 .'
            }
        }

        
        stage('Deploy') {
            steps {
                echo 'Deploying EasyCalc application'
                bat 'powershell -Command "Expand-Archive -Path EasyCalc-build.zip -DestinationPath C:\\EasyCalc-Deployment -Force"'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'EasyCalc-build.zip', fingerprint: true
        }
    }
}