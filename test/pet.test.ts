import got from 'got';
import {strict as assert} from 'assert'
import { sortAndDeduplicateDiagnostics } from 'typescript';

describe('User can', function () {
  it('receive pet by his id', async function () {
    const response = await got('http://93.126.97.71:10080/api/pet/1')
    const body = JSON.parse(response.body)

    assert(body.id == 1, `Expect API to return pet with id 1, but got ${body.id}`)
  })
})