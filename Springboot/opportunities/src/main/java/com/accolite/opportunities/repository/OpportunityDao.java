package com.accolite.opportunities.repository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.accolite.opportunities.entity.Opportunity;
import com.accolite.opportunities.rowmapper.OpportunityRowMapper;

@Repository
public class OpportunityDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	private static final String SQL = "select * from opportunity;";

	public List<Opportunity> getOpportunities() {

		List<Opportunity> Opportunities = new ArrayList<Opportunity>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(SQL);

		for (Map<String, Object> row : rows) {
			Opportunity user = new Opportunity();

			user.setOid((Integer) row.get("oid"));
			user.setDescription((String) row.get("description"));
			user.setLocation((String) row.get("location"));
			user.setSkills((String) row.get("skills"));
			user.setOpeningcount((Integer) row.get("openingcount"));
			user.setProjectduration((Integer) row.get("projectduration"));
			user.setLastdate((String) row.get("lastdate"));
			user.setExperience((String) row.get("experience"));
			user.setManagername((String) row.get("managername"));
			user.setManageremail((String) row.get("manageremail"));

			Opportunities.add(user);
		}

		return Opportunities;
	}

	public Opportunity getid(int id) {
		String SQL = "select * from opportunity where oid = ?";
		Opportunity user = jdbcTemplate.queryForObject(SQL, new Object[] { id }, new OpportunityRowMapper());
		return user;

	}

	public int update(int oid, String description, String location, String skills, int openingcount,
			int projectduration, String lastdate, String experience, String managername, String manageremail) {
		String SQL = "update opportunity set description = ?, location=?, skills=?, openingcount=?, projectduration=?, lastdate=?, experience=?, managername=?, manageremail=? where oid = ?";
		return jdbcTemplate.update(SQL, description, location, skills, openingcount, projectduration, lastdate,
				experience, managername, manageremail, oid);

	}

	public int updateuser(String id, String firstname, String lastname, String email, Timestamp timestamp) {

		String query = "insert into googleusers values(?,?,?,?,?);";
		return jdbcTemplate.update(query, id, firstname, lastname, email, timestamp);
	}

	public int validateRequest(String id, String email) {
		String query = "update google set email=? where id=?";
		return jdbcTemplate.update(query, email, id);
	}

	public int add(int oid, String description, String location, String skills, int openingcount, int projectduration,
			String lastdate, String experience, String managername, String manageremail) {
		String query = "insert into opportunity values(?,?,?,?,?,?,?,?,?,?);";
		return jdbcTemplate.update(query, oid, description, location, skills, openingcount, projectduration, lastdate,
				experience, managername, manageremail);
	}

	public int delete(int id) {
		String query = "delete from opportunity where oid=?;";
		return jdbcTemplate.update(query, id);
	}

	public List<Opportunity> getLocationCounter() {

		String query = "select location, count(*) as countlocation from opportunity group by location;";
		List<Opportunity> opp = new ArrayList<Opportunity>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);

		for (Map<String, Object> row : rows) {
			Opportunity locationcounter = new Opportunity();
			locationcounter.setLocation((String) row.get("location"));
			locationcounter.setCountLocation((Long) row.get("countlocation"));

			opp.add(locationcounter);
		}

		return opp;
	}

	public List<Opportunity> getSkillsCounter() {

		String query = "select skills, count(*) as countskills from opportunity group by skills;";
		List<Opportunity> opp = new ArrayList<Opportunity>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);

		for (Map<String, Object> row : rows) {
			Opportunity skillcounter = new Opportunity();
			skillcounter.setSkills((String) row.get("skills"));
			skillcounter.setCountSkills((Long) row.get("countskills"));

			opp.add(skillcounter);
		}

		return opp;
	}

	public List<Opportunity> getDescriptionCounter() {

		String query = "select description, count(*) as countdescription from opportunity group by description;";
		List<Opportunity> opp = new ArrayList<Opportunity>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);

		for (Map<String, Object> row : rows) {
			Opportunity descriptioncounter = new Opportunity();
			descriptioncounter.setDescription((String) row.get("description"));
			descriptioncounter.setCountDescription((Long) row.get("countdescription"));

			opp.add(descriptioncounter);
		}

		return opp;
	}

	public List<Opportunity> getExperienceCounter() {

		String query = "select experience, count(*) as countexperience from opportunity group by experience;";
		List<Opportunity> opp = new ArrayList<Opportunity>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);

		for (Map<String, Object> row : rows) {
			Opportunity experiencecounter = new Opportunity();
			experiencecounter.setExperience((String) row.get("experience"));
			experiencecounter.setCountExperience((Long) row.get("countexperience"));

			opp.add(experiencecounter);
		}

		return opp;
	}

}
