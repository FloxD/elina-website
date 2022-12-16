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
        sh "docker push localhost:5000/${image}"
      }
    }

    stage('Deploy') {
      steps {
        sh "sed -i 's/{name}/${name}/g;' deployment.yml"
        sh "sed -i 's/{image}/${image}/g;' deployment.yml"
        sh "sed -i 's/{dockerPort}/${dockerPort}/g;' deployment.yml"
        sh "sed -i 's/{hostPort}/${hostPort}/g;' deployment.yml"
        sh "kubectl apply -f deployment.yml"
      }
    }
  }
}
