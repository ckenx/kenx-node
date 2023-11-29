import type { Collection } from 'mongodb'
import type { DatabasePlugin } from '../../../packages/node/dist/types'

type UserQuery = {
  email: string
}

async function getUser( collection: Collection, query: UserQuery ){
  return await collection.findOne( query, { projection: { _id: 0 } })
}

export default ( databases: { [index: string]: DatabasePlugin<any> } ) => {
  if( !databases ) return

  const
  db = databases.default.getConnection(),
  userCol = db.collection('users')

  return {
    getUser: async ( query: UserQuery ) => { return await getUser( userCol, query ) }
  }
}