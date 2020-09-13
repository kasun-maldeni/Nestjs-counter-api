import { Pool } from 'pg';
const pool = new Pool({
  database: 'counter_store',
  password: 'test'
})

export default pool