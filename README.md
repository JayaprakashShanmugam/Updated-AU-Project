# Updated-AU-Project
An Improved version of Opportunity Management.

Before starting kindly see the base version ReadMe of AU-project in https://github.com/JayaprakashShanmugam/AU-project

# Updated Trends Chart
Bar chart for Location,Skills,Description,Experience.

#Updated SpringBoot Stack

#Opportunity Entity
    
           1.countLocation - for getting the count of based on locations.
           2.countSkills - for getting the count of based on skills.
           3.countDescription - for getting the count of based on descriptions.
           4.countExperience - for getting the count of based on experience.
           
#Opportunity Dao
           Return type: List<Opportunity>
  
           1.getLocationCounter - counting the records based on groupping locations.(select & group)
           2.getSkillsCounter - counting the records based on groupping skills.(select & group)
           3.getDescriptionCounter - counting the records based on groupping descriptions.(select & group)
           4.getExperienceCounter - counting the records based on groupping experience.(select & group)
   
#Opportunity Service
           Return type: List<Opportunity>
  
           1.getLocationCountService - calls the getLocationCounter method in Dao.
           2.getSkillsCountService - calls the getSkillsCounter method in Dao.
           3.getDescriptionCountService - calls the getDescriptionCounter method in Dao.
           4.getExperienceCountService - calls the getExperienceCounter method in Dao.
           
  #Opportunity Controller
           Return type: List<Opportunity>
  
           1.locationCount - calls the getLocationCountSrvice method in Service.
           2.skillsCount - calls the getSkillsCountService method in Service.
           3.descriptionCount - calls the getDescriptionCountService method in Service.
           4.experienceCount - calls the getExperienceCountService method in Service.
                    
 #Updated Angular Stack
 
 Trendschart - component - ngxCharts
 
 Opportunity Service:
 
        1.locationcounter - requests groupbylocation from server(Opportunity Controller).
        2.skillscounter - requests groupbyskills from server(Opportunity Controller).
        3.descriptioncounter - requests groupbydescription from server(Opportunity Controller).
        4.experiencecounter - requests groupbyexperience from server(Opportunity Controller).
    
  
