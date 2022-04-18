const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo()+"\n")

// Objeto  de Issue,sus atributos, funciones

const issue = {
    title: "Ejercicio 1",
    repositoryNameAssociated: "MagdielAndres",
    status: "Activo",
    numberOfComments: 34,
    labels: 4,
    author: "Magdiel Andres",
    dateCreated: "18/04/2022-16:17 p.m.",
    lastUpdated: "18/04/2022-23:17 p.m.",
    getTitleAndAuthor: function() {
        return `Title: ${this.title} and Author: ${this.author}`
    },
    getGeneralInfo: function(){
        return `Repository Name Associated ${this.repositoryNameAssociated} and crate by ${this.author}`
    }
}

console.log("Titulo del issue: " + issue.title);
console.log("Title and author: " + issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());