
//1) Find all children with an average score of 4.2

db.getCollection('students').find({avgScore:4.2})

//2) Find all children from 1st grade

db.getCollection('students').find({class:1})

//3) Find all children studying physics

db.getCollection('students').find({lessons:"physics"})

//4) Find all children whose parents work in science (scientist)

db.getCollection('students').find({"parents.profession":"scientist"})

//5) Find children with an average score greater than 4

db.getCollection('students').find({avgScore:{$gt:4}})

//6) Find the best student

db.getCollection('students').find().sort({avgScore: -1}).limit(1)

//7) Find the worst student

db.getCollection('students').find().sort({avgScore: 1}).limit(1)

//8) Find the top 3 students

db.getCollection('students').find().sort({avgScore: -1}).limit(3)

//9) Find the average score for the school

db.getCollection('students').aggregate([
  {
    $group: {
      "_id": 0,
      AverageScoreOfSchool: {
      $avg: "$avgScore"

      }
    }
  }
])
  //10) Find the average score of children studying mathematics or physics

db.getCollection('students').aggregate([
 { "$match": {
     $or: [
     { "lessons": 'physics'},
     { "lessons": 'mathematics'},
     ]
    }},
    {$group: 
        {_id: 0, avg: {$avg:"$avgScore"} }
    }
    ])

//11) Find the average score for 2nd grade

db.getCollection('students').aggregate([
 { "$match": {
     
     "class":2
     
    }},
    {$group: 
        {_id: 0, avg: {$avg:"$avgScore"} }
    }
    ])

//12) Find children with incomplete families

db.getCollection('students').find({
   $or:[{"parents":{$size:1}},{"parents":{$exists:0}}]

})

//13) Find parents who do not work

db.getCollection("students").find({"parents.profession":null})

//14) Arrange non-working parents as waiters

db.getCollection('students').update(
  {$and:[
    {parents:{$ne:null}},
    {"parents.profession":null}  
      ]}, 
  {$set: { "parents.$.profession":"waiter"}}, 
  {multi:true} 
)

//15) Expel children who have an average score of less than 2.5

db.getCollection("students").remove({avgScore:{$lt:2.5}})

//16) Children whose parents work in education (teacher) put 5

db.getCollection('students').update(
  {$and:[
    {parents:{$ne:null}},
    {"parents.profession":"teacher"}  
      ]}, 
  {$set: { "avgScore":5}}, 
  {multi:true} 
)
  //17) Find children who study in elementary school (up to 5th grade) and study physics (physics)

db.getCollection("students").find(
  {$and:[
  {"class":{$lt:5}},
  {"lessons":"physics"}
  ]}
  )
