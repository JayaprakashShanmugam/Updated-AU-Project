import { Component, OnInit } from '@angular/core';
import { OpportunityserviceService } from '../opportunityservice.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-trendschart',
  templateUrl: './trendschart.component.html',
  styleUrls: ['./trendschart.component.css']
})
export class TrendschartComponent implements OnInit {


  constructor(private service : OpportunityserviceService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartTypeLocation = 'bar';
  public barChartTypeSkills = 'line';
  public barChartTypeDescription = 'doughnut';
  public barChartTypeExperience = 'bar';
  public barChartLegend = true;
  public barChartLabelLocation:any[] = [];
  public locationData:any[] = [];
  public barChartDataLocation:any =[{
    data:[]
  }]
  public barChartLabelSkills:any[] = [];
  public SkillsData:any[] = [];
  public barChartDataSkills:any =[{
    data:[]
  }]
  public barChartLabelDescription:any[] = [];
  public DescriptionData:any[] = [];
  public barChartDataDescription:any =[{
    data:[]
  }]
  public barChartLabelExperience:any[] = [];
  public ExperienceData:any[] = [];
  public barChartDataExperience:any =[{
    data:[]
  }]
  public barChartColorsLocation: Color[] = [
    { backgroundColor: 'skyblue' },
  ]
  public barChartColorsSkills: Color[] = [
    { backgroundColor: 'rgba(225,10,24,0.2)',
    borderColor: 'violet',
    pointBackgroundColor: 'rgba(225,10,24,0.2)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(225,10,24,0.2)' },
  ]
  public barChartColorsDescription: Color[] = [
    { backgroundColor: [
      'rgba(110, 114, 20, 1)',
       'rgba(118, 183, 172, 1)',
       'rgba(0, 148, 97, 1)',
       'rgba(129, 78, 40, 1)',
       'rgba(129, 199, 111, 1)',
       'rgba(200, 109, 140, 1)',
       'rgba(118, 113, 172, 1)',
       'rgba(123, 148, 97, 0)',
       'rgba(120, 240, 400, 0)',
       'rgba(129, 199, 11, 0)'
       ] }
  ]
  public barChartColorsExperience: Color[] = [
    { backgroundColor: 'orange' },
  ]
 
  ngOnInit(): void {
    this.service.locationcounter().subscribe((dataitemslocation:any[])=>{
      this.locationData=dataitemslocation.map(item => {
        return item.countLocation;
      })
      this.barChartDataLocation = [
        {
          data:[] = this.locationData,
          label:'Location'
        }
      ]    
      this.barChartLabelLocation=dataitemslocation.map(item =>{
        return item.location;
      })
    })
    this.service.skillscounter().subscribe((dataitemsskills:any[])=>{
      this.SkillsData=dataitemsskills.map(item => {
        return item.countSkills;
      })
      this.barChartDataSkills = [
        {
          data:[] = this.SkillsData,
          label:'Skills'
        }
      ]    
      this.barChartLabelSkills=dataitemsskills.map(item =>{
        return item.skills;
      })
    })
    this.service.descriptioncounter().subscribe((dataitemsdescription:any[])=>{
      this.DescriptionData=dataitemsdescription.map(item => {
        return item.countDescription;
      })
      this.barChartDataDescription = [
        {
          data:[] = this.DescriptionData,
          label:'Description'
        }
      ]    
      this.barChartLabelDescription=dataitemsdescription.map(item =>{
        return item.description;
      })
    })
    this.service.experiencecounter().subscribe((dataitemsexperience:any[])=>{
      this.ExperienceData=dataitemsexperience.map(item => {
        return item.countExperience;
      })
      this.barChartDataExperience = [
        {
          data:[] = this.ExperienceData,
          label:'Experience'
        }
      ]    
      this.barChartLabelExperience=dataitemsexperience.map(item =>{
        return item.experience;
      })
    })
  }
  
  
}
