import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './jobseeker/class/job';
import { Category } from './jobseeker/class/category';
import { Video } from './jobseeker/class/video';
import { VoidInterview } from './jobseeker/class/void-interview';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    let jobs:Job[] =  [
        {
            "id": 1,
            "name": "BackEnd Developer (Node.js / C#.net / JavaScript)",
            "type": "Partime",
            "company": "Vingroup",
            "description": "We are Vingroup company based in Viet Nam and we are expanding our VinFast center in Ho Chi Minh. We are looking for first batch candidates of that will establish our first team in Sai Gon. We need you to work as contractors with us in Company for 6 months for training, before you go back to be our team lead in Saigon, supervising our operation there.",
            "summary": {
                "address": "161/1 Nguyen Viet Hong road, Ninh kieu district, Can Tho city, VietNam",
                "company_size": "1000 employees",
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
                    "3-5 year experience with Node.js (our main backend coding language),engineers who have an interest and wish to pick up Node.js with experience in Java are also welcome",
                    "Some experience with integrating and designing APIs and optimizing front-end performance",
                    "Ability to work well in a team and independent",
                    "(Contract 6 months in Company for training, before you go back to be our team lead in Saigon, supervising our operation there. )"
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
                "https://pro.edu.vn/wp-content/uploads/2017/10/ung-dung-cong-nghe-thong-tin-cho-cong-ty-xnk-doanhnhansaigon.jpg",
                "http://drive.sopro.vn/s1/duongnhat/articles/cao-su-dau-tieng-viet-lao-zip.jpg",
                "http://moitruongcongnghiepxanh.vn//data/images/news/img140116658920140307_085921.jpg",
                "http://vingroup.net/Uploads/0_Tintuchoatdong/151003_Trao%20giai%20Vefac/Cuoc%20thi%20thu%20hut%20su%20tham%20gia%20cu%20nhieu%20cong%20ty%20kien%20truc%20uy%20tin.jpg",
                "https://congly.vn/data/news/2016/6/23/53/vin2JPG.jpg"
            ],
            "views": 3000,
            "date": "03/26/2019",
            "carrer": "Programmer",
            "rank": "Employee"
        },
        {
          "id": 2,
          "name": "Website Design & Development (bootstrap / Angularjs / JavaScript)",
          "type": "Fulltime",
          "company": "MT",
          "description": "We are MT company based in VietNam. We are looking for first batch candidates of that will establish our first team in here. We need you to work as profession with us .",
          "summary": {
              "address": "30/5 Tam Vu road, Ninh kieu district, Can Tho city, VietNam",
              "company_size": "500 employees",
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
                  "benefit_one": "Get a birthday break",
                  "benefit_two": "Annual Performance Review, KPI Bonus",
                  "benefit_three": "Get discounts monthly (up to 50%/ bill)"
              },
              "description": "The design developer will design and develop the code-base and architectures with maintainable and scalable server side that produce high value for the team. . With passion and skills are often centered around solution stacks like which contain all the technologies required to set up a complete business value application. The developer should be adaptable to address the advantage of each technologies, also have passion mindset to experiment new technologies.",
              "requirement": [
                  "5 -7 year experience with ANGULARJS (our main backend coding language),engineers who have an interest and wish to pick up BOOTSTRAP with experience in .Net C#/ Java are also welcome",
                  "Some experience with integrating and designing APIs and optimizing front-end performance",
                  "Ability to work well in a team and independent",
                  "(Contract 6 months in Thailand for training, before you go back to be our team lead in Company, supervising our operation there. )"
              ],
              "skills": [
                  "Angularjs",
                  "JavaScript",
                  "Bootstrap",
                  "C#",
                  "Nodejs"
              ]
          },
          "gallery": [
              "https://iforce.vn/wp-content/uploads/2015/08/thiet-ke-website-chuan-seo-theheweb.jpg",
              "http://saigonwebsite.vn/Images/FileUpload/web-design.jpg",
              "https://tamnguyen.com.vn/hinhanh/tintuc/webdesign.jpg",
              "https://cabenamala.com/wp-content/uploads/2019/01/thiet-ke-web-tron-goi.jpg",
              "https://img.over-blog-kiwi.com/2/86/87/97/20180619/ob_252787_5978018a786f5797593745.jpg"
          ],
          "views": 5000,
          "date": "03/26/2019",
          "carrer": "Programmer",
          "rank": "Employee"
      },
      {
        "id": 3,
        "name": "Website Application Development ( Python / APS.NET / PHP)",
        "type": "Parttime",
        "company": "MT",
        "description": "We are ARIS company .we are expanding our ARIS center in Ho Chi Minh. We are looking for first batch candidates of that will establish our first team in Ho Chi Minh. We need you to work as employee our us .",
        "summary": {
            "address": "70/1 Tran Hung Dao road, Ninh kieu district, Can Tho city, VietNam",
            "company_size": "300 employees",
            "contact": "HR Dept."
        },
        "tags": [
            "PHP",
            "Nodejs",
            "APS.NET",
            "C#",
            "Java"
        ],
        "job_information": {
            "benefits": {
                "benefit_one": "13 month salary; Parking allowance",
                "benefit_two": "Annual Performance Review, KPI Bonus",
                "benefit_three": "Get a birthday break"
            },
            "description": "The Appliation developer will design and develop the code-base and architectures with maintainable and scalable server side that produce high value for the team. . With passion and skills are often centered around solution stacks like which contain all the technologies required to set up a complete business value application. The developer should be adaptable to address the advantage of each technologies, also have passion mindset to experiment new technologies.",
            "requirement": [
                "5 -7 year experience with PHP (our main backend coding language),engineers who have an interest and wish to pick up Node.js with experience in .Net C#/ Java are also welcome",
                "Some experience with integrating and designing APIs and optimizing front-end performance",
                "Ability to work well in a team and independent",
                "(Contract 8 months in Thailand for training, before you go back to be our team lead in Company, supervising our operation there. )"
            ],
            "skills": [
                "Angularjs",
                "aps.net",
                "php",
                "C#",
                "Nodejs"
            ]
        },
        "gallery": [
            "https://techvccloud.mediacdn.vn/zoom/650_406/2018/6/19/webapplication-15293803343301817126929-13-0-412-710-crop-1529380338673956082830.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqgKX6KXcCzsdYADn3BOz14DfQjYC5zI_UZ_BZiuNbmMPtl1N",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sjRb6YEb8QVLlAB6cyEjXKsdBAbRdIjxUqbIDvfYP0Sm1Qaa",
            "https://toidicodedao.files.wordpress.com/2015/07/cost-of-websites1.jpg",
            "https://png.pngtree.com/element_origin_min_pic/16/10/11/1357fc7e07a7649.jpg"
        ],
        "views": 7000,
        "date": "03/26/2019",
        "carrer": "Programmer",
        "rank": "Employee"
    },
    {
        "id": 4,
        "name": "Mobile App Development ( Android Java/ Html/ CSS/JavaScript/.Net)",
        "type": "Fullime",
        "company": "DEV",
        "description": "Pogofdev is working in Ho Chi Minh City specializing in mobile development and web design for individuals, companies and startups. We consist of members specializing in production and with the motto 'One app at a time'.",
        "summary": {
            "address": "237/7 Nguyen Van Cu road, An Khanh district, Can Tho city, VietNam",
            "company_size": "2000 employees",
            "contact": "HR Dept."
        },
        "tags": [
            "Javascripts",
            "Nodejs",
            ".NET",
            "C#",
            " Android Java"
        ],
        "job_information": {
            "benefits": {
                "benefit_one": "13 month salary; Parking allowance",
                "benefit_two": "Annual Performance Review, KPI Bonus",
                "benefit_three": "Get discounts monthly (up to 50%/ bill)"
            },
            "description": "We always know you have many options. Let us show you why the candidate came to us, they decided to stay with Pogofdev..",
            "requirement": [
                "3-5 year experience with Andraoid Java (our main backend coding language),engineers who have an interest and wish to pick up .net with experience in .Net C#/ Java are also welcome",
                "Some experience with integrating and designing APIs and optimizing front-end performance",
                "Ability to work well in a team and independent",
                "(Contract 1 months in Company for training, before you go back to be our team lead in Company, supervising our operation there. )"
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
            "https://engma.com.vn/public/upload/news/images/cong-ty-lap-trinh-ung-mobile-app-chuyen-nghiep-tai-hcm-01.jpg",
            "https://i.pinimg.com/736x/12/bf/da/12bfdacd79e4ffbb52f6868b41e3dc3f.jpg",
            "http://engma.com.vn/public/upload/news/images/cong-ty-chuyen-nhan-thiet-ke-app-cho-android-tai-tp-hcm(2).png",
            "http://www.appbanhang.com/wp-content/uploads/2016/02/thiet-ke-app-mobile.png",
            "https://engma.com.vn/public/upload/news/images/chi-phi-thiet-ke-app-tai-cong-ty-engma(1).png"
        ],
        "views": 3500,
        "date": "03/26/2019",
        "carrer": "Programmer",
        "rank": "Employee"
    },
    {
        "id": 5,
        "name": "Web Developer (PHP/ C#.net / JavaScript)",
        "type": "Partime",
        "company": "ADC VietNam",
        "description": "ADC COMPANY LIMITED Address: 93 Nguyen Van Thu, Da Kao Ward, District 1, Ho Chi Minh City.",
        "summary": {
            "address": "161/1 Hung Vuong road, Ninh kieu district, Can Tho city, VietNam",
            "company_size": "1500 employees",
            "contact": "HR Dept."
        },
        "tags": [
            "Javascripts",
            "Nodejs",
            "c#.NET",
            "Java",
            "php"
        ],
        "job_information": {
            "benefits": {
                "benefit_one": "13 month salary; Parking allowance",
                "benefit_two": "Annual Performance Review, KPI Bonus",
                "benefit_three": "Get discounts monthly (up to 50%/ bill)"
            },
            "description":" Wanting to achieve the desired results requires the necessary capacity. Our concept is: To create a good product requires the cooperation of many experts. An expert cannot be proficient in all areas of the website. Therefore, ADC Vietnam is the cooperation of a really strong team including: website designers, programmers, editors, promoters, talented network administrators.",
            "requirement": [
                "3-5 year experience with java (our main backend coding language),engineers who have an interest and wish to pick up Node.js with experience in Java are also welcome",
                "Some experience with integrating and designing APIs and optimizing front-end performance",
                "Ability to work well in a team and independent",
                "(Contract 6 months in Company for training, before you go back to be our team lead in Saigon, supervising our operation there. )"
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
            "http://thietkewebsitebienhoa.com/public/userfiles/thietkewebsitebienhoa/images/Thiet%20ke%20web%20Bien%20Hoa.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Mobile_software_development_laboratory_in_The_Estonian_Information_Technology_College.jpg",
            "https://www.tranlegroup.com/Uploads/Image/img-b-1.jpg",
            "https://znews-photo.zadn.vn/w660/Uploaded/OFH_oazszstq/2018_06_11/5b0493011ae66231008b4992750562.jpg",
            "https://photo-1-baomoi.zadn.vn/w700_r1/2017_10_10_241_23508186/8269b3cb4a8da3d3fa9c.jpg"
        ],
        "views": 3000,
        "date": "03/26/2019",
        "carrer": "Programmer",
        "rank": "Employee"
    }
    
    ];
    let cate: Category[] = [{
      "id": 1,
      "name": "Web Developer",
      "numjob": "2",
    },
    {
      "id": 2,
      "name": "Programmer",
      "numjob": "20"
    }];
    let video: Video[] = [{
      "name":"How To Prepare For a Job Interview",
      "url": "https://www.youtube.com/embed/iI6jiwoqxg4"
    },
    {
      "name": "12 Things That Ruin a First Impression Immediately",
      "url" : "https://www.youtube.com/embed/JrbnTZPjg0k"
    },
    {
      "name" :"Job Interview Tips & Etiquette",
      "url":"https://www.youtube.com/embed/7TH1upXDyLE"
    }
    ];
    let interview: VoidInterview[] = [
        {
            "id": 1,
            "title": "Job Interview Mistakes to Avoid",
            "discription": "Approach a job interview the way you would a test. It's important to study detailed information about the company where you're applying so you're ready to talk about how your skills are a good fit for its business. To stand out from the pack, do enough research to be able to discuss the company's recent merger or new business model, says Kelly Marinelli, principal people strategy consultant at Solve HR. It really shows your passion for the specific role and the company, and that's something that sets you apart. Besides, preparing thoroughly may help calm your nerves. You get confidence from competence, says Bill Cole, chief executive of William B. Cole Consultants.",
            "views": 900,
            "date": "25/03/2019"
        },
        {
            "id": 2,
            "title": "Things Not to Do at a Job Interview",
            "discription": "Don't arrive late Prepare your travel carefully and leave a cushion for unexpected delays. Arriving late can be a deal breaker and create the impression that you might be an irresponsible employee.",
            "views": 900,
            "date": "25/03/2019"
        }
    ]
    return {jobs, cate, video, interview};
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
