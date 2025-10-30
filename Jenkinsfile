pipeline {
  agent any
  stages {
    stage ('Clonar repositorio') {
      steps {
        echo 'Repositorio clonado .......'
      }
    }
    stage ('Instalar dependencias') {
      steps {
        echo 'Creando node modules .......'
        //sh 'npm install'
      }
    }
    stage ('Ejecutar la prueba con Jest') {
      steps {
        echo 'Lanzando test ........'
        sh 'npm test'
      }
    }
  }
  post {
    always {
      junit '**/test-results/*.xml'
    }
  }
}
