

describe("Get /persons/overweight", () => {
  it("Should Return Count of Overweight ", (done) => {
    request(app).get("/api/persons/overweight")
    .expect(200,done)
//     .then(res=>{
//         assert(res.body,6)
//         done()
//     })
//     .catch(err => done(err))
  });
});

after(() => {
  process.exit();
});
