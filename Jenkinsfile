pipeline{
  agent any

  stages{
    stage('Pull repo'){
      steps {
        echo "Checkout ${env.BRANCH_NAME}"
        checkout scm
      }
    }

    stage('Run integration tests'){
      steps{
        sh ./integration-test.sh
      }
    }

    stage('Build and push new container label'){
      steps{
        sh ./buildPush.sh
      }
    }

    stage('Deploy'){
      steps{
        
      }
    }
  }
}