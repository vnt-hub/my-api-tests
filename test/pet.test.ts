import got from 'got';
import {strict as assert} from 'assert'
import {URLSearchParams} from 'url'
import { sortAndDeduplicateDiagnostics } from 'typescript';

describe('User can', function () {
  it('receive pet by his id', async function () {
    const response = await got('http://localhost:8080/api/pet/1')
    const body = JSON.parse(response.body)

    assert(body.id == 1, `Expect API to return pet with id 1, but got ${body.id}`)
  })
  it('can be received by status', async function () {
    let response  = await got('http://localhost:8080/api/pet/findByStatus', {
      searchParams: { status: 'available'}
    })
    let body = JSON.parse(response.body)
    assert(body.length > 0)

    response  = await got('http://localhost:8080/api/pet/findByStatus', {
      searchParams: { status: 'pending'}
    })
    body = JSON.parse(response.body)
    assert(body.length > 0)

    response  = await got('http://localhost:8080/api/pet/findByStatus', {
      searchParams: { status: 'sold'}
    })
    body = JSON.parse(response.body)
    assert(body.length > 0)

    response  = await got('http://localhost:8080/api/pet/findByStatus', {
      searchParams: new URLSearchParams({ status: ['pending', 'available']})
    })
    body = JSON.parse(response.body)
    assert(body.length > 0)
  })
  it('can be received by tag', async function () {
    
  })
})