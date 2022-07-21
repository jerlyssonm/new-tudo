import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  DB: any[] = [
        {
          "id":1,
          "title": "Desafio de Design UI/UX",
          "description": "Uma breve descrição",
          "limit_date":"10/07/2022",
          "category":"trabalho",
          "archives": "algum anexo",
          "completed": true,
          "members": {
            "id":1,
            "img": "",
            "name": "nome",
          },
          "subtask":["criar front", "criar back-end"],
        },
        {
          "id":2,
          "title": "Entrevista com a empresa",
          "description": "Uma breve entrevista",
          "limit_date":"10/07/2022",
          "category":"entrevista",
          "archives": "algum anexo",
          "completed": false,
          "members": {
            "id":1,
            "img": "",
            "name": "nome",
          },
          "subtask":["criar front", "criar back-end"],
        },
        {
          "id":3,
          "title": "assinar contrato com a empresa",
          "description": "Uma breve entrevista",
          "limit_date":"10/07/2022",
          "category":"contratação",
          "archives": "algum anexo",
          "completed": false,
          "members": {
            "id":1,
            "img": "",
            "name": "nome",
          },
          "subtask":["criar front", "criar back-end"],
        },
        {
          "id":4,
          "title": "assinar contrato com a empresa",
          "description": "Uma breve entrevista",
          "limit_date":"10/07/2022",
          "category":"contratação",
          "archives": "algum anexo",
          "completed": true,
          "members": {
            "id":1,
            "img": "",
            "name": "nome",
          },
          "subtask":["criar front", "criar back-end"],
        },
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
