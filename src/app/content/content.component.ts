import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  technologies: string[] = [];
  interests: string[] = [];

  inputTechnologiesValue: string;
  inputInterestsValue: string;

  constructor() {
    this.technologies = [
      'HTML5 и CSS3, не все ещё возможности освоены на профессиональном уровне.',
      'JavaScript, используется мной в незначительном объёме, до сих пор есть неясные моменты.',
      'Typescript, да теперь да :-).',
      'Angular, давно хотел научиться его готовить :-).',
      'Python, хочется иногда чего-нибудь строгого, шутка, может приведётся программировать какое либо железо, было бы интересно, а то всё web да web.',
      'C#, мистка, просто хочу!',
      'Go,  и чешется и колется и времени не хватает, но интересно :-).',
      'HP, ну куда без него, если все сайты в твоей компании на нём :-).'
    ];
    this.interests = [
      'Кино, много и разное, просто люблю кинотеатры и сам процесс, если конечно, фильм не откровенно плохой.',
      'Фантастика, дайте хорошую книгу и я не усну до пол ночи.',
      'Астрономия, телескопы. Ирония судьбы - в нашем городе очень трудно быть любителем астрономии, а в нашей стране ещё и дорого.',
      'Йога, знаю много асан, делаю единицы и то не всегда. Как так получается до сих пор не понятно :-)',
      'Цигун, сборный термин для различных китайская дыхательных практик, круть неимоверная как и йога, если практиковать регулярно.',
      'Физика, "а может снова..." :-).'
    ];
  }

  addTechnologies() {
    this.technologies.push(this.inputTechnologiesValue);
  }
  addInterests() {
    this.interests.push(this.inputInterestsValue);
  }

  ngOnInit() {
  }

}
