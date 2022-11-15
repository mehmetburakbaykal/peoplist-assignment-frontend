
# Talent Sourcing System

It belongs to the peoplist project of the task lookup company.

This is a Full stack application by using Spring boot and React Js.  
MySQL is used for database. The information kept in the candidate object is;
- Name-Surname,
- Contact Informations(Phone Number, Email Adress),
- Previous Interactions(Called,Mail Sent),
- Candidate Status(Sourced, Interviewing, Offer Sent, Hired).


## API Usage

#### Create Items

```http
  POST /candidate/add
```
#### Get All Items

```http
  GET /candidate/getAllCandidates
```

#### Delete Items

```http
  DELETE /candidate/remove/{id}
```

#### Edit Items

```http
  PUT /candidate/edit/{id}
```