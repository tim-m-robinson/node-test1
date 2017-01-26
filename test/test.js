//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Example Test', () => {
/*
 * Test the /GET route
 */
  describe('GET /', () => {
      it('it should say Hi there!', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                should.not.exist(err);
                res.should.have.status(200);
                res.should.be.text;
                res.text.should.be.eql('Hi there!');
              done();
            });
      });
  });

});