
db.members.insertMany([
  { name: "Ravi", address: { city: "Chennai", pin: "600001" }, borrowed: ["Python Basics", "MongoDB Guide"], fee: 0 },
  { name: "Sita", address: { city: "Madurai", pin: "625001" }, borrowed: ["MongoDB Guide"], fee: 50 },
  { name: "Kumar", address: { city: "Chennai", pin: "600028" }, borrowed: [], fee: 0 },
  { name: "Lakshmi", address: { city: "Coimbatore", pin: "641001" }, borrowed: ["Python Basics"], fee: 120 }
])
show dbs
show collections


db.members.find(
  { "address.city": "Chennai" },
  { _id: 0, name: 1, address: 1 }
)


db.members.find(
  { borrowed: "MongoDB Guide" },
  { _id: 0, name: 1, borrowed: 1 }
)

db.members.find(
  { borrowed: { $all: ["Python Basics", "MongoDB Guide"] } },
  { _id: 0, name: 1 }
)

db.members.find(
  { borrowed: { $size: 0 } },
  { _id: 0, name: 1 }
)


db.members.updateOne(
  { name: "Sita" },
  { $set: { "address.city": "Chennai" } }
)


db.members.countDocuments({ fee: { $gt: 0 } })
db.members.drop()
