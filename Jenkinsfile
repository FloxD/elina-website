pipeline {
  agent any
  environment {
    KUBECONFIG = "/etc/kubernetes/admin.conf"
    image = "elina:0.0.1-${env.BUILD_ID}"
    dockerPort = "3000"
    hostPort = "30160"
  }
  stages {
    stage('build') {
      steps {
        sh "docker build -f Dockerfile -t ${image} ."
      }
    }
    stage('stop old container') {
      steps {
        sh "docker ps | grep elina | awk '{print \$1}' | xargs docker stop || true"
      }
    }
    stage('start new container') {
      steps {
        sh "docker run -p ${hostPort}:${dockerPort} ${image} &"
      }
    }
  }
}
