import { Component, OnInit } from '@angular/core';
import { OpportunityserviceService } from '../opportunityservice.service';
import { Opportunity } from '../opportunity';

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

  public barChartType = 'bar';
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
