import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './jobseeker/class/job';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    let jobs:Job[] = [{
      "id": 1,
      "name": "Front End Developers",
      "company": "Facebook Inc.",
      "companyUrl": "https://facebook.com",
      "category": "Fulltime",
      "location": "California"
  }];
  return {jobs};
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
