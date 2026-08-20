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
    }
}