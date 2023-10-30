// config/default.ts

export default {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCDVqVG9nPV5R9XG09wzCFaxgCyabjKEPlC+H+Y40FrkBF9Fojg
WRjguEazezU7Zrvvvqc2FoLCUO4yMSTspB/hn+I9qfnMkBMk1UqG1DRH9t5mxL/C
82tdh3jjZ7IJ2g5S5Bg0ugUXijE9RJbfcpbHgzB5VLsbHS6GyKZqWKv78wIDAQAB
AoGAfK7c6Kk+/mgtgHwkxmiDobEnKDjFfM7wU2uldncHvB1g/OdPuevbejp2pBzr
RCEbeVX9V5O3PtGlz3BoJV8KA7xpZttHRd7qWdD3jNU+YoJ+RoDjprkGqNwn3EDh
jRvL3ipml1hXy07+uHz8eA8yqGZO5ICmhtJdJyQ97nkN+gECQQDgwo+KArIN+k+O
wGrsPqR4zyauH0DMynFo2zgLkQ/jgeVamzaemASThKjt+v9fKKOElmtEmJbxZuT5
1LgBr/6hAkEAlZfykvypcZq5DTECmw0C2d0MBCa/dQQgzx3yjrtvGECLd10v4gV3
qdYOxsWHN11z+vNqIqeriWn5sSwkmdJWEwJBAKYfR6Zy/ZWVN+5DzAOW/UuJmIZD
9UooKxCcTt1Ft5+pJ5MDe6hWpbM+7vkOdmeoCsv5vYjy20XLjlwVXHdq1GECQQCL
eGVTIXohTu3lHKKfSNw1n1/Kpw2t3bFxKSyyYpJLfDILkbhI9GwCzm5saFGPDvRJ
LpTvxn+p2EJSKyPcvjw9AkBMxxvJ2zQJw4L5oB79eTXurEgFzrM+PUpWD4fM7R6i
qPP3DgNRWX+ehs9eqtzBOxvOjFcSNpOltpR8Xzn0O00X
-----END RSA PRIVATE KEY-----`,
}