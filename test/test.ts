import app from '../index';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
chai.use(chaiHttp);
const assert = chai.assert;
chai.use(chaiHttp);
const expect = chai.expect;
const hello = () => 'Hello world!';
describe('unit test', () => {

    it('unit test success', () => {
        const result = hello();
        expect(result).to.equal('test success!');
    });

});

describe('integration test', () => {
    it('post', (done) => {
        chai.request('http://localhost:3000').post('/create_seller')
            .send({
                name: "ahmed3",
                email: "ahmed5@gmail.com",
                phone: "0122113532",
            })
            .then((res: any) => {
                chai.expect(res.status).to.eql(201);// expression which will be true if response status equal to 200 
                done();
            });
    }).timeout(8000);
});



