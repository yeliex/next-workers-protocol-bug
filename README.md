# next-workers-protocol-bug

## Reproduce

```shell
# start server
npm run dev
# OR
npm run build && npm start
# OR set `next.config.js`/output='standalone'
npm run build && node .next/standalone/server,js

# curl
curl -s -o /dev/null -vv -H "x-forwarded-proto:https" http://localhost:3000
# OR request api
curl -s -o /dev/null -vv -H "x-forwarded-proto:https" http://localhost:13000/api/test
```

**EXPECT**
`request.nextUrl.protocol => http`

**GOT**
`request.nextUrl.protocol => https`
