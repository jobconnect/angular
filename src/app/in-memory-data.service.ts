import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './jobseeker/class/job';
import { Category } from './jobseeker/class/category';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    let jobs:Job[] = [
      {
          "id": 1,
          "name": "BackEnd Developer (Node.js / C#.net / JavaScript)",
          "type": "Partime",
          "company": "APPMAN CO LTD",
          "description": "We are insurtech company based in Thailand and we are expanding our R&D center in Ho Chi Minh. We are looking for first batch candidates of that will establish our first team in Vietnam. We need you to work as contractors with us in Bangkok for 6 months for training, before you go back to be our team lead in Saigon, supervising our operation there.",
          "summary": {
              "address": "52/25 Pan road, Silom Bangrak, Bangkok 10500, Thailand",
              "company_size": "25-99 employees",
              "contact": "HR Dept."
          },
          "tags": [
              "Javascripts",
              "Nodejs",
              ".NET",
              "C#",
              "Java"
          ],
          "job_information": {
              "benefits": {
                  "benefit_one": "13 month salary; Parking allowance",
                  "benefit_two": "Annual Performance Review, KPI Bonus",
                  "benefit_three": "Get discounts monthly (up to 50%/ bill)"
              },
              "description": "The back-end developer will design and develop the code-base and architectures with maintainable and scalable server side that produce high value for the team. . With passion and skills are often centered around solution stacks like which contain all the technologies required to set up a complete business value application. The developer should be adaptable to address the advantage of each technologies, also have passion mindset to experiment new technologies.",
              "requirement": [
                  "5 -7 year experience with Node.js (our main backend coding language),engineers who have an interest and wish to pick up Node.js with experience in .Net C#/ Java are also welcome",
                  "Some experience with integrating and designing APIs and optimizing front-end performance",
                  "Ability to work well in a team and independent",
                  "(Contract 6 months in Thailand for training, before you go back to be our team lead in Saigon, supervising our operation there. )"
              ],
              "skills": [
                  "Java",
                  "JavaScript",
                  ".NET",
                  "C#",
                  "Nodejs"
              ]
          },
          "gallery": [
              "https://wi-images.condecdn.net/image/VBqKlbJYNXl/crop/1620/f/11-15-FTfacebook__06.jpg",
              "https://i.ytimg.com/vi/ANPHddOfz04/maxresdefault.jpg",
              "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ],
          "views": 999,
          "date": "03/25/2019",
          "carrer": "Programmer",
          "rank": "Employee"
      },
      {
        "id": 2,
        "name": "BackEnd Developer (Node.js / C#.net / JavaScript)",
        "type": "Partime",
        "company": "APPMAN CO LTD",
        "description": "We are insurtech company based in Thailand and we are expanding our R&D center in Ho Chi Minh. We are looking for first batch candidates of that will establish our first team in Vietnam. We need you to work as contractors with us in Bangkok for 6 months for training, before you go back to be our team lead in Saigon, supervising our operation there.",
        "summary": {
            "address": "52/25 Pan road, Silom Bangrak, Bangkok 10500, Thailand",
            "company_size": "25-99 employees",
            "contact": "HR Dept."
        },
        "tags": [
            "Javascripts",
            "Nodejs",
            ".NET",
            "C#",
            "Java"
        ],
        "job_information": {
            "benefits": {
                "benefit_one": "13 month salary; Parking allowance",
                "benefit_two": "Annual Performance Review, KPI Bonus",
                "benefit_three": "Get discounts monthly (up to 50%/ bill)"
            },
            "description": "The back-end developer will design and develop the code-base and architectures with maintainable and scalable server side that produce high value for the team. . With passion and skills are often centered around solution stacks like which contain all the technologies required to set up a complete business value application. The developer should be adaptable to address the advantage of each technologies, also have passion mindset to experiment new technologies.",
            "requirement": [
                "5 -7 year experience with Node.js (our main backend coding language),engineers who have an interest and wish to pick up Node.js with experience in .Net C#/ Java are also welcome",
                "Some experience with integrating and designing APIs and optimizing front-end performance",
                "Ability to work well in a team and independent",
                "(Contract 6 months in Thailand for training, before you go back to be our team lead in Saigon, supervising our operation there. )"
            ],
            "skills": [
                "Java",
                "JavaScript",
                ".NET",
                "C#",
                "Nodejs"
            ]
        },
        "gallery": [
            "https://wi-images.condecdn.net/image/VBqKlbJYNXl/crop/1620/f/11-15-FTfacebook__06.jpg",
            "https://i.ytimg.com/vi/ANPHddOfz04/maxresdefault.jpg",
            "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        "views": 999,
        "date": "03/25/2019",
        "carrer": "Programmer",
        "rank": "Employee"
    }
  ];
    let cate: Category[] = [{
      "id": 1,
      "name": "Web Developer",
      "numjob": "2"
    }];
  return {jobs, cate};
  }
    // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(jobs: Job[]): number {
    return jobs.length > 0 ? Math.max(...jobs.map(jobs => jobs.id)) + 1 : 11;
  }
}
