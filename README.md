# Dynamic Stable bUSD

- shorthand name: `dynamic bUSD`
- full name: `Dynamic Stable bUSD`
- symbol: `DSB`
- decimals: `18`
- icon: Ð

## dashboard

simple [dashboard](https://github.com/emptysetsquad/dollar-dashboard) for interacting with the døllar protocol.

## whitepaper

is available [here](https://github.com/bitdeep/dsb-protocol/blob/master/whitepaper.pdf).

## contracts
### mainnet
- `0x6Bf977ED1A09214E6209F4EA5f525261f1A2690a` **DAO (DSDS)** - Root
  proxy to: `0x13084c00f4f9b31896cae4aa75f9aca60ef41b2e` Implementation.
  
- `0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3` **DSD** - Dollar
- `0xe2e279d1b911bad880d1104a750dfcd262fb6cf4` **Oracle** - (created by Root)
- `0x66e33d2605c5fb25ebb7cd7528e7997b0afa55e8` **UniswapV2 USDC:DSD Pair**
- `0x70A87e1b97436D2F194B8B9EBF337bFc7521C70f` **LP Incentivation Pool** (Pool)

### testnet
- `0xED402d14c5d3Aa6Dec02d8702D4b9571aA5C11FA` **DAO (DSDS)** - Root
  proxy to: `0x5dD9b8805abDC763582B21f95ed119FC26b13c05` Implementation.

- `0x0` **DSD** - Dollar
- `0x0` **Oracle** - (created by Root)
- `0x0` **UniswapV2 USDC:DSD Pair**
- `0x0` **LP Incentivation Pool** (Pool)


## audit of forked codebase

is available [here](https://github.com/dynamicdollardevs/dsd/blob/master/audit/REP-Dollar-06-11-20.pdf).

## disclaimer
this project is an experiment - the protocol is audited, and we've put a significant amount of work into testing as well as generally de-risking the design of its core mechanism, however participants should take great caution as bugs resulting in loss of funds are always a possibility.

```
Copyright 2020 Dynamic Dollar Devs, based on the works of the Empty Set Squad

Licensed under the Apache License, Version 2.0 (the "License");
you may not use the included code except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```