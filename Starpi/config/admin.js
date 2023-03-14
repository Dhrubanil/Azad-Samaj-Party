module.exports = ({ env }) => ({
  auth: {
    secret: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODYzOTQ0MCwiaWF0IjoxNjc4NjM5NDQwfQ.bOD1k2oaHcRWb4HuLAfqjbNRnAx_Gzspxb7Z24XhhBU',
  },
  apiToken: {
    salt: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODYzOTQ0MCwiaWF0IjoxNjc4NjM5NDQwfQ.bOD1k2oaHcRWb4HuLAfqjbNRnAx_Gzspxb7Z24XhhBU',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
